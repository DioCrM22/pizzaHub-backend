"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    async execute({ email, password }) {
        // Verificar se o email existe.
        const user = await prisma_1.default.user.findFirst({
            where: {
                email: email
            }
        });
        if (!user) {
            throw new Error("User/password incorrect");
        }
        // preciso verificar se a senha que ele mandou está correta.
        const passwordMatch = await (0, bcryptjs_1.compare)(password, user.password);
        if (!passwordMatch) {
            throw new Error("User/password incorrect");
        }
        // Se deu tudo certo vamos gerar o token pro usuario.
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET não está definido");
        }
        const token = (0, jsonwebtoken_1.sign)({
            name: user.name,
            email: user.email
        }, secret, {
            subject: user.id,
            expiresIn: '30d'
        });
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        };
    }
}
exports.AuthUserService = AuthUserService;

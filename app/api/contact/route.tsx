import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_ADDRESS = "zubzerozd.dev@gmail.com";
const FROM_ADDRESS = "Contact Form <onboarding@resend.dev>";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("RESEND_API_KEY no está definida");
            return NextResponse.json(
                { error: "Servicio de correo no configurado" },
                { status: 503 }
            );
        }

        const body = await req.json();
        const { email, name, message } = body;

        if (!email || !name || !message) {
            return NextResponse.json(
                { error: "Faltan campos requeridos" },
                { status: 400 }
            );
        }

        // Instanciado aquí y no a module scope: Next 16 evalúa este módulo
        // durante "collecting page data" y Resend lanza si la key falta.
        const resend = new Resend(apiKey);

        const data = await resend.emails.send({
            from: FROM_ADDRESS,
            to: [TO_ADDRESS],
            replyTo: email,
            subject: `Nuevo mensaje de ${name}`,
            text: `Has recibido un mensaje de contacto:\n\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        });

        if (data.error) {
            console.error("Error de Resend:", data.error);
            return NextResponse.json({ error: data.error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error interno:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}

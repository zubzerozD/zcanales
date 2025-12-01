import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, name, message } = body;

        if (!email || !name || !message) {
            return NextResponse.json(
                { error: "Faltan campos requeridos" },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",

            // CAMBIO AQUÍ: Pon tu correo registrado tal cual aparece en el error
            to: ["zubzerozd.dev@gmail.com"],

            subject: `Nuevo mensaje de ${name}`,
            text: `Has recibido un mensaje de contacto:\n\nNombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        });

        if (data.error) {
            console.error("Error de Resend:", data.error); // <--- LOG PARA VER EL ERROR
            return NextResponse.json({ error: data.error }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error interno:", error); // <--- LOG PARA VER EL ERROR
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
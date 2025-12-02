export default function TermsPage() {
    return (
        <div className="bg-zinc-900 min-h-screen flex flex-col">
            <div className="flex-grow pt-24 px-6 pb-12">
                <div className="max-w-3xl mx-auto prose prose-invert prose-zinc prose-headings:font-display">
                    <h1>Términos y Condiciones</h1>
                    <p className="lead">Última actualización: {new Date().toLocaleDateString()}</p>

                    <p>
                        Bienvenido a <strong>zubzerozd.com</strong>. Al contratar nuestros servicios de soporte técnico o desarrollo web, usted acepta los siguientes términos y condiciones. Por favor, léalos cuidadosamente.
                    </p>

                    <h3>1. Servicios de Soporte Técnico</h3>
                    <ul>
                        <li><strong>Respaldo de Datos:</strong> Es responsabilidad exclusiva del cliente tener una copia de seguridad (backup) de sus datos antes de cualquier intervención técnica. ZubzerozD no se hace responsable por la pérdida de información durante procesos de formateo, reparación de disco o limpieza de virus.</li>
                        <li><strong>Garantía:</strong> Ofrecemos una garantía de 30 días sobre la mano de obra realizada. Esta garantía no cubre nuevos virus, mal uso del equipo por parte del usuario o fallas de hardware preexistentes no detectadas inicialmente.</li>
                        <li><strong>Software:</strong> No instalamos software pirata. Las licencias (Windows, Office, Antivirus) deben ser provistas por el cliente o adquiridas legalmente a través de nosotros.</li>
                    </ul>

                    <h3>2. Servicios de Desarrollo Web</h3>
                    <ul>
                        <li><strong>Pagos:</strong> Para iniciar cualquier proyecto web, se requiere un anticipo del 50%. El 50% restante se abona contra entrega del proyecto finalizado y aprobado.</li>
                        <li><strong>Plazos:</strong> Los tiempos de entrega son estimados y dependen de la fluidez en la entrega de material (textos, logos, fotos) por parte del cliente.</li>
                        <li><strong>Mantenimiento:</strong> Una vez entregado el sitio web, cualquier cambio adicional o mantenimiento mensual se cotizará por separado, a menos que se haya contratado un plan de mantenimiento específico.</li>
                    </ul>

                    <h3>3. Propiedad Intelectual</h3>
                    <p>
                        Todo el código fuente desarrollado a medida para el cliente pasará a ser propiedad del cliente una vez saldado el pago total. Sin embargo, ZubzerozD se reserva el derecho de utilizar el proyecto en su portafolio personal y reutilizar fragmentos de código genérico (librerías, funciones utilitarias) en otros proyectos.
                    </p>

                    <h3>4. Limitación de Responsabilidad</h3>
                    <p>
                        En la máxima medida permitida por la ley chilena, ZubzerozD no será responsable por daños indirectos, incidentales o consecuentes (incluyendo pérdida de ganancias o datos) que surjan del uso de nuestros servicios.
                    </p>

                    <h3>5. Modificaciones</h3>
                    <p>
                        Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigencia inmediatamente después de su publicación en este sitio web.
                    </p>

                    <h3>6. Contacto</h3>
                    <p>
                        Si tiene dudas sobre estos términos, por favor contáctenos a través de nuestro formulario web o directamente al correo <strong>zubzerozd.dev@gmail.com</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}
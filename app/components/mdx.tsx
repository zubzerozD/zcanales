import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";

// Función para ejecutar el código MDX compilado
const useMDXComponent = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

const components = {
	Image,
	a: Link,
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	// Si no hay código (posiblemente por un error de Velite o archivo vacío), no renderizamos nada para evitar crash
	if (!code) return null;

	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
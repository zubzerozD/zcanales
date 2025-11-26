import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";

const useMDXComponent = (code: string) => {
	const fn = new Function(code);
	return fn({ ...runtime }).default;
};

const components = {
	Image,
	a: Link,
	// Aquí podrías agregar tus componentes personalizados para MDX si los tienes
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	);
}
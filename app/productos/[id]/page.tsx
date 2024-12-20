interface ProductoProps {
    params: { id: string };
}

const Producto = ({ params }: ProductoProps) => {
    const { id } = params;

    return (
        <div>
            <h1>Producto {id}</h1>
            <p>Este es el producto con ID: {id}</p>
        </div>
    );
};

export default Producto;

// Genera los parámetros estáticos para cada producto
export async function generateStaticParams() {
    const productos = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];

    return productos.map((producto) => ({
        id: producto.id,
    }));
}

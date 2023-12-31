import { DataView } from "primereact/dataview";
import { useEffect, useState } from "react";
import NovaMovimentacaoModal from "../components/nova-movimentacao";

type Product = {
    id?: string;
    code?: string;
    name: string;
    description: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    rating?: number;
    [key: string]: string | string[] | number | boolean | undefined;
};

const BalancoPage = () => {
    const [movimentacoes, setMovimentacoes] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/primefaces/sakai-react/master/sakai-ts/public/demo/data/products-small.json')
            .then((res) => res.json())
            .then((d) => setMovimentacoes(d.data));
    }, []);

    const itemTemplate = (product: Product) => {
        return (
            <div className="flex flex-column w-full py-4">
                <div className="flex flex-column sm:flex-row justify-content-start sm:justify-content-between align-items- start sm:align-items-center">
                    <div className="text-xl">{product.name}</div>
                    <span className="text-sm text-300">R$ 158,58 ({product.price}%)</span>
                </div>
                <div className="text-sm text-300 mt-2">Última atualização: {product.code}</div>
            </div>
        );
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="flex align-items-center justify-content-between">
                        <h5 className="text-xl m-0">Balanço</h5>
                        <NovaMovimentacaoModal />
                    </div>
                    <DataView
                        className="mt-2"
                        value={movimentacoes}
                        itemTemplate={itemTemplate}
                        paginator
                        rows={10} />
                </div>
            </div>
        </div>
    );
};

export default BalancoPage;

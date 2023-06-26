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
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <div className="flex align-items-center justify-content-between">
                        <h5 className="m-0">Balanço</h5>
                        <NovaMovimentacaoModal />
                    </div>
                    <DataView
                        value={movimentacoes}
                        itemTemplate={itemTemplate}
                        paginator
                        rows={5} />
                </div>
            </div>
        </div>
    );
};

export default BalancoPage;

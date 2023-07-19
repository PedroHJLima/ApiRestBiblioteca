import React from "react";

//{produto} -> props para produto = const produto = props.produto
export default function CardProduto({produto}) {
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
				<div className="w3-card">
					<div className="w3-container w3-center">
                    <img src={produto.imagem} style={{width: "70%"}} />
                    <h5>{produto.nome}</h5>
                    <h3 className="w3-blue">
                    {'R$ '+produto.preco.toLocaleString('pt-br',{minimumFractionDigits:2})}                    </h3>
                </div>
            </div>
        </div>
    )

}

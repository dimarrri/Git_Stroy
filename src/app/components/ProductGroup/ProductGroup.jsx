import React, { useState } from "react";
import classnames from 'classnames';

import imagine from "./../../__img/plitca.jpg";

function ContainerProductGroup({ mirror, ...props }) {

	return (
		<div className={`wrapper-card-group-${mirror}`}>
			<ProductCard configuration="vertical"></ProductCard>
			<ProductCard configuration="horizontal-top"></ProductCard>
			<ProductCard configuration="horizontal-bottom"></ProductCard>
		</div>
	)
}


function ProductCard({ configuration, ...props }) {
	const [statusPreparator, setStatusPreparator] = useState(false)
	return (
		<div className={`wrapper-card__item-${configuration}`} style={{ backgroundImage: `url(${imagine})` }}
			onMouseEnter={(_) => setStatusPreparator(true)} onMouseLeave={(_) => setStatusPreparator(false)} >
			<div className="title-card-item" >
				<h3>Укладка плитки</h3>
				<span>1200р/м&#178;</span>
				<div className={classnames({
					["hidden-button"]: true,
					["hidden-button--show"]: statusPreparator,
					["hidden-button--hide"]: !statusPreparator
				})}>
					<button type="button" onClick={() => console.log('click')} className="calculate-price-work">Расчитать</button>
					<button type="button" onClick={() => console.log('click')} className="add-to-card"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
				</div>
			</div>

		</div>
	)
}


export default ContainerProductGroup;
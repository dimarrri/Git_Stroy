import React, { useState } from "react";
import classnames from 'classnames';

import "./style/main_style_productGroup.scss";

import imagine from "./../../__img/1.jpg";

function ContainerProductGroup({ locationBlock, ...props }) {

	return (
		<div className="container-group-product">
			<ProductCard configuration={`vertical-${locationBlock}`}></ProductCard>
			<ProductCard configuration={`horizontal-top-${locationBlock}`}></ProductCard>
			<ProductCard configuration={`horizontal-bottom-${locationBlock}`}></ProductCard>
		</div>
	)
}


/**
 * @param {*} param0 
 */
	
function ProductCard({ configuration, ...props }) {
	const [statusStickQuick, setStatusStickQuick] = useState(false)
	return (
		<div className={`container-product__${configuration}`} style={{ backgroundImage: `url(${imagine})` }}
			onMouseEnter={(_) => setStatusStickQuick(true)} onMouseLeave={(_) => setStatusStickQuick(false)} >
			<div className={`wrapper-content-product__${configuration.split("-", 1)[0]}`} >
				<div className={`title-container title-container-${configuration.split("-", 1)[0]}`}>
					<h3>Укладка плитки</h3>
					<span>1200р/м&#178;</span>
				</div>
				<div className={classnames({
					["stick-quick-access"]: true,
					["stick-quick-access--show"]: statusStickQuick,
					["stick-quick-access --hide"]: !statusStickQuick
				})}>
					<button type="button" onClick={() => console.log('click')} className="calculate-price-work">Расчитать</button>
					<button type="button" onClick={() => console.log('click')} className="add-to-card"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
				</div>
			</div>
		</div>
	)
}


export default ContainerProductGroup;
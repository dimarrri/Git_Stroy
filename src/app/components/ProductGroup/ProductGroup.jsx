import React, { useState } from "react";
import classnames from 'classnames';

import "./style/main_style_productGroup.scss";

import imagine from "./../../__img/1.jpg";



function ContainerProductGroup({ index, ...props }) {
	const dato = Number.isInteger(index / 2) ? "right-side" : "left-side"
	const locationBlockInGrid = ["vertical", "horizontal-top", "horizontal-bottom"]
	return (
		<div className="container-group-product">
			{ locationBlockInGrid.map((className, indexKey) => (
				<ProductCard
					classPosition={className}
					renderingSide={`container-${className}__${dato}`}
					key={String(indexKey)}>
				</ProductCard>
			))}
		</div>
	)
}

/**
 * @param {*} param0 
 */

function ProductCard({ classPosition, renderingSide, ...props }) {
	const [statusStickQuick, setStatusStickQuick] = useState(false)
	return (
		<div className={`container-product__${classPosition} ${renderingSide}`}
			style={{ backgroundImage: `url(${imagine})` }}
			onMouseEnter={(_) => setStatusStickQuick(true)}
			onMouseLeave={(_) => setStatusStickQuick(false)}>
			<div className={`wrapper-content-product`} >
				<div className={classnames({
					["stick-quick-access"]: true,
					["stick-quick-access--show"]: statusStickQuick,
					["stick-quick-access--hide"]: !statusStickQuick,
				})}>
					<h3>Укладка плитки</h3>
					<span>134р/м&sup2;</span>
					<span className={classnames({ [`stick-quick-separator stick-quick-separator${statusStickQuick ? "--show" : "--hide"}`]: true, })}></span>
					<div className={classnames({
						[`stick-quick-manager__${classPosition.split("-")[0]}`]: true,
						[`stick-quick-manager-${classPosition.split("-")[0]}--show`]: statusStickQuick,
						[`stick-quick-manager-${classPosition.split("-")[0]}--hide`]: !statusStickQuick,
					})}>
						{["Длинна", "Ширина", "Высота"].map((value, index) => (
							<div className="fast-field-calc-length-room">
								<input key={String(index)} placeholder="м"></input>
								<span>{value}</span>
							</div>
						))}

						<div className="column-sum-quadrature-room">
							<input placeholder="м" value="" readOnly value="24м2"></input>
							<span>Квадратура</span>
						</div>

					</div>
					<div className={classnames({
						["stick-quick-block-button"]: true,
						["stick-quick-block-button--show"]: statusStickQuick,
						["stick-quick-block-button--hide"]: !statusStickQuick,
					})}>
						<h6 className="sum__stick-quick"><span>Итого:</span>12333p</h6>
						<button type="button" data-calculate="w"><i class="fa fa-calculator" aria-hidden="true"></i></button>
						<button type="button" data-detail="h"><i class="fa fa-newspaper-o" aria-hidden="true"></i></button>
						<button type="button" data-add-basket="x"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>

					</div>

				</div>
			</div>
		</div>
	)
}


export default ContainerProductGroup;
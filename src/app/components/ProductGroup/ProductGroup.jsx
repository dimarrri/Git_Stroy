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
					<span className={classnames({
						["stick-quick-separator"]: true,
						["stick-quick-separator--show"]: statusStickQuick,
						["stick-quick-separator--hide"]: !statusStickQuick,
					})}></span>
					<div className={classnames({
						[`stick-quick-manager__${classPosition.split("-")[0]}`]: true,
						["stick-quick-manager--show"]: statusStickQuick,
						["stick-quick-manager--hide"]: !statusStickQuick,
					})}>

						<div className="fast-field-length-room">
							<span>Длинна</span>
							<input placeholder="м"></input>
						</div>
						<div className="fast-field-width-room"> 

						</div>
						<div className="fast-field-height-room"> 

						</div>

					</div>

				</div>
			</div>
		</div>
	)
}


export default ContainerProductGroup;
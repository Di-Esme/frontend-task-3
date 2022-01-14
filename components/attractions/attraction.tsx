export interface AttractionBlock {
	name: string
	image: string
	text: string
}

export interface AttractionProps {
	attraction: AttractionBlock
}

export function Attraction(props: AttractionProps) {
	return (
		<div className="block__item">
			<div className="block__boximg">
				<img className="block__img" src={props.attraction.image} />
			</div>
			<div className="block__boxtext">
				<h3 className="block__name-item">{props.attraction.name}</h3>
				<p className="block__text-item">{props.attraction.text}</p>
			</div>
		</div>
	)
}
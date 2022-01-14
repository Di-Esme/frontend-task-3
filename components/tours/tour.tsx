export interface TourBlock {
	class: string,
	title: string,
	description: string,
	price: string
}

export interface TourProps {
	tour: TourBlock
}

export function Tour(props: TourProps) {
	return (
		<div className={props.tour.class}>
			<div className="container">
				<h4 className="tour__title">{props.tour.title}</h4>
				<p className="tour__short-description">
					{props.tour.description}
				</p>
				<span className="tour__price">
					От <span>{props.tour.price}</span> р.
				</span>
				<button className="tour__button">
					Купить
				</button>
			</div>
		</div>
	)
}
import { useState } from "react"
import { Tour, TourBlock } from "./tour"

const ourTours: TourBlock[] = [
	{
		class: "tour",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "10000",
	},
	{
		class: "tour",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "20000",
	},
	{
		class: "tour tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "30000",
	},
	{
		class: "tour tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "40000",
	},
	{
		class: "tour tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "50000",
	},
	{
		class: "tour tour--hidden",
		title: "Название",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sonsectetur, adipisicing elit. Adipisci s",
		price: "60000",
	},

]

export function Tours() {
	const [buttonName, setButtonName] = useState("Больше туров")
	const [clickButtonMoreTours, setclickButtonMoreTours] = useState(false)
	const ClickMoreTours = () => {
		if (buttonName == "Больше туров") {
			setButtonName("Скрыть туры")
			setclickButtonMoreTours(!clickButtonMoreTours)
		} else {
			setButtonName("Больше туров")
			setclickButtonMoreTours(!clickButtonMoreTours)
		}
	}

	return (
		<section id="tours" className="tours">
			<h3 className="tours__title">
				Туры
			</h3>
			<div className={`tours__list${clickButtonMoreTours ? ' tours_list--all-hidden-visible' : ''}`} >
				{
					ourTours.map((item: TourBlock, index: number) =>
						<Tour tour={item} key={`tours_${index}`} />
					)
				}
				<button className="btn btn--toggle-items" onClick={ClickMoreTours}>{buttonName}</button>
			</div>
		</section>
	)
}
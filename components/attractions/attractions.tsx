import { Attraction, AttractionBlock } from "./attraction"

const ourAttraction: AttractionBlock[] = [
	{
		name: "Тропа предков",
		image: "img/sightseens.png",
		text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpretiumorci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornarecondimentumfermentum.Integer mattis pretium tortor dictum tristique.Donec in congue mauris.Quisque vitaenisiultricies, efficitur odio vel, porta nulla.Donec porta, mauris nec pharetra mollis, diam loremluctusvelit, nec ultricies nunc quam posuere dui.Donec at nisl lorem.Sed vitae sapien metus.In eratfelis, pharetra vitae libero eu, posuere accumsan odio...",
	},
	{
		name: "Озеро Беле",
		image: "img/sightseens.png",
		text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpretiumorci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornarecondimentumfermentum.Integer mattis pretium tortor dictum tristique.Donec in congue mauris.Quisque vitaenisiultricies, efficitur odio vel, porta nulla.Donec porta, mauris nec pharetra mollis, diam loremluctusvelit, nec ultricies nunc quam posuere dui.Donec at nisl lorem.Sed vitae sapien metus.In eratfelis, pharetra vitae libero eu, posuere accumsan odio...",
	},
	{
		name: "Сундуки",
		image: "img/sightseens.png",
		text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturpretiumorci at rutrum pellentesque. Vivamus id nunc at ante vulputate egestas. Sed varius elit ornarecondimentumfermentum.Integer mattis pretium tortor dictum tristique.Donec in congue mauris.Quisque vitaenisiultricies, efficitur odio vel, porta nulla.Donec porta, mauris nec pharetra mollis, diam loremluctusvelit, nec ultricies nunc quam posuere dui.Donec at nisl lorem.Sed vitae sapien metus.In eratfelis, pharetra vitae libero eu, posuere accumsan odio...",
	},
]

export function Attractions() {
	return (
		<section id="attractions" className="block">
			<h2 className="block__title">Достопримечательности</h2>
			<div className="block__container">
				{
					ourAttraction.map((item: AttractionBlock, index: number) =>
						<Attraction attraction={item} key={`attraction_${index}`} />)
				}
			</div>
		</section>
	)
}
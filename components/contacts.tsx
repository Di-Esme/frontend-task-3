export function Contacts() {
	return (
		<section id="contacts" className="contacts">
			<h2 className="contacts__title">
				Контакты
			</h2>
			<ul className="contacts__data">
				<li>655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</li>
				<li>
					8 (3902) 22-53-35
					<br />
					8 (3902) 24-30-71
				</li>
				<li>kancler@vskhakasia.ru</li>
			</ul>
			<iframe className="contacts__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A5b2d03754473e3b59ed4fe7c28dfdc7964a8360aeeb7785ae1430a4f091e3aff&amp;source=constructor" width="783" height="400" frameBorder="0"></iframe>
		</section>
	)
}
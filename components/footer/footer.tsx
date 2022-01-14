import { FooterNavigation } from "./footer-navigation"

export function Footer() {
	return (
		<footer className="footer">
			<FooterNavigation />
			<ul className="footer__contacts">
				<li>Контакты</li>
				<li>655019, Республика Хакасия, г. Абакан, пр. Ленина, д. 67</li>
				<li>Справочная служба: 8 (3902) 22-53-35, факс: 8 (3902) 24-30-71</li>
				<li>Электронная почта: kancler@vskhakasia.ru</li>
			</ul>
			<span className="footer__copirate">
				Официальный сайт Агенства Туризма Республики Хакасия  ©  2021
			</span>
		</footer>
	)
}
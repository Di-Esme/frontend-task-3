
export interface MenuVisible { isMenuVisible: boolean }

export function HeaderNavigation(props: MenuVisible) {
	return (
		<nav className={`header__menu${props.isMenuVisible ? ' active' : ''}`}>
			<ul className="header__list">
				<li><a href="#welcome" className="header__link">Главная</a></li>
				<li><a href="#attractions" className="header__link">Достопримечательности</a></li>
				<li><a href="#tours" className="header__link">Туры</a></li>
				<li><a href="#contacts" className="header__link">Контакты</a></li>
			</ul>
		</nav>
	)
}
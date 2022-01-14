import { useState, useEffect } from "react"
import { HeaderNavigation } from "./header-navigation"


export function Header() {
	const [isMenuVisible, setMenuVisible] = useState<boolean>(false)
	const [isPageScrolled, setPageScrolled] = useState<boolean>(false)

	function onMenuClick() {
		setMenuVisible(!isMenuVisible);
	}

	const handlePageScroll = () => {
		if (window.scrollY > 100) {
			setPageScrolled(true)
		} else {
			setPageScrolled(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handlePageScroll)

		return () => window.removeEventListener('scroll', handlePageScroll)
	})

	return (
		<header className={`header${isPageScrolled ? ' header_scroll' : ''}`}>
			<div className="container">
				<div className="header__body">
					<a className="header__logo" href="#welcome"></a>
					<div className={`header__burger${isMenuVisible ? ' active' : ''}`} onClick={onMenuClick}>
						<span> </span>
					</div>
					<HeaderNavigation isMenuVisible={isMenuVisible} />
				</div>
			</div>
		</header >
	)
}
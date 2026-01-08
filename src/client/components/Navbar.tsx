import { links } from '../constants/Navbar'

function Navbar() {
  return (
    <header>
        <nav>
            <img src="/logo.svg" alt="Mariobook logo" />

            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>

            <div className="flex-center gap-3">
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
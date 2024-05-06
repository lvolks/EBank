import { aboutLinks, productsLinks, helpLinks } from "../constants"

const Footer = () => {
    return (
        <footer className="mt-20 border-t py-10 border-neutral-700">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <h3 className="text-md font-semibold mb-4">EBank</h3>
                    <ul className="space-y-2">
                        {aboutLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Products</h3>
                    <ul className="space-y-2">
                        {productsLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-md font-semibold mb-4">Need Help?</h3>
                    <ul className="space-y-2">
                        {helpLinks.map((link, index) => (
                            <li key={index}>
                                <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
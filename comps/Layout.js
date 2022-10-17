import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div classname = "content">
            <Navbar />
                { children }
            <Footer />
        </div>

    )
}

export default Layout
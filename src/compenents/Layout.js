const Layout = ({children}) => {
    return (
        <div className="main-container">
            <div className="main-screen">
                {children}
            </div>
        </div>
    )
}

export default Layout;
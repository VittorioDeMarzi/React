import "./Header.css" 
    
export default function Header() {
    return (
        <nav className="navbar">
            <div><h2>VDM.</h2></div>
            <ul>
                <li>projects</li>
                <li>skills</li>
                <li>contacts</li>
            </ul>
        </nav>
    )
}
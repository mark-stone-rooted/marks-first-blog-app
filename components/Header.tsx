import Image from "next/image";
import Link from "next/link";
import logoimg from 'public/assets/sampleLogo.png'

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2">

                <div className="flex items-center space-x-2">
                    <Link href="/">
                        <Image className="rounded-full object-cover" 
                        src={logoimg} 
                        width={100}
                        height={100}
                        alt="Logo" 
                        />
                    </Link>


                    </div>
                <div className="columns-4 right-header"><h2>right side of header</h2></div>
        </header>
        
    )
}
            
export default Header;
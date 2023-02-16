import Image from "next/image";
import Link from "next/link";
import logoimg from 'public/assets/sampleLogo.png'

function Header() {
    return (
        <header className="flex items-center justify-between space-x-2 grid-cols-12">

                <div className="flex items-center space-x-2 px-10 col-span-6">
                    <Link className="flex" href="/">
                        <Image className="rounded-full object-cover" 
                        src={logoimg} 
                        width={100}
                        height={100}
                        alt="Logo" 
                        />
                        <h1 className="text-2xl font-bold text-gray-900 leading-[5] px-10">Mark's Blog</h1>
                    </Link>


                    </div>
                <div className="right-header col-span-6"><h2>right side of header</h2></div>
        </header>
        
    )
}
            
export default Header;
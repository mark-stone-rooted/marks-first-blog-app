
import Image from 'next/image'
import logoimg from 'public/assets/sampleLogo.png'

function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        // TODO: Determine why I am not able to serve the logo from the assets folder...
        <div className="logo">
            <Image className="rounded-full object-cover" 
            src={logoimg} 
            width={50}
            height={50}
            alt="Logo" 
            />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo;


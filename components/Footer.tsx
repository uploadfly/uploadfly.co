import Link from "next/link"
import { SiGithub, SiTwitter } from "react-icons/si"

const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
  return (
    <div className="flex items-center justify-between px-5 py-5">
    <p className="capitalize">Uploadfly • {currentYear}</p>
        <div className="flex items-center gap-4 text-xl">
            <Link href={"https://x.com/uploadflycloud"} target="_blank">
                <SiTwitter/>
            </Link>
            <Link href={"https://github.com/uploadfly"} target="_blank">
                <SiGithub/>
            </Link>
        </div>
    </div>
  )
}

export default Footer
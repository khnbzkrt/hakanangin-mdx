import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex items-center rounded-t-2xl  justify-evenly p-5 bg-gray-50 text-sm">
            <Link href={"/contracts/privacy-policy"} className="text-neutral-600" target="_blank">
                Gizlilik Sözleşmesi
            </Link>
            <Link href={"/contracts/terms-of-use"} className="text-neutral-600" target="_blank">
                Kullanım Koşulları
            </Link>
            <Link href={"/contracts/cookie-policy"} className="text-neutral-600" target="_blank">
                Çerez Politikası
            </Link>
        </div>
    );
};

export default Footer;

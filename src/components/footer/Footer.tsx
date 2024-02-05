import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex items-center rounded-t-2xl  justify-start p-3 text-sm gap-4 text-neutral-400">
            <Link href={"/contracts/privacy-policy"} target="_blank">
                Gizlilik Sözleşmesi
            </Link>
            <Link href={"/contracts/terms-of-use"} target="_blank">
                Kullanım Koşulları
            </Link>
            <Link href={"/contracts/cookie-policy"} target="_blank">
                Çerez Politikası
            </Link>
        </div>
    );
};

export default Footer;

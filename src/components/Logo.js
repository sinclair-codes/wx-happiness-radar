import Image from "next/image";
export default function Logo() {
  const source = "logo.svg";
  return (
    <>
      <Image src={source} width={150} height={150} alt="The Xero Logo" />
    </>
  );
}

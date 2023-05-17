import Head from "next/head";
import HomePage from "@/components/home";

const SeoImage = "../assets/img/slide1.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tuc Mach Restaurant</title>
        <meta
          name="description"
          content="Nhà Hàng Túc Mạch - Đậm Chất, Đậm Vị"
        />
        <meta name="og:description" content="Hân Hạnh Phục Vụ Quý Khách" />
        <meta
          name="author"
          content="Vion Nguyen - facebook.com/minhhiep.vip99"
        />
        <meta name="image" content={SeoImage} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}

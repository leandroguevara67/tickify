import Banner from "@/components/generic/Banner";
import { Sale } from "src/interfaces";
import simpleFetch from "src/utils/simpleFetch";

interface Props {
  params: {
    id: string;
  };
}

export default async function EventoShow({ params }: Props) {
  const sale: Sale = await simpleFetch(`sales/processing/${params.id}`, "ssr");
  console.log(sale);
  return (
    <>
      <Banner
        banner_url="https://i.imgur.com/EtHHwrX.jpg"
        text=""
        position="center"
      ></Banner>
      <div className="container mt-5 mb-5 pt-md-5 pb-md-5">
        <h1 className="mobile-high-space">
          La compra no se realizo con exito ,
          <br />
          por favor intente mas tarde
        </h1>
        <br />
        <h5 className="underlined">Equipo de Tickify</h5>
      </div>
    </>
  );
}

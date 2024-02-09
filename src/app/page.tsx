import Link from "next/link";

export default function Home() {
  return (
      <div className="w-full h-full flex flex-col  justify-center  items-center fixed">  
          <div className="flex w-[480px] h-[800px] flex-col border-2">
                <header className="w-full border-b-2  h-10 leading-10 text-center text-sm capitalize">
                    escolha a forma de pagamento
                </header>
                <main>
                      <div>
                          <Link href={"/pix/"} className="p-6 flex justify-between items-center w-fill h-12 group  hover:bg-[#141414] duration-300" >
                            <h2 className="group-hover:text-[#ffffff]">pix</h2>
                            <svg className="w-4 h-4  group-hover:fill-[#ffffff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                          </Link>
                      </div>
                      <div>
                          <Link href={"/mercadolivre/"} className="p-6 flex justify-between items-center w-fill h-12 group  hover:bg-[#141414] duration-300" >
                            <h2 className="group-hover:text-[#ffffff]">mercado pago</h2>
                            <svg className="w-4 h-4  group-hover:fill-[#ffffff]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                          </Link>
                      </div>
                </main>
          </div>
      </div>
  );
}

import { Footer, Header } from "../../components/layers";
import { InputForm } from "../../components/ui";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#F4F4F4]">
      <div className="flex flex-col justify-between bg-white w-120 h-[655px] p-8 rounded-2xl">
        <Header></Header>
        <InputForm></InputForm>
        <Footer></Footer>
      </div>
    </div>
  );
}

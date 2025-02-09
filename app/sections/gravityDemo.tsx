import { Gravity, MatterBody } from "@/components/ui/gravity";
import Image from "next/image";
function Preview() {
  return (
    <div className="w-full h-full min-h-[500px] flex flex-col relative font-azeretMono">
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-8 py-4">
            instagram
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="30%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#E794DA] text-white rounded-full hover:cursor-grab px-8 py-4 ">
            facebook
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="40%"
          y="20%"
          angle={10}
        >
          <div className="text-xl flex flex-row gap-2 sm:text-2xl md:text-3xl bg-[#1f464d]  text-white rounded-full hover:cursor-grab px-8 py-4 ">
            <div>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
            alt="whatsapp"
            unoptimized
            height={20} width={20}
            className="mt-2"/>
            </div>
            <div>whatsapp</div>
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="75%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff5941]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
            twitter
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="80%"
          y="20%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-orange-500  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
            drei
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="50%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ffd726]  text-white [#E794DA] rounded-full hover:cursor-grab px-8 py-4 ">
            matter-js
          </div>
        </MatterBody>
      </Gravity>
    </div>
  );
}

export { Preview };

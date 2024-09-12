import Image from "next/image";
import Link from "next/link";
import INFJ from '@/assets/image/INFJ.png'
import { BiQuestionMark } from "react-icons/bi";
import { Progress, Tooltip } from "@nextui-org/react";

interface Props {
    data: {
        value: number,
        text1: string,
        text2: string,
        content: string,
        color: string
    }[]
}

export default ({ data }: Props) => {
    // 提前把颜色写好，否则会导致样式丢失
    const colors = ["[&>div>div]:bg-[#4298b4]", "[&>div>div]:bg-[#e4ae3a]", "[&>div>div]:bg-[#33a474]", "[&>div>div]:bg-[#88619a]", "[&>div>div]:bg-[#f25e62]"]

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="mr-40">
                    <div className="text-[40px] text-[#33a474] font-medium font-sans">提倡者</div>
                    <div className="text-[#666]">INFJ</div>
                    <Image src={INFJ} alt="性格" width={200}></Image>
                    <Link href="https://www.16personalities.com/ch/infj-人格" className="block w-full mt-2 text-center text-[#666] text-xs hover:text-[#33a474]">了解一下</Link>
                </div>

                <div className="w-[550px] space-y-10">
                    {
                        data.map(({ value, text1, text2, content, color }, index) => {
                            return (
                                <div key={index} className="flex justify-center items-center">
                                    <span className="min-w-20">{text1}</span>

                                    <div className="relative w-full max-w-md">
                                        <Progress
                                            value={value}
                                            className={`relative [&>div]:justify-center ${colors[index]}`}
                                        />
                                        <div className="absolute -top-[25px] -translate-x-1/2 left-0 h-full flex items-center justify-center" style={{ left: `${value}%` }}>
                                            <span className={`flex items-center text-[${color}]`}>
                                                {value}%
                                                <Tooltip content={content}>
                                                    <BiQuestionMark className="w-5 h-5 ml-2 rounded-full p-[2px] bg-[#eee] cursor-pointer" />
                                                </Tooltip>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="min-w-20 text-end">{text2}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}
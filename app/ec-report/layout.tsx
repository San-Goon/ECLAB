import {ReactNode} from "react";
import Image from "next/image";

type Props = {
    children: ReactNode;
}

export default function ReportLayout({children}: Props) {
    return (
        <div>
            <header style={{display: 'flex'}}>
                <div>
                    <Image src="/" alt="ECLAB로고" width={80} height={15}/>
                    <span>EDU.CENTER</span>
                </div>
                 <div>
                     햄버거버튼
                 </div>
            </header>
            <div style={{display: 'flex'}}>
                <div style={{width: '300px', height: '1920px'}}>
                    사이드바에용
                </div>
                {children}
            </div>
        </div>
    )
}
import Image from "next/image"
import { Lent } from "../../components/lent/Lent"
import { SectionOne } from "./Head.Styled"

export const PageHead = ({ url, title, body, handleScroll }) => {
    return (
        <SectionOne>
            <div className='hClass'>
                <div>
                    <h1>{title}</h1>
                    <h4>{body}</h4>
                </div>
                <Image src={'/icons/arrow.svg'} alt='Arrow icon down' width={34} height={47} className='arrowDownIcon' onClick={() => handleScroll()} />
            </div>
            <div className="makeUpSecionDivOne">
                <Lent url={url} position='left' />
            </div>
        </SectionOne>
    )
}

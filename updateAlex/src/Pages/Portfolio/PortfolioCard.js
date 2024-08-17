import { Col } from "react-bootstrap"

function PortfolioCard({title,desc,imgUrl}){
    return(
        <>
    <Col>
    <div className="CardImgBx">
        <img style={{width:'100%'}} src={imgUrl} />
        <div className="CardTxTx">
            <h4>{title}</h4>
            <span>{desc}</span>
        </div>
       </div>
    </Col>
        </>
    )
}
export default PortfolioCard
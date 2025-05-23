import TotalBill from "../components/TotalBill"
import "../style/clientLayoutComponent.scss"
const DeliveryInformation = () => {
  return (
    <div className="delivery-info-wrapper">
        <h3>Delivery Information</h3>
        <div className="delivery-info-row">
            <div className="delivery-info-col">
                <div className="delivery-info-field">
                    <div className="name-fields">
                        <div className="firstname-field"></div>
                        <div className="lastname-field"></div>
                    </div>
                    <div className="state-fields">

                    </div>
                    div.

                </div>
                <div className="total-bill">
                    <TotalBill />
                </div>
            </div>

        </div>
    </div>
  )
}

export default DeliveryInformation
import { Input, InputNumber } from "antd";
import ButtonComp from "../components/ButtonComp";
import TotalBill from "../components/TotalBill";
import "../style/pages/DeliveryInformation.scss";

const DeliveryInformation = () => {
  return (
    <div className="delivery-info-wrapper">
        <h3>Delivery Information</h3>
        <div className="delivery-info-row">
            <div className="delivery-info-col">
                <div className="delivery-info-field">
                    <div className="name-fields">
                        <div className="firstname-field">
                            <Input placeholder="First Name" />
                        </div>
                        <div className="lastname-field">
                            <Input placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="email-field">
                        <Input placeholder="Email Address" />
                    </div>
                    <div className="street-field">
                        <Input placeholder="Street" />
                    </div>
                    <div className="state-fields">
                        <Input placeholder="City" />
                        <Input placeholder="State" />
                    </div>
                    <div className="country-fields">
                        <InputNumber />
                        <Input placeholder="Country" />
                    </div>
                    

                </div>
                <div className="total-bill">
                    <TotalBill />
                    <div className="proceed-to-payment-btn">
                        <ButtonComp text="Proceed to Payment" />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default DeliveryInformation
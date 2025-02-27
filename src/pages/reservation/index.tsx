import { useState } from "react";
import Card from "../../components/card/Card"
import Fieldset from "../../components/Fieldset";
import FormInputGroupDate from "../../components/FormInputGroupDate";

const Reservation = () => {
    const [credentials, setCredentials] = useState({
        arrivalDate: new Date().toISOString().split("T")[0],
    });

    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-3">
                <div className="flex flex-col gap-4">
                    <Card>
                        <div className="flex flex-col gap-4 my-4">
                            <h6 className="font-semibold text-sm">Room Type Available</h6>
                            <p className="text-sm text-gray-500">01-01-2025 until 02-01-2025</p>
                        </div>
                    </Card>
                    <Card>
                        <div>Halo</div>
                    </Card>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-9">
                <Card>
                    <div className="flex flex-col gap-7 my-5">
                        <Fieldset text="1" spanText={false} content = {
                            <div className="grid grid-cols-12 gap-4">
                                <FormInputGroupDate 
                                    label="Arrival" 
                                    id="arrival" 
                                    placeholder="Arrival" 
                                    className="col-span-12 lg:col-span-3"
                                    value={credentials.arrivalDate}
                                    onChange={(value) => {
                                        setCredentials({ ...credentials, arrivalDate: value });
                                    }}
                                />
                            </div>
                        } />
                        <Fieldset text="2" spanText={false} content = {
                            <>
                            </>
                        } />
                        <Fieldset text="3" spanText={false} content = {
                            <>
                            </>
                        } />
                        <Fieldset text="4" spanText={false} content = {
                            <>
                            </>
                        } />
                        <Fieldset text="5" spanText={false} content = {
                            <>
                            </>
                        } />
                        <Fieldset text="6" spanText={false} content = {
                            <>
                            </>
                        } />
                        <Fieldset text="7" spanText={false} content = {
                            <>
                            </>
                        } />
                    </div>
                </Card>
            </div>
        </div>
    
    );
};

export default Reservation
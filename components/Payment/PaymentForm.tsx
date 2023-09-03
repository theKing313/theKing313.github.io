import { useStripe, useElements, PaymentElement, CardElement } from '@stripe/react-stripe-js';
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { clearCart } from '@/lib/redux/slices/productSlice/productSlice';
import { useDispatch } from '@/lib/redux/store';
interface StripeCardElementOptions {
    iconStyle: string;
    style: {
        base: {
            iconColor: string; color: string; fontWeight: number; fontFamily: string; fontSize: string; fontSmoothing: string;
            ":-webkit-autofill": { color: string };
            "::placeholder": { color: string };
        };
        invalid: { iconColor: string, color: string };
    };
}
type cardType = {
    card: { token: string; }
}
const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
        base: {
            iconColor: "#c4f0ff",
            color: "#fff",
            fontWeight: 500,
            fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
            fontSize: "16px",
            fontSmoothing: "antialiased",
            ":-webkit-autofill": { color: "#fce883" },
            "::placeholder": { color: "#87bbfd" }
        },
        invalid: {
            iconColor: "#ffc7ee",
            color: "#ffc7ee"
        }
    }
} as StripeCardElementOptions
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState<boolean | undefined>(false)
    const [errorMessage, setErrorMessage] = useState<string | undefined>();
    const dispatch = useDispatch()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }
        const el: any = elements.getElement(CardElement)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: el
        })  // card: elements.getElement(CardElement), token: "string"
        // const result = await stripe.confirmPayment({
        //     //`Elements` instance that was used to create the Payment Element
        //     elements,
        //     confirmParams: {
        //         return_url: "https://example.com/order/123/complete",
        //     },
        // });

        if (error) {
            // Show error to your customer (for example, payment details incomplete)
            console.log(error.message);
            setErrorMessage(error.message)
        } else {
            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
            setSuccess(!success)
            dispatch(clearCart())
            setErrorMessage('')
            try {
                const { id } = { id: 12312313123 }
                const response = await axios.post("http://localhost:3000/api/revalidate", {
                    amount: 23566,
                })

                if (response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)

                }

            } catch (error) {
                console.log("Error", error)
            }

        }
    };

    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Payment</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Payment  -  DialogDescription
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {!success ?
                        <form className="w-full flex items-center flex-col justify-center m-auto" onSubmit={handleSubmit}>
                            <fieldset className="FormGroup">
                                <div className="FormRow">
                                    <CardElement />
                                    {/*  */}
                                    {/* <PaymentElement ></PaymentElement> */}
                                    {/* //options={CARD_OPTIONS} */}
                                </div>
                            </fieldset>
                            <Button className='w-full' disabled={!stripe}>Pay</Button>
                        </form>
                        :
                        <div>
                            <h2>Successful payment!</h2>

                        </div>
                    }
                    {/* <div className="grid grid-cols-4 items-center gap-4">
    
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                       
                            </div> */}
                    <div className="text-center text-red-500">{errorMessage}</div>
                </div>
                <DialogFooter>
                    {/* <Button type="submit">Save changes</Button> */}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export default CheckoutForm;
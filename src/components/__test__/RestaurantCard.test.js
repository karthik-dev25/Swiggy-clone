import {render, screen} from "@testing-library/react";
import MOCK_DATA from "./mocks/resCardMock.json";
import RestaurantCard, { withOfferLabel } from "../RestaurantCard";
import "@testing-library/jest-dom"



it("Should render RestaurantCard Component with Props",()=>{
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("A2B - Adyar Ananda Bhavan");

    expect(name).toBeInTheDocument();
})

it("Should render the withOfferLabel HOC Component",()=>{

    const RestaurantCardWithOffer = withOfferLabel(RestaurantCard);

    render(<RestaurantCardWithOffer resData={MOCK_DATA} />);

    const offer = screen.getByText("₹166 OFF ABOVE ₹349");

    expect(offer).toBeInTheDocument();
})
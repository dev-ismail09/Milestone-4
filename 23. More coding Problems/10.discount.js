/*
1. if ticket numbers is less then 100, per ticket price: 10
2.if ticket numbers is more than 100, but less then 200. first 100 tickets will be 100/ ticket.
  rest tickets will be 90 taka per piece
 3. if you purchase more than 200 tickets 
 fir 100 --> 100 tk
 101-200 --> 90 tk
 200+ --> 70 tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const seconed100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restRate;
        const totalCost = first100Price + second100Rate + restTicketPrice;
        return totalCost;
    }
}

const totalRate = ticketPrice(201);
console.log(totalRate);

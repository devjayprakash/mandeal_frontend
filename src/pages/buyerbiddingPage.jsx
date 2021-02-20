import React from "react";

const Buyerbidding = () => {
  return (

    <div>

            
    <div class="sell">
    
        <div class="sell_nav">
            <div class="sell_nav-logo logo">Man<span class="span">deal</span></div>
            <div class="sell_nav-profile">
                <img src="./images/icons/bell.png" alt="" class="sell_nav-profile-bell" />
                <img src="./images/icons/avatar.png" alt="" class="sell_nav-profile-avatar" />
            </div>
        </div>
        <hr class=" mu"/>

        <div class="sell-c">
        
            <div class="sell-c--img">
                <img src="./images/nimbu.jpg" class="sell-c--img-i" alt="Lemon" />
            </div>
        
            <div class="sell-c--main">
                <h2 class="sell-c--main-heading">Lemon</h2>
                <div class="sell-c--main-des">High Quality Premium Lemon</div>
                <div class="sell-c--main-name">Sold by Hari Mohan Prasad</div>
                <div class="sell-c--main-price">Min Price: <span class="span">₹100/ kg</span></div>
            </div>

        </div>
        <div class="bidding">

        <div class="bidding_heading">Bidding Status</div>
        <hr class="mu" />
        <div class="bidding_container">

            <div class="bidding_container-card">
                <div class="bidding_container-card-main">
                    <div class="bidding_container-card-main-name">Jay Prakash</div>
                    <div class="bidding_container-card-main-buyer">buyer</div>
                </div>
        
                <div class="bidding_container-card-btn btn-red">₹200/kg</div>
            </div>

        </div>
    </div>

    <hr class="mu"/>

    
    <div class="submit">
        <h1 class="submit_heading">Submit Your Bidd</h1>
        <hr class="md"/>
        <div class="submit_input">
            <input class="submit_input-text input" name="Price" placeholder="Write Your Price"/>
            <div class="submit_input-kg">Per Kg</div>
        </div>

        <div class="submit_message">Your bid has been submitted</div>
        <div class="submit_btn btn-blue">Submit</div>
    </div>

    <hr/>

    


</div>
<div class="footer"></div>



      
    </div>
  );
};

export default Buyerbidding;

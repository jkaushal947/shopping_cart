const createNav = () =>{
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/yugioh_logo.png" class="brand-logo" alt="">
<div class="nav-items">
    <div class="search">
        <input type="text" class="search-box" placeholder="search card name, card type">
    <button class="search-btn">search</button>
    </div>
    <a href="#"><img src="img/user.png"></a>
    <a href="#"><img src="img/cart.png"></a>
</div>
</div>
<ul class="links-container">
   <li class="link-item"><a href="#" class="link">home</a></li>
   <li class="link-item"><a href="#" class="link">monster cards</a></li> 
   <li class="link-item"><a href="#" class="link">spell cards</a></li> 
   <li class="link-item"><a href="#" class="link">trap cards</a></li> 
   <li class="link-item"><a href="#" class="link">decks/boxes</a></li>  
</ul>
    `;
}

createNav();
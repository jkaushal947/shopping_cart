const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = ` <div class="footer-content">
    <img src="img/yugioh_logo.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">monster cards</li>
            <li><a href="#" class="footer-link">normal</a></li>
            <li><a href="#" class="footer-link">effect</a></li>
            <li><a href="#" class="footer-link">fusion</a></li>
            <li><a href="#" class="footer-link">ritual</a></li>
            <li><a href="#" class="footer-link">synchro</a></li>
            <li><a href="#" class="footer-link">xyz</a></li>
            <li><a href="#" class="footer-link">pendulum</a></li>
            <li><a href="#" class="footer-link">link</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">spell cards</li>
            <li><a href="#" class="footer-link">normal</a></li>
            <li><a href="#" class="footer-link">continuous</a></li>
            <li><a href="#" class="footer-link">equip</a></li>
            <li><a href="#" class="footer-link">quick-play</a></li>
            <li><a href="#" class="footer-link">field</a></li>
            <li><a href="#" class="footer-link">ritual</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">trap cards</li>
            <li><a href="#" class="footer-link">normal</a></li>
            <li><a href="#" class="footer-link">continuous</a></li>
            <li><a href="#" class="footer-link">counter</a></li>
            <li><a href="#" class="footer-link">equip</a></li>
            <li><a href="#" class="footer-link">field</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">about company</p>
    <p class="info">Lorem ipsum dolor sit amet. Sit fugiat earum et neque ea sunt eligendi. Vel optio nesciunt et quas voluptate id magnam eveniet sed ipsum enim et dolorum voluptas aut quas animi eum molestiae praesentium. Vel magnam quam aut dolor repellat nam labore molestiae et facere dolorem est eius molestiae aut nihil temporibus ea repellat autem.</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Yu-Gi-Oh Trading Cards</p>`;
}

createFooter();
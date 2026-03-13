<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-info">
          <h2 class="footer-logo">Green Labo</h2>
          <p class="footer-address">
            〒000-0000<br>
            東京都渋谷区○○町0-0-0
          </p>
          <p class="footer-tel">TEL：03-0000-0000</p>
          <p class="footer-hours">
            営業時間：9:00〜18:00<br>
            定休日：水曜日
          </p>
        </div>
        <nav class="footer-nav">
          <ul>
            <li><router-link to="/">HOME</router-link></li>
            <li><a href="#">GREEN LABO</a></li>
            <li><a href="#">EVENT</a></li>
            <li><a href="#">NEWS</a></li>
            <li><router-link to="/works">WORKS</router-link></li>
            <li><router-link to="/company">COMPANY</router-link></li>
            <li><a href="#">RECRUIT</a></li>
            <li><a href="#">ACCESS</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <p class="copyright">&copy; {{ currentYear }} Green Labo All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

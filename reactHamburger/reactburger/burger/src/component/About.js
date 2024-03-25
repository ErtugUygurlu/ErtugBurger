import React from 'react'
import ImageBanner from '../assets/hakkimizda.jpg';
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${ImageBanner})` }}></div>
      <div>
        <h1>Hakkımızda</h1>
        <p>ErtuğBurger, lezzet dolu bir yolculuğa çıkmanın kapılarını aralayan, her lokmasıyla damakları şenlendiren bir burger markasıdır. Yola çıkarken kalite ve lezzeti ön planda tutarak, burger tutkunlarının beklentilerini karşılamak ve hatta aşmak için yola çıktık.</p>
        <h1>Lezzet Dolu Kökenler</h1>
        <p>ErtuğBurger, kökenlerini derinleştirirken, lezzet ve kaliteye verdiği önemi her adımda hissettiriyor. Her bir burgerimizde kullanılan malzemeler özenle seçilir ve tazeliğini koruyacak şekilde hazırlanır. Sağlıklı ve lezzetli bir deneyim sunmak için her gün en taze ve en kaliteli malzemeleri tercih ediyoruz.</p>
        <h1>Yenilikçi ve Yaratıcı Yaklaşım</h1>
        <p>ErtuğBurger, sadece lezzetli burgerler sunmakla kalmaz, aynı zamanda yenilikçi ve yaratıcı bir yaklaşım benimser. Menümüzde yer alan her bir seçenek, özenle hazırlanmış tarifler ve özgün tatlarla doludur. Müşterilerimize sürekli olarak yeni ve heyecan verici lezzetler sunmak için çalışıyoruz.</p>
        <h1>Müşteri Memnuniyeti Odaklı Hizmet</h1>
        <p>Müşteri memnuniyeti bizim için her şeyden önemlidir. ErtuğBurger ekibi, her müşteriye en iyi hizmeti sunmak ve unutulmaz bir deneyim yaşatmak için çalışır. Güler yüzlü ve profesyonel personelimizle her zaman yanınızdayız ve her isteğinizi karşılamak için buradayız.
          ErtuğBurger olarak, lezzet, kalite ve müşteri memnuniyetini bir araya getirerek burger deneyimini başka bir seviyeye taşımayı hedefliyoruz. Sizleri en yakın şubemizde ağırlamaktan ve sizlere benzersiz bir burger deneyimi sunmaktan büyük mutluluk duyarız.</p>
      </div>
    </div>

  )
}

export default About

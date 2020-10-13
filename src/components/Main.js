import React from "react";
import koparka from '../assets/images/koparka.png';
import Iframe from "react-iframe";

import "./Main.css";

const Main = () => (
  <>
    <section class="section" id="about">
      <div className="container" >
        <div id="headerWrapper">Nasz firma</div>
        <div id="wrapperSectionAbout">
          <div id="wrapperSectionAboutLeft">
            <p id="description">
              Aby zyskać wiarygodność oraz zainteresować Państwa firmą "JANBAR"
              pragniemy przedstawić jej ogólną charakterystykę. Liczymy, że
              dzięki temu zyskamy Państwa zaufanie i nie będą się już Państwo
              wahać w wyborze pomiędzy wieloma przedsiębiorstwami oferującymi
              usługi z naszej branży. Mamy nadzieję, że zaowocuje to także
              kierowaniem do nas zaproszeń o wzięcie udziału w przetargach bądź
              konkursach ofert na realizację robót ziemnych.
            </p>
            <p id="description">
              Firma "JANBAR" jest firmą młodą, ponieważ działa na rynku dopiero
              od 1997 roku, jednak zyskała już zaufanie i szacunek wielu
              klientów - o czym mogą się państwo przekonać przeglądając nasze
              referencje.
            </p>
            <p id="description">
              Założyli ją dwaj panowie Waldemar Baran i Mirosław Jankowski (w
              formie spółki cywilnej), współpracujący już ze sobą od kilku lat.
              Początkowo zajmowali się oni mniejszymi przedsięwzięciami (m.in.
              remontem obiektów mieszkalnych), jednak firma "JAN&BAR" jest
              wyspecjalizowana w realizacji kompleksowych robót ziemnych
              (dokładna ofertę znajda Państwo w rozdziale "Usługi").
            </p>
            <p id="description">
              Początkowo nasza firma nie posiadała oddzielnego biura, wszystkie
              sprawy administracyjne były prowadzone w mieszkaniach wspólników.
              Jednak firma szybko udowodniła swoją rzetelność i zyskała zaufanie
              swoich zleceniodawców dzięki umiejętności elastycznej pracy i
              dostosowywaniu się do potrzeb inwestora. Dzięki temu była w stanie
              zakupić teren o powierzchni 1600m2 wraz z budynkami, które zostały
              adoptowane jako biuro oraz magazyny, a teren został wykorzystany
              jako baza sprzętu.
            </p>
            <p id="description">
              Przez cztery lata działalność na rynku budowlanym firma "JANBAR"
              zdołała już skompletować doskonały zespół pracowników, który
              sprawdził się przy wielu rodzajach prac. Na życzenie Państwa
              możemy dostarczyć dodatkowe dokumenty dotyczące naszej firmy.
            </p>
          </div>
          <div id="wrapperSectionAboutRight">
            <img src={koparka} alt="koparka" />
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="realizations">
      <div className="container">
        <div>
          <p id="headerWrapper">Realizacje</p>
          <p id="description">
            Przedsiębiorstwo "JAN&BAR" posiada niezbędne doświadczenie w
            realizacji kompleksowych robót ziemnych o czym świadczą, w naszym
            przekonaniu, obiekty już zrealizowane.
          </p>
          <p id="description">
            W ciągu ostatnich lat firma realizowała następujące zadania:
          </p>
          <ul>
            <li id="listItem">
              - Wodociąg Babiak-Kolonia 3 600 mb, Urząd Gminy Lidzbark Warmiński
            </li>
            <li id="listItem">
              - Wodociąg Galiny-Ciemna Wola - Kosy-Wgoryty - Pergozy-Molwity -
              Wajsnory-Wojtkowo 10 200 mb, Urząd Gminy Bartoszyce
            </li>
            <li id="listItem">
              - Wodociąg i remont SUW Runowo 7 800 mb, Urząd Gminy Lidzbark
              Warmiński
            </li>
            <li id="listItem">
              - Wodociąg Koniewo-Koniewo PGR 5 600 mb, Urząd Gminy Lidzbark
              Warmiński
            </li>
            <li id="listItem">
              - Modernizacja SUW Redy , 03.09-07.12.2001, Urząd Gminy Lidzbark
              Warmiński
            </li>
            <li id="listItem">
              - Wodociąg Koniewo-Żytowo-Budniki 7 600 mb, Urząd Gminy Lidzbark
              Warmiński
            </li>
            <li id="listItem">
              - Modernizacja SUW w Mojtynach, Urząd Gminy Biskupiec
            </li>
            <li id="listItem">- Wodociąg Studzieniec, Urząd Gminy Korsze </li>
            <li id="listItem">
              - Wodociąg Rzeck-Kolonia 6 000 mb, Urząd Gminy Biskupiec
            </li>
            <li id="listItem">
              - Wodociąg Żardeniki - Miejska Wieś 9 200 mb, Urząd Gminy
              Jeziorany SAPARD
            </li>
            <li id="listItem">
              - Kanalizacja sanitarna Małszewko-Budy-oczyszczalnia ścieków
              Dżwierzuty 5 200 mb, Urząd Gminy Dzwierzuty
            </li>
            <li id="listItem">
              - Kanalizacja sanitarna Wójtówko-Jeziorany-IV etap 1 900 mb, Urząd
              Gminy Jeziorany
            </li>
            <li id="listItem">
              - Wodociąg Frączki 4 600 mb, Urząd Gminy Dywity
            </li>
            <li id="listItem">
              - Wodociąg Zerbuń 18 000 mb, Urząd Gminy Jeziorany Wodociąg
              Pręgowo- Wólka 2100 mb, Urząd Gminy Kętrzyn
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section" id="services">
      <div className="container">
        <div id="headerWrapperServices">Usługi</div>
        <div id="wrapperSectionServices">
          <div id="wrapperSectionServicesLeft">
            <p id="subHeader">Wykonawstwo:</p>
            <ul>
              <li id="listItem">
                - wszelkiego rodzaju robót ziemnych z użyciem sprzętu ciężkiego
                (wykopy, formowanie nasypów)
              </li>
              <li id="listItem">
                - robót melioracyjnych i odwodnieniowych sieci wodociągowych
                obiektów budowlanych sieci wodociągowych (lub ich modernizację)
              </li>
              <li id="listItem">- stacje uzdatniania wody (SUW)</li>
              <li id="listItem">
                - stacje hydroforowe kanalizacji sanitarnych, deszczowych i
                ogólnospławnych obiektów budowlanych sieci kanalizacyjnych
              </li>
              <li id="listItem">- przepompownie ścieków</li>
              <li id="listItem">- montaż przydomowych oczyszczalni ścieków</li>
            </ul>
          </div>

          <div id="wrapperSectionServicesRight">
            <p id="subHeader">Wynajem sprzętu:</p>
            <p id="wrapperSectionServicesDescription">
              Oferujemy usługi w zakresie prac ziemnych sprzętem (wynajem
              sprzętu):
            </p>
            <ul>
              <li id="listItem">
                - koparka gąsienicowa ATLAS 17 02 , pojemność łyżki 1,2 m3
              </li>
              <li id="listItem">
                - koparka gąsienicowa O&K RH 5 PLUS , pojemność łyżki 0,8 m3
              </li>
              <li id="listItem">
                - koparka kołowa FAUN 10-13, pojemność łyżki 0,8 m3
              </li>
              <li id="listItem">
                - koparka gąsienicowa ATLAS 17 04 HD, pojemność łyżki 0,8 m3
              </li>
              <li id="listItem">- walec wibracyjny </li>
              <li id="listItem">- samojezdny BOMAG </li>
              <li id="listItem">
                - samochody ciężarowe MERCEDES 3,5 t i 6,9 t
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="section" id="machine">
      <div className="container">
        <div>
          <p id="headerWrapper">Park maszynowy</p>
          <p id="description">
            Firma JANBAR jest młodą firmą, ale szybko się rozwijającą. Naszą
            pierwszą koparką była koparka kołowa firmy FAUN, kupiona w pierwszym
            roku działalności firmy.W kolejnych latach działalności nasza baza
            sprzętu szybko się rozrastała.
          </p>
          <p id="description">
            W obecnie chwili dysponujemy następującymi maszynami:
          </p>
          <ul>
            <li id="listItem">
              - koparka gąsienicowa ATLAS 17 02 , pojemność łyżki 1,2 m3
            </li>
            <li id="listItem">
              - koparka gąsienicowa O&K RH 5 PLUS , pojemność łyżki 0,8 m3
            </li>
            <li id="listItem">
              - koparka kołowa FAUN 10-13, pojemność łyżki 0,8 m3
            </li>
            <li id="listItem">
              - koparka gąsienicowa ATLAS 17 04 HD, pojemność łyżki 0,8 m3
            </li>
            <li id="listItem">
              - pojazd specjalny MAN z zabudowaniem bramowo-łańcuchowym
            </li>
            <li id="listItem">- walec wibracyjny </li>
            <li id="listItem">- samojezdny BOMAG </li>
            <li id="listItem">- samochody ciężarowe MERCEDES 3,5 t i 6,9 t</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section" id="contact">
      <div id="contactWrapper">
        <div id="contactDescritpions">
          <p id="headerWrapperContact">Kontakt</p>
          <p id="contactDescritpionsHeaderTitle">
            Przedsiębiorstwo Usługowe "JANBAR" s.c.
          </p>
          <p id="descriptionFooter">
            ul. Olsztyńska 10 11-100 Lidzbark Warmiński
          </p>
          <p id="descriptionFooter">woj. warmińsko - mazurskie </p>
          <p id="descriptionFooter">tel/fax (0 89) 767 32 95</p>
          <p id="descriptionFooter">e-mail:biuro@janbar.pl</p>
          <p id="descriptionFooter">www: www.janbar.pl</p>
        </div>
        <div id="contactMap">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.7243726186925!2d20.565618951407433!3d54.13181198005378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2f5ba9470155b%3A0xbac7839b1267fb51!2sJanbar%20s.c.%20PU.%20Baran%20W.%2C%20Jankowski%20M.!5e0!3m2!1spl!2spl!4v1602347623450!5m2!1spl!2spl"
            height="400"
            width="600"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></Iframe>
        </div>
      </div>
    </section>
  </>
);
export default Main;

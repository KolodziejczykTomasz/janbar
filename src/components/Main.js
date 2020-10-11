import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Iframe from "react-iframe";
import BrandLogo from "../assets/images/brand.jpg";
import "./Main.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="tabpanel"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 5,
    color: "#333",
    lineHeight: "1.5",
    padding: "1rem 0",
    display: "flex",
    height: "auto",
    width: '100%',
    marginTop: 100,
    marginBottom: 100,
    paddingRight: 15,
    textAlign: "justify",
    hyphens: "auto",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div id="tabs">
        <div id="brand">
          <img src={BrandLogo} alt="Brand Logo" />
        </div>
        <Tabs
          id="tabmenu"
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="O firmie" {...a11yProps(0)} />
          <Tab label="Usługi" {...a11yProps(1)} />
          <Tab label="Maszyny" {...a11yProps(2)} />
          <Tab label="Realizacje" {...a11yProps(3)} />
          <Tab label="Wynajem sprzętu" {...a11yProps(4)} />
          <Tab label="Galeria" {...a11yProps(5)} />
          <Tab label="Kontakt" {...a11yProps(6)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <div>
          <p id="header">Nasz firma</p>
          <p id="description">
            Aby zyskać wiarygodność oraz zainteresować Państwa firmą "JANBAR"
            pragniemy przedstawić jej ogólną charakterystykę. Liczymy, że dzięki
            temu zyskamy Państwa zaufanie i nie będą się już Państwo wahać w
            wyborze pomiędzy wieloma przedsiębiorstwami oferującymi usługi z
            naszej branży. Mamy nadzieję, że zaowocuje to także kierowaniem do
            nas zaproszeń o wzięcie udziału w przetargach bądź konkursach ofert
            na realizację robót ziemnych.
          </p>
          <p id="description">
            Firma "JANBAR" jest firmą młodą, ponieważ działa na rynku dopiero od
            1997 roku, jednak zyskała już zaufanie i szacunek wielu klientów - o
            czym mogą się państwo przekonać przeglądając nasze referencje.
          </p>
          <p id="description">
            Założyli ją dwaj panowie Waldemar Baran i Mirosław Jankowski (w
            formie spółki cywilnej), współpracujący już ze sobą od kilku lat.
            Początkowo zajmowali się oni mniejszymi przedsięwzięciami (m.in.
            remontem obiektów mieszkalnych), jednak firma "JAN&BAR" jest
            wyspecjalizowana w realizacji kompleksowych robót ziemnych (dokładna
            ofertę znajda Państwo w rozdziale "Usługi").
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
            sprawdził się przy wielu rodzajach prac. Na życzenie Państwa możemy
            dostarczyć dodatkowe dokumenty dotyczące naszej firmy.
          </p>
          <hr style={{ borderTop: "1px solid  #a24458", marginTop: "60px" }} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <p id="header"> Usługi - Wykonawstwo</p>
          <p id="description">
            Firma nasza oferuje usługi w zakresie wykonawstwa:
          </p>
          <ul>
            <li id="listItem">
              - wszelkiego rodzaju robót ziemnych z użyciem sprzętu ciężkiego (
              wykopy , formowanie nasypów )
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
          <hr style={{ borderTop: "1px solid  #a24458", marginTop: "60px" }} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <p id="header">Park maszynowy</p>
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
          <hr style={{ borderTop: "1px solid  #a24458", marginTop: "60px" }} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <p id="header">Realizacje</p>
          <p id="description">
            Przedsiębiorstwo "JAN&BAR" posiada niezbędne doświadczenie w
            realizacji kompleksowych robót ziemnych o czym świadczą, w naszym
            przekonaniu, obiekty już zrealizowane.
          </p>
          <p id="description">
            W okresie 5 -ciu ostatnich lat firma realizowała następujące
            zadania:
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
          <hr style={{ borderTop: "1px solid  #a24458", marginTop: "60px" }} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div>
          <p id="header">Wynajem sprzętu</p>
          <p id="description">
            Wynajem sprzętu Oferujemy usługi w zakresie prac ziemnych sprzętem (
            wynajem sprzętu ):
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
            <li id="listItem">- samochody ciężarowe MERCEDES 3,5 t i 6,9 t</li>
          </ul>
          <hr style={{ borderTop: "1.2px solid  #a24458", marginTop: "60px" }} />
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div>
          <p id="header">Galeria</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div id="contact">
          <p id="header">Kontakt</p>
          <div id="contactWrapper">
            <div id="contactDescritpions">
              <p id="contactDescritpionsHeader">
                Przedsiębiorstwo Usługowe "JANBAR" s.c.
              </p>
              <p id="description">
                ul. Olsztyńska 10 11-100 Lidzbark Warmiński
              </p>
              <p id="description">woj. warmińsko - mazurskie </p>
              <p id="description">tel/fax (0 89) 767 32 95</p>
              <p id="description">e-mail:biuro@janbar.pl</p>
              <p id="description">www: www.janbar.pl</p>
            </div>
            <div id="contactMap">
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.7243726186925!2d20.565618951407433!3d54.13181198005378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e2f5ba9470155b%3A0xbac7839b1267fb51!2sJanbar%20s.c.%20PU.%20Baran%20W.%2C%20Jankowski%20M.!5e0!3m2!1spl!2spl!4v1602347623450!5m2!1spl!2spl"
                height="400"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></Iframe>
            </div>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}

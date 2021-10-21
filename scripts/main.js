let links = document.querySelectorAll('.menu > div > div > ul > li > a');
let arr = Array.from(links);
arr.forEach((i) => {
  i.addEventListener('click', () => {
    document.querySelector('.toggler').checked = false;
  });
});

const btn = document.querySelector('.button_more_btn');
const morePhotos = document.getElementById('seeMorePhotos');

btn.addEventListener('click', function () {
  morePhotos.style.display = 'inline-flex';
  btn.style.display = 'none';
});

$(document).ready(function () {
  // // if (localStorage.getItem('language') === 'pl') {
  // //   translatePL();
  // // }
  // if (localStorage.getItem('language') === 'en') {
  //   translateEN();
  // }

  $('.accordion_item > h3').on('click', function () {
    $('.accordion_item > .box-accordion').each(function (k, v) {
      $(v).css('display', 'none');
      $(v).prev().children().removeClass('turned');
    });
    $(this).next().fadeToggle();
    $(this).children().addClass('turned');
  });
  $('.regulamin-btn-expand').on('click', function () {
    $(this).css({ opacity: '0', visibility: 'hidden' });
    $('.regulamin-btn-less').css({ opacity: '1', visibility: 'unset' });
    $('.regulamin-text-expanded').fadeIn();
  });
  $('.regulamin-btn-less').on('click', function () {
    $(this).css({ opacity: '0', visibility: 'hidden' });
    $('.regulamin-btn-expand').css({ opacity: '1', visibility: 'unset' });
    $('.regulamin-text-expanded').fadeOut();
  });

  if (localStorage.getItem('language') === 'en') {
    translateEN();
  }

  function translatePL() {
    $('.header__nav a[href="#o_nas_link"]').text('O nas');
    $('.header__nav a[href="#galeria_link"]').text('Galeria');
    $('.header__nav a[href="#regulamin_link"]').text('Regulamin');
    $('.header__nav a[href="#faq_link"]').text('FAQ');
    $('.header__nav a[href="#kontakt_link"]').text('Kontakt');

    $('.ham-about').text('O nas');
    $('.ham-gallery').text('Galeria');
    $('.ham-regulamin').text('Regulamin');
    $('.ham-faq').text('FAQ');
    $('.ham-kontakt').text('Kontakt');

    $('#o_nas').html(`
    <span id="o_nas_link"></span>
    <div>
            <h1 class="about__header">O Nas</h1>
            <p class="about__text"><strong>Dirty Lust Tattoo Studio</strong> znajduje się w samym centrum Warszawy.</p>
            <p class="about__text">Wykonujemy tatuaże cieniowane i kolorowe. Duże i małe.</p>
            <p class="about__text" style="margin-top: .85em">Zapraszamy na interpretacje Waszych pomysłów w stylach naszych artystów.</p>
            <p class="about__text"><strong>Konsultacja oraz wycena są zawsze darmowe!</strong></p>
            <p class="about__text" style="margin-top: .85em">Masz pomysł, ale nie masz projektu?! Świetnie trafiłeś! Specjalnie dla Ciebie stworzymy oryginalny tatuaż!</p>
            <p class="about__text" style="margin-top: .85em">Od 2012 roku mamy tysiące zadowolonych klientów!</p>
            <p class="about__text" style="margin-top: 1em"><strong>Czekamy na wiadomość od Ciebie!</strong>.</p>
        </div>
    `);

    $('#regulamin').html(`
      <span id="regulamin_link"></span>
      <div class="regulamin__inner">
        <h1 class="regulamin__header">REGULAMIN</h1>
        <div>1. Klient zobowiązany jest do zapoznania się z treścią regulaminu studia Dirty Lust Tattoo Studio (dalej: studio).</div>
        <div>2. Zasady bezpieczeństwa i higieny:
          <p class="p-left-10">a) Osoby przebywające w studiu zobowiązane są do noszenia maseczek zasłaniających nos i usta.</p>
          <p class="p-left-10">b) Studio zapewnia środki do dezynfekcji rąk.</p>
          <p class="p-left-10">c) Studio zapewnia sterylność używanych do zabiegu narzędzi i materiałów.</p>
          <p class="p-left-10">d) W studiu mogą przebywać wyłącznie pracownicy i klienci, a w przypadku gdy klient wymaga opieki, także jego opiekun.
          </p>
          <p class="p-left-10">e) Ze względów bezpieczeństwa i sanitarnych nie mogą przebywać osoby towarzyszące, dzieci oraz zwierzęta – z wyjątkiem psów przewodników (podczas zabiegu pies przebywać będzie w poczekalni).</p>
          <p class="p-left-10">f) Do studia należy przybyć na umówioną godzinę.</p>
          <p class="p-left-10">g) Studio, za zgodą klienta, może pozyskać niezbędne dane osobowe w przypadku konieczności powiadomienia o potencjalnym kontakcie z osobą zakażoną oraz oceny ryzyka narażenia na zakażenie SARS-CoV-2 (art. 9 ust. 2 lit. i RODO).</p>
          <p class="p-left-10">h) W studiu obowiązuje całkowity zakaz palenia tytoniu oraz spożywania napojów alkoholowych i innych używek. Studio nie wykonuje zabiegów osobom będącym pod wpływem alkoholu lub środków odurzających.</p>
          <p class="p-left-10">i) W studiu obowiązuje bezwzględny zakaz dotykania przedmiotów służących do wykonywania tatuażu oraz materiałów pomocniczych. Nie przestrzeganie zaleceń grozi trwałą utratą zdrowia.</p>
          <p class="p-left-10">j) Zabrania się rozkładania prywatnych rzeczy na biurkach tatuatorów.</p>
          <p class="p-left-10">k) Zabrania się spożywania posiłków w miejscu wykonywania zabiegu (nie dotyczy napojów).</p>
          <p class="p-left-10">l) Studio wykonuje zabiegi tylko osobom pełnoletnim. W przypadku niepełnoletności (od 16 roku życia) zabiegi wykonywane są wyłącznie za zgodą osobistą i pisemną opiekunów prawnych oraz w ich obecności.</p>
        </div>
        <button class="regulamin-btn-expand">
          <svg class="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          Rozwiń
        </button>
        <div class="regulamin-text-expanded">
        <div>3. Zasady dotyczące zapisów:
          <p class="p-left-10">a) Cena każdego tatuażu ustalana jest indywidualnie.</p>
          <p class="p-left-10">b) Przed dokonaniem zapisu należy odbyć konsultację telefoniczną lub on-line. Podczas konsultacji omawiane są informacje dotyczące wzoru, planu jego rozmieszczenia, porady w kwestii kolorystyki  i doboru pozostałych elementów.</p>
          <p class="p-left-10">c) W celu rezerwacji terminu klient zobowiązany jest do wpłaty zadatku w wysokości 50% ceny tatuażu. Zadatek należy również wpłacić za każdy kolejny ustalony termin. Na wpłatę zadatku na konto bankowe oczekujemy 3 dni robocze od ustalenia terminu sesji. Po tym okresie zarezerwowany termin tatuowania zostanie anulowany.</p>
          <p class="p-left-10">d) Zadatek jest bezzwrotny w przypadku rezygnacji klienta. Nie przybycie w wyznaczonym terminie sesji lub brak powiadomienia na minimum 7 dni przed wykonaniem zabiegu skutkuje utratą wpłaconego zadatku.</p>
          <p class="p-left-10">e) Studio zastrzega sobie prawo do zmiany ustalonego terminu wykonania tatuażu.</p>
          <p class="p-left-10">f) Dokonanie opłaty (zadatek) jest równoznaczne z akceptacją regulaminu oraz wyrażeniem zgody na wykonanie zabiegu.</p>
        </div>
        <div>4. Zasady dotyczące projektu oraz wykonania:
          <p class="p-left-10">a) Tatuatorzy przygotowują projekty w dniu umówionej sesji (wcześniej przygotowany projekt jest indywidualną decyzją tatuatora).</p>
          <p class="p-left-10">b) Projekty i tatuaże objęte są prawami autorskimi. Kopiowanie jest zabronione.</p>
          <p class="p-left-10">c) Studio zastrzega sobie prawa autorskie do wykonanych zdjęć i prac.</p>
          <p class="p-left-10">d) W trakcie sesji następuje ostateczne ustalenie wzoru, plan jego rozmieszczenia, rozmiaru, kolorystyki, doboru innych elementów tatuażu oraz przygotowania się do zabiegu.</p>
          <p class="p-left-10">e) Tatuator może odmówić wykonania tatuażu jeśli uzna, że zagraża on zdrowiu lub też kłóci się z jego poglądami.</p>
          <p class="p-left-10">f) Tatuator może przerwać wykonanie zabiegu w przypadku stwierdzenia pogorszenia się samopoczucia klienta lub wystąpienia zmian w strukturze skóry (mocnych zaczerwienień, podkrwawień i nasilającego się wydobywania osocza z krwią).</p>
          <p class="p-left-10">g) W studiu wykonujemy tatuaże kryjące inne prace. Natomiast nie możemy zagwarantować, że będą one wyglądały jak wzory wykonywane na czystej, nie tatuowanej wcześniej skórze.</p>
        </div>
        <div>5. Zasady dotyczące pielęgnacji:
          <p class="p-left-10">a) Studio po wykonanym zabiegu informuje o zasadach pielęgnacji tatuażu.</p>
          <p class="p-left-10">b) Studio nie ponosi odpowiedzialności za nieprzestrzeganie zasad pielęgnacji po wykonanym zabiegu.</p>
          <p class="p-left-10">c) Studio nie ponosi odpowiedzialności za sposób zachowania się barwników na ciele. Każdy indywidualnie informowany jest o sposobie zachowania się pigmentów, ze względu na szeroko pojęty proces gojenia się ciała.</p>
          <p class="p-left-10">d) Jeżeli zachodzi potrzeba, wykonujemy jedną darmową poprawkę. Na poprawkę należy zgłosić się miesiąc po wykonaniu tatuażu. Po tym terminie poprawka będzie odpłatna.</p>
        </div>
          <button class="regulamin-btn-less">
            <svg class="arrow" style="transform: rotate(180deg) translateY(-5px)" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            Zwiń</button>
        </div>
      </div>
    `);

    $('#faq').html(`
    <span id="faq_link"></span>
    <h1 class="faq__header">FAQ</h1>
        <div id="accordion">
          <div class="accordion_item">
            <h3 class="title-accordion">
              <svg class="arrow turned" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              ENENJak umówić się na tatuaż?
            </h3>
            <div class="box-accordion" style="display: block;">
              <p>
                <p>Najlepszym rozwiązaniem jest, aby pierwszy kontakt odbył się online. Możesz do nas napisać przez:</p>

                <p>Facebook: <a target="_blank" href="https://www.facebook.com/DirtyLustStudio/">www.facebook.com/DirtyLustStudio</a>/</p>
                <p>Instagram: <a target="_blank" href="https://www.instagram.com/dirtylusttattoo/">www.instagram.com/DirtyLustTattoo/</a></p>
                <p>E-mail: <a href="mailto:info.dirtylust@gmail.com">info.dirtylust@gmail.com</a></p>
                <p>Messenger: <a target="_blank" href="https://www.m.me/DirtyLustStudio">www.m.me/DirtyLustStudio</a></p>
                <p>What’s App: <a href="tel:+48516499990">+48 516 499 990</a></p>
                
              </p>
            </div>
          </div>
          <div class="accordion_item">
            <h3 class="title-accordion">
              <svg class="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              Jak przygotować się do tatuowania?
            </h3>
            <div class="box-accordion">
              <p>
                <p>Zapoznaj się z regulaminem Dirty Lust Tattoo Studio Warszawa.</p>

                <p>Wyśpij się, wypocznij, zjedz kaloryczny posiłek przed tatuowaniem. Weź ze sobą coś do jedzenia i picia. Unikaj energetyków, kawy oraz cukru. Podwyższają ciśnienie i rozrzedzają krew. Może to spowodować większe krwawienie. Nie imprezuj (najlepiej kilka dni) przed tatuowaniem.</p>
                
                <p>Nawilżaj miejsce, które będzie tatuowane, ale nie rób tego w dzień zabiegu.</p>
                
                <p>Najlepiej, aby dzień tatuowania był wolny od obowiązków. Zwłaszcza jeżeli to początek Twojej przygody z tatuażami. Nie robimy tatuaży na czas. Jakikolwiek pośpiech jest niewskazany. Jeżeli robisz duży tatuaż, możesz zadbać o to, by następny dzień mieć również wolnym od zobowiązań (lub nawet dwa). Będzie Ci wtedy o wiele łatwiej zadbać o świeżą ozdobę i poświecić jej więcej uwagi na samym początku, co jest kluczowe dla prawidłowego procesu gojenia. Ponadto, masz o wiele lepszy komfort psychiczny podczas tych dni będąc w domu.</p>
                
                <p>Jeżeli robisz duży tatuaż, odradzamy przyjazd motocyklem lub samochodem. Kilkugodzinna sesja tatuowania może spowodować duży dyskomfort podczas powrotu do domu. Prowadzenie pojazdu może być utrudnione ze względu na nieodpowiednią koncentrację po zabiegu.</p>
                
                <p>Weź ze sobą ubrania, których nie będzie Ci szkoda, jeżeli się ubrudzą oraz takie, które umożliwią dostęp do tatuowanego miejsca. Licz się z tym, że w niektórych przypadkach dla najlepszego efektu umiejscowienia tatuażu (odbicia kalki) trzeba będzie się rozebrać. Ze swojej strony postaramy się przeprowadzić ten proces w najbardziej komfortowych dla Ciebie warunkach.</p>
                
                <p>Zapytaj tatuażystę o to, jak masz się przygotować do gojenia tatuażu oraz w co ewentualnie się wcześniej zaopatrzyć. W zależności od wielkości, miejsca i stylu - metody pielęgnacji mogą być różne.</p>
                
                <p>Bardzo prosimy, by zadbać o higienę osobistą przed zabiegiem.</p>
                
                <p>Mamy w studiu nieograniczony dostęp do wi-fi. Jeżeli to Ci pomoże/będziesz miał ochotę, a nie będzie to w żaden sposób utrudniać pracy Twojego tatuażysty oraz innych w studiu, jest możliwość korzystania z tabletów czy laptopów. Weź ze sobą słuchawki i ładowarkę.</p>
                
                <p>Nie gól miejsca, w którym będzie tatuaż. Zrobimy to na miejscu w studiu. Unikniemy w ten sposób zacięć lub podrażnień.</p>
                
                <p>Po wykonanym tatuażu dostaniesz od nas instrukcję, w jaki sposób najlepiej o niego zadbać.</p>
              </p>
            </div>
          </div>
          <div class="accordion_item">
            <h3 class="title-accordion">
              <svg class="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              Jak zadbać o świeży tatuaż?
            </h3>
            <div class="box-accordion">
              <p>
                Proces pielęgnacji może być różny w zależności od tego, w jakim stylu, jakiej wielkości oraz w jakim miejscu na ciele został wykonany tatuaż. Po zakończonym zabiegu dostaniesz od nas szczegółowe instrukcje, słowne i pisemne, jak dbać o swoją nową ozdobę. Jeżeli będziesz mieć jakiekolwiek pytania lub wątpliwości to pisz/dzwoń do nas. Jesteśmy do Twojej dyspozycji. Nie szukaj informacji w internecie, u rodziny ani przyjaciół. 
              </p>
            </div>
          </div>
        </div>
    `);

    $('.gallery__header').html('Galeria');

    $('.contact__box--header').html('Kontakt');
    $('.contact__box--info').html(`
    <div>
      <p class="first-line">Nr tel:</p>
      <p><a style="text-decoration: none; color: inherit;" href="tel:+48516499990">516 499 990</a></p>
      <p class="mb-small"><a style="text-decoration: none; color: inherit;" href="tel:+48660635856">660 635 856</a></p>
    </div>
    <div>
        <p class="first-line">Email:</p>
        <p class="mb-small"><a href="mailto:info.dirtylust@gmail.com" style="text-decoration: none; color: inherit;">info.dirtylust@gmail.com</a></p>
    </div>
    <div>
        <p class="first-line">Adres:</p>
        <p>ul. Raszyńska 3/6 <span style="font-size: 0.85em">(Plac Zawiszy)</span></p>
        <p class="mb-medium">02-026 Warszawa</p>
    </div>
    `);

    $('.accordion_item > h3').on('click', function () {
      $('.accordion_item > .box-accordion').each(function (k, v) {
        $(v).css('display', 'none');
        $(v).prev().children().removeClass('turned');
      });
      $(this).next().fadeToggle();
      $(this).children().addClass('turned');
    });

    $('.regulamin-btn-expand').on('click', function () {
      $(this).css({ opacity: '0', visibility: 'hidden' });
      $('.regulamin-btn-less').css({ opacity: '1', visibility: 'unset' });
      $('.regulamin-text-expanded').fadeIn();
    });
    $('.regulamin-btn-less').on('click', function () {
      $(this).css({ opacity: '0', visibility: 'hidden' });
      $('.regulamin-btn-expand').css({ opacity: '1', visibility: 'unset' });
      $('.regulamin-text-expanded').fadeOut();
    });
  }

  function translateEN() {
    $('.header__nav a[href="#o_nas_link"]').text('About us');
    $('.header__nav a[href="#galeria_link"]').text('Gallery');
    $('.header__nav a[href="#regulamin_link"]').text('Regulations');
    $('.header__nav a[href="#faq_link"]').text('FAQ');
    $('.header__nav a[href="#kontakt_link"]').text('Contact us');

    $('.ham-about').text('About us');
    $('.ham-gallery').text('Gallery');
    $('.ham-regulamin').text('Regulations');
    $('.ham-faq').text('FAQ');
    $('.ham-kontakt').text('Contact us');

    $('#o_nas').html(`
    <span id="o_nas_link"></span>
    <div>
            <h1 class="about__header">About us</h1>
            <p class="about__text"><strong>Dirty Lust Tattoo Studio</strong> is located in the center of Warsaw. We make shaded and colored, big and small tattoos.</p>
            <p class="about__text" style="margin-top: .85em">Our goal is interpretation of your ideas in the styles of our artists. We can turn your ideas into the body art you've always wanted.</p>
            <p class="about__text" style="margin-top: .85em"><strong>The consultation and valuation are always free!</strong></p>
            <p class="about__text" style="margin-top: .85em">Do you have an idea for tattoo but no project? You've come to a great place! We'll create original tattoo just for you.</p>
            <p class="about__text" style="margin-top: .85em">Thousands of satisfied customers since 2012</p>
            <p class="about__text" style="margin-top: 1em"><strong>We look forward to hearing from you!</strong>.</p>
        </div>
    `);

    $('#regulamin').html(`
    <span id="regulamin_link"></span>
      <div class="regulamin__inner">
        <h1 class="regulamin__header">REGULATIONS</h1>
        <div>1. The customer is obliged to read the Regulations of Dirty Lust Tattoo Studio
        (hereinafter: studio).</div>
        <div>2. Safety and hygiene rules:
          <p class="p-left-10">a) Every person at the studio grounds is required to cover their mouths and nose with
          a mask.</p>
          <p class="p-left-10">b) Studio provides access to the disinfecting agents.</p>
          <p class="p-left-10">c) Studio ensures the sterility of tools and materials used for the treatment.</p>
          <p class="p-left-10">d) Only employees and customers may stay in the studio, and if the customer requires
          care, also his caregiver.</p>
          <p class="p-left-10">e) No animals, except for guide dogs accompanying disabled persons, shall be allowed in
          the studio.</p>
          <p class="p-left-10">f) You must come to the studio at the agreed time.</p>
          <p class="p-left-10">g) Studio, with the consent of the customer, may obtain the necessary personal data if it
          is necessary to notify about a potential contact with an infected person and to assess
          the risk of exposure to SARS-CoV-2 infection (Article 9(2)(i) GDPR).</p>
          <p class="p-left-10">h) Use of tobacco products and drugs shall be prohibited in the studio. Consumption of
          alcoholic beverage shall be prohibited in the studio. Studio shall refuse services to any
          person, who in the opinion of the staff is under the influence of alcohol or drugs.</p>
          <p class="p-left-10">i) Touch of tools, materials and products for the treatment shall be prohibited in the
          studio.</p>
          <p class="p-left-10">j) Put of private stuff on the desk of tattoo artist shall be prohibited in the studio.</p>
          <p class="p-left-10">k) Eat shall be prohibited in the tattooing area (except for drink).</p>
          <p class="p-left-10">l) No person under the age of eighteen (18) shall be tattooed. From the age of sixteen
          (16), treatments are made only with the personal and written consent of legal
          guardians and in their presence.</p>
        </div>
        <button class="regulamin-btn-expand">
          <svg class="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          More
        </button>
        <div class="regulamin-text-expanded">
        <div>3. Making an appointment rules:
          <p class="p-left-10">a) The price of each tattoo shall be fixed individually.</p>
          <p class="p-left-10">b) Consultation (phone or on-line) shall take place before making an appointment.
          During the consultation, you will be asked to provide preference and placement. We
          advise on colors and the selection of other elements.</p>
          <p class="p-left-10">c) The customer is required to pay a deposit of 50% for the reservation of an
          appointment. The deposit is also required for an each one appointment. The customer
          is required to pay a deposit to the bank account within three (3) working days of the
          consultation. In the case of lack of payment the appointment is canceled.</p>
          <p class="p-left-10">d) The deposit is non-refundable unless cancellation of appointment is made up to 7 days
          before the agreed date of the tattoo.</p>
          <p class="p-left-10">e) Studio reserves the right to change the agreed date of the tattoo.</p>
          <p class="p-left-10">f) By paying a deposit, you agree to the regulations of studio and permission to the
          treatment.</p>
        </div>
        <div>4. Project and making tattoos rules:
          <p class="p-left-10">a) Tattoo artists prepare designs on the day of the agreed session (a previously prepared
            design is an individual decision of the tattoo artist).</p>
          <p class="p-left-10">b) Designs and tattoos are covered by copyright laws. Any copying is prohibited.</p>
          <p class="p-left-10">c) Studio reserves the copyright for the photos and works taken.</p>
          <p class="p-left-10">d) The final determination of the design, placement, size, color and other elements
          (also preparation for the treatment) takes place during the appointment.</p>
          <p class="p-left-10">e) The tattoo artist may refuse to make a tattoo if he recognize it to be a health hazard or
          if it against his beliefs.</p>
          <p class="p-left-10">f) In the case of the customer feeling unwell or the occurrence of changes in his skin
          structure (heavy bleeding, heavy reddening) tattoo artist can stop the treatment.</p>
          <p class="p-left-10">g) We make tattoos covering other works. We do not guarantee that they will look like
          designs made on clean, non-tattooed skin.</p>
        </div>
        <div>5. Aftercare rules:
          <p class="p-left-10">a) Studio informs you about the rules of tattoo care after the treatment.</p>
          <p class="p-left-10">b) Studio is not responsible for non-compliance with the care rules after the treatment.</p>
          <p class="p-left-10">c) Studio is not responsible for the preservation of dyes/pigments on the customer’s skin.
          Everyone is individually informed about the preservation of dyes/pigments due to the
          widely understood healing process of the body.</p>
          <p class="p-left-10">d) We make one free correction if it is necessary. The customer should come for
          a correction one (1) month after the treatment. After this date, the correction will be
          payable.</p>
        </div>
          <button class="regulamin-btn-less">
            <svg class="arrow" style="transform: rotate(180deg) translateY(-5px)" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            Less</button>
        </div>
      </div>
    `);

    $('#faq').html(`
    <span id="faq_link"></span>
    <h1 class="faq__header">FAQ</h1>
        <div id="accordion">
          <div class="accordion_item">
            <h3 class="title-accordion">
              <svg class="arrow turned" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              How to make an appointment for a tattoo?
            </h3>
            <div class="box-accordion" style="display: block;">
              <p>
                <p>The best way for the first contact is the on-line message. You can write to us via:</p>

                <p>Facebook: <a target="_blank" href="https://www.facebook.com/DirtyLustStudio/">www.facebook.com/DirtyLustStudio</a>/</p>
                <p>Instagram: <a target="_blank" href="https://www.instagram.com/dirtylusttattoo/">www.instagram.com/DirtyLustTattoo/</a></p>
                <p>E-mail: <a href="mailto:info.dirtylust@gmail.com">info.dirtylust@gmail.com</a></p>
                <p>Messenger: <a target="_blank" href="https://www.m.me/DirtyLustStudio">www.m.me/DirtyLustStudio</a></p>
                <p>What’s App: <a href="tel:+48516499990">+48 516 499 990</a></p>
                
              </p>
            </div>
          </div>
          <div class="accordion_item">
            <h3 class="title-accordion">
              <svg class="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              How to prepare for a tattooing?
            </h3>
            <div class="box-accordion">
              <p>
                <p>Read the Regulations of Dirty Lust Tattoo Studio.</p>

                <p>Sleep well, get rest, eat caloric meal before tattooing. Bring something for a drink and
                eat to the appointment. Avoid energy drinks, coffee and sugar – they raise the blood
                pressure and thin the blood. This may cause more bleeding. Don't party a few days
                before tattooing.</p>
                
                <p>Moisturize the place which be tattooed, but don't do this on the day of the treatment.</p>
                
                <p>The day of the treatment should be free of duties. Especially, if you begin your
                adventure with tattoos. We do not rush. This is a bad idea.</p>
                
                <p>If you make a big tattoo, we recommend that the next day (or two days) should be free
                of duties. This will be easier for you to take care of your fresh tattoo. The first days
                after the treatment are crucial for the healing process. Moreover, you have much better
                psychological comfort during these days if you stay at home.</p>
                
                <p>If you make a big tattoo, we don’t recommend travel by a car or motorcycle. A several
                hours of tattooing can cause a lot of discomfort during driving home. Driving may be
                difficult due to inadequate concentration after the procedure.</p>
                
                <p>Wearing clothes that you won't feel sorry for if they get dirty. Your clothing should
                allow access to the tattooing place. Please, keep in mind that in some cases you may
                be asked to undress for better design placement. We will take care for your comfort.</p>
                
                <p>Ask your tattoo artist how you should to prepare to healing fresh tattoo and what you
                should buy. Care methods may be different – it depends on size, placement and style
                of your tattoo.</p>
                
                <p>We kindly ask you to take care of personal hygiene before the treatment.</p>
                
                <p>We have unlimited access to Wi-Fi at our studio. You can using your tablet or laptop if
                it won’t disturb you tattoo artist and another people. Take your headphones and
                charger.</p>
                
                <p>Do not shape the place where the tattoo will be. We will shape this place at the studio
                – this will avoid scratches.</p>

                <p>After the tattoo is done, we will give you instructions on how to best take care of it.</p>
              </p>
            </div>
          </div>
          <div class="accordion_item">
            <h3 class="title-accordion">
              <svg class="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1424 9.07107L9.07129 16.1421L2.00022 9.07107" stroke="#B49960" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              How to take care of your new tattoo?
            </h3>
            <div class="box-accordion">
              <p>
              Care methods may be different – it depends on size, placement and style of your
              tattoo. After the tattoo is done, we will give you instructions on how to best take care of it. If you will have any question – write or call to us. We are there for you. Don't look for
              information on the internet, from family or friends.
              </p>
            </div>
          </div>
        </div>
    `);

    $('.gallery__header').html('Gallery');

    $('.contact__box--header').html('Contact us');
    $('.contact__box--info').html(`
    <div>
      <p class="first-line">Phone:</p>
      <p><a style="text-decoration: none; color: inherit;" href="tel:+48516499990">516 499 990</a></p>
      <p class="mb-small"><a style="text-decoration: none; color: inherit;" href="tel:+48660635856">660 635 856</a></p>
    </div>
    <div>
        <p class="first-line">Email:</p>
        <p class="mb-small"><a href="mailto:info.dirtylust@gmail.com" style="text-decoration: none; color: inherit;">info.dirtylust@gmail.com</a></p>
    </div>
    <div>
        <p class="first-line">Address:</p>
        <p>ul. Raszyńska 3/6 <span style="font-size: 0.85em">(Plac Zawiszy)</span></p>
        <p class="mb-medium">02-026 Warszawa</p>
    </div>
    `);

    $('.accordion_item > h3').on('click', function () {
      $('.accordion_item > .box-accordion').each(function (k, v) {
        $(v).css('display', 'none');
        $(v).prev().children().removeClass('turned');
      });
      $(this).next().fadeToggle();
      $(this).children().addClass('turned');
    });

    $('.regulamin-btn-expand').on('click', function () {
      $(this).css({ opacity: '0', visibility: 'hidden' });
      $('.regulamin-btn-less').css({ opacity: '1', visibility: 'unset' });
      $('.regulamin-text-expanded').fadeIn();
    });
    $('.regulamin-btn-less').on('click', function () {
      $(this).css({ opacity: '0', visibility: 'hidden' });
      $('.regulamin-btn-expand').css({ opacity: '1', visibility: 'unset' });
      $('.regulamin-text-expanded').fadeOut();
    });
  }

  $('.header__logo').on('click', function () {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  });

  $('.pl-button').on('click', function () {
    localStorage.setItem('language', 'pl');
    $('body').removeClass('slideupp');

    $('body').addClass('slidedownn');
    setTimeout(function () {
      translatePL();
      $('body').addClass('slideupp');
      $('body').removeClass('slidedownn');
    }, 700);
  });

  $('.en-button').on('click', function () {
    localStorage.setItem('language', 'en');
    $('body').removeClass('slideupp');

    $('body').addClass('slidedownn');
    setTimeout(function () {
      translateEN();
      $('body').addClass('slideupp');
      $('body').removeClass('slidedownn');
    }, 700);
  });

  console.log(languageSet);
  if (
    !localStorage.getItem('language') ||
    localStorage.getItem('language') === 'pl'
  ) {
    console.log('POLISH');
  }
});

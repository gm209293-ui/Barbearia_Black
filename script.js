"use strict";

// Edite este objeto para reutilizar o site em outra barbearia.
const siteConfig = {
  isDemo: true,
  language: "pt-BR",
  currency: "BRL",
  business: {
    name: "Barbearia Black",
    brandMark: "B",
    monogram: "BB",
    stampLines: ["ESTILO", "SEMPRE"],
    slogan: "Seu estilo. Seu melhor momento.",
    description:
      "Na {businessName}, o ritual vai além da cadeira: é tempo para cuidar do visual, desacelerar e sair se sentindo bem. Esta página é uma demonstração de como a história e a personalidade da sua barbearia podem ganhar espaço online.",
  },
  seo: {
    title: "Barbearia Black | Demonstração comercial",
    description:
      "Demonstração de site para barbearia: conheça os serviços, explore a experiência mobile e teste o fluxo de agendamento.",
    locale: "pt_BR",
    siteUrl: "",
    socialImage: "",
  },
  sectionTitles: {
    services: "Nossos serviços",
    about: "O cuidado está nos detalhes.",
    gallery: "Galeria",
    contact: "Entre em contato",
    booking: "Solicite um agendamento",
  },
  texts: {
    brandCaption: "BARBEARIA • ESTILO",
    headerBookingButton: "Agendar horário",
    demoNotice: "Demonstração comercial — marca, preços, localização e contatos são ilustrativos.",
    heroEyebrow: "CUIDADO CLÁSSICO. ATITUDE CONTEMPORÂNEA.",
    heroCaption: "Uma experiência de barbearia pensada para você.",
    bookingButton: "Agendar horário",
    servicesEyebrow: "O ESSENCIAL, BEM FEITO",
    servicesDemoNote: "Serviços e valores exibidos são exemplos demonstrativos.",
    servicesBookingLink: "Escolha seu serviço e solicite um horário",
    aboutEyebrow: "MAIS QUE UM CORTE",
    aboutVertical: "BARBEARIA BLACK · DEMONSTRAÇÃO",
    aboutContactLink: "Fale conosco",
    galleryEyebrow: "INSPIRAÇÃO PARA O SEU PRÓXIMO VISUAL",
    galleryDemoNote: "As imagens são referências visuais e não representam o espaço ou os profissionais de uma empresa real.",
    contactEyebrow: "ESTAMOS POR AQUI",
    locationEyebrow: "LOCALIZAÇÃO",
    locationTitle: "Encontre seu novo estilo",
    contactMethodsEyebrow: "FALE CONOSCO",
    hoursEyebrow: "FUNCIONAMENTO",
    instagramPrefix: "Instagram: ",
    phoneLabel: "Telefone demonstrativo — não disponível.",
    emailLabel: "E-mail demonstrativo — não disponível.",
    bookingNameLabel: "Nome",
    bookingNamePlaceholder: "Seu nome completo",
    bookingServiceLabel: "Serviço desejado",
    serviceSelectPlaceholder: "Selecione um serviço",
    bookingDateLabel: "Data desejada",
    bookingTimeLabel: "Horário desejado",
    servicesButton: "Conheça nossos serviços",
    heroScroll: "Descubra a experiência",
    addressFallback: "Localização a configurar.",
    hoursFallback: "Horários a configurar.",
    instagramLink: "Visite nosso Instagram",
    hero:
      "Um bom corte muda o visual. Um bom atendimento transforma o momento. Descubra uma experiência feita para você.",
    services: "Clássicos da barbearia, com atenção a cada detalhe. Escolha o cuidado que combina com você.",
    gallery: "Uma seleção de referências visuais para esta demonstração.",
    contact: "Tire dúvidas ou experimente o fluxo de solicitação de horário. Os dados abaixo são demonstrativos.",
    booking: "Escolha o serviço e o melhor horário para enviar sua solicitação.",
  },
  footer: {
    text: "Site demonstrativo — informações ilustrativas.",
  },
  contact: {
    phoneDisplay: "",
    phone: "",
    whatsapp: "5511964841356",
    instagram: "",
    instagramHandle: "",
    email: "",
    address: "Localização demonstrativa — endereço fictício.",
    hours: "Horários ilustrativos para esta demonstração",
    addressNote: "Região ilustrativa. Este estabelecimento não existe neste endereço.",
  },
  structuredAddress: {
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "BR",
  },
  colors: {
    background: "#10100f",
    surface: "#181817",
    surfaceRaised: "#20201e",
    text: "#f4f1eb",
    muted: "#b7b2a8",
    accent: "#c9a45c",
    accentLight: "#e2c47f",
    border: "rgb(226 196 127 / 18%)",
  },
  services: [
    { name: "Corte", price: 40, description: "Cortes clássicos e modernos, feitos com atenção aos detalhes." },
    { name: "Barba", price: 30, description: "Cuidados para deixar sua barba alinhada e bem cuidada." },
    { name: "Corte + Barba", price: 60, description: "Uma combinação completa para renovar o visual." },
    { name: "Sobrancelha", price: 20, description: "Acabamento cuidadoso para completar seu visual." },
  ],
  images: {
    hero: {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
      alt: "Interior de barbearia em foto ilustrativa",
      caption: "Imagem ilustrativa — não representa um estabelecimento real.",
    },
    gallery: [
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=85",
      alt: "Interior de barbearia em foto ilustrativa",
      caption: "Interior de barbearia — imagem ilustrativa.",
    },
    {
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85",
      alt: "Barbeiro trabalhando em um corte — foto ilustrativa",
      caption: "Um cuidado feito nos detalhes — imagem ilustrativa.",
    },
    {
      src: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=900",
      alt: "Ferramentas e ambiente de barbearia — foto ilustrativa",
      caption: "O ritual da barbearia — imagem ilustrativa.",
    },
    ],
  },
};

const moneyFormatter = new Intl.NumberFormat(siteConfig.language, {
  style: "currency",
  currency: siteConfig.currency,
});

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
}

function setTextAfterDecoration(selector, text) {
  const element = document.querySelector(selector);
  if (element?.lastChild) {
    element.lastChild.textContent = ` ${text}`;
  }
}

function formatBusinessText(text) {
  return text.replace(/\{businessName\}/g, siteConfig.business.name);
}

function getHttpsUrl(value) {
  if (!value) {
    return "";
  }

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function getSafeImageSource(value) {
  if (typeof value !== "string" || !value) {
    return "";
  }

  if (value.startsWith("data:image/svg+xml,")) {
    return value;
  }

  try {
    const url = new URL(value, document.baseURI);
    const isHttps = url.protocol === "https:";
    const isSameOriginHttp = url.protocol === "http:" && url.origin === window.location.origin;
    const isLocalFile = url.protocol === "file:" && window.location.protocol === "file:";
    return isHttps || isSameOriginHttp || isLocalFile ? url.href : "";
  } catch {
    return "";
  }
}

function applySiteConfiguration() {
  const seoTitle = siteConfig.seo.title || `${siteConfig.business.name} | Barbearia`;
  const seoDescription =
    siteConfig.seo.description || `${siteConfig.business.name}: ${siteConfig.business.slogan}`;
  document.documentElement.lang = siteConfig.language;
  document.title = seoTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", seoDescription);
  document.querySelector('meta[property="og:site_name"]')?.setAttribute("content", siteConfig.business.name);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", seoTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", seoDescription);
  document.querySelector('meta[property="og:locale"]')?.setAttribute("content", siteConfig.seo.locale);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", seoTitle);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", seoDescription);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", siteConfig.colors.background);

  const socialImage = getHttpsUrl(siteConfig.seo.socialImage);
  let openGraphImage = document.querySelector('meta[property="og:image"]');
  if (socialImage) {
    if (!openGraphImage) {
      openGraphImage = document.createElement("meta");
      openGraphImage.setAttribute("property", "og:image");
      document.head.append(openGraphImage);
    }
    openGraphImage.content = socialImage;
  } else {
    openGraphImage?.remove();
  }
  document.querySelector('meta[name="twitter:card"]')?.setAttribute(
    "content",
    socialImage ? "summary_large_image" : "summary",
  );

  const siteUrl = getHttpsUrl(siteConfig.seo.siteUrl);
  let openGraphUrl = document.querySelector('meta[property="og:url"]');
  if (siteUrl) {
    if (!openGraphUrl) {
      openGraphUrl = document.createElement("meta");
      openGraphUrl.setAttribute("property", "og:url");
      document.head.append(openGraphUrl);
    }
    openGraphUrl.content = siteUrl;
  } else {
    openGraphUrl?.remove();
  }

  let structuredData = document.querySelector("#barbershop-structured-data");
  if (!structuredData) {
    structuredData = document.createElement("script");
    structuredData.id = "barbershop-structured-data";
    structuredData.type = "application/ld+json";
    document.head.append(structuredData);
  }

  const businessData = {
    "@context": "https://schema.org",
    "@type": siteConfig.isDemo ? "WebSite" : "Barbershop",
    name: siteConfig.business.name,
    description: seoDescription,
  };
  if (siteConfig.isDemo) {
    businessData.alternateName = "Demonstração comercial de site para barbearia";
  }
  if (socialImage) {
    businessData.image = socialImage;
  }
  if (!siteConfig.isDemo) {
    const configuredPhone = siteConfig.contact.phone.replace(/\D/g, "");
    if (configuredPhone.length >= 10 && configuredPhone.length <= 15 && !/^0+$/.test(configuredPhone)) {
      businessData.telephone = `+${configuredPhone}`;
    }

    const configuredAddress = Object.fromEntries(
      Object.entries(siteConfig.structuredAddress).filter(
        ([key, value]) => value && (key !== "addressCountry" || siteConfig.structuredAddress.streetAddress),
      ),
    );
    if (configuredAddress.streetAddress) {
      businessData.address = {
        "@type": "PostalAddress",
        ...configuredAddress,
      };
    }

    const instagramUrl = getHttpsUrl(siteConfig.contact.instagram);
    if (instagramUrl) {
      businessData.sameAs = [instagramUrl];
    }
  }
  if (siteUrl) {
    businessData.url = siteUrl;
  }
  structuredData.textContent = JSON.stringify(businessData).replace(/</g, "\\u003c");

  setText("#business-name", siteConfig.business.name);
  setText("#business-mark", siteConfig.business.brandMark);
  setText("#business-monogram", siteConfig.business.monogram);
  setText("#about-monogram", siteConfig.business.monogram);
  const stampLabel = document.querySelector(".hero-stamp > span:last-child");
  if (stampLabel?.childNodes.length >= 3) {
    stampLabel.childNodes[0].textContent = siteConfig.business.stampLines[0];
    stampLabel.childNodes[2].textContent = siteConfig.business.stampLines[1];
  }
  setText("#titulo-principal", siteConfig.business.slogan);
  setText("#titulo-servicos", siteConfig.sectionTitles.services);
  setText("#titulo-sobre", formatBusinessText(siteConfig.sectionTitles.about));
  setText("#titulo-galeria", siteConfig.sectionTitles.gallery);
  setText("#titulo-contato", siteConfig.sectionTitles.contact);
  setText("#booking-form-title", siteConfig.sectionTitles.booking);
  setText("#brand-caption", siteConfig.texts.brandCaption);
  setText("#header-booking-button", siteConfig.texts.headerBookingButton);
  setText("#demo-notice", siteConfig.texts.demoNotice);
  setTextAfterDecoration("#hero-eyebrow", siteConfig.texts.heroEyebrow);
  setText("#hero-caption", siteConfig.texts.heroCaption);
  setText("#hero-booking-button", siteConfig.texts.bookingButton);
  setText("#hero-services-button", siteConfig.texts.servicesButton);
  setTextAfterDecoration("#hero-scroll-label", siteConfig.texts.heroScroll);
  setText("#services-eyebrow", siteConfig.texts.servicesEyebrow);
  setText("#services-demo-note", siteConfig.texts.servicesDemoNote);
  setText("#services-booking-link", siteConfig.texts.servicesBookingLink);
  setText("#about-eyebrow", siteConfig.texts.aboutEyebrow);
  setText("#about-vertical", siteConfig.texts.aboutVertical);
  setText("#about-contact-link", siteConfig.texts.aboutContactLink);
  setText("#gallery-eyebrow", siteConfig.texts.galleryEyebrow);
  setText("#gallery-demo-note", siteConfig.texts.galleryDemoNote);
  setText("#contact-eyebrow", siteConfig.texts.contactEyebrow);
  setText("#location-eyebrow", siteConfig.texts.locationEyebrow);
  setText("#location-title", siteConfig.texts.locationTitle);
  setText("#contact-methods-eyebrow", siteConfig.texts.contactMethodsEyebrow);
  setText("#hours-eyebrow", siteConfig.texts.hoursEyebrow);
  setText("#booking-name-label", siteConfig.texts.bookingNameLabel);
  document.querySelector("#booking-name")?.setAttribute("placeholder", siteConfig.texts.bookingNamePlaceholder);
  setText("#booking-service-label", siteConfig.texts.bookingServiceLabel);
  setText("#booking-date-label", siteConfig.texts.bookingDateLabel);
  setText("#booking-time-label", siteConfig.texts.bookingTimeLabel);
  setText("#hero-image-caption", siteConfig.images.hero.caption);
  setText("#hero-description", formatBusinessText(siteConfig.texts.hero));
  setText("#services-description", siteConfig.texts.services);
  setText("#about-description", formatBusinessText(siteConfig.business.description));
  setText("#gallery-description", siteConfig.texts.gallery);
  setText("#contact-description", siteConfig.texts.contact);
  setText("#booking-description", siteConfig.texts.booking);
  setText("#booking-submit", siteConfig.texts.bookingButton);
  setText("#business-address", siteConfig.contact.address || siteConfig.texts.addressFallback);
  setText("#location-note", siteConfig.contact.addressNote);
  setText("#business-hours", siteConfig.contact.hours || siteConfig.texts.hoursFallback);
  setText(
    "#copyright",
    `© ${new Date().getFullYear()} ${siteConfig.business.name}. ${siteConfig.footer.text}`,
  );
  setText("#phone-fallback", siteConfig.texts.phoneLabel);
  setText("#email-fallback", siteConfig.texts.emailLabel);
  setText("#service-placeholder", siteConfig.texts.serviceSelectPlaceholder);

  const logoLink = document.querySelector("header > a");
  logoLink?.setAttribute("aria-label", `${siteConfig.business.name} — início`);

  const phoneContainer = document.querySelector("#business-phone");
  const phoneNumber = siteConfig.contact.phone.replace(/\D/g, "");
  if (phoneContainer) {
    phoneContainer.replaceChildren();
    if (phoneNumber.length >= 10 && phoneNumber.length <= 15 && !/^0+$/.test(phoneNumber)) {
      const phoneLink = document.createElement("a");
      phoneLink.href = `tel:+${phoneNumber}`;
      phoneLink.textContent = siteConfig.contact.phoneDisplay || `+${phoneNumber}`;
      phoneContainer.append(phoneLink);
    } else {
      phoneContainer.textContent = siteConfig.texts.phoneLabel;
    }
  }

  const emailContainer = document.querySelector("#business-email");
  if (emailContainer) {
    emailContainer.replaceChildren();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(siteConfig.contact.email)) {
      const emailLink = document.createElement("a");
      emailLink.href = `mailto:${siteConfig.contact.email}`;
      emailLink.textContent = siteConfig.contact.email;
      emailContainer.append(emailLink);
    } else {
      emailContainer.textContent = siteConfig.texts.emailLabel;
    }
  }

  const instagramContainer = document.querySelector("#business-instagram");
  if (instagramContainer) {
    const instagramUrl = getHttpsUrl(siteConfig.contact.instagram);
    instagramContainer.replaceChildren();
    if (instagramUrl) {
      const instagramLink = document.createElement("a");
      instagramLink.href = instagramUrl;
      instagramLink.target = "_blank";
      instagramLink.rel = "noopener noreferrer";
      instagramLink.textContent = siteConfig.contact.instagramHandle || siteConfig.texts.instagramLink;
      instagramContainer.append(siteConfig.texts.instagramPrefix, instagramLink);
      instagramContainer.hidden = false;
    } else {
      instagramContainer.hidden = true;
    }
  }

  const heroImage = document.querySelector("#hero-image");
  const heroImageCaption = document.querySelector(".hero-visual figcaption");
  const heroImageSource = getSafeImageSource(siteConfig.images.hero.src);
  if (heroImage && heroImageSource) {
    heroImage.src = heroImageSource;
    heroImage.alt = siteConfig.images.hero.alt;
    heroImageCaption.textContent = siteConfig.images.hero.caption;
  }

  Object.entries(siteConfig.colors).forEach(([name, value]) => {
    const cssName = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    document.documentElement.style.setProperty(`--color-${cssName}`, value);
  });

  const servicesList = document.querySelector("#service-list");
  if (servicesList) {
    const cards = siteConfig.services.map((service) => {
      const card = document.createElement("li");
      const title = document.createElement("h3");
      const description = document.createElement("p");
      const price = document.createElement("p");

      title.textContent = service.name;
      description.textContent = service.description;
      price.textContent = moneyFormatter.format(service.price);
      price.className = "service-price";
      card.append(title, description, price);
      return card;
    });
    servicesList.replaceChildren(...cards);
  }

  const serviceSelect = document.querySelector("#booking-service");
  if (serviceSelect instanceof HTMLSelectElement) {
    const placeholderOption = serviceSelect.options[0];
    serviceSelect.replaceChildren(placeholderOption);
    siteConfig.services.forEach((service) => {
      const option = document.createElement("option");
      option.value = service.name;
      option.textContent = `${service.name} — ${moneyFormatter.format(service.price)}`;
      serviceSelect.append(option);
    });
  }

  const galleryGrid = document.querySelector("#gallery-grid");
  const firstFigure = document.querySelector("#gallery-figure");
  if (galleryGrid && firstFigure) {
    if (siteConfig.images.gallery.length === 0) {
      firstFigure.remove();
    } else {
      siteConfig.images.gallery.forEach((imageConfig, index) => {
        const figure = index === 0 ? firstFigure : document.createElement("figure");
        const image = document.createElement("img");
        const caption = document.createElement("figcaption");
        const imageSource = getSafeImageSource(imageConfig.src);

        if (imageSource) {
          image.src = imageSource;
          image.alt = formatBusinessText(imageConfig.alt);
          image.loading = "lazy";
          image.decoding = "async";
          image.width = 600;
          image.height = 400;
          figure.replaceChildren(image, caption);
        } else {
          figure.replaceChildren(caption);
        }
        caption.textContent = formatBusinessText(imageConfig.caption);
        if (index > 0) {
          galleryGrid.append(figure);
        }
      });
    }
  }
}

applySiteConfiguration();

const header = document.querySelector("header");
const navigation = header?.querySelector("nav");

// Adiciona um botão de menu acessível por teclado em telas compactas.
if (header && navigation) {
  navigation.id = "navegacao-principal";
  header.classList.add("has-menu-toggle");

  const menuButton = document.createElement("button");
  menuButton.className = "menu-toggle";
  menuButton.type = "button";
  menuButton.setAttribute("aria-label", "Abrir menu");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-controls", navigation.id);
  menuButton.append(document.createElement("span"), document.createElement("span"), document.createElement("span"));
  header.insertBefore(menuButton, navigation);

  const mobileViewport = window.matchMedia("(max-width: 760px)");

  function setMenuOpen(isOpen) {
    header.classList.toggle("menu-open", isOpen && mobileViewport.matches);
    menuButton.setAttribute("aria-expanded", String(isOpen && mobileViewport.matches));
    menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  mobileViewport.addEventListener("change", () => setMenuOpen(false));
}

// Mantém os links de seção e rola suavemente até o destino.
document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }

  const link = event.target.closest('a[href^="#"]');
  if (!link) {
    return;
  }

  const targetId = link.getAttribute("href").slice(1);
  const target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  event.preventDefault();
  if (window.location.hash !== `#${targetId}`) {
    window.history.pushState(null, "", `#${targetId}`);
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({
    behavior: prefersReducedMotion ? "instant" : "smooth",
    block: "start",
  });
});

// Cria uma visualização ampliada e acessível para as imagens da galeria.
const gallery = document.querySelector("#galeria");
const galleryImages = gallery?.querySelectorAll("figure img");

if (gallery && galleryImages?.length && typeof HTMLDialogElement !== "undefined") {
  const dialog = document.createElement("dialog");
  dialog.className = "gallery-dialog";
  dialog.setAttribute("aria-label", "Imagem ampliada da galeria");

  const closeButton = document.createElement("button");
  closeButton.className = "gallery-dialog-close";
  closeButton.type = "button";
  closeButton.textContent = "Fechar";
  closeButton.setAttribute("aria-label", "Fechar imagem ampliada");

  const figure = document.createElement("figure");
  const enlargedImage = document.createElement("img");
  enlargedImage.alt = "";
  const caption = document.createElement("figcaption");
  figure.append(enlargedImage, caption);
  dialog.append(closeButton, figure);
  document.body.append(dialog);

  let lastFocusedElement = null;

  function closeGalleryDialog() {
    if (dialog.open) {
      dialog.close();
    }
  }

  galleryImages.forEach((image) => {
    const imageButton = document.createElement("button");
    imageButton.className = "gallery-image-button";
    imageButton.type = "button";
    imageButton.setAttribute("aria-label", `Ampliar imagem: ${image.alt || "imagem da galeria"}`);
    image.replaceWith(imageButton);
    imageButton.append(image);
  });

  gallery.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) {
      return;
    }

    const imageButton = event.target.closest(".gallery-image-button");
    const image = imageButton?.querySelector("img");
    if (!image) {
      return;
    }

    lastFocusedElement = imageButton;
    enlargedImage.src = image.currentSrc || image.src;
    enlargedImage.alt = image.alt;
    caption.textContent = image.closest("figure")?.querySelector("figcaption")?.textContent || image.alt;
    dialog.showModal();
    closeButton.focus();
  });

  closeButton.addEventListener("click", closeGalleryDialog);
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeGalleryDialog();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeGalleryDialog();
    }
  });

  dialog.addEventListener("close", () => {
    lastFocusedElement?.focus();
    lastFocusedElement = null;
  });
}

// Revela o conteúdo ao rolar, respeitando a preferência por menos movimento.
const supportsIntersectionObserver = "IntersectionObserver" in window;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (supportsIntersectionObserver && !prefersReducedMotion) {
  const revealElements = document.querySelectorAll(
    "main > section > h1, main > section > h2, main > section > p, #servicos li, #galeria figure",
  );

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -24px 0px" },
  );

  revealElements.forEach((element) => {
    element.classList.add("reveal-pending");
    revealObserver.observe(element);
  });
}

const bookingForm = document.querySelector("#booking-form");

if (bookingForm instanceof HTMLFormElement) {
  const nameInput = bookingForm.elements.namedItem("name");
  const serviceInput = bookingForm.elements.namedItem("service");
  const dateInput = bookingForm.elements.namedItem("date");
  const timeInput = bookingForm.elements.namedItem("time");
  const feedback = document.querySelector("#booking-feedback");
  const submitButton = bookingForm.querySelector('button[type="submit"]');
  if (submitButton instanceof HTMLButtonElement) {
    submitButton.disabled = false;
  }

  function getLocalDateString(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function formatDateForMessage(dateValue) {
    const [year, month, day] = dateValue.split("-");
    return `${day}/${month}/${year}`;
  }

  dateInput.min = getLocalDateString();

  dateInput.addEventListener("change", () => {
    dateInput.setCustomValidity(
      dateInput.value && dateInput.value < getLocalDateString()
        ? "Escolha a data de hoje ou uma data futura."
        : "",
    );
  });

  nameInput.addEventListener("input", () => {
    nameInput.setCustomValidity(
      nameInput.value.trim() ? "" : "Informe seu nome para solicitar o agendamento.",
    );
  });

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedback.textContent = "";

    nameInput.value = nameInput.value.trim();
    dateInput.setCustomValidity(
      dateInput.value && dateInput.value < getLocalDateString()
        ? "Escolha a data de hoje ou uma data futura."
        : "",
    );

    if (!bookingForm.reportValidity()) {
      feedback.textContent = "Confira os campos destacados e preencha todos os dados.";
      return;
    }

    const message = [
      `Olá! Gostaria de solicitar um agendamento na ${siteConfig.business.name}.`,
      "",
      `Nome: ${nameInput.value}`,
      `Serviço: ${serviceInput.value}`,
      `Data: ${formatDateForMessage(dateInput.value)}`,
      `Horário: ${timeInput.value}`,
      "",
      "Esta é uma solicitação, não uma confirmação de disponibilidade. Aguardo a confirmação da barbearia. Obrigado!",
    ].join("\n");

    const whatsappBusinessNumber = siteConfig.contact.whatsapp.replace(/\D/g, "");
    if (!whatsappBusinessNumber) {
      feedback.textContent =
        "Demonstração: formulário validado. Nenhuma mensagem foi enviada. Configure o WhatsApp da barbearia para ativar esta ação.";
      return;
    }

    if (whatsappBusinessNumber.length < 10 || whatsappBusinessNumber.length > 15) {
      feedback.textContent =
        "O número de WhatsApp configurado é inválido. Informe o código do país e o DDD.";
      return;
    }

    const whatsappUrl = `https://wa.me/${whatsappBusinessNumber}?text=${encodeURIComponent(message)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank");

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      const fallbackLink = document.createElement("a");
      fallbackLink.href = whatsappUrl;
      fallbackLink.target = "_blank";
      fallbackLink.rel = "noopener noreferrer";
      fallbackLink.textContent = "Abrir solicitação no WhatsApp";
      feedback.textContent = "O navegador bloqueou a nova aba. ";
      feedback.append(fallbackLink);
      return;
    }

    feedback.textContent =
      "Sua solicitação foi preparada no WhatsApp. O horário só será confirmado pela barbearia.";
  });
}

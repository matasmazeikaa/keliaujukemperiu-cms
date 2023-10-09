import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAboutUsSection extends Schema.Component {
  collectionName: 'components_components_about_us_sections';
  info: {
    displayName: 'aboutUsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    iconTitleSubtitle: Attribute.Component<
      'components.icon-title-subtitle',
      true
    >;
  };
}

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary', 'white']>;
    to: Attribute.String;
  };
}

export interface ComponentsCamperPrices extends Schema.Component {
  collectionName: 'components_components_camper_prices';
  info: {
    displayName: 'camper-prices';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface ComponentsCheckmarkItem extends Schema.Component {
  collectionName: 'components_components_checkmark_items';
  info: {
    displayName: 'checkmark-item';
  };
  attributes: {
    text: Attribute.String;
  };
}

export interface ComponentsIconTitleSubtitle extends Schema.Component {
  collectionName: 'components_components_icon_title_subtitles';
  info: {
    displayName: 'iconTitleSubtitle';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ComponentsImageBoxLink extends Schema.Component {
  collectionName: 'components_components_image_box_links';
  info: {
    displayName: 'imageBoxLink';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media;
    icon: Attribute.Media;
    to: Attribute.String;
  };
}

export interface ComponentsInfo extends Schema.Component {
  collectionName: 'components_components_infos';
  info: {
    displayName: 'info';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ComponentsListItem extends Schema.Component {
  collectionName: 'components_components_list_items';
  info: {
    displayName: 'listItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    icon: Attribute.Media;
  };
}

export interface ComponentsTestimonial extends Schema.Component {
  collectionName: 'components_components_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    text: Attribute.Text;
    fullName: Attribute.String;
  };
}

export interface SectionsContactUs extends Schema.Component {
  collectionName: 'components_sections_contact_uses';
  info: {
    displayName: 'Contact us';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    primaryButton: Attribute.Component<'components.button'>;
  };
}

export interface SectionsEnumerationSection extends Schema.Component {
  collectionName: 'components_sections_enumeration_sections';
  info: {
    displayName: 'Enumeration section';
  };
  attributes: {
    listItem: Attribute.Component<'components.list-item', true>;
    title: Attribute.String;
  };
}

export interface SectionsHeroSubpage extends Schema.Component {
  collectionName: 'components_sections_hero_subpages';
  info: {
    displayName: 'Hero subpage';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionsHeroTravelGuaranteeSection extends Schema.Component {
  collectionName: 'components_sections_hero_travel_guarantee_sections';
  info: {
    displayName: 'Hero travel guarantee section';
  };
  attributes: {
    title: Attribute.String;
    listItem: Attribute.Component<'components.list-item', true>;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    subtitle: Attribute.String;
    ctaButton: Attribute.Component<'components.button', true>;
    values: Attribute.Component<'components.checkmark-item', true>;
  };
}

export interface SectionsImagesLeftTextRight extends Schema.Component {
  collectionName: 'components_sections_images_left_text_rights';
  info: {
    displayName: 'imagesLeftTextRight';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.RichText;
    topImage: Attribute.Media;
    bottomImage: Attribute.Media;
  };
}

export interface SectionsImagesListSection extends Schema.Component {
  collectionName: 'components_sections_images_list_sections';
  info: {
    displayName: 'imagesListSection';
  };
  attributes: {
    title: Attribute.String;
    imageTop: Attribute.Media;
    imageBottom: Attribute.Media;
    listItem: Attribute.Component<'components.list-item', true>;
    ctaButton: Attribute.Component<'components.button'>;
  };
}

export interface SectionsPageCategories extends Schema.Component {
  collectionName: 'components_sections_page_categories';
  info: {
    displayName: 'Page Categories';
    description: '';
  };
  attributes: {
    pageCategory: Attribute.Component<'components.image-box-link', true>;
  };
}

export interface SectionsPartnerHero extends Schema.Component {
  collectionName: 'components_sections_partner_heroes';
  info: {
    displayName: 'partner-hero';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    ctaButton: Attribute.Component<'components.button', true>;
    image: Attribute.Media;
    icon: Attribute.Media;
  };
}

export interface SectionsSimpleSection extends Schema.Component {
  collectionName: 'components_sections_simple_sections';
  info: {
    displayName: 'simpleSection';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    ctaButton: Attribute.Component<'components.button'>;
  };
}

export interface SectionsTestimonial extends Schema.Component {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    title: Attribute.String;
    testimonials: Attribute.Relation<
      'sections.testimonial',
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'components.about-us-section': ComponentsAboutUsSection;
      'components.button': ComponentsButton;
      'components.camper-prices': ComponentsCamperPrices;
      'components.checkmark-item': ComponentsCheckmarkItem;
      'components.icon-title-subtitle': ComponentsIconTitleSubtitle;
      'components.image-box-link': ComponentsImageBoxLink;
      'components.info': ComponentsInfo;
      'components.list-item': ComponentsListItem;
      'components.testimonial': ComponentsTestimonial;
      'sections.contact-us': SectionsContactUs;
      'sections.enumeration-section': SectionsEnumerationSection;
      'sections.hero-subpage': SectionsHeroSubpage;
      'sections.hero-travel-guarantee-section': SectionsHeroTravelGuaranteeSection;
      'sections.hero': SectionsHero;
      'sections.images-left-text-right': SectionsImagesLeftTextRight;
      'sections.images-list-section': SectionsImagesListSection;
      'sections.page-categories': SectionsPageCategories;
      'sections.partner-hero': SectionsPartnerHero;
      'sections.simple-section': SectionsSimpleSection;
      'sections.testimonial': SectionsTestimonial;
    }
  }
}

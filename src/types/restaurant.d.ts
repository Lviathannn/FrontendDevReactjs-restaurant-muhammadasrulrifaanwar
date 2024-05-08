type Photo = {
  images: {
    small: {
      width: string;
      url: string;
      height: string;
    };
    thumbnail: {
      width: string;
      url: string;
      height: string;
    };
    original: {
      width: string;
      url: string;
      height: string;
    };
    large: {
      width: string;
      url: string;
      height: string;
    };
    medium: {
      width: string;
      url: string;
      height: string;
    };
  };
  is_blessed: boolean;
  uploaded_date: string;
  caption: string;
  id: string;
  helpful_votes: string;
  published_date: string;
  user: {
    user_id: null;
    member_id: string;
    type: string;
  };
};

type Subcategory = {
  key: string;
  name: string;
};

type Ancestor = {
  subcategory: Subcategory[];
  name: string;
  abbrv: null;
  location_id: string;
};

type AddressObj = {
  street1: string;
  street2: string;
  city: string;
  state: null;
  country: string;
  postalcode: string;
};

type WeekRange = {
  open_time: number;
  close_time: number;
}[][];

type Hours = {
  week_ranges: WeekRange;
  timezone: string;
};

type Cuisine = {
  key: string;
  name: string;
};

type EstablishmentType = {
  key: string;
  name: string;
};

type DietaryRestriction = {
  key: string;
  name: string;
};

type Restaurant = {
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  photo: Photo;
  api_detail_url: string;
  awards: [];
  doubleclick_zone: string;
  preferred_map_engine: string;
  raw_ranking: string;
  ranking_geo: string;
  ranking_geo_id: string;
  ranking_position: string;
  ranking_denominator: string;
  ranking_category: string;
  ranking: string;
  distance: null;
  distance_string: null;
  bearing: null;
  rating: string;
  is_closed: boolean;
  open_now_text: string;
  is_long_closed: boolean;
  price_level: string;
  price: string;
  description: string;
  web_url: string;
  write_review: string;
  ancestors: Ancestor[];
  category: Subcategory;
  subcategory: Subcategory[];
  parent_display_name: string;
  is_jfy_enabled: boolean;
  nearest_metro_station: [];

  phone: string;
  website: string;
  email: string;
  address_obj: AddressObj;
  address: string;
  hours: Hours;
  is_candidate_for_contact_info_suppression: boolean;
  cuisine: Cuisine[];
  dietary_restrictions: DietaryRestriction[];
  establishment_types: EstablishmentType[];
};

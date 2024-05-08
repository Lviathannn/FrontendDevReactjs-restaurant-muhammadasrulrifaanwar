interface Photo {
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
    user_id: string | null;
    member_id: string;
    type: string;
  };
}

interface Ancestor {
  subcategory: {
    key: string;
    name: string;
  }[];
  name: string;
  abbrv: string | null;
  location_id: string;
}

interface Review {
  title: string;
  rating: string;
  published_date: string;
  published_platform: string | null;
  summary: string;
  author: string;
  url: string;
  review_id: string;
  machine_translated: boolean;
}

interface Address {
  street1: string;
  street2: string;
  city: string;
  state: string | null;
  country: string;
  postalcode: string;
}

interface HourRange {
  open_time: number;
  close_time: number;
}

interface Hours {
  week_ranges: HourRange[][];
  timezone: string;
}

interface RatingHistogram {
  count_1: string;
  count_2: string;
  count_3: string;
  count_4: string;
  count_5: string;
}

interface RestaurantDetail {
  location_id: string;
  name: string;
  latitude: string;
  longitude: string;
  num_reviews: string;
  timezone: string;
  location_string: string;
  photo: Photo;
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
  distance: string | null;
  distance_string: string | null;
  bearing: string | null;
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
  category: {
    key: string;
    name: string;
  };
  subcategory: {
    key: string;
    name: string;
  }[];
  parent_display_name: string;
  is_jfy_enabled: boolean;
  nearest_metro_station: [];
  reviews: Review[];
  phone: string;
  website: string;
  email: string;
  address_obj: Address;
  address: string;
  hours: Hours;
  local_name: string;
  local_address: string;
  local_lang_code: string;
  is_candidate_for_contact_info_suppression: boolean;
  cuisine: {
    key: string;
    name: string;
  }[];
  dietary_restrictions: {
    key: string;
    name: string;
  }[];
  menu_web_url: string;
  establishment_category_ranking: string;
  meal_types: {
    key: string;
    name: string;
  }[];
  establishment_types: {
    key: string;
    name: string;
  }[];
  dishes: {
    key: string;
    name: string;
  }[];
  sub_cuisine: [];
  photo_count: string;
  has_review_draft: boolean;
  has_panoramic_photos: boolean;
  rating_histogram: RatingHistogram;
}

export interface Asteroid {
  links: {
    self: string;
  },
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  close_approach_data: {
    close_approach_date: string;
    close_approach_date_full: string | null;
    epoch_date_close_approach: number;
    miss_distance: {
      astronomical: string;
      kilometers: string;
      lunar: string;
      miles: string;
    },
    orbiting_body: string;
    relative_velocity: {
      kilometers_per_hour: string;
      kilometers_per_second: string;
      miles_per_hour: string;
    }
  }[]
  ;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    },
    meters: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    },
    miles: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    },
    feet: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    }
  }
}
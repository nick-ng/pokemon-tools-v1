const data = {
  values: [
    [1, 20],
    [21, 30],
    [31, 40],
    [41, 50],
    [51, 60],
    [61, 70],
    [71, 80],
    [81, 90],
    [91, 100],
    [101, 110],
    [111, 120],
    [121, 130],
    [131, 140],
    [141, 150],
    [151, 99999]
  ],
  recipes: {
    bug: [
      "tr60",
      "tr18",
      "bright_powder",
      "wishing_piece",
      "silver_powder",
      "balm_mushroom",
      "tr61",
      "shed_shell",
      "pearl_string",
      "tr96",
      "comet_shard",
      "tr28",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    dark: [
      "tr37",
      "wide_lens",
      "tr68",
      "wishing_piece",
      "star_piece",
      "balm_mushroom",
      "tr81",
      "scope_lens",
      "tr95",
      "tr58",
      "tr32",
      "tr93",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    dragon: [
      "tr47",
      "dragon_fang",
      "big_mushroom",
      "wishing_piece",
      "star_piece",
      "balm_mushroom",
      "dragon_scale",
      "life_orb",
      "tr62",
      "king's_rock",
      "tr51",
      "tr24",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    electric: [
      "electric_seed",
      "tr80",
      "cell_battery",
      "wishing_piece",
      "magnet",
      "tr86",
      "upgrade",
      "light_ball",
      "pearl_string",
      "dubious_disc",
      "tr08",
      "tr09",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    fairy: [
      "stardust",
      "misty_seed",
      "big_mushroom",
      "wishing_piece",
      "sachet",
      "room_service",
      "whipped_dream",
      "destiny_knot",
      "sweet",
      "tr92",
      "sweet",
      "tr90",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    fighting: [
      "tr07",
      "tr56",
      "muscle_band",
      "wishing_piece",
      "tr48",
      "tr21",
      "macho_brace",
      "tm00",
      "expert_belt",
      "tr64",
      "tr39",
      "tr53",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    fire: [
      "tr88",
      "flame_orb",
      "tr41",
      "wishing_piece",
      "tr02",
      "balm_mushroom",
      "tr36",
      "red_card",
      "tr15",
      "charcoal",
      "tr55",
      "tr43",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    flying: [
      "pretty_feather",
      "sharp_beak",
      "big_mushroom",
      "wishing_piece",
      "air_balloon",
      "blunder_policy",
      "grip_claw",
      "air_balloon",
      "weakness_policy",
      "tr89",
      "comet_shard",
      "tr66",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    ghost: [
      "odd_incense",
      "adrenaline_orb",
      "ring_target",
      "wishing_piece",
      "star_piece",
      "balm_mushroom",
      "cleanse_tag",
      "spell_tag",
      "cracked_pot",
      "reaper_cloth",
      "comet_shard",
      "tr33",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    grass: [
      "grassy_seed",
      "tr59",
      "white_herb",
      "wishing_piece",
      "tr77",
      "tr50",
      "tr65",
      "absorb_bulb",
      "pearl_string",
      "tr72",
      "comet_shard",
      "tr71",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    ground: [
      "stardust",
      "tr23",
      "big_mushroom",
      "wishing_piece",
      "light_clay",
      "tr87",
      "tr67",
      "terrain_extender",
      "pearl_string",
      "tr94",
      "comet_shard",
      "tr10",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    ice: [
      "snowball",
      "icy_rock",
      "never-melt_ice",
      "wishing_piece",
      "star_piece",
      "balm_mushroom",
      "razor_claw",
      "snowball",
      "pearl_string",
      "tr05",
      "comet_shard",
      "tr06",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    normal: [
      "tr85",
      "tr14",
      "tr26",
      "tr13",
      "tr27",
      "tr35",
      "tr01",
      "tr19",
      "tr29",
      "tr30",
      "tr20",
      "tr00",
      "tr42",
      "bottle_cap",
      "pp_up"
    ],
    poison: [
      "black_sludge",
      "toxic_orb",
      "tr91",
      "wishing_piece",
      "tr54",
      "smoke_ball",
      "tr57",
      "quick_powder",
      "poison_barb",
      "tr22",
      "tr78",
      "tr73",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    psychic: [
      "tr12",
      "tr34",
      "tr40",
      "tr82",
      "tr44",
      "tr83",
      "tr25",
      "tr69",
      "tr17",
      "tr38",
      "tr49",
      "tr97",
      "tr11",
      "bottle_cap",
      "pp_up"
    ],
    rock: [
      "float_stone",
      "oval_stone",
      "hard_stone",
      "wishing_piece",
      "everstone",
      "protector",
      "rocky_helmet",
      "tr63",
      "wishing_piece",
      "eviolite",
      "tr76",
      "tr75",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    steel: [
      "tr31",
      "tr46",
      "metal_powder",
      "wishing_piece",
      "utility_umbrella",
      "metal_coat",
      "tr52",
      "assault_vest",
      "tr79",
      "amulet_coin",
      "tr70",
      "tr74",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ],
    water: [
      "sea_incense",
      "tr04",
      "shell_bell",
      "wishing_piece",
      "tr16",
      "tr98",
      "prism_scale",
      "mystic_water",
      "pearl_string",
      "tr45",
      "tr84",
      "tr03",
      "rare_candy",
      "bottle_cap",
      "pp_up"
    ]
  },
  ingredient_value: {
    bug_memory: 40,
    grip_claw: 26,
    silver_powder: 10,
    shed_shell: 8,
    tanga_berry: 4,
    honey: 2,
    enigma_berry: 0,
    dark_memory: 40,
    dubious_disc: 32,
    weakness_policy: 30,
    razor_claw: 26,
    blunder_policy: 24,
    wide_lens: 22,
    zoom_lens: 22,
    black_glasses: 14,
    ring_target: 14,
    scope_lens: 12,
    binding_band: 8,
    maranga_berry: 6,
    rowap_berry: 6,
    colbur_berry: 4,
    iapapa_berry: 4,
    black_apricorn: 0,
    dragon_memory: 40,
    eviolite: 32,
    life_orb: 20,
    dragon_fang: 18,
    dragon_scale: 18,
    fossilized_drake: 10,
    dynamax_candy: 6,
    jaboca_berry: 6,
    aguav_berry: 4,
    haban_berry: 4,
    electric_memory: 40,
    light_ball: 20,
    magnet: 20,
    cell_battery: 14,
    fossilized_bird: 10,
    electric_seed: 8,
    thunder_stone: 6,
    wacan_berry: 4,
    pecha_berry: 2,
    yellow_apricorn: 0,
    fairy_memory: 40,
    berry_sweet: 30,
    clover_sweet: 30,
    flower_sweet: 30,
    love_sweet: 30,
    ribbon_sweet: 30,
    star_sweet: 30,
    strawberry_sweet: 30,
    whipped_dream: 26,
    sachet: 20,
    bright_powder: 14,
    misty_seed: 8,
    kee_berry: 6,
    moon_stone: 6,
    shiny_stone: 6,
    roseli_berry: 4,
    pixie_plate: 2,
    pink_apricorn: 0,
    fighting_memory: 40,
    expert_belt: 32,
    armorite_ore: 28,
    macho_brace: 26,
    choice_band: 20,
    power_anklet: 20,
    power_band: 20,
    power_belt: 20,
    power_bracer: 20,
    power_weight: 20,
    black_belt: 14,
    muscle_band: 14,
    focus_band: 12,
    focus_sash: 12,
    protective_pads: 12,
    salac_berry: 12,
    kelpsy_berry: 6,
    calcium: 4,
    carbos: 4,
    chople_berry: 4,
    hp_up: 4,
    iron: 4,
    protein: 4,
    zinc: 4,
    leppa_berry: 2,
    fire_memory: 40,
    charcoal: 32,
    red_card: 16,
    flame_orb: 14,
    heat_rock: 12,
    fire_stone: 6,
    sun_stone: 6,
    figy_berry: 4,
    occa_berry: 4,
    cheri_berry: 2,
    red_apricorn: 0,
    flying_memory: 40,
    air_balloon: 20,
    utility_umbrella: 20,
    sharp_beak: 10,
    lansat_berry: 10,
    clever_feather: 6,
    genius_feather: 6,
    grepa_berry: 6,
    health_feather: 6,
    muscle_feather: 6,
    pretty_feather: 6,
    resist_feather: 6,
    swift_feather: 6,
    coba_berry: 4,
    lum_berry: 2,
    ghost_memory: 40,
    reaper_cloth: 32,
    spell_tag: 26,
    cleanse_tag: 24,
    adrenaline_orb: 12,
    custap_berry: 10,
    dusk_stone: 6,
    kasib_berry: 4,
    mago_berry: 4,
    odd_incense: 2,
    grass_memory: 40,
    sweet_apple: 30,
    tart_apple: 30,
    balm_mushroom: 24,
    leftovers: 20,
    leek: 18,
    adamant_mint: 16,
    bold_mint: 16,
    brave_mint: 16,
    calm_mint: 16,
    careful_mint: 16,
    gentle_mint: 16,
    hasty_mint: 16,
    impish_mint: 16,
    jolly_mint: 16,
    lax_mint: 16,
    lonely_mint: 16,
    mild_mint: 16,
    modest_mint: 16,
    naive_mint: 16,
    naughty_mint: 16,
    quiet_mint: 16,
    rash_mint: 16,
    relaxed_mint: 16,
    sassy_mint: 16,
    serious_mint: 16,
    timid_mint: 16,
    big_mushroom: 14,
    mental_herb: 14,
    miracle_seed: 14,
    white_herb: 14,
    liechi_berry: 12,
    power_herb: 10,
    sticky_barb: 10,
    absorb_bulb: 8,
    big_root: 8,
    grassy_seed: 8,
    luminous_moss: 8,
    leaf_stone: 6,
    galarica_twig: 4,
    rindo_berry: 4,
    rawst_berry: 2,
    rose_incense: 2,
    tiny_mushroom: 2,
    green_apricorn: 0,
    ground_memory: 40,
    big_nugget: 38,
    chipped_pot: 36,
    cracked_pot: 30,
    soft_sand: 20,
    thick_club: 18,
    nugget: 16,
    "heavy-duty_boots": 16,
    apicot_berry: 12,
    rare_bone: 12,
    terrain_extender: 12,
    stardust: 8,
    hondew_berry: 6,
    shuca_berry: 4,
    persim_berry: 2,
    ice_memory: 40,
    comet_shard: 34,
    "never-melt_ice": 14,
    ganlon_berry: 12,
    icy_rock: 12,
    fossilized_dino: 10,
    snowball: 8,
    ice_stone: 6,
    pomeg_berry: 6,
    yache_berry: 4,
    aspear_berry: 2,
    ability_capsule: 40,
    pp_max: 40,
    pp_up: 38,
    amulet_coin: 32,
    upgrade: 30,
    quick_powder: 28,
    quick_claw: 26,
    silk_scarf: 22,
    choice_scarf: 20,
    lucky_egg: 20,
    safety_goggles: 10,
    normal_gem: 8,
    chilan_berry: 4,
    full_incense: 2,
    luck_incense: 2,
    white_apricorn: 0,
    poison_memory: 40,
    poison_barb: 32,
    wishing_piece: 28,
    smoke_ball: 22,
    galarica_cuff: 18,
    toxic_orb: 14,
    petaya_berry: 12,
    black_sludge: 10,
    qualot_berry: 6,
    kebia_berry: 4,
    max_repel: 2,
    oran_berry: 2,
    repel: 2,
    super_repel: 2,
    rare_candy: 40,
    psychic_memory: 40,
    destiny_knot: 28,
    room_service: 24,
    choice_specs: 20,
    light_clay: 20,
    power_lens: 20,
    twisted_spoon: 18,
    "exp._candy_xl": 10,
    starf_berry: 10,
    wise_glasses: 10,
    "exp._candy_l": 8,
    psychic_seed: 8,
    dawn_stone: 6,
    "exp._candy_m": 6,
    tamato_berry: 6,
    "exp._candy_s": 4,
    payapa_berry: 4,
    "exp._candy_xs": 2,
    lax_incense: 2,
    pure_incense: 2,
    sitrus_berry: 2,
    rock_memory: 40,
    rocky_helmet: 26,
    protector: 24,
    everstone: 20,
    star_piece: 20,
    hard_stone: 14,
    oval_stone: 12,
    smooth_rock: 12,
    lagging_tail: 10,
    micle_berry: 10,
    float_stone: 8,
    charti_berry: 4,
    wiki_berry: 4,
    rock_incense: 2,
    bottle_cap: 40,
    gold_bottle_cap: 40,
    steel_memory: 40,
    "king's_rock": 32,
    metal_coat: 24,
    metronome: 22,
    assault_vest: 20,
    eject_button: 16,
    eject_pack: 16,
    iron_ball: 16,
    metal_powder: 14,
    soothe_bell: 14,
    babiri_berry: 4,
    rusted_shield: 2,
    rusted_sword: 2,
    water_memory: 40,
    pearl_string: 30,
    prism_scale: 26,
    shell_bell: 14,
    big_pearl: 12,
    damp_rock: 12,
    throat_spray: 12,
    fossilized_fish: 10,
    mystic_water: 10,
    pearl: 6,
    water_stone: 6,
    passho_berry: 4,
    chesto_berry: 2,
    sea_incense: 2,
    wave_incense: 2,
    blue_apricorn: 0
  },
  ingredient_type: {
    bug_memory: "bug",
    grip_claw: "bug",
    silver_powder: "bug",
    shed_shell: "bug",
    tanga_berry: "bug",
    honey: "bug",
    enigma_berry: "bug",
    dark_memory: "dark",
    dubious_disc: "dark",
    weakness_policy: "dark",
    razor_claw: "dark",
    blunder_policy: "dark",
    wide_lens: "dark",
    zoom_lens: "dark",
    black_glasses: "dark",
    ring_target: "dark",
    scope_lens: "dark",
    binding_band: "dark",
    maranga_berry: "dark",
    rowap_berry: "dark",
    colbur_berry: "dark",
    iapapa_berry: "dark",
    black_apricorn: "dark",
    dragon_memory: "dragon",
    eviolite: "dragon",
    life_orb: "dragon",
    dragon_fang: "dragon",
    dragon_scale: "dragon",
    fossilized_drake: "dragon",
    dynamax_candy: "dragon",
    jaboca_berry: "dragon",
    aguav_berry: "dragon",
    haban_berry: "dragon",
    electric_memory: "electric",
    light_ball: "electric",
    magnet: "electric",
    cell_battery: "electric",
    fossilized_bird: "electric",
    electric_seed: "electric",
    thunder_stone: "electric",
    wacan_berry: "electric",
    pecha_berry: "electric",
    yellow_apricorn: "electric",
    fairy_memory: "fairy",
    berry_sweet: "fairy",
    clover_sweet: "fairy",
    flower_sweet: "fairy",
    love_sweet: "fairy",
    ribbon_sweet: "fairy",
    star_sweet: "fairy",
    strawberry_sweet: "fairy",
    whipped_dream: "fairy",
    sachet: "fairy",
    bright_powder: "fairy",
    misty_seed: "fairy",
    kee_berry: "fairy",
    moon_stone: "fairy",
    shiny_stone: "fairy",
    roseli_berry: "fairy",
    pixie_plate: "fairy",
    pink_apricorn: "fairy",
    fighting_memory: "fighting",
    expert_belt: "fighting",
    armorite_ore: "fighting",
    macho_brace: "fighting",
    choice_band: "fighting",
    power_anklet: "fighting",
    power_band: "fighting",
    power_belt: "fighting",
    power_bracer: "fighting",
    power_weight: "fighting",
    black_belt: "fighting",
    muscle_band: "fighting",
    focus_band: "fighting",
    focus_sash: "fighting",
    protective_pads: "fighting",
    salac_berry: "fighting",
    kelpsy_berry: "fighting",
    calcium: "fighting",
    carbos: "fighting",
    chople_berry: "fighting",
    hp_up: "fighting",
    iron: "fighting",
    protein: "fighting",
    zinc: "fighting",
    leppa_berry: "fighting",
    fire_memory: "fire",
    charcoal: "fire",
    red_card: "fire",
    flame_orb: "fire",
    heat_rock: "fire",
    fire_stone: "fire",
    sun_stone: "fire",
    figy_berry: "fire",
    occa_berry: "fire",
    cheri_berry: "fire",
    red_apricorn: "fire",
    flying_memory: "flying",
    air_balloon: "flying",
    utility_umbrella: "flying",
    sharp_beak: "flying",
    lansat_berry: "flying",
    clever_feather: "flying",
    genius_feather: "flying",
    grepa_berry: "flying",
    health_feather: "flying",
    muscle_feather: "flying",
    pretty_feather: "flying",
    resist_feather: "flying",
    swift_feather: "flying",
    coba_berry: "flying",
    lum_berry: "flying",
    ghost_memory: "ghost",
    reaper_cloth: "ghost",
    spell_tag: "ghost",
    cleanse_tag: "ghost",
    adrenaline_orb: "ghost",
    custap_berry: "ghost",
    dusk_stone: "ghost",
    kasib_berry: "ghost",
    mago_berry: "ghost",
    odd_incense: "ghost",
    grass_memory: "grass",
    sweet_apple: "grass",
    tart_apple: "grass",
    balm_mushroom: "grass",
    leftovers: "grass",
    leek: "grass",
    adamant_mint: "grass",
    bold_mint: "grass",
    brave_mint: "grass",
    calm_mint: "grass",
    careful_mint: "grass",
    gentle_mint: "grass",
    hasty_mint: "grass",
    impish_mint: "grass",
    jolly_mint: "grass",
    lax_mint: "grass",
    lonely_mint: "grass",
    mild_mint: "grass",
    modest_mint: "grass",
    naive_mint: "grass",
    naughty_mint: "grass",
    quiet_mint: "grass",
    rash_mint: "grass",
    relaxed_mint: "grass",
    sassy_mint: "grass",
    serious_mint: "grass",
    timid_mint: "grass",
    big_mushroom: "grass",
    mental_herb: "grass",
    miracle_seed: "grass",
    white_herb: "grass",
    liechi_berry: "grass",
    power_herb: "grass",
    sticky_barb: "grass",
    absorb_bulb: "grass",
    big_root: "grass",
    grassy_seed: "grass",
    luminous_moss: "grass",
    leaf_stone: "grass",
    galarica_twig: "grass",
    rindo_berry: "grass",
    rawst_berry: "grass",
    rose_incense: "grass",
    tiny_mushroom: "grass",
    green_apricorn: "grass",
    ground_memory: "ground",
    big_nugget: "ground",
    chipped_pot: "ground",
    cracked_pot: "ground",
    soft_sand: "ground",
    thick_club: "ground",
    nugget: "ground",
    "heavy-duty_boots": "ground",
    apicot_berry: "ground",
    rare_bone: "ground",
    terrain_extender: "ground",
    stardust: "ground",
    hondew_berry: "ground",
    shuca_berry: "ground",
    persim_berry: "ground",
    ice_memory: "ice",
    comet_shard: "ice",
    "never-melt_ice": "ice",
    ganlon_berry: "ice",
    icy_rock: "ice",
    fossilized_dino: "ice",
    snowball: "ice",
    ice_stone: "ice",
    pomeg_berry: "ice",
    yache_berry: "ice",
    aspear_berry: "ice",
    ability_capsule: "normal",
    pp_max: "normal",
    pp_up: "normal",
    amulet_coin: "normal",
    upgrade: "normal",
    quick_powder: "normal",
    quick_claw: "normal",
    silk_scarf: "normal",
    choice_scarf: "normal",
    lucky_egg: "normal",
    safety_goggles: "normal",
    normal_gem: "normal",
    chilan_berry: "normal",
    full_incense: "normal",
    luck_incense: "normal",
    white_apricorn: "normal",
    poison_memory: "poison",
    poison_barb: "poison",
    wishing_piece: "poison",
    smoke_ball: "poison",
    galarica_cuff: "poison",
    toxic_orb: "poison",
    petaya_berry: "poison",
    black_sludge: "poison",
    qualot_berry: "poison",
    kebia_berry: "poison",
    max_repel: "poison",
    oran_berry: "poison",
    repel: "poison",
    super_repel: "poison",
    rare_candy: "psychic",
    psychic_memory: "psychic",
    destiny_knot: "psychic",
    room_service: "psychic",
    choice_specs: "psychic",
    light_clay: "psychic",
    power_lens: "psychic",
    twisted_spoon: "psychic",
    "exp._candy_xl": "psychic",
    starf_berry: "psychic",
    wise_glasses: "psychic",
    "exp._candy_l": "psychic",
    psychic_seed: "psychic",
    dawn_stone: "psychic",
    "exp._candy_m": "psychic",
    tamato_berry: "psychic",
    "exp._candy_s": "psychic",
    payapa_berry: "psychic",
    "exp._candy_xs": "psychic",
    lax_incense: "psychic",
    pure_incense: "psychic",
    sitrus_berry: "psychic",
    rock_memory: "rock",
    rocky_helmet: "rock",
    protector: "rock",
    everstone: "rock",
    star_piece: "rock",
    hard_stone: "rock",
    oval_stone: "rock",
    smooth_rock: "rock",
    lagging_tail: "rock",
    micle_berry: "rock",
    float_stone: "rock",
    charti_berry: "rock",
    wiki_berry: "rock",
    rock_incense: "rock",
    bottle_cap: "steel",
    gold_bottle_cap: "steel",
    steel_memory: "steel",
    "king's_rock": "steel",
    metal_coat: "steel",
    metronome: "steel",
    assault_vest: "steel",
    eject_button: "steel",
    eject_pack: "steel",
    iron_ball: "steel",
    metal_powder: "steel",
    soothe_bell: "steel",
    babiri_berry: "steel",
    rusted_shield: "steel",
    rusted_sword: "steel",
    water_memory: "water",
    pearl_string: "water",
    prism_scale: "water",
    shell_bell: "water",
    big_pearl: "water",
    damp_rock: "water",
    throat_spray: "water",
    fossilized_fish: "water",
    mystic_water: "water",
    pearl: "water",
    water_stone: "water",
    passho_berry: "water",
    chesto_berry: "water",
    sea_incense: "water",
    wave_incense: "water",
    blue_apricorn: "water"
  }
};

export const recipes = {};

Object.entries(data.recipes).forEach(a => {
  const [type, items] = a;
  items.forEach((item, i) => {
    if (recipes[item]) {
      recipes[item].types = recipes[item].types.concat(type);
    } else {
      recipes[item] = {
        item,
        types: [type],
        range: data.values[i]
      };
    }
  });
});

export const ingredients = {};

Object.entries(data.ingredient_value).forEach(a => {
  const [item, value] = a;
  ingredients[item] = {
    item,
    value,
    type: data.ingredient_type[item]
  };
});

export const ingredientNames = Object.keys(ingredients).sort();
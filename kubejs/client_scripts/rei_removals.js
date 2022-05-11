const DELETED_ITEMS = [
    'blockus:oak_barrel', 'blockus:birch_barrel', 'blockus:jungle_barrel', 'blockus:jungle_barrel', 'blockus:dark_oak_barrel', 'blockus:dark_oak_barrel', 'blockus:warped_barrel', 'additionaladditions:fried_egg', 'vanilla-hammers:obsidian_hammer', 'modern_industrialization:packer_double_ingot_template', 'modern_industrialization:aluminum_double_ingot', 'modern_industrialization:annealed_copper_double_ingot', 'modern_industrialization:battery_alloy_double_ingot', 'modern_industrialization:bronze_double_ingot', 'modern_industrialization:cadmium_double_ingot', 'modern_industrialization:chromium_double_ingot', 'modern_industrialization:copper_double_ingot', 'modern_industrialization:bronze_double_ingot', 'modern_industrialization:cupronickel_double_ingot', 'modern_industrialization:electrum_double_ingot', 'modern_industrialization:gold_double_ingot', 'modern_industrialization:invar_double_ingot', 'modern_industrialization:iron_double_ingot', 'modern_industrialization:kanthal_double_ingot', 'modern_industrialization:lead_double_ingot', 'modern_industrialization:nickel_double_ingot', 'modern_industrialization:platinum_double_ingot', 'modern_industrialization:silicon_double_ingot', 'modern_industrialization:silver_double_ingot', 'modern_industrialization:stainless_steel_double_ingot', 'modern_industrialization:steel_double_ingot', 'modern_industrialization:superconductor_double_ingot', 'modern_industrialization:tin_double_ingot', 'modern_industrialization:titanium_double_ingot', 'modern_industrialization:tungsten_double_ingot', 'modern_industrialization:beryllium_double_ingot', 'biomemakeover:icon_item', 'extragenerators:gluttony_generator', 'extragenerators:brew_generator', 'extragenerators:redstone_generator', 'extragenerators:blast_generator', 'extragenerators:demise_generator', 'extragenerators:icy_generator', 'extragenerators:teleport_generator', 'extragenerators:heavenly_generator', 'extragenerators:infernal_generator', 'additionaladditions:gilded_netherite_helmet', 'additionaladditions:gilded_netherite_chestplate', 'additionaladditions:gilded_netherite_leggings', 'additionaladditions:gilded_netherite_boots', 'techreborn:chrome_ingot', 'techreborn:chrome_nugget', 'techreborn:chrome_dust', 'techreborn:chrome_plate', 'techreborn:chrome_storage_block', 'mtmechs:iron_gear_item', 'indrev:steel_helmet', 'indrev:steel_chestplate', 'indrev:steel_leggings', 'indrev:steel_boots', 'indrev:silver_helmet', 'indrev:silver_chestplate', 'indrev:silver_leggings', 'indrev:silver_boots', 'crookedcrooks:ir_bronze_crook', 'croptopia:rice_seed', 'croptopia:onion_seed', 'croptopia:onion', 'croptopia:rice', 'indrev:bronze_pickaxe', 'indrev:bronze_sword', 'indrev:bronze_axe', 'indrev:bronze_shovel', 'indrev:bronze_hoe', 'indrev:bronze_boots', 'indrev:bronze_leggings', 'indrev:bronze_chestplate', 'indrev:bronze_helmet', 'craftingcraft:portable_crafting', 'kibe:pocket_crafting_table', 'kibe:light_ring', 'basicaiots:tin_aiot', 'basicaiots:copper_aiot', 'basicaiots:silver_aiot', 'basicaiots:steel_aiot', 'basicaiots:lead_aiot', 'croptosis:fertilized_sand', 'croptosis:fertilized_farmland', 'croptosis:fertilized_dirt', 'croptosis:potash_ore', 'croptosis:apatite_ore', 'croptosis:deepslate_apatite_ore', 'croptosis:potash_block', 'croptosis:apatite_block', 'croptosis:feather_meal', 'croptosis:rotten_pile', 'croptosis:apatite', 'croptosis:potash', 'croptosis:potash_pieces', 'croptopia:garlic', 'bewitchment:salt_block', 'croptopia:tomato', 'croptopia:cabbage', 'croptopia:cabbage_seed', 'croptopia:tomato_seed', 'croptopia:knife', 'croptopia:cooked_bacon', 'croptopia:bacon', "techreborn:aluminum_storage_block", "techreborn:aluminum_dust", "techreborn:aluminum_ingot", "techreborn:aluminum_nugget", "techreborn:aluminum_plate", "techreborn:bauxite_dust", "techreborn:bronze_storage_block", "indrev:bronze_block", "techreborn:bronze_dust", "indrev:bronze_dust", "techreborn:bronze_ingot", "indrev:bronze_ingot", "indrev:bronze_nugget", "techreborn:bronze_nugget", "indrev:bronze_plate", "techreborn:bronze_plate", "indrev:coal_dust", "techreborn:coal_dust", "indrev:copper_dust", "techreborn:copper_nugget", "indrev:copper_nugget", "techreborn:copper_plate", "indrev:copper_plate", "indrev:diamond_dust", "techreborn:diamond_dust", "techreborn:diamond_plate", "indrev:electrum_block", "techreborn:electrum_storage_block", "indrev:electrum_dust", "techreborn:electrum_dust", "indrev:electrum_ingot", "techreborn:electrum_ingot", "indrev:electrum_nugget", "techreborn:electrum_nugget", "indrev:electrum_plate", "techreborn:electrum_plate", "techreborn:emerald_dust", "techreborn:emerald_plate", "indrev:gold_dust", "techreborn:gold_plate", "indrev:gold_plate", "techreborn:invar_storage_block", "techreborn:invar_dust", "techreborn:invar_ingot", "techreborn:invar_nugget", "techreborn:invar_plate", "techreborn:iridium_storage_block", "techreborn:iridium_ingot", "techreborn:iridium_nugget", "techreborn:iridium_plate", "techreborn:raw_iridium", "indrev:iron_dust", "techreborn:iron_plate", "indrev:iron_plate", "techreborn:lapis_plate", "techreborn:lead_storage_block", "indrev:lead_block", "indrev:lead_dust", "indrev:lead_ingot", "techreborn:lead_ingot", "techreborn:lead_nugget", "indrev:lead_nugget", "techreborn:lead_plate", "indrev:lead_plate", "indrev:raw_lead", "techreborn:raw_lead", "techreborn:manganese_dust", "techreborn:nickel_storage_block", "techreborn:nickel_dust", "techreborn:nickel_ingot", "techreborn:nickel_nugget", "techreborn:nickel_plate", "techreborn:platinum_storage_block", "techreborn:platinum_dust", "techreborn:platinum_ingot", "techreborn:platinum_nugget", "techreborn:platinum_plate", "techreborn:quartz_dust", "techreborn:ruby_dust", "techreborn:silicon_plate", "bewitchment:silver_block", "techreborn:silver_storage_block", "indrev:silver_block", "indrev:silver_dust", "techreborn:silver_ingot", "bewitchment:silver_ingot", "indrev:silver_ingot", "techreborn:silver_nugget", "indrev:silver_nugget", "bewitchment:silver_nugget", "techreborn:silver_plate", "indrev:silver_plate", "techreborn:raw_silver", "indrev:raw_silver", "bewitchment:raw_silver_block", "indrev:steel_block", "techreborn:steel_storage_block", "indrev:steel_dust", "techreborn:steel_dust", "indrev:steel_ingot", "techreborn:steel_ingot", "techreborn:steel_nugget", "indrev:steel_nugget", "indrev:steel_plate", "techreborn:steel_plate", "techreborn:sulfur_dust", "indrev:sulfur_dust", "indrev:tin_block", "techreborn:tin_storage_block", "indrev:tin_dust", "techreborn:tin_ingot", "indrev:tin_ingot", "indrev:tin_nugget", "techreborn:tin_nugget", "indrev:tin_plate", "techreborn:tin_plate", "indrev:raw_tin", "techreborn:raw_tin", "techreborn:titanium_storage_block", "techreborn:titanium_dust", "techreborn:titanium_ingot", "techreborn:titanium_nugget", "techreborn:titanium_plate", "techreborn:tungsten_storage_block", "indrev:tungsten_block", "indrev:tungsten_dust", "techreborn:tungsten_ingot", "indrev:tungsten_ingot", "indrev:tungsten_nugget", "techreborn:tungsten_nugget", "techreborn:tungsten_plate", "indrev:tungsten_plate", "indrev:raw_tungsten", "techreborn:raw_tungsten", "bewitchment:salt_block", "techreborn:carbon_plate", "techreborn:bauxite_ore", "techreborn:deepslate_bauxite_ore", "techreborn:iridium_ore", "techreborn:deepslate_iridium_ore", "indrev:lead_ore", "indrev:deepslate_lead_ore", "techreborn:lead_ore", "techreborn:deepslate_lead_ore", "techreborn:deepslate_silver_ore", "bewitchment:deepslate_silver_ore", "techreborn:silver_ore", "bewitchment:silver_ore", "indrev:deepslate_tin_ore", "indrev:tin_ore", "techreborn:tin_ore", "techreborn:deepslate_tin_ore", "techreborn:deepslate_tungsten_ore", "indrev:tungsten_ore", "indrev:deepslate_tungsten_ore", "techreborn:tungsten_ore", "bewitchment:salt_ore", "croptopia:salt_ore", "bewitchment:deepslate_salt_ore"
];

onEvent("rei.hide.items", event => {
    DELETED_ITEMS.forEach(id => event.hide(id));
});
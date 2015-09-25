                        var network = null;
                        var layoutMethod = "directed";

                        function destroy() {
                            if (network !== null) {
                                network.destroy();
                                network = null;
                            }
                        }

                        function draw() {
                            destroy();
                            // randomly create some nodes and edges
                            //    var nodes = new vis.DataSet([
                            //     {id: 1, label: 'Node 1'},
                            //     {id: 2, label: 'Node 2'},
                            //     {id: 3, label: 'Node 3'},
                            //     {id: 4, label: 'Node 4'},
                            //     {id: 5, label: 'Node 5'}
                            // ]);
                            var nodes = new vis.DataSet(
                                [{
                                    "id": "book_thief",
                                    "label": "The Book Thief"
                                }, {
                                    "id": "blink",
                                    "label": "Blink: The Power of Thinking Without Thinking"
                                }, {
                                    "id": "reamde",
                                    "label": "Reamde"
                                }, {
                                    "id": "outliers",
                                    "label": "Outliers: The Story of Success"
                                }, {
                                    "id": "confusion",
                                    "label": "The Confusion (The Baroque Cycle, Vol. 2)"
                                }, {
                                    "id": "daughter_smoke",
                                    "label": "Daughter of Smoke & Bone (Daughter of Smoke and Bone)"
                                }, {
                                    "id": "insider",
                                    "label": "Kingdom Keepers VII: The Insider"
                                }, {
                                    "id": "quicksilver",
                                    "label": "Quicksilver (The Baroque Cycle, Vol. 1)"
                                }, {
                                    "id": "anathem",
                                    "label": "Anathem"
                                }, {
                                    "id": "truth_matter",
                                    "label": "The Truth of the Matter (The Homelanders)"
                                }, {
                                    "id": "aftershock",
                                    "label": "Aftershock (H.I.V.E)"
                                }, {
                                    "id": "shell_game",
                                    "label": "Shell Game: Kindom Keepers V"
                                }, {
                                    "id": "hp_beedle",
                                    "label": "The Tales of Beedle the Bard (U.K. 1st printing)"
                                }, {
                                    "id": "zero_hour",
                                    "label": "Zero Hour (H.I.V.E)"
                                }, {
                                    "id": "magician_king",
                                    "label": "Magician King"
                                }, {
                                    "id": "escape_velocity",
                                    "label": "Escape Velocity (H.I.V.E.)"
                                }, {
                                    "id": "tigers_curse",
                                    "label": "Tiger's Curse (Book 1 in the Tiger's Curse Series)"
                                }, {
                                    "id": "artic_incident",
                                    "label": "The Arctic Incident (Artemis Fowl, Book 2)"
                                }, {
                                    "id": "rogue",
                                    "label": "Rogue (H.I.V.E.)"
                                }, {
                                    "id": "disney_dawn",
                                    "label": "Kingdom Keepers II: Disney At Dawn"
                                }, {
                                    "id": "tigers_quest",
                                    "label": "Tiger's Quest (Book 2 in the Tiger's Curse Series)"
                                }, {
                                    "id": "long_way",
                                    "label": "The Long Way Home (The Homelanders)"
                                }, {
                                    "id": "eternity_code",
                                    "label": "The Eternity Code (Artemis Fowl, Book 3)"
                                }, {
                                    "id": "brisingr",
                                    "label": "Brisingr (Inheritance, Book 3) (The Inheritance Cycle)"
                                }, {
                                    "id": "ruins",
                                    "label": "Ruins (Pathfinder Series)"
                                }, {
                                    "id": "tigers_destiny",
                                    "label": "Tiger's Destiny (Book 4 in the Tiger's Curse Series)"
                                }, {
                                    "id": "last_guardian",
                                    "label": "Artemis Fowl The Last Guardian"
                                }, {
                                    "id": "power_play",
                                    "label": "Kingdom Keepers IV: Power Play"
                                }, {
                                    "id": "scorpia_rising",
                                    "label": "Scorpia Rising (Alex Rider)"
                                }, {
                                    "id": "hive",
                                    "label": "H.I.V.E.: Higher Institute of Villainous Education"
                                }, {
                                    "id": "mysterious_perilous",
                                    "label": "The Mysterious Benedict Society and the Perilous Journey"
                                }, {
                                    "id": "airman",
                                    "label": "Airman"
                                }, {
                                    "id": "scorpia",
                                    "label": "Scorpia (Alex Rider)"
                                }, {
                                    "id": "magicians",
                                    "label": "The Magicians: A Novel"
                                }, {
                                    "id": "mysterious_prisoner",
                                    "label": "The Mysterious Benedict Society and the Prisoner's Dilemma"
                                }, {
                                    "id": "point_blank",
                                    "label": "Point Blank (Alex Rider Adventure)"
                                }, {
                                    "id": "stormbreaker",
                                    "label": "Stormbreaker (Alex Rider)"
                                }, {
                                    "id": "snakehead",
                                    "label": "Snakehead"
                                }, {
                                    "id": "hp_beasts",
                                    "label": "Fantastic Beasts and Where to Find Them"
                                }, {
                                    "id": "disney_dark",
                                    "label": "Kingdom Keepers: Disney After Dark"
                                }, {
                                    "id": "artemis_fowl",
                                    "label": "Artemis Fowl (Artemis Fowl, Book 1)"
                                }, {
                                    "id": "eragon",
                                    "label": "Eragon (Inheritance, Book 1)"
                                }, {
                                    "id": "eagle_strike",
                                    "label": "Eagle Strike (Alex Rider Adventure)"
                                }, {
                                    "id": "lost_colony",
                                    "label": "The Lost Colony (Artemis Fowl, Book 5)"
                                }, {
                                    "id": "opal_deception",
                                    "label": "Artemis Fowl (The Opal Deception)"
                                }, {
                                    "id": "eldest",
                                    "label": "Eldest (Inheritance Cycle, Book 2) (The Inheritance Cycle)"
                                }, {
                                    "id": "fowl_files",
                                    "label": "The Artemis Fowl Files: The Ultimate Guide to the Best-selling Series"
                                }, {
                                    "id": "atlantis_complex",
                                    "label": "The Artemis Fowl Atlantis Complex"
                                }, {
                                    "id": "half_moon",
                                    "label": "Half Moon Investigations"
                                }, {
                                    "id": "david_goliath",
                                    "label": "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants"
                                }, {
                                    "id": "eduction_benedict",
                                    "label": "The Extraordinary Education of Nicholas Benedict (The Mysterious Benedict Society)"
                                }, {
                                    "id": "hp_goblet",
                                    "label": "Harry Potter And The Goblet Of Fire"
                                }, {
                                    "id": "crocodile_tears",
                                    "label": "Crocodile Tears (Alex Rider)"
                                }, {
                                    "id": "hp_quidditch",
                                    "label": "Quidditch Through the Ages"
                                }, {
                                    "id": "dark_passage",
                                    "label": "Kingdom Keepers VI: Dark Passage"
                                }, {
                                    "id": "ark_angel",
                                    "label": "Ark Angel (Alex Rider Adventure)"
                                }, {
                                    "id": "art_intrusion",
                                    "label": "The Art of Intrusion: The Real Stories Behind the Exploits of Hackers, Intruders and Deceivers"
                                }, {
                                    "id": "plugged",
                                    "label": "Plugged"
                                }, {
                                    "id": "final_hour",
                                    "label": "The Final Hour (The Homelanders)"
                                }, {
                                    "id": "beauty",
                                    "label": "Beauty Queens"
                                }, {
                                    "id": "dreadnought",
                                    "label": "Dreadnought (H.I.V.E.)"
                                }, {
                                    "id": "tipping_point",
                                    "label": "The Tipping Point: How Little Things Can Make a Big Difference"
                                }, {
                                    "id": "mysterious_benedict",
                                    "label": "The Mysterious Benedict Society"
                                }, {
                                    "id": "diviners",
                                    "label": "The Diviners"
                                }, {
                                    "id": "inheritance",
                                    "label": "Inheritance (The Inheritance Cycle)"
                                }, {
                                    "id": "diamond_age",
                                    "label": "The Diamond Age: Or, a Young Lady's Illustrated Primer (Bantam Spectra Book)"
                                }, {
                                    "id": "deadlock",
                                    "label": "H.I.V.E. 8: Deadlock"
                                }, {
                                    "id": "tigers_voyage",
                                    "label": "Tiger's Voyage (Book 3 in the Tiger's Curse Series)"
                                }, {
                                    "id": "tigers_promise",
                                    "label": "Tiger's Promise: A Tiger's Curse Novella (The Tiger's Curse Series)"
                                }, {
                                    "id": "silkworm",
                                    "label": "The Silkworm (A Cormoran Strike Novel)"
                                }, {
                                    "id": "hp_chamber",
                                    "label": "Harry Potter And The Chamber Of Secrets"
                                }, {
                                    "id": "hp_prisoner",
                                    "label": "Harry Potter and the Prisoner of Azkaban"
                                }, {
                                    "id": "hp_order",
                                    "label": "Harry Potter And The Order Of The Phoenix"
                                }, {
                                    "id": "hp_prince",
                                    "label": "Harry Potter and the Half-Blood Prince (Book 6)"
                                }, {
                                    "id": "hp_deathly",
                                    "label": "Harry Potter and the Deathly Hallows (Book 7)"
                                }, {
                                    "id": "hp_prequel",
                                    "label": "Harry Potter: The Prequel"
                                }, {
                                    "id": "pathfinder",
                                    "label": "Pathfinder"
                                }, {
                                    "id": "disney_shadow",
                                    "label": "Kingdom Keepers III: Disney in Shadow"
                                }, {
                                    "id": "earth_unawakens",
                                    "label": "Earth Awakens (First Formic War)"
                                }, {
                                    "id": "overlord",
                                    "label": "The Overlord Protocol (H.I.V.E.)"
                                }, {
                                    "id": "maisie_dobbs",
                                    "label": "Maisie Dobbs"
                                }, {
                                    "id": "tiger",
                                    "label": "The Tiger: A True Story of Vengeance and Survival (Vintage Departures)"
                                }, {
                                    "id": "seperate_peace",
                                    "label": "A Separate Peace"
                                }, {
                                    "id": "supernaturalist",
                                    "label": "The Supernaturalist"
                                }, {
                                    "id": "time_paradox",
                                    "label": "The Time Paradox (Artemis Fowl, Book 6)"
                                }, {
                                    "id": "penumbra",
                                    "label": "Mr. Penumbra's 24-Hour Bookstore: A Novel"
                                }, {
                                    "id": "wish_list",
                                    "label": "The Wish List"
                                }, {
                                    "id": "ghost_wires",
                                    "label": "Ghost in the Wires: My Adventures as the World's Most Wanted Hacker"
                                }, {
                                    "id": "siddhartha",
                                    "label": "Siddhartha"
                                }, {
                                    "id": "i_messenger",
                                    "label": "I Am the Messenger"
                                }, {
                                    "id": "earth_unaware",
                                    "label": "Earth Unaware (The First Formic War)"
                                }, {
                                    "id": "earth_afire",
                                    "label": "Earth Afire (The First Formic War)"
                                }, {
                                    "id": "rider_gadgets",
                                    "label": "Alex Rider: The Gadgets"
                                }, {
                                    "id": "dinner",
                                    "label": "The Dinner"
                                }, {
                                    "id": "in_vino",
                                    "label": "In Vino Veritas"
                                }, {
                                    "id": "long_earth",
                                    "label": "The Long Earth"
                                }, {
                                    "id": "magic_finger",
                                    "label": "The Magic Finger"
                                }, {
                                    "id": "dumbledores_army",
                                    "label": "Dumbledore’s Army Reunites at Quidditch World Cup Final"
                                }, {
                                    "id": "last_thing",
                                    "label": "The last thing I remember"
                                }, {
                                    "id": "chocolate_war",
                                    "label": "The Chocolate War"
                                }, {
                                    "id": "kill_mockingbird",
                                    "label": "To Kill a Mockingbird"
                                }, {
                                    "id": "call_of",
                                    "label": "The Call of the Wild"
                                }, {
                                    "id": "long_war",
                                    "label": "The Long War (Long Earth)"
                                }, {
                                    "id": "dark_eyes",
                                    "label": "Dark Eyes"
                                }, {
                                    "id": "cutting_for",
                                    "label": "Cutting for Stone"
                                }, {
                                    "id": "grand_design",
                                    "label": "The Grand Design"
                                }, {
                                    "id": "magicians_land",
                                    "label": "The Magician's Land: A Novel (Magicians Trilogy)"
                                }, {
                                    "id": "glass_castle",
                                    "label": "The Glass Castle: A Memoir"
                                }, {
                                    "id": "unbroken",
                                    "label": "Unbroken: A World War II Story of Survival, Resilience, and Redemption"
                                }, {
                                    "id": "color_magic",
                                    "label": "The Color of Magic (Discworld)"
                                }, {
                                    "id": "things_make",
                                    "label": "Things to Make and Do in the Fourth Dimension: A Mathematician's Journey Through Narcissistic Numbers, Optimal Dating Algorithms, at Least Two Kinds of Infinity, and More"
                                }, {
                                    "id": "good_omens",
                                    "label": "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch"
                                }, {
                                    "id": "brief_history",
                                    "label": "My Brief History"
                                }, {
                                    "id": "eat_pray",
                                    "label": "Eat, Pray, Love: One Woman's Search for Everything Across Italy, India and Indonesia"
                                }, {
                                    "id": "hobbit",
                                    "label": "The Hobbit; or, There and Back Again"
                                }, {
                                    "id": "shipping_news",
                                    "label": "The Shipping News"
                                }, {
                                    "id": "days_blood",
                                    "label": "Days of Blood & Starlight (Daughter of Smoke and Bone)"
                                }, {
                                    "id": "dream_gods",
                                    "label": "Dreams of Gods & Monsters (Daughter of Smoke and Bone)"
                                }, {
                                    "id": "visitors",
                                    "label": "Visitors (Pathfinder)"
                                }, {
                                    "id": "princess_bride",
                                    "label": "The Princess Bride: S. Morgenstern's Classic Tale of True Love and High Adventure"
                                }, {
                                    "id": "lock_in",
                                    "label": "Lock In"
                                }, {
                                    "id": "godels_proof",
                                    "label": "Gödel's Proof"
                                }, {
                                    "id": "drop_drink",
                                    "label": "Not a Drop to Drink"
                                }, {
                                    "id": "handful_dust",
                                    "label": "In a Handful of Dust"
                                }, {
                                    "id": "american_gods",
                                    "label": "American Gods"
                                }, {
                                    "id": "odalisque",
                                    "label": "Odalisque: The Baroque Cycle #3"
                                }, {
                                    "id": "king_vagabonds",
                                    "label": "King of the Vagabonds: The Baroque Cycle #2"
                                }, {
                                    "id": "ocean_end",
                                    "label": "The Ocean at the End of the Lane: A Novel"
                                }, {
                                    "id": "brunelleschis_dome",
                                    "label": "Brunelleschi's Dome: How a Renaissance Genius Reinvented Architecture"
                                }, {
                                    "id": "strange_loop",
                                    "label": "I Am a Strange Loop"
                                }, {
                                    "id": "beyond_chocolate",
                                    "label": "Beyond the Chocolate War (Laurel-Leaf Books)"
                                }, {
                                    "id": "le_ton",
                                    "label": "Le Ton Beau De Marot: In Praise of The Music of Language"
                                }, {
                                    "id": "gang_leader",
                                    "label": "Gang Leader for a Day: A Rogue Sociologist Takes to the Streets"
                                }, {
                                    "id": "howls_moving",
                                    "label": "Howl's Moving Castle"
                                }, {
                                    "id": "curious_incident",
                                    "label": "The Curious Incident of the Dog in the Night-Time"
                                }, {
                                    "id": "shakespeare_saved",
                                    "label": "Shakespeare Saved My Life: Ten Years in Solitary with the Bard"
                                }, {
                                    "id": "hp_sorcerers",
                                    "label": "Harry Potter and the Sorcerer's Stone"
                                }, {
                                    "id": "hacker_hoaxer",
                                    "label": "Hacker, Hoaxer, Whistleblower, Spy: The Many Faces of Anonymous"
                                }, {
                                    "id": "saturday",
                                    "label": "Saturday"
                                }, {
                                    "id": "george_secret",
                                    "label": "George's Secret Key to Universe"
                                }, {
                                    "id": "own_country",
                                    "label": "My own country : a doctor's story"
                                }, {
                                    "id": "tennis_partner",
                                    "label": "The Tennis Partner"
                                }, {
                                    "id": "long_utopia",
                                    "label": "The Long Utopia: A Novel (Long Earth)"
                                }, {
                                    "id": "long_mars",
                                    "label": "The Long Mars (Long Earth)"
                                }, {
                                    "id": "art_deception",
                                    "label": "The Art of Deception: Controlling the Human Element of Security"
                                }, {
                                    "id": "skeleton_key",
                                    "label": "Skeleton Key (Alex Rider Adventure)"
                                }]);
                            // create an array with edges
                            // var edges = new vis.DataSet([
                            //     {from: 1, to: 3},
                            //     {from: 1, to: 2},
                            //     {from: 2, to: 4},
                            //     {from: 2, to: 5}
                            // ]);
                            var edges = new vis.DataSet(
                                    [{
                                        "from": "english",
                                        "to": "book_thief"
                                    }, {
                                        "from": "david_goliath",
                                        "to": "blink"
                                    }, {
                                        "from": "null",
                                        "to": "reamde"
                                    }, {
                                        "from": "david_goliath",
                                        "to": "outliers"
                                    }, {
                                        "from": "quicksilver",
                                        "to": "confusion"
                                    }, {
                                        "from": "null",
                                        "to": "daughter_smoke"
                                    }, {
                                        "from": "dark_passage",
                                        "to": "insider"
                                    }, {
                                        "from": "null",
                                        "to": "quicksilver"
                                    }, {
                                        "from": "reamde",
                                        "to": "anathem"
                                    }, {
                                        "from": "long_way",
                                        "to": "truth_matter"
                                    }, {
                                        "from": "zero_hout",
                                        "to": "aftershock"
                                    }, {
                                        "from": "power_play",
                                        "to": "shell_game"
                                    }, {
                                        "from": "hp_sorcerers",
                                        "to": "hp_beedle"
                                    }, {
                                        "from": "rogue",
                                        "to": "zero_hour"
                                    }, {
                                        "from": "magicians",
                                        "to": "magician_king"
                                    }, {
                                        "from": "overlord",
                                        "to": "escape_velocity"
                                    }, {
                                        "from": "library",
                                        "to": "tigers_curse"
                                    }, {
                                        "from": "artemis_fowl",
                                        "to": "artic_incident"
                                    }, {
                                        "from": "dreadnought",
                                        "to": "rogue"
                                    }, {
                                        "from": "disney_dark",
                                        "to": "disney_dawn"
                                    }, {
                                        "from": "tigers_curse",
                                        "to": "tigers_quest"
                                    }, {
                                        "from": "last_thing",
                                        "to": "long_way"
                                    }, {
                                        "from": "artic_incident",
                                        "to": "eternity_code"
                                    }, {
                                        "from": "eldest",
                                        "to": "brisingr"
                                    }, {
                                        "from": "pathfinder",
                                        "to": "ruins"
                                    }, {
                                        "from": "tigers_voyage",
                                        "to": "tigers_destiny"
                                    }, {
                                        "from": "atlantis_complex",
                                        "to": "last_guardian"
                                    }, {
                                        "from": "disney_shadow",
                                        "to": "power_play"
                                    }, {
                                        "from": "crocodile_tears",
                                        "to": "scorpia_rising"
                                    }, {
                                        "from": "library",
                                        "to": "hive"
                                    }, {
                                        "from": "mysterious_benedict",
                                        "to": "mysterious_perilous"
                                    }, {
                                        "from": "artemis_fowl",
                                        "to": "airman"
                                    }, {
                                        "from": "eagle_strike",
                                        "to": "scorpia"
                                    }, {
                                        "from": "john_green",
                                        "to": "magicians"
                                    }, {
                                        "from": "mysterious_perilous",
                                        "to": "mysterious_prisoner"
                                    }, {
                                        "from": "stormbreaker",
                                        "to": "point_blank"
                                    }, {
                                        "from": "rider_gadgets",
                                        "to": "stormbreaker"
                                    }, {
                                        "from": "ark_angel",
                                        "to": "snakehead"
                                    }, {
                                        "from": "hp_sorcerers",
                                        "to": "hp_beasts"
                                    }, {
                                        "from": "library",
                                        "to": "disney_dark"
                                    }, {
                                        "from": "library",
                                        "to": "artemis_fowl"
                                    }, {
                                        "from": "library",
                                        "to": "eragon"
                                    }, {
                                        "from": "skeleton_key",
                                        "to": "eagle_strike"
                                    }, {
                                        "from": "opal_deception",
                                        "to": "lost_colony"
                                    }, {
                                        "from": "eternity_code",
                                        "to": "opal_deception"
                                    }, {
                                        "from": "eragon",
                                        "to": "eldest"
                                    }, {
                                        "from": "artemis_fowl",
                                        "to": "fowl_files"
                                    }, {
                                        "from": "time_paradox",
                                        "to": "atlantis_complex"
                                    }, {
                                        "from": "artemis_fowl",
                                        "to": "half_moon"
                                    }, {
                                        "from": "dad",
                                        "to": "david_goliath"
                                    }, {
                                        "from": "mysterious_benedict",
                                        "to": "eduction_benedict"
                                    }, {
                                        "from": "hp_prisoner",
                                        "to": "hp_goblet"
                                    }, {
                                        "from": "snakehead",
                                        "to": "crocodile_tears"
                                    }, {
                                        "from": "hp_sorcerers",
                                        "to": "hp_quidditch"
                                    }, {
                                        "from": "shell_game",
                                        "to": "dark_passage"
                                    }, {
                                        "from": "scorpia",
                                        "to": "ark_angel"
                                    }, {
                                        "from": "ghost_wires",
                                        "to": "art_intrusion"
                                    }, {
                                        "from": "artemis_fowl",
                                        "to": "plugged"
                                    }, {
                                        "from": "long_way",
                                        "to": "final_hour"
                                    }, {
                                        "from": "diviners",
                                        "to": "beauty"
                                    }, {
                                        "from": "escape_velocity",
                                        "to": "dreadnought"
                                    }, {
                                        "from": "david_goliath",
                                        "to": "tipping_point"
                                    }, {
                                        "from": "null",
                                        "to": "mysterious_benedict"
                                    }, {
                                        "from": "john_green",
                                        "to": "diviners"
                                    }, {
                                        "from": "brisingr",
                                        "to": "inheritance"
                                    }, {
                                        "from": "reamde",
                                        "to": "diamond_age"
                                    }, {
                                        "from": "aftershock",
                                        "to": "deadlock"
                                    }, {
                                        "from": "tigers_quest",
                                        "to": "tigers_voyage"
                                    }, {
                                        "from": "tigers_curse",
                                        "to": "tigers_promise"
                                    }, {
                                        "from": "hp_sorcerers",
                                        "to": "silkworm"
                                    }, {
                                        "from": "hp_sorcers",
                                        "to": "hp_chamber"
                                    }, {
                                        "from": "hp_chamber",
                                        "to": "hp_prisoner"
                                    }, {
                                        "from": "hp_goblet",
                                        "to": "hp_order"
                                    }, {
                                        "from": "hp_order",
                                        "to": "hp_prince"
                                    }, {
                                        "from": "hp_prince",
                                        "to": "hp_deathly"
                                    }, {
                                        "from": "hp_sorcerers",
                                        "to": "hp_prequel"
                                    }, {
                                        "from": "enders_game",
                                        "to": "pathfinder"
                                    }, {
                                        "from": "disney_dawn",
                                        "to": "disney_shadow"
                                    }, {
                                        "from": "earth_afire",
                                        "to": "earth_unawakens"
                                    }, {
                                        "from": "hive",
                                        "to": "overlord"
                                    }, {
                                        "from": "mom",
                                        "to": "maisie_dobbs"
                                    }, {
                                        "from": "ryan_holiday",
                                        "to": "tiger"
                                    }, {
                                        "from": "english",
                                        "to": "seperate_peace"
                                    }, {
                                        "from": "artemis_fowl",
                                        "to": "supernaturalist"
                                    }, {
                                        "from": "lost_colony",
                                        "to": "time_paradox"
                                    }, {
                                        "from": "wired",
                                        "to": "penumbra"
                                    }, {
                                        "from": "artemis_fowl",
                                        "to": "wish_list"
                                    }, {
                                        "from": "library",
                                        "to": "ghost_wires"
                                    }, {
                                        "from": "english",
                                        "to": "siddhartha"
                                    }, {
                                        "from": "book_thief",
                                        "to": "i_messenger"
                                    }, {
                                        "from": "enders_game",
                                        "to": "earth_unaware"
                                    }, {
                                        "from": "earth_unaware",
                                        "to": "earth_afire"
                                    }, {
                                        "from": "library",
                                        "to": "rider_gadgets"
                                    }, {
                                        "from": "null",
                                        "to": "dinner"
                                    }, {
                                        "from": "null",
                                        "to": "in_vino"
                                    }, {
                                        "from": "color_magic",
                                        "to": "long_earth"
                                    }, {
                                        "from": "charlie_chocolate",
                                        "to": "magic_finger"
                                    }, {
                                        "from": "hp_sorcerers",
                                        "to": "dumbledores_army"
                                    }, {
                                        "from": "null",
                                        "to": "last_thing"
                                    }, {
                                        "from": "null",
                                        "to": "chocolate_war"
                                    }, {
                                        "from": "school",
                                        "to": "kill_mockingbird"
                                    }, {
                                        "from": "school",
                                        "to": "call_of"
                                    }, {
                                        "from": "long_earth",
                                        "to": "long_war"
                                    }, {
                                        "from": "library",
                                        "to": "dark_eyes"
                                    }, {
                                        "from": "null",
                                        "to": "cutting_for"
                                    }, {
                                        "from": "brief_history",
                                        "to": "grand_design"
                                    }, {
                                        "from": "magician_king",
                                        "to": "magicians_land"
                                    }, {
                                        "from": "english",
                                        "to": "glass_castle"
                                    }, {
                                        "from": "book_club",
                                        "to": "unbroken"
                                    }, {
                                        "from": "good_omens",
                                        "to": "color_magic"
                                    }, {
                                        "from": "numberphile",
                                        "to": "things_make"
                                    }, {
                                        "from": "american_gods",
                                        "to": "good_omens"
                                    }, {
                                        "from": "george_secret",
                                        "to": "brief_history"
                                    }, {
                                        "from": "null",
                                        "to": "eat_pray"
                                    }, {
                                        "from": "english",
                                        "to": "hobbit"
                                    }, {
                                        "from": "mshamilton",
                                        "to": "shipping_news"
                                    }, {
                                        "from": "daughter_smoke",
                                        "to": "days_blood"
                                    }, {
                                        "from": "daughter_smoke",
                                        "to": "dream_gods"
                                    }, {
                                        "from": "ruins",
                                        "to": "visitors"
                                    }, {
                                        "from": "null",
                                        "to": "princess_bride"
                                    }, {
                                        "from": "null",
                                        "to": "lock_in"
                                    }, {
                                        "from": "godel_escher",
                                        "to": "godels_proof"
                                    }, {
                                        "from": "handful_dust",
                                        "to": "drop_drink"
                                    }, {
                                        "from": "book_club",
                                        "to": "handful_dust"
                                    }, {
                                        "from": "anansi_boys",
                                        "to": "american_gods"
                                    }, {
                                        "from": "king_vagabonds",
                                        "to": "odalisque"
                                    }, {
                                        "from": "quicksilver",
                                        "to": "king_vagabonds"
                                    }, {
                                        "from": "null",
                                        "to": "ocean_end"
                                    }, {
                                        "from": "mitchell",
                                        "to": "brunelleschis_dome"
                                    }, {
                                        "from": "godel_escher",
                                        "to": "strange_loop"
                                    }, {
                                        "from": "chocolate_war",
                                        "to": "beyond_chocolate"
                                    }, {
                                        "from": "godel_escher",
                                        "to": "le_ton"
                                    }, {
                                        "from": "ryan_holiday",
                                        "to": "gang_leader"
                                    }, {
                                        "from": "null",
                                        "to": "howls_moving"
                                    }, {
                                        "from": "null",
                                        "to": "curious_incident"
                                    }, {
                                        "from": "null",
                                        "to": "shakespeare_saved"
                                    }, {
                                        "from": "null",
                                        "to": "hp_sorcerers"
                                    }, {
                                        "from": "library",
                                        "to": "hacker_hoaxer"
                                    }, {
                                        "from": "school",
                                        "to": "saturday"
                                    }, {
                                        "from": "null",
                                        "to": "george_secret"
                                    }, {
                                        "from": "cutting_for",
                                        "to": "own_country"
                                    }, {
                                        "from": "cutting_for",
                                        "to": "tennis_partner"
                                    }, {
                                        "from": "long_mars",
                                        "to": "long_utopia"
                                    }, {
                                        "from": "long_war",
                                        "to": "long_mars"
                                    }, {
                                        "from": "ghost_wires",
                                        "to": "art_deception"
                                    }, {
                                        "from": "point_blank",
                                        "to": "skeleton_key"
                                    }])
                                // create a network
                            var container = document.getElementById('mynetwork');
                            var data = {
                                nodes: nodes,
                                edges: edges
                            };
                            // var options = {
                            //     layout: {
                            //         hierarchical: {
                            //             sortMethod: layoutMethod
                            //         }
                            //     },
                            //     edges: {
                            //         smooth: true,
                            //         arrows: {
                            //             to: true
                            //         }
                            //     },
                            //     physics: {
                            //         enabled: true,
                            //         barnesHut: {
                            //             avoidOverlap: 1
                            //         },
                            //         forceAtlas2Based: {
                            //             avoidOverlap: 1
                            //         }
                            //     }
                            // };
                            var options = {
                                physics: {
                                    enabled: true,
                                    barnesHut: {
                                        gravitationalConstant: -20000,
                                        centralGravity: 0.3,
                                        springLength: 1000,
                                        springConstant: 0.04,
                                        damping: 0.09,
                                        avoidOverlap: 5
                                    },
                                    forceAtlas2Based: {
                                        gravitationalConstant: -50,
                                        centralGravity: 0.01,
                                        springConstant: 0.08,
                                        springLength: 100,
                                        damping: 0.4,
                                        avoidOverlap: 5
                                    },
                                    repulsion: {
                                        centralGravity: 0.6,
                                        springLength: 1000,
                                        springConstant: 0.05,
                                        nodeDistance: 1000,
                                        damping: 0.09
                                    },
                                    hierarchicalRepulsion: {
                                        centralGravity: 0.0,
                                        springLength: 100,
                                        springConstant: 0.01,
                                        nodeDistance: 120,
                                        damping: 0.09
                                    },
                                    maxVelocity: 50,
                                    minVelocity: 0.1,
                                    solver: 'barnesHut',
                                    stabilization: {
                                        enabled: true,
                                        iterations: 1000,
                                        updateInterval: 100,
                                        onlyDynamicEdges: false,
                                        fit: true
                                    },
                                    timestep: 0.5,
                                    adaptiveTimestep: true
                                },
                                layout: {
                                    hierarchical: {
                                        sortMethod: layoutMethod
                                    }
                                }
                            }
                            network = new vis.Network(container, data, options);
                        }
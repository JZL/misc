/**
 * Created by JetBrains RubyMine.
 * User: pavanpodila
 * Date: 7/17/11
 * Time: 4:30 PM
 * To change this template use File | Settings | File Templates.
 */

// var treeData = {
//     name: "/",
//     contents: [
//         {
//             name: "Applications",
//             contents: [
//                 { name: "Mail.app" },
//                 { name: "iPhoto.app" },
//                 { name: "Keynote.app" },
//                 { name: "iTunes.app" },
//                 { name: "XCode.app" },
//                 { name: "Numbers.app" },
//                 { name: "Pages.app" }
//             ]
//         },
//         {
//             name: "System",
//             contents: []
//         },
//         {
//             name: "Library",
//             contents: [
//                 {
//                     name: "Application Support",
//                     contents: [
//                         { name: "Adobe" },
//                         { name: "Apple" },
//                         { name: "Google" },
//                         { name: "Microsoft" }
//                     ]
//                 },
//                 {
//                     name: "Languages",
//                     contents: [
//                         { name: "Ruby" },
//                         { name: "Python" },
//                         { name: "Javascript" },
//                         { name: "C#" }
//                     ]
//                 },
//                 {
//                     name: "Developer",
//                     contents: [
//                         { name: "4.2" },
//                         { name: "4.3" },
//                         { name: "5.0" },
//                         { name: "Documentation" }
//                     ]
//                 }
//             ]
//         },
//         {
//             name: "opt",
//             contents: []
//         },
//         {
//             name: "Users",
//             contents: [
//                 { name: "pavanpodila" },
//                 { name: "admin" },
//                 { name: "test-user" }
//             ]
//         }
//     ]
// };
treeData = {
    "name": "allLT",
    "contents": [{
        "id": "shipping_news",
        "name": "The Shipping News"
    }, {
        "id": "good_omens",
        "name": "Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch",
        "contents": [{
            "id": "color_magic",
            "name": "The Color of Magic (Discworld)",
            "contents": [{
                "id": "long_earth",
                "name": "The Long Earth",
                "contents": [{
                    "id": "long_war",
                    "name": "The Long War (Long Earth)",
                    "contents": [{
                        "id": "long_mars",
                        "name": "The Long Mars (Long Earth)",
                        "contents": [{
                            "id": "long_utopia",
                            "name": "The Long Utopia: A Novel (Long Earth)"
                        }]
                    }]
                }]
            }]
        }]
    }, {
        "id": "american_gods",
        "name": "American Gods"
    }, {
        "id": "unbroken",
        "name": "Unbroken: A World War II Story of Survival, Resilience, and Redemption"
    }, {
        "id": "handful_dust",
        "name": "In a Handful of Dust"
    }, {
        "id": "inheritance",
        "name": "Inheritance (The Inheritance Cycle)"
    }, {
        "id": "magic_finger",
        "name": "The Magic Finger"
    }, {
        "id": "david_goliath",
        "name": "David and Goliath: Underdogs, Misfits, and the Art of Battling Giants",
        "contents": [{
            "id": "blink",
            "name": "Blink: The Power of Thinking Without Thinking"
        }, {
            "id": "outliers",
            "name": "Outliers: The Story of Success"
        }, {
            "id": "tipping_point",
            "name": "The Tipping Point: How Little Things Can Make a Big Difference"
        }]
    }, {
        "id": "dream_gods",
        "name": "Dreams of Gods & Monsters (Daughter of Smoke and Bone)"
    }, {
        "id": "disney_dawn",
        "name": "Kingdom Keepers II: Disney At Dawn",
        "contents": [{
            "id": "disney_shadow",
            "name": "Kingdom Keepers III: Disney in Shadow",
            "contents": [{
                "id": "power_play",
                "name": "Kingdom Keepers IV: Power Play",
                "contents": [{
                    "id": "shell_game",
                    "name": "Shell Game: Kindom Keepers V",
                    "contents": [{
                        "id": "dark_passage",
                        "name": "Kingdom Keepers VI: Dark Passage",
                        "contents": [{
                            "id": "insider",
                            "name": "Kingdom Keepers VII: The Insider"
                        }]
                    }]
                }]
            }]
        }]
    }, {
        "id": "library",
        "name": "Kingdom Keepers: Disney After Dark",
        "contents": [{
            "id": "artemis_fowl",
            "name": "Artemis Fowl (Artemis Fowl, Book 1)",
            "contents": [{
                "id": "airman",
                "name": "Airman"
            }, {
                "id": "artic_incident",
                "name": "The Arctic Incident (Artemis Fowl, Book 2)",
                "contents": [{
                    "id": "eternity_code",
                    "name": "The Eternity Code (Artemis Fowl, Book 3)",
                    "contents": [{
                        "id": "opal_deception",
                        "name": "Artemis Fowl (The Opal Deception)",
                        "contents": [{
                            "id": "lost_colony",
                            "name": "The Lost Colony (Artemis Fowl, Book 5)",
                            "contents": [{
                                "id": "time_paradox",
                                "name": "The Time Paradox (Artemis Fowl, Book 6)",
                                "contents": [{
                                    "id": "atlantis_complex",
                                    "name": "The Artemis Fowl Atlantis Complex",
                                    "contents": [{
                                        "id": "last_guardian",
                                        "name": "Artemis Fowl The Last Guardian"
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                "id": "fowl_files",
                "name": "The Artemis Fowl Files: The Ultimate Guide to the Best-selling Series"
            }, {
                "id": "half_moon",
                "name": "Half Moon Investigations"
            }, {
                "id": "plugged",
                "name": "Plugged"
            }, {
                "id": "supernaturalist",
                "name": "The Supernaturalist"
            }, {
                "id": "wish_list",
                "name": "The Wish List"
            }]
        }, {
            "id": "dark_eyes",
            "name": "Dark Eyes"
        }, {
            "id": "eragon",
            "name": "Eragon (Inheritance, Book 1)",
            "contents": [{
                "id": "eldest",
                "name": "Eldest (Inheritance Cycle, Book 2) (The Inheritance Cycle)",
                "contents": [{
                    "id": "brisingr",
                    "name": "Brisingr (Inheritance, Book 3) (The Inheritance Cycle)"
                }]
            }]
        }, {
            "id": "ghost_wires",
            "name": "Ghost in the Wires: My Adventures as the World's Most Wanted Hacker",
            "contents": [{
                "id": "art_deception",
                "name": "The Art of Deception: Controlling the Human Element of Security"
            }, {
                "id": "art_intrusion",
                "name": "The Art of Intrusion: The Real Stories Behind the Exploits of Hackers, Intruders and Deceivers"
            }]
        }, {
            "id": "hacker_hoaxer",
            "name": "Hacker, Hoaxer, Whistleblower, Spy: The Many Faces of Anonymous"
        }, {
            "id": "hive",
            "name": "H.I.V.E.: Higher Institute of Villainous Education",
            "contents": [{
                "id": "overlord",
                "name": "The Overlord Protocol (H.I.V.E.)",
                "contents": [{
                    "id": "escape_velocity",
                    "name": "Escape Velocity (H.I.V.E.)",
                    "contents": [{
                        "id": "dreadnought",
                        "name": "Dreadnought (H.I.V.E.)",
                        "contents": [{
                            "id": "rogue",
                            "name": "Rogue (H.I.V.E.)",
                            "contents": [{
                                "id": "zero_hour",
                                "name": "Zero Hour (H.I.V.E)"
                            }]
                        }]
                    }]
                }]
            }]
        }, {
            "id": "rider_gadgets",
            "name": "Alex Rider: The Gadgets",
            "contents": [{
                "id": "stormbreaker",
                "name": "Stormbreaker (Alex Rider)",
                "contents": [{
                    "id": "point_blank",
                    "name": "Point Blank (Alex Rider Adventure)",
                    "contents": [{
                        "id": "skeleton_key",
                        "name": "Skeleton Key (Alex Rider Adventure)",
                        "contents": [{
                            "id": "eagle_strike",
                            "name": "Eagle Strike (Alex Rider Adventure)",
                            "contents": [{
                                "id": "scorpia",
                                "name": "Scorpia (Alex Rider)",
                                "contents": [{
                                    "id": "ark_angel",
                                    "name": "Ark Angel (Alex Rider Adventure)",
                                    "contents": [{
                                        "id": "snakehead",
                                        "name": "Snakehead",
                                        "contents": [{
                                            "id": "crocodile_tears",
                                            "name": "Crocodile Tears (Alex Rider)",
                                            "contents": [{
                                                "id": "scorpia_rising",
                                                "name": "Scorpia Rising (Alex Rider)"
                                            }]
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }]
        }, {
            "id": "tigers_curse",
            "name": "Tiger's Curse (Book 1 in the Tiger's Curse Series)",
            "contents": [{
                "id": "tigers_promise",
                "name": "Tiger's Promise: A Tiger's Curse Novella (The Tiger's Curse Series)"
            }, {
                "id": "tigers_quest",
                "name": "Tiger's Quest (Book 2 in the Tiger's Curse Series)",
                "contents": [{
                    "id": "tigers_voyage",
                    "name": "Tiger's Voyage (Book 3 in the Tiger's Curse Series)",
                    "contents": [{
                        "id": "tigers_destiny",
                        "name": "Tiger's Destiny (Book 4 in the Tiger's Curse Series)"
                    }]
                }]
            }]
        }]
    }, {
        "id": "earth_unaware",
        "name": "Earth Unaware (The First Formic War)",
        "contents": [{
            "id": "earth_afire",
            "name": "Earth Afire (The First Formic War)",
            "contents": [{
                "id": "earth_unawakens",
                "name": "Earth Awakens (First Formic War)"
            }]
        }]
    }, {
        "id": "pathfinder",
        "name": "Pathfinder",
        "contents": [{
            "id": "ruins",
            "name": "Ruins (Pathfinder Series)"
        }]
    }, {
        "id": "book_thief",
        "name": "The Book Thief",
        "contents": [{
            "id": "i_messenger",
            "name": "I Am the Messenger"
        }]
    }, {
        "id": "glass_castle",
        "name": "The Glass Castle: A Memoir"
    }, {
        "id": "hobbit",
        "name": "The Hobbit; or, There and Back Again"
    }, {
        "id": "seperate_peace",
        "name": "A Separate Peace"
    }, {
        "id": "siddhartha",
        "name": "Siddhartha"
    }, {
        "id": "brief_history",
        "name": "My Brief History",
        "contents": [{
            "id": "grand_design",
            "name": "The Grand Design"
        }]
    }, {
        "id": "godels_proof",
        "name": "Gödel's Proof"
    }, {
        "id": "le_ton",
        "name": "Le Ton Beau De Marot: In Praise of The Music of Language"
    }, {
        "id": "strange_loop",
        "name": "I Am a Strange Loop"
    }, {
        "id": "drop_drink",
        "name": "Not a Drop to Drink"
    }, {
        "id": "hp_chamber",
        "name": "Harry Potter And The Chamber Of Secrets",
        "contents": [{
            "id": "hp_prisoner",
            "name": "Harry Potter and the Prisoner of Azkaban",
            "contents": [{
                "id": "hp_goblet",
                "name": "Harry Potter And The Goblet Of Fire",
                "contents": [{
                    "id": "hp_order",
                    "name": "Harry Potter And The Order Of The Phoenix",
                    "contents": [{
                        "id": "hp_prince",
                        "name": "Harry Potter and the Half-Blood Prince (Book 6)",
                        "contents": [{
                            "id": "hp_deathly",
                            "name": "Harry Potter and the Deathly Hallows (Book 7)"
                        }]
                    }]
                }]
            }]
        }]
    }, {
        "id": "diviners",
        "name": "The Diviners",
        "contents": [{
            "id": "beauty",
            "name": "Beauty Queens"
        }]
    }, {
        "id": "magicians",
        "name": "The Magicians: A Novel",
        "contents": [{
            "id": "magician_king",
            "name": "Magician King"
        }]
    }, {
        "id": "magicians_land",
        "name": "The Magician's Land: A Novel (Magicians Trilogy)"
    }, {
        "id": "brunelleschis_dome",
        "name": "Brunelleschi's Dome: How a Renaissance Genius Reinvented Architecture"
    }, {
        "id": "maisie_dobbs",
        "name": "Maisie Dobbs"
    }, {
        "id": "chocolate_war",
        "name": "The Chocolate War",
        "contents": [{
            "id": "beyond_chocolate",
            "name": "Beyond the Chocolate War (Laurel-Leaf Books)"
        }]
    }, {
        "id": "curious_incident",
        "name": "The Curious Incident of the Dog in the Night-Time"
    }, {
        "id": "cutting_for",
        "name": "Cutting for Stone",
        "contents": [{
            "id": "own_country",
            "name": "My own country : a doctor's story"
        }, {
            "id": "tennis_partner",
            "name": "The Tennis Partner"
        }]
    }, {
        "id": "daughter_smoke<br>This",
        "name": "Daughter of Smoke & Bone (Daughter of Smoke and Bone)",
        "contents": [{
            "id": "days_blood",
            "name": "Days of Blood & Starlight (Daughter of Smoke and Bone)"
        }]
    }, {
        "id": "dinner",
        "name": "The Dinner"
    }, {
        "id": "eat_pray<br>I",
        "name": "Eat, Pray, Love: One Woman's Search for Everything Across Italy, India and Indonesia"
    }, {
        "id": "george_secret",
        "name": "George's Secret Key to Universe"
    }, {
        "id": "howls_moving",
        "name": "Howl's Moving Castle"
    }, {
        "id": "hp_sorcerers",
        "name": "Harry Potter and the Sorcerer's Stone",
        "contents": [{
            "id": "dumbledores_army",
            "name": "Dumbledore’s Army Reunites at Quidditch World Cup Final"
        }, {
            "id": "hp_beasts",
            "name": "Fantastic Beasts and Where to Find Them"
        }, {
            "id": "hp_beedle",
            "name": "The Tales of Beedle the Bard (U.K. 1st printing)"
        }, {
            "id": "hp_prequel",
            "name": "Harry Potter: The Prequel"
        }, {
            "id": "hp_quidditch",
            "name": "Quidditch Through the Ages"
        }, {
            "id": "silkworm",
            "name": "The Silkworm (A Cormoran Strike Novel)"
        }]
    }, {
        "id": "in_vino",
        "name": "In Vino Veritas"
    }, {
        "id": "last_thing",
        "name": "The last thing I remember",
        "contents": [{
            "id": "long_way",
            "name": "The Long Way Home (The Homelanders)",
            "contents": [{
                "id": "final_hour",
                "name": "The Final Hour (The Homelanders)"
            }, {
                "id": "truth_matter",
                "name": "The Truth of the Matter (The Homelanders)"
            }]
        }]
    }, {
        "id": "lock_in<br>I",
        "name": "Lock In"
    }, {
        "id": "mysterious_benedict",
        "name": "The Mysterious Benedict Society",
        "contents": [{
            "id": "eduction_benedict",
            "name": "The Extraordinary Education of Nicholas Benedict (The Mysterious Benedict Society)"
        }, {
            "id": "mysterious_perilous",
            "name": "The Mysterious Benedict Society and the Perilous Journey",
            "contents": [{
                "id": "mysterious_prisoner",
                "name": "The Mysterious Benedict Society and the Prisoner's Dilemma"
            }]
        }]
    }, {
        "id": "ocean_end<br>Gaian",
        "name": "The Ocean at the End of the Lane: A Novel"
    }, {
        "id": "princess_bride<br>This",
        "name": "The Princess Bride: S. Morgenstern's Classic Tale of True Love and High Adventure"
    }, {
        "id": "quicksilver<br>A",
        "name": "Quicksilver (The Baroque Cycle, Vol. 1)"
    }, {
        "id": "reamde",
        "name": "Reamde",
        "contents": [{
            "id": "diamond_age",
            "name": "The Diamond Age: Or, a Young Lady's Illustrated Primer (Bantam Spectra Book)"
        }]
    }, {
        "id": "shakespeare_saved",
        "name": "Shakespeare Saved My Life: Ten Years in Solitary with the Bard"
    }, {
        "id": "things_make",
        "name": "Things to Make and Do in the Fourth Dimension: A Mathematician's Journey Through Narcissistic Numbers, Optimal Dating Algorithms, at Least Two Kinds of Infinity, and More"
    }, {
        "id": "king_vagabonds",
        "name": "King of the Vagabonds: The Baroque Cycle #2",
        "contents": [{
            "id": "odalisque",
            "name": "Odalisque: The Baroque Cycle #3"
        }]
    }, {
        "id": "confusion",
        "name": "The Confusion (The Baroque Cycle, Vol. 2)"
    }, {
        "id": "anathem",
        "name": "Anathem"
    }, {
        "id": "visitors",
        "name": "Visitors (Pathfinder)"
    }, {
        "id": "gang_leader",
        "name": "Gang Leader for a Day: A Rogue Sociologist Takes to the Streets"
    }, {
        "id": "tiger",
        "name": "The Tiger: A True Story of Vengeance and Survival (Vintage Departures)"
    }, {
        "id": "call_of",
        "name": "The Call of the Wild"
    }, {
        "id": "kill_mockingbird",
        "name": "To Kill a Mockingbird"
    }, {
        "id": "saturday",
        "name": "Saturday"
    }, {
        "id": "penumbra",
        "name": "Mr. Penumbra's 24-Hour Bookstore: A Novel"
    }, {
        "id": "aftershock",
        "name": "Aftershock (H.I.V.E)",
        "contents": [{
            "id": "deadlock",
            "name": "H.I.V.E. 8: Deadlock"
        }]
    }]
}

function visit(parent, visitFn, childrenFn)
{
    if (!parent) return;

    visitFn(parent);

    var children = childrenFn(parent);
    if (children) {
        var count = children.length;
        for (var i = 0; i < count; i++) {
            visit(children[i], visitFn, childrenFn);
        }
    }
}

function buildTree(containerName, customOptions)
{
    // build the options object
    var options = $.extend({
        nodeRadius: 10, fontSize: 12
    }, customOptions);

    
    // Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;
    visit(treeData, function(d)
    {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);
    }, function(d)
    {
        return d.contents && d.contents.length > 0 ? d.contents : null;
    });

    // size of the diagram
    var size = { width:$(containerName).outerWidth(), height: totalNodes * 15};

    var tree = d3.layout.tree()
        .sort(null)
        .size([size.height, size.width - maxLabelLength*options.fontSize])
        .children(function(d)
        {
            return (!d.contents || d.contents.length === 0) ? null : d.contents;
        });

    var nodes = tree.nodes(treeData);
    var links = tree.links(nodes);

    
    /*
        <svg>
            <g class="container" />
        </svg>
     */
    var layoutRoot = d3.select(containerName)
        .append("svg:svg").attr("width", size.width).attr("height", size.height)
        .append("svg:g")
        .attr("class", "container")
        .attr("transform", "translate(" + maxLabelLength + ",0)");


    // Edges between nodes as a <path class="link" />
    var link = d3.svg.diagonal()
        .projection(function(d)
        {
            return [d.y, d.x];
        });

    layoutRoot.selectAll("path.link")
        .data(links)
        .enter()
        .append("svg:path")
        .attr("class", "link")
        .attr("d", link);


    /*
        Nodes as
        <g class="node">
            <circle class="node-dot" />
            <text />
        </g>
     */
    var nodeGroup = layoutRoot.selectAll("g.node")
        .data(nodes)
        .enter()
        .append("svg:g")
        .attr("class", "node")
        .attr("transform", function(d)
        {
            return "translate(" + d.y + "," + d.x + ")";
        });

    nodeGroup.append("svg:circle")
        .attr("class", "node-dot")
        .attr("r", options.nodeRadius);

    nodeGroup.append("svg:text")
        .attr("text-anchor", function(d)
        {
            return d.children ? "end" : "start";
        })
        .attr("dx", function(d)
        {
            var gap = 2 * options.nodeRadius;
            return d.children ? -gap : gap;
        })
        .attr("dy", 3)
        .text(function(d)
        {
            return d.name;
        });

}
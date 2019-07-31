<template>
  <b-tab title="Campaign" active>
    <b-card-text>
      <div class="fs-13">
        <b-table class="my-table" small bordered responsive :items="items" :fields="fields">
          <template slot="status" slot-scope="data" >
            <b-form-checkbox v-if="data.value == '1'" checked='true' switch disabled></b-form-checkbox>
            <b-form-checkbox v-else switch disabled></b-form-checkbox>
          </template>
          <template slot="name" slot-scope="data" >
            <router-link tag="span" :to="{ path: 'campaign-manager/' + data.item.id }" class="link-a">
              {{ data.value }}
            </router-link>
          </template>
        </b-table>
      </div>
    </b-card-text>
  </b-tab>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: 'status',
          sortable: true
        },
        {
          key: 'id',
          label: 'ID',
          sortable: true
        },
        {
          key: 'name',
          label: 'Campaign Name',
          sortable: true
        },
        {
          key: 'spent',
          sortable: true
        },
        {
          key: 'click',
          sortable: true
        },
        {
          key: 'impression',
          sortable: true
        },
        {
          key: 'ctr',
          label: 'CTR',
          sortable: true
        },
        {
          key: 'cpc',
          label: 'CPC',
          sortable: true
        },
        {
          key: 'delivery_status',
          sortable: true
        },
        {
          key: 'kpi',
          label: 'KPI',
          sortable: true
        },
        {
          key: 'objective',
          sortable: true
        },
        {
          key: 'start_schedule',
          sortable: true
        },
        {
          key: 'end_schedule',
          sortable: true
        },
        {
          key: 'budget_type',
          sortable: true
        }
      ],
      items: [
        {
        "id": 1,
        "name": "Mua dong kong lanh",
        "status": 1,
        "spent": 61449161853,
        "click": 8892,
        "impression": "Jaron Schinner",
        "ctr": 416,
        "cpc": 824,
        "delivery_status": "Kareem Beier",
        "kpi": 659,
        "objective": "Prof. Ryann Hand II",
        "start_schedule": "2018-11-29 15:23:47",
        "end_schedule": "2019-06-24 02:55:38",
        "budget_type": 2,
        "adgroups": [
            {
                "id": 19,
                "campaign_id": 1,
                "status": 0,
                "ag_name": "Miss Jacinthe Hill MD",
                "delivery_status": "Zula Raynor I",
                "spent": 37989,
                "click": 446,
                "impression": "Joyce Lueilwitz",
                "ctr": 183,
                "cpc": 72,
                "daily_budget": 957557,
                "bid": "9098",
                "bid_amount": 797,
                "adses": [
                    {
                        "id": 18,
                        "ag_id": 19,
                        "status": 0,
                        "ad_name": "Sherman Zulauf DVM",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?34638",
                        "delivery_status": "Prof. Gisselle Anderson DVM",
                        "spent": 972793,
                        "click": 526,
                        "impression": "Thaddeus Haag",
                        "ctr": 707,
                        "cpc": 15
                    },
                    {
                        "id": 49,
                        "ag_id": 19,
                        "status": 0,
                        "ad_name": "Mr. Doug Muller Sr.",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?95650",
                        "delivery_status": "Elenora Wilkinson",
                        "spent": 348803,
                        "click": 287,
                        "impression": "Dr. Carson Bauch",
                        "ctr": 183,
                        "cpc": 452
                    },
                    {
                        "id": 97,
                        "ag_id": 19,
                        "status": 0,
                        "ad_name": "Dr. Demetrius Moore",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?66588",
                        "delivery_status": "Malika Blick",
                        "spent": 886854,
                        "click": 175,
                        "impression": "Savannah Konopelski",
                        "ctr": 980,
                        "cpc": 546
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Vui cung le hoi",
        "status": 1,
        "spent": 63777234784,
        "click": 3764,
        "impression": "Antone Jast",
        "ctr": 563,
        "cpc": 464,
        "delivery_status": "Gardner Brekke",
        "kpi": 650,
        "objective": "Petra Rohan",
        "start_schedule": "2018-11-12 17:34:19",
        "end_schedule": "2019-04-19 07:12:00",
        "budget_type": 1,
        "adgroups": [
            {
                "id": 3,
                "campaign_id": 2,
                "status": 1,
                "ag_name": "Felix Predovic",
                "delivery_status": "Prof. Abigayle White DDS",
                "spent": 90110,
                "click": 660,
                "impression": "Kennedy Torphy",
                "ctr": 131,
                "cpc": 86,
                "daily_budget": 761851,
                "bid": "5640",
                "bid_amount": 158,
                "adses": [
                    {
                        "id": 26,
                        "ag_id": 3,
                        "status": 0,
                        "ad_name": "Geraldine Dare",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?91441",
                        "delivery_status": "Mrs. Vivien Dicki",
                        "spent": 921389,
                        "click": 753,
                        "impression": "Maegan Beier",
                        "ctr": 765,
                        "cpc": 707
                    },
                    {
                        "id": 46,
                        "ag_id": 3,
                        "status": 0,
                        "ad_name": "Dr. John Swift MD",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?95763",
                        "delivery_status": "Alycia Rosenbaum",
                        "spent": 871156,
                        "click": 852,
                        "impression": "Mrs. Eleanore Rodriguez I",
                        "ctr": 119,
                        "cpc": 566
                    },
                    {
                        "id": 51,
                        "ag_id": 3,
                        "status": 0,
                        "ad_name": "Bernadette Krajcik",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?39386",
                        "delivery_status": "Andrew Dickens",
                        "spent": 969068,
                        "click": 733,
                        "impression": "Muriel Sanford",
                        "ctr": 137,
                        "cpc": 988
                    },
                    {
                        "id": 82,
                        "ag_id": 3,
                        "status": 0,
                        "ad_name": "Theresia Ferry Sr.",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?65422",
                        "delivery_status": "Prof. Demetrius Cruickshank",
                        "spent": 112752,
                        "click": 298,
                        "impression": "Buck Rodriguez",
                        "ctr": 748,
                        "cpc": 215
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "Vuon tam the gioi",
        "status": 0,
        "spent": 82888671003,
        "click": 7681,
        "impression": "Malachi Bartell",
        "ctr": 105,
        "cpc": 75,
        "delivery_status": "Irving Anderson",
        "kpi": 609,
        "objective": "Isaiah Hammes",
        "start_schedule": "2018-08-20 13:50:31",
        "end_schedule": "2019-04-26 13:56:25",
        "budget_type": 3,
        "adgroups": [
            {
                "id": 5,
                "campaign_id": 3,
                "status": 0,
                "ag_name": "Bonita Champlin",
                "delivery_status": "Anabelle Ondricka PhD",
                "spent": 63156,
                "click": 756,
                "impression": "Josue Kemmer",
                "ctr": 352,
                "cpc": 166,
                "daily_budget": 325910,
                "bid": "5774",
                "bid_amount": 762,
                "adses": [
                    {
                        "id": 1,
                        "ag_id": 5,
                        "status": 0,
                        "ad_name": "Earnestine Hickle",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?25869",
                        "delivery_status": "D'angelo Reynolds",
                        "spent": 13890,
                        "click": 387,
                        "impression": "Ms. Maudie Dickens MD",
                        "ctr": 632,
                        "cpc": 945
                    },
                    {
                        "id": 14,
                        "ag_id": 5,
                        "status": 0,
                        "ad_name": "Hulda Lind",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?82717",
                        "delivery_status": "Dillan Olson",
                        "spent": 925480,
                        "click": 615,
                        "impression": "Prof. Nickolas Gutmann",
                        "ctr": 663,
                        "cpc": 597
                    },
                    {
                        "id": 43,
                        "ag_id": 5,
                        "status": 1,
                        "ad_name": "Audreanne D'Amore",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?25937",
                        "delivery_status": "Claude Nienow",
                        "spent": 336857,
                        "click": 703,
                        "impression": "Gregg Heidenreich",
                        "ctr": 869,
                        "cpc": 995
                    },
                    {
                        "id": 69,
                        "ag_id": 5,
                        "status": 0,
                        "ad_name": "Rogelio Kunde",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?83775",
                        "delivery_status": "Adell Kessler I",
                        "spent": 273623,
                        "click": 604,
                        "impression": "Hugh Kirlin",
                        "ctr": 951,
                        "cpc": 576
                    },
                    {
                        "id": 95,
                        "ag_id": 5,
                        "status": 0,
                        "ad_name": "Mr. Desmond Parker DVM",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?35839",
                        "delivery_status": "Dan Reichert",
                        "spent": 92921,
                        "click": 107,
                        "impression": "Linnie Treutel",
                        "ctr": 914,
                        "cpc": 43
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "name": "Chien dich so 4",
        "status": 0,
        "spent": 54376404755,
        "click": 1504,
        "impression": "Riley Jakubowski",
        "ctr": 1,
        "cpc": 111,
        "delivery_status": "Esteban Wisoky",
        "kpi": 635,
        "objective": "Dr. Santa DuBuque Sr.",
        "start_schedule": "2018-11-30 20:16:56",
        "end_schedule": "2019-06-28 15:58:04",
        "budget_type": 4,
        "adgroups": [
            {
                "id": 4,
                "campaign_id": 4,
                "status": 0,
                "ag_name": "Nicolas Kunze",
                "delivery_status": "Dr. Carey Cummerata DDS",
                "spent": 76591,
                "click": 668,
                "impression": "Favian Hessel",
                "ctr": 472,
                "cpc": 355,
                "daily_budget": 439632,
                "bid": "7268",
                "bid_amount": 116,
                "adses": [
                    {
                        "id": 37,
                        "ag_id": 4,
                        "status": 0,
                        "ad_name": "Mr. Antonio Lynch",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?97674",
                        "delivery_status": "Enrique Gutmann V",
                        "spent": 123282,
                        "click": 920,
                        "impression": "Miss Berniece Jenkins",
                        "ctr": 290,
                        "cpc": 975
                    },
                    {
                        "id": 55,
                        "ag_id": 4,
                        "status": 1,
                        "ad_name": "Josephine DuBuque",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?79250",
                        "delivery_status": "Prof. Zackary Abbott",
                        "spent": 192508,
                        "click": 542,
                        "impression": "Dave McClure",
                        "ctr": 767,
                        "cpc": 249
                    },
                    {
                        "id": 73,
                        "ag_id": 4,
                        "status": 1,
                        "ad_name": "Barry Rath",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?98752",
                        "delivery_status": "Darryl Jacobs",
                        "spent": 377318,
                        "click": 552,
                        "impression": "Miss Dena Pollich MD",
                        "ctr": 617,
                        "cpc": 238
                    },
                    {
                        "id": 77,
                        "ag_id": 4,
                        "status": 1,
                        "ad_name": "Dedric Stehr",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?50346",
                        "delivery_status": "Marion Gutkowski",
                        "spent": 596030,
                        "click": 506,
                        "impression": "Nelle Hermiston",
                        "ctr": 817,
                        "cpc": 871
                    },
                    {
                        "id": 99,
                        "ag_id": 4,
                        "status": 1,
                        "ad_name": "Donnie Morissette",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?35988",
                        "delivery_status": "Joyce Heathcote",
                        "spent": 433364,
                        "click": 452,
                        "impression": "Mr. Jimmy Quigley",
                        "ctr": 239,
                        "cpc": 173
                    }
                ]
            },
            {
                "id": 23,
                "campaign_id": 4,
                "status": 0,
                "ag_name": "Mr. Harvey Konopelski DVM",
                "delivery_status": "Sunny Schmitt",
                "spent": 72347,
                "click": 196,
                "impression": "Reymundo Heathcote",
                "ctr": 63,
                "cpc": 302,
                "daily_budget": 448737,
                "bid": "5486",
                "bid_amount": 113,
                "adses": [
                    {
                        "id": 60,
                        "ag_id": 23,
                        "status": 0,
                        "ad_name": "Gunner Huels DVM",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?75772",
                        "delivery_status": "Prof. Genoveva Berge I",
                        "spent": 487435,
                        "click": 789,
                        "impression": "Jefferey Jaskolski",
                        "ctr": 388,
                        "cpc": 659
                    },
                    {
                        "id": 64,
                        "ag_id": 23,
                        "status": 1,
                        "ad_name": "Prof. Joe Beer DDS",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?83437",
                        "delivery_status": "Darren Kreiger",
                        "spent": 222204,
                        "click": 258,
                        "impression": "Estell Bosco DVM",
                        "ctr": 752,
                        "cpc": 942
                    },
                    {
                        "id": 81,
                        "ag_id": 23,
                        "status": 0,
                        "ad_name": "Ms. Esperanza Kemmer",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?95066",
                        "delivery_status": "Prof. Norberto Labadie MD",
                        "spent": 705257,
                        "click": 344,
                        "impression": "Enoch Morissette",
                        "ctr": 460,
                        "cpc": 944
                    },
                    {
                        "id": 84,
                        "ag_id": 23,
                        "status": 1,
                        "ad_name": "Mrs. Else Hills",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?70948",
                        "delivery_status": "Dena Larkin",
                        "spent": 744587,
                        "click": 147,
                        "impression": "Darius Franecki V",
                        "ctr": 684,
                        "cpc": 666
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "name": "Chao mung nam moi",
        "status": 1,
        "spent": 33961092060,
        "click": 4952,
        "impression": "Adolphus Daniel Jr.",
        "ctr": 981,
        "cpc": 484,
        "delivery_status": "Tanner Hane IV",
        "kpi": 336,
        "objective": "Niko Lowe",
        "start_schedule": "2018-09-09 17:33:05",
        "end_schedule": "2019-04-02 04:43:29",
        "budget_type": 3,
        "adgroups": [
            {
                "id": 16,
                "campaign_id": 5,
                "status": 1,
                "ag_name": "Janet Runte",
                "delivery_status": "Mrs. Zoey King II",
                "spent": 45092,
                "click": 730,
                "impression": "Verlie Cole",
                "ctr": 378,
                "cpc": 130,
                "daily_budget": 209082,
                "bid": "3076",
                "bid_amount": 858,
                "adses": [
                    {
                        "id": 79,
                        "ag_id": 16,
                        "status": 0,
                        "ad_name": "Gerda Marquardt DVM",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?35323",
                        "delivery_status": "Joany Denesik",
                        "spent": 413347,
                        "click": 639,
                        "impression": "Zetta Schaden",
                        "ctr": 681,
                        "cpc": 708
                    },
                    {
                        "id": 90,
                        "ag_id": 16,
                        "status": 1,
                        "ad_name": "Annabel Terry",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?73885",
                        "delivery_status": "Prof. Nikolas Kuphal DVM",
                        "spent": 341117,
                        "click": 846,
                        "impression": "Deonte Raynor DDS",
                        "ctr": 428,
                        "cpc": 748
                    }
                ]
            },
            {
                "id": 17,
                "campaign_id": 5,
                "status": 1,
                "ag_name": "Breanne Gislason V",
                "delivery_status": "Ryan Anderson DVM",
                "spent": 28979,
                "click": 72,
                "impression": "Myra Herman",
                "ctr": 217,
                "cpc": 58,
                "daily_budget": 277728,
                "bid": "9638",
                "bid_amount": 388,
                "adses": [
                    {
                        "id": 19,
                        "ag_id": 17,
                        "status": 1,
                        "ad_name": "Brain Johnston",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?50570",
                        "delivery_status": "Ruthe Kreiger",
                        "spent": 195574,
                        "click": 845,
                        "impression": "Gwendolyn Jaskolski",
                        "ctr": 100,
                        "cpc": 400
                    },
                    {
                        "id": 32,
                        "ag_id": 17,
                        "status": 0,
                        "ad_name": "Filiberto Feest",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?96530",
                        "delivery_status": "Dr. Quinn Mills IV",
                        "spent": 171925,
                        "click": 123,
                        "impression": "Natalie Haag",
                        "ctr": 297,
                        "cpc": 904
                    },
                    {
                        "id": 52,
                        "ag_id": 17,
                        "status": 1,
                        "ad_name": "Prof. Robb Heller DDS",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?46052",
                        "delivery_status": "Orpha Mills",
                        "spent": 658448,
                        "click": 561,
                        "impression": "Broderick Stracke Sr.",
                        "ctr": 506,
                        "cpc": 703
                    },
                    {
                        "id": 63,
                        "ag_id": 17,
                        "status": 1,
                        "ad_name": "Jules Ziemann",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?91724",
                        "delivery_status": "Mrs. Camille Luettgen",
                        "spent": 140239,
                        "click": 369,
                        "impression": "Wilbert Marvin",
                        "ctr": 582,
                        "cpc": 7
                    },
                    {
                        "id": 66,
                        "ag_id": 17,
                        "status": 0,
                        "ad_name": "Ms. Mertie Hartmann PhD",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?84295",
                        "delivery_status": "Prof. Edward Dickens",
                        "spent": 852659,
                        "click": 744,
                        "impression": "Mr. Devon Reichel II",
                        "ctr": 360,
                        "cpc": 926
                    },
                    {
                        "id": 96,
                        "ag_id": 17,
                        "status": 1,
                        "ad_name": "Ms. Kellie Schaden",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?13252",
                        "delivery_status": "Paige Bailey",
                        "spent": 636324,
                        "click": 444,
                        "impression": "Jeanie Klein",
                        "ctr": 467,
                        "cpc": 823
                    }
                ]
            },
            {
                "id": 22,
                "campaign_id": 5,
                "status": 1,
                "ag_name": "Duane Considine",
                "delivery_status": "Godfrey Mosciski",
                "spent": 26656,
                "click": 151,
                "impression": "Miss Madilyn O'Hara",
                "ctr": 2,
                "cpc": 588,
                "daily_budget": 324402,
                "bid": "4917",
                "bid_amount": 578,
                "adses": [
                    {
                        "id": 24,
                        "ag_id": 22,
                        "status": 1,
                        "ad_name": "Nina Conn",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?34768",
                        "delivery_status": "Mrs. Cassandre Haley Jr.",
                        "spent": 293620,
                        "click": 726,
                        "impression": "Prof. Theo Kutch",
                        "ctr": 130,
                        "cpc": 646
                    },
                    {
                        "id": 25,
                        "ag_id": 22,
                        "status": 1,
                        "ad_name": "Samson Wisoky",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?49474",
                        "delivery_status": "Theresa Spencer",
                        "spent": 647531,
                        "click": 360,
                        "impression": "Mittie Mitchell II",
                        "ctr": 389,
                        "cpc": 851
                    },
                    {
                        "id": 70,
                        "ag_id": 22,
                        "status": 0,
                        "ad_name": "Viva Quigley",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?97323",
                        "delivery_status": "Melisa Fisher",
                        "spent": 310447,
                        "click": 436,
                        "impression": "Madison Cummings",
                        "ctr": 377,
                        "cpc": 73
                    },
                    {
                        "id": 92,
                        "ag_id": 22,
                        "status": 0,
                        "ad_name": "Dr. Alfredo Ryan III",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?45039",
                        "delivery_status": "Diamond Stiedemann",
                        "spent": 732885,
                        "click": 135,
                        "impression": "Jeffrey Kling",
                        "ctr": 311,
                        "cpc": 633
                    },
                    {
                        "id": 93,
                        "ag_id": 22,
                        "status": 0,
                        "ad_name": "Otho Schiller",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?66191",
                        "delivery_status": "Rudolph Simonis",
                        "spent": 281999,
                        "click": 284,
                        "impression": "Ms. Savannah O'Reilly",
                        "ctr": 452,
                        "cpc": 79
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "name": "Chao mung quoc khanh",
        "status": 0,
        "spent": 93725488811,
        "click": 7979,
        "impression": "Krystal Bergnaum PhD",
        "ctr": 113,
        "cpc": 958,
        "delivery_status": "Prof. Alysa Deckow Sr.",
        "kpi": 169,
        "objective": "Henri Pollich",
        "start_schedule": "2018-10-16 20:24:46",
        "end_schedule": "2019-03-05 17:39:35",
        "budget_type": 3,
        "adgroups": [
            {
                "id": 1,
                "campaign_id": 6,
                "status": 0,
                "ag_name": "Bailee Quitzon",
                "delivery_status": "Davon Langosh",
                "spent": 55452,
                "click": 881,
                "impression": "Hans Nitzsche MD",
                "ctr": 752,
                "cpc": 647,
                "daily_budget": 232650,
                "bid": "6387",
                "bid_amount": 890,
                "adses": [
                    {
                        "id": 40,
                        "ag_id": 1,
                        "status": 1,
                        "ad_name": "Axel Stokes",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?91457",
                        "delivery_status": "Quincy Thompson",
                        "spent": 449317,
                        "click": 778,
                        "impression": "Prof. Hilario Sawayn DDS",
                        "ctr": 560,
                        "cpc": 427
                    },
                    {
                        "id": 94,
                        "ag_id": 1,
                        "status": 1,
                        "ad_name": "Winston Labadie",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?60948",
                        "delivery_status": "Wilfred Kuphal",
                        "spent": 278923,
                        "click": 34,
                        "impression": "Brycen Corkery",
                        "ctr": 767,
                        "cpc": 821
                    }
                ]
            },
            {
                "id": 9,
                "campaign_id": 6,
                "status": 1,
                "ag_name": "Miles Cassin II",
                "delivery_status": "Merle Altenwerth Sr.",
                "spent": 95674,
                "click": 138,
                "impression": "Madie Funk",
                "ctr": 567,
                "cpc": 18,
                "daily_budget": 724202,
                "bid": "8630",
                "bid_amount": 764,
                "adses": [
                    {
                        "id": 9,
                        "ag_id": 9,
                        "status": 0,
                        "ad_name": "Kobe Douglas",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?91090",
                        "delivery_status": "Miss Lynn Monahan IV",
                        "spent": 68909,
                        "click": 358,
                        "impression": "Otho Emard",
                        "ctr": 777,
                        "cpc": 234
                    },
                    {
                        "id": 16,
                        "ag_id": 9,
                        "status": 0,
                        "ad_name": "Alexandria Ratke DDS",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?34668",
                        "delivery_status": "Mr. Justen Batz III",
                        "spent": 24060,
                        "click": 145,
                        "impression": "Myrtie Hessel",
                        "ctr": 334,
                        "cpc": 974
                    },
                    {
                        "id": 35,
                        "ag_id": 9,
                        "status": 0,
                        "ad_name": "Jaime Bailey",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?23730",
                        "delivery_status": "Grace Quigley",
                        "spent": 492266,
                        "click": 862,
                        "impression": "Charity Pfeffer",
                        "ctr": 970,
                        "cpc": 289
                    },
                    {
                        "id": 57,
                        "ag_id": 9,
                        "status": 0,
                        "ad_name": "Cleveland Murphy",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?29432",
                        "delivery_status": "Angelica Berge",
                        "spent": 795619,
                        "click": 126,
                        "impression": "Annalise Ankunding",
                        "ctr": 190,
                        "cpc": 652
                    },
                    {
                        "id": 88,
                        "ag_id": 9,
                        "status": 0,
                        "ad_name": "Cordia Howe",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?66046",
                        "delivery_status": "Lamar Adams",
                        "spent": 656709,
                        "click": 337,
                        "impression": "Eloisa Yundt MD",
                        "ctr": 264,
                        "cpc": 727
                    }
                ]
            },
            {
                "id": 15,
                "campaign_id": 6,
                "status": 0,
                "ag_name": "Remington Murazik",
                "delivery_status": "Clara Orn IV",
                "spent": 86875,
                "click": 503,
                "impression": "Flo Lindgren",
                "ctr": 569,
                "cpc": 635,
                "daily_budget": 699095,
                "bid": "7231",
                "bid_amount": 966,
                "adses": [
                    {
                        "id": 2,
                        "ag_id": 15,
                        "status": 0,
                        "ad_name": "Verdie Bashirian",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?37831",
                        "delivery_status": "Eloy Jones",
                        "spent": 440889,
                        "click": 865,
                        "impression": "Harvey Lang MD",
                        "ctr": 107,
                        "cpc": 830
                    },
                    {
                        "id": 6,
                        "ag_id": 15,
                        "status": 0,
                        "ad_name": "Dr. Jovany Cummerata PhD",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?13142",
                        "delivery_status": "Prof. Donavon Conroy",
                        "spent": 507983,
                        "click": 181,
                        "impression": "Ms. Jessika Keeling",
                        "ctr": 214,
                        "cpc": 703
                    },
                    {
                        "id": 11,
                        "ag_id": 15,
                        "status": 0,
                        "ad_name": "Marquise Mertz",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?43902",
                        "delivery_status": "Mrs. Marianne Lowe IV",
                        "spent": 657369,
                        "click": 353,
                        "impression": "Annetta Kirlin",
                        "ctr": 556,
                        "cpc": 802
                    },
                    {
                        "id": 22,
                        "ag_id": 15,
                        "status": 0,
                        "ad_name": "Wilma Koch",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?28518",
                        "delivery_status": "Hiram Cormier",
                        "spent": 116653,
                        "click": 176,
                        "impression": "Marietta Hermiston V",
                        "ctr": 136,
                        "cpc": 493
                    },
                    {
                        "id": 53,
                        "ag_id": 15,
                        "status": 0,
                        "ad_name": "Elvera Dare",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?32513",
                        "delivery_status": "Ms. Vesta Christiansen PhD",
                        "spent": 596152,
                        "click": 231,
                        "impression": "Lambert Brekke",
                        "ctr": 820,
                        "cpc": 380
                    }
                ]
            },
            {
                "id": 18,
                "campaign_id": 6,
                "status": 1,
                "ag_name": "Laurine Lueilwitz III",
                "delivery_status": "Prof. Hal Ratke",
                "spent": 45216,
                "click": 581,
                "impression": "Morton Murazik",
                "ctr": 526,
                "cpc": 285,
                "daily_budget": 294291,
                "bid": "9060",
                "bid_amount": 435,
                "adses": [
                    {
                        "id": 3,
                        "ag_id": 18,
                        "status": 1,
                        "ad_name": "Mr. Rigoberto Greenfelder DVM",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?57211",
                        "delivery_status": "Heather McGlynn",
                        "spent": 264737,
                        "click": 554,
                        "impression": "Mrs. Audra Windler IV",
                        "ctr": 306,
                        "cpc": 108
                    },
                    {
                        "id": 7,
                        "ag_id": 18,
                        "status": 1,
                        "ad_name": "Susanna Leuschke",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?38163",
                        "delivery_status": "Angela Hickle",
                        "spent": 428481,
                        "click": 83,
                        "impression": "Alexys Kuvalis V",
                        "ctr": 351,
                        "cpc": 713
                    },
                    {
                        "id": 20,
                        "ag_id": 18,
                        "status": 1,
                        "ad_name": "Ms. Dovie Marvin",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?60113",
                        "delivery_status": "Schuyler Rogahn",
                        "spent": 907050,
                        "click": 187,
                        "impression": "Okey Jakubowski",
                        "ctr": 24,
                        "cpc": 645
                    }
                ]
            },
            {
                "id": 24,
                "campaign_id": 6,
                "status": 0,
                "ag_name": "Shannon Murphy",
                "delivery_status": "Krystina Osinski IV",
                "spent": 24612,
                "click": 440,
                "impression": "Prof. Andy Wolff",
                "ctr": 233,
                "cpc": 30,
                "daily_budget": 747154,
                "bid": "4834",
                "bid_amount": 863,
                "adses": [
                    {
                        "id": 15,
                        "ag_id": 24,
                        "status": 1,
                        "ad_name": "Buford Feil",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?60918",
                        "delivery_status": "Abelardo Zieme",
                        "spent": 60531,
                        "click": 589,
                        "impression": "Rahsaan Green DVM",
                        "ctr": 344,
                        "cpc": 333
                    },
                    {
                        "id": 47,
                        "ag_id": 24,
                        "status": 0,
                        "ad_name": "Prof. Jared Schroeder Jr.",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?98378",
                        "delivery_status": "Prof. Imogene Kuhic DVM",
                        "spent": 532160,
                        "click": 921,
                        "impression": "Mrs. Rita Johns",
                        "ctr": 417,
                        "cpc": 538
                    },
                    {
                        "id": 91,
                        "ag_id": 24,
                        "status": 0,
                        "ad_name": "Mrs. Justine Borer I",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?99015",
                        "delivery_status": "Dr. Bryon Glover PhD",
                        "spent": 438136,
                        "click": 193,
                        "impression": "Ms. Isabell Gislason IV",
                        "ctr": 780,
                        "cpc": 641
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "name": "Trung thu cho be",
        "status": 1,
        "spent": 87835809260,
        "click": 9880,
        "impression": "Billy Kohler",
        "ctr": 578,
        "cpc": 542,
        "delivery_status": "Prof. Riley Olson",
        "kpi": 882,
        "objective": "Kade Tromp",
        "start_schedule": "2018-10-10 15:41:37",
        "end_schedule": "2019-06-27 09:07:27",
        "budget_type": 4,
        "adgroups": [
            {
                "id": 6,
                "campaign_id": 7,
                "status": 0,
                "ag_name": "Mrs. Madaline Skiles III",
                "delivery_status": "Mrs. Linnea Mertz V",
                "spent": 37327,
                "click": 981,
                "impression": "Nick Rodriguez DVM",
                "ctr": 17,
                "cpc": 605,
                "daily_budget": 251963,
                "bid": "5864",
                "bid_amount": 358,
                "adses": [
                    {
                        "id": 5,
                        "ag_id": 6,
                        "status": 1,
                        "ad_name": "Miss Delphia Heidenreich",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?20273",
                        "delivery_status": "Ressie Kohler",
                        "spent": 571413,
                        "click": 816,
                        "impression": "Larissa Kunze",
                        "ctr": 232,
                        "cpc": 746
                    },
                    {
                        "id": 33,
                        "ag_id": 6,
                        "status": 0,
                        "ad_name": "Merle Batz",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?57465",
                        "delivery_status": "Rod Doyle",
                        "spent": 688241,
                        "click": 694,
                        "impression": "Stephany Hackett",
                        "ctr": 50,
                        "cpc": 37
                    },
                    {
                        "id": 67,
                        "ag_id": 6,
                        "status": 0,
                        "ad_name": "Leora Strosin",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?30507",
                        "delivery_status": "Mr. Trevion Zboncak II",
                        "spent": 270679,
                        "click": 825,
                        "impression": "Ms. Ivah Miller MD",
                        "ctr": 985,
                        "cpc": 31
                    }
                ]
            },
            {
                "id": 7,
                "campaign_id": 7,
                "status": 0,
                "ag_name": "Keira Braun I",
                "delivery_status": "Helen Romaguera",
                "spent": 79593,
                "click": 101,
                "impression": "Alejandrin Sauer",
                "ctr": 401,
                "cpc": 214,
                "daily_budget": 767288,
                "bid": "9585",
                "bid_amount": 110,
                "adses": [
                    {
                        "id": 31,
                        "ag_id": 7,
                        "status": 0,
                        "ad_name": "Renee Mueller",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?76717",
                        "delivery_status": "Courtney Kohler",
                        "spent": 790394,
                        "click": 277,
                        "impression": "Miss Vernie Borer III",
                        "ctr": 309,
                        "cpc": 695
                    },
                    {
                        "id": 34,
                        "ag_id": 7,
                        "status": 1,
                        "ad_name": "Sabrina Olson",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?55676",
                        "delivery_status": "Kendrick Fadel",
                        "spent": 668667,
                        "click": 836,
                        "impression": "Hilbert Mohr",
                        "ctr": 198,
                        "cpc": 787
                    },
                    {
                        "id": 36,
                        "ag_id": 7,
                        "status": 1,
                        "ad_name": "Mr. Moses Howe MD",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?75108",
                        "delivery_status": "Destany Armstrong",
                        "spent": 409874,
                        "click": 385,
                        "impression": "Aaron Jerde MD",
                        "ctr": 355,
                        "cpc": 672
                    },
                    {
                        "id": 89,
                        "ag_id": 7,
                        "status": 1,
                        "ad_name": "Cole Runolfsson",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?80282",
                        "delivery_status": "Prof. Rowan Leuschke DVM",
                        "spent": 548753,
                        "click": 339,
                        "impression": "Dasia Kuhic",
                        "ctr": 987,
                        "cpc": 444
                    }
                ]
            },
            {
                "id": 13,
                "campaign_id": 7,
                "status": 0,
                "ag_name": "Dr. Orrin Abbott",
                "delivery_status": "Dr. Orin Prohaska Sr.",
                "spent": 73802,
                "click": 341,
                "impression": "Ashlee Herman Sr.",
                "ctr": 116,
                "cpc": 625,
                "daily_budget": 585697,
                "bid": "8928",
                "bid_amount": 488,
                "adses": [
                    {
                        "id": 28,
                        "ag_id": 13,
                        "status": 1,
                        "ad_name": "Colleen Corkery Jr.",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?43924",
                        "delivery_status": "Dock Kilback",
                        "spent": 771705,
                        "click": 490,
                        "impression": "Elmo McDermott",
                        "ctr": 977,
                        "cpc": 524
                    },
                    {
                        "id": 39,
                        "ag_id": 13,
                        "status": 0,
                        "ad_name": "Toy Schulist",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?44278",
                        "delivery_status": "Aiden Thompson III",
                        "spent": 647164,
                        "click": 628,
                        "impression": "Dr. Dominic Pollich",
                        "ctr": 531,
                        "cpc": 339
                    }
                ]
            },
            {
                "id": 14,
                "campaign_id": 7,
                "status": 0,
                "ag_name": "Vickie Farrell II",
                "delivery_status": "Delmer Kunde",
                "spent": 45318,
                "click": 293,
                "impression": "Kennith Conn MD",
                "ctr": 515,
                "cpc": 456,
                "daily_budget": 332303,
                "bid": "8835",
                "bid_amount": 239,
                "adses": [
                    {
                        "id": 4,
                        "ag_id": 14,
                        "status": 0,
                        "ad_name": "Dr. Keshawn Jast II",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?12376",
                        "delivery_status": "Eriberto Roberts",
                        "spent": 521808,
                        "click": 349,
                        "impression": "Armand Leannon",
                        "ctr": 192,
                        "cpc": 652
                    },
                    {
                        "id": 10,
                        "ag_id": 14,
                        "status": 0,
                        "ad_name": "Raoul Klocko II",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?68249",
                        "delivery_status": "Mrs. Marianna Dickens",
                        "spent": 66441,
                        "click": 839,
                        "impression": "Jeffrey Kautzer MD",
                        "ctr": 607,
                        "cpc": 974
                    },
                    {
                        "id": 48,
                        "ag_id": 14,
                        "status": 0,
                        "ad_name": "Desiree Okuneva",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?65665",
                        "delivery_status": "Mr. Maurice Trantow DVM",
                        "spent": 521571,
                        "click": 123,
                        "impression": "Jaunita O'Connell",
                        "ctr": 66,
                        "cpc": 542
                    },
                    {
                        "id": 61,
                        "ag_id": 14,
                        "status": 1,
                        "ad_name": "Dr. Terry Gutkowski",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?45463",
                        "delivery_status": "Lauriane Kessler",
                        "spent": 14595,
                        "click": 602,
                        "impression": "Prof. Arvid Berge",
                        "ctr": 816,
                        "cpc": 416
                    },
                    {
                        "id": 65,
                        "ag_id": 14,
                        "status": 0,
                        "ad_name": "Mariela Daugherty DDS",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?18662",
                        "delivery_status": "Bryon Hamill",
                        "spent": 423349,
                        "click": 218,
                        "impression": "Nayeli Hill Sr.",
                        "ctr": 982,
                        "cpc": 324
                    },
                    {
                        "id": 86,
                        "ag_id": 14,
                        "status": 1,
                        "ad_name": "Emiliano Reilly",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?38289",
                        "delivery_status": "Lisette Dach II",
                        "spent": 408343,
                        "click": 762,
                        "impression": "Mr. Sven Bernier",
                        "ctr": 246,
                        "cpc": 406
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "name": "Le tinh nhan tuyet voi",
        "status": 1,
        "spent": 86403709086,
        "click": 1684,
        "impression": "Christ Wisoky",
        "ctr": 160,
        "cpc": 577,
        "delivery_status": "Branson Kiehn",
        "kpi": 536,
        "objective": "Laila Hettinger",
        "start_schedule": "2018-10-22 07:57:35",
        "end_schedule": "2019-02-09 05:41:09",
        "budget_type": 4,
        "adgroups": [
            {
                "id": 12,
                "campaign_id": 8,
                "status": 0,
                "ag_name": "Mr. Deondre Schuster",
                "delivery_status": "Prof. Alexandro Romaguera V",
                "spent": 46124,
                "click": 48,
                "impression": "Joelle Kuhn",
                "ctr": 364,
                "cpc": 979,
                "daily_budget": 265181,
                "bid": "7707",
                "bid_amount": 483,
                "adses": [
                    {
                        "id": 50,
                        "ag_id": 12,
                        "status": 1,
                        "ad_name": "Constantin Wolf",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?56582",
                        "delivery_status": "Michelle Sanford",
                        "spent": 810515,
                        "click": 721,
                        "impression": "Nikki Reichel",
                        "ctr": 869,
                        "cpc": 341
                    },
                    {
                        "id": 74,
                        "ag_id": 12,
                        "status": 0,
                        "ad_name": "Dr. Sigmund Cronin",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?32765",
                        "delivery_status": "Ewald Hegmann DVM",
                        "spent": 220761,
                        "click": 36,
                        "impression": "Judd Leannon",
                        "ctr": 298,
                        "cpc": 525
                    },
                    {
                        "id": 75,
                        "ag_id": 12,
                        "status": 1,
                        "ad_name": "Ines Parker",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?61143",
                        "delivery_status": "Prof. Rylee Konopelski II",
                        "spent": 202662,
                        "click": 643,
                        "impression": "Deven Lehner",
                        "ctr": 292,
                        "cpc": 671
                    }
                ]
            },
            {
                "id": 20,
                "campaign_id": 8,
                "status": 1,
                "ag_name": "Domenica Kreiger",
                "delivery_status": "Prof. Alba Hammes",
                "spent": 39261,
                "click": 753,
                "impression": "Prof. Vladimir Cummings II",
                "ctr": 295,
                "cpc": 520,
                "daily_budget": 265624,
                "bid": "4328",
                "bid_amount": 713,
                "adses": [
                    {
                        "id": 8,
                        "ag_id": 20,
                        "status": 1,
                        "ad_name": "Heather Feil",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?55639",
                        "delivery_status": "Aleen Krajcik",
                        "spent": 357605,
                        "click": 933,
                        "impression": "Barney Kreiger DVM",
                        "ctr": 906,
                        "cpc": 117
                    },
                    {
                        "id": 12,
                        "ag_id": 20,
                        "status": 0,
                        "ad_name": "Antoinette Anderson",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?14022",
                        "delivery_status": "Zora Goodwin",
                        "spent": 865686,
                        "click": 125,
                        "impression": "Jaylin Pacocha",
                        "ctr": 65,
                        "cpc": 536
                    },
                    {
                        "id": 17,
                        "ag_id": 20,
                        "status": 0,
                        "ad_name": "Miss Aubree McKenzie",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?78411",
                        "delivery_status": "Minerva Barton",
                        "spent": 707520,
                        "click": 773,
                        "impression": "Madilyn Miller",
                        "ctr": 514,
                        "cpc": 457
                    },
                    {
                        "id": 29,
                        "ag_id": 20,
                        "status": 1,
                        "ad_name": "Prof. Cyrus Jakubowski",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?26750",
                        "delivery_status": "Allan Sanford",
                        "spent": 84131,
                        "click": 15,
                        "impression": "Jayne Mayer",
                        "ctr": 950,
                        "cpc": 59
                    },
                    {
                        "id": 30,
                        "ag_id": 20,
                        "status": 0,
                        "ad_name": "Danial Gottlieb Jr.",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?83141",
                        "delivery_status": "Buddy Stroman PhD",
                        "spent": 786998,
                        "click": 611,
                        "impression": "Dr. Nikita Cummerata IV",
                        "ctr": 549,
                        "cpc": 887
                    },
                    {
                        "id": 59,
                        "ag_id": 20,
                        "status": 1,
                        "ad_name": "Carlo Pollich",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?92105",
                        "delivery_status": "Ms. Kaylee Stokes",
                        "spent": 33111,
                        "click": 603,
                        "impression": "Lura Denesik I",
                        "ctr": 514,
                        "cpc": 505
                    },
                    {
                        "id": 80,
                        "ag_id": 20,
                        "status": 0,
                        "ad_name": "Maye Schmidt",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?70550",
                        "delivery_status": "Collin Satterfield DVM",
                        "spent": 175922,
                        "click": 169,
                        "impression": "Ms. Albina Hettinger",
                        "ctr": 909,
                        "cpc": 475
                    },
                    {
                        "id": 98,
                        "ag_id": 20,
                        "status": 0,
                        "ad_name": "Jayne Corkery",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?53599",
                        "delivery_status": "Dandre Gleason",
                        "spent": 844609,
                        "click": 375,
                        "impression": "Miss Winnifred Raynor",
                        "ctr": 242,
                        "cpc": 72
                    }
                ]
            }
        ]
    },
    {
        "id": 9,
        "name": "Black friday",
        "status": 1,
        "spent": 92841480918,
        "click": 107,
        "impression": "Jedediah Bartell DVM",
        "ctr": 386,
        "cpc": 539,
        "delivery_status": "Mrs. Hellen Renner II",
        "kpi": 289,
        "objective": "Ms. Golda Schaefer",
        "start_schedule": "2018-09-19 21:02:24",
        "end_schedule": "2019-07-12 15:20:28",
        "budget_type": 3,
        "adgroups": [
            {
                "id": 2,
                "campaign_id": 9,
                "status": 0,
                "ag_name": "Mr. Dimitri McKenzie IV",
                "delivery_status": "Douglas Bogan PhD",
                "spent": 26297,
                "click": 77,
                "impression": "Jayne Ward",
                "ctr": 137,
                "cpc": 181,
                "daily_budget": 52156,
                "bid": "2200",
                "bid_amount": 573,
                "adses": [
                    {
                        "id": 38,
                        "ag_id": 2,
                        "status": 0,
                        "ad_name": "Darron Romaguera DDS",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?98603",
                        "delivery_status": "Jarret Stamm",
                        "spent": 493901,
                        "click": 566,
                        "impression": "Dr. Ardella Kautzer III",
                        "ctr": 132,
                        "cpc": 50
                    },
                    {
                        "id": 44,
                        "ag_id": 2,
                        "status": 1,
                        "ad_name": "Dr. Alysha Balistreri I",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?73514",
                        "delivery_status": "Davonte Beer",
                        "spent": 389957,
                        "click": 853,
                        "impression": "Estella Metz",
                        "ctr": 976,
                        "cpc": 692
                    },
                    {
                        "id": 54,
                        "ag_id": 2,
                        "status": 1,
                        "ad_name": "Sheldon Dietrich",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?82478",
                        "delivery_status": "Dr. Bailey Mayert II",
                        "spent": 388920,
                        "click": 600,
                        "impression": "Meda Gislason",
                        "ctr": 500,
                        "cpc": 190
                    },
                    {
                        "id": 68,
                        "ag_id": 2,
                        "status": 1,
                        "ad_name": "Dewitt Heidenreich",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?35123",
                        "delivery_status": "Sigmund Rice",
                        "spent": 284343,
                        "click": 675,
                        "impression": "Wilber Erdman V",
                        "ctr": 34,
                        "cpc": 523
                    }
                ]
            },
            {
                "id": 10,
                "campaign_id": 9,
                "status": 1,
                "ag_name": "Keely Boyle",
                "delivery_status": "Prof. Lesly Koch",
                "spent": 59017,
                "click": 164,
                "impression": "Brandy Gutkowski DVM",
                "ctr": 434,
                "cpc": 104,
                "daily_budget": 232077,
                "bid": "6059",
                "bid_amount": 543,
                "adses": [
                    {
                        "id": 21,
                        "ag_id": 10,
                        "status": 0,
                        "ad_name": "Hermina Hoeger",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?26114",
                        "delivery_status": "Wiley Reinger",
                        "spent": 553863,
                        "click": 684,
                        "impression": "Mrs. Ashlynn Koch",
                        "ctr": 1000,
                        "cpc": 252
                    },
                    {
                        "id": 27,
                        "ag_id": 10,
                        "status": 0,
                        "ad_name": "Mayra Purdy",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?21546",
                        "delivery_status": "Lionel Brekke",
                        "spent": 250803,
                        "click": 935,
                        "impression": "Mallory Stanton",
                        "ctr": 821,
                        "cpc": 275
                    },
                    {
                        "id": 62,
                        "ag_id": 10,
                        "status": 0,
                        "ad_name": "Dr. Rolando Rosenbaum V",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?78456",
                        "delivery_status": "Everette Maggio",
                        "spent": 872390,
                        "click": 918,
                        "impression": "Nasir Keeling",
                        "ctr": 679,
                        "cpc": 907
                    },
                    {
                        "id": 71,
                        "ag_id": 10,
                        "status": 0,
                        "ad_name": "Glennie Heidenreich",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?85278",
                        "delivery_status": "Prof. Alexandria Fadel IV",
                        "spent": 430565,
                        "click": 879,
                        "impression": "Jammie Zulauf Sr.",
                        "ctr": 597,
                        "cpc": 160
                    },
                    {
                        "id": 72,
                        "ag_id": 10,
                        "status": 1,
                        "ad_name": "Ms. Norma Kiehn Sr.",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?41363",
                        "delivery_status": "Lori Marquardt",
                        "spent": 748854,
                        "click": 421,
                        "impression": "Laurianne Hauck",
                        "ctr": 589,
                        "cpc": 837
                    }
                ]
            },
            {
                "id": 21,
                "campaign_id": 9,
                "status": 0,
                "ag_name": "Zelma Bauch",
                "delivery_status": "Dr. Aric Sipes",
                "spent": 97985,
                "click": 224,
                "impression": "Mr. Werner Shields",
                "ctr": 323,
                "cpc": 361,
                "daily_budget": 732243,
                "bid": "1878",
                "bid_amount": 113,
                "adses": [
                    {
                        "id": 45,
                        "ag_id": 21,
                        "status": 0,
                        "ad_name": "Muhammad Luettgen",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?52233",
                        "delivery_status": "Lulu Bradtke",
                        "spent": 156287,
                        "click": 21,
                        "impression": "Mr. Desmond Schmeler",
                        "ctr": 851,
                        "cpc": 354
                    }
                ]
            }
        ]
    },
    {
        "id": 10,
        "name": "Chien dich so 10",
        "status": 0,
        "spent": 49360933129,
        "click": 8931,
        "impression": "Dr. Albin Krajcik",
        "ctr": 876,
        "cpc": 41,
        "delivery_status": "Sam Simonis Sr.",
        "kpi": 3,
        "objective": "Woodrow Wilkinson",
        "start_schedule": "2018-08-08 21:49:06",
        "end_schedule": "2019-05-29 20:36:36",
        "budget_type": 3,
        "adgroups": [
            {
                "id": 8,
                "campaign_id": 10,
                "status": 1,
                "ag_name": "Mrs. Sibyl Casper",
                "delivery_status": "Solon Renner",
                "spent": 55466,
                "click": 303,
                "impression": "Tyrese Ruecker DVM",
                "ctr": 673,
                "cpc": 553,
                "daily_budget": 271213,
                "bid": "4564",
                "bid_amount": 231,
                "adses": [
                    {
                        "id": 23,
                        "ag_id": 8,
                        "status": 1,
                        "ad_name": "Mr. Vince Konopelski",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?66245",
                        "delivery_status": "Delphine Gibson",
                        "spent": 259440,
                        "click": 435,
                        "impression": "Earnestine Jakubowski",
                        "ctr": 915,
                        "cpc": 480
                    },
                    {
                        "id": 41,
                        "ag_id": 8,
                        "status": 0,
                        "ad_name": "Odell Wolf I",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?37866",
                        "delivery_status": "Mrs. Marielle Medhurst",
                        "spent": 420828,
                        "click": 679,
                        "impression": "Mr. Haskell Satterfield III",
                        "ctr": 202,
                        "cpc": 651
                    },
                    {
                        "id": 42,
                        "ag_id": 8,
                        "status": 1,
                        "ad_name": "Dr. Arthur Sanford MD",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?82539",
                        "delivery_status": "Alec Stracke DVM",
                        "spent": 514792,
                        "click": 981,
                        "impression": "Ms. Emely Glover V",
                        "ctr": 150,
                        "cpc": 732
                    },
                    {
                        "id": 58,
                        "ag_id": 8,
                        "status": 1,
                        "ad_name": "Cary Keebler",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?14283",
                        "delivery_status": "Sofia Mraz",
                        "spent": 813679,
                        "click": 314,
                        "impression": "Bonita Towne",
                        "ctr": 896,
                        "cpc": 365
                    },
                    {
                        "id": 76,
                        "ag_id": 8,
                        "status": 0,
                        "ad_name": "Maurine Olson",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?95232",
                        "delivery_status": "Mrs. Kaylah Douglas III",
                        "spent": 944027,
                        "click": 254,
                        "impression": "Dewayne Franecki",
                        "ctr": 224,
                        "cpc": 197
                    },
                    {
                        "id": 78,
                        "ag_id": 8,
                        "status": 0,
                        "ad_name": "Oliver Balistreri",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?23588",
                        "delivery_status": "Edythe Padberg",
                        "spent": 920980,
                        "click": 120,
                        "impression": "Mr. Martin Leffler IV",
                        "ctr": 956,
                        "cpc": 858
                    },
                    {
                        "id": 83,
                        "ag_id": 8,
                        "status": 0,
                        "ad_name": "Kattie Hill",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?30422",
                        "delivery_status": "Kyra Jakubowski",
                        "spent": 292962,
                        "click": 602,
                        "impression": "Ned Durgan",
                        "ctr": 56,
                        "cpc": 890
                    },
                    {
                        "id": 87,
                        "ag_id": 8,
                        "status": 1,
                        "ad_name": "Jarrett Simonis",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?48510",
                        "delivery_status": "Laura Wintheiser",
                        "spent": 45208,
                        "click": 717,
                        "impression": "Gilbert Berge",
                        "ctr": 184,
                        "cpc": 823
                    }
                ]
            },
            {
                "id": 11,
                "campaign_id": 10,
                "status": 1,
                "ag_name": "Betty Kulas",
                "delivery_status": "Prof. Marielle Kiehn",
                "spent": 28340,
                "click": 493,
                "impression": "Lottie King",
                "ctr": 234,
                "cpc": 279,
                "daily_budget": 232798,
                "bid": "4544",
                "bid_amount": 189,
                "adses": [
                    {
                        "id": 13,
                        "ag_id": 11,
                        "status": 0,
                        "ad_name": "Elroy Sipes Sr.",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?88288",
                        "delivery_status": "Jeffrey Kshlerin",
                        "spent": 775595,
                        "click": 344,
                        "impression": "Teagan Kunze",
                        "ctr": 909,
                        "cpc": 738
                    },
                    {
                        "id": 56,
                        "ag_id": 11,
                        "status": 1,
                        "ad_name": "Jazlyn Romaguera",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?19055",
                        "delivery_status": "Casimir Morar",
                        "spent": 31149,
                        "click": 489,
                        "impression": "Aron Grant",
                        "ctr": 441,
                        "cpc": 180
                    },
                    {
                        "id": 85,
                        "ag_id": 11,
                        "status": 0,
                        "ad_name": "Francisco Bins",
                        "image": "https:\/\/lorempixel.com\/1080\/480\/?59464",
                        "delivery_status": "Mr. Javonte Botsford",
                        "spent": 853846,
                        "click": 89,
                        "impression": "Prof. Kelley Schuppe PhD",
                        "ctr": 311,
                        "cpc": 385
                    }
                ]
            }
        ]
    }
      ]
    }
  }
}
</script>

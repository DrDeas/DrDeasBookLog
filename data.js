// Inside data.js
const rawCsvData = `Number,Title,Author(s),Category,Ownership,Status,Date Completed
1,Begin Again: James Baldwin's America and Its Urgent Lessons for Our Own,"Eddie S. Glaude, Jr.",Biography,Digital,Finished,10/3/20
2,"David and Goliath: Underdogs, Misfits, and the Art of Battling Giants",Malcolm Gladwell,Social Science(s),Physical,Finished,10/8/20
3,Talking to Strangers: What We Should Know about the People We Don't Know,Malcolm Gladwell,Social Science(s),Digital,Finished,10/13/20
4,Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones,James Clear,Self-Development,Physical,Finished,10/24/20
5,When: The Scientific Secrets of Perfect Timing,Dan H. Pink,Self-Development,Physical,Finished,10/28/20
6,Just Mercy: A Story of Justice and Redemption,Bryan Stevenson,Memoir/Autobiography,Physical,Finished,11/6/20
7,We Were Eight Years in Power: An American Tragedy,Ta-Nehisi Coates,Essay(s)/Short Stories,Physical,Finished,11/11/20
8,Breathe: A Letter To My Sons,Imani Perry,Memoir/Autobiography,Digital,Finished,11/14/20
9,Eloquent Rage: A Black Feminist Discovers Her Superpower,Brittney Cooper,Memoir/Autobiography,Library,Finished,11/20/20
10,Teaching to Transgress: Education as the Practice of Freedom,bell hooks,Education,Physical,Finished,11/22/20
11,Blink: The Power of Thinking Without Thinking,Malcolm Gladwell,Social Science(s),Physical,Finished,11/30/20
12,The Souls of Black Folk,W.E.B. DuBois,"Race, Class, and Gender",Physical,Finished,12/3/20
13,Faces at the Bottom of the Well: The Permanence of Racism,Derrick Bell,"Race, Class, and Gender",Physical,Finished,12/6/20
14,Born a Crime: Stories from a South African Childhood,Trevor Noah,Memoir/Autobiography,Digital,Finished,12/12/20
15,"Our Time Is Now: Power, Purpose, and the Fight for a Fair America",Stacey Abrams,Policy and Politics,Physical,Finished,12/14/20
16,Outliers: The Story of Success,Malcolm Gladwell,Social Science(s),Physical,Finished,12/17/20
17,Heavy: An American Memoir,Kiese Laymon,Memoir/Autobiography,Digital,Finished,12/20/20
18,Race Rules: Navigating the Color Line,Michael Eric Dyson,"Race, Class, and Gender",Digital,Finished,12/22/20
19,"Nobody: Casualties of America's War on the Vulnerable, from Ferguson to Flint and Beyond",Marc Lamont Hill,"Race, Class, and Gender",Physical,Finished,12/27/20
20,Caste: The Origins of Our Discontents,Isabel Wilkerson,"Race, Class, and Gender",Library,Finished,12/31/20
21,"April 4, 1968: Martin Luther King, Jr.'s Death and How it Changed America",Michael Eric Dyson,Biography,Physical,Finished,1/3/21
22,The Fire Next Time,James Baldwin,Essay(s)/Short Stories,Physical,Finished,1/7/21
23,The Fire This Time: A New Generation Speaks About Race,Jesmyn Ward (Editor),Essay(s)/Short Stories,Library,Finished,1/9/21
24,The Tipping Point: How Little Things Can Make a Big Difference,Malcolm Gladwell,Social Science(s),Physical,Finished,1/11/21
25,What The Dog Saw: And Other Adventures,Malcolm Gladwell,Social Science(s),Library,Finished,1/13/21
26,"What Truth Sounds Like: Robert F. Kennedy, James Baldwin, and Our Unfinished Conversation About Race in America",Michael Eric Dyson,"Race, Class, and Gender",Library,Finished,1/15/21
27,Hunger: A Memoir of (My) Body,Roxane Gay,Memoir/Autobiography,Library,Finished,1/17/21
28,No Rules Rules: Netflix and the Culture of Reinvention,"Reed Hastings, Erin Meyer",Business,Digital,Finished,1/20/21
29,That Will Never Work: The Birth of Netflix and the Amazing Life of an Idea,Marc Randolph,Business,Library,Finished,1/22/21
30,Long Time Coming: Reckoning with Race in America,Michael Eric Dyson,"Race, Class, and Gender",Library,Finished,1/23/21
31,Tears We Cannot Stop: A Sermon to White America,Michael Eric Dyson,"Race, Class, and Gender",Library,Finished,1/24/21
32,The Nickel Boys,Colson Whitehead,Novel,Library,Finished,1/27/21
33,How to Be an Antiracist,Ibram X. Kendi,"Race, Class, and Gender",Library,Finished,1/30/21
34,Between the World and Me,Ta-Nehisi Coates,Memoir/Autobiography,Physical,Finished,2/1/21
35,A Brief History of Time: From the Big Bang to Black Holes,Stephen Hawking,Science,Library,Finished,2/13/21
36,Go Tell It On the Mountain,James Baldwin,Novel,Library,Finished,2/14/21
37,"We Still Here: Pandemic, Policing, Protest, and Possibility",Marc Lamont Hill,Policy and Politics,Physical,Finished,2/16/21
38,The Trusted Advisor,"David Maister, Charles H. Green, and Robert M. Galford",Business,Physical,Finished,2/21/21
39,Sapiens: A Brief History of Humankind,Yuval Noah Harari,Science,Library,Finished,2/24/21
40,Notes of a Native Son,James Baldwin,Essay(s)/Short Stories,Library,Finished,2/27/21
41,Thick: And Other Essays,Tressie McMillan Cottom,Memoir/Autobiography,Digital,Finished,3/3/21
42,We Want to Do More Than Survive: Abolitionist Teaching and the Pursuit of Educational Freedom,Bettina L. Love,Education,Digital,Finished,3/9/21
43,Invisible Women: Exposing Data Bias in a World Designed for Men,Caroline Criado-Perez,Informational,Digital,Finished,3/15/21
44,Looking for Lorraine: The Radiant and Radical Life of Lorraine Hansberry,Imani Perry,Biography,Digital,Finished,3/22/21
45,"How the Other Half Banks: Exclusion, Exploitation, and the Threat to Democracy",Mehrsa Baradaran,Informational,Digital,Finished,4/3/21
46,Sunny Days: The Children's Television Revolution That Changed America,David Kamp,Informational,Digital,Finished,4/7/21
47,The Path Made Clear: Discovering Your Life's Direction and Purpose,Oprah Winfrey,Self-Development,Library,Finished,4/16/21
48,"Yes We (Still) Can: Politics in the Age of Obama, Twitter, and Trump",Dan Pfeiffer,Policy and Politics,Library,Finished,4/25/21
49,Going to Meet the Man,James Baldwin,Novel,Digital,Finished,4/27/21
50,The Color of Money: Black Banks and the Racial Wealth Gap,Mehrsa Baradaran,"Race, Class, and Gender",Library,Finished,5/8/21
51,The Color of Law: A Forgotten History of How Our Government Segregated America,Richard Rothstein,"Race, Class, and Gender",Library,Finished,5/15/21
52,The Jazz of Physics: The Secret Link Between Music and the Structure of the Universe,Stephon Alexander,Science,Library,Finished,5/18/21
53,The Alchemist,Paulo Coelho,Novel,Library,Finished,5/22/21
54,Overground Railroad: The Green Book and the Roots of Black Travel in America,Candacy A. Taylor,"Race, Class, and Gender",Library,Finished,5/23/21
55,A Short History of Nearly Everything,Bill Bryson,Science,Library,Finished,5/24/21
56,Twitter: A Biography,"Jean Burgess, Nancy K. Baym",Business,Library,Finished,5/26/21
57,Twitter for Good: Change the World One Tweet at a Time,Claire Diaz-Ortiz,Business,Library,Finished,5/27/21
58,Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy,Cathy O'Neil,Informational,Digital,Finished,5/30/21
59,AI Ethics,Mark Coeckelbergh,Technology,Library,Finished,5/31/21
60,The Critique of Practical Reason,Immanuel Kant,Philosophy,Digital,Finished,5/31/21
61,"What Happened to You?: Conversations on Trauma, Resilience, and Healing","Bruce D. Perry, Oprah Winfrey",Self-Development,Library,Finished,6/9/21
62,What I Know for Sure,Oprah Winfrey,Self-Development,Library,Finished,6/12/21
63,You Look Like a Thing and I Love You: How Artificial Intelligence Works and Why It's Making the World a Weirder Place,Janelle Shane,Technology,Physical,Finished,6/13/21
64,On Juneteenth,Annette Gordon-Reed,"Race, Class, and Gender",Digital,Finished,6/19/21
65,Truth: A Brief History of Total Bullsh*t,Tom Phillips,Informational,Physical,Finished,6/24/21
66,"The Disordered Cosmos: A Journey Into Dark Matter, Spacetime, and Dreams Deferred",Chanda Prescod-Weinstein,Science,Digital,Finished,7/5/21
67,Gilead,Marilynne Robinson,Novel,Library,Finished,7/16/21
68,Quantum Entanglement,Jed Brody,Science,Library,Finished,7/17/21
69,Paradox,Margaret Cuonzo,Philosophy,Library,Finished,7/26/21
70,Critical Thinking,Jonathan Haber,Social Science(s),Library,Finished,7/29/21
71,Understanding Beliefs,Nils John Nilsson,Social Science(s),Library,Finished,8/1/21
72,Machine Learning: The New AI,Ethem Alpaydın,Technology,Library,Finished,8/5/21
73,Parable of the Sower,Octavia E. Butler,Novel,Library,Finished,8/11/21
74,Across That Bridge: A Vision for Change and the Future of America,John Lewis,Memoir/Autobiography,Library,Finished,8/17/21
75,The Social Construction of Reality: A Treatise in the Sociology of Knowledge,"Peter L. Berger, Thomas Luckmann",Social Science(s),Physical,Finished,8/31/21
76,We Should All Be Feminists,Chimamanda Ngozi Adichie,"Race, Class, and Gender",Library,Finished,9/1/21
77,Free Will,Mark Balaguer,Philosophy,Library,Finished,9/11/21
78,Post-Truth,Lee C. McIntyre,Philosophy,Library,Finished,9/12/21
79,The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail,Clayton M. Christensen,Business,Library,Finished,9/17/21
80,Parable of the Talents,Octavia E. Butler,Novel,Digital,Finished,9/27/21
81,African and African-American Religions,Victor Anderson,Religion,Digital,Finished,10/6/21
82,"And Then You're Dead: What Really Happens If You Get Swallowed by a Whale, Are Shot from a Cannon, or Go Barreling over Niagara","Cody Cassidy, Paul Doherty",Informational,Digital,Finished,10/10/21
83,"The Simple Path to Wealth: Your Road Map to Financial Independence and a Rich, Free Life",JL Collins,Finance,Digital,Finished,10/14/21
84,Severed: A History of Heads Lost and Heads Found,Frances Larson,Informational,Digital,Finished,10/17/21
85,Letter to My Daughter,Maya Angelou,Memoir/Autobiography,Library,Finished,10/20/21
86,Notes from Underground,Fyodor Dostoevsky,Novel,Library,Finished,10/24/21
87,The Meditations,Marcus Aurelius,Philosophy,Physical,Finished,10/28/21
88,Genesis: The Deep Origin of Societies,Edward O. Wilson,Informational,Library,Finished,11/6/21
89,The Meaning of Human Existence,Edward O. Wilson,Informational,Library,Finished,11/7/21
90,The Origins of Creativity,Edward O. Wilson,Informational,Library,Finished,11/9/21
91,The House on Mango Street,Sandra Cisneros,Novel,Digital,Finished,11/15/21
92,Their Eyes Were Watching God,Zora Neale Hurston,Novel,Digital,Finished,11/20/21
93,Passing,Nella Larsen,Novel,Digital,Finished,11/21/21
94,Annie John,Jamaica Kincaid,Novel,Digital,Finished,11/22/21
95,A Walk in the Wood: Meditations on Mindfulness with a Bear Named Pooh,"Dr. Joseph Parent, Nancy Parent",Self-Development,Digital,Finished,11/23/21
96,Being Peace,Thich Nhat Hanh,Self-Development,Digital,Finished,11/24/21
97,The Autobiography of an Ex-Colored Man,James Weldon Johnson,Novel,Digital,Finished,11/25/21
98,Peace is Every Step,Thich Nhat Hanh,Self-Development,Digital,Finished,11/25/21
99,Nihilism,Nolen Gertz,Philosophy,Library,Finished,11/28/21
100,Call Us What We Carry: Poems,Amanda Gorman,Poetry,Physical,Finished,12/11/21
101,Pandemic!: COVID-19 Shakes the World,Slavoj Žižek,Social Science(s),Library,Finished,1/2/22
102,Pandemic! 2: Chronicles of a Time Lost,Slavoj Žižek,Social Science(s),Library,Finished,1/5/22
103,How to Train Your Mind: Exploring the Productivity Benefits of Meditation,Chris Bailey,Self-Development,Digital,Finished,1/9/22
104,Feminism is for Everybody: Passionate Politics,bell hooks,"Race, Class, and Gender",Library,Finished,2/6/22
105,"The Will to Change: Men, Masculinity, and Love",bell hooks,"Race, Class, and Gender",Digital,Finished,2/21/22
106,Playing in the Dark: Whiteness and the Literary Imagination,Toni Morrison,"Race, Class, and Gender",Digital,Finished,2/28/22
107,Training the Mind and Cultivating Loving-Kindness,Chögyam Trungpa,Self-Development,Digital,Finished,3/5/22
108,The Four Agreements: A Practical Guide to Personal Freedom,don Miguel Ruiz,Self-Development,Digital,Finished,3/13/22
109,"No Mud, No Lotus: The Art of Transforming Suffering",Thich Nhat Hanh,Self-Development,Digital,Finished,3/16/22
110,"The Black Church: This Is Our Story, This Is Our Song","Henry Louis Gates, Jr.","Race, Class, and Gender",Digital,Finished,3/18/22
111,"The Bomber Mafia: A Dream, a Temptation, and the Longest Night of the Second World War",Malcolm Gladwell,Social Science(s),Digital,Finished,3/19/22
112,A New Earth: Awakening to Your Life's Purpose,Eckhart Tolle,Self-Development,Digital,Finished,4/1/22
113,An Indigenous Peoples' History of the United States,Roxanne Dunbar-Ortiz,Social Science(s),Digital,Finished,4/8/22
114,South to America: A Journey Below the Mason-Dixon to Understand the Soul of a Nation,Imani Perry,Social Science(s),Physical,Finished,4/12/22
115,The Wisdom of No Escape: and the Path of Loving-Kindness,Pema Chödrön,Self-Development,Digital,Finished,4/16/22
116,Race After Technology: Abolitionist Tools for the New Jim Code,Ruha Benjamin,"Race, Class, and Gender",Digital,Finished,4/24/22
117,Ikigai: The Japanese Secret to a Long and Happy Life,"Héctor García, Francesc Miralles",Self-Development,Physical,Finished,4/25/22
118,Algorithms of Oppression: How Search Engines Reinforce Racism,Safiya Umoja Noble,"Race, Class, and Gender",Digital,Finished,4/30/22
119,Twilight of Democracy: The Seductive Lure of Authoritarianism,Anne Applebaum,Policy and Politics,Digital,Finished,5/2/22
120,Divided Soul: The Life Of Marvin Gaye,David Ritz,Biography,Digital,Finished,5/4/22
121,Uncivil Agreement: How Politics Became Our Identity,Lilliana Mason,Informational,Library,Finished,5/7/22
122,No Filter: The Inside Story of Instagram,Sarah Frier,Business,Library,Finished,5/12/22
123,The Shame Machine: Who Profits in the New Age of Humiliation,Cathy O'Neil,Informational,Digital,Finished,5/14/22
124,Deep Learning,John D. Kelleher,Technology,Library,Finished,5/15/22
125,Fledgling,Octavia E. Butler,Novel,Digital,Finished,5/23/22
126,I Never Thought of It That Way: How to Have Fearlessly Curious Conversations in Dangerously Divided Times,Mónica Guzmán,Informational,Digital,Finished,6/4/22
127,Radically Human: How New Technology Is Transforming Business and Shaping Our Future,"Paul R. Daugherty, H. James Wilson",Technology,Digital,Finished,6/17/22
128,The 1619 Project: A New Origin Story,"Nikole Hannah-Jones, The New York Times Magazine","Race, Class, and Gender",Physical,Finished,6/21/22
129,"Barracoon: The Story of the Last ""Black Cargo""","Zora Neale Hurston, Deborah G. Plant (Editor)","Race, Class, and Gender",Library,Finished,6/21/22
130,Mules and Men,Zora Neale Hurston,Essay(s)/Short Stories,Library,Finished,6/22/22
131,Tambourines to Glory,Langston Hughes,Novel,Library,Finished,6/23/22
132,"Poems on Various Subjects, Religious and Moral",Phillis Wheatley,Poetry,Library,Finished,6/24/22
133,The Wretched of the Earth,Frantz Fanon,Social Science(s),Physical,Finished,6/28/22
134,The End of White World Supremacy: Four Speeches,Malcolm X,"Race, Class, and Gender",Digital,Finished,6/29/22
135,Where Do We Go from Here: Chaos or Community?,"Martin Luther King, Jr.",Policy and Politics,Digital,Finished,7/5/22
136,Reflections by Rosa Parks: The Quiet Strength and Faith of a Woman Who Changed a Nation,"Rosa Parks, with Gregory J. Reed",Memoir/Autobiography,Library,Finished,7/7/22
137,May We Forever Stand: A History of the Black National Anthem,Imani Perry,"Race, Class, and Gender",Library,Finished,7/11/22
138,Fugitive Pedagogy: Carter G. Woodson and the Art of Black Teaching,Jarvis R. Givens,Education,Library,Finished,7/15/22
139,Romance in Marseille,Claude McKay,Novel,Library,Finished,7/17/22
140,Animal Farm,George Orwell,Novel,Library,Finished,7/19/22
141,The Doors of Perception,Aldous Huxley,Social Science(s),Digital,Finished,7/19/22
142,"I, Robot",Isaac Asimov,Novel,Library,Finished,7/22/22
143,1984,George Orwell,Novel,Digital,Finished,7/27/22
144,"Reel to Real: Race, Class and Sex at the Movies",bell hooks,"Race, Class, and Gender",Library,Finished,7/30/22
145,"The Divided Mind of the Black Church: Theology, Piety, and Public Witness",Raphael G. Warnock,Religion,Digital,Finished,8/1/22
146,Black Theology and Black Power,James H. Cone,Religion,Digital,Finished,8/5/22
147,The Color of Christ: The Son of God and the Saga of Race in America,"Edward J. Blum, Paul Harvey",Religion,Digital,Finished,8/10/22
148,The Myth of Sisyphus and Other Essays,Albert Camus,Essay(s)/Short Stories,Physical,Finished,8/11/22
149,The Stranger,Albert Camus,Novel,Digital,Finished,8/12/22
150,We Are Called to Be a Movement,Rev. Dr. William J. Barber II,Policy and Politics,Physical,Finished,8/13/22
151,The Time Machine,H. G. Wells,Novel,Library,Finished,8/19/22
152,Let's Go Crazy: Prince and the Making of Purple Rain,Alan Light,Biography,Digital,Finished,8/21/22
153,The Rebel,Albert Camus,Essay(s)/Short Stories,Physical,Finished,8/24/22
154,"We Did That?: Human Bloopers, Secret Histories, Medical Mysteries, Strange Superstitions, and Other Curiosities from Our Past",Sophie Stirling,Informational,Library,Finished,8/30/22
155,Black Looks: Race and Representation (2nd ed.),bell hooks,"Race, Class, and Gender",Digital,Finished,9/2/22
156,A Happy Death,Albert Camus,Novel,Library,Finished,9/5/22
157,The Fall,Albert Camus,Novel,Library,Finished,9/6/22
158,Numbers Don't Lie: 71 Stories to Help Us Understand the Modern World,Vaclav Smil,Informational,Digital,Finished,9/7/22
159,The Mind-Body Problem,Jonathan Westphal,Philosophy,Library,Finished,9/8/22
160,"The History of Sexuality, Vol. 1: An Introduction",Michel Foucault,Social Science(s),Physical,Finished,9/9/22
161,Madness and Civilization: A History of Insanity in the Age of Reason,Michel Foucault,Social Science(s),Library,Finished,9/18/22
162,"Freedom Dreams: The Black Radical Imagination (Revised and Expanded, 20th Anniversary Edition)",Robin D.G. Kelley,Social Science(s),Digital,Finished,9/22/22
163,The Loop: How Technology Is Creating a World Without Choices and How to Fight Back,Jacob Ward,Technology,Digital,Finished,9/23/22
164,When Chickenheads Come Home to Roost: A Hip-Hop Feminist Breaks It Down,Joan Morgan,"Race, Class, and Gender",Digital,Finished,9/25/22
165,Hooked: How to Build Habit-Forming Products (Updated Edition),Nir Eyal,Business,Digital,Finished,9/30/22
166,My Vanishing Country: A Memoir,Bakari Sellers,Memoir/Autobiography,Digital,Finished,10/5/22
167,Savage Inequalities: Children in America's Schools,Jonathan Kozol,Education,Digital,Finished,10/14/22
168,She Begat This: 20 Years of The Miseducation of Lauryn Hill,Joan Morgan,Biography,Digital,Finished,10/17/22
169,The Climate Crisis and the Global Green New Deal: The Political Economy of Saving the Planet,"Noam Chomsky, Robert Pollin",Policy and Politics,Library,Finished,10/19/22
170,Man's Search for Meaning,Viktor E. Frankl,Memoir/Autobiography,Digital,Finished,10/21/22
171,Nothing: A Very Short Introduction,Frank Close,Science,Library,Finished,10/23/22
172,Origins of the Universe: The Cosmic Microwave Background and the Search for Quantum Gravity,Keith Cooper,Science,Library,Finished,10/26/22
173,Requiem for the American Dream: The 10 Principles of Concentration of Wealth & Power,Noam Chomsky,Policy and Politics,Library,Finished,11/1/22
174,Rest is Resistance: A Manifesto,Tricia Hersey,Self-Development,Digital,Finished,11/3/22
175,Ideaflow: The Only Business Metric That Matters,"Jeremy Utley, Perry Klebahn",Business,Digital,Finished,11/12/22
176,The Design of Everyday Things (Revised and Expanded Edition),Don Norman,Informational,Digital,Finished,11/26/22
177,What Kind of Creatures Are We?,Noam Chomsky,Philosophy,Digital,Finished,11/27/22
178,The Sun Also Rises,Ernest Hemingway,Novel,Digital,Finished,11/28/22
179,A Clockwork Orange,Anthony Burgess,Novel,Digital,Finished,12/7/22
180,Jean-Michel Basquiat and the Art of Storytelling,"Eleanor Nairne, Hans Werner Holzwarth (Editors)",Biography,Physical,Finished,12/12/22
181,The Matter of Black Lives: Writing from The New Yorker,"Jelani Cobb, David Remnick (Editors)","Race, Class, and Gender",Physical,Finished,1/2/23
182,Machiavelli: The Art of Teaching People What to Fear,Patrick Boucheron,Biography,Digital,Finished,1/7/23
183,Lying,Sam Harris,Social Science(s),Digital,Finished,1/8/23
184,Unbought and Unbossed,Shirley Chisholm,Memoir/Autobiography,Digital,Finished,1/13/23
185,This Is Your Mind on Plants,Michael Pollan,Informational,Library,Finished,1/23/23
186,"How to Change Your Mind: What the New Science of Psychedelics Teaches Us About Consciousness, Dying, Addiction, Depression, and Transcendence",Michael Pollan,Informational,Library,Finished,2/5/23
187,Would You Kill the Fat Man? The Trolley Problem and What Your Answer Tells Us about Right and Wrong,David Edmonds,Philosophy,Library,Finished,2/6/23
188,Chronicling Stankonia: The Rise of the Hip-Hop South,Regina N. Bradley,Social Science(s),Physical,Finished,2/9/23
189,Things Fall Apart,Chinua Achebe,Novel,Physical,Finished,2/18/23
190,Know Your Price: Valuing Black Lives and Property in America's Black Cities,Andre M. Perry,"Race, Class, and Gender",Digital,Finished,2/28/23
191,My Soul Looks Back: A Memoir,Jessica B. Harris,Memoir/Autobiography,Digital,Finished,3/8/23
192,Love from the Vortex & Other Poems,Yolanda Sealey-Ruiz,Poetry,Digital,Finished,3/15/23
193,Hello World: Being Human in the Age of Algorithms,Hannah Fry,Technology,Digital,Finished,3/19/23
194,Inferior: How Science Got Women Wrong—and the New Research That's Rewriting the Story,Angela Saini,"Race, Class, and Gender",Digital,Finished,3/25/23
195,How We Get Free: Black Feminism and the Combahee River Collective,Keeanga-Yamahtta Taylor,"Race, Class, and Gender",Digital,Finished,3/27/23
196,Outlaw Culture: Resisting Representations,bell hooks,"Race, Class, and Gender",Digital,Finished,3/31/23
197,"Black Skin, White Masks",Frantz Fanon,"Race, Class, and Gender",Digital,Finished,4/9/23
198,Above Ground: Poems,Clint Smith,Poetry,Digital,Finished,4/10/23
199,Counting Descent: Poems,Clint Smith,Poetry,Digital,Finished,4/10/23
200,Dopamine Nation: Finding Balance in the Age of Indulgence,Anna Lembke,Informational,Digital,Finished,4/13/23
201,The Consciousness Instinct: Unraveling the Mystery of How the Brain Makes the Mind,Michael S. Gazzaniga,Science,Digital,Finished,4/16/23
202,Collaborative Society,"Dariusz Jemielniak, Aleksandra Przegalińska",Social Science(s),Library,Finished,4/22/23
203,Extraterrestrials,Wade Roush,Science,Library,Finished,4/24/23
204,Neuroplasticity,Moheb Costandi,Science,Library,Finished,4/24/23
205,"Polysecure: Attachment, Trauma and Consensual Nonmonogamy",Jessica Fern,Social Science(s),Digital,Finished,4/30/23
206,The Artist's Way: A Spiritual Path to Higher Creativity (30th Anniversary Edition),Julia Cameron,Self-Development,Physical,Finished,5/5/23
207,Cynicism,Ansgar Allen,Social Science(s),Library,Finished,5/13/23
208,The Creative Act: A Way of Being,Rick Rubin,Self-Development,Physical,Finished,5/17/23
209,"The Lightness of Being: Mass, Ether, and the Unification of Forces",Frank Wilczek,Science,Digital,Finished,5/26/23
210,Together: The Healing Power of Human Connection in a Sometimes Lonely World,Vivek H. Murthy,Informational,Digital,Finished,5/30/23
211,As a Man Thinketh,James Allen,Self-Development,Digital,Finished,6/7/23
212,DEI Deconstructed: Your No-Nonsense Guide to Doing the Work and Doing It Right,Lily Zheng,"Race, Class, and Gender",Physical,Finished,6/13/23
213,How to Write One Song: Loving the Things We Create and How They Love Us Back,Jeff Tweedy,Informational,Digital,Finished,6/14/23
214,Brave New World,Aldous Huxley,Novel,Library,Finished,6/27/23
215,Wild Seed,Octavia E. Butler,Novel,Library,Finished,7/13/23
216,Mind of My Mind,Octavia E. Butler,Novel,Physical,Finished,7/16/23
217,Clay's Ark,Octavia E. Butler,Novel,Digital,Finished,7/21/23
218,Patternmaster,Octavia E. Butler,Novel,Digital,Finished,7/26/23
219,Uncut Funk: A Contemplative Dialogue,"bell hooks, Stuart Hall","Race, Class, and Gender",Library,Finished,7/30/23
220,Even the Stars Look Lonesome,Maya Angelou,Essay(s)/Short Stories,Library,Finished,8/1/23
221,The Legend of the Black Mecca: Politics and Class in the Making of Modern Atlanta,Maurice J. Hobson,Policy and Politics,Library,Finished,8/11/23
222,The Power of Awareness,Neville Goddard,Self-Development,Library,Finished,8/12/23
223,Belonging: A Culture of Place,bell hooks,Essay(s)/Short Stories,Library,Finished,8/18/23
224,Let It Bang: A Young Black Man's Reluctant Odyssey into Guns,RJ Young,Memoir/Autobiography,Digital,Finished,8/27/23
225,We Will Shoot Back: Armed Resistance in the Mississippi Freedom Movement,Akinyele Omowale Umoja,"Race, Class, and Gender",Library,Finished,9/3/23
226,Creative Quest,Ahmir Khalib Thompson (Questlove),Self-Development,Library,Finished,9/5/23
227,Music Is History,Ahmir Khalib Thompson (Questlove),Social Science(s),Library,Finished,9/13/23
228,Punished for Dreaming: How School Reform Harms Black Children and How We Heal,Bettina L. Love,Education,Digital,Finished,9/18/23
229,The Meaning of It All: Thoughts of a Citizen Scientist,Richard P. Feynman,Essay(s)/Short Stories,Digital,Finished,9/21/23
230,"Psychedelics For Everyone: A Beginner's Guide to These Powerful Medicines for Anxiety, Depression, Addiction, PTSD, and Expanding Consciousness",Matt Zemon (Editor),Informational,Physical,Finished,9/25/23
231,Unbound: My Story of Liberation and the Birth of the Me Too Movement,Tarana Burke,Memoir/Autobiography,Digital,Finished,9/30/23
232,One More Thing: Stories and Other Stories,B. J. Novak,Essay(s)/Short Stories,Library,Finished,10/7/23
233,Tears and Laughter,Kahlil Gibran,Essay(s)/Short Stories,Digital,Finished,10/10/23
234,The Accidental Universe: The World You Thought You Knew,Alan Lightman,Science,Digital,Finished,10/14/23
235,Except for Palestine: The Limits of Progressive Politics,"Marc Lamont Hill, Mitchell Plitnick",Policy and Politics,Digital,Finished,10/15/23
236,On Palestine,"Noam Chomsky, Ilan Pappé",Policy and Politics,Library,Finished,10/16/23
237,The Weary Blues,Langston Hughes,Poetry,Library,Finished,10/29/23
238,The Devil You Know: A Black Power Manifesto,Charles M. Blow,Policy and Politics,Library,Finished,11/1/23
239,The Jewish State,Theodor Herzl,Policy and Politics,Library,Finished,11/4/23
240,Israel: A Simple Guide to the Most Misunderstood Country on Earth,Noa Tishby,Policy and Politics,Digital,Finished,11/11/23
241,Unmasking AI: My Mission to Protect What Is Human in a World of Machines,Joy Buolamwini,Technology,Digital,Finished,11/17/23
242,Nine Perfect Strangers,Liane Moriarty,Novel,Digital,Finished,11/27/23
243,The Untethered Soul: The Journey Beyond Yourself,Michael A. Singer,Self-Development,Digital,Finished,12/1/23
244,Flatland: A Romance of Many Dimensions,Edwin A. Abbott,Novel,Library,Finished,12/4/23
245,Gentleman of Jazz: A Life in Music,"Ramsey Lewis, Aaron Cohen",Memoir/Autobiography,Digital,Finished,12/7/23
246,Trust the Plan: The Rise of QAnon and the Conspiracy That Unhinged America,Will Sommer,Policy and Politics,Library,Finished,12/12/23
247,From Here to Equality: Reparations for Black Americans in the Twenty-First Century,"William A. Darity Jr., A. Kirsten Mullen","Race, Class, and Gender",Library,Finished,12/18/23
248,A Dangerously High Threshold for Pain,Imani Perry,Memoir/Autobiography,Digital,Finished,12/19/23
249,12 Notes: On Life and Creativity,Quincy Jones,Self-Development,Digital,Finished,12/20/23
250,The New Brownies' Book: A Love Letter to Black Families,"Karida L. Brown, Charly Palmer",Essay(s)/Short Stories,Physical,Finished,12/21/24
251,Happiness,Thich Nhat Hanh,Self-Development,Digital,Finished,1/4/24
252,Reconciliation: Healing the Inner Child,Thich Nhat Hanh,Self-Development,Digital,Finished,1/9/24
253,"Story: Substance, Structure, Style and the Principles of Screenwriting",Robert McKee,Informational,Library,Finished,1/14/24
254,Doppelganger: A Trip into the Mirror World,Naomi Klein,Informational,Library,Finished,1/18/24
255,To Sell Is Human: The Surprising Truth about Moving Others,Dan H. Pink,Informational,Library,Finished,1/24/24
256,Brief Interviews with Hideous Men,David Foster Wallace,Essay(s)/Short Stories,Library,Finished,1/25/24
257,On the Shortness of Life,Seneca,Philosophy,Library,Finished,1/26/24
258,How to Die: An Ancient Guide to the End of Life,Seneca,Philosophy,Digital,Finished,1/27/24
259,How to Be Free: An Ancient Guide to the Stoic Life,Epictetus,Philosophy,Digital,Finished,1/28/24
260,On Truth,Harry G. Frankfurt,Philosophy,Library,Finished,1/29/24
261,Symposium,Plato,Philosophy,Library,Finished,1/30/24
262,Utopia,Sir Thomas More,Philosophy,Digital,Finished,2/6/24
263,The Emperor of All Maladies: A Biography of Cancer,Siddhartha Mukherjee,Informational,Digital,Finished,2/23/24
264,Illness as Metaphor,Susan Sontag,Informational,Library,Finished,2/24/24
265,AIDS and its Metaphors,Susan Sontag,Informational,Library,Finished,2/25/24
266,On the Social Contract,Jean-Jacques Rousseau,Philosophy,Digital,Finished,3/1/24
267,"Feeding the Soul (Because It's My Business): Finding Our Way to Joy, Love, and Freedom",Tabitha Brown,Memoir/Autobiography,Library,Finished,3/13/24
268,Embrace You: Your Guide to Transforming Weight Loss Misconceptions Into Lifelong Wellness,Sylvia Gonsahn-Bollie,Self-Development,Physical,Finished,3/14/24
269,The Prince,Niccolò Machiavelli,Policy and Politics,Digital,Finished,3/15/24
270,Why We Sleep: Unlocking the Power of Sleep and Dreams,Matthew Walker,Informational,Library,Finished,3/23/24
271,Scenes from My Life: A Memoir,Michael K. Williams,Memoir/Autobiography,Library,Finished,3/28/24
272,How to Be a Stoic: Using Ancient Philosophy to Live a Modern Life,Massimo Pigliucci,Philosophy,Library,Finished,4/9/24
273,The Immortality Key: The Secret History of the Religion with No Name,Brian C. Muraresku,Informational,Physical,Finished,4/16/24
274,"Letters to Solovine, 1906–1955",Albert Einstein,Essay(s)/Short Stories,Library,Finished,4/24/24
275,Relativity: The Special and General Theory,Albert Einstein,Science,Digital,Finished,4/30/24
276,All About Love: New Visions,bell hooks,"Race, Class, and Gender",Physical,Finished,5/8/24
277,The Different Drum: Community Making and Peace,M. Scott Peck,Self-Development,Library,Finished,5/15/24
278,"The Art of Mindful Living: How to Bring Love, Compassion, and Inner Peace into Your Daily Life",Thich Nhat Hanh,Self-Development,Library,Finished,5/18/24
279,Silence: The Power of Quiet in a World Full of Noise,Thich Nhat Hanh,Self-Development,Library,Finished,5/22/24
280,"The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma",Bessel van der Kolk,Self-Development,Library,Finished,6/30/24
281,The Heaven & Earth Grocery Store,James McBride,Novel,Digital,Finished,7/11/24
282,Hidden Potential: The Science of Achieving Greater Things,Adam Grant,Informational,Library,Finished,7/19/24
283,Mary Poppins,P.L. Travers,Novel,Digital,Finished,7/21/24
284,Planet of the Apes,Pierre Boulle,Novel,Digital,Finished,7/24/24
285,My Inventions: The Autobiography of Nikola Tesla,Nikola Tesla,Memoir/Autobiography,Digital,Finished,7/25/24
286,White Evangelical Racism: The Politics of Morality in America,Anthea Butler,"Race, Class, and Gender",Library,Finished,7/28/24
287,Soul Boom: Why We Need a Spiritual Revolution,Rainn Wilson,Self-Development,Library,Finished,8/2/24
288,"Mary Magdalene Revealed: The First Apostle, Her Feminist Gospel & the Christianity We Haven't Tried Yet",Meggan Watterson,Religion,Library,Finished,8/5/24
289,"Cassandra Speaks: When Women Are the Storytellers, the Human Story Changes",Elizabeth Lesser,"Race, Class, and Gender",Library,Finished,8/9/24
290,Truly Seeing,Thich Nhat Hanh,Self-Development,Library,Finished,8/11/24
291,Narrow Road to the Interior,Matsuo Bashō,Essay(s)/Short Stories,Library,Finished,8/18/24
292,"Hōjōki: A Buddhist Reflection on Solitude, Imperfection and Transcendence",Kamo no Chomei,Poetry,Library,Finished,8/23/24
293,"Creative Acts for Curious People: How to Think, Create, and Lead in Unconventional Ways",Sarah Stein Greenberg,Informational,Digital,Finished,9/22/24
294,Elastic: Flexible Thinking in a Time of Change,Leonard Mlodinow,Informational,Library,Finished,10/4/24
295,The Message,Ta-Nehisi Coates,Essay(s)/Short Stories,Physical,Finished,10/8/24
296,Homey Don't Play That!: The Story of In Living Color and the Black Comedy Revolution,David Peisner,Informational,Library,Finished,10/13/24
297,A Curious History of Sex,Kate Lister,Informational,Library,Finished,10/14/24
298,Candide,Voltaire,Philosophy,Library,Finished,10/17/24
299,A Discourse Upon the Origin and the Foundation of the Inequality Among Mankind,Jean-Jacques Rousseau,Philosophy,Library,Finished,10/18/24
300,Klara and the Sun,Kazuo Ishiguro,Novel,Library,Finished,10/22/24
301,A Matter of Death and Life,"Irvin D. Yalom, Marilyn Yalom",Memoir/Autobiography,Library,Finished,10/28/24
302,Said I Wasn't Gonna Tell Nobody: The Making of a Black Theologian,James H. Cone,Memoir/Autobiography,Library,Finished,11/6/24
303,Memento Mori: The Art of Contemplating Death to Live a Better Life,Joanna Ebenstein,Self-Development,Digital,Finished,11/13/24
304,The Gentle Art of Swedish Death Cleaning: How to Free Yourself and Your Family from a Lifetime of Clutter,Margareta Magnusson,Self-Development,Digital,Finished,11/16/24
305,"This Here Flesh: Spirituality, Liberation, and the Stories That Make Us",Cole Arthur Riley,Essay(s)/Short Stories,Physical,Finished,11/26/24
306,The Upcycled Self: A Memoir on the Art of Becoming Who We Are,Tariq 'Black Thought' Trotter,Memoir/Autobiography,Digital,Finished,11/29/24
307,The Nightingale: A Novel,Kristin Hannah,Novel,Library,Finished,12/8/24
308,Love Poems,Nikki Giovanni,Poetry,Library,Finished,12/10/24
309,A Good Cry: What We Learn From Tears and Laughter,Nikki Giovanni,Poetry,Library,Finished,12/11/24
310,We Will Rest! The Art of Escape,Tricia Hersey,Self-Development,Digital,Finished,12/12/24
311,Nexus: A Brief History of Information Networks from the Stone Age to AI,Yuval Noah Harari,Informational,Library,Finished,12/29/24
312,Who Gets What--And Why: The New Economics of Matchmaking and Market Design,Alvin E. Roth,Informational,Digital,Finished,1/27/25
313,"Revenge of the Tipping Point: Overstories, Superspreaders, and the Rise of Social Engineering",Malcolm Gladwell,Social Science(s),Digital,Finished,2/8/25
314,Black in Blues: How a Color Tells the Story of My People,Imani Perry,Social Science(s),Physical,Finished,2/21/25
315,Black Power Salute: How a Photograph Captured a Political Protest,Danielle Smith-Llera,Informational,Digital,Finished,2/28/25
316,"Frankenstein; or, The Modern Prometheus",Mary Wollstonecraft Shelley,Novel,Library,Finished,3/5/25
317,The Giver,Lois Lowry,Novel,Library,Finished,3/7/25
318,The Art Of War,Sun Tzu,Informational,Library,Finished,3/8/25
319,Food Therapy for Cancer: A Guide to Nutritional Healing During Cancer Treatment,Ashley Fitzgerald,Self-Development,Library,Finished,3/9/25
320,The Seven Storey Mountain,Thomas Merton,Memoir/Autobiography,Library,Finished,3/10/25
321,Alice's Adventures in Wonderland,Lewis Carroll,Novel,Digital,Finished,3/11/25
322,The Psychedelic Experience: A Manual Based on the Tibetan Book of the Dead,"Timothy Leary, Ralph Metzner, Richard Alpert",Informational,Library,Finished,3/14/25
323,The Ark Before Noah: Decoding the Story of the Flood,Irving Finkel,Religion,Digital,Finished,3/25/23
324,"Zero to One: Notes on Startups, Or How to Build the Future","Peter Thiel, Blake Masters",Business,Digital,Finished,3/28/25
325,The Gospel of Wealth,Andrew Carnegie,Essay(s)/Short Stories,Library,Finished,4/17/25
326,Matilda,Roald Dahl,Novel,Library,Finished,4/19/25
327,The Swedish Art of Aging Exuberantly: Life Wisdom from Someone Who Will (Probably) Die Before You,Margareta Magnusson,Self-Development,Library,Finished,4/20/25
328,The Color of Compromise: The Truth About the American Church's Complicity in Racism,Jemar Tisby,"Race, Class, and Gender",Digital,Finished,4/27/25
329,"It's Not You, It's Capitalism: Why It's Time to Break Up and How to Move On",Malaika Jabali,Policy and Politics,Digital,Finished,4/29/25
330,From Generosity to Justice: A New Gospel of Wealth,Darren Walker,Essay(s)/Short Stories,Digital,Finished,5/1/25
331,Lord of the Flies,William Golding,Novel,Library,Finished,5/17/25
332,Charlotte's Web,"E. B. White, Garth Williams",Novel,Library,Finished,5/21/25
333,Closing the Equity Gap: Creating Wealth and Fostering Justice in Startup Investing,"Freada Kapor Klein, Mitch Kapor",Business,Digital,Finished,5/29/25
334,The Battle for the Black Mind,Karida L. Brown,Education,Physical,Finished,6/9/25
335,"When the Clock Broke: Con Men, Conspiracists, and How America Cracked Up in the Early 1990s",John Ganz,Policy and Politics,Library,Finished,6/26/25
336,Good Company,Arthur M. Blank, Business,Library,Finished,7/9/25
337,"Careless People: A Cautionary Tale of Power, Greed, and Lost Idealism",Sarah Wynn-Williams,Memoir/Autobiography,Digital,Finished,7/28/25
338,The Old Man and the Sea,Ernest Hemingway,Novel,Library,Finished,7/29/25
339,"Isn't Her Grace Amazing!: The Women Who Changed Gospel Music",Cheryl Willis,Informational,Library,In Progress
340,A Raisin in the Sun,Lorraine Hansberry,Stage Play,Physical,Next,`;

        // CSV data for book cover URLs
        const book_cover_urls_csv_data = `book_number,cover_url
1,https://books.google.com/books/content?id=F9uXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
2,https://books.google.com/books/content?id=dhbsoQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
3,https://play.google.com/books/publisher/content/images/frontcover/VnuGDwAAQBAJ?fife=w480-h690
4,https://books.google.com/books/content?id=fFCjDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
5,https://books.google.com/books/content?id=L086swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
6,https://books.google.com/books/content?id=egdxAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
7,https://books.google.com/books/content?id=Zx1xDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
8,https://books.google.com/books/content?id=wDyBDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
9,https://books.google.com/books/content?id=XNcuDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
10,https://books.google.com/books/content?id=fhIiAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
11,https://books.google.com/books/content?id=0YY0AQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
12,https://books.google.com/books/content?id=xiJptgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
13,https://books.google.com/books/content?id=mqxyDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
14,https://books.google.com/books/content?id=GODUCwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
15,https://prodimage.images-bn.com/pimages/9781250798466_p0_v5_s1200x630.jpg
16,https://books.google.com/books/content?id=ialrgIT41OAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
17,https://books.google.com/books/content?id=I7MyEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
18,https://books.google.com/books/content?id=SMx1AAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
19,https://books.google.com/books/publisher/content?id=OWa9DgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
20,https://books.google.com/books/content?id=OT-dEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
21,https://books.google.com/books/content?id=C6te0-BLyy0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
22,https://books.google.com/books/content?id=MhggUK3VxakC&printsec=frontcover&img=1&zoom=1&source=gbs_api
23,https://books.google.com/books/content?id=hLxyCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
24,https://books.google.com/books/content?id=GqepQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
25,https://books.google.com/books/content?id=Dlx748V3ci8C&printsec=frontcover&img=1&zoom=1&source=gbs_api
26,https://books.google.com/books/content?id=ZOw7DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
27,https://books.google.com/books/content?id=c-slCwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
28,https://books.google.com/books/content?id=1u6_DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
29,https://books.google.com/books/content?id=m4aSDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
30,https://books.google.com/books/content?id=zjf4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
31,https://books.google.com/books/content?id=KHDZDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
32,https://books.google.com/books/content?id=V9lLvgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
33,https://books.google.co.ls/books/publisher/content?id=4uSNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
34,https://books.google.com/books/publisher/content?id=kE9KEQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
35,https://books.google.com/books/content?id=A9nWaIpeXhkC&printsec=frontcover&img=1&zoom=1&source=gbs_api
36,https://books.google.com/books/content?id=wvqVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
37,https://play.google.com/books/publisher/content/images/frontcover/nHf8DwAAQBAJ?fife=w480-h690
38,https://books.google.com/books/content?id=Jk5CTBob9r8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
39,https://books.google.com/books/content?id=MosvEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
40,https://books.google.com/books/content?id=1kch0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
41,https://books.google.com/books/content?id=teyADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
42,https://books.google.com/books/content?id=DtuEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
43,https://books.google.com/books/content?id=GdmEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
44,https://books.google.com/books/content?id=a1NqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
45,https://books.google.com/books/content?id=0yioCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
46,https://books.google.com/books/content?id=CYIqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
47,https://books.google.com/books/content?id=8h90DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
48,https://books.google.com/books/content?id=F8hdDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
49,https://books.google.com/books/content?id=Gc1WAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
50,https://books.google.com/books/content?id=Wk2sugEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
51,https://books.google.com/books/content?id=QYeQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
52,https://books.google.com/books/content?id=wmkdDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
53,https://books.google.com/books/content?id=wjB-wwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
54,https://books.google.com/books/content?id=nkSJDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
55,https://books.google.com/books/content?id=GbWp8QFX1K0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
56,https://books.google.com/books/content?id=RRq5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
57,https://books.google.com/books/content?id=hSrQUODfziQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
58,https://books.google.com/books/publisher/content?id=cbwvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
59,https://books.google.com/books/content?id=Gs_XDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
60,https://books.google.com/books/content?id=xe26HJYY6UMC&printsec=frontcover&img=1&zoom=1&source=gbs_api
61,https://books.google.com/books/content?id=_BreDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
62,https://books.google.com/books/content?id=il_nAwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
63,https://books.google.com/books/content?id=jIOLDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
64,https://play.google.com/books/publisher/content/images/frontcover/FwwDEAAAQBAJ?fife=w480-h690
65,https://books.google.com/books/publisher/content?id=tKe-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
66,https://books.google.com/books/content?id=e4rvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
67,https://books.google.com/books/content?id=6S1ehUwm2qAC&printsec=frontcover&img=1&zoom=1&source=gbs_api
68,https://books.google.com/books/publisher/content?id=gt2MEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
69,https://books.google.com/books/content?id=SQ6ixwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
70,https://books.google.com/books/content?id=GM_XDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
71,https://books.google.com/books/content?id=Z_PvAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
72,https://books.google.com/books/content?id=Eyk5EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
73,https://books.google.com/books/content?id=2ue1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
74,https://books.google.com/books/content?id=v_hiAQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
75,https://books.google.com/books/content?id=NqEhEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
76,https://books.google.com/books/content?id=2W6KDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
77,https://books.google.com/books/content?id=8OXUAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
78,https://books.google.com/books/content?id=9e1LDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
79,https://books.google.com/books/content?id=K6FrJTWeUssC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
80,https://books.google.com/books/content?id=3Oe1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
81,https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348270407i/1957790.jpg
82,https://books.google.com/books/content?id=bAxDDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
83,https://books.google.com/books/content?id=Kf6YzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
84,https://books.google.com/books/content?id=2FW5BAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
85,https://books.google.com/books/content?id=MsgnEIymjsYC&printsec=frontcover&img=1&zoom=1&source=gbs_api
86,https://books.google.com/books/content?id=wrQ7PgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
87,https://books.google.com/books/content?id=VVsmU-4YwFsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
88,https://books.google.com/books/content?id=jrBgDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
89,https://books.google.com/books/content?id=d4aQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
90,https://books.google.com/books/content?id=p4eQEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
91,https://books.google.com/books/content?id=HWU9PgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
92,https://books.google.com/books/content?id=mCDatgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
93,https://books.google.com/books/content?id=Isw5EQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
94,https://books.google.com/books/content?id=L_PqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
95,https://books.google.com/books/content?id=vudHDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
96,https://books.google.com/books/content?id=-_eivi7ueekC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
97,https://books.google.com/books/content?id=EXaqDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
98,https://books.google.com/books/content?id=J7m8p1ngZKwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
99,https://books.google.com/books/content?id=aU6qDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
100,https://books.google.com/books/content?id=zxcaEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
101,https://books.google.com/books/content?id=gjXnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
102,https://books.google.com/books/publisher/content?id=DccWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
103,https://i1.sndcdn.com/artworks-rg0ZKTTWjJUUOI38-4GW3TQ-t500x500.jpg
104,https://books.google.com/books/content?id=0au7QbAJH0gC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
105,https://books.google.com/books/content?id=G28LTQltyVAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
106,https://books.google.com/books/content?id=qK6OEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
107,https://books.google.com/books/content?id=D703ICbu5O4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
108,https://books.google.com/books/content?id=t54LEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
109,https://books.google.com/books/content?id=mEobBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
110,https://books.google.com/books/content?id=p2AhEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
111,https://books.google.com/books/content?id=_gQXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
112,https://books.google.com/books/content?id=MKVPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
113,https://books.google.com/books/content?id=USl2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
114,https://books.google.com/books/content?id=nVoszwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
115,https://books.google.com/books/content?id=a6sRdYLlmqIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
116,https://books.google.com/books/content?id=nPy9uwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
117,https://books.google.com/books/content?id=CbouDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
118,https://books.google.com/books/content?id=-ThDDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
119,https://books.google.com/books/content?id=qkm5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
120,https://books.google.com/books/content?id=LDDxPD2pejMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
121,https://books.google.com/books/publisher/content?id=R29RDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
122,https://books.google.com/books/content?id=eDFAEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
123,https://books.google.com/books/content?id=jexHEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
124,https://books.google.com/books/publisher/content?id=b06qDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
125,https://books.google.com/books/content?id=OiJI19ot4BsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
126,https://books.google.com/books/content?id=vGY7EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
127,https://books.google.com/books/content?id=4bAsEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
128,https://play.google.com/books/publisher/content/images/frontcover/B4MhEAAAQBAJ?fife=w480-h690
129,https://books.google.com/books/content?id=UccvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
130,https://books.google.com/books/content?id=tz62QRx_gE0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
131,https://books.google.com/books/content?id=6JkRTnXgS7oC&printsec=frontcover&img=1&zoom=1&source=gbs_api
132,https://books.google.com/books/content?id=30I0rLLLnkcC&printsec=frontcover&img=1&zoom=1&source=gbs_api
133,https://books.google.com/books/content?id=-XGKFJq4eccC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
134,https://books.google.com/books/content?id=4_FwDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
135,https://books.google.com/books/content?id=ka4TcURYXy4C&printsec=frontcover&img=1&zoom=5&source=gbs_api
136,https://books.google.com/books/content?id=BVJMzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
137,https://books.google.com/books/content?id=aDJKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
138,https://books.google.com/books/content?id=vAIhEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
139,https://books.google.com/books/content?id=axqxxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
140,https://books.google.com/books/content?id=6sDh0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
141,https://books.google.com/books/content?id=Nu8XS9J61vgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
142,https://books.google.com/books/content?id=QmoGtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
143,https://books.google.com/books/content?id=dFgbnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
144,https://books.google.com/books/content?id=hRtGzesft_AC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
145,https://books.google.com/books/content?id=i9baDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
146,https://books.google.com/books/content?id=g_WFDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
147,https://books.google.com/books/content?id=IsUCN29Qel0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
148,https://books.google.com/books/content?id=9kQSjiUX1RIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
149,https://books.google.com/books/content?id=CAPYAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
150,https://books.google.com/books/publisher/content?id=ECC4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
151,https://books.google.com/books/content?id=caJ2EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
152,https://books.google.com/books/content?id=s_-hCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
153,https://books.google.com/books/content?id=t_3yQrhdxwUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
154,https://books.google.com/books/content?id=5xZ9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
155,https://books.google.com/books/content?id=4SrWoAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
156,https://books.google.com/books/content?id=bSP87sRcAbEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
157,https://books.google.com/books/publisher/content?id=UafoAQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
158,https://books.google.com/books/publisher/content?id=nLKMEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
159,https://books.google.com/books/content?id=EY0nDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
160,https://books.google.com/books/content?id=v8cGvgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
161,https://books.google.com/books/content?id=Gs5PRR9-8BcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
162,https://books.google.com/books/content?id=1nRsEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
163,https://books.google.com/books/content?id=xn0sEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
164,https://books.google.com/books/content?id=1NxYNMHzmS4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
165,https://play.google.com/books/publisher/content/images/frontcover/dsz5AwAAQBAJ?fife=w480-h690
166,https://books.google.com/books/content?id=8T0JEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
167,https://books.google.com/books/content?id=9imEyTk7Wa0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
168,https://books.google.com/books/publisher/content?id=TXpEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
169,https://books.google.com/books/content?id=H3D3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
170,https://books.google.com/books/content?id=F-Q_xGjWBi8C&printsec=frontcover&img=1&zoom=1&source=gbs_api
171,https://books.google.com/books/content?id=c0MVDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
172,https://books.google.com/books/content?id=NMLvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
173,https://books.google.com/books/content?id=i8TqDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
174,https://books.google.com/books/content?id=6_ZeEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
175,https://books.google.com/books/content?id=TOdaEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
176,https://books.google.com/books/content?id=qBfRDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
177,https://books.google.com/books/content?id=1ezlCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
178,https://books.google.com/books/content?id=zmJWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
179,https://books.google.com/books/content?id=xdxFg5dmdcAC&printsec=frontcover&img=1&zoom=1&source=gbs_api
180,https://books.google.com/books/content?id=Nc9QMQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
181,https://books.google.com/books/content?id=HloTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
182,https://books.google.com/books/content?id=fCTKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
183,https://books.google.com/books/content?id=aVz_BgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
184,https://books.google.com/books/content?id=wm3ezgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
185,https://play.google.com/books/publisher/content/images/frontcover/IOUHEAAAQBAJ?fife=w480-h690
186,https://books.google.com/books/publisher/content?id=3PKNEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
187,https://books.google.com/books/content?id=PnP5EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
188,https://books.google.com/books/content?id=_c79DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
189,https://books.google.com/books/content?id=2plPEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
190,https://books.google.com/books/content?id=9vqGDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
191,https://books.google.com/books/content?id=94_GDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
192,https://books.google.com/books/content?id=V8rVDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
193,https://books.google.com/books/content?id=mmZSDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
194,https://books.google.com/books/content?id=U5DEDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
195,https://books.google.com/books/content?id=x-m4DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
196,https://books.google.com/books/content?id=47gTeoOwJ7EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
197,https://books.google.com/books/content?id=HMM4vgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
198,https://books.google.com/books/content?id=FzR7EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
199,https://books.google.com/books/content?id=LYhXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
200,https://books.google.com/books/content?id=y5GKEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
201,https://books.google.com/books/content?id=Be80DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
202,https://books.google.com/books/content?id=yLDMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
203,https://books.google.com/books/content?id=j6TXDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
204,https://books.google.com/books/content?id=V5veDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
205,https://books.google.com/books/content?id=JgA5zwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
206,https://books.google.com/books/content?id=gtUiDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
207,https://books.google.com/books/content?id=f1zbDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
208,https://books.google.com/books/content?id=l3dtEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
209,https://books.google.com/books/content?id=iWhxK12fbA4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
210,https://books.google.com/books/content?id=LwCUDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
211,https://books.google.com/books/content?id=DOh4DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
212,https://books.google.com/books/content?id=cq-PEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
213,https://books.google.com/books/content?id=9YTwDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
214,https://books.google.com/books/content?id=cdy-AQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
215,https://books.google.com/books/content?id=0Oe1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
216,https://books.google.com/books/content?id=mH2pQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
217,https://books.google.com/books/content?id=0ue1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
218,https://books.google.com/books/content?id=zOe1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
219,https://books.google.com/books/content?id=v5Y6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
220,https://books.google.com/books/content?id=hETQ5rjv_PgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
221,https://books.google.com/books/content?id=2U84DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
222,https://books.google.com/books/content?id=4_nzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
223,https://books.google.com/books/content?id=l66SAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
224,https://books.google.com/books/content?id=WYF0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
225,https://books.google.com/books/content?id=YooUCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
226,https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507484842l/36260417.jpg
227,https://books.google.com/books/content?id=BY8yzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
228,https://books.google.com/books/content?id=OMKiEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
229,https://books.google.com/books/content?id=EpU5DgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
230,https://books.google.com/books/content?id=JUotzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
231,https://books.google.com/books/content?id=N5VaEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
232,https://books.google.com/books/content?id=Q-k5nwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
233,https://books.google.com/books/content?id=uIHCOUNytrEC&printsec=frontcover&img=1&zoom=1&source=gbs_api
234,https://books.google.com/books/content?id=_UMkAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
235,https://books.google.com/books/content?id=25_LDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
236,https://books.google.com/books/content?id=HAoMCAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
237,https://books.google.com/books/content?id=TTNcEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
238,https://books.google.com/books/content?id=7K9szQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
239,https://books.google.com/books/content?id=1_6VSVuzCagC&printsec=frontcover&img=1&zoom=1&source=gbs_api
240,https://books.google.com/books/content?id=44WEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
241,https://books.google.com/books/content?id=NfsWEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
242,https://books.google.com/books/content?id=r11PDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
243,https://books.google.com/books/content?id=ey-evejZoiUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
244,https://books.google.com/books/content?id=c_oXCi3ISd0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
245,https://books.google.com/books/content?id=WpqjEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
246,https://books.google.com/books/content?id=DLMo0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
247,https://books.google.com/books/content?id=QwlpEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
248,https://m.media-amazon.com/images/I/51CHtA64O3L._SL500_.jpg
249,https://books.google.com/books/content?id=fs07zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
250,https://books.google.com/books/content?id=biK_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
251,https://books.google.com/books/content?id=fWLZ6cWZKRUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
252,https://books.google.com/books/content?id=ks8MatCA_VoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
253,https://books.google.com/books/content?id=nEadQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
254,https://books.google.com/books/content?id=HH2-EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
255,https://books.google.com/books/content?id=o01AfGWfKwIC&printsec=frontcover&img=1&zoom=1&source=gbs_api
256,https://books.google.com/books/content?id=laQ5AQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
257,https://books.google.com/books/content?id=KQMTEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
258,https://books.google.com/books/publisher/content?id=XXGYDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
259,https://books.google.com/books/content?id=UzhhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
260,https://books.google.com/books/content?id=i-41yUowGBYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
261,https://books.google.com/books/content?id=jkgsvAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
262,https://books.google.com/books/content?id=g0_mEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
263,https://books.google.com/books/content?id=hgx0sJvphNkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
264,https://books.google.com/books/content?id=fhm1vgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
265,https://books.google.com/books/content?id=ZZ806Vanu3IC&printsec=frontcover&img=1&zoom=1&source=gbs_api
266,https://books.google.com/books/content?id=XhrQtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
267,https://play-lh.googleusercontent.com/jsyNOZ3eMRIdgz5jlh8rPtgSGD37BwH38Pie0S74B9LYXegVieoYEtdNb4ihK_VeRMpShBPkqvE9dg=w480-h690-rw
268,https://books.google.com/books/content?id=VNcdzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
269,https://books.google.com/books/content?id=9BPpDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
270,https://books.google.com/books/content?id=ZlU3DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
271,https://books.google.com/books/content?id=d4aEEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
272,https://books.google.com/books/content?id=8EUotAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
273,https://books.google.com/books/content?id=f1C9DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
274,https://books.google.com/books/content?id=-ymoMjoQgfwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
275,https://books.google.com/books/content?id=AByWezmWXJoC&printsec=frontcover&img=1&zoom=1&source=gbs_api
276,https://books.google.com/books/content?id=b5bnAAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
277,https://books.google.com/books/content?id=3Qibnqk2g4sC&printsec=frontcover&img=1&zoom=1&source=gbs_api
278,https://m.media-amazon.com/images/I/61CdpLBT7OL.jpg
279,https://play.google.com/books/publisher/content/images/frontcover/ZVadBAAAQBAJ?fife=w480-h690
280,https://books.google.com/books/content?id=vHnZCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
281,https://books.google.com/books/content?id=meOgEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
282,https://books.google.com/books/content?id=WVe_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
283,https://books.google.com/books/content?id=FlkcyK7xwqMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
284,https://books.google.com/books/content?id=WEzLalZtHeEC&printsec=frontcover&img=1&zoom=1&source=gbs_api
285,https://books.google.com/books/content?id=aisnk03zsZYC&printsec=frontcover&img=1&zoom=1&source=gbs_api
286,https://books.google.com/books/content?id=wlgsEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
287,https://books.google.com/books/content?id=RcN_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
288,https://books.google.com/books/content?id=t2H6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
289,https://books.google.com/books/content?id=8IHEDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
290,https://m.media-amazon.com/images/I/31rMxijditL._SL500_.jpg
291,https://books.google.com/books/content?id=MKcxHs_3gLUC&printsec=frontcover&img=1&zoom=1&source=gbs_api
292,https://books.google.com/books/content?id=SnTnEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
293,https://books.google.com/books/content?id=6eSAzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
294,https://books.google.com/books/content?id=_BEcDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
295,https://books.google.com/books/content?id=U3v_EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
296,https://books.google.com/books/content?id=qfUxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
297,https://books.google.com/books/content?id=YF6vDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
298,https://books.google.com/books/content?id=Hv5zcgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
299,https://books.google.com/books/content?id=uGfoCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
300,https://books.google.com/books/content?id=SbjrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
301,https://books.google.com/books/content?id=0HP0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
302,https://books.google.com/books/content?id=365wDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
303,https://books.google.com/books/content?id=knPoEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
304,https://books.google.com/books/content?id=8SzXDgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
305,https://books.google.com/books/content?id=lUGVEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
306,https://books.google.com/books/content?id=UbS9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
307,https://books.google.com/books/publisher/content?id=B6eQBQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
308,https://books.google.com/books/content?id=Pa3uAs9kgVMC&printsec=frontcover&img=1&zoom=1&source=gbs_api
309,https://books.google.com/books/content?id=22oMDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
310,https://books.google.com/books/content?id=ZgEAEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
311,https://books.google.com/books/content?id=PYvsEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
312,https://books.google.com/books/content?id=rVhCCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
313,https://books.google.com/books/content?id=Zo5REQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
314,https://books.google.com/books/content?id=bLrXEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
315,https://books.google.com/books/content?id=kwjCDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
316,https://books.google.com/books/content?id=n8ULQFTGiMYC&printsec=frontcover&img=1&zoom=1&source=gbs_api
317,https://books.google.com/books/content?id=Coi9AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
318,https://books.google.com/books/content?id=UTGnopblxt8C&printsec=frontcover&img=1&zoom=1&source=gbs_api
319,https://play-lh.googleusercontent.com/tX-BTpCWigk5eewSy9Zqq91tyfPyfG1VEudgxEpFrB_NoXM511X3d-QsMX1k4Md3XMu86_Taz4Aw=w480-h690-rw
320,https://books.google.com/books/content?id=SIZiPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
321,https://books.google.com/books/content?id=btIQAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
322,https://books.google.com/books/content?id=U9_9EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
323,https://books.google.com/books/content?id=lScWAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
324,https://books.google.com/books/content?id=M22fAwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
325,https://books.google.com/books/content?id=7LNMV4ivjGoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
326,https://books.google.com/books/content?id=_uIlE7DkAzYC&printsec=frontcover&img=1&zoom=1&source=gbs_api
327,https://books.google.com/books/content?id=UoSeEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
328,https://books.google.com/books/content?id=VXBGswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
329,https://books.google.com/books/content?id=TJGwEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
330,https://books.google.com/books/content?id=GH9-zwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api
331,https://books.google.com/books/content?id=3C-4dsIGlEgC&printsec=frontcover&img=1&zoom=1&source=gbs_api
332,https://books.google.com/books/content?id=aqe9RoZorLIC&printsec=frontcover&img=1&zoom=1&source=gbs_api
333,https://books.google.com/books/content?id=cpl8EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
334,https://books.google.com/books/content?id=zK4sEQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api
335,https://play.google.com/books/publisher/content/images/frontcover/FG7TEAAAQBAJ?fife=w480-h690
336,https://play.google.com/books/publisher/content/images/frontcover/QoTEDwAAQBAJ?fife=w480-h690
337,https://play.google.com/books/publisher/content/images/frontcover/oHdJEQAAQBAJ?fife=w480-h690
338,https://m.media-amazon.com/images/I/71RXc0OoEwL.jpg
339,https://play-lh.googleusercontent.com/fquk_GgY47Z4JyIIAwPmIi6nwORco_9yvS99nG3Bp0kVIvcjBY57WTFnycSuU1ZXE5-ESHSzbMLHJA=w480-h690-rw
340,https://m.media-amazon.com/images/I/71Yq7brdaBL.jpg`;

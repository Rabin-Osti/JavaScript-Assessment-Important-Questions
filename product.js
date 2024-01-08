const product = [
  {
    name: "Mrityunjaya",
    image: "/images/books/mrityunjaya.jpg",
    description:
      "Mrityunjaya is a historical fiction novel written by Shivaji Savant. Set in ancient India, the book tells the captivating story of Karna, a complex and tragic character from the Indian epic Mahabharata. Through Karna's journey, the novel explores themes of honor, duty, love, and destiny, offering a unique perspective on one of the most celebrated characters in Indian mythology.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "Life of Pi",
    image: "/images/books/life-of-pi.jpg",
    description:
      "Life of Pi is a captivating novel written by Yann Martel. The story follows the extraordinary journey of Pi Patel, a young Indian boy who survives a shipwreck and finds himself stranded on a lifeboat in the Pacific Ocean. Accompanied by a Bengal tiger named Richard Parker, Pi must navigate the challenges of survival, confront his own beliefs and fears, and ultimately explore the depths of human resilience and the power of storytelling.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "Heidi",
    image: "/images/books/heidi.jpg",
    description:
      "Heidi is a classic children's novel written by Johanna Spyri. The book tells the heartwarming story of Heidi, a young orphan girl, who goes to live with her grandfather in the Swiss Alps. As Heidi embraces the simplicity of mountain life, she discovers the beauty of nature, forms deep friendships, and brings joy to the people around her. Through its themes of love, resilience, and the transformative power of nature, Heidi continues to captivate readers of all ages.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "My Side of the Mountain",
    image: "/images/books/my-side-of-the-mountain.jpg",
    description:
      "My Side of the Mountain is a captivating young adult novel written by Jean Craighead George. The story follows Sam Gribley, a 12-year-old boy who decides to run away from his crowded New York City home and live in the wilderness of the Catskill Mountains. As Sam learns to survive on his own, he develops a deep connection with nature, befriends various woodland creatures, and faces both the challenges and rewards of solitude and self-reliance. This timeless classic explores themes of independence, resilience, and the power of nature's embrace.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "Charlotte's Web",
    image: "/images/books/charlottes-web.jpg",
    description:
      "Charlotte's Web is a beloved children's novel written by E.B. White and illustrated by Garth Williams. The story revolves around a pig named Wilbur and his unlikely friendship with a wise and kind-hearted spider named Charlotte. Together with the help of other farm animals, Charlotte uses her remarkable talents to save Wilbur from a bleak fate. This heartwarming tale explores themes of friendship, loyalty, and the power of words, captivating readers of all ages with its timeless charm and gentle lessons about life and love.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },

  {
    name: "Roll of Thunder, Hear My Cry",
    image: "/images/books/roll-of-thunder.jpg",
    description:
      "Roll of Thunder, Hear My Cry is a powerful young adult novel written by Mildred D. Taylor. Set in Mississippi during the Great Depression, the story follows the Logan family, particularly Cassie Logan, a young African-American girl, as they face racism, injustice, and inequality in their community. Through Cassie's perspective, the novel explores themes of resilience, family bonds, and the fight for justice in the face of adversity. With its compelling characters and thought-provoking narrative, this book is a poignant exploration of the African-American experience and an important story of strength and hope.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "Caps for Sale",
    image: "/images/books/caps-for-sale.jpg",
    description:
      "Caps for Sale is a delightful children's book written and illustrated by Esphyr Slobodkina. The story follows a cap peddler who carries his caps on his head. One day, a group of mischievous monkeys steals his caps, leading to a humorous and entertaining adventure. This charming tale teaches young readers about problem-solving, perseverance, and the importance of staying calm in challenging situations.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },

  {
    name: "Tuesdays with Morrie",
    image: "/images/books/tuesdays-with-morrie.jpg",
    description:
      "Tuesdays with Morrie is a touching memoir written by Mitch Albom. The book recounts Albom's conversations and life lessons with his former college professor, Morrie Schwartz, who is facing a terminal illness. Through their weekly meetings, Morrie imparts wisdom about life, love, happiness, and the importance of meaningful relationships. This heartwarming and thought-provoking book serves as a reminder to cherish the time we have and embrace the true essence of living.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "Kadam",
    image: "/images/books/kadam.jpg",
    description:
      "Kadam is a Marathi novel written by Anant Wagle. The book tells the inspiring story of a young boy named Keshav, who faces numerous challenges and obstacles in his journey towards achieving his dreams. Set in the backdrop of a rural village in Maharashtra, the novel explores themes of determination, resilience, and the transformative power of education. Through Keshav's experiences, the book sheds light on societal issues, the importance of education in uplifting communities, and the pursuit of one's passions.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },

  {
    name: "Lord of the Flies",
    image: "/images/books/lord-of-the-flies.jpg",
    description:
      "Lord of the Flies is a thought-provoking novel written by William Golding. The book explores the dark and complex nature of humanity when a group of British boys find themselves stranded on a deserted island without adult supervision. As they struggle to establish order and survive, their inherent savagery and the unraveling of civilization become prominent themes. This allegorical tale delves into the human psyche, examining the delicate balance between civilization and chaos, morality and instinct.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "My Father's Dragon",
    image: "/images/books/my-fathers-dragon.jpg",
    description:
      "My Father's Dragon is a beloved children's book written by Ruth Stiles Gannett. The story follows the adventures of a young boy named Elmer Elevator, who sets out on a daring quest to rescue a baby dragon held captive on Wild Island. With his wit, bravery, and the help of some clever animals he meets along the way, Elmer overcomes challenges and outwits dangerous creatures to fulfill his mission. This enchanting tale sparks the imagination, emphasizing courage, resourcefulness, and the bond between humans and animals.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "The Intelligent Investor",
    image: "/images/books/intelligent-investor.jpg",
    description:
      "The Intelligent Investor is a renowned investment book written by Benjamin Graham, widely regarded as the father of value investing. This classic guide offers timeless wisdom and strategies for successful investing in the stock market. Graham emphasizes the importance of value analysis, risk management, and a long-term perspective when approaching investments. The book provides valuable insights into understanding market behavior, avoiding common pitfalls, and building a solid investment portfolio. It is a must-read for anyone seeking to navigate the complex world of investing with a rational and disciplined approach.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "The 7 Habits of Highly Effective Teens",
    image: "/images/books/7-habits-teens.jpg",
    description:
      "The 7 Habits of Highly Effective Teens is a bestselling self-help book written by Sean Covey. Geared towards teenagers, this book presents seven essential habits that can help young individuals lead a successful and fulfilling life. Covey addresses various aspects of life, including personal development, goal-setting, time management, communication, and building healthy relationships. Packed with practical advice, inspiring stories, and interactive exercises, this book empowers teenagers to take control of their lives and make positive choices for their future.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "The Power of Habit",
    image: "/images/books/power-of-habit.jpg",
    description:
      "The Power of Habit, written by Charles Duhigg, explores the science behind habits and how they shape our lives. Drawing on research and real-life examples, Duhigg delves into the mechanisms of habit formation and offers practical insights on how to change and leverage our habits effectively. From personal habits to organizational routines, the book reveals the power of habit in shaping individual behavior, productivity, and success. It provides a fascinating perspective on the psychology of habit and offers valuable strategies for creating positive change.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
  {
    name: "The Secret",
    image: "/images/books/the-secret.jpg",
    description:
      "The Secret, written by Rhonda Byrne, is a popular self-help book that explores the law of attraction and its potential to transform lives. The book suggests that positive thinking and visualization can bring about desired outcomes and create a life of abundance and happiness. Byrne presents a range of insights, stories, and techniques to harness the power of the law of attraction and manifest one's dreams and desires. The Secret has garnered widespread attention and sparked discussions about the potential impact of thoughts and beliefs on personal and professional success.",
    category: "literature",
    price: 0,
    quantity: 0,
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    canReview: [],
  },
];

const translations = {
  en: {
    common: {
      logo: 'TebebBook Swap',
      home: 'Home',
      browse: 'Browse',
      about: 'About',
      howItWorks: 'How It Works',
      contact: 'Contact',
      profile: 'Profile',
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      loading: 'Loading...',
      delete: 'Delete',
      update: 'Update',
      cancel: 'Cancel',
      updating: 'Updating...',
      error: 'Error',
      success: 'Success'
    },
    book: {
      title: 'Title',
      author: 'Author',
      condition: 'Condition',
      genre: 'Genre',
      description: 'Description',
      newImage: 'New Image (Optional)',
      updateBook: 'Update Book',
      addBook: 'Add Book',
      owner: 'Owner'
    },
    bookDetails: {
      loading: 'Loading book details...',
      notFound: 'Book not found',
      by: 'by',
      genre: 'Genre',
      condition: 'Condition',
      language: 'Language',
      description: 'Description',
      bookOwner: 'Book Owner',
      requestSwap: 'Request Swap',
      selectBook: 'Select a book to swap',
      swapSuccess: 'Swap request sent successfully',
      swapError: 'Failed to create swap request',
      loginToSwap: 'Please login to request a swap'
    },
    profile: {
      welcome: 'Welcome',
      email: 'Email',
      addNewBook: 'Add New Book',
      myBooks: 'My Books',
      swapRequests: 'Swap Requests',
      noBooks: 'You haven\'t added any books yet',
      noRequests: 'No swap requests yet',
      error: {
        fetchData: 'Failed to fetch data',
        deleteBook: 'Failed to delete book',
        updateSwap: 'Failed to update swap request'
      }
    },
    browse: {
      title: 'Browse Books',
      findYourNextGreatRead: 'Find your next great read',
      searchPlaceholder: 'Search by title or author',
      genre: 'Select Genre',
      condition: 'Select Condition',
      viewDetails: 'View Details',
      requestSwap: 'Request Swap',
      noBooks: 'No books available',
      error: 'Error loading books'
    },
    auth: {
      loginTitle: 'Login to Your Account',
      registerTitle: 'Create an Account',
      email: 'Email',
      password: 'Password',
      name: 'Name',
      loginButton: 'Login',
      registerButton: 'Register',
      error: {
        login: 'Failed to login',
        register: 'Failed to register'
      }
    },
    about: {
      title: 'About Tebeb BookSwap',
      subtitle: 'Connecting Book Lovers Through Sharing',
      mission: {
        title: 'Our Mission',
        description: 'To create a vibrant community of book lovers who share their passion for reading through a sustainable book exchange platform.'
      },
      vision: {
        community: {
          title: 'Building Community',
          description: 'We believe in the power of books to bring people together and create meaningful connections.'
        },
        sustainability: {
          title: 'Promoting Sustainability',
          description: 'By encouraging book sharing, we reduce waste and make reading more accessible to everyone.'
        },
        culture: {
          title: 'Enriching Culture',
          description: 'We celebrate diversity in literature and promote cultural exchange through books.'
        }
      },
      team: {
        title: 'Our Team',
        description: 'We are a passionate team of book lovers and technology enthusiasts.',
        members: [
          {
            name: 'John Doe',
            role: 'Founder'
          },
          {
            name: 'Jane Smith',
            role: 'Community Manager'
          },
          {
            name: 'David Johnson',
            role: 'Developer'
          }
        ]
      }
    },
    footer: {
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      quickLinks: 'Quick Links',
      community: 'Community',
      support: 'Support',
      bookSwapForum: 'Book Swap Forum',
      bookBlog: 'Book Blog',
      communityEvents: 'Community Events', 
      bookAmbassadors: 'Book Ambassadors',
      faqNew: 'FAQ',
      help: 'Help Center',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      copyright: ' 2024 Tebeb BookSwap. All Rights Reserved.',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      followUs: 'Follow Us'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about Book Swap',
      howDoesBookSwapWork: {
        question: 'How does Book Swap work?',
        answer: 'Book Swap is a platform where users can exchange books with each other. Create an account, list your books, and start swapping with other book lovers.'
      },
      isFree: {
        question: 'Is Book Swap free?',
        answer: 'Basic Book Swap services are completely free. We only charge for optional premium features.'
      },
      howToStartSwapping: {
        question: 'How do I start swapping books?',
        answer: 'Create an account, add books you want to swap, browse other users\' books, and send swap requests.'
      },
      safetyMeasures: {
        question: 'What safety measures are in place?',
        answer: 'We have user verification, review systems, and guidelines to ensure safe and fair book exchanges.'
      },
      whatBooksCanISwap: {
        question: 'What types of books can I swap?',
        answer: 'You can swap most books in good condition across various genres. Check our guidelines for specific restrictions.'
      }
    },
    home: {
      hero: {
        title: 'Swap Books, Share Stories',
        subtitle: 'Connect with book lovers and discover new reads',
        signUp: 'Sign Up Now',
        browseBooks: 'Browse Books'
      },
      features: {
        title: 'Why Book Swap?',
        saveMoney: {
          title: 'Save Money',
          description: 'Swap books instead of buying new ones. Reduce your reading expenses while discovering exciting titles.'
        },
        ecoFriendly: {
          title: 'Eco-Friendly',
          description: 'Promote sustainability by reusing books and reducing waste. Every book swap is a step towards a greener planet.'
        },
        community: {
          title: 'Build Connections',
          description: 'Join a vibrant community of book lovers. Share recommendations, make friends, and expand your literary horizons.'
        }
      },
      howItWorks: {
        title: 'How Book Swap Works',
        steps: {
          register: {
            title: 'Create Your Account',
            description: 'Sign up for free and set up your profile. It only takes a few minutes to get started.'
          },
          listBooks: {
            title: 'List Your Books',
            description: 'Add the books you want to swap. Include details like condition, genre, and a brief description.'
          },
          findMatch: {
            title: 'Find Your Perfect Swap',
            description: 'Browse books, send swap requests, and connect with other book lovers to exchange your favorite reads.'
          }
        }
      }
    },
    howItWorks: {
      title: 'How Book Swap Works',
      subtitle: 'Discover a simple, community-driven book exchange platform',
      steps: {
        createAccount: {
          title: 'Create Your Account',
          description: 'Sign up for free and set up your profile in minutes.',
          button: 'Register Now'
        },
        listBooks: {
          title: 'List Your Books',
          description: 'Add the books you want to swap. Include details like condition and genre.',
          button: 'Add Books'
        },
        browseBooks: {
          title: 'Browse Available Books',
          description: 'Explore a wide range of books from our community of readers.',
          button: 'Find Books'
        },
        requestSwap: {
          title: 'Request a Swap',
          description: 'Send swap requests to book owners and start your exchange journey.'
        },
        arrangeExchange: {
          title: 'Arrange the Exchange',
          description: 'Communicate with your swap partner and agree on the exchange details.'
        }
      },
      tips: {
        title: 'Book Swap Tips',
        items: [
          {
            title: 'Book Condition Matters',
            description: 'Ensure your books are in good condition to increase swap chances.'
          },
          {
            title: 'Be Descriptive',
            description: 'Provide detailed book descriptions to attract more swap requests.'
          },
          {
            title: 'Communicate Clearly',
            description: 'Maintain open and respectful communication with swap partners.'
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Is Book Swap free?',
            answer: 'Basic Book Swap services are completely free. We only charge for optional premium features.'
          },
          {
            question: 'How do I ensure a safe book exchange?',
            answer: 'We have user verification, review systems, and guidelines to ensure safe and fair book exchanges.'
          },
          {
            question: 'What types of books can I swap?',
            answer: 'You can swap most books in good condition across various genres. Check our guidelines for specific restrictions.'
          }
        ]
      },
      cta: {
        title: 'Ready to Start Swapping?',
        description: 'Join our community and discover the joy of book sharing.',
        button: 'Get Started'
      }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your full name',
        email: 'Email Address',
        emailPlaceholder: 'Enter your email (e.g., temp@tempmail.com)',
        message: 'Your Message',
        messagePlaceholder: 'Type your message here...',
        submit: 'Send Message'
      },
      info: {
        title: 'Contact Information',
        email: {
          title: 'Email Support',
          value: 'support@tebebbookswap.com'
        },
        phone: {
          title: 'Phone Number',
          value: '+251 11 234 5678'
        },
        address: {
          title: 'Our Location',
          value: 'Addis Ababa, Ethiopia'
        }
      }
    },
    bookSwapForum: {
      title: 'Book Swap Forum',
      subtitle: 'Connect, Share, and Discuss Books with Our Community',
      categories: {
        general: {
          title: 'General Discussion',
          description: 'Talk about anything book-related!'
        },
        recommendations: {
          title: 'Book Recommendations',
          description: 'Share and get book suggestions'
        },
        swapTips: {
          title: 'Swap Tips',
          description: 'Learn best practices for book swapping'
        }
      },
      posts: {
        general: {
          1: {
            title: 'Favorite Books of 2024',
            author: 'BookLover123',
            excerpt: 'What books have you enjoyed most this year?'
          },
          2: {
            title: 'Reading Challenges',
            author: 'PageTurner456',
            excerpt: 'Share your reading goals and progress!'
          }
        },
        recommendations: {
          1: {
            title: 'Must-Read Fantasy Novels',
            author: 'FantasyFan789',
            excerpt: 'Top fantasy recommendations for this season'
          },
          2: {
            title: 'Hidden Gems in Mystery Genre',
            author: 'DetectivReader101',
            excerpt: 'Lesser-known mystery books worth reading'
          }
        },
        swapTips: {
          1: {
            title: 'Book Condition Guidelines',
            author: 'SwapMaster',
            excerpt: 'How to prepare books for swapping'
          },
          2: {
            title: 'Communication Tips',
            author: 'CommunityHelper',
            excerpt: 'Best practices for communicating with swap partners'
          }
        }
      },
      readMore: 'Read More'
    },
    bookBlog: {
      title: 'Book Blog',
      subtitle: 'Insights, Reviews, and Literary Explorations',
      categories: {
        featured: {
          title: 'Featured Posts',
          description: 'Our top recommended articles'
        },
        reviews: {
          title: 'Book Reviews',
          description: 'In-depth reviews of latest books'
        },
        authorInterviews: {
          title: 'Author Interviews',
          description: 'Conversations with inspiring writers'
        }
      },
      readMore: 'Read Full Article'
    },
    communityEvents: {
      title: 'Community Events',
      subtitle: 'Join, Participate, and Celebrate Books',
      categories: {
        upcoming: {
          title: 'Upcoming Events',
          description: 'Events you can look forward to'
        },
        past: {
          title: 'Past Events',
          description: 'Highlights from our previous gatherings'
        },
        virtual: {
          title: 'Virtual Events',
          description: 'Online book-related activities'
        }
      },
      viewDetails: 'View Event Details'
    },
    bookAmbassadors: {
      title: 'Book Ambassadors',
      subtitle: 'Passionate Advocates for Reading and Book Swapping',
      categories: {
        current: {
          title: 'Current Ambassadors',
          description: 'Meet our active community representatives'
        },
        featured: {
          title: 'Featured Ambassadors',
          description: 'Highlighting exceptional community members'
        },
        apply: {
          title: 'Become an Ambassador',
          description: 'Join our mission to promote reading'
        }
      },
      apply: {
        requirementsTitle: 'Ambassador Requirements',
        button: 'Apply Now'
      }
    },
    helpCenter: {
      title: 'Help Center',
      subtitle: 'Your Guide to a Smooth Book Swap Experience',
      categories: {
        accountManagement: {
          title: 'Account & Profile',
          description: 'Manage your account settings, update profile, and resolve account-related issues.'
        },
        bookSwapping: {
          title: 'Book Swapping Process',
          description: 'Learn how to request, accept, and complete book swaps effectively.'
        },
        troubleshooting: {
          title: 'Troubleshooting',
          description: 'Find solutions to common problems and get quick assistance.'
        }
      },
      contactSupport: {
        title: 'Contact Support',
        description: 'Need more help? Our support team is ready to assist you.',
        email: 'support@tebebbookswap.com',
        emailDescription: 'Email our dedicated support team for personalized assistance',
        phone: '+251 11 123 4567',
        responseTime: 'Typical response time: 24-48 hours'
      }
    },
    termsAndConditions: {
      title: 'Tebeb BookSwap Terms of Service',
      lastUpdated: 'Last Updated: January 22, 2024',
      account: {
        title: 'Account Registration',
        description: 'By creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account and password.'
      },
      bookSwapping: {
        title: 'Book Swapping Guidelines',
        description: 'Users must ensure books are accurately described, in good condition, and exchanged in a respectful and fair manner. Misrepresentation of book condition is strictly prohibited.'
      },
      userResponsibilities: {
        title: 'User Responsibilities',
        description: 'Users must act ethically, respect community guidelines, maintain a positive environment, and refrain from engaging in harmful, offensive, or illegal activities on the platform.'
      },
      intellectualProperty: {
        title: 'Intellectual Property Rights',
        description: 'All content on Tebeb BookSwap, including text, graphics, logos, and user-generated content, is protected by intellectual property laws and remains the property of Tebeb BookSwap.'
      },
      limitation: {
        title: 'Limitation of Liability',
        description: 'Tebeb BookSwap is not liable for any direct, indirect, incidental, consequential, or special damages arising from book swaps or platform usage.'
      },
      questions: {
        title: 'Questions and Concerns',
        description: 'For any inquiries regarding these Terms of Service, please contact our legal team.',
        email: 'legal@tebebbookswap.com'
      }
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: January 22, 2024',
      sections: [
        {
          title: 'Information We Collect',
          content: 'We collect personal information necessary for book swapping and account management.'
        },
        {
          title: 'How We Use Your Information',
          content: 'Your data is used to facilitate book swaps and improve user experience.'
        },
        {
          title: 'Data Protection',
          content: 'We implement security measures to protect your personal information.'
        },
        {
          title: 'Third-Party Sharing',
          content: 'We do not sell or share your personal information with third parties.'
        },
        {
          title: 'User Rights',
          content: 'You have the right to access, correct, or delete your personal information at any time.'
        }
      ],
      contactInfo: {
        title: 'Contact Privacy Officer',
        email: 'privacy@tebebbookswap.com'
      }
    }
  },
  amharic: {
    common: {
      logo: 'ጥበብ መጽሐፍ ልውውጥ',
      home: 'መነሻ',
      browse: 'ያስሱ',
      about: 'ስለ እኛ',
      howItWorks: 'እንዴት እንደሚሰራ',
      contact: 'አግኙን',
      profile: 'መገለጫ',
      login: 'ግባ',
      register: 'ተመዝገብ',
      logout: 'ውጣ',
      loading: 'በመጫን ላይ...',
      delete: 'ሰርዝ',
      update: 'አዘምን',
      cancel: 'ሰርዝ',
      updating: 'በማዘመን ላይ...',
      error: 'ስህተት',
      success: 'ተሳክቷል'
    },
    book: {
      title: 'ርዕስ',
      author: 'ደራሲ',
      condition: 'ሁኔታ',
      genre: 'ዘውግ',
      description: 'መግለጫ',
      newImage: 'አዲስ ምስል (አማራጭ)',
      updateBook: 'መጽሐፍ አዘምን',
      addBook: 'መጽሐፍ ጨምር',
      owner: 'ባለቤት'
    },
    bookDetails: {
      loading: 'የመጽሐፍ ዝርዝሮችን በመጫን ላይ...',
      notFound: 'መጽሐፉ አልተገኘም',
      by: 'በ',
      genre: 'ዘውግ',
      condition: 'ሁኔታ',
      language: 'ቋንቋ',
      description: 'መግለጫ',
      bookOwner: 'የመጽሐፉ ባለቤት',
      requestSwap: 'ልውውጥ ጠይቅ',
      selectBook: 'ለመለዋወጥ መጽሐፍ ይምረጡ',
      swapSuccess: 'የልውውጥ ጥያቄው በተሳካ ሁኔታ ተልኳል',
      swapError: 'የልውውጥ ጥያቄ መፍጠር አልተቻለም',
      loginToSwap: 'እባክዎ ልውውጥ ለመጠየቅ ይግቡ'
    },
    profile: {
      welcome: 'እንኳን ደህና መጡ',
      email: 'ኢሜይል',
      addNewBook: 'አዲስ መጽሐፍ ጨምር',
      myBooks: 'መጽሐፎቼ',
      swapRequests: 'የልውውጥ ጥያቄዎች',
      noBooks: 'እስካሁን ምንም መጽሐፍ አላከሉም',
      noRequests: 'እስካሁን ምንም የልውውጥ ጥያቄዎች የሉም',
      error: {
        fetchData: 'መረጃውን ማምጣት አልተቻለም',
        deleteBook: 'መጽሐፉን መሰረዝ አልተቻለም',
        updateSwap: 'የልውውጥ ጥያቄውን ማዘመን አልተቻለም'
      }
    },
    browse: {
      title: 'መጽሐፎችን ያስሱ',
      findYourNextGreatRead: 'የሚቀጥለውን ምርጥ ንባብዎን ያግኙ',
      searchPlaceholder: 'በርዕስ ወይም በደራሲ ይፈልጉ',
      genre: 'ዘውግ ይምረጡ',
      condition: 'ሁኔታ ይምረጡ',
      viewDetails: 'ዝርዝሮችን ይመልከቱ',
      requestSwap: 'ልውውጥ ጠይቅ',
      noBooks: 'ምንም መጽሐፎች አልተገኙም',
      error: 'መጽሐፎችን በመጫን ላይ ስህተት ተከስቷል'
    },
    about: {
      title: 'ስለ ጠበብ መጽሐፍ ልውውጥ',
      subtitle: 'የመጽሐፍ ፍቅረኞችን በማጋራት እናገናኛለን',
      mission: {
        title: 'ተልዕኮአችን',
        description: 'በዘላቂ የመጽሐፍ ልውውጥ መድረክ በኩል ንባብን የሚወዱ ሰዎችን ጠንካራ ማህበረሰብ መፍጠር።'
      },
      vision: {
        community: {
          title: 'ማህበረሰብ መገንባት',
          description: 'መጽሐፎች ሰዎችን ለማገናኘት እና ትርጉም ያለው ግንኙነት ለመፍጠር ያላቸውን ኃይል እናምናለን።'
        },
        sustainability: {
          title: 'ዘላቂነትን ማበረታታት',
          description: 'መጽሐፎችን በማጋራት ብክነትን እንቀንሳለን እንዲሁም ንባብን ለሁሉም ሰው ተደራሽ እናደርጋለን።'
        },
        culture: {
          title: 'ባህልን ማበልጸግ',
          description: 'በስነ-ጽሑፍ ውስጥ ያለውን ብዝሃነት እናከብራለን እና በመጽሐፎች በኩል የባህል ልውውጥን እናበረታታለን።'
        }
      },
      team: {
        title: 'ቡድናችን',
        description: 'እኛ የመጽሐፍ ፍቅረኞች እና የቴክኖሎጂ ባለሙያዎች ቡድን ነን።',
        members: [
          {
            name: 'ጆን ዶው',
            role: 'መስራች'
          },
          {
            name: 'ጄን ስሚዝ',
            role: 'የማህበረሰብ አስተዳዳሪ'
          },
          {
            name: 'ዴቪድ ጆንሰን',
            role: 'ዴቨሎፐር'
          }
        ]
      }
    },
    footer: {
      emailPlaceholder: 'ኢሜይልዎን ያስገቡ',
      subscribe: 'ይመዝገቡ',
      quickLinks: 'ፈጣን ማገናኛዎች',
      community: 'ማህበረሰብ',
      support: 'ድጋፍ',
      bookSwapForum: 'የመጽሐፍ ልውውጥ ፎረም',
      bookBlog: 'የመጽሐፍ ብሎግ',
      communityEvents: 'የማህበረሰብ ዝግጅቶች', 
      bookAmbassadors: 'የመጽሐፍ አምባሳደሮች',
      faqNew: 'ተደጋጋሚ ጥያቄዎች',
      help: 'የእገዛ ማዕከል',
      terms: 'የአገልግሎት ደንቦች',
      privacy: 'የግላዊነት ፖሊሲ',
      copyright: ' 2024 ጠበብ መጽሐፍ ልውውጥ። መብቱ በሙሉ የተጠበቀ ነው።',
      address: 'ቦታችን',
      phone: 'ስልክ ቁጥር',
      email: 'ኢሜይል አድራሻ',
      followUs: 'ተከተሉን'
    },
    faq: {
      title: 'ተደጋጋሚ ጥያቄዎች',
      subtitle: 'ስለ መጽሐፍ ልውውጥ የሚጠይቁ የተለመዱ ጥያቄዎችን ያግኙ',
      howDoesBookSwapWork: {
        question: 'የመጽሐፍ ልውውጥ እንዴት ይሰራል?',
        answer: 'መጽሐፍ ልውውጥ ተጠቃሚዎች መጽሐፎቻቸውን ከሌሎች ተጠቃሚዎች ጋር ለመለዋወጥ የሚችሉበት መድረክ ነው። አካውንት ፍጠሩ፣ መጽሐፎችዎን ዘርዝሩ፣ እና ከሌሎች መጽሐፍ ፍቅረኞች ጋር ልውውጥ ጀምሩ።'
      },
      isFree: {
        question: 'መጽሐፍ ልውውጥ ነፃ ነው?',
        answer: ' መሰረታዊ የመጽሐፍ ልውውጥ አገልግሎቶች ሙሉ በሙሉ ነፃ ናቸው። የምናስከፍለው ለፈቃጅ ተጨማሪ ዕድሎች ብቻ ነው።'
      },
      howToStartSwapping: {
        question: 'መጽሐፎችን መለዋወጥ እንዴት እጀምራለሁ?',
        answer: 'አካውንት ፍጠሩ፣ ልትለዋወጡ የሚፈልጉትን መጽሐፎች ጨምሩ፣ ሌሎች ተጠቃሚዎች ያሏቸውን መጽሐፎች ፈልጉ፣ እና ልውውጥ ጥያቄዎችን ላኩ።'
      },
      safetyMeasures: {
        question: 'ምን የደህንነት እርምጃዎች ተተግብረዋል?',
        answer: 'ተጠቃሚ ማረጋገጫ፣ ግምገማ ስርዓቶች፣ እና ደህንነታቸው የተጠበቀ እና ፍትሃዊ የመጽሐፍ ልውውጦችን ለማረጋገጥ መመሪያዎች አሉን።'
      },
      whatBooksCanISwap: {
        question: 'ምን አይነት መጽሐፎችን ልለዋወጥ እችላለሁ?',
        answer: ' በተለያዩ ዘውጎች ያሉ በጥሩ ሁኔታ ያሉ መጽሐፎችን ሊለዋወጡ ይችላሉ። ልዩ ገደቦችን ለማወቅ የኛን መመሪያዎች ይመልከቱ።'
      }
    },
    home: {
      hero: {
        title: 'መጽሐፎችን ለዋወጡ፣ ታሪኮችን ያጋሩ',
        subtitle: 'ከመጽሐፍ ፍቅረኞች ጋር ተገናኙ እና አዳዲስ ንባቦችን ፈልጉ',
        signUp: 'አሁኑኑ ይመዝገቡ',
        browseBooks: 'መጽሐፎችን ይሰሱ'
      },
      features: {
        title: 'ለምን መጽሐፍ ልውውጥ?',
        saveMoney: {
          title: 'ገንዘብ ይቆጥቡ',
          description: 'አዲስ መጽሐፎችን መግዛት ፈንታ መጽሐፎችን ለዋወጡ። የንባብ ወጪዎችዎን ቀንሱ እና አስደሳሽ ርዕሶችን ያግኙ።'
        },
        ecoFriendly: {
          title: 'ተፈጥሮ ወዳጅ',
          description: 'መጽሐፎችን በማጋራት ብክነትን ቀንሱ እና ንባብን ለሁሉም ሰው ተደራሽ እናደርጋለን።'
        },
        community: {
          title: 'ግንኙነቶችን ይገንቡ',
          description: 'ንቁ የመጽሐፍ ፍቅረኞች ማህበረሰብ ውስጥ ይሳተፉ። የንባብ ምክሮችን ያጋሩ፣ ጓደኞችን ይፍጠሩ፣ እና የስነ-ጽሑፍ አድማስዎን ያሰፋሉ።'
        }
      },
      howItWorks: {
        title: 'የመጽሐፍ ልውውጥ እንዴት ይሰራል',
        steps: {
          register: {
            title: 'አካውንትዎን ይፍጠሩ',
            description: 'ነፃ ይመዝገቡ እና መገለጫዎን በጥቂት ደቂቃዎች ያዘጋጁ።'
          },
          listBooks: {
            title: 'መጽሐፎችዎን ዘርዝሩ',
            description: 'ልትለዋወጡ የሚፈልጉትን መጽሐፎች ያክሉ። ሁኔታ እና ዘውግ ያካትቱ።'
          },
          findMatch: {
            title: 'ፍፁም ልውውጥዎን ያግኙ',
            description: 'መጽሐፎችን ይሰሱ፣ ልውውጥ ጥያቄዎችን ላኩ፣ እና ተወዳጅ ንባቦችዎን ለመለዋወጥ ሌሎች መጽሐፍ ፍቅረኞች ጋር ይገናኙ።'
          }
        }
      }
    },
    howItWorks: {
      title: 'የመጽሐፍ ልውውጥ እንዴት ይሰራል',
      subtitle: 'ቀላል፣ የማህበረሰብ የተነሳ የመጽሐፍ ልውውጥ መድረክ ያግኙ',
      steps: {
        createAccount: {
          title: 'አካውንትዎን ይፍጠሩ',
          description: 'ነፃ ይመዝገቡ እና መገለጫዎን በጥቂት ደቂቃዎች ያዘጋጁ።',
          button: 'አሁኑኑ ይመዝገቡ'
        },
        listBooks: {
          title: 'መጽሐፎችዎን ዘርዝሩ',
          description: 'ልትለዋወጡ የሚፈልጉትን መጽሐፎች ያክሉ። ሁኔታ እና ዘውግ ያካትቱ።',
          button: 'መጽሐፎችን ያክሉ'
        },
        browseBooks: {
          title: 'ያሉ መጽሐፎችን ይሰሱ',
          description: 'ከአንባቢዎች ማህበረሰብ ባሉ ሰፊ መጽሐፎች ይዳሰሱ።',
          button: 'መጽሐፎችን ያግኙ'
        },
        requestSwap: {
          title: 'ልውውጥ ይጠይቁ',
          description: 'ለመጽሐፍ ባለቤቶች ልውውጥ ጥያቄዎችን ላኩ እና የልውውጥ ጉዞዎን ጀምሩ።'
        },
        arrangeExchange: {
          title: 'ልውውጥ ያዘጋጁ',
          description: 'ከልውውጥ ጓደኛዎ ጋር ተነጋገሩ እና የልውውጥ ዝርዝሮች ላይ ተስማሙ።'
        }
      },
      tips: {
        title: 'የመጽሐፍ ልውውጥ ምክሮች',
        items: [
          {
            title: 'የመጽሐፍ ሁኔታ ጠቃሚ ነው',
            description: 'መጽሐፎችዎ በጥሩ ሁኔታ መሆናቸውን ያረጋግጡ ለመለዋወጥ ዕድሎችን ለማሳደግ።'
          },
          {
            title: 'ዝርዝር ይስጡ',
            description: 'ተጨማሪ ልውውጥ ጥያቄዎችን ለመግባት የመጽሐፍ ዝርዝር መግለጫዎችን ያቅርቡ።'
          },
          {
            title: 'በግልጽ ይግባቡ',
            description: 'ከልውውጥ ጓደኞች ጋር ክፍት እና አክብሮት ያለው ግንኙነት ይጠብቁ።'
          }
        ]
      },
      faq: {
        title: 'ተደጋጋሚ ጥያቄዎች',
        items: [
          {
            question: 'መጽሐፍ ልውውጥ ነፃ ነው?',
            answer: 'መሰረታዊ የመጽሐፍ ልውውጥ አገልግሎቶች ሙሉ በሙሉ ነፃ ናቸው። የምናስከፍለው ለፈቃጅ ተጨማሪ ዕድሎች ብቻ ነው።'
          },
          {
            question: 'ደህንነቱ የተጠበቀ የመጽሐፍ ልውውጥ እንዴት ማረጋገጥ እችላለሁ?',
            answer: 'ተጠቃሚ ማረጋገጫ፣ ግምገማ ስርዓቶች፣ እና ደህንነታቸው የተጠበቀ እና ፍትሃዊ የመጽሐፍ ልውውጦችን ለማረጋገጥ መመሪያዎች አሉን።'
          },
          {
            question: 'ምን አይነት መጽሐፎችን ልለዋወጥ እችላለሁ?',
            answer: 'በተለያዩ ዘውጎች ያሉ በጥሩ ሁኔታ ያሉ መጽሐፎችን ሊለዋወጡ ይችላሉ። ልዩ ገደቦችን ለማወቅ የኛን መመሪያዎች ይመልከቱ።'
          }
        ]
      },
      cta: {
        title: 'ለመለዋወጥ ዝግጁ ነዎት?',
        description: 'ማህበረሰባችን ተቀላቀሉ እና የመጽሐፍ ማጋራት ደስታን ያግኙ።',
        button: 'መጀመሪያ ይፈልጉ'
      }
    },
    contact: {
      title: 'ግንኙነት ያድርጉ',
      subtitle: 'ከእርስዎ ለመስማት እንሻለን። መልዕክት ይላኩልን እና በፍጥነት እንመልሳለን።',
      form: {
        name: 'ሙሉ ስም',
        namePlaceholder: 'ሙሉ ስምዎን ያስገቡ',
        email: 'ኢሜይል አድራሻ',
        emailPlaceholder: 'ኢሜይልዎን ያስገቡ (ለምሳሌ፣ temp@tempmail.com)',
        message: 'የእርስዎ መልዕክት',
        messagePlaceholder: 'መልዕክትዎን እዚህ ይጻፉ...',
        submit: 'መልዕክት ላክ'
      },
      info: {
        title: 'የግንኙነት መረጃ',
        email: {
          title: 'ኢሜይል ድጋፍ',
          value: 'support@tebebbookswap.com'
        },
        phone: {
          title: 'ስልክ ቁጥር',
          value: '+251 11 234 5678'
        },
        address: {
          title: 'ቦታችን',
          value: 'አዲስ አበባ፣ ኢትዮጵያ'
        }
      }
    },
    bookSwapForum: {
      title: 'የመጽሐፍ ልውውጥ ፎረም',
      subtitle: 'ከማህበረሰባችን ጋር ተገናኙ፣ ስለ መጽሐፍ ተወያዩ እና ስለ መጽሐፍ ተወያዩ',
      categories: {
        general: {
          title: 'አጠቃላይ ውይይት',
          description: 'ስለ መጽሐፍ ማንኛውንም ነገር ተወያዩ!'
        },
        recommendations: {
          title: 'የመጽሐፍ ምክሮች',
          description: 'ምክሮችን ስለ መጽሐፍ ተወያዩ እና ስለ መጽሐፍ ተወያዩ'
        },
        swapTips: {
          title: 'የልውውጥ ጠቃሚ ምክሮች',
          description: 'ስለ መጽሐፍ ልውውጥ ምርጥ ተሞክሮዎችን ተማሩ'
        }
      },
      posts: {
        general: {
          1: {
            title: 'የ2024 ምርጥ መጽሐፍ',
            author: 'የመጽሐፍ ፍቅረኛ123',
            excerpt: 'በዚህ ዓመት ምን መጽሐፍ በጣም ወደድከዋል?'
          },
          2: {
            title: 'የንባብ ፈተናዎች',
            author: 'ገጽ ተራኪ456',
            excerpt: 'የንባብ ግቦችዎን እና ሂደቱን ስለ መጽሐፍ ተወያዩ'
          }
        },
        recommendations: {
          1: {
            title: 'መነበብ ያለባቸው ምርጥ ፋንታሲ መጽሐፍ',
            author: 'ፋንታሲ ፋን789',
            excerpt: 'ለዚህ ወቅት ምርጥ ፋንታሲ ምክሮች'
          },
          2: {
            title: 'በምሥጢር ዘውግ ውስጥ የተሰወሩ ድንቅ መጽሐፍ',
            author: 'ዳሰሳ ተነባቢ101',
            excerpt: 'ሊነበቡ የሚገቡ ምሥጢራዊ ዘውግ መጽሐፍ'
          }
        },
        swapTips: {
          1: {
            title: 'የመጽሐፍ ሁኔታ መመሪያዎች',
            author: 'ልውውጥ ጌታ',
            excerpt: 'መጽሐፍን ለልውውጥ እንዴት ማዘጋጀት'
          },
          2: {
            title: 'የመግባቢያ ጠቃሚ ምክሮች',
            author: 'ማህበረሰብ ረዳት',
            excerpt: 'ስለ መጽሐፍ ልውውጥ ምርጥ ተሞክሮዎች'
          }
        }
      },
      readMore: 'ተጨማሪ ያንብቡ'
    },
    bookBlog: {
      title: 'የመጽሐፍ ብሎግ',
      subtitle: 'ጥቂት ሃሳቦች፣ ግምገማዎች እና ስነ-ፅሑፋዊ ፈተሻዎች',
      categories: {
        featured: {
          title: 'ምርጥ ፖስቶች',
          description: 'የእኛ ምርጥ የተመከሩ አርዕስቶች'
        },
        reviews: {
          title: 'የመጽሐፍ ግምገማዎች',
          description: 'ስፋት ያላቸው ግምገማዎች ከቅርብ ጊዜ መጽሐፍ'
        },
        authorInterviews: {
          title: 'የደራሲ ቃለ-መጠይቆች',
          description: 'ከተራዳሲዎች ጋር ውይይቶች'
        }
      },
      readMore: 'ሙሉ አርዕስት ያንብቡ'
    },
    communityEvents: {
      title: 'የማህበረሰብ ዝግጅቶች',
      subtitle: 'ተቀላቀሉ፣ ተሳተፉ እና መጽሐፍን አክብሩ',
      categories: {
        upcoming: {
          title: 'ቀጣዮ ዝግጅቶች',
          description: 'ለመጪዎቹ ዝግጅቶች ይጠብቁ'
        },
        past: {
          title: 'ያለፉ ዝግጅቶች',
          description: 'ከቀዳሚ ስብሰባዎቻችን ዋና ነጥቦች'
        },
        virtual: {
          title: 'ምናባዊ ዝግጅቶች',
          description: 'በመስመር ላይ የመጽሐፍ ተዛማጅ ተግባራት'
        }
      },
      viewDetails: 'የዝግጅት ዝርዝሮችን ይመልከቱ'
    },
    bookAmbassadors: {
      title: 'የመጽሐፍ አምባሳደሮች',
      subtitle: 'ስለ ንባብ እና መጽሐፍ ልውውጥ ቅን ተሟጋቶች',
      categories: {
        current: {
          title: 'ወቅታዊ አምባሳደሮች',
          description: 'ከማህበረሰባችን ንቁ ተወካዮች ጋር ይገናኙ'
        },
        featured: {
          title: 'ምርጥ አምባሳደሮች',
          description: 'ምርጥ ማህበረሰብ አባሎችን ማብራራት'
        },
        apply: {
          title: 'አምባሳደር ሁኑ',
          description: 'ስለ ንባብ ተልዕኳችንን ተቀላቀሉ'
        }
      },
      apply: {
        requirementsTitle: 'የአምባሳደር ፍላጎቶች',
        button: 'አሁኑኑ ይመዝገቡ'
      }
    },
    helpCenter: {
      title: 'የእገዛ ማዕከል',
      subtitle: 'እዚህ ነን ለመርዳት',
      categories: {
        accountManagement: {
          title: 'አካውንት እና መገለጫ',
          description: 'የአካውንት ቅንብሮችዎን ያስተዳድሩ፣ መገለጫዎን ያዘምኑ፣ እና የአካውንት ተዛማጅ ችግሮችን ይፈቱ።'
        },
        bookSwapping: {
          title: 'የመጽሐፍ ልውውጥ ሂደት',
          description: 'መጽሐፍ ልውውጥ በውጤታማ ሁኔታ እንዴት መጠየቅ፣ መቀበል፣ እና ማጠናቀቅ እንደሚቻል ይማሩ።'
        },
        troubleshooting: {
          title: 'ችግር መፍታት',
          description: 'የተለመዱ ችግሮች ላይ መፍትሄዎችን ያግኙ እና ፈጣን እገዛ ያግኙ።'
        }
      },
      contactSupport: {
        title: 'ድጋፍ ያግኙ',
        description: 'ተጨማሪ እገዛ ይፈልጋሉ? የድጋፍ ቡድናችን ዝግጁ ነው።',
        email: 'support@tebebbookswap.com',
        emailDescription: 'ለግል እገዛ የድጋፍ ቡድናችንን ኢሜይል ያድርጉ',
        phone: '+251 11 123 4567',
        responseTime: 'የተለመደ የምላሽ ጊዜ: 24-48 ሰዓታት'
      }
    },
    termsAndConditions: {
      title: 'የጠበብ መጽሐፍ ልውውጥ የአገልግሎት ደንቦች',
      lastUpdated: 'መጨረሻ የተሻሻለው: ጃንዋሪ 22, 2024',
      account: {
        title: 'የአካውንት ምዝገባ',
        description: 'አካውንት በመፍጠርዎ፣ ትክክለኛ፣ ወቅታዊ፣ እና ሙሉ መረጃ መስጠትን ይስማማሉ። የአካውንትዎ እና የይለፍ ቃልዎ ሚስጥራዊነት ኃላፊ ናቸው።'
      },
      bookSwapping: {
        title: 'የመጽሐፍ ልውውጥ መመሪያ',
        description: 'ተጠቃሚዎች መጽሐፎች በትክክል መገለጽ፣ በጥሩ ሁኔታ መሆን፣ እና በአክብሮት እና በፍትሃዊ ሁኔታ መለዋወጥ አለባቸው። የመጽሐፍ ሁኔታ ስሕተት በጥብቅ ክልክል ነው።'
      },
      userResponsibilities: {
        title: 'የተጠቃሚ ኃላፊነቶች',
        description: 'ተጠቃሚዎች በሞራል፣ የማህበረሰብ መመሪያዎችን በመከበር፣ አወንታዊ environment ማቋቋም፣ እና በመድረኩ ላይ ጎረጎን፣ አሳፋሪ፣ ወይም ህገ-ወጥ ተግባራትን መቆጠብ አለባቸው።'
      },
      intellectualProperty: {
        title: 'የንብረት መብቶች',
        description: 'በጠበብ መጽሐፍ ልውውጥ ላይ ያሉ ሁሉ ይዘቶች፣ ጽሑፎች፣ ግራፊክስ፣ ሎጎዎች፣ እና የተጠቃሚ ፈጠራ ይዘቶች የንብረት መብት ሕጎች የሚጠብቋቸው ናቸው እና የጠበብ መጽሐፍ ልውውጥ ንብረት ናቸው።'
      },
      limitation: {
        title: 'የኃላፊነት ገደብ',
        description: 'ጠበብ መጽሐፍ ልውውጥ ከመጽሐፍ ልውውጥ ወይም መድረክ አጠቃቀም የሚመጡ ማንኛውንም ቀጥተኛ፣ ተዘዋዋሪ፣ ድንገተኛ፣ ተከታዩ፣ ወይም ልዩ ጉዳቶች ኃላፊ አይደለም።'
      },
      questions: {
        title: 'ጥያቄዎች እና ስጋቶች',
        description: 'ስለ እነዚህ የአገልግሎት ደንቦች ማንኛውንም ጥያቄ ካለዎ፣ የህጋዊ ቡድናችንን ያግኙ።',
        email: 'legal@tebebbookswap.com'
      }
    },
    privacyPolicy: {
      title: 'የግላዊነት ፖሊሲ',
      lastUpdated: 'መጨረሻ የተሻሻለው: ጃንዋሪ 2024',
      sections: [
        {
          title: 'የመረጃ ሰብሳቢ',
          description: 'የመጽሐፍ ልውውጥ፣ የአካውንት አስተዳደር፣ እና የተጠቃሚ ልምድ ማሻሻያ የሚያስፈልጉ የግል መረጃዎችን እንሰበስባለን።'
        },
        {
          title: 'የዳታ አጠቃቀም',
          description: 'የእርስዎ ዳታ የመጽሐፍ ልውውጥን ለማመቻቸት፣ ከእርስዎ ጋር ለመተባበር፣ እና የመድረኩን ተግባራዊነት ለማሻሻል ይውላል።'
        },
        {
          title: 'የዳታ ጥበቃ',
          description: 'ያልተፈቀደ ገቢ፣ ይፋ ማድረግ፣ ወይም ለውጥ ከመጽሐፍ ይዘቶችዎ ለመጠበቅ ጠንካራ የደህንነት እርምጃዎችን ተግባራዊ እናደርጋለን።'
        },
        {
          title: 'ሶስተኛ ወገን ጋር ማጋሪያ',
          description: 'ሕጋዊ ግዴታ ካልሆነ በስተቀር፣ የእርስዎን የግል መረጃ ከእርስዎ ግልጽ ፈቃድ ውጭ ለሶስተኛ ወገን አንሸጥም ወይም አንጋራም።'
        },
        {
          title: 'የተጠቃሚ መብቶች',
          description: 'በማንኛውም ጊዜ የግል መረጃዎን ማግኘት፣ ማረም፣ ወይም ማጥፋት መብት አለዎ።'
        }
      ],
      contactInfo: {
        title: 'የግላዊነት ኃላፊ ያግኙ',
        email: 'privacy@tebebbookswap.com'
      }
    }
  }
};

export default translations;
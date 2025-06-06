'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Star, MapPin, Clock, Gift, Zap, Calendar, Truck, Package, ShoppingCart, Users, Menu, Search, X, ChevronDown, Phone, Mail, Globe } from 'lucide-react'

type FeatureSection = 'crunch-time' | 'weekly-menu' | 'rewards' | 'locations' | 'track-order' | 'bake-home' | 'search' | 'curbside-pickup' | 'real-time-inventory' | 'e-club-signup' | 'all-features' | null

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<FeatureSection>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const featureData = {
    'crunch-time': {
      title: 'Crunch Time Ordering - Panera Bread Innovation',
      subtitle: 'Pre-schedule favorite meals with one-swipe ordering',
      description: 'Revolutionary ordering system that learns your preferences and allows instant reordering of favorite meals. Perfect for busy professionals who need their coffee and breakfast ready exactly when they arrive.',
      features: [
        'One-swipe reordering of favorite combinations',
        'MyPanera member exclusive access',
        'Pre-schedule orders up to 7 days in advance',
        'Smart recommendations based on order history',
        'Integration with calendar for automatic scheduling',
        'Dietary restriction memory and filtering',
        'Nutritional information and calorie tracking',
        'Group ordering for office meetings'
      ],
      stats: {
        'Time Saved': '3-5 minutes per order',
        'Member Satisfaction': '94% positive feedback',
        'Usage Rate': '78% of MyPanera members use this feature',
        'Peak Hours': '7-9 AM and 12-2 PM'
      },
      implementation: 'Built with React Native, Node.js backend, PostgreSQL database, real-time sync with POS systems, and machine learning for preference analysis.'
    },
    'curbside-pickup': {
      title: 'Curbside Pickup - Panera Bread Convenience',
      subtitle: 'Rapid pickup workflow with kiosk parity and personalization',
      description: 'Seamless curbside experience that brings the full Panera ordering experience to your car. With real-time order tracking, personalized recommendations, and contactless pickup options.',
      features: [
        'Real-time GPS arrival detection',
        'Contactless payment and pickup',
        'Kiosk-level menu customization',
        'Personalized recommendations based on weather',
        'Order modification until preparation starts',
        'Special dietary accommodations',
        'Family order coordination',
        'Estimated ready time with 95% accuracy',
        'Dedicated curbside parking spots',
        'Integration with car infotainment systems'
      ],
      stats: {
        'Average Pickup Time': '2.3 minutes from arrival',
        'Order Accuracy': '98.7% correct orders',
        'Customer Satisfaction': '4.9/5 stars',
        'Daily Curbside Orders': '45,000+ nationwide'
      },
      implementation: 'iOS/Android apps with geofencing, Node.js backend, Redis for real-time tracking, integration with store POS and kitchen display systems.'
    },
    'weekly-menu': {
      title: 'Weekly Menu Rotation - Crumbl Cookies Magic',
      subtitle: 'Auto-publishing Tuesday 6 PM ET with flavor scores',
      description: 'Dynamic menu system that creates anticipation and drives weekly engagement. Every Tuesday at 6 PM ET, new cookie flavors are revealed with TikTok-style presentations and community voting.',
      features: [
        'Automatic Tuesday 6 PM ET menu publishing',
        'Franchise dashboard integration',
        'Flavor scoring and rating system',
        'TikTok clip embeds for each cookie reveal',
        'Community voting and predictions',
        'Limited-time exclusive flavors',
        'Nutritional information for each cookie',
        'Allergen warnings and dietary labels',
        'Inventory tracking per location',
        'Pre-order system for popular flavors'
      ],
      stats: {
        'Weekly Engagement': '340% increase every Tuesday',
        'Social Media Reach': '2.3M views per menu reveal',
        'Pre-orders': '67% of weekly sales happen on Tuesday-Wednesday',
        'Flavor Ratings': 'Average 4.7/5 stars across all locations'
      },
      implementation: 'Next.js frontend, Express.js API, MongoDB for menu data, Redis for caching, integration with TikTok API, real-time WebSocket updates.'
    },
    'real-time-inventory': {
      title: 'Real-time Inventory - Crumbl Cookies Live Updates',
      subtitle: 'Live store inventory tracking with TikTok clip embeds',
      description: 'Revolutionary inventory system that shows exactly what\'s available at each location in real-time, with TikTok-style videos of cookies being made and sold throughout the day.',
      features: [
        'Live inventory counts updated every 30 seconds',
        'TikTok-style video clips of cookie production',
        'Sold-out notifications with restock estimates',
        'Reserve cookies for pickup within 2 hours',
        'Popular flavor prediction algorithms',
        'Multi-location inventory comparison',
        'Historical availability patterns',
        'Staff-generated behind-the-scenes content',
        'Customer flavor request submissions',
        'Limited batch size announcements'
      ],
      stats: {
        'Update Frequency': 'Every 30 seconds',
        'Accuracy Rate': '99.2% inventory precision',
        'Video Engagement': '156% higher than static images',
        'Reservation Success': '94% pickup rate for reserved items'
      },
      implementation: 'WebSocket connections, MongoDB for inventory data, TikTok API integration, machine learning for demand prediction, mobile-first responsive design.'
    },
    'rewards': {
      title: 'Bundtastic Rewards - Nothing Bundt Cakes Loyalty',
      subtitle: 'Tiered birthday gifts and multi-location stock checker',
      description: 'Comprehensive loyalty program with tiered rewards, birthday celebrations, and cross-location inventory management. Members earn points for every purchase and unlock exclusive perks.',
      features: [
        'Tiered membership levels (Bronze, Silver, Gold, Platinum)',
        'Birthday month special offers and free bundtlets',
        'Multi-location stock checker and reservation system',
        'Points-based reward system (1 point = $1 spent)',
        'Exclusive member-only flavors and decorations',
        'Family account linking for shared rewards',
        'Corporate catering discounts and bulk ordering',
        'Surprise and delight random rewards',
        'Referral bonuses for bringing new members',
        'Seasonal celebration packages'
      ],
      stats: {
        'Member Retention': '89% annual retention rate',
        'Average Spend Increase': '43% higher than non-members',
        'Birthday Redemption': '76% of members redeem birthday offers',
        'Cross-location Usage': '52% shop at multiple locations'
      },
      implementation: 'Vue.js frontend, Django REST API, PostgreSQL with Redis caching, Stripe for payments, SendGrid for email campaigns, analytics dashboard.'
    },
    'e-club-signup': {
      title: 'E-club Signup - Nothing Bundt Cakes Enrollment',
      subtitle: 'Pop-up loyalty enrollment with multi-location inventory checking',
      description: 'Streamlined loyalty program enrollment that captures customer information while providing immediate value through inventory checking across multiple locations and instant welcome offers.',
      features: [
        'One-click social media signup integration',
        'Instant welcome offer upon enrollment',
        'Multi-location cake availability checker',
        'Birthday notification setup with reminders',
        'Preferred location selection and updates',
        'Email/SMS communication preferences',
        'Family member addition for group rewards',
        'Automatic tier progression tracking',
        'Corporate account linking for businesses',
        'Special occasion reminder setup'
      ],
      stats: {
        'Signup Conversion': '73% of visitors join within first visit',
        'Welcome Offer Redemption': '89% redeem within 30 days',
        'Member Lifetime Value': '3.2x higher than non-members',
        'Email Open Rate': '47% for member communications'
      },
      implementation: 'React frontend with modal system, Node.js backend, MongoDB for member data, OAuth integration, automated email workflows with Mailchimp.'
    },
    'locations': {
      title: 'Smart Location Finder - Krispy Kreme Network',
      subtitle: 'Real-time Hot Light status and store information',
      description: 'Advanced location finder with real-time donut availability, Hot Light status, drive-thru wait times, and detailed store information including amenities and special services.',
      features: [
        'Real-time Hot Light status indicators',
        'Drive-thru wait time estimates',
        'Store amenities and services listing',
        'Wheelchair accessibility information',
        'Parking availability and cost information',
        'Public transportation directions',
        'Store-specific menu items and specialties',
        'Operating hours with holiday schedules',
        'Phone ordering and reservation system',
        'Catering services availability by location'
      ],
      stats: {
        'Location Accuracy': '99.7% GPS precision',
        'Hot Light Accuracy': '96% real-time status accuracy',
        'User Satisfaction': '4.8/5 stars for location finder',
        'Daily Usage': '125K location searches per day'
      },
      implementation: 'React with Google Maps API, real-time WebSocket connections, geolocation services, store management system integration.'
    },
    'track-order': {
      title: 'Live Delivery Tracking - Insomnia Cookies 24/7',
      subtitle: 'Real-time tracking until 3 AM with driver updates',
      description: 'Industry-leading delivery tracking system operating until 3 AM, perfect for late-night cravings. Real-time GPS tracking, driver communication, and delivery time predictions.',
      features: [
        '24/7 delivery service until 3 AM',
        'Real-time GPS tracking of delivery drivers',
        'SMS and push notification updates',
        'Driver photo and contact information',
        'Delivery window predictions with accuracy',
        'Contact-free delivery options',
        'Special delivery instructions and notes',
        'Order modification during preparation',
        'Live chat support during delivery',
        'Delivery photo confirmation upon completion'
      ],
      stats: {
        'Delivery Accuracy': '97% on-time delivery rate',
        'Late Night Orders': '34% of orders after 10 PM',
        'Customer Satisfaction': '4.9/5 delivery experience rating',
        'Average Delivery Time': '28 minutes city-wide'
      },
      implementation: 'React Native app, Node.js backend, MongoDB, real-time GPS tracking, Twilio for SMS, Socket.io for live updates.'
    },
    'bake-home': {
      title: 'Bake at Home Kits - Porto\'s Bakery Nationwide',
      subtitle: 'Nationwide shipping of authentic Cuban pastry ingredients',
      description: 'Premium baking kits that bring Porto\'s authentic Cuban bakery experience to your home kitchen. Complete with ingredients, tools, and step-by-step video tutorials from master bakers.',
      features: [
        'Authentic Cuban pastry recipes and ingredients',
        'All-inclusive baking kits with tools',
        'Step-by-step video tutorials from master bakers',
        'Nationwide shipping with temperature control',
        'Difficulty levels from beginner to advanced',
        'Family-size and individual portion options',
        'Seasonal and holiday-themed kits',
        'Gluten-free and vegan alternatives available',
        'Live virtual baking classes with chefs',
        'Community sharing platform for results'
      ],
      stats: {
        'Shipping Coverage': '48 contiguous states',
        'Success Rate': '92% successful home baking attempts',
        'Customer Satisfaction': '4.8/5 stars for kit quality',
        'Repeat Purchase': '68% order multiple kits per year'
      },
      implementation: 'E-commerce platform built with Shopify Plus, video streaming with Vimeo, inventory management, cold-chain logistics integration.'
    },
    'all-features': {
      title: 'All 12 Revolutionary Features - Complete Platform Overview',
      subtitle: 'Every innovation from America\'s top 6 bakery chains',
      description: 'Comprehensive view of all 12 features that make American Bakery Hub the most advanced bakery platform in the industry, combining the best innovations from Panera, Crumbl, Nothing Bundt Cakes, Krispy Kreme, Insomnia Cookies, and Porto\'s.',
      features: [
        'Crunch Time Ordering - Panera\'s one-swipe meal scheduling',
        'Curbside Pickup - Panera\'s contactless car service',
        'Weekly Menu Rotation - Crumbl\'s Tuesday 6 PM reveals',
        'Real-time Inventory - Crumbl\'s live stock with TikTok',
        'Bundtastic Rewards - Nothing Bundt Cakes\' tiered loyalty',
        'E-club Signup - Nothing Bundt Cakes\' instant enrollment',
        'Smart Location Finder - Krispy Kreme\'s Hot Light network',
        'Hot Now Alerts - Krispy Kreme\'s fresh donut notifications',
        'Live Delivery Tracking - Insomnia\'s 24/7 GPS system',
        'Late Night Service - Insomnia\'s 3 AM delivery',
        'Bake at Home Kits - Porto\'s nationwide shipping',
        'Virtual Baking Classes - Porto\'s live chef instruction'
      ],
      stats: {
        'Combined Features': '12 revolutionary innovations',
        'Total Monthly Visits': '24.95M across all chains',
        'Customer Satisfaction': '4.8/5 average across all features',
        'Technology Stack': '8 different tech implementations'
      },
      implementation: 'Microservices architecture combining React, Vue.js, React Native, Node.js, Django, PostgreSQL, MongoDB, Redis, and extensive API integrations.'
    }
  }

  const handleFeatureClick = (feature: FeatureSection) => {
    setActiveSection(activeSection === feature ? null : feature)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setActiveSection('search')
  }

  const searchResults = searchQuery ? Object.entries(featureData).filter(([key, data]) => 
    data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
  ) : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Enhanced Header with Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🇺🇸</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">American Bakery Hub</h1>
                <p className="text-sm text-gray-600">Top 6 USA Bakery Chains United</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-green-700 hover:bg-green-50"
                onClick={() => handleFeatureClick('crunch-time')}
              >
                <Zap className="h-4 w-4 mr-1" />
                Crunch Time Order
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-pink-700 hover:bg-pink-50"
                onClick={() => handleFeatureClick('weekly-menu')}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Weekly Menu
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-yellow-700 hover:bg-yellow-50"
                onClick={() => handleFeatureClick('rewards')}
              >
                <Gift className="h-4 w-4 mr-1" />
                Rewards
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-red-700 hover:bg-red-50"
                onClick={() => handleFeatureClick('locations')}
              >
                <MapPin className="h-4 w-4 mr-1" />
                Locations
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-purple-700 hover:bg-purple-50"
                onClick={() => handleFeatureClick('track-order')}
              >
                <Truck className="h-4 w-4 mr-1" />
                Track Order
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-orange-700 hover:bg-orange-50"
                onClick={() => handleFeatureClick('bake-home')}
              >
                <Package className="h-4 w-4 mr-1" />
                Bake at Home
              </Button>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="hidden sm:flex"
                onClick={() => {
                  const query = prompt('Search American Bakery Hub features:')
                  if (query) handleSearch(query)
                }}
              >
                <Search className="h-4 w-4 mr-1" />
                Search
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-4 w-4" />
              </Button>
              <Button>Get Started</Button>
              
              {/* Mobile menu button */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="lg:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-green-700" onClick={() => handleFeatureClick('crunch-time')}>
                <Zap className="h-4 w-4 mr-2" />
                Crunch Time Order
              </Button>
              <Button variant="ghost" className="w-full justify-start text-pink-700" onClick={() => handleFeatureClick('weekly-menu')}>
                <Calendar className="h-4 w-4 mr-2" />
                Weekly Menu
              </Button>
              <Button variant="ghost" className="w-full justify-start text-yellow-700" onClick={() => handleFeatureClick('rewards')}>
                <Gift className="h-4 w-4 mr-2" />
                Rewards
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-700" onClick={() => handleFeatureClick('locations')}>
                <MapPin className="h-4 w-4 mr-2" />
                Locations
              </Button>
              <Button variant="ghost" className="w-full justify-start text-purple-700" onClick={() => handleFeatureClick('track-order')}>
                <Truck className="h-4 w-4 mr-2" />
                Track Order
              </Button>
              <Button variant="ghost" className="w-full justify-start text-orange-700" onClick={() => handleFeatureClick('bake-home')}>
                <Package className="h-4 w-4 mr-2" />
                Bake at Home
              </Button>
            </div>
          </div>
        )}

        {/* Secondary Navigation Bar */}
        <div className="bg-gray-50 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <span className="text-gray-700">Late Night Delivery until 3 AM</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-gray-700">Fresh Menu Updates Every Tuesday 6 PM</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleFeatureClick('rewards')}
                >
                  <Users className="h-4 w-4 mr-1" />
                  Join Rewards
                </Button>
                <Button variant="outline" size="sm">
                  Download App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Active Feature Section */}
      {activeSection && activeSection !== 'search' && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">{featureData[activeSection].title}</h2>
              <Button variant="ghost" onClick={() => setActiveSection(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <p className="text-xl text-gray-600 mb-6">{featureData[activeSection].subtitle}</p>
                <p className="text-gray-700 mb-6">{featureData[activeSection].description}</p>
                
                <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                  {featureData[activeSection].features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold mb-4">Technical Implementation:</h3>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{featureData[activeSection].implementation}</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Performance Stats</h3>
                {Object.entries(featureData[activeSection].stats).map(([key, value]) => (
                  <div key={key} className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">{key}</span>
                      <span className="text-sm font-medium text-gray-900">{value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search Results Section */}
      {activeSection === 'search' && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Search Results for &quot;{searchQuery}&quot;</h2>
              <Button variant="ghost" onClick={() => setActiveSection(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {searchResults.length > 0 ? (
              <div className="space-y-6">
                {searchResults.map(([key, data]) => (
                  <div key={key} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                    <p className="text-gray-600 mb-4">{data.description}</p>
                    <Button onClick={() => handleFeatureClick(key as FeatureSection)}>
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No results found for &quot;{searchQuery}&quot;. Try searching for features like &quot;rewards&quot;, &quot;tracking&quot;, or &quot;menu&quot;.</p>
            )}
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            America&apos;s Premier
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Bakery Experience
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Combining the signature features from America&apos;s top 6 bakery chains: 
            Panera Bread, Crumbl Cookies, Nothing Bundt Cakes, Krispy Kreme, Insomnia Cookies, and Porto&apos;s Bakery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg"
              onClick={() => handleFeatureClick('all-features')}
            >
              Explore Features
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg"
              onClick={() => handleFeatureClick('locations')}
            >
              Find Locations
            </Button>
          </div>

          {/* Quick Action Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-16">
            <Button 
              className="bg-green-600 hover:bg-green-700 h-16 flex flex-col items-center justify-center"
              onClick={() => handleFeatureClick('crunch-time')}
            >
              <Zap className="h-5 w-5 mb-1" />
              <span className="text-xs">Crunch Time</span>
            </Button>
            <Button 
              className="bg-pink-600 hover:bg-pink-700 h-16 flex flex-col items-center justify-center"
              onClick={() => handleFeatureClick('weekly-menu')}
            >
              <Calendar className="h-5 w-5 mb-1" />
              <span className="text-xs">Weekly Menu</span>
            </Button>
            <Button 
              className="bg-yellow-600 hover:bg-yellow-700 h-16 flex flex-col items-center justify-center"
              onClick={() => handleFeatureClick('rewards')}
            >
              <Gift className="h-5 w-5 mb-1" />
              <span className="text-xs">Rewards</span>
            </Button>
            <Button 
              className="bg-red-600 hover:bg-red-700 h-16 flex flex-col items-center justify-center"
              onClick={() => handleFeatureClick('locations')}
            >
              <MapPin className="h-5 w-5 mb-1" />
              <span className="text-xs">Find Stores</span>
            </Button>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 h-16 flex flex-col items-center justify-center"
              onClick={() => handleFeatureClick('track-order')}
            >
              <Truck className="h-5 w-5 mb-1" />
              <span className="text-xs">Track Order</span>
            </Button>
            <Button 
              className="bg-orange-600 hover:bg-orange-700 h-16 flex flex-col items-center justify-center"
              onClick={() => handleFeatureClick('bake-home')}
            >
              <Package className="h-5 w-5 mb-1" />
              <span className="text-xs">Ship Home</span>
            </Button>
          </div>

          {/* Brand Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => handleFeatureClick('crunch-time')}>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🥖</span>
              </div>
              <h3 className="font-semibold text-gray-900">Panera Bread</h3>
              <p className="text-sm text-gray-600">9.6M monthly visits</p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => handleFeatureClick('weekly-menu')}>
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🍪</span>
              </div>
              <h3 className="font-semibold text-gray-900">Crumbl Cookies</h3>
              <p className="text-sm text-gray-600">8.5M monthly visits</p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => handleFeatureClick('rewards')}>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎂</span>
              </div>
              <h3 className="font-semibold text-gray-900">Nothing Bundt Cakes</h3>
              <p className="text-sm text-gray-600">3.2M monthly visits</p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => handleFeatureClick('locations')}>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🍩</span>
              </div>
              <h3 className="font-semibold text-gray-900">Krispy Kreme</h3>
              <p className="text-sm text-gray-600">1.8M monthly visits</p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => handleFeatureClick('track-order')}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌙</span>
              </div>
              <h3 className="font-semibold text-gray-900">Insomnia Cookies</h3>
              <p className="text-sm text-gray-600">1.4M monthly visits</p>
            </div>
            
            <div className="text-center cursor-pointer hover:scale-105 transition-transform" onClick={() => handleFeatureClick('bake-home')}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🥧</span>
              </div>
              <h3 className="font-semibold text-gray-900">Porto&apos;s Bakery</h3>
              <p className="text-sm text-gray-600">0.55M monthly visits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Top 2 Features from Each Chain
            </h3>
            <p className="text-lg text-gray-600">
              The most innovative and beloved features, now in one platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Panera Features */}
            <div 
              className="bg-green-50 rounded-xl p-6 border border-green-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleFeatureClick('crunch-time')}
            >
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-green-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Crunch Time Ordering</h4>
              </div>
              <p className="text-gray-600 mb-3">Pre-schedule favorite meals with one-swipe ordering for MyPanera members</p>
              <span className="text-sm text-green-600 font-medium">From Panera Bread</span>
            </div>

            <div 
              className="bg-green-50 rounded-xl p-6 border border-green-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleFeatureClick('curbside-pickup')}
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-green-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Curbside Pickup</h4>
              </div>
              <p className="text-gray-600 mb-3">Rapid pickup workflow with kiosk parity and personalization</p>
              <span className="text-sm text-green-600 font-medium">From Panera Bread</span>
            </div>

            {/* Crumbl Features */}
            <div 
              className="bg-pink-50 rounded-xl p-6 border border-pink-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleFeatureClick('weekly-menu')}
            >
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-pink-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Weekly Menu Rotation</h4>
              </div>
              <p className="text-gray-600 mb-3">Auto-publishing Tuesday 6 PM ET with flavor scores to franchise dashboards</p>
              <span className="text-sm text-pink-600 font-medium">From Crumbl Cookies</span>
            </div>

            <div 
              className="bg-pink-50 rounded-xl p-6 border border-pink-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleFeatureClick('real-time-inventory')}
            >
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-pink-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Real-time Inventory</h4>
              </div>
              <p className="text-gray-600 mb-3">Live store inventory tracking with TikTok clip embeds</p>
              <span className="text-sm text-pink-600 font-medium">From Crumbl Cookies</span>
            </div>

            {/* Nothing Bundt Cakes Features */}
            <div 
              className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleFeatureClick('rewards')}
            >
              <div className="flex items-center mb-4">
                <Gift className="h-6 w-6 text-yellow-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Bundtastic Rewards</h4>
              </div>
              <p className="text-gray-600 mb-3">In-app loyalty with tiered birthday gifts and multi-location stock checker</p>
              <span className="text-sm text-yellow-600 font-medium">From Nothing Bundt Cakes</span>
            </div>

            <div 
              className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleFeatureClick('e-club-signup')}
            >
              <div className="flex items-center mb-4">
                <Star className="h-6 w-6 text-yellow-600 mr-2" />
                <h4 className="font-semibold text-gray-900">E-club Signup</h4>
              </div>
              <p className="text-gray-600 mb-3">Pop-up loyalty enrollment with multi-location inventory checking</p>
              <span className="text-sm text-yellow-600 font-medium">From Nothing Bundt Cakes</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="px-8"
              onClick={() => handleFeatureClick('all-features')}
            >
              View All 12 Features
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">24.95M</div>
              <div className="text-gray-600">Combined Monthly Visits</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-gray-600">Premium Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">12</div>
              <div className="text-gray-600">Revolutionary Features</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">1</div>
              <div className="text-gray-600">Unified Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">American Bakery Hub</h4>
              <p className="text-gray-400 mb-4">
                Uniting the best of America&apos;s bakery innovation in one platform
              </p>
              <p className="text-gray-500 text-sm">
                Ready for API integration with n8n workflows and MCP protocols
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Features</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => handleFeatureClick('crunch-time')} className="hover:text-white">Crunch Time Ordering</button></li>
                <li><button onClick={() => handleFeatureClick('weekly-menu')} className="hover:text-white">Weekly Menu Rotation</button></li>
                <li><button onClick={() => handleFeatureClick('rewards')} className="hover:text-white">Bundtastic Rewards</button></li>
                <li><button onClick={() => handleFeatureClick('track-order')} className="hover:text-white">Live Order Tracking</button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Bakery Chains</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Panera Bread (9.6M visits)</li>
                <li>Crumbl Cookies (8.5M visits)</li>
                <li>Nothing Bundt Cakes (3.2M visits)</li>
                <li>Krispy Kreme (1.8M visits)</li>
                <li>Insomnia Cookies (1.4M visits)</li>
                <li>Porto&apos;s Bakery (0.55M visits)</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Contact</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  1-800-BAKERY-1
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@americanbakery.hub
                </li>
                <li className="flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  americanbakery.hub
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import campaignsData from '../data/campaigns.json';
import { PageTitle } from '../hooks/useTitle';

const Home = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const bannerSlides = [
    {
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=600&fit=crop&crop=center",
      title: "Donate Winter Clothing",
      subtitle: "Your donation can save lives across Bangladesh"
    },
    {
      image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&h=600&fit=crop&crop=center",
      title: "Make a Difference Today",
      subtitle: "Join thousands helping those in need"
    },
    {
      image: "https://unsplash.com/photos/woman-in-red-hijab-sitting-on-brown-wooden-bench-3LAWAWKFZ4s",
      title: "Winter Warmth for All",
      subtitle: "Help vulnerable communities stay warm this winter"
    },
    {
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1200&h=600&fit=crop&crop=center",
      title: "Together We Can",
      subtitle: "Your support makes a real impact"
    }
  ];

  return (
    <>
      <PageTitle title="Home" description="Winter Donation Bangladesh - Help vulnerable communities stay warm this winter by donating clothing across all divisions." />
      <div>
      {/* Banner Section */}
      <section className="h-96">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="h-full"
        >
          {bannerSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero h-full" style={{ backgroundImage: `url(${slide.image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{slide.title}</h1>
                    <p className="mb-5 text-lg">{slide.subtitle}</p>
                    <Link to="/campaigns" className="btn btn-primary btn-lg">Donate Now</Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* About Section */}
      <section className="py-16 bg-base-200" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About Our Mission</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Winter Donation Bangladesh connects generous donors with vulnerable communities across the country. 
              Every winter, thousands of people struggle to stay warm. Together, we can change that.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">👕</div>
              <h3 className="text-xl font-bold mb-2">1. Choose Campaign</h3>
              <p>Browse active donation campaigns across Bangladesh divisions</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-2">2. Fill Donation Form</h3>
              <p>Specify items, quantity, and pickup location</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">3. We Collect</h3>
              <p>Our volunteers will reach your location for collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-base-200" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          <div className="stats shadow w-full">
            <div className="stat place-items-center">
              <div className="stat-figure text-primary">
                <div className="text-4xl">👨‍👩‍👧‍👦</div>
              </div>
              <div className="stat-title">Families Helped</div>
              <div className="stat-value text-primary">5,000+</div>
              <div className="stat-desc">Across Bangladesh</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-figure text-secondary">
                <div className="text-4xl">👕</div>
              </div>
              <div className="stat-title">Items Donated</div>
              <div className="stat-value text-secondary">25,000+</div>
              <div className="stat-desc">Winter clothing items</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-figure text-accent">
                <div className="text-4xl">🎯</div>
              </div>
              <div className="stat-title">Active Campaigns</div>
              <div className="stat-value text-accent">6</div>
              <div className="stat-desc">Running campaigns</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-figure text-info">
                <div className="text-4xl">🤝</div>
              </div>
              <div className="stat-title">Volunteers</div>
              <div className="stat-value text-info">200+</div>
              <div className="stat-desc">Active volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 bg-base-200" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Campaigns</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {campaignsData.slice(0, 3).map(campaign => (
              <div key={campaign.id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img src={campaign.image} alt={campaign.title} className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg">{campaign.title}</h3>
                  <p className="text-sm">{campaign.description.substring(0, 100)}...</p>
                  <div className="badge badge-secondary">{campaign.division}</div>
                  <div className="card-actions justify-end">
                    <Link to={`/campaign/${campaign.id}`} className="btn btn-primary btn-sm">Donate</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/campaigns" className="btn btn-outline">View All Campaigns</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16" data-aos="fade-up">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8">Join thousands of donors helping vulnerable communities stay warm this winter</p>
          <Link to="/campaigns" className="btn btn-primary btn-lg">Start Donating</Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
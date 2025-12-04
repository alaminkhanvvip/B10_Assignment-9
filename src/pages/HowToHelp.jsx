const HowToHelp = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">How to Help</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">🎯 What We Need</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Winter jackets and coats</li>
                <li>Warm blankets</li>
                <li>Sweaters and hoodies</li>
                <li>Scarves and gloves</li>
                <li>Warm socks</li>
                <li>Children's winter clothing</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">📍 Collection Points</h2>
              <ul className="space-y-2">
                <li><strong>Dhaka:</strong> Dhanmondi Community Center</li>
                <li><strong>Chittagong:</strong> Agrabad Commercial Area</li>
                <li><strong>Sylhet:</strong> Zindabazar Main Road</li>
                <li><strong>Rangpur:</strong> Central Bus Terminal</li>
                <li><strong>Rajshahi:</strong> University Area</li>
                <li><strong>Khulna:</strong> Shipyard Road</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title">🚀 How It Works</h2>
            <div className="steps steps-vertical lg:steps-horizontal">
              <div className="step step-primary">Browse Campaigns</div>
              <div className="step step-primary">Choose Division</div>
              <div className="step step-primary">Fill Donation Form</div>
              <div className="step step-primary">Schedule Pickup</div>
              <div className="step step-primary">Make Impact</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">🌍 Supported Divisions</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="badge badge-lg badge-primary">Dhaka</div>
              <div className="badge badge-lg badge-secondary">Chittagong</div>
              <div className="badge badge-lg badge-accent">Sylhet</div>
              <div className="badge badge-lg badge-neutral">Rangpur</div>
              <div className="badge badge-lg badge-info">Rajshahi</div>
              <div className="badge badge-lg badge-success">Khulna</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/campaigns" className="btn btn-primary btn-lg">Start Donating Now</a>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
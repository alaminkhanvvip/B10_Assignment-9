const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Donate</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#" className="text-2xl">📧</a>
          <a href="#" className="text-2xl">📱</a>
          <a href="#" className="text-2xl">🌐</a>
        </div>
      </nav>
      <aside className="text-center mt-4">
        <p>Copyright © 2024 - Winter Clothing Donation Bangladesh</p>
        <p>Contact: info@winterdonation.org | +880-1234-567890</p>
      </aside>
    </footer>
  );
};

export default Footer;
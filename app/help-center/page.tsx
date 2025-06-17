const HelpCenterPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-8 text-center">Help Center</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p>
          Welcome to the Help Center! Here you'll find resources to help you get started and make the most of our
          platform.
        </p>
        <ul>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Account Setup Guide
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Understanding the Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Frequently Asked Questions
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
        <p>Having trouble? Check out these common issues and their solutions:</p>
        <ul>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Login Problems
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Payment Issues
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Technical Difficulties
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <p>If you can't find the answer you're looking for, please contact us:</p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:hello@weareconnected.io" className="text-blue-500 hover:underline">
              hello@weareconnected.io
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default HelpCenterPage

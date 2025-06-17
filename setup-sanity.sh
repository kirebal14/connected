# Install Sanity CLI globally
npm install -g @sanity/cli

# Create new Sanity project
sanity init

# Follow the prompts:
# - Project name: "Connected Website CMS"
# - Dataset: "production"
# - Template: "Clean project with no predefined schemas"

# Navigate to the created directory
cd connected-website-cms

# Install dependencies
npm install

# Start the studio locally
npm run dev

# Deploy to get your online studio
sanity deploy

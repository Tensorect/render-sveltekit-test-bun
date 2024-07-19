FROM oven/bun:1

WORKDIR /app

# Copy package.json and bun.lockb (if it exists)
COPY package.json bun.lockb* ./

# Install all dependencies (including devDependencies)
RUN bun install

# Copy the rest of the application
COPY . .

# Expose the port your app runs on
EXPOSE 3000
EXPOSE 4000

# Start the application
CMD ["bun", "start"]

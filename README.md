# Mars Travel Project

Explore Mars through practical applications of technology, leveraging WebAssembly, Rust, and NASA JPL SPICE kernels. This project is designed to simulate and provide insights into Mars-Earth travel, celestial mechanics, and space exploration dynamics.

## Features
- **WebAssembly Integration**: High-performance computations running directly in the browser.
- **Rust Backend**: Robust and efficient programming for accurate calculations.
- **NASA JPL SPICE Kernels**: Precise astronomical data for planetary positions and ephemerides.
- **Mars-Earth Distance Tracking**: Real-time updates on the current distance between Mars and Earth.
- **Open-Source Collaboration**: Built for enthusiasts and contributors from around the world.

## Technology Stack
- **Programming Languages**: Rust, JavaScript/TypeScript.
- **Web Framework**: Gatsby (React-based).
- **SPICE Toolkit**: NASA JPL SPICE Kernels for astronomical computations.
- **Build Tools**: Turbo and Yarn for monorepo management.
- **Data Visualization**: Interactive charts using modern libraries.

## Getting Started

### Prerequisites
- [Rust](https://www.rust-lang.org/) installed.
- [Node.js](https://nodejs.org/) with Yarn.
- [NASA SPICE Toolkit](https://naif.jpl.nasa.gov/naif/toolkit.html).

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mars-travel-project.git
   cd mars-travel-project
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Compile the Rust code to WebAssembly:
   ```bash
   wasm-pack build --target web
   ```

4. Start the development server:
   ```bash
   yarn start
   ```

5. Access the application in your browser at `http://localhost:8000`.

### SPICE Data Integration
1. Place the SPICE kernel files in the `spice-data` directory.
2. Ensure proper file permissions for access during runtime.

## Usage
- View real-time Mars-Earth distance.
- Explore planetary trajectories.
- Simulate travel times and orbital dynamics.

## Contributing
We welcome contributions from developers, space enthusiasts, and anyone passionate about astronomy! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- NASA Jet Propulsion Laboratory for the SPICE Toolkit.
- Rust and WebAssembly communities for tools and inspiration.

## Contact
Feel free to reach out with questions, suggestions, or feedback:
- **GitHub Issues**: Submit issues or feature requests.
- **Email**: sagar474+mars@hotmail.com

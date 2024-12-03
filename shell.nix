{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs  # Node.js (required for Angular CLI)
    pkgs.yarn    # Yarn (optional, for managing dependencies)
    pkgs.git     # Git (optional, for version control)
  ];

  shellHook = ''
    echo "Welcome to your Angular development environment!"
    echo "Run 'npm install -g @angular/cli' to install Angular CLI if not already installed."
  '';
}

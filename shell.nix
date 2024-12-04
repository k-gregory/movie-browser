{ pkgs ? import <nixpkgs> {

  config.android_sdk.accept_license = true;
  config.allowUnfreePredicate = pkg: builtins.elem (pkgs.lib.getName pkg) [ "android-sdk-cmdline-tools" "android-sdk-tools" "android-studio-stable" ];


    overlays = [
    (self: super: {
      androidPkgs_8_0 = super.androidenv.composeAndroidPackages {
        platformVersions = [ "26" ];
        abiVersions = [ "x86" "x86_64"];
      };
    })
  ];

} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs  # Node.js (required for Angular CLI)
    pkgs.yarn    # Yarn (optional, for managing dependencies)
    pkgs.git     # Git (optional, for version control)
    pkgs.python3 # For built-in web server
     
    #pkgs.androidsdk
    pkgs.androidPkgs_8_0.androidsdk
    pkgs.android-studio

    pkgs.libuuid
  ];

  shellHook = ''
    echo "Welcome to your Angular development environment!"
    echo "Run 'npm install -g @angular/cli' to install Angular CLI if not already installed."
  '';
}

{ pkgs, ... }: {
    channel = "stable-24.05";
    packages = [
        pkgs.nodejs_20
    ];
    idx = {
        extensions = [
            "GraphLens.graphlens"
        ];
        workspace = {
            onCreate = {
                npm-install = "npm install --prefix demo";
            };
        };
    };
}
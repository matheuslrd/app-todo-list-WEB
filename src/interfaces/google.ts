export interface GoogleBasicProfile {
  getId(): string;
  getName(): string;
  getImageUrl(): string;
  getEmail(): string;
}

export interface GoogleUser {
  getBasicProfile(): GoogleBasicProfile;
}


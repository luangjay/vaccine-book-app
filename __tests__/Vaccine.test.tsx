import HospitalCatalog from "@/components/HospitalCatalog";
import { type Hospital } from "@/types/hospital";
import { render, screen, waitFor } from "@testing-library/react";

const mockResult: Promise<Hospital[]> = Promise.resolve([
  {
    id: "652019a192684197ff380c22",
    name: "Chulalongkorn Hospital",
    address: "1873 Rama IV Rd",
    district: "Pathum Wan",
    province: "Bangkok",
    postalcode: "10330",
    tel: "026494000",
    picture: "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
  },
  {
    id: "652019d592684197ff380c25",
    name: "Rajavithi Hospital",
    address: "2 Phaya Thai Rd, Thung Phaya Thai",
    district: "Ratchathewi",
    province: "Bangkok",
    postalcode: "10400",
    tel: "022062900",
    picture: "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
  },
  {
    id: "65201a0092684197ff380c28",
    name: "Thammasat University Hospital",
    address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
    district: "Khlong Luang",
    province: "Pathum Thani",
    postalcode: "12120",
    tel: "029269999",
    picture: "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
  },
]);

describe("HospitalCatalog", () => {
  it("should have correct number of hospital images", async () => {
    const hospitalCatalog = await HospitalCatalog({
      hospitalsPromise: mockResult,
    });
    render(hospitalCatalog);
    await waitFor(() => {
      const hospitalImages = screen.queryAllByRole("img");
      expect(hospitalImages.length).toBe(3);
    });
  });
});

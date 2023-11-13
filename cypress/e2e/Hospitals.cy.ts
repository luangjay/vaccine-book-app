describe("Hospitals", () => {
  it("should do the assignment", () => {
    // User visits home page
    cy.visit("/");

    // Check if a video element exists and is playing
    cy.get("video[id='videoPlayer']", { timeout: 20000 }).should("exist");
    cy.get("video[id='videoPlayer']")
      .invoke("prop", "paused")
      .should("eq", false);

    // Wait for 5 seconds
    cy.wait(5000);

    // Click on the pause video button
    cy.get("button[id='pauseVideo']").should("exist");
    cy.get("button[id='pauseVideo']").click();
    cy.get("video[id='videoPlayer']")
      .invoke("prop", "paused")
      .should("eq", true);

    // Click on the button on the bottom-right of the banner
    cy.get("button[id='toHospital']").should("exist");
    cy.get("button[id='toHospital']").click();

    // Check if there exists at least 3 images
    cy.get("img").should("have.length.at.least", 3);
  });
});

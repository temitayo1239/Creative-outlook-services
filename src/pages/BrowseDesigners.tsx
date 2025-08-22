import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockDesigners } from "@/data/mockDesigners"; // Ensure this path is correct


const BrowseDesigners = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredDesigners = mockDesigners.filter((designer) => {
    const q = search.toLowerCase();
    return (
      designer.fullname.toLowerCase().includes(q) ||
      designer.email.toLowerCase().includes(q) ||
      designer.company?.toLowerCase().includes(q) ||
      designer.userType.toLowerCase().includes(q)
    );
  });

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) stars.push("★");
    if (halfStar) stars.push("☆");
    while (stars.length < 5) stars.push("☆");

    return (
      <span className="text-yellow-500 text-sm">
        {stars.join(" ")} ({rating.toFixed(1)})
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Browse Designers</h1>

        <div className="mb-8">
          <Input
            placeholder="Search designers by name, email, type, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>

        {filteredDesigners.length === 0 ? (
          <div className="text-center text-muted-foreground">No designers found.</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDesigners.map((designer) => (
              <Card
                key={designer.email}
                onClick={() => navigate(`/designer/${encodeURIComponent(designer.email)}`)}
                className="cursor-pointer hover:shadow-lg transition"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  <img
                    src={designer.profilePhoto}
                    alt={designer.fullname}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{designer.fullname}</CardTitle>
                    <div className="text-sm text-muted-foreground">{designer.userType}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm mb-1 text-muted-foreground">{designer.email}</div>
                  <div className="text-sm mb-1">Company: {designer.company}</div>
                  <div className="mt-2">{renderStars(designer.rating)}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BrowseDesigners;

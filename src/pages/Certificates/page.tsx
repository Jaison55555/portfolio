import { ExternalLink, Award, X, Maximize2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/provider/page";
import { useState } from "react";
import cert1 from "@/assets/certificate/certificates (1).jpeg";
import cert2 from "@/assets/certificate/certificates (2).jpeg";
import cert3 from "@/assets/certificate/certificates (3).jpeg";
import cert4 from "@/assets/certificate/certificates (4).jpeg";
import cert5 from "@/assets/certificate/certificates (5).jpg";
import cert6 from "@/assets/certificate/certificates (1).jpg";
import cert7 from "@/assets/certificate/certificates (2).jpg";
import cert8 from "@/assets/certificate/certificates (3).jpg";
import cert9 from "@/assets/certificate/certificates (4).jpg";

const CertificatesPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const [selectedCertificate, setSelectedCertificate] = useState<{id: number; image: string} | null>(null);

  const certificates = [
    {
      id: 1,
      title: "Next.js App Router Fundamentals",
      issuer: "Vercel",
      date: "March 13, 2026",
      skills: ["Next.js", "App Router", "React", "Full-Stack"],
      credentialUrl: "#",
      image: cert1,
    },
    {
      id: 2,
      title: "React Foundations for Next.js",
      issuer: "Vercel",
      date: "March 13, 2026",
      skills: ["React", "Next.js", "Foundation", "Web Development"],
      credentialUrl: "#",
      image: cert2,
    },
    {
      id: 5,
      title: "Next.js SEO Fundamentals",
      issuer: "Vercel",
      date: "March 13, 2026",
      skills: ["Next.js", "SEO", "Optimization", "Web Performance"],
      credentialUrl: "#",
      image: cert5,
    },
    {
      id: 9,
      title: "React Foundations for Next.js",
      issuer: "Vercel",
      date: "March 13, 2026",
      skills: ["React", "Next.js", "Foundations", "Frontend"],
      credentialUrl: "#",
      image: cert9,
    },
    {
      id: 6,
      title: "Power BI for Beginners",
      issuer: "Simplilearn",
      date: "October 6, 2025",
      skills: ["Power BI", "Data Visualization", "Microsoft", "Analytics"],
      credentialUrl: "#",
      image: cert6,
    },
    {
      id: 8,
      title: "Work Ready Certification",
      issuer: "Beep",
      date: "June 30, 2025",
      skills: ["Professional Development", "Work Skills", "Soft Skills", "Career"],
      credentialUrl: "#",
      image: cert8,
    },
    {
      id: 7,
      title: "Digital Marketing Certificate",
      issuer: "Beep",
      date: "June 7, 2025",
      skills: ["Digital Marketing", "Marketing", "Social Media", "SEO"],
      credentialUrl: "#",
      image: cert7,
    },
    {
      id: 4,
      title: "Java Programming",
      issuer: "Programming Hero",
      date: "August 23, 2023",
      skills: ["Java", "OOP", "Programming", "Backend Development"],
      credentialUrl: "#",
      image: cert4,
    },
    {
      id: 3,
      title: "Complete Web Development",
      issuer: "Programming Hero",
      date: "August 19, 2023",
      skills: ["HTML", "CSS", "JavaScript", "Web Development", "Full Stack"],
      credentialUrl: "#",
      image: cert3,
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-[#090F1C]" : "bg-white"
      } pt-32 pb-16`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Award
              size={32}
              className={`${
                isDarkMode ? "text-cyan-400" : "text-blue-600"
              }`}
            />
            <h1
              className={`text-4xl md:text-5xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Certificates & Credentials
            </h1>
          </div>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Professional certifications and credentials I've earned
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className={`group transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 overflow-hidden ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-cyan-500"
                  : "bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 hover:border-blue-500"
              }`}
            >
              {/* Certificate Image - Full Height Display */}
              {cert.image && (
                <div className="relative h-80 w-full overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 cursor-pointer group">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedCertificate({ id: cert.id, image: cert.image })}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => setSelectedCertificate({ id: cert.id, image: cert.image })}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full transition-all"
                      title="View full certificate"
                    >
                      <Maximize2 size={24} />
                    </button>
                  </div>
                </div>
              )}
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle
                      className={`text-lg font-bold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {cert.title}
                    </CardTitle>
                    <p
                      className={`text-sm font-semibold ${
                        isDarkMode ? "text-cyan-400" : "text-blue-600"
                      }`}
                    >
                      {cert.issuer}
                    </p>
                  </div>
                  <Award
                    size={24}
                    className={`flex-shrink-0 ${
                      isDarkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Date */}
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    📅 {cert.date}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                          isDarkMode
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/30"
                            : "bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential Link */}
                  <a
                    href={cert.credentialUrl}
                    className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30"
                        : "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 hover:from-blue-200 hover:to-cyan-200 border border-blue-300"
                    }`}
                  >
                    View Credential
                    <ExternalLink size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div
          className={`mt-12 p-6 rounded-lg border ${
            isDarkMode
              ? "bg-slate-800/50 border-slate-700 text-gray-300"
              : "bg-slate-100 border-slate-200 text-gray-700"
          }`}
        >
          <p className="text-center">
            📚 Always learning and growing! More certifications coming soon as I continue my professional development journey.
          </p>
        </div>
      </div>

      {/* Full Screen Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate.image}
              alt="Certificate"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-all shadow-lg"
              title="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatesPage;

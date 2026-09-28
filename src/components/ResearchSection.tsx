import React, { useState } from 'react';
import { Brain, Cpu, Network, CheckCircle, Code2, Sparkles, BookOpen } from 'lucide-react';
import neuralNetImg from '../assets/images/neural_capsule_network_1790599201934.jpg';

export const ResearchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'capsnets' | 'cnn' | 'transfer'>('capsnets');

  const tabs = [
    { id: 'capsnets', label: 'Capsule Networks & Dynamic Routing' },
    { id: 'cnn', label: 'Convolutional Neural Networks' },
    { id: 'transfer', label: 'Transfer Learning & Adaptation' },
  ] as const;

  return (
    <section id="research" className="py-24 border-t border-slate-800/80 bg-[#080b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            04. Applied AI & Machine Learning Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display text-balance">
            Exploring Viewpoint Invariance, Dynamic Routing, and Vector Representations.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Investigating foundational challenges in computer vision where standard max-pooling discards essential spatial orientation, pose matrices, and geometric relationships between object parts.
          </p>
        </div>

        {/* Tab Selector Controls (Interactive functional buttons) */}
        <div className="mt-10 flex flex-wrap items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl max-w-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Research Feature Container */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800/90 rounded-2xl p-8 lg:p-10">
          <div className="lg:col-span-7 space-y-6">
            {activeTab === 'capsnets' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Core Theoretical Hypothesis
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Dynamic Routing by Agreement in Capsule Networks
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Traditional CNNs rely on pooling layers to achieve translation invariance, which inadvertently strips out precise spatial coordinates (e.g., the exact relative distance between eyes, nose, and mouth in a face). Capsule Networks represent entities through vectors where length indicates the probability of existence and vector orientation encodes instantiation parameters (pose, rotation, scale).
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Iterative squashing activation functions normalizing vector magnitudes between 0 and 1.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Routing coefficients dynamically updated via scalar agreement (dot product) between lower and higher-level capsule prediction vectors.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Enhanced resilience against adversarial perturbations compared to standard deep convolutional models.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cnn' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Hierarchical Representation
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Convolutional Neural Networks & Feature Extraction
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Analyzing layered feature extraction from low-level edges and textures in early convolutional kernels to high-level semantic contours in deeper layers. Evaluating parameter optimization, kernel sizes, and stride configurations.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Evaluation of parameter efficiency and receptive field expansion across multi-layer convolutions.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Residual connections and batch normalization strategies for mitigating vanishing gradient effects.</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'transfer' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Practical Domain Specialization
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Transfer Learning & Few-Shot Generalization
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Leveraging deep pre-trained visual encoders (such as ResNet and EfficientNet) and fine-tuning top classification heads on specialized medical, agricultural, and socio-economic datasets with constrained sample sizes.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Freezing foundational convolutional weights while training domain-specific dense prediction layers.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Data augmentation pipelines simulating local lighting, noise, and environmental variances.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Unboxed Metadata Summary */}
            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>Frameworks: PyTorch / TensorFlow</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Tools: NumPy, Matplotlib</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span>Academic Focus: UBIDS Computer Science</span>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 aspect-[4/3] group shadow-xl">
              <img
                src={neuralNetImg}
                alt="Neural Network Capsule Routing Visualization"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300 bg-slate-950/70 backdrop-blur-md p-3 rounded-lg border border-slate-800/80">
                <span className="font-semibold text-white block">Routing by Agreement Visualization</span>
                Vector representations capturing affine transformations without spatial loss.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Crazy = () => {
  return (
    <div className="mx-auto w-full">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🤯 The 96% Accuracy AI Model That Almost Didn't Happen
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              During my Live ASL project, I was working with a dataset of 10,000+ sign language phrases. 
              The crazy part? I initially thought the 96% accuracy was a bug!
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground mb-2">What happened:</p>
              <ul className="space-y-2 text-sm">
                <li>• Trained the Multi-layered Random Forest model on extensive dataset</li>
                <li>• Got 96% accuracy on first run - thought it was too good to be true</li>
                <li>• Spent an entire weekend debugging what I thought was an error</li>
                <li>• Finally realized the model was actually performing that well!</li>
              </ul>
            </div>
            
            <p className="text-lg leading-relaxed">
              Sometimes the best results are the ones you least expect! This taught me to trust the data 
              and not overthink when things are working well. The model went on to help make communication 
              accessible for hearing-impaired individuals in video conferencing platforms.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>🎯</span>
              <span>Lesson learned: Trust your results, even when they seem too good to be true!</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Crazy;
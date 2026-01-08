/**
 * Video Upload Script for Vercel Blob
 * 
 * This script uploads a video file to Vercel Blob storage.
 * 
 * Prerequisites:
 * 1. Install dependencies: npm install @vercel/blob
 * 2. Set BLOB_READ_WRITE_TOKEN in your .env.local file
 *    (Get this from Vercel Dashboard → Storage → Create Blob Store)
 * 
 * Usage:
 *   npx ts-node scripts/upload-video.ts /path/to/your/video.mp4
 * 
 * Or with npx tsx:
 *   npx tsx scripts/upload-video.ts /path/to/your/video.mp4
 */

import { put } from '@vercel/blob';
import { readFileSync } from 'fs';
import { basename } from 'path';

async function uploadVideo() {
  // Get file path from command line arguments
  const filePath = process.argv[2];
  
  if (!filePath) {
    console.error('❌ Error: Please provide a file path');
    console.log('\nUsage: npx tsx scripts/upload-video.ts /path/to/your/video.mp4');
    process.exit(1);
  }

  // Check for BLOB_READ_WRITE_TOKEN
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ Error: BLOB_READ_WRITE_TOKEN environment variable is not set');
    console.log('\nTo fix this:');
    console.log('1. Go to Vercel Dashboard → Storage → Create Blob Store');
    console.log('2. Copy the BLOB_READ_WRITE_TOKEN');
    console.log('3. Add it to your .env.local file:');
    console.log('   BLOB_READ_WRITE_TOKEN=vercel_blob_...');
    console.log('\n4. Run with: BLOB_READ_WRITE_TOKEN=your_token npx tsx scripts/upload-video.ts /path/to/video.mp4');
    process.exit(1);
  }

  try {
    console.log(`📁 Reading file: ${filePath}`);
    const file = readFileSync(filePath);
    const filename = basename(filePath);
    
    console.log(`⬆️  Uploading ${filename} to Vercel Blob...`);
    
    const blob = await put(filename, file, {
      access: 'public',
      contentType: 'video/mp4',
    });
    
    console.log('\n✅ Upload successful!\n');
    console.log('📎 Blob URL (use this in your code):');
    console.log(`   ${blob.url}`);
    console.log('\n📋 Full response:');
    console.log(JSON.stringify(blob, null, 2));
    
  } catch (error) {
    console.error('❌ Upload failed:', error);
    process.exit(1);
  }
}

uploadVideo();


/*
 * @Author: Ishaan Ohri
 * @Date: 2020-12-09 14:27:49
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:27:49
 * @Description: Definition for the MetadataError interface used in HTTP Error
 */
export interface MetadataError {
  success: boolean;
  status: number;
  error: string;
  timestamp: string;
}

/*
 * @Author: Ishaan Ohri
 * @Date: 2020-12-09 14:53:06
 * @Last Modified by: Ishaan Ohri
 * @Last Modified time: 2020-12-09 14:53:06
 * @Description: Definition for the Metadata interface used in HTTP Response
 */
export interface Metadata {
  success: boolean;
  status: number;
  timestamp: string;
}
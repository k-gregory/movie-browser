import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
})
export class ExploreContainerComponent implements OnInit {
  imageSrc?: string;

  private async asyncInit() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      this.imageSrc = image.webPath;
    } catch (e) {
      console.log("Error when initializing ExploreContainerComponent", e)
    }
 
  }

  ngOnInit(): void {
    //this.asyncInit();
  }

  @Input() name?: string;
}

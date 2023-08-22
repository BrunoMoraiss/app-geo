import { Client as GoogleMapsClient } from '@googlemaps/google-maps-services-js';
import { Module } from '@nestjs/common';
import { PlaceService } from './place/place.service';
import { PlaceController } from './place/place.controller';
import { DirectionsService } from './directions/directions.service';
import { DirectionsController } from './directions/directions.controller';

@Module({
  providers: [
    {
      provide: GoogleMapsClient,
      useValue: new GoogleMapsClient({}),
    },
    PlaceService,
    DirectionsService,
  ],
  controllers: [PlaceController, DirectionsController],
  exports: [DirectionsService],
})
export class MapsModule {}

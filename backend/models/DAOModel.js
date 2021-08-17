import mongoose from 'mongoose';


const DAOSchema = mongoose.Schema({

    
    fullName: {
        type: String,
        required: true 
    },

    description: {
        type: String,
        required: true
    },
    
    dateFounded: {
        type: Date,
    },

    dateCreated: {
        type: Date,
    }, // date made on DAOggregate

    logoLink: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum : [

            'Protocol',
            'Service',
            'Grant',
            'Media',
            'Social',
            'Investment',
            'Platform',
            'Collector'
            
        ], 
        required: true
    },

    governanceTokenName: {
        type: String,
        required: true
    },

    governanceTokenSymbol: {
        type: String,
        required: true
    },

    governanceTokenAddress: {
        type: String,
        required: true
    },
    daoStructure: {
        type: String,
        enum : [

            'shares',//   Shares style which require non-transferable shares given by existing DAO members to join
            'govToken',// Run by governance tokens that you have to buy if you want to participate.
            'tbd',// Not Yet Decided
            
        ], 
        required: true
    },
    revenueStreams: {
        type: String,
        required: true
    },
    votingProcess: {
        type: String,
        required: true
    }, // explain how voting process works
    TVL: {
        type: Number,
        required: true
    }, // total value locked, enntered i but should be pulled from a protocol
    techStack: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    website: {
        type: String,
        required: true
    },
    blockchain: {
        type: String,
        enum: [
            'Ethereum',
            'Polygon',
            'Binance_Smart_Chain',
            'Harmony',
            'Solana',
            'Algorand',
            'Stellar',
            'NEAR',
            'IBM_Blockchain',
            'Hyperledger_Fabric',
            'Tezos',
            'EOSIO',
            'Waves',
            'Ripple',
        ],
        required: true
    },
    headquarters: {
        type: String,
        required: true
    },
    approvalStage: {
        type: String,
        enum : ['Submission'], 
        required: true
    },



}, {
    timestamp: true,
})


const DAO = mongoose.model('DAO', DAOSchema);

export default DAO;

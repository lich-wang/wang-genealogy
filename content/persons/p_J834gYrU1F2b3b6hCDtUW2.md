---
schema: wang-person/v1
id: p_J834gYrU1F2b3b6hCDtUW2
status: active
merged_into: null
display_name: 王琳
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u1m5S6L2Cy1DB97pu3CRpk
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳（？—511年），字孝璋，琅邪郡临沂县人，是南北朝时期南朝梁政治人物，出身琅邪王氏。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LvZ9AdVDXN6qen8X4VKCX1
          claim_id: c_u1m5S6L2Cy1DB97pu3CRpk
          source_id: s_cxV4giHH2tpzjaKufNbx2V
          stance: supports
          locator: 导言
          quotation: 中国南北朝时南朝梁政治人物
          interpretation_note: 据人物条目导言概括生卒、籍贯与身份。
          source:
            id: s_cxV4giHH2tpzjaKufNbx2V
            source_type: website
            title: 中文维基百科：王琳（司徒左长史）
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T13:29:01.486Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F8KQh3drAM2p1iqBCHWmSY
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZNsvxL5H3VAARQ8a4wP8oZ
          claim_id: c_F8KQh3drAM2p1iqBCHWmSY
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: Q22814773
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uPAp6GwDZgmwX7fo5xHJ2W
        subject_person_id: p_J1Ags3R9DpGyBdsdxESQDz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J834gYrU1F2b3b6hCDtUW2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9PLutkqTZHYmBQpMQxFJm7
          claim_id: c_uPAp6GwDZgmwX7fo5xHJ2W
          source_id: s_eWqE2LxNnvBDzBqW4JgEyT
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eWqE2LxNnvBDzBqW4JgEyT
            source_type: api_record
            title: 维基数据：王份（Q11572894）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572894
            external_identifier: Q11572894
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:44.222Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%BD
        - id: cs_rU182DPaVL7K64tioVC6wG
          claim_id: c_uPAp6GwDZgmwX7fo5xHJ2W
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
      object_person:
        id: p_J1Ags3R9DpGyBdsdxESQDz
        status: active
        display_name: 王份
        merged_into_person_id: null
  children:
    - claim:
        id: c_MCz7avmPdqjG8opHULRh2N
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6P1fo1PnFdXvCWVqBBsEtM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XyYTtNL1SZFchkSK3fsgmT
          claim_id: c_MCz7avmPdqjG8opHULRh2N
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
        - id: cs_KxDEdqQFFd8VktVQVuGfH2
          claim_id: c_MCz7avmPdqjG8opHULRh2N
          source_id: s_PRRXHEuPGqKASeKGJ19KWL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_PRRXHEuPGqKASeKGJ19KWL
            source_type: api_record
            title: 维基数据：王铨（Q38975748）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q38975748
            external_identifier: Q38975748
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:07.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
        - id: cs_Cjo9gG6dySxHttVLQeg7xh
          claim_id: c_MCz7avmPdqjG8opHULRh2N
          source_id: s_9zkzUnCmUWmoaFHeWosVPt
          stance: supports
          locator: 条文：之子/之女
          quotation: 王銓，字公衡，琅邪郡临沂县（今山东省临沂西北）人，中国南北朝时南朝梁政治人物，王份之孙，王琳长子
          interpretation_note: null
          source:
            id: s_9zkzUnCmUWmoaFHeWosVPt
            source_type: website
            title: 中文维基百科：王銓 (南梁)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:10.137Z
            metadata_json: null
      object_person:
        id: p_6P1fo1PnFdXvCWVqBBsEtM
        status: active
        display_name: 王铨
        merged_into_person_id: null
    - claim:
        id: c_ooP8VAiEWD7J883BLop1XN
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xXFjX96GNyyJY1JHbiMUfg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_z53DFtcH3Dad9LqSkcH7mu
          claim_id: c_ooP8VAiEWD7J883BLop1XN
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
        - id: cs_R2dL7v7ZJtkSxv6iRqHg6S
          claim_id: c_ooP8VAiEWD7J883BLop1XN
          source_id: s_HL3Q7pSGfhqLJhLEYBpVEr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HL3Q7pSGfhqLJhLEYBpVEr
            source_type: api_record
            title: 维基数据：王勱（Q11572892）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572892
            external_identifier: Q11572892
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:16.881Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%A2
        - id: cs_8n6amzBELF83Dg5qzCuJ1h
          claim_id: c_ooP8VAiEWD7J883BLop1XN
          source_id: s_8dAG64dn2d92m98F1nK7JM
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 司徒左长史王琳和義興長公主蕭令嫕之子
          interpretation_note: null
          source:
            id: s_8dAG64dn2d92m98F1nK7JM
            source_type: website
            title: 中文维基百科：王劢
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%A2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:52.734Z
            metadata_json: null
      object_person:
        id: p_xXFjX96GNyyJY1JHbiMUfg
        status: active
        display_name: 王勱
        merged_into_person_id: null
    - claim:
        id: c_fbybZmjJUshHFJQksgLmLn
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CFmP6Nj2APS6Ad8HEo5V8y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SM91puJRq8e3Qa13B3GJWf
          claim_id: c_fbybZmjJUshHFJQksgLmLn
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
        - id: cs_uqKvCQ8wN8hUqN59KvDGyy
          claim_id: c_fbybZmjJUshHFJQksgLmLn
          source_id: s_coXXrAVhZbDB1WjuJJi7bH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_coXXrAVhZbDB1WjuJJi7bH
            source_type: api_record
            title: 维基数据：王固（Q11572944）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572944
            external_identifier: Q11572944
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:16.881Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%9B%BA
      object_person:
        id: p_CFmP6Nj2APS6Ad8HEo5V8y
        status: active
        display_name: 王固
        merged_into_person_id: null
    - claim:
        id: c_tHph4CF95mQ8aZwm42JSj6
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_21ouqBjgXaRVvZJcsc26L9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GpnDWKy5dsunBs9vZ2u5NR
          claim_id: c_tHph4CF95mQ8aZwm42JSj6
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
        - id: cs_JFQ5iK5dym2KCcbGAZDwv9
          claim_id: c_tHph4CF95mQ8aZwm42JSj6
          source_id: s_FG1yXp4nDFkXJLYNq3zwA4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FG1yXp4nDFkXJLYNq3zwA4
            source_type: api_record
            title: 维基数据：王質（Q11573215）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573215
            external_identifier: Q11573215
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:16.881Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B3%AA_(%E5%8D%97%E6%9C%9D)
      object_person:
        id: p_21ouqBjgXaRVvZJcsc26L9
        status: active
        display_name: 王質
        merged_into_person_id: null
    - claim:
        id: c_8R5xTugQoSBuV6dZokBVPd
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6YKDGhv1aE5F53xfR7rRLK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Sr6RJXt47wVHeKgPxYrpdC
          claim_id: c_8R5xTugQoSBuV6dZokBVPd
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
        - id: cs_XxnyTJZq1rHXbYGSEYY2GQ
          claim_id: c_8R5xTugQoSBuV6dZokBVPd
          source_id: s_h4A8fYMkAWQ3SAV3Psmk4F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_h4A8fYMkAWQ3SAV3Psmk4F
            source_type: api_record
            title: 维基数据：王通 (南朝)（Q10417364）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10417364
            external_identifier: Q10417364
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:30.337Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%9A_(%E5%8D%97%E6%9C%9D)
      object_person:
        id: p_6YKDGhv1aE5F53xfR7rRLK
        status: active
        display_name: 王通 (南朝)
        merged_into_person_id: null
    - claim:
        id: c_HZYNW3xy2PtKiyF3x4VPn1
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dXTc9PCwcP4NC2jiywn7fJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4r27ee2ZVt8UVDCyEDw63N
          claim_id: c_HZYNW3xy2PtKiyF3x4VPn1
          source_id: s_3zqJrGdEBE7YQGByQ9sXQh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_3zqJrGdEBE7YQGByQ9sXQh
            source_type: api_record
            title: 维基数据：王佥（Q22814776）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814776
            external_identifier: Q22814776
            license_code: CC0-1.0
            accessed_at: 2026-08-24T09:16:58.082Z
            metadata_json: null
        - id: cs_XeDfyzMsHUi6SAeA7JEGEc
          claim_id: c_HZYNW3xy2PtKiyF3x4VPn1
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
      object_person:
        id: p_dXTc9PCwcP4NC2jiywn7fJ
        status: active
        display_name: 王佥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_75k4E2BY51aDs8XJhi5LjP
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_j5svS11vXwS6rE8WJUtGA1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_uEFHKjLm7Xp5ZeHY3t21PH
          claim_id: c_75k4E2BY51aDs8XJhi5LjP
          source_id: s_Bo2MZpkeRcitNXafzC4e6C
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bo2MZpkeRcitNXafzC4e6C
            source_type: api_record
            title: 维基数据：王琳（Q22814773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814773
            external_identifier: Q22814773
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:03.575Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2)
        - id: cs_VNv77rceufj9FLUQP5v9wg
          claim_id: c_75k4E2BY51aDs8XJhi5LjP
          source_id: s_D79FAMFKrDTpEPrDUEBaP1
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_D79FAMFKrDTpEPrDUEBaP1
            source_type: api_record
            title: 维基数据：蕭令嫕（Q16603608）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16603608
            external_identifier: Q16603608
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:20.264Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%95%AD%E4%BB%A4%E5%AB%95
        - id: cs_ugSa5z2sM7u4UZE2CnBnhF
          claim_id: c_75k4E2BY51aDs8XJhi5LjP
          source_id: s_9zJDzHnW7kxAMywXNECJpH
          stance: supports
          locator: 条文：信息框 夫
          quotation: 王琳
          interpretation_note: null
          source:
            id: s_9zJDzHnW7kxAMywXNECJpH
            source_type: website
            title: 中文维基百科：蕭令嫕
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%95%AD%E4%BB%A4%E5%AB%95
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:31.158Z
            metadata_json: null
      object_person:
        id: p_j5svS11vXwS6rE8WJUtGA1
        status: active
        display_name: 蕭令嫕
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_YrKmNJhg4m7dYfb6KT2B1N
        subject_person_id: p_J834gYrU1F2b3b6hCDtUW2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_P3HJSwZEVayyXGAC4NpdpW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hys9M4pWFQCYEPAhjFCj1E
          claim_id: c_YrKmNJhg4m7dYfb6KT2B1N
          source_id: s_BrZpkPr5E42n14JGk2Q8s2
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 琅邪郡临沂县人，南梁侍中、丹阳尹、卫尉卿王琳孙女，南梁金紫光禄大夫王固之女
          interpretation_note: null
          source:
            id: s_BrZpkPr5E42n14JGk2Q8s2
            source_type: website
            title: 中文维基百科：王少姬
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B0%91%E5%A7%AC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:15.365Z
            metadata_json: null
      object_person:
        id: p_P3HJSwZEVayyXGAC4NpdpW
        status: active
        display_name: 王少姬
        merged_into_person_id: null
  other: []
---

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王琳（？—511年），字孝璋，琅邪郡临沂县人，是南北朝时期南朝梁政治人物，出身琅邪王氏。 | accepted |
| name.primary | 王琳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J1Ags3R9DpGyBdsdxESQDz | 王份 | accepted |
| children | p_6P1fo1PnFdXvCWVqBBsEtM | 王铨 | accepted |
| children | p_xXFjX96GNyyJY1JHbiMUfg | 王勱 | accepted |
| children | p_CFmP6Nj2APS6Ad8HEo5V8y | 王固 | accepted |
| children | p_21ouqBjgXaRVvZJcsc26L9 | 王質 | accepted |
| children | p_6YKDGhv1aE5F53xfR7rRLK | 王通 (南朝) | accepted |
| children | p_dXTc9PCwcP4NC2jiywn7fJ | 王佥 | accepted |
| spouses | p_j5svS11vXwS6rE8WJUtGA1 | 蕭令嫕 | accepted |
| descendants | p_P3HJSwZEVayyXGAC4NpdpW | 王少姬 | accepted |

## 外部来源

- [维基数据：王份（Q11572894）](https://www.wikidata.org/wiki/Q11572894)
- [维基数据：王固（Q11572944）](https://www.wikidata.org/wiki/Q11572944)
- [维基数据：王琳（Q22814773）](https://www.wikidata.org/wiki/Q22814773)
- [维基数据：王勱（Q11572892）](https://www.wikidata.org/wiki/Q11572892)
- [维基数据：王佥（Q22814776）](https://www.wikidata.org/wiki/Q22814776)
- [维基数据：王铨（Q38975748）](https://www.wikidata.org/wiki/Q38975748)
- [维基数据：王通 (南朝)（Q10417364）](https://www.wikidata.org/wiki/Q10417364)
- [维基数据：王質（Q11573215）](https://www.wikidata.org/wiki/Q11573215)
- [维基数据：蕭令嫕（Q16603608）](https://www.wikidata.org/wiki/Q16603608)
- [中文维基百科：王琳（司徒左长史）](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%90%B3_(%E5%8F%B8%E5%BE%92%E5%B7%A6%E9%95%BF%E5%8F%B2))
- [中文维基百科：王劢](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%A2)
- [中文维基百科：王銓 (南梁)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8A%93_(%E5%8D%97%E6%A2%81))
- [中文维基百科：王少姬](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%B0%91%E5%A7%AC)
- [中文维基百科：蕭令嫕](https://zh.wikipedia.org/wiki/%E8%95%AD%E4%BB%A4%E5%AB%95)

---
schema: wang-person/v1
id: p_PGJAWHxYxJtx3aVz4EvhUR
status: active
merged_into: null
display_name: 王衮
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x9j2YS4PmzkaP4xwCg4f8j
        subject_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衮（558年—613年），字公衣，琅琊郡临沂人，是南北朝后期至隋朝的政治人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C6jJ55AR7psRL3iY9pK45t
          claim_id: c_x9j2YS4PmzkaP4xwCg4f8j
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 导言
          quotation: 南北朝后期到隋朝政治人物
          interpretation_note: 据人物条目导言概括生卒、籍贯与身份。
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ifCdePRUH8vwkLkcLv91Bf
        subject_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 558年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0558-01-01
            latest: 0558-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qVPUNwmPz3uD47CpovCfup
          claim_id: c_ifCdePRUH8vwkLkcLv91Bf
          source_id: s_4YiYqGAZYxnkGyrNE6Vdx8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4YiYqGAZYxnkGyrNE6Vdx8
            source_type: api_record
            title: 维基数据：王衮（Q47182743）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q47182743
            external_identifier: Q47182743
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:37.088Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y8DVF6uXZnC8X5sCmES3hP
        subject_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7zJs3QBnsaUtwxpmgheg63
          claim_id: c_y8DVF6uXZnC8X5sCmES3hP
          source_id: s_4YiYqGAZYxnkGyrNE6Vdx8
          stance: supports
          locator: Q47182743
          quotation: null
          interpretation_note: null
          source:
            id: s_4YiYqGAZYxnkGyrNE6Vdx8
            source_type: api_record
            title: 维基数据：王衮（Q47182743）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q47182743
            external_identifier: Q47182743
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:37.088Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AiYeLz3ft72QXdaUtSYtnK
        subject_person_id: p_jnXatZdH5LDv2DNn2PU5Tw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GcJPiXoPEhfx49YfnqWCK9
          claim_id: c_AiYeLz3ft72QXdaUtSYtnK
          source_id: s_xEBYVW3xjFzLnp9P7pHZ2L
          stance: supports
          locator: 条文：世系图
          quotation: 王诵 → 王衮
          interpretation_note: null
          source:
            id: s_xEBYVW3xjFzLnp9P7pHZ2L
            source_type: website
            title: 中文维基百科：琅邪王氏世系圖
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T03:02:22.297Z
            metadata_json: null
        - id: cs_kR72XQXK5MH13nLPm2anTu
          claim_id: c_AiYeLz3ft72QXdaUtSYtnK
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（儿子）
          quotation: 南梁侍中、中书令、护军将军、大將軍王诵的儿子
          interpretation_note: null
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
        - id: cs_tAfEUhzxmZg4MbXBipSDMK
          claim_id: c_AiYeLz3ft72QXdaUtSYtnK
          source_id: s_txa6DXaBqPYUGuDGF7viPh
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 南梁侍中、中书令、护军将军、大将军王诵的儿子。
          interpretation_note: null
          source:
            id: s_txa6DXaBqPYUGuDGF7viPh
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:55.731Z
            metadata_json: null
      object_person:
        id: p_jnXatZdH5LDv2DNn2PU5Tw
        status: active
        display_name: 王诵
        merged_into_person_id: null
    - claim:
        id: c_QNJ1KcPwaZkwEey4Fz8FuF
        subject_person_id: p_M2tXQe2FSQ532ZvGY6jPvZ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XJ7SWE474H9aQJJLkeezBy
          claim_id: c_QNJ1KcPwaZkwEey4Fz8FuF
          source_id: s_4YiYqGAZYxnkGyrNE6Vdx8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4YiYqGAZYxnkGyrNE6Vdx8
            source_type: api_record
            title: 维基数据：王衮（Q47182743）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q47182743
            external_identifier: Q47182743
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:37.088Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
        - id: cs_u1y6E9dWkyv7z9jL9q8Tby
          claim_id: c_QNJ1KcPwaZkwEey4Fz8FuF
          source_id: s_ff1ysNrkADvCttYkh3AoQA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ff1ysNrkADvCttYkh3AoQA
            source_type: api_record
            title: 维基数据：王穉（Q56600341）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q56600341
            external_identifier: Q56600341
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:09.907Z
            metadata_json: null
      object_person:
        id: p_M2tXQe2FSQ532ZvGY6jPvZ
        status: active
        display_name: 王穉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_NoWDDjTdMD2QXf92Xd7Fta
        subject_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QvJKnvJoeQ1bneheGEhLBz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o7M7DiDc8hPKnKUXZeVPyH
          claim_id: c_NoWDDjTdMD2QXf92Xd7Fta
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（尚）
          quotation: 初任秘书郎，尚梁明帝萧岿长女建昌公主
          interpretation_note: null
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
        - id: cs_DtXiwRBqqguPWdGzWTJhF5
          claim_id: c_NoWDDjTdMD2QXf92Xd7Fta
          source_id: s_txa6DXaBqPYUGuDGF7viPh
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 尚梁明帝萧岿长女建昌公主，拜驸马都尉。
          interpretation_note: null
          source:
            id: s_txa6DXaBqPYUGuDGF7viPh
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:55.731Z
            metadata_json: null
      object_person:
        id: p_QvJKnvJoeQ1bneheGEhLBz
        status: active
        display_name: 建昌公主
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_YnNAS2ZvymLSw9txRy1MEu
        subject_person_id: p_GJcVUzFUiBYSuT1v9Di2bz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WCmN51QPvDxNP1Y4McFWjJ
          claim_id: c_YnNAS2ZvymLSw9txRy1MEu
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（孙子）（2世）
          quotation: 南梁侍中、左光禄大夫、驸马都尉王稚的孙子
          interpretation_note: null
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
        - id: cs_J6FQ5ep9CP2gSztkyLsnkF
          claim_id: c_YnNAS2ZvymLSw9txRy1MEu
          source_id: s_txa6DXaBqPYUGuDGF7viPh
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 南梁侍中、左光禄大夫、驸马都尉王稚的孙子。
          interpretation_note: null
          source:
            id: s_txa6DXaBqPYUGuDGF7viPh
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:55.731Z
            metadata_json: null
      object_person:
        id: p_GJcVUzFUiBYSuT1v9Di2bz
        status: active
        display_name: 王稚
        merged_into_person_id: null
    - claim:
        id: c_ZKS9UWxTPfS1dh2ZYXRuid
        subject_person_id: p_1PVoebznd6BJv1usnGBu3r
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZVzR4699pegLhSkt9qxiwL
          claim_id: c_ZKS9UWxTPfS1dh2ZYXRuid
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 南梁侍中、尚书左仆射、中书令王暕的曾孙
          interpretation_note: null
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
        - id: cs_Hz3LPYUqB3CUufQLtw9fbd
          claim_id: c_ZKS9UWxTPfS1dh2ZYXRuid
          source_id: s_txa6DXaBqPYUGuDGF7viPh
          stance: supports
          locator: 条文：条文识读（祖）（3世）
          quotation: 南梁侍中、尚书左仆射、中书令王暕的曾孙。
          interpretation_note: null
          source:
            id: s_txa6DXaBqPYUGuDGF7viPh
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:55.731Z
            metadata_json: null
      object_person:
        id: p_1PVoebznd6BJv1usnGBu3r
        status: active
        display_name: 王暕
        merged_into_person_id: null
    - claim:
        id: c_Kx3GHBgkbaELcxfMPDuWAV
        subject_person_id: p_ke9yjosuiX8LZiiCh781g5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FSvumZa2dswnhnMoeori65
          claim_id: c_Kx3GHBgkbaELcxfMPDuWAV
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（玄孙）（4世）
          quotation: 南齐侍中、中书、监卫将军、尚书令、太尉、南昌公王俭的玄孙
          interpretation_note: null
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
        - id: cs_iw3DjPdaEUuGLAR3oNCyrx
          claim_id: c_Kx3GHBgkbaELcxfMPDuWAV
          source_id: s_txa6DXaBqPYUGuDGF7viPh
          stance: supports
          locator: 条文：条文识读（祖）（4世）
          quotation: 南齐侍中、中书、监卫将军、尚书令、太尉、南昌公王俭的玄孙。
          interpretation_note: null
          source:
            id: s_txa6DXaBqPYUGuDGF7viPh
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:55.731Z
            metadata_json: null
      object_person:
        id: p_ke9yjosuiX8LZiiCh781g5
        status: active
        display_name: 王俭
        merged_into_person_id: null
    - claim:
        id: c_855A5bd2DBqWmxsaLqBdnh
        subject_person_id: p_Xbn65bXVofZnsi76cqAQCP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oBNjopweFZFDTjDcNQQzL5
          claim_id: c_855A5bd2DBqWmxsaLqBdnh
          source_id: s_iWbwQosLW2HFybpKpbUPvH
          stance: supports
          locator: 条文：条文识读（十世孙）（10世）
          quotation: 王衮是东晋王导的十世孙
          interpretation_note: null
          source:
            id: s_iWbwQosLW2HFybpKpbUPvH
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:24:31.013Z
            metadata_json: null
        - id: cs_F3N52KkHCyK5SqEZhcnsY2
          claim_id: c_855A5bd2DBqWmxsaLqBdnh
          source_id: s_txa6DXaBqPYUGuDGF7viPh
          stance: supports
          locator: 条文：条文识读（祖）（10世）
          quotation: 王衮是东晋王导的十世孙。
          interpretation_note: null
          source:
            id: s_txa6DXaBqPYUGuDGF7viPh
            source_type: website
            title: 中文维基百科：王衮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:55.731Z
            metadata_json: null
      object_person:
        id: p_Xbn65bXVofZnsi76cqAQCP
        status: active
        display_name: 王導
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_tjqhDRWpu2yFhnJXNqf6Qs
        subject_person_id: p_PGJAWHxYxJtx3aVz4EvhUR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qfyAqTA3PGUUXcgAsCUJEh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GTsHZUHGm8Y1pjhSEprhFM
          claim_id: c_tjqhDRWpu2yFhnJXNqf6Qs
          source_id: s_TSfso3FrCBgfNR2hHscAz3
          stance: supports
          locator: 条文：条文识读（祖父）（3世）
          quotation: 曾祖王天敘，以孫王守仁贈禮部右侍郎追封特進光祿大夫柱國新建伯兼南京兵部尚書；祖父王袞；父王守禮，母華氏
          interpretation_note: null
          source:
            id: s_TSfso3FrCBgfNR2hHscAz3
            source_type: website
            title: 中文维基百科：王正思
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:22.455Z
            metadata_json: null
      object_person:
        id: p_qfyAqTA3PGUUXcgAsCUJEh
        status: active
        display_name: 王正思
        merged_into_person_id: null
  other: []
---

# 王衮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王衮（558年—613年），字公衣，琅琊郡临沂人，是南北朝后期至隋朝的政治人物。 | accepted |
| birth.date | 558年 | accepted |
| name.primary | 王衮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jnXatZdH5LDv2DNn2PU5Tw | 王诵 | accepted |
| parents | p_M2tXQe2FSQ532ZvGY6jPvZ | 王穉 | accepted |
| spouses | p_QvJKnvJoeQ1bneheGEhLBz | 建昌公主 | accepted |
| ancestors | p_GJcVUzFUiBYSuT1v9Di2bz | 王稚 | accepted |
| ancestors | p_1PVoebznd6BJv1usnGBu3r | 王暕 | accepted |
| ancestors | p_ke9yjosuiX8LZiiCh781g5 | 王俭 | accepted |
| ancestors | p_Xbn65bXVofZnsi76cqAQCP | 王導 | accepted |
| descendants | p_qfyAqTA3PGUUXcgAsCUJEh | 王正思 | accepted |

## 外部来源

- [维基数据：王衮（Q47182743）](https://www.wikidata.org/wiki/Q47182743)
- [维基数据：王穉（Q56600341）](https://www.wikidata.org/wiki/Q56600341)
- [中文维基百科：琅邪王氏世系圖](https://zh.wikipedia.org/wiki/%E7%90%85%E9%82%AA%E7%8E%8B%E6%B0%8F%E4%B8%96%E7%B3%BB%E5%9C%96)
- [中文维基百科：王衮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%AE)
- [中文维基百科：王正思](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D)

---
schema: wang-person/v1
id: p_qbWcARBwiNzFhFH7v3oZN5
status: active
merged_into: null
display_name: 王桥
cbdb_id: 226562
revision: 12
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XQJSKmWTvpr65aSM5d8MQa
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桥，明人物。萬曆丙戌科進士進士，籍贯京山，入仕進士，曾任道御史、左布政使。（中国历代人物传记资料库 CBDB 226562）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_oRhWbFHqT3GbszQ7hWdwQH
          claim_id: c_XQJSKmWTvpr65aSM5d8MQa
          source_id: s_eWMTxrWPzyeXTef4AWJDhH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eWMTxrWPzyeXTef4AWJDhH
            source_type: api_record
            title: 维基数据：王桥（Q16925823）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16925823
            external_identifier: Q16925823
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A9%8B_(%E5%98%89%E9%9D%96%E9%80%B2%E5%A3%AB)
        - id: cs_3V0nJi0cUNbzmVG8Udlpez
          claim_id: c_XQJSKmWTvpr65aSM5d8MQa
          source_id: s_oto9J6FqGL8SuF6LDBsJau
          stance: supports
          locator: CBDB:226562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oto9J6FqGL8SuF6LDBsJau
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王橋（226562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226562&o=json
            external_identifier: CBDB:226562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:46.246Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7yxdHNhQEhyiw1Cgv2PgtE
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桥
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_18SeVNd18ja4F6HiJhH1wY
          claim_id: c_7yxdHNhQEhyiw1Cgv2PgtE
          source_id: s_eWMTxrWPzyeXTef4AWJDhH
          stance: supports
          locator: Q16925823
          quotation: null
          interpretation_note: null
          source:
            id: s_eWMTxrWPzyeXTef4AWJDhH
            source_type: api_record
            title: 维基数据：王桥（Q16925823）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16925823
            external_identifier: Q16925823
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A9%8B_(%E5%98%89%E9%9D%96%E9%80%B2%E5%A3%AB)
        - id: cs_kN8MPU1EQEMpPeN7fZUX92
          claim_id: c_7yxdHNhQEhyiw1Cgv2PgtE
          source_id: s_oto9J6FqGL8SuF6LDBsJau
          stance: supports
          locator: Q16925823
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5AKnU2bQWvDBBPyZwRKNGc
        subject_person_id: p_b4bisUW9C7vmM7GVAbGAqe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JSjMR61UdaE1z9Dgttw1jd
          claim_id: c_5AKnU2bQWvDBBPyZwRKNGc
          source_id: s_eWMTxrWPzyeXTef4AWJDhH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_eWMTxrWPzyeXTef4AWJDhH
            source_type: api_record
            title: 维基数据：王桥（Q16925823）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16925823
            external_identifier: Q16925823
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A9%8B_(%E5%98%89%E9%9D%96%E9%80%B2%E5%A3%AB)
        - id: cs_tr5sLXmKQgj1khoKx3wE3J
          claim_id: c_5AKnU2bQWvDBBPyZwRKNGc
          source_id: s_F5JzhaMa2TmiGmre4CPs6s
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_F5JzhaMa2TmiGmre4CPs6s
            source_type: api_record
            title: 维基数据：王大韶（Q45528350）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528350
            external_identifier: Q45528350
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.882Z
            metadata_json: null
      object_person:
        id: p_b4bisUW9C7vmM7GVAbGAqe
        status: active
        display_name: 王大韶
        merged_into_person_id: null
  children:
    - claim:
        id: c_zRo5wLXtJ2CHg1bdWWeqke
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5MNkBJnN6bmTG5ZPZ7LvWS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5u3dfpZNrJpSn2zMqJaHQw
          claim_id: c_zRo5wLXtJ2CHg1bdWWeqke
          source_id: s_eWMTxrWPzyeXTef4AWJDhH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eWMTxrWPzyeXTef4AWJDhH
            source_type: api_record
            title: 维基数据：王桥（Q16925823）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16925823
            external_identifier: Q16925823
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A9%8B_(%E5%98%89%E9%9D%96%E9%80%B2%E5%A3%AB)
        - id: cs_crCMcU6RUvVNz9Cdo1vPeg
          claim_id: c_zRo5wLXtJ2CHg1bdWWeqke
          source_id: s_NLsGNVpk4Ruefbr7KaeHNT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NLsGNVpk4Ruefbr7KaeHNT
            source_type: api_record
            title: 维基数据：王宗茂（Q15915784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15915784
            external_identifier: Q15915784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:18.396Z
            metadata_json: null
      object_person:
        id: p_5MNkBJnN6bmTG5ZPZ7LvWS
        status: active
        display_name: 王宗茂
        merged_into_person_id: null
    - claim:
        id: c_75TxaiMdH2FxridDtUR3cX
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YcgZGHB8b41JUksSD6hCbG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3XwF8mS6byCxwZn9WAXD48
          claim_id: c_75TxaiMdH2FxridDtUR3cX
          source_id: s_eWMTxrWPzyeXTef4AWJDhH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_EbsFG7u3nTLd1JFXN1k6jW
          claim_id: c_75TxaiMdH2FxridDtUR3cX
          source_id: s_UEJCm4BifC222RfsPoT6b7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UEJCm4BifC222RfsPoT6b7
            source_type: api_record
            title: 维基数据：王宗蓁（Q45528855）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528855
            external_identifier: Q45528855
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:48.391Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97%E8%93%81
        - id: cs_7GYitDvc8xeNNuiPXr3mMV
          claim_id: c_75TxaiMdH2FxridDtUR3cX
          source_id: s_oto9J6FqGL8SuF6LDBsJau
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆丙戌科進士同年總錄
          source: *a1
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
    - claim:
        id: c_CktkcAx6rnIqPfsr-qdhx4
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_71nVeNYgJtFvADxCxTPSAB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PUKL2eNhspccJbTemZcGy8
          claim_id: c_CktkcAx6rnIqPfsr-qdhx4
          source_id: s_8iEKV_p7B7CTVVBN1HDww4
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗義 与 王宗蓁 为同胞（CBDB 记「兄」），王宗蓁 之父／母即 王宗義 之父／母。
          source:
            id: s_8iEKV_p7B7CTVVBN1HDww4
            source_type: api_record
            title: 中国历代人物传记资料库：王宗義（CBDB 226576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226576&o=json
            external_identifier: CBDB:226576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_71nVeNYgJtFvADxCxTPSAB
        status: active
        display_name: 王宗義
        merged_into_person_id: null
    - claim:
        id: c_oJ3s_DlgxIeO-5px1ur9_-
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CyJTjmt6MpgYmwa5rDgkVJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ABGmZwQvskwTLLKCXv-AUh
          claim_id: c_oJ3s_DlgxIeO-5px1ur9_-
          source_id: s_P8WNvFiaeagM9fyGgA3koP
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗休 与 王宗蓁 为同胞（CBDB 记「弟」），王宗蓁 之父／母即 王宗休 之父／母。
          source:
            id: s_P8WNvFiaeagM9fyGgA3koP
            source_type: api_record
            title: 中国历代人物传记资料库：王宗休（CBDB 226573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226573&o=json
            external_identifier: CBDB:226573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CyJTjmt6MpgYmwa5rDgkVJ
        status: active
        display_name: 王宗休
        merged_into_person_id: null
    - claim:
        id: c_INn1VvSy5HkL677W9EKKU4
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K7UDBNRC1LwQ6VGVrJraAP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFGoFdrSghurUAqJlWljyo
          claim_id: c_INn1VvSy5HkL677W9EKKU4
          source_id: s_0sL-IQBxYH8AskFxgmTsBB
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗蔭 与 王宗蓁 为同胞（CBDB 记「兄」），王宗蓁 之父／母即 王宗蔭 之父／母。
          source:
            id: s_0sL-IQBxYH8AskFxgmTsBB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蔭（CBDB 226577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226577&o=json
            external_identifier: CBDB:226577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K7UDBNRC1LwQ6VGVrJraAP
        status: active
        display_name: 王宗蔭
        merged_into_person_id: null
    - claim:
        id: c_W5_yNddgxSjio6E9DIXuRX
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L5J9DktFqWwAQCbyJVW66Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-h9YInKJVrGZ7VDGULkxzA
          claim_id: c_W5_yNddgxSjio6E9DIXuRX
          source_id: s__0zPGGN_SlNatcPOAVl1cw
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗蕃 与 王宗蓁 为同胞（CBDB 记「弟」），王宗蓁 之父／母即 王宗蕃 之父／母。
          source:
            id: s__0zPGGN_SlNatcPOAVl1cw
            source_type: api_record
            title: 中国历代人物传记资料库：王宗蕃（CBDB 226568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226568&o=json
            external_identifier: CBDB:226568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L5J9DktFqWwAQCbyJVW66Q
        status: active
        display_name: 王宗蕃
        merged_into_person_id: null
    - claim:
        id: c_BerdWUp8OhDW5zrBAMiK9-
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ckZkUJVPKupiRwAYAoa6oE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TkKqExLbpzBJF0237eHCQF
          claim_id: c_BerdWUp8OhDW5zrBAMiK9-
          source_id: s_p6XiTzSKnsEDFz_Lfc9rs8
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗著 与 王宗蓁 为同胞（CBDB 记「弟」），王宗蓁 之父／母即 王宗著 之父／母。
          source:
            id: s_p6XiTzSKnsEDFz_Lfc9rs8
            source_type: api_record
            title: 中国历代人物传记资料库：王宗著（CBDB 226571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226571&o=json
            external_identifier: CBDB:226571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ckZkUJVPKupiRwAYAoa6oE
        status: active
        display_name: 王宗著
        merged_into_person_id: null
    - claim:
        id: c_gPTEfX5Hwk8G5vob_8fZS-
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f86XwFtvP2NiGJeoG9D3Q7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_94hoIKMAub3nEr6fJ6n4c6
          claim_id: c_gPTEfX5Hwk8G5vob_8fZS-
          source_id: s_RYguadk4eYvxUeCEBY6GHf
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗彥 与 王宗蓁 为同胞（CBDB 记「弟」），王宗蓁 之父／母即 王宗彥 之父／母。
          source:
            id: s_RYguadk4eYvxUeCEBY6GHf
            source_type: api_record
            title: 中国历代人物传记资料库：王宗彥（CBDB 226570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226570&o=json
            external_identifier: CBDB:226570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f86XwFtvP2NiGJeoG9D3Q7
        status: active
        display_name: 王宗彥
        merged_into_person_id: null
    - claim:
        id: c_or8lXQ0VNDKjwUmLsoH3sR
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rT98ey95uimaoQb71uBgsX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2wJEB5056R-0289-kuIjdv
          claim_id: c_or8lXQ0VNDKjwUmLsoH3sR
          source_id: s_uhInqHxoAmkGNxj74ULwWb
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗予 与 王宗蓁 为同胞（CBDB 记「弟」），王宗蓁 之父／母即 王宗予 之父／母。
          source:
            id: s_uhInqHxoAmkGNxj74ULwWb
            source_type: api_record
            title: 中国历代人物传记资料库：王宗予（CBDB 226569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226569&o=json
            external_identifier: CBDB:226569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rT98ey95uimaoQb71uBgsX
        status: active
        display_name: 王宗予
        merged_into_person_id: null
    - claim:
        id: c_uaWfsufDOw21s2BYv3DTRS
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tGD4bxbrNF6Sp5nFCcJMm6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IMAx-jOYPuHien4MP7Kz0g
          claim_id: c_uaWfsufDOw21s2BYv3DTRS
          source_id: s_MjHQCkcT0JtKTffiRY3DW2
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗泰 与 王宗蓁 为同胞（CBDB 记「弟」），王宗蓁 之父／母即 王宗泰 之父／母。
          source:
            id: s_MjHQCkcT0JtKTffiRY3DW2
            source_type: api_record
            title: 中国历代人物传记资料库：王宗泰（CBDB 226567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226567&o=json
            external_identifier: CBDB:226567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tGD4bxbrNF6Sp5nFCcJMm6
        status: active
        display_name: 王宗泰
        merged_into_person_id: null
    - claim:
        id: c_yDGkQwnSOLVQHF7m-oMs4L
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPP6KKF6WwHyKyxYd7MWpu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T2q9X49OIZsR7lcgstWg1q
          claim_id: c_yDGkQwnSOLVQHF7m-oMs4L
          source_id: s_vvaEtVIpLs5jSqL5MFcrcY
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗楚 与 王宗蓁 为同胞（CBDB 记「兄」），王宗蓁 之父／母即 王宗楚 之父／母。
          source:
            id: s_vvaEtVIpLs5jSqL5MFcrcY
            source_type: api_record
            title: 中国历代人物传记资料库：王宗楚（CBDB 226575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226575&o=json
            external_identifier: CBDB:226575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wPP6KKF6WwHyKyxYd7MWpu
        status: active
        display_name: 王宗楚
        merged_into_person_id: null
    - claim:
        id: c_FVa3jZPkP352jN7oEGvZyd
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xzDFCfB4cxEesu8oCjFgXS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OoFfwr-JI0lBhWzM7pAgwm
          claim_id: c_FVa3jZPkP352jN7oEGvZyd
          source_id: s_Hk1sJS07J5McgpMTXMn2pB
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗寧 与 王宗蓁 为同胞（CBDB 记「兄」），王宗蓁 之父／母即 王宗寧 之父／母。
          source:
            id: s_Hk1sJS07J5McgpMTXMn2pB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗寧（CBDB 226574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226574&o=json
            external_identifier: CBDB:226574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xzDFCfB4cxEesu8oCjFgXS
        status: active
        display_name: 王宗寧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王桥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王桥，明人物。萬曆丙戌科進士進士，籍贯京山，入仕進士，曾任道御史、左布政使。（中国历代人物传记资料库 CBDB 226562） | accepted |
| name.primary | 王桥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b4bisUW9C7vmM7GVAbGAqe | 王大韶 | accepted |
| children | p_5MNkBJnN6bmTG5ZPZ7LvWS | 王宗茂 | accepted |
| children | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |
| children | p_71nVeNYgJtFvADxCxTPSAB | 王宗義 | accepted |
| children | p_CyJTjmt6MpgYmwa5rDgkVJ | 王宗休 | accepted |
| children | p_K7UDBNRC1LwQ6VGVrJraAP | 王宗蔭 | accepted |
| children | p_L5J9DktFqWwAQCbyJVW66Q | 王宗蕃 | accepted |
| children | p_ckZkUJVPKupiRwAYAoa6oE | 王宗著 | accepted |
| children | p_f86XwFtvP2NiGJeoG9D3Q7 | 王宗彥 | accepted |
| children | p_rT98ey95uimaoQb71uBgsX | 王宗予 | accepted |
| children | p_tGD4bxbrNF6Sp5nFCcJMm6 | 王宗泰 | accepted |
| children | p_wPP6KKF6WwHyKyxYd7MWpu | 王宗楚 | accepted |
| children | p_xzDFCfB4cxEesu8oCjFgXS | 王宗寧 | accepted |

## 外部来源

- [维基数据：王大韶（Q45528350）](https://www.wikidata.org/wiki/Q45528350)
- [维基数据：王桥（Q16925823）](https://www.wikidata.org/wiki/Q16925823)
- [维基数据：王宗茂（Q15915784）](https://www.wikidata.org/wiki/Q15915784)
- [维基数据：王宗蓁（Q45528855）](https://www.wikidata.org/wiki/Q45528855)
- [中国历代人物传记资料库：王宗蕃（CBDB 226568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226568&o=json)
- [中国历代人物传记资料库：王宗楚（CBDB 226575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226575&o=json)
- [中国历代人物传记资料库：王宗寧（CBDB 226574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226574&o=json)
- [中国历代人物传记资料库：王宗泰（CBDB 226567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226567&o=json)
- [中国历代人物传记资料库：王宗休（CBDB 226573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226573&o=json)
- [中国历代人物传记资料库：王宗彥（CBDB 226570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226570&o=json)
- [中国历代人物传记资料库：王宗義（CBDB 226576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226576&o=json)
- [中国历代人物传记资料库：王宗蔭（CBDB 226577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226577&o=json)
- [中国历代人物传记资料库：王宗予（CBDB 226569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226569&o=json)
- [中国历代人物传记资料库：王宗著（CBDB 226571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226571&o=json)
- [CBDB 中国历代人物传记资料库：王橋（226562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226562&o=json)

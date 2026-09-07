---
schema: wang-person/v1
id: p_LhrXSwBKuTqBng4RsWfQ9E
status: active
merged_into: null
display_name: 王处廉
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MYdPeBcSFmnJLNC62vHPz1
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王处廉，史料所见人物。本项目依据《維基數據：王处廉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_HvCRQ9VR7Tw26oSLbHuXIz
          claim_id: c_MYdPeBcSFmnJLNC62vHPz1
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: Q45421031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zGfXcGgA6AGbhdTYBtxKuS
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王处廉
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VhKG63wMboU79HxWHm4toG
          claim_id: c_zGfXcGgA6AGbhdTYBtxKuS
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: Q45421031
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_25t5T6SnzvEvLrr8Pwsspe
        subject_person_id: p_P6tjx484JSND9cBLxhLfkk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2qWXzcYNHp14Mtr6nphKpL
          claim_id: c_25t5T6SnzvEvLrr8Pwsspe
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
        - id: cs_XQN96q3riqkb5Wyy2cbiZT
          claim_id: c_25t5T6SnzvEvLrr8Pwsspe
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
        - id: cs_N5RMhc8Bc5moL8SVXvUv1m
          claim_id: c_25t5T6SnzvEvLrr8Pwsspe
          source_id: s_BAwJwAgNmuXwsxs8JuEuLB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_BAwJwAgNmuXwsxs8JuEuLB
            source_type: api_record
            title: 维基数据：王胄（Q45421029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421029
            external_identifier: Q45421029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:25.218Z
            metadata_json: null
        - id: cs_KFUau6Rm2HSoDDuspDhGoh
          claim_id: c_25t5T6SnzvEvLrr8Pwsspe
          source_id: s_dHUf44WWxwuAr9NUFLwqKP
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_dHUf44WWxwuAr9NUFLwqKP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王冑（32172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32172&o=json
            external_identifier: CBDB:32172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:25.349Z
            metadata_json: null
      object_person:
        id: p_P6tjx484JSND9cBLxhLfkk
        status: active
        display_name: 王胄
        merged_into_person_id: null
  children:
    - claim:
        id: c_BazdirpXTkZ4Nk9d5oiS6u
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fb1Y7PaCUiyrjL5WpXJdPH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NxGWxoDjXJSfH78qhVCovE
          claim_id: c_BazdirpXTkZ4Nk9d5oiS6u
          source_id: s_7K68Eq6C9Z5MGCfQJo2Jrg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7K68Eq6C9Z5MGCfQJo2Jrg
            source_type: website
            title: 中文维基百科：王维
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王维
            external_identifier: Q313605
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_JZ1X7TxrpPciDoPPaigyED
          claim_id: c_BazdirpXTkZ4Nk9d5oiS6u
          source_id: s_Dd3cHwbtB5MU9LdhohP6RC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Dd3cHwbtB5MU9LdhohP6RC
            source_type: api_record
            title: 維基數據：王维（Q313605）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q313605
            external_identifier: Q313605
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:37.666Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%B4
        - id: cs_9Kv699Sybg6UPrazggSgiS
          claim_id: c_BazdirpXTkZ4Nk9d5oiS6u
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
        - id: cs_NFwfh8jgm3fD5i8sq2iEQ6
          claim_id: c_BazdirpXTkZ4Nk9d5oiS6u
          source_id: s_iHe98UEwRyZGHfG6w5M6Xc
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_iHe98UEwRyZGHfG6w5M6Xc
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王維（32174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32174&o=json
            external_identifier: CBDB:32174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.865Z
            metadata_json: null
        - id: cs_2Nj5CBYokggnGJHbvw9SpT
          claim_id: c_BazdirpXTkZ4Nk9d5oiS6u
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
        - id: cs_rB5QFLdMxyfQmUcEbEmKgh
          claim_id: c_BazdirpXTkZ4Nk9d5oiS6u
          source_id: s_18FPKAUu6NBN99q2AtF9F9
          stance: supports
          locator: 条文：条文识读（父親）
          quotation: 父親王處廉的任官都止於州司馬
          interpretation_note: null
          source:
            id: s_18FPKAUu6NBN99q2AtF9F9
            source_type: website
            title: 中文维基百科：王维
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%B4
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:06.879Z
            metadata_json: null
      object_person:
        id: p_Fb1Y7PaCUiyrjL5WpXJdPH
        status: active
        display_name: 王维
        merged_into_person_id: null
    - claim:
        id: c_4SD9bd1tn7ZBN7g8h6NC2Y
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ADQADMoywb8nRBdiv1tZwW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1tpAbuxXvZxAhpNwDtrMqx
          claim_id: c_4SD9bd1tn7ZBN7g8h6NC2Y
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
        - id: cs_3q76GgKZ1KVQrgopKCZZTq
          claim_id: c_4SD9bd1tn7ZBN7g8h6NC2Y
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
        - id: cs_1sVyWKiNKfm2UCqjSkGKAt
          claim_id: c_4SD9bd1tn7ZBN7g8h6NC2Y
          source_id: s_LaBdcHuq6xghYfHLxMJ6yf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_LaBdcHuq6xghYfHLxMJ6yf
            source_type: api_record
            title: 维基数据：王绎（Q45421039）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421039
            external_identifier: Q45421039
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:26.291Z
            metadata_json: null
        - id: cs_jfYkXibaHKQsug8Px2B61U
          claim_id: c_4SD9bd1tn7ZBN7g8h6NC2Y
          source_id: s_f8CTQBHoP6rK5hQJUHDDLP
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_f8CTQBHoP6rK5hQJUHDDLP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王繹（32176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32176&o=json
            external_identifier: CBDB:32176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:26.427Z
            metadata_json: null
      object_person:
        id: p_ADQADMoywb8nRBdiv1tZwW
        status: active
        display_name: 王绎
        merged_into_person_id: null
    - claim:
        id: c_CVZz8tmh8gAGkZefhFG1S1
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QHxmQDTQCpGLmDZqqWdL7U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ltpu5cBi4XeNAxiMYGFvfz
          claim_id: c_CVZz8tmh8gAGkZefhFG1S1
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
        - id: cs_W2X7rowYmQUUfkSAfPQqDx
          claim_id: c_CVZz8tmh8gAGkZefhFG1S1
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：四子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
        - id: cs_kAXk97YK5D33SNck5t447g
          claim_id: c_CVZz8tmh8gAGkZefhFG1S1
          source_id: s_CkpwCAFuLfszgzWqBB6uvG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CkpwCAFuLfszgzWqBB6uvG
            source_type: api_record
            title: 维基数据：王弦（Q45421041）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421041
            external_identifier: Q45421041
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:27.371Z
            metadata_json: null
        - id: cs_3GE1Hkcn55ZgAC13V6tviB
          claim_id: c_CVZz8tmh8gAGkZefhFG1S1
          source_id: s_VrXEVBFSubt7wze6RTFY9F
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_VrXEVBFSubt7wze6RTFY9F
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王絃（32177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32177&o=json
            external_identifier: CBDB:32177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:27.502Z
            metadata_json: null
      object_person:
        id: p_QHxmQDTQCpGLmDZqqWdL7U
        status: active
        display_name: 王弦
        merged_into_person_id: null
    - claim:
        id: c_Lwdwb4WwsujLkBpwekmoK9
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ArCUPxq9hGppQo3HaUfMgD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EcrtT8vMi6DJLHfBy4QLcF
          claim_id: c_Lwdwb4WwsujLkBpwekmoK9
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
      object_person:
        id: p_ArCUPxq9hGppQo3HaUfMgD
        status: active
        display_name: 王繟
        merged_into_person_id: null
    - claim:
        id: c_6riyjBDRgDzr22aAwQDUS5
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_24MCLxi9vqWot9y9ra6B3D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DSxmLNMt43FjNqomjzEWAH
          claim_id: c_6riyjBDRgDzr22aAwQDUS5
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
      object_person:
        id: p_24MCLxi9vqWot9y9ra6B3D
        status: active
        display_name: 王紘
        merged_into_person_id: null
    - claim:
        id: c_6MqqC4NVh3KRU8uNiduM6n
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g6dF114X12m5d8tCHGiM7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NJAKJ9tNKTetNLhhvwf5Y5
          claim_id: c_6MqqC4NVh3KRU8uNiduM6n
          source_id: s_eo9U68684Mc2u9zxYYMTcx
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父亲王处廉都官至司马，祖父王胄则任協律郎。
          interpretation_note: null
          source:
            id: s_eo9U68684Mc2u9zxYYMTcx
            source_type: website
            title: 中文维基百科：王缙
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BC%99
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:21.391Z
            metadata_json: null
        - id: cs_sj1uvgz172wXSkvZLBCuZS
          claim_id: c_6MqqC4NVh3KRU8uNiduM6n
          source_id: s_AGakG5bbHFmhgZWp8ZK7kp
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父亲王处廉都官至司马，祖父王胄则任協律郎。
          interpretation_note: null
          source:
            id: s_AGakG5bbHFmhgZWp8ZK7kp
            source_type: website
            title: 中文维基百科：王缙
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BC%99
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:51.381Z
            metadata_json: null
        - id: cs_YMU1i8jA6hiByvz52HQeYP
          claim_id: c_6MqqC4NVh3KRU8uNiduM6n
          source_id: s_vm6vQomyBVb58ny6Yeka5P
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父亲王处廉都官至司马，祖父王胄则任協律郎。
          interpretation_note: null
          source:
            id: s_vm6vQomyBVb58ny6Yeka5P
            source_type: website
            title: 中文维基百科：王缙
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BC%99
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:52.954Z
            metadata_json: null
        - id: cs_FrraHe3MsG5E7fQoafJWaL
          claim_id: c_6MqqC4NVh3KRU8uNiduM6n
          source_id: s_M5ELS1oTvBNBAD9VXYPDni
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父亲王处廉
          interpretation_note: null
          source:
            id: s_M5ELS1oTvBNBAD9VXYPDni
            source_type: website
            title: 中文维基百科：王缙
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BC%99
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:08.790Z
            metadata_json: null
        - id: cs_Hrp4xNd5EEW42ovkmJ1JF6
          claim_id: c_6MqqC4NVh3KRU8uNiduM6n
          source_id: s_LiKViEEeW5ghM63fBmpxqv
          stance: supports
          locator: 条文：条文识读（parent）
          quotation: 他的四世祖王儒贤、曾祖王知节、父亲王处廉都官至司马
          interpretation_note: null
          source:
            id: s_LiKViEEeW5ghM63fBmpxqv
            source_type: website
            title: 中文维基百科：王缙
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BC%99
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:56:21.741Z
            metadata_json: null
      object_person:
        id: p_g6dF114X12m5d8tCHGiM7v
        status: active
        display_name: 王缙
        merged_into_person_id: null
    - claim:
        id: c_dbgoVsb2iadF4Y3k2tuXAf
        subject_person_id: p_LhrXSwBKuTqBng4RsWfQ9E
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jcRs628fmTNgkA6qAAYtH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RP1UZ1Zx8P2rop2CVVc74t
          claim_id: c_dbgoVsb2iadF4Y3k2tuXAf
          source_id: s_XmK4uXKaoBAKcwvzzk8Dzr
          stance: supports
          locator: 卷七十二中·河东王氏
          quotation: 處廉生維、縉、繟、紘、紞。
          interpretation_note: 原文作王紞；库内人物 Q45421044/CBDB 32178 的主名字形为王𬘘，CBDB 同时明确其父为王處廉。
          source:
            id: s_XmK4uXKaoBAKcwvzzk8Dzr
            source_type: book
            title: 中文维基文库：新唐書/卷072中
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T10:12:55.026Z
            metadata_json: null
        - id: cs_UjDYB4wc9QuYFvG1BeZ5Bq
          claim_id: c_dbgoVsb2iadF4Y3k2tuXAf
          source_id: s_HqRrMT9yszgHjvPBBXB6LL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HqRrMT9yszgHjvPBBXB6LL
            source_type: api_record
            title: 維基數據：王处廉（Q45421031）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421031
            external_identifier: Q45421031
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:53.926Z
            metadata_json: null
        - id: cs_b6eXxdEYVVcXL92tuQnTWp
          claim_id: c_dbgoVsb2iadF4Y3k2tuXAf
          source_id: s_kPTm95xyHupfP8rVqgAjEL
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPTm95xyHupfP8rVqgAjEL
            source_type: api_record
            title: 维基数据：王𬘘（Q45421044）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45421044
            external_identifier: Q45421044
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:28.442Z
            metadata_json: null
        - id: cs_yAzXcATB8PifACdTEdHYfz
          claim_id: c_dbgoVsb2iadF4Y3k2tuXAf
          source_id: s_aNun5qZFaVaT8dqBJrt7kz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_aNun5qZFaVaT8dqBJrt7kz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王處廉（32173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json
            external_identifier: CBDB:32173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:25.998Z
            metadata_json: null
      object_person:
        id: p_jcRs628fmTNgkA6qAAYtH9
        status: active
        display_name: 王𬘘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王处廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王处廉，史料所见人物。本项目依据《維基數據：王处廉》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王处廉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P6tjx484JSND9cBLxhLfkk | 王胄 | accepted |
| children | p_Fb1Y7PaCUiyrjL5WpXJdPH | 王维 | accepted |
| children | p_ADQADMoywb8nRBdiv1tZwW | 王绎 | accepted |
| children | p_QHxmQDTQCpGLmDZqqWdL7U | 王弦 | accepted |
| children | p_ArCUPxq9hGppQo3HaUfMgD | 王繟 | accepted |
| children | p_24MCLxi9vqWot9y9ra6B3D | 王紘 | accepted |
| children | p_g6dF114X12m5d8tCHGiM7v | 王缙 | accepted |
| children | p_jcRs628fmTNgkA6qAAYtH9 | 王𬘘 | accepted |

## 外部来源

- [维基数据：王𬘘（Q45421044）](https://www.wikidata.org/wiki/Q45421044)
- [维基数据：王弦（Q45421041）](https://www.wikidata.org/wiki/Q45421041)
- [维基数据：王绎（Q45421039）](https://www.wikidata.org/wiki/Q45421039)
- [维基数据：王胄（Q45421029）](https://www.wikidata.org/wiki/Q45421029)
- [維基數據：王处廉（Q45421031）](https://www.wikidata.org/wiki/Q45421031)
- [維基數據：王维（Q313605）](https://www.wikidata.org/wiki/Q313605)
- [中文维基百科：王缙](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BC%99)
- [中文维基百科：王维](https://zh.wikipedia.org/wiki/王维)
- [中文维基百科：王维](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BB%B4)
- [中文维基文库：新唐書/卷072中](https://zh.wikisource.org/wiki/%E6%96%B0%E5%94%90%E6%9B%B8%2F%E5%8D%B7072%E4%B8%AD)
- [CBDB 中国历代人物传记资料库：王處廉（32173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32173&o=json)
- [CBDB 中国历代人物传记资料库：王維（32174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32174&o=json)
- [CBDB 中国历代人物传记资料库：王絃（32177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32177&o=json)
- [CBDB 中国历代人物传记资料库：王繹（32176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32176&o=json)
- [CBDB 中国历代人物传记资料库：王冑（32172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32172&o=json)

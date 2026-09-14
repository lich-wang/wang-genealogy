---
schema: wang-person/v1
id: p_XiFFgCxGPLXnJMQFHkL5MX
status: active
merged_into: null
display_name: 王鵬
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KWM6ekrZb2P3qz9kh3YRgh
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y3UrrWAnEtdhhDQYinmN3u
          claim_id: c_KWM6ekrZb2P3qz9kh3YRgh
          source_id: s_UZCBKEFAMpiFeLAGpmxNVQ
          stance: supports
          locator: CBDB:309076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309076）
          source: &a1
            id: s_UZCBKEFAMpiFeLAGpmxNVQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬（CBDB 309076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309076&o=json
            external_identifier: CBDB:309076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bXA2mGLZPJyaJDFQrd1yxq
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬，明人物。嘉靖二十六年進士，籍贯黔陽，曾任縣丞。（中国历代人物传记资料库 CBDB 309076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uSwvOKUG6JrsDQgBA73zPP
          claim_id: c_bXA2mGLZPJyaJDFQrd1yxq
          source_id: s_UZCBKEFAMpiFeLAGpmxNVQ
          stance: supports
          locator: CBDB:309076
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fGFo1HrfJ1LTKYraCMAbxa
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t3fP0h1zOuaYjLlsVVgLOG
          claim_id: c_fGFo1HrfJ1LTKYraCMAbxa
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gQ1iyNseF56QiyBot1tdVq
            source_type: api_record
            title: 中国历代人物传记资料库：王有為（CBDB 203722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json
            external_identifier: CBDB:203722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m1KPPjDFuB77sgosg8dB61
        status: active
        display_name: 王有為
        merged_into_person_id: null
    - claim:
        id: c_pujE8B7fnhoK1oneZb1qX_
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ZA1HPpsbqBBBsxMD2HU8E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x_D8YtZpYEanvjet2qj8wr
          claim_id: c_pujE8B7fnhoK1oneZb1qX_
          source_id: s_2wnKy6Y67A-B5VURXxskU7
          stance: supports
          locator: CBDB：兄弟 王有為（203722）之父／母 王鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王有守 与 王有為 为同胞（CBDB 记「兄」），王有為 之父／母即 王有守 之父／母。
          source:
            id: s_2wnKy6Y67A-B5VURXxskU7
            source_type: api_record
            title: 中国历代人物传记资料库：王有守（CBDB 309081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309081&o=json
            external_identifier: CBDB:309081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ZA1HPpsbqBBBsxMD2HU8E
        status: active
        display_name: 王有守
        merged_into_person_id: null
    - claim:
        id: c_njdXzQr0K9a2p6uOe1rOWC
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RwxHF1Ntsy8Aq41TEDYhAY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rbCLi9AKcPCdFlQkct6hGL
          claim_id: c_njdXzQr0K9a2p6uOe1rOWC
          source_id: s_ZmGbx32Udb-1fg0HO9xGng
          stance: supports
          locator: CBDB：兄弟 王有為（203722）之父／母 王鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王有藩 与 王有為 为同胞（CBDB 记「兄」），王有為 之父／母即 王有藩 之父／母。
          source:
            id: s_ZmGbx32Udb-1fg0HO9xGng
            source_type: api_record
            title: 中国历代人物传记资料库：王有藩（CBDB 309082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309082&o=json
            external_identifier: CBDB:309082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RwxHF1Ntsy8Aq41TEDYhAY
        status: active
        display_name: 王有藩
        merged_into_person_id: null
    - claim:
        id: c_2CvDLwza1LC5iASxT8nx6r
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fE1qPb3wvPQVPGAw5Pu7n9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yWJJU7zRJjYRhO2g3FUcKY
          claim_id: c_2CvDLwza1LC5iASxT8nx6r
          source_id: s_v2KFNFOz0qysv6dUl2z5DU
          stance: supports
          locator: CBDB：兄弟 王有為（203722）之父／母 王鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王有賢 与 王有為 为同胞（CBDB 记「兄」），王有為 之父／母即 王有賢 之父／母。
          source:
            id: s_v2KFNFOz0qysv6dUl2z5DU
            source_type: api_record
            title: 中国历代人物传记资料库：王有賢（CBDB 309080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309080&o=json
            external_identifier: CBDB:309080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fE1qPb3wvPQVPGAw5Pu7n9
        status: active
        display_name: 王有賢
        merged_into_person_id: null
    - claim:
        id: c_wsI02a1JT5cQD125ZukJMP
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nKsY4L4FfA8dEDc3nH5XYS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yAIwbEVCkEeSzJFIs5cUI2
          claim_id: c_wsI02a1JT5cQD125ZukJMP
          source_id: s_2hazCDN3yDeSey7hXQBTaG
          stance: supports
          locator: CBDB：兄弟 王有為（203722）之父／母 王鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王有道 与 王有為 为同胞（CBDB 记「兄」），王有為 之父／母即 王有道 之父／母。
          source:
            id: s_2hazCDN3yDeSey7hXQBTaG
            source_type: api_record
            title: 中国历代人物传记资料库：王有道（CBDB 309079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309079&o=json
            external_identifier: CBDB:309079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nKsY4L4FfA8dEDc3nH5XYS
        status: active
        display_name: 王有道
        merged_into_person_id: null
    - claim:
        id: c_riEjWvWDLcKYV7RyPXckg6
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ySzH8rSRmy2shrr3rmjntz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X-l_HiJsIltsKbYE5Jwkfg
          claim_id: c_riEjWvWDLcKYV7RyPXckg6
          source_id: s_WqBVo85uO33LCraL9rl_9D
          stance: supports
          locator: CBDB：兄弟 王有為（203722）之父／母 王鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王有年 与 王有為 为同胞（CBDB 记「兄」），王有為 之父／母即 王有年 之父／母。
          source:
            id: s_WqBVo85uO33LCraL9rl_9D
            source_type: api_record
            title: 中国历代人物传记资料库：王有年（CBDB 309083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309083&o=json
            external_identifier: CBDB:309083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ySzH8rSRmy2shrr3rmjntz
        status: active
        display_name: 王有年
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬 | accepted |
| bio.summary | 王鵬，明人物。嘉靖二十六年進士，籍贯黔陽，曾任縣丞。（中国历代人物传记资料库 CBDB 309076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_m1KPPjDFuB77sgosg8dB61 | 王有為 | accepted |
| children | p_6ZA1HPpsbqBBBsxMD2HU8E | 王有守 | accepted |
| children | p_RwxHF1Ntsy8Aq41TEDYhAY | 王有藩 | accepted |
| children | p_fE1qPb3wvPQVPGAw5Pu7n9 | 王有賢 | accepted |
| children | p_nKsY4L4FfA8dEDc3nH5XYS | 王有道 | accepted |
| children | p_ySzH8rSRmy2shrr3rmjntz | 王有年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鵬（CBDB 309076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309076&o=json)
- [中国历代人物传记资料库：王有道（CBDB 309079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309079&o=json)
- [中国历代人物传记资料库：王有藩（CBDB 309082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309082&o=json)
- [中国历代人物传记资料库：王有年（CBDB 309083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309083&o=json)
- [中国历代人物传记资料库：王有守（CBDB 309081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309081&o=json)
- [中国历代人物传记资料库：王有為（CBDB 203722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json)
- [中国历代人物传记资料库：王有賢（CBDB 309080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309080&o=json)

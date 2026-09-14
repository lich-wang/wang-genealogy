---
schema: wang-person/v1
id: p_4rZFET2VU5QfJTezy8ktoQ
status: active
merged_into: null
display_name: 王來召
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sGQKYz9L1q3cBJLsE6Bf3Y
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來召
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Uko4LC2b6fxLQshnw2YVe
          claim_id: c_sGQKYz9L1q3cBJLsE6Bf3Y
          source_id: s_WWo3kG2R2Pqv7JiMi5mLqk
          stance: supports
          locator: CBDB:328246
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328246）
          source: &a1
            id: s_WWo3kG2R2Pqv7JiMi5mLqk
            source_type: api_record
            title: 中国历代人物传记资料库：王來召（CBDB 328246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328246&o=json
            external_identifier: CBDB:328246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.295Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B96EmdxwcFHbPfoR1sMJfj
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來召，明人物。嘉靖四十一年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 328246）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G4c5XMPhNHAV_asGsLvC8i
          claim_id: c_B96EmdxwcFHbPfoR1sMJfj
          source_id: s_WWo3kG2R2Pqv7JiMi5mLqk
          stance: supports
          locator: CBDB:328246
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SnhpLj1dfndDldT9yzANsl
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EubdaeFSWc8pKsGxhe2PFM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LymFw1VWJbC8JscJ7YZvWZ
          claim_id: c_SnhpLj1dfndDldT9yzANsl
          source_id: s_WWo3kG2R2Pqv7JiMi5mLqk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EubdaeFSWc8pKsGxhe2PFM
        status: active
        display_name: 王學古
        merged_into_person_id: null
    - claim:
        id: c_Pn-B3V-1Jrllgv8KIiWIbZ
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2s8aBYKDBC3T1HYGSUcTDN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-BFtYIV8d5R2Lh6rbQO7GY
          claim_id: c_Pn-B3V-1Jrllgv8KIiWIbZ
          source_id: s_OxX0WUFSrbURw70en3Sm-j
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學淵 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學淵 之父／母。
          source:
            id: s_OxX0WUFSrbURw70en3Sm-j
            source_type: api_record
            title: 中国历代人物传记资料库：王學淵（CBDB 328258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328258&o=json
            external_identifier: CBDB:328258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2s8aBYKDBC3T1HYGSUcTDN
        status: active
        display_name: 王學淵
        merged_into_person_id: null
    - claim:
        id: c_19AKYchd671rb6oXB0-90_
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ApG3DVV2gRaJPESw5Nde1D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9VzDtRHRPCBmeDFPPHagt8
          claim_id: c_19AKYchd671rb6oXB0-90_
          source_id: s_MNk9h-4tBtUHRbQsCGP3iC
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學問 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學問 之父／母。
          source:
            id: s_MNk9h-4tBtUHRbQsCGP3iC
            source_type: api_record
            title: 中国历代人物传记资料库：王學問（CBDB 328252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328252&o=json
            external_identifier: CBDB:328252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ApG3DVV2gRaJPESw5Nde1D
        status: active
        display_name: 王學問
        merged_into_person_id: null
    - claim:
        id: c_fU6SzLTHoMG-H2Sx7A07mp
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DyDwnotNaEGHDTfCUEzzuL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XbfBExNsvve3q3_kIXNLR9
          claim_id: c_fU6SzLTHoMG-H2Sx7A07mp
          source_id: s_MfD6O9BWI85vfRJrkyiLC9
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學閩 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學閩 之父／母。
          source:
            id: s_MfD6O9BWI85vfRJrkyiLC9
            source_type: api_record
            title: 中国历代人物传记资料库：王學閩（CBDB 328256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328256&o=json
            external_identifier: CBDB:328256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DyDwnotNaEGHDTfCUEzzuL
        status: active
        display_name: 王學閩
        merged_into_person_id: null
    - claim:
        id: c_nlSvHTYZFUAqHdMewkmX8Y
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P3JXgAo8uqV4W8uPXgoVMo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LwcNmJeUBX2iQ_06ECZZkX
          claim_id: c_nlSvHTYZFUAqHdMewkmX8Y
          source_id: s_smZ2rhQrLzIWBgVofv33LB
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學呂 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學呂 之父／母。
          source:
            id: s_smZ2rhQrLzIWBgVofv33LB
            source_type: api_record
            title: 中国历代人物传记资料库：王學呂（CBDB 328250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328250&o=json
            external_identifier: CBDB:328250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P3JXgAo8uqV4W8uPXgoVMo
        status: active
        display_name: 王學呂
        merged_into_person_id: null
    - claim:
        id: c_-rDU4hLWPNSD-sUFZAo9d3
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_avLQ7dwMeTkL41yvPqo18f
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E0iQvf0g4TayJg7jyVcj7H
          claim_id: c_-rDU4hLWPNSD-sUFZAo9d3
          source_id: s_cW-dpF9HtXY1Ni3j9hWquZ
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學詩 与 王學古 为同胞（CBDB 记「弟」），王學古 之父／母即 王學詩 之父／母。
          source:
            id: s_cW-dpF9HtXY1Ni3j9hWquZ
            source_type: api_record
            title: 中国历代人物传记资料库：王學詩（CBDB 328249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328249&o=json
            external_identifier: CBDB:328249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_avLQ7dwMeTkL41yvPqo18f
        status: active
        display_name: 王學詩
        merged_into_person_id: null
    - claim:
        id: c_FYmeUc9NyGyXmelZulVQKx
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bjuGL4Uk7bjH32ZBbY5LKt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wRYUorY2TTT_r5avd2gFKf
          claim_id: c_FYmeUc9NyGyXmelZulVQKx
          source_id: s_iE6xg75UAzG5AvUUCIWGZn
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學閔 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學閔 之父／母。
          source:
            id: s_iE6xg75UAzG5AvUUCIWGZn
            source_type: api_record
            title: 中国历代人物传记资料库：王學閔（CBDB 328254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328254&o=json
            external_identifier: CBDB:328254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bjuGL4Uk7bjH32ZBbY5LKt
        status: active
        display_name: 王學閔
        merged_into_person_id: null
    - claim:
        id: c_FaeWJKPdsY2KfUvBTEgAHr
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mKC9weEHWjFT3p3rLUuXK5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v6QV9YJGvqiZwL-c91Rka6
          claim_id: c_FaeWJKPdsY2KfUvBTEgAHr
          source_id: s_slL-S2efElCgvXwD6pqhwv
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學關 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學關 之父／母。
          source:
            id: s_slL-S2efElCgvXwD6pqhwv
            source_type: api_record
            title: 中国历代人物传记资料库：王學關（CBDB 328255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328255&o=json
            external_identifier: CBDB:328255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mKC9weEHWjFT3p3rLUuXK5
        status: active
        display_name: 王學關
        merged_into_person_id: null
    - claim:
        id: c_gHirKNoKSsPLlB7oYDXoDg
        subject_person_id: p_4rZFET2VU5QfJTezy8ktoQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rEn5d5M4F5rsvt2FFZCJAG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pIPQmBMfoYS2MuaR_nJLfE
          claim_id: c_gHirKNoKSsPLlB7oYDXoDg
          source_id: s_uEgBcY-it8n3FgujHeRCze
          stance: supports
          locator: CBDB：兄弟 王學古（205095）之父／母 王來召
          quotation: null
          interpretation_note: 由兄弟关系推断：王學洛 与 王學古 为同胞（CBDB 记「兄」），王學古 之父／母即 王學洛 之父／母。
          source:
            id: s_uEgBcY-it8n3FgujHeRCze
            source_type: api_record
            title: 中国历代人物传记资料库：王學洛（CBDB 328257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328257&o=json
            external_identifier: CBDB:328257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rEn5d5M4F5rsvt2FFZCJAG
        status: active
        display_name: 王學洛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王來召

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來召 | accepted |
| bio.summary | 王來召，明人物。嘉靖四十一年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 328246） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EubdaeFSWc8pKsGxhe2PFM | 王學古 | accepted |
| children | p_2s8aBYKDBC3T1HYGSUcTDN | 王學淵 | accepted |
| children | p_ApG3DVV2gRaJPESw5Nde1D | 王學問 | accepted |
| children | p_DyDwnotNaEGHDTfCUEzzuL | 王學閩 | accepted |
| children | p_P3JXgAo8uqV4W8uPXgoVMo | 王學呂 | accepted |
| children | p_avLQ7dwMeTkL41yvPqo18f | 王學詩 | accepted |
| children | p_bjuGL4Uk7bjH32ZBbY5LKt | 王學閔 | accepted |
| children | p_mKC9weEHWjFT3p3rLUuXK5 | 王學關 | accepted |
| children | p_rEn5d5M4F5rsvt2FFZCJAG | 王學洛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來召（CBDB 328246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328246&o=json)
- [中国历代人物传记资料库：王學關（CBDB 328255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328255&o=json)
- [中国历代人物传记资料库：王學呂（CBDB 328250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328250&o=json)
- [中国历代人物传记资料库：王學洛（CBDB 328257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328257&o=json)
- [中国历代人物传记资料库：王學閔（CBDB 328254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328254&o=json)
- [中国历代人物传记资料库：王學閩（CBDB 328256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328256&o=json)
- [中国历代人物传记资料库：王學詩（CBDB 328249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328249&o=json)
- [中国历代人物传记资料库：王學問（CBDB 328252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328252&o=json)
- [中国历代人物传记资料库：王學淵（CBDB 328258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328258&o=json)

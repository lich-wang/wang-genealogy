---
schema: wang-person/v1
id: p_DA2QvREynL5ZUoyG8V9cNp
status: active
merged_into: null
display_name: 王春澤
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5oivgDAMqnUXpompMJPmYT
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CH8QgzjnuzbJcw9KqJ1r4A
          claim_id: c_5oivgDAMqnUXpompMJPmYT
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
          stance: supports
          locator: CBDB:126604
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126604）
          source: &a1
            id: s_8PiY9j7LrXwCzoFvhobTJG
            source_type: api_record
            title: 中国历代人物传记资料库：王春澤（CBDB 126604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126604&o=json
            external_identifier: CBDB:126604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Qo73nJSpRTusUj6Yee611q
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LK3Sf1fD8sC9boFqas1JCc
          claim_id: c_Qo73nJSpRTusUj6Yee611q
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gUX9zXkUxMSs8U46cvMUwj
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1602年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MS8qfVzRxfNpcCJmwbB9pz
          claim_id: c_gUX9zXkUxMSs8U46cvMUwj
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q8MuSeArgtL6vGku7yieCR
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春澤（1515年—1602年），明人物。明清進士進士，籍贯漳浦，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126604）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e1eCgSVrttZcp-00CfXaBo
          claim_id: c_q8MuSeArgtL6vGku7yieCR
          source_id: s_8PiY9j7LrXwCzoFvhobTJG
          stance: supports
          locator: CBDB:126604
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EScBJlf4iptlRWUea6dRRF
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ihJYwIQ4q8inh0LtOaXpNJ
          claim_id: c_EScBJlf4iptlRWUea6dRRF
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xKQ5jL6DiHY4YSqMSAPFzD
            source_type: api_record
            title: 中国历代人物传记资料库：王豸（CBDB 308956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json
            external_identifier: CBDB:308956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EfJdyGwVk7PiJrwsDYXbLo
        status: active
        display_name: 王豸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qumh4sIxPQGtRfRYI75kOD
        subject_person_id: p_84TjPXi8y71DsxeYjH99RG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PzRovKNnj9NRz5P-vzWp5g
          claim_id: c_qumh4sIxPQGtRfRYI75kOD
          source_id: s_49xgzFB5NBr4mo8s3DtWKL
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_49xgzFB5NBr4mo8s3DtWKL
            source_type: api_record
            title: 中国历代人物传记资料库：王龍（CBDB 308955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308955&o=json
            external_identifier: CBDB:308955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_84TjPXi8y71DsxeYjH99RG
        status: active
        display_name: 王龍
        merged_into_person_id: null
    - claim:
        id: c_rViSKeVXAbbu0i5bd9Oojb
        subject_person_id: p_Q97RpGJWmqxnuE8gi5DWLA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGphzrJCS8XQFkiq_l2rD2
          claim_id: c_rViSKeVXAbbu0i5bd9Oojb
          source_id: s_E3MmrfYHC1SmF7fstfu8kQ
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第三十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_E3MmrfYHC1SmF7fstfu8kQ
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 308954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308954&o=json
            external_identifier: CBDB:308954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.800Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q97RpGJWmqxnuE8gi5DWLA
        status: active
        display_name: 王亨
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Nj8ha9Wq_C5IHTppRQPjzR
        subject_person_id: p_39miVJyWesZ6B5d95cz7mV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p5x4CcplpnhvkUuXj0nW2L
          claim_id: c_Nj8ha9Wq_C5IHTppRQPjzR
          source_id: s_RHiEFdLtzvlu1cTLBCSkow
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126604 王春澤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RHiEFdLtzvlu1cTLBCSkow
            source_type: api_record
            title: 中国历代人物传记资料库：王春淮（CBDB 308960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308960&o=json
            external_identifier: CBDB:308960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_39miVJyWesZ6B5d95cz7mV
        status: active
        display_name: 王春淮
        merged_into_person_id: null
    - claim:
        id: c_GsipsiSdK0-sHz02NXXAoE
        subject_person_id: p_AyM5oz23v2ukFDBYDNSmMz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2P9C8nx8tCB4AO51YIj6Mm
          claim_id: c_GsipsiSdK0-sHz02NXXAoE
          source_id: s_8AFiw2Q8s3Ve3KAMjpWEY5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126604 王春澤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8AFiw2Q8s3Ve3KAMjpWEY5
            source_type: api_record
            title: 中国历代人物传记资料库：王春瀾（CBDB 308959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308959&o=json
            external_identifier: CBDB:308959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AyM5oz23v2ukFDBYDNSmMz
        status: active
        display_name: 王春瀾
        merged_into_person_id: null
    - claim:
        id: c_WzrcCI8-aKfnH5fbZPDh5K
        subject_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wu6s3A9WJ69UBGd66ce1zF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XUFRB6aLx26t0Z5hia0vcB
          claim_id: c_WzrcCI8-aKfnH5fbZPDh5K
          source_id: s_jQ_wrz1QbTRgDVHMrn4MFv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126604 王春澤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jQ_wrz1QbTRgDVHMrn4MFv
            source_type: api_record
            title: 中国历代人物传记资料库：王春洛（CBDB 308961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308961&o=json
            external_identifier: CBDB:308961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wu6s3A9WJ69UBGd66ce1zF
        status: active
        display_name: 王春洛
        merged_into_person_id: null
---

# 王春澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春澤 | accepted |
| birth.date | 1515年 | accepted |
| death.date | 1602年 | accepted |
| bio.summary | 王春澤（1515年—1602年），明人物。明清進士進士，籍贯漳浦，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126604） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EfJdyGwVk7PiJrwsDYXbLo | 王豸 | accepted |
| ancestors | p_84TjPXi8y71DsxeYjH99RG | 王龍 | accepted |
| ancestors | p_Q97RpGJWmqxnuE8gi5DWLA | 王亨 | accepted |
| other | p_39miVJyWesZ6B5d95cz7mV | 王春淮 | accepted |
| other | p_AyM5oz23v2ukFDBYDNSmMz | 王春瀾 | accepted |
| other | p_wu6s3A9WJ69UBGd66ce1zF | 王春洛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春淮（CBDB 308960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308960&o=json)
- [中国历代人物传记资料库：王春瀾（CBDB 308959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308959&o=json)
- [中国历代人物传记资料库：王春洛（CBDB 308961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308961&o=json)
- [中国历代人物传记资料库：王春澤（CBDB 126604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126604&o=json)
- [中国历代人物传记资料库：王亨（CBDB 308954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308954&o=json)
- [中国历代人物传记资料库：王龍（CBDB 308955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308955&o=json)
- [中国历代人物传记资料库：王豸（CBDB 308956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json)

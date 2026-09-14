---
schema: wang-person/v1
id: p_zzbxUSbck9VSNxAFtK3Pab
status: active
merged_into: null
display_name: 王建中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KvrW2VQwHKnHT2LZk3e1uf
        subject_person_id: p_zzbxUSbck9VSNxAFtK3Pab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A8fQM4Y2mviGS5aTCvSKh2
          claim_id: c_KvrW2VQwHKnHT2LZk3e1uf
          source_id: s_9XHN323FUG1H7NtLytkMJo
          stance: supports
          locator: CBDB:233441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233441）
          source: &a1
            id: s_9XHN323FUG1H7NtLytkMJo
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 233441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233441&o=json
            external_identifier: CBDB:233441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DnoQCMz8CbQ4Zp2X6PffTn
        subject_person_id: p_zzbxUSbck9VSNxAFtK3Pab
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建中，明人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 233441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b2TH2Y5rdLVOdQs0MUjzEU
          claim_id: c_DnoQCMz8CbQ4Zp2X6PffTn
          source_id: s_9XHN323FUG1H7NtLytkMJo
          stance: supports
          locator: CBDB:233441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wVscYfEX8DvIec9acCw9Zb
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zzbxUSbck9VSNxAFtK3Pab
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vTbJQNo5t814Ue3hiu3oOc
          claim_id: c_wVscYfEX8DvIec9acCw9Zb
          source_id: s_gG7ix5CdmLvy37HbdsmwzK
          stance: supports
          locator: CBDB：兄弟 王家相（207666）之父／母 王釗
          quotation: null
          interpretation_note: 由兄弟关系推断：王建中 与 王家相 为同胞（CBDB 记「弟」），王家相 之父／母即 王建中 之父／母。
          source:
            id: s_gG7ix5CdmLvy37HbdsmwzK
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 233441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233441&o=json
            external_identifier: CBDB:233441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uE1u3bYV3J8fuYnjaWRvAs
        status: active
        display_name: 王釗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_3kOG5M1lCo2ArHZmawOGps
        subject_person_id: p_cpGBEq63QojtvoRHpvNFEb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zzbxUSbck9VSNxAFtK3Pab
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_75klvOR1KiQA-XAJMTz0ju
          claim_id: c_3kOG5M1lCo2ArHZmawOGps
          source_id: s_gG7ix5CdmLvy37HbdsmwzK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207666 王家相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gG7ix5CdmLvy37HbdsmwzK
            source_type: api_record
            title: 中国历代人物传记资料库：王建中（CBDB 233441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233441&o=json
            external_identifier: CBDB:233441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cpGBEq63QojtvoRHpvNFEb
        status: active
        display_name: 王家相
        merged_into_person_id: null
---

# 王建中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建中 | accepted |
| bio.summary | 王建中，明人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 233441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uE1u3bYV3J8fuYnjaWRvAs | 王釗 | accepted |
| other | p_cpGBEq63QojtvoRHpvNFEb | 王家相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建中（CBDB 233441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233441&o=json)

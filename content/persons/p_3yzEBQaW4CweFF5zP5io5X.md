---
schema: wang-person/v1
id: p_3yzEBQaW4CweFF5zP5io5X
status: active
merged_into: null
display_name: 王寬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jxq5SS4CPBT4YPEgqMRfQe
        subject_person_id: p_3yzEBQaW4CweFF5zP5io5X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_96KykSH1QJ6haKMSH75EFG
          claim_id: c_jxq5SS4CPBT4YPEgqMRfQe
          source_id: s_f6CwfCUKKj6Et73ijBqHd9
          stance: supports
          locator: CBDB:238020
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（238020）
          source: &a1
            id: s_f6CwfCUKKj6Et73ijBqHd9
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 238020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238020&o=json
            external_identifier: CBDB:238020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JEBMKaeyKFrP3Di5X8AfSu
        subject_person_id: p_3yzEBQaW4CweFF5zP5io5X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬，明人物。成化二年進士，籍贯威縣。（中国历代人物传记资料库 CBDB 238020）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sRkr4LLF-79Wn7PmhlUMBq
          claim_id: c_JEBMKaeyKFrP3Di5X8AfSu
          source_id: s_f6CwfCUKKj6Et73ijBqHd9
          stance: supports
          locator: CBDB:238020
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EplfVpRrzLFcdODOyMqtAG
        subject_person_id: p_rfGZtWQ8pfDBATdxzFKLBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3yzEBQaW4CweFF5zP5io5X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mRmi4CC-h9oHzAiHIcenW4
          claim_id: c_EplfVpRrzLFcdODOyMqtAG
          source_id: s_hTeb4GRMLThgwpayB8HzkO
          stance: supports
          locator: CBDB：兄弟 王濬（126841）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王寬 与 王濬 为同胞（CBDB 记「弟」），王濬 之父／母即 王寬 之父／母。
          source:
            id: s_hTeb4GRMLThgwpayB8HzkO
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 238020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238020&o=json
            external_identifier: CBDB:238020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rfGZtWQ8pfDBATdxzFKLBp
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZtDAmjyGmhhp6jbp4cFnlA
        subject_person_id: p_3yzEBQaW4CweFF5zP5io5X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XbUzXxzW1NKiE1b2phZgUS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zH65aryoS5XX1Hw9UbAVXn
          claim_id: c_ZtDAmjyGmhhp6jbp4cFnlA
          source_id: s_hTeb4GRMLThgwpayB8HzkO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126841 王濬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hTeb4GRMLThgwpayB8HzkO
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 238020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238020&o=json
            external_identifier: CBDB:238020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XbUzXxzW1NKiE1b2phZgUS
        status: active
        display_name: 王濬
        merged_into_person_id: null
---

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | 王寬，明人物。成化二年進士，籍贯威縣。（中国历代人物传记资料库 CBDB 238020） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rfGZtWQ8pfDBATdxzFKLBp | 王榮 | accepted |
| other | p_XbUzXxzW1NKiE1b2phZgUS | 王濬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 238020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238020&o=json)

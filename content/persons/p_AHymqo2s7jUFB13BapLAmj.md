---
schema: wang-person/v1
id: p_AHymqo2s7jUFB13BapLAmj
status: active
merged_into: null
display_name: 王純
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gwia7KE2f4TYeGFv59BHo8
        subject_person_id: p_AHymqo2s7jUFB13BapLAmj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D8TrWQDC1HMXcZMKrcU1q3
          claim_id: c_gwia7KE2f4TYeGFv59BHo8
          source_id: s_wC5TxTs4bQia4UCLbvjEJC
          stance: supports
          locator: CBDB:260406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260406）
          source: &a1
            id: s_wC5TxTs4bQia4UCLbvjEJC
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 260406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260406&o=json
            external_identifier: CBDB:260406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zenuKDvVQyHMwxguL1KCx7
        subject_person_id: p_AHymqo2s7jUFB13BapLAmj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQi3L01ESJ69c1kbmBma3e
          claim_id: c_zenuKDvVQyHMwxguL1KCx7
          source_id: s_wC5TxTs4bQia4UCLbvjEJC
          stance: supports
          locator: CBDB:260406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y6z6LUxuEhRM1GQRd__vrj
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AHymqo2s7jUFB13BapLAmj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_24Cbxn8aBV5OOqyiHG0yZl
          claim_id: c_y6z6LUxuEhRM1GQRd__vrj
          source_id: s_XVT0VkOsOpnMQZv4Fjld0d
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王純 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王純 之父／母。
          source:
            id: s_XVT0VkOsOpnMQZv4Fjld0d
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 260406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260406&o=json
            external_identifier: CBDB:260406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v17Ui16KgEGN3E8zs7M4y6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vxpNU-S94lKfMqjIoc6EzW
        subject_person_id: p_AHymqo2s7jUFB13BapLAmj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YvvYX9dseG4NEfJae5FAxB
          claim_id: c_vxpNU-S94lKfMqjIoc6EzW
          source_id: s_XVT0VkOsOpnMQZv4Fjld0d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XVT0VkOsOpnMQZv4Fjld0d
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 260406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260406&o=json
            external_identifier: CBDB:260406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bkiJd7fMDoFB71EF4g2i5Z
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純 | accepted |
| bio.summary | 王純，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v17Ui16KgEGN3E8zs7M4y6 | 王義 | accepted |
| other | p_bkiJd7fMDoFB71EF4g2i5Z | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 260406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260406&o=json)

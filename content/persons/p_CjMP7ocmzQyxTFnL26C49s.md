---
schema: wang-person/v1
id: p_CjMP7ocmzQyxTFnL26C49s
status: active
merged_into: null
display_name: 王夢蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nvPTCamRJ9jWeLaCDbBeFr
        subject_person_id: p_CjMP7ocmzQyxTFnL26C49s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8cmvyn6bBWNAQa8AEteqVy
          claim_id: c_nvPTCamRJ9jWeLaCDbBeFr
          source_id: s_j6vJ2JLrcEtDyaJfxoyTK6
          stance: supports
          locator: CBDB:71992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71992）
          source: &a1
            id: s_j6vJ2JLrcEtDyaJfxoyTK6
            source_type: api_record
            title: 中国历代人物传记资料库：王夢蘭（CBDB 71992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71992&o=json
            external_identifier: CBDB:71992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PKosAbdQvo1WMksvZ9hczV
        subject_person_id: p_CjMP7ocmzQyxTFnL26C49s
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1748年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hXJiPi7ZN2YRg5CSAY38MS
          claim_id: c_PKosAbdQvo1WMksvZ9hczV
          source_id: s_j6vJ2JLrcEtDyaJfxoyTK6
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
        id: c_D7vchw1JoF5RU9s5gUoBx8
        subject_person_id: p_CjMP7ocmzQyxTFnL26C49s
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ztgyrXLU3dQ56y8LW9MpfM
          claim_id: c_D7vchw1JoF5RU9s5gUoBx8
          source_id: s_j6vJ2JLrcEtDyaJfxoyTK6
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
        id: c_U4PYf2pDFnxqmyq4H9pLHn
        subject_person_id: p_CjMP7ocmzQyxTFnL26C49s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tXSqh3PBzYSAbLKxJ5SZ7z
          claim_id: c_U4PYf2pDFnxqmyq4H9pLHn
          source_id: s_j6vJ2JLrcEtDyaJfxoyTK6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王夢蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢蘭 | accepted |
| birth.date | 1748年 | accepted |
| death.date | 1825年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢蘭（CBDB 71992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71992&o=json)

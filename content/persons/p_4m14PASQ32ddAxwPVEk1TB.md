---
schema: wang-person/v1
id: p_4m14PASQ32ddAxwPVEk1TB
status: active
merged_into: null
display_name: 王寶書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hzp2G7z4ZPBC2QAmaXuyHY
        subject_person_id: p_4m14PASQ32ddAxwPVEk1TB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TSNb8p5SFNPubHr1gcWrQN
          claim_id: c_Hzp2G7z4ZPBC2QAmaXuyHY
          source_id: s_vBiUtR6hyyhAubDGHZFJJU
          stance: supports
          locator: CBDB:71799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71799）
          source: &a1
            id: s_vBiUtR6hyyhAubDGHZFJJU
            source_type: api_record
            title: 中国历代人物传记资料库：王寶書（CBDB 71799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71799&o=json
            external_identifier: CBDB:71799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DwhCHbUWPgF5mmmVs8EnQv
        subject_person_id: p_4m14PASQ32ddAxwPVEk1TB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GdJuHcGQeXg6kjFHbuBj1i
          claim_id: c_DwhCHbUWPgF5mmmVs8EnQv
          source_id: s_vBiUtR6hyyhAubDGHZFJJU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_16S4W9kBsn6FBP81zEPgi6
        subject_person_id: p_4m14PASQ32ddAxwPVEk1TB
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
        - id: cs_hHKXKtqLy829B9jA8R1d25
          claim_id: c_16S4W9kBsn6FBP81zEPgi6
          source_id: s_vBiUtR6hyyhAubDGHZFJJU
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

# 王寶書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶書 | accepted |
| birth.date | 1832年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶書（CBDB 71799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71799&o=json)

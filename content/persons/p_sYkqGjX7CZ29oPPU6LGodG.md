---
schema: wang-person/v1
id: p_sYkqGjX7CZ29oPPU6LGodG
status: active
merged_into: null
display_name: 王壽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jsnb1tzxd7ZVVLEJsuVvH6
        subject_person_id: p_sYkqGjX7CZ29oPPU6LGodG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U85Ls6MtWVCnYX2Ln12cvo
          claim_id: c_Jsnb1tzxd7ZVVLEJsuVvH6
          source_id: s_4gCP7csqfYkyUtaa3EFmHK
          stance: supports
          locator: CBDB:71066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71066）
          source: &a1
            id: s_4gCP7csqfYkyUtaa3EFmHK
            source_type: api_record
            title: 中国历代人物传记资料库：王壽（CBDB 71066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71066&o=json
            external_identifier: CBDB:71066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Nq4eMPEd9HWj7PgPER8ZZz
        subject_person_id: p_sYkqGjX7CZ29oPPU6LGodG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1805年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTJYczKMhSrmM5qZYxywsK
          claim_id: c_Nq4eMPEd9HWj7PgPER8ZZz
          source_id: s_4gCP7csqfYkyUtaa3EFmHK
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
        id: c_67G81w6wBzv7JbnmdwtJg6
        subject_person_id: p_sYkqGjX7CZ29oPPU6LGodG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1849年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GWY2FkJAnvzsp72AUV7f8b
          claim_id: c_67G81w6wBzv7JbnmdwtJg6
          source_id: s_4gCP7csqfYkyUtaa3EFmHK
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
        id: c_mWToG46GcvPPbyi5DyaNhb
        subject_person_id: p_sYkqGjX7CZ29oPPU6LGodG
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
        - id: cs_rjk7UYAzfpkr93B553px67
          claim_id: c_mWToG46GcvPPbyi5DyaNhb
          source_id: s_4gCP7csqfYkyUtaa3EFmHK
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

# 王壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽 | accepted |
| birth.date | 1805年 | accepted |
| death.date | 1849年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽（CBDB 71066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71066&o=json)

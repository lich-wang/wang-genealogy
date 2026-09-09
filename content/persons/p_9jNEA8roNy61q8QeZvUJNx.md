---
schema: wang-person/v1
id: p_9jNEA8roNy61q8QeZvUJNx
status: active
merged_into: null
display_name: 王紹圭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ygXBPC9ViAqW9sr2Qi7rUm
        subject_person_id: p_9jNEA8roNy61q8QeZvUJNx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹圭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6QBrczqmK4M9jekfm4pdWU
          claim_id: c_ygXBPC9ViAqW9sr2Qi7rUm
          source_id: s_yVEZC1cBPThcHBY6eC7CS1
          stance: supports
          locator: CBDB:697243
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697243）
          source: &a1
            id: s_yVEZC1cBPThcHBY6eC7CS1
            source_type: api_record
            title: 中国历代人物传记资料库：王紹圭（CBDB 697243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697243&o=json
            external_identifier: CBDB:697243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EYm5RhAKxEj7MrHVXRBnmF
        subject_person_id: p_9jNEA8roNy61q8QeZvUJNx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UwoHGmygdYbkANSueoNFbx
          claim_id: c_EYm5RhAKxEj7MrHVXRBnmF
          source_id: s_yVEZC1cBPThcHBY6eC7CS1
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

# 王紹圭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹圭 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹圭（CBDB 697243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697243&o=json)

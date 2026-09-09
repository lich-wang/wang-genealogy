---
schema: wang-person/v1
id: p_cb623iW2XeVNpAf1cG57YL
status: active
merged_into: null
display_name: 王又新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LVG9nXActPuXg7vXin45n9
        subject_person_id: p_cb623iW2XeVNpAf1cG57YL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王又新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LgobmWsCW48NBg46RwrcpG
          claim_id: c_LVG9nXActPuXg7vXin45n9
          source_id: s_MFToxUxd35ZA45JPQk5BFj
          stance: supports
          locator: CBDB:575124
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575124）
          source: &a1
            id: s_MFToxUxd35ZA45JPQk5BFj
            source_type: api_record
            title: 中国历代人物传记资料库：王又新（CBDB 575124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575124&o=json
            external_identifier: CBDB:575124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q7ecEtmgYxnd86fMgqac5T
        subject_person_id: p_cb623iW2XeVNpAf1cG57YL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sGXYoC91ihUTCMvJuEtvw9
          claim_id: c_Q7ecEtmgYxnd86fMgqac5T
          source_id: s_MFToxUxd35ZA45JPQk5BFj
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

# 王又新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王又新 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王又新（CBDB 575124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575124&o=json)

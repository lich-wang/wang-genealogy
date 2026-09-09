---
schema: wang-person/v1
id: p_EaB32eDcPwenCEgHnQcECB
status: active
merged_into: null
display_name: 王佺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3U33Fws2wUPZ19hQqxGJjx
        subject_person_id: p_EaB32eDcPwenCEgHnQcECB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xb3qpjaE1ZziZcBqYKWYQJ
          claim_id: c_3U33Fws2wUPZ19hQqxGJjx
          source_id: s_9FULYdSRhd64krCJjQ1ght
          stance: supports
          locator: CBDB:39566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39566）
          source: &a1
            id: s_9FULYdSRhd64krCJjQ1ght
            source_type: api_record
            title: 中国历代人物传记资料库：王佺（CBDB 39566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39566&o=json
            external_identifier: CBDB:39566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FmDxk5aFciywt7dYQxJ44J
        subject_person_id: p_EaB32eDcPwenCEgHnQcECB
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
        - id: cs_zmCCc6785Qk1vSUwN5e7NX
          claim_id: c_FmDxk5aFciywt7dYQxJ44J
          source_id: s_9FULYdSRhd64krCJjQ1ght
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

# 王佺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佺 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佺（CBDB 39566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39566&o=json)

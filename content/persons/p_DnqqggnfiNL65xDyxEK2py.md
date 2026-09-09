---
schema: wang-person/v1
id: p_DnqqggnfiNL65xDyxEK2py
status: active
merged_into: null
display_name: 王叔杲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SJrCtsRGJ8r3GSbRCiGEo4
        subject_person_id: p_DnqqggnfiNL65xDyxEK2py
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YV35MMHnJiMSh6MrMkGiZS
          claim_id: c_SJrCtsRGJ8r3GSbRCiGEo4
          source_id: s_EVbX6Gwmt1tDNNqjtNZBtA
          stance: supports
          locator: CBDB:312432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312432）
          source: &a1
            id: s_EVbX6Gwmt1tDNNqjtNZBtA
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 312432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312432&o=json
            external_identifier: CBDB:312432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2aKwAUBM3g4M6ZjbVd9csT
        subject_person_id: p_DnqqggnfiNL65xDyxEK2py
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
        - id: cs_dENEMKCH3keudTSpP9CQj1
          claim_id: c_2aKwAUBM3g4M6ZjbVd9csT
          source_id: s_EVbX6Gwmt1tDNNqjtNZBtA
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

# 王叔杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔杲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔杲（CBDB 312432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312432&o=json)

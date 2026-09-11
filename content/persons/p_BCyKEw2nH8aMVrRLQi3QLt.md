---
schema: wang-person/v1
id: p_BCyKEw2nH8aMVrRLQi3QLt
status: active
merged_into: null
display_name: 王思聰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TeVqmygYNjA3eCCMP8ByD1
        subject_person_id: p_BCyKEw2nH8aMVrRLQi3QLt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dKEEz1hCkQ3cjHjF1qP6NV
          claim_id: c_TeVqmygYNjA3eCCMP8ByD1
          source_id: s_DqFZUJYGmAbiiLkL5Us65B
          stance: supports
          locator: CBDB:101287
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101287）
          source: &a1
            id: s_DqFZUJYGmAbiiLkL5Us65B
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 101287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101287&o=json
            external_identifier: CBDB:101287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MQH3KCh9vCaMhszjQ5Y7MG
        subject_person_id: p_BCyKEw2nH8aMVrRLQi3QLt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思聰，元人物。籍贯安平，曾任縣尹、諸路總管府推官、諸路總管府治中。（中国历代人物传记资料库 CBDB 101287）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XqYsMDG2r1dbJeWpjngXuS
          claim_id: c_MQH3KCh9vCaMhszjQ5Y7MG
          source_id: s_DqFZUJYGmAbiiLkL5Us65B
          stance: supports
          locator: CBDB:101287
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王思聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思聰 | accepted |
| bio.summary | 王思聰，元人物。籍贯安平，曾任縣尹、諸路總管府推官、諸路總管府治中。（中国历代人物传记资料库 CBDB 101287） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思聰（CBDB 101287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101287&o=json)

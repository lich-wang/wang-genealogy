---
schema: wang-person/v1
id: p_trFxBpoFBzxzdZ7N4GC2uT
status: active
merged_into: null
display_name: 王元禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SjjNeMPGX9jTK6DL8WHxLu
        subject_person_id: p_trFxBpoFBzxzdZ7N4GC2uT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HgKHeCCXRu8uw6T4sDZ8QW
          claim_id: c_SjjNeMPGX9jTK6DL8WHxLu
          source_id: s_P9GWPeXZjE21Smt6Yek8NW
          stance: supports
          locator: CBDB:35382
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35382）
          source: &a1
            id: s_P9GWPeXZjE21Smt6Yek8NW
            source_type: api_record
            title: 中国历代人物传记资料库：王元禮（CBDB 35382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35382&o=json
            external_identifier: CBDB:35382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hZkKXLPTECg8n5nNLxig9G
        subject_person_id: p_trFxBpoFBzxzdZ7N4GC2uT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1185年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DrQ4XSYrRJ2KgDizzKQg7e
          claim_id: c_hZkKXLPTECg8n5nNLxig9G
          source_id: s_P9GWPeXZjE21Smt6Yek8NW
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
        id: c_UU4qMbxeJ2A2xR5LX1dMeb
        subject_person_id: p_trFxBpoFBzxzdZ7N4GC2uT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1257年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3V55uxXJdubuqZKgPU8fAq
          claim_id: c_UU4qMbxeJ2A2xR5LX1dMeb
          source_id: s_P9GWPeXZjE21Smt6Yek8NW
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
        id: c_nHqLGPCHCH3VULDWdDtJ7a
        subject_person_id: p_trFxBpoFBzxzdZ7N4GC2uT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元禮（1185年—1257年），元人物。籍贯華陰，入仕進士。（中国历代人物传记资料库 CBDB 35382）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qTPvrMcB5eCzUstBfmPhmx
          claim_id: c_nHqLGPCHCH3VULDWdDtJ7a
          source_id: s_P9GWPeXZjE21Smt6Yek8NW
          stance: supports
          locator: CBDB:35382
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

# 王元禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元禮 | accepted |
| birth.date | 1185年 | accepted |
| death.date | 1257年 | accepted |
| bio.summary | 王元禮（1185年—1257年），元人物。籍贯華陰，入仕進士。（中国历代人物传记资料库 CBDB 35382） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元禮（CBDB 35382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35382&o=json)

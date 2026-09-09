---
schema: wang-person/v1
id: p_WQ49Azsmx4fh8msvmUyUdN
status: active
merged_into: null
display_name: 王禹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_myUA5rcFD2KBM9q7bEpfWt
        subject_person_id: p_WQ49Azsmx4fh8msvmUyUdN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_82tyB3M6M5rzRJvkA3Xr3B
          claim_id: c_myUA5rcFD2KBM9q7bEpfWt
          source_id: s_hHgbtGbuN4oq5E3wkXNG2y
          stance: supports
          locator: CBDB:248694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248694）
          source: &a1
            id: s_hHgbtGbuN4oq5E3wkXNG2y
            source_type: api_record
            title: 中国历代人物传记资料库：王禹（CBDB 248694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248694&o=json
            external_identifier: CBDB:248694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jFPpUeT7Br6sq5dp4ALZdo
        subject_person_id: p_WQ49Azsmx4fh8msvmUyUdN
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
        - id: cs_7B6zkGHJfzQ1r2CK9VkG87
          claim_id: c_jFPpUeT7Br6sq5dp4ALZdo
          source_id: s_hHgbtGbuN4oq5E3wkXNG2y
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

# 王禹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禹 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禹（CBDB 248694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248694&o=json)

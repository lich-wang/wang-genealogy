---
schema: wang-person/v1
id: p_VmVjt6kepc5j5MiKQ2qDfg
status: active
merged_into: null
display_name: 王定章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kcdx2ogW9DQuyn5tCMjUtb
        subject_person_id: p_VmVjt6kepc5j5MiKQ2qDfg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sMzmJL2hcJS1oYZdYBXFNL
          claim_id: c_kcdx2ogW9DQuyn5tCMjUtb
          source_id: s_qwznq1DjqPr4ky6p3HY3Uj
          stance: supports
          locator: CBDB:637139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637139）
          source: &a1
            id: s_qwznq1DjqPr4ky6p3HY3Uj
            source_type: api_record
            title: 中国历代人物传记资料库：王定章（CBDB 637139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637139&o=json
            external_identifier: CBDB:637139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ghYx2Q9rFXKVXK3Nn6aM9a
        subject_person_id: p_VmVjt6kepc5j5MiKQ2qDfg
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
        - id: cs_YUBZ9AqVStp3UQE8Yn1UCc
          claim_id: c_ghYx2Q9rFXKVXK3Nn6aM9a
          source_id: s_qwznq1DjqPr4ky6p3HY3Uj
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

# 王定章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定章 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定章（CBDB 637139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637139&o=json)

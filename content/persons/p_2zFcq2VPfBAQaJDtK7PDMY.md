---
schema: wang-person/v1
id: p_2zFcq2VPfBAQaJDtK7PDMY
status: active
merged_into: null
display_name: 王純仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CiGpTSeKMxc9FNYffp6Asc
        subject_person_id: p_2zFcq2VPfBAQaJDtK7PDMY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UQ27dMBXH4GCL6qdPybi8K
          claim_id: c_CiGpTSeKMxc9FNYffp6Asc
          source_id: s_Q3EdMK8ZBVp14KJ4b1wHug
          stance: supports
          locator: CBDB:540944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（540944）
          source: &a1
            id: s_Q3EdMK8ZBVp14KJ4b1wHug
            source_type: api_record
            title: 中国历代人物传记资料库：王純仁（CBDB 540944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540944&o=json
            external_identifier: CBDB:540944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2WYr9Hq9gnS69kvta9q4f8
        subject_person_id: p_2zFcq2VPfBAQaJDtK7PDMY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王純仁，宋人物。籍贯眉州，入仕進士。（中国历代人物传记资料库 CBDB 540944）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Btom_R8aGg9MCv1pcQCcLz
          claim_id: c_2WYr9Hq9gnS69kvta9q4f8
          source_id: s_Q3EdMK8ZBVp14KJ4b1wHug
          stance: supports
          locator: CBDB:540944
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

# 王純仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王純仁 | accepted |
| bio.summary | 王純仁，宋人物。籍贯眉州，入仕進士。（中国历代人物传记资料库 CBDB 540944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王純仁（CBDB 540944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=540944&o=json)

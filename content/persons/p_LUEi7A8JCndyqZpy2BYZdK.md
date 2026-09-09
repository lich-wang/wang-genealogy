---
schema: wang-person/v1
id: p_LUEi7A8JCndyqZpy2BYZdK
status: active
merged_into: null
display_name: 王順存
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VBPXPhcrQnRbjx3au3Q2s6
        subject_person_id: p_LUEi7A8JCndyqZpy2BYZdK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順存
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BrZntYqsQ7HtUjjTveqm8b
          claim_id: c_VBPXPhcrQnRbjx3au3Q2s6
          source_id: s_HWU5XE16fGbycYWbHEDE5C
          stance: supports
          locator: CBDB:640861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640861）
          source: &a1
            id: s_HWU5XE16fGbycYWbHEDE5C
            source_type: api_record
            title: 中国历代人物传记资料库：王順存（CBDB 640861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640861&o=json
            external_identifier: CBDB:640861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h7QKeFEzQqNWwfhuZo9Boz
        subject_person_id: p_LUEi7A8JCndyqZpy2BYZdK
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
        - id: cs_gxxqBnDGMx15G7AP6XmKiW
          claim_id: c_h7QKeFEzQqNWwfhuZo9Boz
          source_id: s_HWU5XE16fGbycYWbHEDE5C
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

# 王順存

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順存 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王順存（CBDB 640861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640861&o=json)

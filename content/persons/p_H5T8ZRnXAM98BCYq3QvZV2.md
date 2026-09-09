---
schema: wang-person/v1
id: p_H5T8ZRnXAM98BCYq3QvZV2
status: active
merged_into: null
display_name: 王鏡溪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K5nNynDks1dD6fPHCBE9ss
        subject_person_id: p_H5T8ZRnXAM98BCYq3QvZV2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏡溪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5jfyK2jPJHhPhFPsG7E15P
          claim_id: c_K5nNynDks1dD6fPHCBE9ss
          source_id: s_TrBHpmYTFkdR8GZ5fDFiVi
          stance: supports
          locator: CBDB:640710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640710）
          source: &a1
            id: s_TrBHpmYTFkdR8GZ5fDFiVi
            source_type: api_record
            title: 中国历代人物传记资料库：王鏡溪（CBDB 640710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640710&o=json
            external_identifier: CBDB:640710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gap187UMxrmvuqZQjGoRgs
        subject_person_id: p_H5T8ZRnXAM98BCYq3QvZV2
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
        - id: cs_u1JTS9ri8gMfu7F31yqc9Y
          claim_id: c_Gap187UMxrmvuqZQjGoRgs
          source_id: s_TrBHpmYTFkdR8GZ5fDFiVi
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

# 王鏡溪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏡溪 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏡溪（CBDB 640710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640710&o=json)

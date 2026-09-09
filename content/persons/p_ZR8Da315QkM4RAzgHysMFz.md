---
schema: wang-person/v1
id: p_ZR8Da315QkM4RAzgHysMFz
status: active
merged_into: null
display_name: 王仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ur3GUs1E3Q5AbgKMVMF1Ab
        subject_person_id: p_ZR8Da315QkM4RAzgHysMFz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LCFAoeQicVaF5tEkUhJRbM
          claim_id: c_Ur3GUs1E3Q5AbgKMVMF1Ab
          source_id: s_NdUNK7Hf3F3bCL5vKKMraF
          stance: supports
          locator: CBDB:703013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703013）
          source: &a1
            id: s_NdUNK7Hf3F3bCL5vKKMraF
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 703013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703013&o=json
            external_identifier: CBDB:703013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FPBWTt7wY3h5Cm6yCP8ueD
        subject_person_id: p_ZR8Da315QkM4RAzgHysMFz
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
        - id: cs_mMKj85L95pafXdB7Pk17Ab
          claim_id: c_FPBWTt7wY3h5Cm6yCP8ueD
          source_id: s_NdUNK7Hf3F3bCL5vKKMraF
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

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 703013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703013&o=json)

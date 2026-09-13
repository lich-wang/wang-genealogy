---
schema: wang-person/v1
id: p_it5STD9YEkT61PKdLSoqbA
status: active
merged_into: null
display_name: 王芝莊
cbdb_id: 415340
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dCNV3aj5s5QPaVXFPFP83Z
        subject_person_id: p_it5STD9YEkT61PKdLSoqbA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝莊，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 415340）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qXhr34dx9LKZvmmuIB7Jyj
          claim_id: c_dCNV3aj5s5QPaVXFPFP83Z
          source_id: s_N5yixWY6Gnk7bc9AZNiQVD
          stance: supports
          locator: CBDB:415340
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N5yixWY6Gnk7bc9AZNiQVD
            source_type: api_record
            title: 中国历代人物传记资料库：王芝莊（CBDB 415340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415340&o=json
            external_identifier: CBDB:415340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:53.628Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_C9oAC27LeZVT45HRawYNz8
        subject_person_id: p_it5STD9YEkT61PKdLSoqbA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝莊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Y8caxsSCgYunZMdR66AmWb
          claim_id: c_C9oAC27LeZVT45HRawYNz8
          source_id: s_N5yixWY6Gnk7bc9AZNiQVD
          stance: supports
          locator: CBDB:415340
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6201-6300）｜历史性依据：CBDB 朝代 = 清
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

# 王芝莊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王芝莊，清人物。曾任訓導。（中国历代人物传记资料库 CBDB 415340） | accepted |
| name.primary | 王芝莊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芝莊（CBDB 415340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415340&o=json)

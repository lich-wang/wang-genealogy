---
schema: wang-person/v1
id: p_bvm6r457EXCBvG5sSYFfjA
status: active
merged_into: null
display_name: 王之佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TC6PLsddfGFpSsQ2V5f38b
        subject_person_id: p_bvm6r457EXCBvG5sSYFfjA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RUr427gtgTE1imrZf2zPEa
          claim_id: c_TC6PLsddfGFpSsQ2V5f38b
          source_id: s_8AsRKg4PaPZCbD6MDtb47Q
          stance: supports
          locator: CBDB:490569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490569）
          source: &a1
            id: s_8AsRKg4PaPZCbD6MDtb47Q
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 490569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490569&o=json
            external_identifier: CBDB:490569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YkykvY6vfBsT5KaSqg9t62
        subject_person_id: p_bvm6r457EXCBvG5sSYFfjA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之佐，明人物。入仕監生，曾任吏目。（中国历代人物传记资料库 CBDB 490569）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NKnHCNdrRrrd-pG-vipoaf
          claim_id: c_YkykvY6vfBsT5KaSqg9t62
          source_id: s_8AsRKg4PaPZCbD6MDtb47Q
          stance: supports
          locator: CBDB:490569
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

# 王之佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之佐 | accepted |
| bio.summary | 王之佐，明人物。入仕監生，曾任吏目。（中国历代人物传记资料库 CBDB 490569） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之佐（CBDB 490569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490569&o=json)

---
schema: wang-person/v1
id: p_wNoPwYvGN85CLiHRyBxSyu
status: active
merged_into: null
display_name: 王啚
cbdb_id: 335219
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EgSKazaUQJvnmv3qezrb2d
        subject_person_id: p_wNoPwYvGN85CLiHRyBxSyu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啚，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335219）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-tfPBCTQC_aZ-u2-9tFkDi
          claim_id: c_EgSKazaUQJvnmv3qezrb2d
          source_id: s_g6PX2Zm6LQSqqksimUxDEi
          stance: supports
          locator: CBDB:335219
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_g6PX2Zm6LQSqqksimUxDEi
            source_type: api_record
            title: 中国历代人物传记资料库：王啚（CBDB 335219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335219&o=json
            external_identifier: CBDB:335219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XS5GChsXgKGK6puw5xYC94
        subject_person_id: p_wNoPwYvGN85CLiHRyBxSyu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J2iVbcE17P1rjMP424hu1D
          claim_id: c_XS5GChsXgKGK6puw5xYC94
          source_id: s_g6PX2Zm6LQSqqksimUxDEi
          stance: supports
          locator: CBDB:335219
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
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

# 王啚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啚，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335219） | accepted |
| name.primary | 王啚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啚（CBDB 335219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335219&o=json)

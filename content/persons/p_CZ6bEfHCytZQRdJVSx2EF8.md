---
schema: wang-person/v1
id: p_CZ6bEfHCytZQRdJVSx2EF8
status: active
merged_into: null
display_name: 王其然
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CQ4oX5wsfjvysDPZa7NPJL
        subject_person_id: p_CZ6bEfHCytZQRdJVSx2EF8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其然
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vkG7GPCHeP5S4XPKW449uG
          claim_id: c_CQ4oX5wsfjvysDPZa7NPJL
          source_id: s_geqda9LJCiEXkjWFcegKMg
          stance: supports
          locator: CBDB:534889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（534889）
          source: &a1
            id: s_geqda9LJCiEXkjWFcegKMg
            source_type: api_record
            title: 中国历代人物传记资料库：王其然（CBDB 534889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534889&o=json
            external_identifier: CBDB:534889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YX2Kbie69sA7zNKWhfqyBC
        subject_person_id: p_CZ6bEfHCytZQRdJVSx2EF8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其然，宋人物。籍贯廣安軍，入仕進士。（中国历代人物传记资料库 CBDB 534889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iikguRvb50xNUQC3jve73K
          claim_id: c_YX2Kbie69sA7zNKWhfqyBC
          source_id: s_geqda9LJCiEXkjWFcegKMg
          stance: supports
          locator: CBDB:534889
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

# 王其然

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其然 | accepted |
| bio.summary | 王其然，宋人物。籍贯廣安軍，入仕進士。（中国历代人物传记资料库 CBDB 534889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其然（CBDB 534889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534889&o=json)

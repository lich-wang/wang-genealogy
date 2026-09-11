---
schema: wang-person/v1
id: p_Nk7YRzTZmdmFrdouTnNkeT
status: active
merged_into: null
display_name: 王錫元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GBBCjQhV4H2F5b36U6MgJD
        subject_person_id: p_Nk7YRzTZmdmFrdouTnNkeT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8L4UxutyZ47BbFoTKY1byW
          claim_id: c_GBBCjQhV4H2F5b36U6MgJD
          source_id: s_v3Es3idhEb2aDyPJVfYCvN
          stance: supports
          locator: CBDB:343806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343806）
          source: &a1
            id: s_v3Es3idhEb2aDyPJVfYCvN
            source_type: api_record
            title: 中国历代人物传记资料库：王錫元（CBDB 343806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343806&o=json
            external_identifier: CBDB:343806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NDZs74itSpDUW5SBysJ49x
        subject_person_id: p_Nk7YRzTZmdmFrdouTnNkeT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫元，清人物。明清進士進士，籍贯盱眙，入仕進士。（中国历代人物传记资料库 CBDB 343806）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GHiX7EurtW78YnyHnOCs99
          claim_id: c_NDZs74itSpDUW5SBysJ49x
          source_id: s_v3Es3idhEb2aDyPJVfYCvN
          stance: supports
          locator: CBDB:343806
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

# 王錫元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫元 | accepted |
| bio.summary | 王錫元，清人物。明清進士進士，籍贯盱眙，入仕進士。（中国历代人物传记资料库 CBDB 343806） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫元（CBDB 343806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343806&o=json)

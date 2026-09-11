---
schema: wang-person/v1
id: p_ENEQwxoe2X889hJSnDhb4b
status: active
merged_into: null
display_name: 王深源
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N12UrA37vQEyE1idvHJ4vV
        subject_person_id: p_ENEQwxoe2X889hJSnDhb4b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深源
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4bx5EZgcDf7S9YC18Rea6d
          claim_id: c_N12UrA37vQEyE1idvHJ4vV
          source_id: s_4Bc1ZRT4uSZws8jcyMTZ58
          stance: supports
          locator: CBDB:445030
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445030）
          source: &a1
            id: s_4Bc1ZRT4uSZws8jcyMTZ58
            source_type: api_record
            title: 中国历代人物传记资料库：王深源（CBDB 445030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445030&o=json
            external_identifier: CBDB:445030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MgBMWoFPhLTP5RXSk6zQ8o
        subject_person_id: p_ENEQwxoe2X889hJSnDhb4b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王深源，宋人物。籍贯婺州。（中国历代人物传记资料库 CBDB 445030）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XAJMg--MA4lqYaBOpSKtcp
          claim_id: c_MgBMWoFPhLTP5RXSk6zQ8o
          source_id: s_4Bc1ZRT4uSZws8jcyMTZ58
          stance: supports
          locator: CBDB:445030
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

# 王深源

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王深源 | accepted |
| bio.summary | 王深源，宋人物。籍贯婺州。（中国历代人物传记资料库 CBDB 445030） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王深源（CBDB 445030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445030&o=json)

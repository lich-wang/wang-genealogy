---
schema: wang-person/v1
id: p_nqezkw6HCpZSj6YpGM31cg
status: active
merged_into: null
display_name: 王佶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BpqGkcRYZ67K2Hjz1e8D3d
        subject_person_id: p_nqezkw6HCpZSj6YpGM31cg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L1ehvGER528e37LJViGHRZ
          claim_id: c_BpqGkcRYZ67K2Hjz1e8D3d
          source_id: s_n5EYPcmFCs2QHDDJE9xYDJ
          stance: supports
          locator: CBDB:241977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241977）
          source: &a1
            id: s_n5EYPcmFCs2QHDDJE9xYDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 241977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241977&o=json
            external_identifier: CBDB:241977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pKkNhvkMbcxH9wM1gqVXCW
        subject_person_id: p_nqezkw6HCpZSj6YpGM31cg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241977）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AV5Do0kI3Se0BCslR3rMfj
          claim_id: c_pKkNhvkMbcxH9wM1gqVXCW
          source_id: s_n5EYPcmFCs2QHDDJE9xYDJ
          stance: supports
          locator: CBDB:241977
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

# 王佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佶 | accepted |
| bio.summary | 王佶，明人物。成化二年進士，籍贯長興。（中国历代人物传记资料库 CBDB 241977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佶（CBDB 241977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241977&o=json)

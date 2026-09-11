---
schema: wang-person/v1
id: p_RPik22EZkJWWxdGrUEJwAZ
status: active
merged_into: null
display_name: 王養正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pd4HMfHz2DxyWTjCtCG5gz
        subject_person_id: p_RPik22EZkJWWxdGrUEJwAZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rVJwE2x2BFKC992syL4ZiC
          claim_id: c_pd4HMfHz2DxyWTjCtCG5gz
          source_id: s_R983uuF5KRrBXXXCL6edaD
          stance: supports
          locator: CBDB:492506
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（492506）
          source: &a1
            id: s_R983uuF5KRrBXXXCL6edaD
            source_type: api_record
            title: 中国历代人物传记资料库：王養正（CBDB 492506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492506&o=json
            external_identifier: CBDB:492506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PM1KoPwqes3NSxkkZAHZoo
        subject_person_id: p_RPik22EZkJWWxdGrUEJwAZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王養正，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 492506）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P3ZWTfsuzpqsEqgY10-vzY
          claim_id: c_PM1KoPwqes3NSxkkZAHZoo
          source_id: s_R983uuF5KRrBXXXCL6edaD
          stance: supports
          locator: CBDB:492506
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

# 王養正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養正 | accepted |
| bio.summary | 王養正，明人物。入仕貢生: 歲貢、常貢、挨貢，曾任訓導。（中国历代人物传记资料库 CBDB 492506） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王養正（CBDB 492506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=492506&o=json)

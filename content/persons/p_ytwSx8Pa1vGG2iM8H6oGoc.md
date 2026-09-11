---
schema: wang-person/v1
id: p_ytwSx8Pa1vGG2iM8H6oGoc
status: active
merged_into: null
display_name: 王瑋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KMgQRPeC4arMnfD195xkix
        subject_person_id: p_ytwSx8Pa1vGG2iM8H6oGoc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JDQg6QHEF2rDjmicm2NJSg
          claim_id: c_KMgQRPeC4arMnfD195xkix
          source_id: s_fG9ADHeHELkVdssaxz4Cs9
          stance: supports
          locator: CBDB:455697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455697）
          source: &a1
            id: s_fG9ADHeHELkVdssaxz4Cs9
            source_type: api_record
            title: 中国历代人物传记资料库：王瑋（CBDB 455697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455697&o=json
            external_identifier: CBDB:455697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2vwEWE3NFZNXEKzn6SpAVG
        subject_person_id: p_ytwSx8Pa1vGG2iM8H6oGoc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑋，清人物。入仕鄉貢舉人，曾任縣知縣。（中国历代人物传记资料库 CBDB 455697）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vbb7ZKAlzZjpHMBXuG-uwG
          claim_id: c_2vwEWE3NFZNXEKzn6SpAVG
          source_id: s_fG9ADHeHELkVdssaxz4Cs9
          stance: supports
          locator: CBDB:455697
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

# 王瑋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑋 | accepted |
| bio.summary | 王瑋，清人物。入仕鄉貢舉人，曾任縣知縣。（中国历代人物传记资料库 CBDB 455697） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑋（CBDB 455697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455697&o=json)

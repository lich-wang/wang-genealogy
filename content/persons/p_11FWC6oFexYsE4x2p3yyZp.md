---
schema: wang-person/v1
id: p_11FWC6oFexYsE4x2p3yyZp
status: active
merged_into: null
display_name: 王伯大
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gQYqbrBMViCKAv2275thpF
        subject_person_id: p_11FWC6oFexYsE4x2p3yyZp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ma3cYyCp9KMBojaRXQ7rVg
          claim_id: c_gQYqbrBMViCKAv2275thpF
          source_id: s_mSCoosmCbA5KpEVBGAzfti
          stance: supports
          locator: CBDB:101181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101181）
          source: &a1
            id: s_mSCoosmCbA5KpEVBGAzfti
            source_type: api_record
            title: 中国历代人物传记资料库：王伯大（CBDB 101181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101181&o=json
            external_identifier: CBDB:101181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vMDLPrhLqA4FQ4RXmrGMbU
        subject_person_id: p_11FWC6oFexYsE4x2p3yyZp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯大，元人物。籍贯房山，入仕進士。（中国历代人物传记资料库 CBDB 101181）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3aDRGlS4q8H9YVFJ6PHJn3
          claim_id: c_vMDLPrhLqA4FQ4RXmrGMbU
          source_id: s_mSCoosmCbA5KpEVBGAzfti
          stance: supports
          locator: CBDB:101181
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

# 王伯大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯大 | accepted |
| bio.summary | 王伯大，元人物。籍贯房山，入仕進士。（中国历代人物传记资料库 CBDB 101181） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯大（CBDB 101181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101181&o=json)

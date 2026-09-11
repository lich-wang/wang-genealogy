---
schema: wang-person/v1
id: p_3XK4RZkB1irvV3g6eudKmK
status: active
merged_into: null
display_name: 王世睿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yrv78QSRG4SEajia5JXX3K
        subject_person_id: p_3XK4RZkB1irvV3g6eudKmK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RoJAKhjsre322u7CveCBtr
          claim_id: c_yrv78QSRG4SEajia5JXX3K
          source_id: s_GCKooMFJwzcA1NNDrzYFV9
          stance: supports
          locator: CBDB:455699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455699）
          source: &a1
            id: s_GCKooMFJwzcA1NNDrzYFV9
            source_type: api_record
            title: 中国历代人物传记资料库：王世睿（CBDB 455699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455699&o=json
            external_identifier: CBDB:455699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_351E2Y9QbSSRDUXFYtgJ9i
        subject_person_id: p_3XK4RZkB1irvV3g6eudKmK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世睿，清人物。曾任縣知縣。（中国历代人物传记资料库 CBDB 455699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s_EA422kZ6FBLRBO48ClWX
          claim_id: c_351E2Y9QbSSRDUXFYtgJ9i
          source_id: s_GCKooMFJwzcA1NNDrzYFV9
          stance: supports
          locator: CBDB:455699
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

# 王世睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世睿 | accepted |
| bio.summary | 王世睿，清人物。曾任縣知縣。（中国历代人物传记资料库 CBDB 455699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世睿（CBDB 455699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455699&o=json)

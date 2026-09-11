---
schema: wang-person/v1
id: p_pVDCEQMWS4JthdYAHNS6YZ
status: active
merged_into: null
display_name: 王一觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P3LXwFJwpFQtiJTCCcc7Su
        subject_person_id: p_pVDCEQMWS4JthdYAHNS6YZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZEQqPPpZBDcLLsYSFZ1Vp
          claim_id: c_P3LXwFJwpFQtiJTCCcc7Su
          source_id: s_P9hU3RW6RmJMwHi41JWxCP
          stance: supports
          locator: CBDB:692349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（692349）
          source: &a1
            id: s_P9hU3RW6RmJMwHi41JWxCP
            source_type: api_record
            title: 中国历代人物传记资料库：王一觀（CBDB 692349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692349&o=json
            external_identifier: CBDB:692349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kA1uhUY5dzsu6FDZz9PoYX
        subject_person_id: p_pVDCEQMWS4JthdYAHNS6YZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一觀，明人物。籍贯黟縣，身份为書法家，曾任府經歷。（中国历代人物传记资料库 CBDB 692349）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XwUGy2_fRJ_e5MnouZJIAL
          claim_id: c_kA1uhUY5dzsu6FDZz9PoYX
          source_id: s_P9hU3RW6RmJMwHi41JWxCP
          stance: supports
          locator: CBDB:692349
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

# 王一觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一觀 | accepted |
| bio.summary | 王一觀，明人物。籍贯黟縣，身份为書法家，曾任府經歷。（中国历代人物传记资料库 CBDB 692349） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一觀（CBDB 692349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692349&o=json)

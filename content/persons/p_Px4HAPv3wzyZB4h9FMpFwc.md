---
schema: wang-person/v1
id: p_Px4HAPv3wzyZB4h9FMpFwc
status: active
merged_into: null
display_name: 王藝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WnYPKY4KMPRmj2nxuT6iNy
        subject_person_id: p_Px4HAPv3wzyZB4h9FMpFwc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hemMpuf7GsZhFmaDA5ZzWH
          claim_id: c_WnYPKY4KMPRmj2nxuT6iNy
          source_id: s_yfokrn967YEjcmhd3aiJMJ
          stance: supports
          locator: CBDB:282023
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282023）
          source: &a1
            id: s_yfokrn967YEjcmhd3aiJMJ
            source_type: api_record
            title: 中国历代人物传记资料库：王藝（CBDB 282023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282023&o=json
            external_identifier: CBDB:282023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CmwtDD1zbDo7XvGBXLdcB9
        subject_person_id: p_Px4HAPv3wzyZB4h9FMpFwc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藝，明人物。正德十二年進士，籍贯江陰。（中国历代人物传记资料库 CBDB 282023）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s2sgp-6RFdKiEU-TBcj9IZ
          claim_id: c_CmwtDD1zbDo7XvGBXLdcB9
          source_id: s_yfokrn967YEjcmhd3aiJMJ
          stance: supports
          locator: CBDB:282023
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

# 王藝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藝 | accepted |
| bio.summary | 王藝，明人物。正德十二年進士，籍贯江陰。（中国历代人物传记资料库 CBDB 282023） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藝（CBDB 282023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282023&o=json)

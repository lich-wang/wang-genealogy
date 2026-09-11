---
schema: wang-person/v1
id: p_ZcBcAmxQjHSQ2gabcCUbC6
status: active
merged_into: null
display_name: 王家藩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EeN2RMuXgL8UVNiD2CXMM1
        subject_person_id: p_ZcBcAmxQjHSQ2gabcCUbC6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家藩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8rqLDPtoo7ZfXFh6hkC51s
          claim_id: c_EeN2RMuXgL8UVNiD2CXMM1
          source_id: s_qMPvRUh4uKj6ifQcBi81JE
          stance: supports
          locator: CBDB:695166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695166）
          source: &a1
            id: s_qMPvRUh4uKj6ifQcBi81JE
            source_type: api_record
            title: 中国历代人物传记资料库：王家藩（CBDB 695166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695166&o=json
            external_identifier: CBDB:695166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p1NVymgG5dj2u5ysKxFaeM
        subject_person_id: p_ZcBcAmxQjHSQ2gabcCUbC6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家藩，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695166）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vx5OIeRLeE9TrNgTD59TPa
          claim_id: c_p1NVymgG5dj2u5ysKxFaeM
          source_id: s_qMPvRUh4uKj6ifQcBi81JE
          stance: supports
          locator: CBDB:695166
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

# 王家藩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家藩 | accepted |
| bio.summary | 王家藩，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家藩（CBDB 695166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695166&o=json)

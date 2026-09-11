---
schema: wang-person/v1
id: p_rhFHenhAkM2KJ3E4r19vrz
status: active
merged_into: null
display_name: 王文思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_niNEEbbSSoqWA1sGc6q4A4
        subject_person_id: p_rhFHenhAkM2KJ3E4r19vrz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_94yZNMGcsBPDTdF1Gr9NSw
          claim_id: c_niNEEbbSSoqWA1sGc6q4A4
          source_id: s_kBAawT9LkPucD7LdTm4UY7
          stance: supports
          locator: CBDB:700151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700151）
          source: &a1
            id: s_kBAawT9LkPucD7LdTm4UY7
            source_type: api_record
            title: 中国历代人物传记资料库：王文思（CBDB 700151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700151&o=json
            external_identifier: CBDB:700151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WFGhjQ1R7kryptXPDKPkJw
        subject_person_id: p_rhFHenhAkM2KJ3E4r19vrz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文思，清人物。籍贯仙居，身份为父老;耆老，入仕郡庠生。（中国历代人物传记资料库 CBDB 700151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b3QeWfuSL-MXRvdUKuOzBN
          claim_id: c_WFGhjQ1R7kryptXPDKPkJw
          source_id: s_kBAawT9LkPucD7LdTm4UY7
          stance: supports
          locator: CBDB:700151
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

# 王文思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文思 | accepted |
| bio.summary | 王文思，清人物。籍贯仙居，身份为父老;耆老，入仕郡庠生。（中国历代人物传记资料库 CBDB 700151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文思（CBDB 700151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700151&o=json)

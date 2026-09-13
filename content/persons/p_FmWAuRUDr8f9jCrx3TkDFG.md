---
schema: wang-person/v1
id: p_FmWAuRUDr8f9jCrx3TkDFG
status: active
merged_into: null
display_name: 王用龍
cbdb_id: 38504
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LV9qbU7RBakaaEr82kM8cY
        subject_person_id: p_FmWAuRUDr8f9jCrx3TkDFG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用龍，宋人物。籍贯進賢，身份为死國難。（中国历代人物传记资料库 CBDB 38504）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FhirHmhNw-EwDQXBaToS7F
          claim_id: c_LV9qbU7RBakaaEr82kM8cY
          source_id: s_GGHdXDNyc8sbvWG5U999g5
          stance: supports
          locator: CBDB:38504
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GGHdXDNyc8sbvWG5U999g5
            source_type: api_record
            title: 中国历代人物传记资料库：王用龍（CBDB 38504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38504&o=json
            external_identifier: CBDB:38504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:47.307Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_nsUskeTY7W94EyKuxkRg2f
        subject_person_id: p_FmWAuRUDr8f9jCrx3TkDFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FDB47cnXdNPf86PyFw4G1U
          claim_id: c_nsUskeTY7W94EyKuxkRg2f
          source_id: s_GGHdXDNyc8sbvWG5U999g5
          stance: supports
          locator: CBDB:38504
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1301-1400）｜历史性依据：CBDB 朝代 = 宋
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

# 王用龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用龍，宋人物。籍贯進賢，身份为死國難。（中国历代人物传记资料库 CBDB 38504） | accepted |
| name.primary | 王用龍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用龍（CBDB 38504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38504&o=json)

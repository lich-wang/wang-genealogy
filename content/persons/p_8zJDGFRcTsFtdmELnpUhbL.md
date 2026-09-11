---
schema: wang-person/v1
id: p_8zJDGFRcTsFtdmELnpUhbL
status: active
merged_into: null
display_name: 王齡昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jwR36pq6ASMVK3Z8Ca9HL2
        subject_person_id: p_8zJDGFRcTsFtdmELnpUhbL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齡昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XrCbpr4WrXBs6nnV2RrwST
          claim_id: c_jwR36pq6ASMVK3Z8Ca9HL2
          source_id: s_mHKbBYgyL1hhV1y55BGzP4
          stance: supports
          locator: CBDB:72107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72107）
          source: &a1
            id: s_mHKbBYgyL1hhV1y55BGzP4
            source_type: api_record
            title: 中国历代人物传记资料库：王齡昌（CBDB 72107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72107&o=json
            external_identifier: CBDB:72107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x6MxLwrmKTGntBdV4dHCtt
        subject_person_id: p_8zJDGFRcTsFtdmELnpUhbL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1649年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kHrVAEqSLt6BvqGRi8MubU
          claim_id: c_x6MxLwrmKTGntBdV4dHCtt
          source_id: s_mHKbBYgyL1hhV1y55BGzP4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eF167emkUF7KL1qGdDn8mB
        subject_person_id: p_8zJDGFRcTsFtdmELnpUhbL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齡昌（生于1649年），清人物。籍贯建德。（中国历代人物传记资料库 CBDB 72107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vhZ0llWoObfsjm2YrerFRY
          claim_id: c_eF167emkUF7KL1qGdDn8mB
          source_id: s_mHKbBYgyL1hhV1y55BGzP4
          stance: supports
          locator: CBDB:72107
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

# 王齡昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齡昌 | accepted |
| birth.date | 1649年 | accepted |
| bio.summary | 王齡昌（生于1649年），清人物。籍贯建德。（中国历代人物传记资料库 CBDB 72107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王齡昌（CBDB 72107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72107&o=json)

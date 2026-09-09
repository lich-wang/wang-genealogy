---
schema: wang-person/v1
id: p_qXHjyf2dHVQ28WyLS2CsBC
status: active
merged_into: null
display_name: 王施仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c7Gy77P3WsUjRZeV2FyFQT
        subject_person_id: p_qXHjyf2dHVQ28WyLS2CsBC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王施仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TnuxoowSGXA6HxXhAkCFPv
          claim_id: c_c7Gy77P3WsUjRZeV2FyFQT
          source_id: s_GVuLk9s6jwQ9YDJHSp4p8L
          stance: supports
          locator: CBDB:221777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221777）
          source: &a1
            id: s_GVuLk9s6jwQ9YDJHSp4p8L
            source_type: api_record
            title: 中国历代人物传记资料库：王施仁（CBDB 221777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221777&o=json
            external_identifier: CBDB:221777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hdVwe5YjqQGcsATVRxQLBK
        subject_person_id: p_qXHjyf2dHVQ28WyLS2CsBC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wpHAqrC6xQ7s2zjZD1EDHX
          claim_id: c_hdVwe5YjqQGcsATVRxQLBK
          source_id: s_GVuLk9s6jwQ9YDJHSp4p8L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王施仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王施仁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王施仁（CBDB 221777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221777&o=json)

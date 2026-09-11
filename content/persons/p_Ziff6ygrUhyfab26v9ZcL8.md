---
schema: wang-person/v1
id: p_Ziff6ygrUhyfab26v9ZcL8
status: active
merged_into: null
display_name: 王階平
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z1AbFuB2YissT3Ugwf6W5w
        subject_person_id: p_Ziff6ygrUhyfab26v9ZcL8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王階平
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DEyK3DA5mvqTP2H6AogX3U
          claim_id: c_z1AbFuB2YissT3Ugwf6W5w
          source_id: s_198j3ueuAQ9LcMtFZ34saV
          stance: supports
          locator: CBDB:640780
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640780）
          source: &a1
            id: s_198j3ueuAQ9LcMtFZ34saV
            source_type: api_record
            title: 中国历代人物传记资料库：王階平（CBDB 640780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640780&o=json
            external_identifier: CBDB:640780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RREQwZyhPAMqMBE7HpHpKv
        subject_person_id: p_Ziff6ygrUhyfab26v9ZcL8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王階平，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 640780）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L1VhFRY1u2ZiVCjaNDtMm4
          claim_id: c_RREQwZyhPAMqMBE7HpHpKv
          source_id: s_198j3ueuAQ9LcMtFZ34saV
          stance: supports
          locator: CBDB:640780
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

# 王階平

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王階平 | accepted |
| bio.summary | 王階平，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 640780） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王階平（CBDB 640780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640780&o=json)

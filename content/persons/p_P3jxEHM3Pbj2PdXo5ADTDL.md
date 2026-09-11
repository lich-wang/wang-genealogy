---
schema: wang-person/v1
id: p_P3jxEHM3Pbj2PdXo5ADTDL
status: active
merged_into: null
display_name: 王觀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fKPADs96zD21oeDbn9Pf5k
        subject_person_id: p_P3jxEHM3Pbj2PdXo5ADTDL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3PdwEVmoKe3BkYALZvtZ9D
          claim_id: c_fKPADs96zD21oeDbn9Pf5k
          source_id: s_xg4PVGJpEx84ACJxhjaUwU
          stance: supports
          locator: CBDB:500225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500225）
          source: &a1
            id: s_xg4PVGJpEx84ACJxhjaUwU
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 500225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500225&o=json
            external_identifier: CBDB:500225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RS2eRhYd9uhCV4hxage8ww
        subject_person_id: p_P3jxEHM3Pbj2PdXo5ADTDL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀，清人物。曾任按察使。（中国历代人物传记资料库 CBDB 500225）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QjyrnNr2ldQVwUdlYBWNsZ
          claim_id: c_RS2eRhYd9uhCV4hxage8ww
          source_id: s_xg4PVGJpEx84ACJxhjaUwU
          stance: supports
          locator: CBDB:500225
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

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | 王觀，清人物。曾任按察使。（中国历代人物传记资料库 CBDB 500225） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 500225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500225&o=json)

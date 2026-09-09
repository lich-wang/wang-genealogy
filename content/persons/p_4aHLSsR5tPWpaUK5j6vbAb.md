---
schema: wang-person/v1
id: p_4aHLSsR5tPWpaUK5j6vbAb
status: active
merged_into: null
display_name: 王泌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1suQwMB56SYS9BoixrQ5Mi
        subject_person_id: p_4aHLSsR5tPWpaUK5j6vbAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WuGPry4SFpZCD6Y3HexiA2
          claim_id: c_1suQwMB56SYS9BoixrQ5Mi
          source_id: s_E6Toi9PdHSkLFhJWzGN1RG
          stance: supports
          locator: CBDB:639068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639068）
          source: &a1
            id: s_E6Toi9PdHSkLFhJWzGN1RG
            source_type: api_record
            title: 中国历代人物传记资料库：王泌（CBDB 639068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639068&o=json
            external_identifier: CBDB:639068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R19W87GfgfcRLsHMFd7gfN
        subject_person_id: p_4aHLSsR5tPWpaUK5j6vbAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6nW2PeJ63UnweS59SaWUHs
          claim_id: c_R19W87GfgfcRLsHMFd7gfN
          source_id: s_E6Toi9PdHSkLFhJWzGN1RG
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

# 王泌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泌 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泌（CBDB 639068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639068&o=json)

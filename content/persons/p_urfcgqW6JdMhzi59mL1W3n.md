---
schema: wang-person/v1
id: p_urfcgqW6JdMhzi59mL1W3n
status: active
merged_into: null
display_name: 王居正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kyNBVsLNuyoNAvEHWZgQYp
        subject_person_id: p_urfcgqW6JdMhzi59mL1W3n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王居正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qH6uXq85wNjY5mWSfmnWG3
          claim_id: c_kyNBVsLNuyoNAvEHWZgQYp
          source_id: s_82ZeGSjCsyLuFzntBfSpm7
          stance: supports
          locator: CBDB:22000
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22000）
          source: &a1
            id: s_82ZeGSjCsyLuFzntBfSpm7
            source_type: api_record
            title: 中国历代人物传记资料库：王居正（CBDB 22000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22000&o=json
            external_identifier: CBDB:22000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3mVxAAi9MSbZKqPtP5u7eW
        subject_person_id: p_urfcgqW6JdMhzi59mL1W3n
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1087年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BW7ht4sNrJ9hJobFsKzM3H
          claim_id: c_3mVxAAi9MSbZKqPtP5u7eW
          source_id: s_82ZeGSjCsyLuFzntBfSpm7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5PNKj9AEobQw8jLpVfo66g
        subject_person_id: p_urfcgqW6JdMhzi59mL1W3n
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1151年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L31RKvKSrcpSmij9X8MgtV
          claim_id: c_5PNKj9AEobQw8jLpVfo66g
          source_id: s_82ZeGSjCsyLuFzntBfSpm7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1nBMtvJdDbHVbzaD6rBYzQ
        subject_person_id: p_urfcgqW6JdMhzi59mL1W3n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gwXH8YMnXZG2H3MVdvGCx4
          claim_id: c_1nBMtvJdDbHVbzaD6rBYzQ
          source_id: s_82ZeGSjCsyLuFzntBfSpm7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_y70rFwBnm1ypvHNpdWPa-x
        subject_person_id: p_rxyMJpi4DYL3V342yLAuaM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_urfcgqW6JdMhzi59mL1W3n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k9shQwCaGoq9pUv9vydHB9
          claim_id: c_y70rFwBnm1ypvHNpdWPa-x
          source_id: s_JWMEVmGgJJz3NFkTNMBmmC
          stance: supports
          locator: CBDB 双向互证（子 王居正 ⇄ 父 王幾）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_JWMEVmGgJJz3NFkTNMBmmC
            source_type: api_record
            title: 中国历代人物传记资料库：王幾（CBDB 7369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7369&o=json
            external_identifier: CBDB:7369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rxyMJpi4DYL3V342yLAuaM
        status: active
        display_name: 王幾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王居正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王居正 | accepted |
| birth.date | 1087年 | accepted |
| death.date | 1151年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rxyMJpi4DYL3V342yLAuaM | 王幾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王幾（CBDB 7369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7369&o=json)
- [中国历代人物传记资料库：王居正（CBDB 22000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22000&o=json)

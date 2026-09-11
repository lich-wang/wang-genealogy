---
schema: wang-person/v1
id: p_JX4wDZH7pMF8Nb6HNMpXbw
status: active
merged_into: null
display_name: 王守約
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V7bUCeqFdGuhWrQzGy6pxc
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tWDkdGA9K8qufJrXEzktGP
          claim_id: c_V7bUCeqFdGuhWrQzGy6pxc
          source_id: s_d4ERUPvC55B7WDWpYjQSiT
          stance: supports
          locator: CBDB:256433
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256433）
          source: &a1
            id: s_d4ERUPvC55B7WDWpYjQSiT
            source_type: api_record
            title: 中国历代人物传记资料库：王守約（CBDB 256433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256433&o=json
            external_identifier: CBDB:256433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EDokMHRsxBG4KYEtMEPawJ
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
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
        - id: cs_4SuKuwE6KDLzDsc6EEA5zn
          claim_id: c_EDokMHRsxBG4KYEtMEPawJ
          source_id: s_d4ERUPvC55B7WDWpYjQSiT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_y4Ax6RXRcwBQzX2sb8z8EH
        subject_person_id: p_JX4wDZH7pMF8Nb6HNMpXbw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZjPesmadeqK3r3wUy19KCm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZjOL3Evnn0g5189Gt1AtBf
          claim_id: c_y4Ax6RXRcwBQzX2sb8z8EH
          source_id: s_d4ERUPvC55B7WDWpYjQSiT
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZjPesmadeqK3r3wUy19KCm
        status: active
        display_name: 王一言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守約 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZjPesmadeqK3r3wUy19KCm | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守約（CBDB 256433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256433&o=json)

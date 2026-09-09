---
schema: wang-person/v1
id: p_MS95oKnME4D1UZQTCyYpev
status: active
merged_into: null
display_name: 王靖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UKx4WGSkot6yteNS21u1f9
        subject_person_id: p_MS95oKnME4D1UZQTCyYpev
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rmXQyBouZmPaodT9ZDAGrn
          claim_id: c_UKx4WGSkot6yteNS21u1f9
          source_id: s_AXPsStj4tV1f6MsBZYCDTG
          stance: supports
          locator: CBDB:26362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26362）
          source: &a1
            id: s_AXPsStj4tV1f6MsBZYCDTG
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 26362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26362&o=json
            external_identifier: CBDB:26362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_49jrgupgmaNbeJYSbHnRgR
        subject_person_id: p_MS95oKnME4D1UZQTCyYpev
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gpBV8Xmf6syz9QFGfWMMuQ
          claim_id: c_49jrgupgmaNbeJYSbHnRgR
          source_id: s_AXPsStj4tV1f6MsBZYCDTG
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

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靖 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 26362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26362&o=json)

---
schema: wang-person/v1
id: p_wUBGxrZa6P78WZVLrT2yi5
status: active
merged_into: null
display_name: 王文榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gaTg34is166LAz4bqrqfgc
        subject_person_id: p_wUBGxrZa6P78WZVLrT2yi5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uNCAQiaUroJDEmgiH7kQ7d
          claim_id: c_gaTg34is166LAz4bqrqfgc
          source_id: s_x74hgFjEXLPz9KLiuLu9Uw
          stance: supports
          locator: CBDB:265728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265728）
          source: &a1
            id: s_x74hgFjEXLPz9KLiuLu9Uw
            source_type: api_record
            title: 中国历代人物传记资料库：王文榮（CBDB 265728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265728&o=json
            external_identifier: CBDB:265728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N41L9oaHoKxnHDuEQEwFE2
        subject_person_id: p_wUBGxrZa6P78WZVLrT2yi5
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
        - id: cs_sWcWAsMmHLAtcWFs1gcWUC
          claim_id: c_N41L9oaHoKxnHDuEQEwFE2
          source_id: s_x74hgFjEXLPz9KLiuLu9Uw
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
  descendants:
    - claim:
        id: c_36byLAiV8H3S4dK2WCljgS
        subject_person_id: p_wUBGxrZa6P78WZVLrT2yi5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfuEzx374a7WNXTfcMcWwd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F4MzcQP6gzM8O6RYO6TXHS
          claim_id: c_36byLAiV8H3S4dK2WCljgS
          source_id: s_eiGJS5K3CYMceZonDwA3P8
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eiGJS5K3CYMceZonDwA3P8
            source_type: api_record
            title: 中国历代人物传记资料库：王獻臣（CBDB 67807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json
            external_identifier: CBDB:67807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfuEzx374a7WNXTfcMcWwd
        status: active
        display_name: 王獻臣
        merged_into_person_id: null
  other: []
---

# 王文榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AfuEzx374a7WNXTfcMcWwd | 王獻臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文榮（CBDB 265728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265728&o=json)
- [中国历代人物传记资料库：王獻臣（CBDB 67807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json)

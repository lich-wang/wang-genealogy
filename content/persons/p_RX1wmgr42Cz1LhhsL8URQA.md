---
schema: wang-person/v1
id: p_RX1wmgr42Cz1LhhsL8URQA
status: active
merged_into: null
display_name: 王庭筠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GaiG839TJ6ptE4aHM4QtbW
        subject_person_id: p_RX1wmgr42Cz1LhhsL8URQA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭筠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UHvNhzKQFZN7R11QbG4Fa1
          claim_id: c_GaiG839TJ6ptE4aHM4QtbW
          source_id: s_kmzHFJtqYdYf6JHoFm2CcK
          stance: supports
          locator: CBDB:688060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688060）
          source: &a1
            id: s_kmzHFJtqYdYf6JHoFm2CcK
            source_type: api_record
            title: 中国历代人物传记资料库：王庭筠（CBDB 688060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688060&o=json
            external_identifier: CBDB:688060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AbjZU8sZkA2EVsc8tBnPai
        subject_person_id: p_RX1wmgr42Cz1LhhsL8URQA
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
        - id: cs_4bZKpBqcevsaBEvMPaa5yq
          claim_id: c_AbjZU8sZkA2EVsc8tBnPai
          source_id: s_kmzHFJtqYdYf6JHoFm2CcK
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

# 王庭筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭筠 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭筠（CBDB 688060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688060&o=json)

---
schema: wang-person/v1
id: p_1t3faoJ8nJ4x6rERF2tg6j
status: active
merged_into: null
display_name: 王原根
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hDLdA9vLxA52J2uiHtcHfR
        subject_person_id: p_1t3faoJ8nJ4x6rERF2tg6j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原根
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_69nmUJJBCN9n2KuZEB9dPK
          claim_id: c_hDLdA9vLxA52J2uiHtcHfR
          source_id: s_q2dfQWiPFAHPipqzwyKrKt
          stance: supports
          locator: CBDB:636449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636449）
          source: &a1
            id: s_q2dfQWiPFAHPipqzwyKrKt
            source_type: api_record
            title: 中国历代人物传记资料库：王原根（CBDB 636449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636449&o=json
            external_identifier: CBDB:636449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dmfmYJ8kppotVstFk27jTR
        subject_person_id: p_1t3faoJ8nJ4x6rERF2tg6j
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
        - id: cs_vJGpWafD1Y1nmUsdzgswTk
          claim_id: c_dmfmYJ8kppotVstFk27jTR
          source_id: s_q2dfQWiPFAHPipqzwyKrKt
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

# 王原根

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王原根 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王原根（CBDB 636449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636449&o=json)

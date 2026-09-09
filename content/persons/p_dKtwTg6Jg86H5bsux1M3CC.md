---
schema: wang-person/v1
id: p_dKtwTg6Jg86H5bsux1M3CC
status: active
merged_into: null
display_name: 王受田
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQUTx3NYrUeSPFBVMtyTA4
        subject_person_id: p_dKtwTg6Jg86H5bsux1M3CC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王受田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WCveJ4vtMy8vre6WqDG796
          claim_id: c_VQUTx3NYrUeSPFBVMtyTA4
          source_id: s_wfwb9KP49H36bEKFtzCDGU
          stance: supports
          locator: CBDB:636469
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636469）
          source: &a1
            id: s_wfwb9KP49H36bEKFtzCDGU
            source_type: api_record
            title: 中国历代人物传记资料库：王受田（CBDB 636469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636469&o=json
            external_identifier: CBDB:636469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zu9uBs7y1TBT28Spo6Px3E
        subject_person_id: p_dKtwTg6Jg86H5bsux1M3CC
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
        - id: cs_cqbhz2RtirGyT3dnVjaQGi
          claim_id: c_Zu9uBs7y1TBT28Spo6Px3E
          source_id: s_wfwb9KP49H36bEKFtzCDGU
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

# 王受田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王受田 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王受田（CBDB 636469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636469&o=json)

---
schema: wang-person/v1
id: p_L4h9cHsogYdcbgEy7im8mZ
status: active
merged_into: null
display_name: 王嘉瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g2KyVEgDahoAeU9soSuVc3
        subject_person_id: p_L4h9cHsogYdcbgEy7im8mZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PcHJtN843TS8HxMTnL7uHL
          claim_id: c_g2KyVEgDahoAeU9soSuVc3
          source_id: s_rgjN9jURFYG63X8z4aP916
          stance: supports
          locator: CBDB:636619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636619）
          source: &a1
            id: s_rgjN9jURFYG63X8z4aP916
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉瑞（CBDB 636619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636619&o=json
            external_identifier: CBDB:636619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ayNMEK7k3E9e9CGH19HPcZ
        subject_person_id: p_L4h9cHsogYdcbgEy7im8mZ
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
        - id: cs_RkotmgeWjnjXEg2FRECxGN
          claim_id: c_ayNMEK7k3E9e9CGH19HPcZ
          source_id: s_rgjN9jURFYG63X8z4aP916
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

# 王嘉瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉瑞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉瑞（CBDB 636619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636619&o=json)

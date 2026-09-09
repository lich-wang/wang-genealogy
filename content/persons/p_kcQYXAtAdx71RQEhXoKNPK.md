---
schema: wang-person/v1
id: p_kcQYXAtAdx71RQEhXoKNPK
status: active
merged_into: null
display_name: 王剛中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YFwJqGDBbQB591D3Wo89NJ
        subject_person_id: p_kcQYXAtAdx71RQEhXoKNPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王剛中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jDRPQpjCo2Dneun9r45f3A
          claim_id: c_YFwJqGDBbQB591D3Wo89NJ
          source_id: s_QU6wNA5nA6pBKS62D28qrg
          stance: supports
          locator: CBDB:38015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38015）
          source: &a1
            id: s_QU6wNA5nA6pBKS62D28qrg
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 38015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38015&o=json
            external_identifier: CBDB:38015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1EaTQZ8Z9CmSsQsuixMxSa
        subject_person_id: p_kcQYXAtAdx71RQEhXoKNPK
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
        - id: cs_Rx4C7oBAH8Tt5Cc2MQTmNA
          claim_id: c_1EaTQZ8Z9CmSsQsuixMxSa
          source_id: s_QU6wNA5nA6pBKS62D28qrg
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

# 王剛中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王剛中 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 38015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38015&o=json)

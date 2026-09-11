---
schema: wang-person/v1
id: p_kcQYXAtAdx71RQEhXoKNPK
status: active
merged_into: null
display_name: 王剛中
revision: 2
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
  parents:
    - claim:
        id: c_k5MJeOYBoHXNybmqGWK_J5
        subject_person_id: p_WgNmx4b4KuLP378oSihf2n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kcQYXAtAdx71RQEhXoKNPK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z2OrPN-t_yhl_aUUyDdtdj
          claim_id: c_k5MJeOYBoHXNybmqGWK_J5
          source_id: s_QU6wNA5nA6pBKS62D28qrg
          stance: supports
          locator: 寶祐登科錄：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WgNmx4b4KuLP378oSihf2n
        status: active
        display_name: 王堅叔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_bD60VQtOu8axQPSgU_yX7b
        subject_person_id: p_Y7xw69wqSLG2G9CDMuvsf4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kcQYXAtAdx71RQEhXoKNPK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xTOCYckC0PZaCy7cdBNIG0
          claim_id: c_bD60VQtOu8axQPSgU_yX7b
          source_id: s_QU6wNA5nA6pBKS62D28qrg
          stance: supports
          locator: 寶祐登科錄：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Y7xw69wqSLG2G9CDMuvsf4
        status: active
        display_name: 王延
        merged_into_person_id: null
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
| parents | p_WgNmx4b4KuLP378oSihf2n | 王堅叔 | accepted |
| ancestors | p_Y7xw69wqSLG2G9CDMuvsf4 | 王延 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 38015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38015&o=json)

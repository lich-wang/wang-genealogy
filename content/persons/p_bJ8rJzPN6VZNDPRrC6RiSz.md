---
schema: wang-person/v1
id: p_bJ8rJzPN6VZNDPRrC6RiSz
status: active
merged_into: null
display_name: 王宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m87WcFr8Qavp94X7bYpbK4
        subject_person_id: p_bJ8rJzPN6VZNDPRrC6RiSz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UHJrVqBZzQhS4wvezm27NF
          claim_id: c_m87WcFr8Qavp94X7bYpbK4
          source_id: s_8GEgdmTG67BRqGC47YjVUv
          stance: supports
          locator: CBDB:277333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277333）
          source: &a1
            id: s_8GEgdmTG67BRqGC47YjVUv
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 277333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277333&o=json
            external_identifier: CBDB:277333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LFZKLwPuvkMixNjiuWoygZ
        subject_person_id: p_bJ8rJzPN6VZNDPRrC6RiSz
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
        - id: cs_dMKy4KMnMQhCGrvHyManQC
          claim_id: c_LFZKLwPuvkMixNjiuWoygZ
          source_id: s_8GEgdmTG67BRqGC47YjVUv
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
        id: c_PMUfrBD-svttaWctd-uwVD
        subject_person_id: p_bJ8rJzPN6VZNDPRrC6RiSz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jApABJHQqEgd77SBohjrMK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_03-yzSbWeyR6pLHLpEMF32
          claim_id: c_PMUfrBD-svttaWctd-uwVD
          source_id: s_8GEgdmTG67BRqGC47YjVUv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jApABJHQqEgd77SBohjrMK
        status: active
        display_name: 王溱
        merged_into_person_id: null
  other: []
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jApABJHQqEgd77SBohjrMK | 王溱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 277333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277333&o=json)

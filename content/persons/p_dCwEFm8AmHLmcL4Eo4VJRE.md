---
schema: wang-person/v1
id: p_dCwEFm8AmHLmcL4Eo4VJRE
status: active
merged_into: null
display_name: 袁瑀女
revision: 1
cbdb_id: 211134
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RIu0sisfnR5JSERX2fai8N
        subject_person_id: p_dCwEFm8AmHLmcL4Eo4VJRE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 袁瑀女
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B3o1oR4VIsT35m_TLJybx4
          claim_id: c_RIu0sisfnR5JSERX2fai8N
          source_id: s_LSR8TnFSX1GzV9OnRlA2jJ
          stance: supports
          locator: CBDB:211134
          quotation: null
          interpretation_note: CBDB 明确记录的王詔配偶
          source: &a1
            id: s_LSR8TnFSX1GzV9OnRlA2jJ
            source_type: api_record
            title: 中国历代人物传记资料库：袁瑀女（CBDB 211134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211134&o=json
            external_identifier: CBDB:211134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_M99tW7lY4_CY36g8BtEk10
        subject_person_id: p_tBLAnfK4dS8P5LR1P2RqS9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dCwEFm8AmHLmcL4Eo4VJRE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e1Gy9iYQZT-9I7376sGl2T
          claim_id: c_M99tW7lY4_CY36g8BtEk10
          source_id: s_LSR8TnFSX1GzV9OnRlA2jJ
          stance: supports
          locator: (乾隆)信陽州志，lgid=868513：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tBLAnfK4dS8P5LR1P2RqS9
        status: active
        display_name: 王詔
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 袁瑀女

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 袁瑀女 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_tBLAnfK4dS8P5LR1P2RqS9 | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：袁瑀女（CBDB 211134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211134&o=json)

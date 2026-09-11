---
schema: wang-person/v1
id: p_4PgC86dN5a7Ppe9tCqDN6L
status: active
merged_into: null
display_name: 張湘月
revision: 1
cbdb_id: 100046
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vgjsyukr34Xthg78tYHPhK
        subject_person_id: p_4PgC86dN5a7Ppe9tCqDN6L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張湘月
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_59d_A4JuwQsZruwzJu56Zo
          claim_id: c_vgjsyukr34Xthg78tYHPhK
          source_id: s_QXwF9fszwFEqSJFRL8vgbg
          stance: supports
          locator: CBDB:100046
          quotation: null
          interpretation_note: CBDB 明确记录的王睊配偶
          source: &a1
            id: s_QXwF9fszwFEqSJFRL8vgbg
            source_type: api_record
            title: 中国历代人物传记资料库：張湘月（CBDB 100046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100046&o=json
            external_identifier: CBDB:100046
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
        id: c_0v6USf_xnBXCf_Qf8mHUOE
        subject_person_id: p_ifc8refaC8BJ82JH7kFfvX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4PgC86dN5a7Ppe9tCqDN6L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VIodX7yxXCOgdFw4UzIX-b
          claim_id: c_0v6USf_xnBXCf_Qf8mHUOE
          source_id: s_QXwF9fszwFEqSJFRL8vgbg
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1778, HuWenKai #522：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ifc8refaC8BJ82JH7kFfvX
        status: active
        display_name: 王睊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張湘月

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張湘月 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ifc8refaC8BJ82JH7kFfvX | 王睊 | accepted |

## 外部来源

- [中国历代人物传记资料库：張湘月（CBDB 100046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100046&o=json)

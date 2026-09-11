---
schema: wang-person/v1
id: p_9kGiV9rB8zAPUFGcxHPNxz
status: active
merged_into: null
display_name: 文先謚
revision: 1
cbdb_id: 121230
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oyF-Zk4sHBeHxLEOOITX_O
        subject_person_id: p_9kGiV9rB8zAPUFGcxHPNxz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 文先謚
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SrNJC0aGQ0jh0mc0eI1Eep
          claim_id: c_oyF-Zk4sHBeHxLEOOITX_O
          source_id: s_aaZ-r0vDkltOZQBYr3pkqB
          stance: supports
          locator: CBDB:121230
          quotation: null
          interpretation_note: CBDB 明确记录的王開琸配偶
          source: &a1
            id: s_aaZ-r0vDkltOZQBYr3pkqB
            source_type: api_record
            title: 中国历代人物传记资料库：文先謚（CBDB 121230）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121230&o=json
            external_identifier: CBDB:121230
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
        id: c_fpxxDbdmuJHkQMAYzXbJuG
        subject_person_id: p_Uw6JPKb1n3hhCkQQ6dA3F4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9kGiV9rB8zAPUFGcxHPNxz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5q-zt4vTLuEASssvW3fWYg
          claim_id: c_fpxxDbdmuJHkQMAYzXbJuG
          source_id: s_aaZ-r0vDkltOZQBYr3pkqB
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4185, HuWenKai #222：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Uw6JPKb1n3hhCkQQ6dA3F4
        status: active
        display_name: 王開琸
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 文先謚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 文先謚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Uw6JPKb1n3hhCkQQ6dA3F4 | 王開琸 | accepted |

## 外部来源

- [中国历代人物传记资料库：文先謚（CBDB 121230）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121230&o=json)

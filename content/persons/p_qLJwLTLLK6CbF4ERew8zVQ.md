---
schema: wang-person/v1
id: p_qLJwLTLLK6CbF4ERew8zVQ
status: active
merged_into: null
display_name: 溫廉貞
revision: 1
cbdb_id: 56747
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5fV4qSd-qPwAi8uJiDypTx
        subject_person_id: p_qLJwLTLLK6CbF4ERew8zVQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 溫廉貞
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZLNu6cdraYw_VT7ULrIZ2U
          claim_id: c_5fV4qSd-qPwAi8uJiDypTx
          source_id: s_y58ZhlWOJBJTfV5tj5lJoW
          stance: supports
          locator: CBDB:56747
          quotation: null
          interpretation_note: CBDB 明确记录的王靜甫配偶
          source: &a1
            id: s_y58ZhlWOJBJTfV5tj5lJoW
            source_type: api_record
            title: 中国历代人物传记资料库：溫廉貞（CBDB 56747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56747&o=json
            external_identifier: CBDB:56747
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
        id: c_SlIYT6luTDD5MB1n68DYKe
        subject_person_id: p_p4bz5EmTtx2nvHLBuC2GGX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_qLJwLTLLK6CbF4ERew8zVQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XA1uvG_2kCud4-uAiCFM6b
          claim_id: c_SlIYT6luTDD5MB1n68DYKe
          source_id: s_y58ZhlWOJBJTfV5tj5lJoW
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1701, HuWenKai #681：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_p4bz5EmTtx2nvHLBuC2GGX
        status: active
        display_name: 王靜甫
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 溫廉貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 溫廉貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_p4bz5EmTtx2nvHLBuC2GGX | 王靜甫 | accepted |

## 外部来源

- [中国历代人物传记资料库：溫廉貞（CBDB 56747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56747&o=json)

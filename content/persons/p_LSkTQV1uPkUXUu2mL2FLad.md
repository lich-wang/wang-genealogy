---
schema: wang-person/v1
id: p_LSkTQV1uPkUXUu2mL2FLad
status: active
merged_into: null
display_name: 王瀚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9FQHTwSZshRa2CZW4T8pDr
        subject_person_id: p_LSkTQV1uPkUXUu2mL2FLad
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wmKFK8Ca1fxKCjeYypK4vu
          claim_id: c_9FQHTwSZshRa2CZW4T8pDr
          source_id: s_1ZSJJzeidPYGRPo6WVZQ76
          stance: supports
          locator: CBDB:119094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119094）
          source: &a1
            id: s_1ZSJJzeidPYGRPo6WVZQ76
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 119094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119094&o=json
            external_identifier: CBDB:119094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.884Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_86EbUPrqZWdBc4Er3d1iAC
        subject_person_id: p_LSkTQV1uPkUXUu2mL2FLad
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1641年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KaSvatTUaUdQjZJjbTQFu8
          claim_id: c_86EbUPrqZWdBc4Er3d1iAC
          source_id: s_1ZSJJzeidPYGRPo6WVZQ76
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gx9DyZaPxNQppuw76oB9bS
        subject_person_id: p_LSkTQV1uPkUXUu2mL2FLad
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
        - id: cs_EfmFbd69pXzz9k64fxP6dw
          claim_id: c_Gx9DyZaPxNQppuw76oB9bS
          source_id: s_1ZSJJzeidPYGRPo6WVZQ76
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
  spouses:
    - claim:
        id: c_ccG6FQzQOPQgVwXKwqitO0
        subject_person_id: p_LSkTQV1uPkUXUu2mL2FLad
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_pBECt8ktFS2gBvuZzRhGwp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_giTDPABMfzaMx0-dmuFy8H
          claim_id: c_ccG6FQzQOPQgVwXKwqitO0
          source_id: s_OVquW6MxMu5wmg5txtMIR0
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3152：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_OVquW6MxMu5wmg5txtMIR0
            source_type: api_record
            title: 中国历代人物传记资料库：盧氏(王瀚妻)（CBDB 119090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119090&o=json
            external_identifier: CBDB:119090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pBECt8ktFS2gBvuZzRhGwp
        status: active
        display_name: 盧氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王瀚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀚 | accepted |
| death.date | 1641年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_pBECt8ktFS2gBvuZzRhGwp | 盧氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧氏(王瀚妻)（CBDB 119090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119090&o=json)
- [中国历代人物传记资料库：王瀚（CBDB 119094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119094&o=json)

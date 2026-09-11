---
schema: wang-person/v1
id: p_3Z4MN7huLACsXMTsKv8r4y
status: active
merged_into: null
display_name: 趙明霞
revision: 1
cbdb_id: 56349
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nWcCoNbLrHj56YwLgwlt2I
        subject_person_id: p_3Z4MN7huLACsXMTsKv8r4y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙明霞
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ysqsT5Qh-9NsC-vGRA2J1V
          claim_id: c_nWcCoNbLrHj56YwLgwlt2I
          source_id: s_fcwbWwsH_r2S61cTvEezbU
          stance: supports
          locator: CBDB:56349
          quotation: null
          interpretation_note: CBDB 明确记录的王秀亭配偶
          source: &a1
            id: s_fcwbWwsH_r2S61cTvEezbU
            source_type: api_record
            title: 中国历代人物传记资料库：趙明霞（CBDB 56349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56349&o=json
            external_identifier: CBDB:56349
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
        id: c_l17cYvJeyQBsdsB79icSba
        subject_person_id: p_257MpeNBbY2sbpHwUhVfp4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3Z4MN7huLACsXMTsKv8r4y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D_u303NJ9WipyjELrhHROX
          claim_id: c_l17cYvJeyQBsdsB79icSba
          source_id: s_fcwbWwsH_r2S61cTvEezbU
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #868, HuWenKai #705：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_257MpeNBbY2sbpHwUhVfp4
        status: active
        display_name: 王秀亭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙明霞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 趙明霞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_257MpeNBbY2sbpHwUhVfp4 | 王秀亭 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙明霞（CBDB 56349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56349&o=json)

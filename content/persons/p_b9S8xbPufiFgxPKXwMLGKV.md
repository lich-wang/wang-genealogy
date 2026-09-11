---
schema: wang-person/v1
id: p_b9S8xbPufiFgxPKXwMLGKV
status: active
merged_into: null
display_name: 王瀚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8kZVkMuYshFQRPTMaH9QCv
        subject_person_id: p_b9S8xbPufiFgxPKXwMLGKV
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
        - id: cs_w8rdhkSdFQ5DLjCXPHgVJh
          claim_id: c_8kZVkMuYshFQRPTMaH9QCv
          source_id: s_QU7FA7yJ2osrMYNmWa9h4L
          stance: supports
          locator: CBDB:283311
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283311）
          source: &a1
            id: s_QU7FA7yJ2osrMYNmWa9h4L
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 283311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283311&o=json
            external_identifier: CBDB:283311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BnPzv87R1E1fUCb3gXZKMJ
        subject_person_id: p_b9S8xbPufiFgxPKXwMLGKV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀚，明人物。正德十六年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 283311）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HkgvHnAwMsxQ9Ir3j_HYdw
          claim_id: c_BnPzv87R1E1fUCb3gXZKMJ
          source_id: s_QU7FA7yJ2osrMYNmWa9h4L
          stance: supports
          locator: CBDB:283311
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LoVxxH7lWgiFgb0wwNSWdV
        subject_person_id: p_b9S8xbPufiFgxPKXwMLGKV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tkFi7K6ReQ4K325KrqZnAe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qKM8Tc2sYCEC1vmSioKVIP
          claim_id: c_LoVxxH7lWgiFgb0wwNSWdV
          source_id: s_QU7FA7yJ2osrMYNmWa9h4L
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tkFi7K6ReQ4K325KrqZnAe
        status: active
        display_name: 王相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
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
| bio.summary | 王瀚，明人物。正德十六年進士，籍贯鄞縣。（中国历代人物传记资料库 CBDB 283311） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tkFi7K6ReQ4K325KrqZnAe | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 283311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283311&o=json)

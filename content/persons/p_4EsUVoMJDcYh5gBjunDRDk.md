---
schema: wang-person/v1
id: p_4EsUVoMJDcYh5gBjunDRDk
status: active
merged_into: null
display_name: 王有為
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UJtFWAuPnz62xFF851s2Sv
        subject_person_id: p_4EsUVoMJDcYh5gBjunDRDk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有為
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qZGRVTXL93LSJ4zaJk9hMF
          claim_id: c_UJtFWAuPnz62xFF851s2Sv
          source_id: s_ZwEKUuzv5h7u9TshD9wF6j
          stance: supports
          locator: CBDB:122022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122022）
          source: &a1
            id: s_ZwEKUuzv5h7u9TshD9wF6j
            source_type: api_record
            title: 中国历代人物传记资料库：王有為（CBDB 122022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122022&o=json
            external_identifier: CBDB:122022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UrvXNzjkpc4YF9Ffi2JPFh
        subject_person_id: p_4EsUVoMJDcYh5gBjunDRDk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RQMVPqwcKv7yefC9KbLKah
          claim_id: c_UrvXNzjkpc4YF9Ffi2JPFh
          source_id: s_ZwEKUuzv5h7u9TshD9wF6j
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MWqb8vwAOGOllg1nXpYvvZ
        subject_person_id: p_4EsUVoMJDcYh5gBjunDRDk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_76chS2Ykfr8oSw8ts28q9u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_upOH8nSRFWJhX5oFWrlVhI
          claim_id: c_MWqb8vwAOGOllg1nXpYvvZ
          source_id: s_ZwEKUuzv5h7u9TshD9wF6j
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2329, HuWenKai #498：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_76chS2Ykfr8oSw8ts28q9u
        status: active
        display_name: 王應箕
        merged_into_person_id: null
    - claim:
        id: c_f1_phE4R-qHn9yCYMEPaY4
        subject_person_id: p_4EsUVoMJDcYh5gBjunDRDk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6HFYHDHS5E6MnCtz3M49ZT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cGZS0wYMSRL1qIfLEQccWu
          claim_id: c_f1_phE4R-qHn9yCYMEPaY4
          source_id: s_rLpL5RcLC3Z52ZuYT4zhcD
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2330, HuWenKai #245：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rLpL5RcLC3Z52ZuYT4zhcD
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞蘭（CBDB 122025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122025&o=json
            external_identifier: CBDB:122025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6HFYHDHS5E6MnCtz3M49ZT
        status: active
        display_name: 王瑞蘭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王有為

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有為 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_76chS2Ykfr8oSw8ts28q9u | 王應箕 | accepted |
| children | p_6HFYHDHS5E6MnCtz3M49ZT | 王瑞蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑞蘭（CBDB 122025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122025&o=json)
- [中国历代人物传记资料库：王有為（CBDB 122022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122022&o=json)

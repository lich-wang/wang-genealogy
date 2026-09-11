---
schema: wang-person/v1
id: p_dXAPbcUx5YQ1aQB8uq7mPd
status: active
merged_into: null
display_name: 王天鑑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AcwnCC7gaoGyGmw5QwUrUc
        subject_person_id: p_dXAPbcUx5YQ1aQB8uq7mPd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CPD8A6qZnuya2g9gMMWrrN
          claim_id: c_AcwnCC7gaoGyGmw5QwUrUc
          source_id: s_416y2w9RZNHCTvtcwgNL6Y
          stance: supports
          locator: CBDB:69068
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69068）
          source: &a1
            id: s_416y2w9RZNHCTvtcwgNL6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王天鑑（CBDB 69068）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69068&o=json
            external_identifier: CBDB:69068
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xtC3aixDA5jm7m2ngmfK5H
        subject_person_id: p_dXAPbcUx5YQ1aQB8uq7mPd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1622年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsTj66pSYvbkSAyg1bVM6j
          claim_id: c_xtC3aixDA5jm7m2ngmfK5H
          source_id: s_416y2w9RZNHCTvtcwgNL6Y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bqUVbwxCKV7Ap1dnZYtxUg
        subject_person_id: p_dXAPbcUx5YQ1aQB8uq7mPd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1681年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EwfUKm62tQDsSjwX96uAMC
          claim_id: c_bqUVbwxCKV7Ap1dnZYtxUg
          source_id: s_416y2w9RZNHCTvtcwgNL6Y
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
        id: c_YFUDgqw3qEK1uM3rdM5Ba6
        subject_person_id: p_dXAPbcUx5YQ1aQB8uq7mPd
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
        - id: cs_cZPQYbMHrGe7DAGt9hh6vi
          claim_id: c_YFUDgqw3qEK1uM3rdM5Ba6
          source_id: s_416y2w9RZNHCTvtcwgNL6Y
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
        id: c_ZlQ7OUqIY1Bt-fwsmxN_8u
        subject_person_id: p_hQLEynziTD7U2V4km8Pxrq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dXAPbcUx5YQ1aQB8uq7mPd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jbt2hL0RD_c_L12C94z8cB
          claim_id: c_ZlQ7OUqIY1Bt-fwsmxN_8u
          source_id: s_416y2w9RZNHCTvtcwgNL6Y
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12764：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hQLEynziTD7U2V4km8Pxrq
        status: active
        display_name: 王道舒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_yr2gotG3thVxfHZN7yhD6l
        subject_person_id: p_dXAPbcUx5YQ1aQB8uq7mPd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_C6cxrFs1c7dm2C2Hbu5V3w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QtAF8ShGSI-biJKuO3VP82
          claim_id: c_yr2gotG3thVxfHZN7yhD6l
          source_id: s_416y2w9RZNHCTvtcwgNL6Y
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12764：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_C6cxrFs1c7dm2C2Hbu5V3w
        status: active
        display_name: 王公虞
        merged_into_person_id: null
  other: []
---

# 王天鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天鑑 | accepted |
| birth.date | 1622年 | accepted |
| death.date | 1681年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hQLEynziTD7U2V4km8Pxrq | 王道舒 | accepted |
| descendants | p_C6cxrFs1c7dm2C2Hbu5V3w | 王公虞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天鑑（CBDB 69068）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69068&o=json)

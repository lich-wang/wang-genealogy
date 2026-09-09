---
schema: wang-person/v1
id: p_MPY6FY572pAXwGnJDp2R5K
status: active
merged_into: null
display_name: 王安國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dP9VkAS52dpCLxS5MHSW14
        subject_person_id: p_MPY6FY572pAXwGnJDp2R5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y7G4zDGPiDGsS6a8jE7WfC
          claim_id: c_dP9VkAS52dpCLxS5MHSW14
          source_id: s_NM7dySEkKq2oHbTaNdG1jf
          stance: supports
          locator: CBDB:69107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69107）
          source: &a1
            id: s_NM7dySEkKq2oHbTaNdG1jf
            source_type: api_record
            title: 中国历代人物传记资料库：王安國（CBDB 69107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69107&o=json
            external_identifier: CBDB:69107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E8jL5MwMdfo8X2Z9kWkNYd
        subject_person_id: p_MPY6FY572pAXwGnJDp2R5K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WH8LLB62WEykdvvQfB4gCq
          claim_id: c_E8jL5MwMdfo8X2Z9kWkNYd
          source_id: s_NM7dySEkKq2oHbTaNdG1jf
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
        id: c_XBE3UFDPVsNR44arHCwPkR
        subject_person_id: p_MPY6FY572pAXwGnJDp2R5K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dqBja83n1UMPLKyWELrLPR
          claim_id: c_XBE3UFDPVsNR44arHCwPkR
          source_id: s_NM7dySEkKq2oHbTaNdG1jf
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
        id: c_21fgVJ6ZESLrAZpXVoBSkM
        subject_person_id: p_MPY6FY572pAXwGnJDp2R5K
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
        - id: cs_NMQNG4gnSrqpZKg2xGkk6y
          claim_id: c_21fgVJ6ZESLrAZpXVoBSkM
          source_id: s_NM7dySEkKq2oHbTaNdG1jf
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
  descendants: []
  other: []
---

# 王安國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安國 | accepted |
| birth.date | 1847年 | accepted |
| death.date | 1863年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安國（CBDB 69107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69107&o=json)

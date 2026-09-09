---
schema: wang-person/v1
id: p_Qw3u24hxW8kwTzHLYvQrUu
status: active
merged_into: null
display_name: 王文藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mLpoFjLCJQts3hx2jyaBsx
        subject_person_id: p_Qw3u24hxW8kwTzHLYvQrUu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VSFD2DnjKYBKLWAsEC47xN
          claim_id: c_mLpoFjLCJQts3hx2jyaBsx
          source_id: s_1SWZd5HFWC4hSPjs7aduTv
          stance: supports
          locator: CBDB:638282
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638282）
          source: &a1
            id: s_1SWZd5HFWC4hSPjs7aduTv
            source_type: api_record
            title: 中国历代人物传记资料库：王文藻（CBDB 638282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638282&o=json
            external_identifier: CBDB:638282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2uJS6jEdwhBCaK7LFe77kW
        subject_person_id: p_Qw3u24hxW8kwTzHLYvQrUu
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
        - id: cs_7sdrcfAB9yHGiyLPb2Gc4R
          claim_id: c_2uJS6jEdwhBCaK7LFe77kW
          source_id: s_1SWZd5HFWC4hSPjs7aduTv
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

# 王文藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文藻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文藻（CBDB 638282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638282&o=json)

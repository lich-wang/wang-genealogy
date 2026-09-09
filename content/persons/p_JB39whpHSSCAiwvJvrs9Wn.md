---
schema: wang-person/v1
id: p_JB39whpHSSCAiwvJvrs9Wn
status: active
merged_into: null
display_name: 王倬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G41soCTXiGewXd7Hfr1xGS
        subject_person_id: p_JB39whpHSSCAiwvJvrs9Wn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bd5qG6AjiHH1uErYB5ZUsV
          claim_id: c_G41soCTXiGewXd7Hfr1xGS
          source_id: s_Lq7AiPrcc782ZdUCVBe55i
          stance: supports
          locator: CBDB:325413
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325413）
          source: &a1
            id: s_Lq7AiPrcc782ZdUCVBe55i
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 325413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325413&o=json
            external_identifier: CBDB:325413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.199Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jn1kjPRZtmh79BRRtJt6BN
        subject_person_id: p_JB39whpHSSCAiwvJvrs9Wn
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
        - id: cs_boERcyZQyKjGNLTB3PzC3R
          claim_id: c_Jn1kjPRZtmh79BRRtJt6BN
          source_id: s_Lq7AiPrcc782ZdUCVBe55i
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

# 王倬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倬（CBDB 325413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325413&o=json)

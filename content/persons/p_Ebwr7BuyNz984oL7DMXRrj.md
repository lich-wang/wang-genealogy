---
schema: wang-person/v1
id: p_Ebwr7BuyNz984oL7DMXRrj
status: active
merged_into: null
display_name: 王明溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UT7t2wN1Cv194gWdqefNiU
        subject_person_id: p_Ebwr7BuyNz984oL7DMXRrj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jFvU6L36yEwQgb2oDw7uDX
          claim_id: c_UT7t2wN1Cv194gWdqefNiU
          source_id: s_hs7Pj59SrUxSYqLxQkjUxt
          stance: supports
          locator: CBDB:638385
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638385）
          source: &a1
            id: s_hs7Pj59SrUxSYqLxQkjUxt
            source_type: api_record
            title: 中国历代人物传记资料库：王明溥（CBDB 638385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638385&o=json
            external_identifier: CBDB:638385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.611Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bJbyZQ1Q2hu6Q71HRYJfNn
        subject_person_id: p_Ebwr7BuyNz984oL7DMXRrj
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
        - id: cs_XkqUnDPtG7eW7KCpFXRPgK
          claim_id: c_bJbyZQ1Q2hu6Q71HRYJfNn
          source_id: s_hs7Pj59SrUxSYqLxQkjUxt
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

# 王明溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明溥 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明溥（CBDB 638385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638385&o=json)

---
schema: wang-person/v1
id: p_4cye1JFWBJQv2VQjyoi17i
status: active
merged_into: null
display_name: 王㬇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nq9r7cdv6DSGES56MAALgE
        subject_person_id: p_4cye1JFWBJQv2VQjyoi17i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㬇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jDR8ZrLiX69nLrwuDMFtk7
          claim_id: c_Nq9r7cdv6DSGES56MAALgE
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
          stance: supports
          locator: CBDB:1820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1820）
          source: &a1
            id: s_ZgyH83hJEC3GCk1HRZreAC
            source_type: api_record
            title: 中国历代人物传记资料库：王㬇（CBDB 1820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1820&o=json
            external_identifier: CBDB:1820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mB1Ne7PbFYYQ63GE68axZf
        subject_person_id: p_4cye1JFWBJQv2VQjyoi17i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1147年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7DaNK8JWU5g7E1tu6Xxuz7
          claim_id: c_mB1Ne7PbFYYQ63GE68axZf
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
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
        id: c_YibSJEPcdsoVN25nKYGsN8
        subject_person_id: p_4cye1JFWBJQv2VQjyoi17i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hRS3pS2Kh4BtLeaoeqZzB7
          claim_id: c_YibSJEPcdsoVN25nKYGsN8
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
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

# 王㬇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㬇 | accepted |
| death.date | 1147年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王㬇（CBDB 1820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1820&o=json)

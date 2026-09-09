---
schema: wang-person/v1
id: p_8eZyK1jyLK5V177cWfdeWZ
status: active
merged_into: null
display_name: 王冠雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3H7SD38Jdzm1emcQf2VWpS
        subject_person_id: p_8eZyK1jyLK5V177cWfdeWZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o65Qj65iNt15cidQGn3VwP
          claim_id: c_3H7SD38Jdzm1emcQf2VWpS
          source_id: s_CaQqC28Dw2CW4qyBRcepyY
          stance: supports
          locator: CBDB:556773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556773）
          source: &a1
            id: s_CaQqC28Dw2CW4qyBRcepyY
            source_type: api_record
            title: 中国历代人物传记资料库：王冠雲（CBDB 556773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556773&o=json
            external_identifier: CBDB:556773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nk4rU24eboRVm5MfcyPsbx
        subject_person_id: p_8eZyK1jyLK5V177cWfdeWZ
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
        - id: cs_GLRMT2PfB3Q9JUSwbbLP6G
          claim_id: c_nk4rU24eboRVm5MfcyPsbx
          source_id: s_CaQqC28Dw2CW4qyBRcepyY
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

# 王冠雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冠雲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冠雲（CBDB 556773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556773&o=json)

---
schema: wang-person/v1
id: p_hbogN714G9UuXoRPWCooPT
status: active
merged_into: null
display_name: 王弗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_THWmm6Axyp5vSDkneXh2jn
        subject_person_id: p_hbogN714G9UuXoRPWCooPT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E1H2U5LdXojUxtsdag4B3g
          claim_id: c_THWmm6Axyp5vSDkneXh2jn
          source_id: s_5oFqNE9knBQRjLTxMfJp2s
          stance: supports
          locator: CBDB:1809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1809）
          source: &a1
            id: s_5oFqNE9knBQRjLTxMfJp2s
            source_type: api_record
            title: 中国历代人物传记资料库：王弗（CBDB 1809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1809&o=json
            external_identifier: CBDB:1809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AGKo3qh5cLPTQ8jZhoCbb1
        subject_person_id: p_hbogN714G9UuXoRPWCooPT
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
        - id: cs_mAxKh229AvxBbLFn8y31W9
          claim_id: c_AGKo3qh5cLPTQ8jZhoCbb1
          source_id: s_5oFqNE9knBQRjLTxMfJp2s
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

# 王弗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弗 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弗（CBDB 1809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1809&o=json)

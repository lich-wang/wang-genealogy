---
schema: wang-person/v1
id: p_AHaRqoatvkA6yoz8iUKbHH
status: active
merged_into: null
display_name: 王必謙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dn4QVbEr8BkRVDAYYQoZSJ
        subject_person_id: p_AHaRqoatvkA6yoz8iUKbHH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王必謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RJtARyLt85bxMy7yB29cfq
          claim_id: c_dn4QVbEr8BkRVDAYYQoZSJ
          source_id: s_h2R1FURD35VArc9eknRDgV
          stance: supports
          locator: CBDB:538774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538774）
          source: &a1
            id: s_h2R1FURD35VArc9eknRDgV
            source_type: api_record
            title: 中国历代人物传记资料库：王必謙（CBDB 538774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538774&o=json
            external_identifier: CBDB:538774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CtvhhnMNbEdwWehABTtyGx
        subject_person_id: p_AHaRqoatvkA6yoz8iUKbHH
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
        - id: cs_rT9Smqe8tbMKEX49oC8c9R
          claim_id: c_CtvhhnMNbEdwWehABTtyGx
          source_id: s_h2R1FURD35VArc9eknRDgV
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

# 王必謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王必謙 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王必謙（CBDB 538774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538774&o=json)

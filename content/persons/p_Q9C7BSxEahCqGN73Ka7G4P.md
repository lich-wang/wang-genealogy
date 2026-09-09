---
schema: wang-person/v1
id: p_Q9C7BSxEahCqGN73Ka7G4P
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nnqW3X9otWe8BeZX4CEoiA
        subject_person_id: p_Q9C7BSxEahCqGN73Ka7G4P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bQoei2beTHc5fYBfxfDLm9
          claim_id: c_nnqW3X9otWe8BeZX4CEoiA
          source_id: s_beRnzdXpt6fXEf9Bd8r4Ci
          stance: supports
          locator: CBDB:380682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380682）
          source: &a1
            id: s_beRnzdXpt6fXEf9Bd8r4Ci
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 380682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380682&o=json
            external_identifier: CBDB:380682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gytFvKsWe1oSsLX3kfQax9
        subject_person_id: p_Q9C7BSxEahCqGN73Ka7G4P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4zaL38w5QBws5hm5W6nkK7
          claim_id: c_gytFvKsWe1oSsLX3kfQax9
          source_id: s_beRnzdXpt6fXEf9Bd8r4Ci
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 380682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380682&o=json)

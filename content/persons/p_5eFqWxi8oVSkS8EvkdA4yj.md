---
schema: wang-person/v1
id: p_5eFqWxi8oVSkS8EvkdA4yj
status: active
merged_into: null
display_name: 王林梓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BKe7ti6EvodEjwySTRaJvq
        subject_person_id: p_5eFqWxi8oVSkS8EvkdA4yj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林梓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LrWHiNEsKg36CHZcsLvbaQ
          claim_id: c_BKe7ti6EvodEjwySTRaJvq
          source_id: s_fUuCRZ7QHaLrAyFxatVyE4
          stance: supports
          locator: CBDB:638688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638688）
          source: &a1
            id: s_fUuCRZ7QHaLrAyFxatVyE4
            source_type: api_record
            title: 中国历代人物传记资料库：王林梓（CBDB 638688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638688&o=json
            external_identifier: CBDB:638688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.719Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b66vvsjJ38qqjn1g48JDfM
        subject_person_id: p_5eFqWxi8oVSkS8EvkdA4yj
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
        - id: cs_DKAnHj9RFF8yKm49CN7gQL
          claim_id: c_b66vvsjJ38qqjn1g48JDfM
          source_id: s_fUuCRZ7QHaLrAyFxatVyE4
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

# 王林梓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林梓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王林梓（CBDB 638688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638688&o=json)

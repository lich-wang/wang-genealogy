---
schema: wang-person/v1
id: p_N8A5uBxQ6WYAScVBd1MwWK
status: active
merged_into: null
display_name: 王納言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dEDaH8t9i9qEi7NS6Hpo2a
        subject_person_id: p_N8A5uBxQ6WYAScVBd1MwWK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1dHBFHGVgVtFCVw11nYHVE
          claim_id: c_dEDaH8t9i9qEi7NS6Hpo2a
          source_id: s_f2QX2kSwji72yx94EjEhZZ
          stance: supports
          locator: CBDB:205080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205080）
          source: &a1
            id: s_f2QX2kSwji72yx94EjEhZZ
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 205080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205080&o=json
            external_identifier: CBDB:205080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bebANWhkKJCRcT1J8J8cfG
        subject_person_id: p_N8A5uBxQ6WYAScVBd1MwWK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJ5VwPvHndpRh96kg23w2P
          claim_id: c_bebANWhkKJCRcT1J8J8cfG
          source_id: s_f2QX2kSwji72yx94EjEhZZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jh6JhzE4qABaBjKGEibPfa
        subject_person_id: p_N8A5uBxQ6WYAScVBd1MwWK
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
        - id: cs_yK4oQ6euMKKW21Ms8oqt57
          claim_id: c_Jh6JhzE4qABaBjKGEibPfa
          source_id: s_f2QX2kSwji72yx94EjEhZZ
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

# 王納言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納言 | accepted |
| birth.date | 1524年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王納言（CBDB 205080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205080&o=json)

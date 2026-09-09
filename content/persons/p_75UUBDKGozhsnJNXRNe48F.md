---
schema: wang-person/v1
id: p_75UUBDKGozhsnJNXRNe48F
status: active
merged_into: null
display_name: 王閔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RxE2fjDUZtiUXqo9JVBvHN
        subject_person_id: p_75UUBDKGozhsnJNXRNe48F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LtwXAyeu7FLuWJUv2Cvbya
          claim_id: c_RxE2fjDUZtiUXqo9JVBvHN
          source_id: s_393Eq89Pr1Dy65m8rhQ4VU
          stance: supports
          locator: CBDB:315811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315811）
          source: &a1
            id: s_393Eq89Pr1Dy65m8rhQ4VU
            source_type: api_record
            title: 中国历代人物传记资料库：王閔（CBDB 315811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315811&o=json
            external_identifier: CBDB:315811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WeYXpNLUjZY2iRbg66aUa2
        subject_person_id: p_75UUBDKGozhsnJNXRNe48F
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
        - id: cs_8Lh4ADi2YwYxSz9YqwgN72
          claim_id: c_WeYXpNLUjZY2iRbg66aUa2
          source_id: s_393Eq89Pr1Dy65m8rhQ4VU
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

# 王閔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閔（CBDB 315811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315811&o=json)

---
schema: wang-person/v1
id: p_bVh1otR2HH59HH7rfKSMH9
status: active
merged_into: null
display_name: 王德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_imNNmAJLuxNvA37iB7PGLa
        subject_person_id: p_bVh1otR2HH59HH7rfKSMH9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6hgp4MScRGRvMVXs3Vr7pp
          claim_id: c_imNNmAJLuxNvA37iB7PGLa
          source_id: s_EgDUPfkueejK1NXVw76Xfs
          stance: supports
          locator: CBDB:201011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201011）
          source: &a1
            id: s_EgDUPfkueejK1NXVw76Xfs
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 201011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201011&o=json
            external_identifier: CBDB:201011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_N35bgxrFS5WcCz9wEgiuNu
        subject_person_id: p_bVh1otR2HH59HH7rfKSMH9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1459年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MnNWGvg3cNPCnPd4952yEV
          claim_id: c_N35bgxrFS5WcCz9wEgiuNu
          source_id: s_EgDUPfkueejK1NXVw76Xfs
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
        id: c_MyoC4TWyBEKyUJ2Pf48GrR
        subject_person_id: p_bVh1otR2HH59HH7rfKSMH9
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
        - id: cs_RXKVYi4g6XtsAdZTR8oCdr
          claim_id: c_MyoC4TWyBEKyUJ2Pf48GrR
          source_id: s_EgDUPfkueejK1NXVw76Xfs
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

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| birth.date | 1459年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 201011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201011&o=json)

---
schema: wang-person/v1
id: p_K8w7mnVNgLiicBKwmLX79K
status: active
merged_into: null
display_name: 王志仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ld7sQ6RfDkA8WyDcPD9KAP
        subject_person_id: p_K8w7mnVNgLiicBKwmLX79K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jt2MfSq6KLYtTKxVU9poNX
          claim_id: c_Ld7sQ6RfDkA8WyDcPD9KAP
          source_id: s_qS9uuNuBWC3wx4XS6DTfrF
          stance: supports
          locator: CBDB:175798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175798）
          source: &a1
            id: s_qS9uuNuBWC3wx4XS6DTfrF
            source_type: api_record
            title: 中国历代人物传记资料库：王志仁（CBDB 175798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175798&o=json
            external_identifier: CBDB:175798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_x5J88ts8dWLqLVhxFr6BJq
        subject_person_id: p_K8w7mnVNgLiicBKwmLX79K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 715年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8WfkAnNz9exkjhQAMHJeB5
          claim_id: c_x5J88ts8dWLqLVhxFr6BJq
          source_id: s_qS9uuNuBWC3wx4XS6DTfrF
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
        id: c_U2FoSHffcGRNCGH5s586n6
        subject_person_id: p_K8w7mnVNgLiicBKwmLX79K
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
        - id: cs_p1TTZN8QGDthKA2iVpHEwz
          claim_id: c_U2FoSHffcGRNCGH5s586n6
          source_id: s_qS9uuNuBWC3wx4XS6DTfrF
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

# 王志仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志仁 | accepted |
| death.date | 715年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志仁（CBDB 175798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175798&o=json)

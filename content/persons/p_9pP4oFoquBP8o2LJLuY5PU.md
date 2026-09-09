---
schema: wang-person/v1
id: p_9pP4oFoquBP8o2LJLuY5PU
status: active
merged_into: null
display_name: 王朴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jodoGtMke9YLEqK8P9B4K1
        subject_person_id: p_9pP4oFoquBP8o2LJLuY5PU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朴
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qdSt8CN3AZaQr7vajd6r9F
          claim_id: c_jodoGtMke9YLEqK8P9B4K1
          source_id: s_7vwZ2BHVybND6ReekYXfDN
          stance: supports
          locator: CBDB:684996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（684996）
          source: &a1
            id: s_7vwZ2BHVybND6ReekYXfDN
            source_type: api_record
            title: 中国历代人物传记资料库：王朴（CBDB 684996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684996&o=json
            external_identifier: CBDB:684996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qoQ6sq1egFQLu6bjSEQFoA
        subject_person_id: p_9pP4oFoquBP8o2LJLuY5PU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为五代人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NL8zMCA1FUw1pBipMKWEE
          claim_id: c_qoQ6sq1egFQLu6bjSEQFoA
          source_id: s_7vwZ2BHVybND6ReekYXfDN
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

# 王朴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朴 | accepted |
| bio.summary | CBDB 记载为五代人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朴（CBDB 684996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684996&o=json)

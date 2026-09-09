---
schema: wang-person/v1
id: p_bTC9rZmvYYDDG99TBwrtfL
status: active
merged_into: null
display_name: 王慶墀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rPYhi1JrpXa3PRQwR6uKQb
        subject_person_id: p_bTC9rZmvYYDDG99TBwrtfL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶墀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1qyuzpr5SKnFLsGUtPEFFj
          claim_id: c_rPYhi1JrpXa3PRQwR6uKQb
          source_id: s_qfNe98Spwbtiax6N8ViFE3
          stance: supports
          locator: CBDB:637928
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637928）
          source: &a1
            id: s_qfNe98Spwbtiax6N8ViFE3
            source_type: api_record
            title: 中国历代人物传记资料库：王慶墀（CBDB 637928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637928&o=json
            external_identifier: CBDB:637928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cn6tDDZ6rKVodxiWdCdBtK
        subject_person_id: p_bTC9rZmvYYDDG99TBwrtfL
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
        - id: cs_NE4WWz79nGBfHC7p3hb9kS
          claim_id: c_cn6tDDZ6rKVodxiWdCdBtK
          source_id: s_qfNe98Spwbtiax6N8ViFE3
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

# 王慶墀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶墀 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶墀（CBDB 637928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637928&o=json)

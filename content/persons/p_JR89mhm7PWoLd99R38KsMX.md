---
schema: wang-person/v1
id: p_JR89mhm7PWoLd99R38KsMX
status: active
merged_into: null
display_name: 王全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wBCWShdQja31y9JeraS8cr
        subject_person_id: p_JR89mhm7PWoLd99R38KsMX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MH58j7x6W4B5wopAJBRNKY
          claim_id: c_wBCWShdQja31y9JeraS8cr
          source_id: s_pqvmyn4kL367r6rdxEQPXn
          stance: supports
          locator: CBDB:100653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100653）
          source: &a1
            id: s_pqvmyn4kL367r6rdxEQPXn
            source_type: api_record
            title: 中国历代人物传记资料库：王全（CBDB 100653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100653&o=json
            external_identifier: CBDB:100653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oTJAMcPPaGqqTm2zDp8VXF
        subject_person_id: p_JR89mhm7PWoLd99R38KsMX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wcSitdDzNjJCHcEzF9btWa
          claim_id: c_oTJAMcPPaGqqTm2zDp8VXF
          source_id: s_pqvmyn4kL367r6rdxEQPXn
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

# 王全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王全 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王全（CBDB 100653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100653&o=json)

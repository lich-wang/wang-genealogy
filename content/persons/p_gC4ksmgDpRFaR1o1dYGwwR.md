---
schema: wang-person/v1
id: p_gC4ksmgDpRFaR1o1dYGwwR
status: active
merged_into: null
display_name: 王三女
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TiueCobYHhDLwabnQK4Sg8
        subject_person_id: p_gC4ksmgDpRFaR1o1dYGwwR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三女
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Do8jjw5Q4M4bTKq5GRmPdz
          claim_id: c_TiueCobYHhDLwabnQK4Sg8
          source_id: s_AAhh3oXctGnH35hkxD7Z2V
          stance: supports
          locator: CBDB:573449
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573449）
          source: &a1
            id: s_AAhh3oXctGnH35hkxD7Z2V
            source_type: api_record
            title: 中国历代人物传记资料库：王三女（CBDB 573449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573449&o=json
            external_identifier: CBDB:573449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YJxuGEq9hQhxGu1C754mc2
        subject_person_id: p_gC4ksmgDpRFaR1o1dYGwwR
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
        - id: cs_eLNSbjWqow7uQgVGpc5sRh
          claim_id: c_YJxuGEq9hQhxGu1C754mc2
          source_id: s_AAhh3oXctGnH35hkxD7Z2V
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

# 王三女

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三女 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三女（CBDB 573449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573449&o=json)

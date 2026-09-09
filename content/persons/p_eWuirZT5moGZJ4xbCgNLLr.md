---
schema: wang-person/v1
id: p_eWuirZT5moGZJ4xbCgNLLr
status: active
merged_into: null
display_name: 王拱裳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6eGvD3hHAN4wkPnW5U8CU3
        subject_person_id: p_eWuirZT5moGZJ4xbCgNLLr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拱裳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1wxKgvG96xEmuk1JRdu8M
          claim_id: c_6eGvD3hHAN4wkPnW5U8CU3
          source_id: s_WwV42UaLNxsUJwkHemstW9
          stance: supports
          locator: CBDB:638117
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638117）
          source: &a1
            id: s_WwV42UaLNxsUJwkHemstW9
            source_type: api_record
            title: 中国历代人物传记资料库：王拱裳（CBDB 638117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638117&o=json
            external_identifier: CBDB:638117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9sut7hA35vWp2CBszKnLRn
        subject_person_id: p_eWuirZT5moGZJ4xbCgNLLr
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
        - id: cs_LDSV46ELfkEeEcEPY2RGdE
          claim_id: c_9sut7hA35vWp2CBszKnLRn
          source_id: s_WwV42UaLNxsUJwkHemstW9
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

# 王拱裳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拱裳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拱裳（CBDB 638117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638117&o=json)

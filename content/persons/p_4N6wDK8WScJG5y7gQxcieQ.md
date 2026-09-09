---
schema: wang-person/v1
id: p_4N6wDK8WScJG5y7gQxcieQ
status: active
merged_into: null
display_name: 王谷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W6DB4R5SorcppbYMvhXKJ6
        subject_person_id: p_4N6wDK8WScJG5y7gQxcieQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZyhxBNYECY6GBCgDxVdupn
          claim_id: c_W6DB4R5SorcppbYMvhXKJ6
          source_id: s_5qE4cJZ16NYkjMSr3fm3ZY
          stance: supports
          locator: CBDB:688710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688710）
          source: &a1
            id: s_5qE4cJZ16NYkjMSr3fm3ZY
            source_type: api_record
            title: 中国历代人物传记资料库：王谷（CBDB 688710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688710&o=json
            external_identifier: CBDB:688710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VTd2RxrtjGLwMox8SM18eK
        subject_person_id: p_4N6wDK8WScJG5y7gQxcieQ
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
        - id: cs_6dhsGMrm38kZ4GnL5TvpKn
          claim_id: c_VTd2RxrtjGLwMox8SM18eK
          source_id: s_5qE4cJZ16NYkjMSr3fm3ZY
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

# 王谷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王谷 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王谷（CBDB 688710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688710&o=json)

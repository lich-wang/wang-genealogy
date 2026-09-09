---
schema: wang-person/v1
id: p_158f7PNpeKDhP8PqDUi5rA
status: active
merged_into: null
display_name: 王馴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GHndADSyYmMyjM7Ypi2q8F
        subject_person_id: p_158f7PNpeKDhP8PqDUi5rA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GPdTh8FEfLKWdmQcmpNKqN
          claim_id: c_GHndADSyYmMyjM7Ypi2q8F
          source_id: s_QLDimjK4ySvbqQYyeCU6yH
          stance: supports
          locator: CBDB:159059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159059）
          source: &a1
            id: s_QLDimjK4ySvbqQYyeCU6yH
            source_type: api_record
            title: 中国历代人物传记资料库：王馴（CBDB 159059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159059&o=json
            external_identifier: CBDB:159059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rHZGH4hWHqLcbmBTnHWkxt
        subject_person_id: p_158f7PNpeKDhP8PqDUi5rA
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
        - id: cs_nHuPYdLrx4f62SMtyycLtA
          claim_id: c_rHZGH4hWHqLcbmBTnHWkxt
          source_id: s_QLDimjK4ySvbqQYyeCU6yH
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

# 王馴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王馴 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王馴（CBDB 159059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159059&o=json)

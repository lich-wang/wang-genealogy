---
schema: wang-person/v1
id: p_MH8mgZsTqRYLHwjWPH6N5d
status: active
merged_into: null
display_name: 王霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bxdC8XJufB5v384bpjpBkR
        subject_person_id: p_MH8mgZsTqRYLHwjWPH6N5d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oZ2hFQL1DK5aeXnhBR6PmC
          claim_id: c_bxdC8XJufB5v384bpjpBkR
          source_id: s_Aw8YnBKJETDw523Gxbs8zQ
          stance: supports
          locator: CBDB:506219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506219）
          source: &a1
            id: s_Aw8YnBKJETDw523Gxbs8zQ
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 506219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506219&o=json
            external_identifier: CBDB:506219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3FzL9d4sGTY2BD6kSDjmPM
        subject_person_id: p_MH8mgZsTqRYLHwjWPH6N5d
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
        - id: cs_tTfkE6XBj8bbErtmYH6wNZ
          claim_id: c_3FzL9d4sGTY2BD6kSDjmPM
          source_id: s_Aw8YnBKJETDw523Gxbs8zQ
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

# 王霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖（CBDB 506219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506219&o=json)

---
schema: wang-person/v1
id: p_c2wqU3n9G2Mr7ALJUsENRw
status: active
merged_into: null
display_name: 王仲賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X4TvwimBdCQxEjTRQFig51
        subject_person_id: p_c2wqU3n9G2Mr7ALJUsENRw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ED3bvjsoABBQoSuTsShcZn
          claim_id: c_X4TvwimBdCQxEjTRQFig51
          source_id: s_PW5TEuF1s5GYD3tGBn9z4D
          stance: supports
          locator: CBDB:55754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55754）
          source: &a1
            id: s_PW5TEuF1s5GYD3tGBn9z4D
            source_type: api_record
            title: 中国历代人物传记资料库：王仲賢（CBDB 55754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55754&o=json
            external_identifier: CBDB:55754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GPvysLDSmfLNRJm77pXJj5
        subject_person_id: p_c2wqU3n9G2Mr7ALJUsENRw
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
        - id: cs_HvzLj1hJAhK5T7SJxZB9kB
          claim_id: c_GPvysLDSmfLNRJm77pXJj5
          source_id: s_PW5TEuF1s5GYD3tGBn9z4D
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

# 王仲賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲賢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲賢（CBDB 55754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55754&o=json)

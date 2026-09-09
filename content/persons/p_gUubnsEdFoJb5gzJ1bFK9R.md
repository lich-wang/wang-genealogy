---
schema: wang-person/v1
id: p_gUubnsEdFoJb5gzJ1bFK9R
status: active
merged_into: null
display_name: 王鴇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g8gC4JNGiJ3NFoi7HLwa7C
        subject_person_id: p_gUubnsEdFoJb5gzJ1bFK9R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_37ormwgAPCNRMrR3sit4yf
          claim_id: c_g8gC4JNGiJ3NFoi7HLwa7C
          source_id: s_3vE9Sk2pdgzKghcE8hdxzx
          stance: supports
          locator: CBDB:541807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541807）
          source: &a1
            id: s_3vE9Sk2pdgzKghcE8hdxzx
            source_type: api_record
            title: 中国历代人物传记资料库：王鴇（CBDB 541807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541807&o=json
            external_identifier: CBDB:541807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3cZ8CRt76N1kPPk5s18aN8
        subject_person_id: p_gUubnsEdFoJb5gzJ1bFK9R
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
        - id: cs_jKnsPS615MYAtScaP7fRqA
          claim_id: c_3cZ8CRt76N1kPPk5s18aN8
          source_id: s_3vE9Sk2pdgzKghcE8hdxzx
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

# 王鴇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴇 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴇（CBDB 541807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541807&o=json)

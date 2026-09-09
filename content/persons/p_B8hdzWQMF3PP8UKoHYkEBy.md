---
schema: wang-person/v1
id: p_B8hdzWQMF3PP8UKoHYkEBy
status: active
merged_into: null
display_name: 王仁俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EdzVXdHHu7rBQ8FNB9gsUn
        subject_person_id: p_B8hdzWQMF3PP8UKoHYkEBy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DkDUpZDvhKW2ANCAM7fqBF
          claim_id: c_EdzVXdHHu7rBQ8FNB9gsUn
          source_id: s_CB8iBPLtAvoGesZCmxeNZR
          stance: supports
          locator: CBDB:71404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71404）
          source: &a1
            id: s_CB8iBPLtAvoGesZCmxeNZR
            source_type: api_record
            title: 中国历代人物传记资料库：王仁俊（CBDB 71404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71404&o=json
            external_identifier: CBDB:71404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jyvWgrLkDcpMUnqU55ZHu3
        subject_person_id: p_B8hdzWQMF3PP8UKoHYkEBy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1866年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZL8mvPz8nEP5K36f8wKJ97
          claim_id: c_jyvWgrLkDcpMUnqU55ZHu3
          source_id: s_CB8iBPLtAvoGesZCmxeNZR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QUeDBYeMWSfkMLp9N9g7Dk
        subject_person_id: p_B8hdzWQMF3PP8UKoHYkEBy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1913年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HF8eyqfC49GnHgGVXQtwMf
          claim_id: c_QUeDBYeMWSfkMLp9N9g7Dk
          source_id: s_CB8iBPLtAvoGesZCmxeNZR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d6RbMrQEKUMLPySjvRF4Ew
        subject_person_id: p_B8hdzWQMF3PP8UKoHYkEBy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m3fuJfHKw3WZ2wZSAiSCk5
          claim_id: c_d6RbMrQEKUMLPySjvRF4Ew
          source_id: s_CB8iBPLtAvoGesZCmxeNZR
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

# 王仁俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁俊 | accepted |
| birth.date | 1866年 | accepted |
| death.date | 1913年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁俊（CBDB 71404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71404&o=json)

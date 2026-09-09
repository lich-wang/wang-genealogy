---
schema: wang-person/v1
id: p_q5D46BuX53jWuAQm7UGQSh
status: active
merged_into: null
display_name: 王劭銓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j9DVuNc3hX5y2pVud4vRNe
        subject_person_id: p_q5D46BuX53jWuAQm7UGQSh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劭銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BKD696AL6T92kVQRXb6M8s
          claim_id: c_j9DVuNc3hX5y2pVud4vRNe
          source_id: s_Hwk139CDbC4QohCFo2LtXz
          stance: supports
          locator: CBDB:636375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636375）
          source: &a1
            id: s_Hwk139CDbC4QohCFo2LtXz
            source_type: api_record
            title: 中国历代人物传记资料库：王劭銓（CBDB 636375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636375&o=json
            external_identifier: CBDB:636375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RkGWWsDuV8E3pNw16hFbZZ
        subject_person_id: p_q5D46BuX53jWuAQm7UGQSh
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
        - id: cs_17Z5e4BGSjwgUnSULDH4wt
          claim_id: c_RkGWWsDuV8E3pNw16hFbZZ
          source_id: s_Hwk139CDbC4QohCFo2LtXz
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

# 王劭銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王劭銓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王劭銓（CBDB 636375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636375&o=json)

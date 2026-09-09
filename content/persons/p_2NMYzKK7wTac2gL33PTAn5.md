---
schema: wang-person/v1
id: p_2NMYzKK7wTac2gL33PTAn5
status: active
merged_into: null
display_name: 王綧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QR9VEN4eWn8yYUCfA74bBE
        subject_person_id: p_2NMYzKK7wTac2gL33PTAn5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UrGZU2FJ8jNKc4UN7qtnyC
          claim_id: c_QR9VEN4eWn8yYUCfA74bBE
          source_id: s_4DPMahhV9uMn5nJnJFLZuk
          stance: supports
          locator: CBDB:100919
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100919）
          source: &a1
            id: s_4DPMahhV9uMn5nJnJFLZuk
            source_type: api_record
            title: 中国历代人物传记资料库：王綧（CBDB 100919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100919&o=json
            external_identifier: CBDB:100919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uVM3tgNG8Y8ow5J4CnHjLT
        subject_person_id: p_2NMYzKK7wTac2gL33PTAn5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1223年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DdHHp8b5HMDFq8f2PgkiPv
          claim_id: c_uVM3tgNG8Y8ow5J4CnHjLT
          source_id: s_4DPMahhV9uMn5nJnJFLZuk
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
        id: c_e7FZ9Z3FeT8tyiE68JEA31
        subject_person_id: p_2NMYzKK7wTac2gL33PTAn5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1283年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1R397BKuGMEk41Nr5BLLFg
          claim_id: c_e7FZ9Z3FeT8tyiE68JEA31
          source_id: s_4DPMahhV9uMn5nJnJFLZuk
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
        id: c_wGdTYDBZCgUfEKLwcUbAFx
        subject_person_id: p_2NMYzKK7wTac2gL33PTAn5
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
        - id: cs_oE3NkiGgtJEUseXi2RBa59
          claim_id: c_wGdTYDBZCgUfEKLwcUbAFx
          source_id: s_4DPMahhV9uMn5nJnJFLZuk
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

# 王綧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綧 | accepted |
| birth.date | 1223年 | accepted |
| death.date | 1283年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綧（CBDB 100919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100919&o=json)

---
schema: wang-person/v1
id: p_ALZB6chYBFWLa6cpzJULxm
status: active
merged_into: null
display_name: 王綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qo32ywgxX313y6L38XtFae
        subject_person_id: p_ALZB6chYBFWLa6cpzJULxm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C5VBGHxGeaG7ftnmGdT8L5
          claim_id: c_Qo32ywgxX313y6L38XtFae
          source_id: s_hEZnYBf5LivVxu6aRA5Tfp
          stance: supports
          locator: CBDB:63750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（63750）
          source: &a1
            id: s_hEZnYBf5LivVxu6aRA5Tfp
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 63750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=63750&o=json
            external_identifier: CBDB:63750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Ng2SDFRFVcdQNV4idtbnaQ
        subject_person_id: p_ALZB6chYBFWLa6cpzJULxm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1814年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3bJTgNpas2HMNDJCgC8a1T
          claim_id: c_Ng2SDFRFVcdQNV4idtbnaQ
          source_id: s_hEZnYBf5LivVxu6aRA5Tfp
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
        id: c_A1CBGks6UPGcLTuaVcKZn2
        subject_person_id: p_ALZB6chYBFWLa6cpzJULxm
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
        - id: cs_gv91sy47Sy89sXdc2csKgb
          claim_id: c_A1CBGks6UPGcLTuaVcKZn2
          source_id: s_hEZnYBf5LivVxu6aRA5Tfp
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

# 王綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綬 | accepted |
| death.date | 1814年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綬（CBDB 63750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=63750&o=json)

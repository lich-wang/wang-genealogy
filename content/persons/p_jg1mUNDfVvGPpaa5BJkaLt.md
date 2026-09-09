---
schema: wang-person/v1
id: p_jg1mUNDfVvGPpaa5BJkaLt
status: active
merged_into: null
display_name: 王檝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gNJDiuutjYDwGh7Co1f39F
        subject_person_id: p_jg1mUNDfVvGPpaa5BJkaLt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dzpahA2HxS1yTkUraU8DHS
          claim_id: c_gNJDiuutjYDwGh7Co1f39F
          source_id: s_J65w3CbasBCEYp8nQfqHpc
          stance: supports
          locator: CBDB:100977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100977）
          source: &a1
            id: s_J65w3CbasBCEYp8nQfqHpc
            source_type: api_record
            title: 中国历代人物传记资料库：王檝（CBDB 100977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100977&o=json
            external_identifier: CBDB:100977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WBmwLKb1j1GqzhSEKnh2C9
        subject_person_id: p_jg1mUNDfVvGPpaa5BJkaLt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1243年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kPJeA6GuHGJVsgWWhXm24k
          claim_id: c_WBmwLKb1j1GqzhSEKnh2C9
          source_id: s_J65w3CbasBCEYp8nQfqHpc
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
        id: c_FhmMK2LkQZdvyZ7PhWi2db
        subject_person_id: p_jg1mUNDfVvGPpaa5BJkaLt
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
        - id: cs_Jif2D5j7ZBh6wu1THC9UUS
          claim_id: c_FhmMK2LkQZdvyZ7PhWi2db
          source_id: s_J65w3CbasBCEYp8nQfqHpc
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

# 王檝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檝 | accepted |
| death.date | 1243年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王檝（CBDB 100977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100977&o=json)

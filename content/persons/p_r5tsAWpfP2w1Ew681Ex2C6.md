---
schema: wang-person/v1
id: p_r5tsAWpfP2w1Ew681Ex2C6
status: active
merged_into: null
display_name: 王逢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_35YEUTFHcjiMgZ7N5f5D71
        subject_person_id: p_r5tsAWpfP2w1Ew681Ex2C6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KwuU4NxC7BqniQ5vHJ2Hew
          claim_id: c_35YEUTFHcjiMgZ7N5f5D71
          source_id: s_osTvFgrVAZCGYaRJphjcL6
          stance: supports
          locator: CBDB:7374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7374）
          source: &a1
            id: s_osTvFgrVAZCGYaRJphjcL6
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 7374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7374&o=json
            external_identifier: CBDB:7374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.475Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UCpL812wbjoX1gu6FRzycU
        subject_person_id: p_r5tsAWpfP2w1Ew681Ex2C6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1005年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PJYQs36viVrJeMDukFm6cY
          claim_id: c_UCpL812wbjoX1gu6FRzycU
          source_id: s_osTvFgrVAZCGYaRJphjcL6
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
        id: c_zac8Mkt877my7TknYo7QwR
        subject_person_id: p_r5tsAWpfP2w1Ew681Ex2C6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1063年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sWo3ECAn99T4SEf8XiUGYB
          claim_id: c_zac8Mkt877my7TknYo7QwR
          source_id: s_osTvFgrVAZCGYaRJphjcL6
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
        id: c_UthvNUkzQ8Sb8aP7W4Ejrp
        subject_person_id: p_r5tsAWpfP2w1Ew681Ex2C6
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
        - id: cs_BP4PB8huXejCNMDHnzrLBG
          claim_id: c_UthvNUkzQ8Sb8aP7W4Ejrp
          source_id: s_osTvFgrVAZCGYaRJphjcL6
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

# 王逢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逢 | accepted |
| birth.date | 1005年 | accepted |
| death.date | 1063年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逢（CBDB 7374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7374&o=json)

---
schema: wang-person/v1
id: p_MQQyuFRHwHza48Rxy8cmUZ
status: merged
merged_into: p_2XaF6KrMwGSDeaU76DAGrz
display_name: 王重光
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLuHB2NopwxdYXdSkokoKJ
        subject_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2fD8K1SfHcBAjGRF2HRuyK
          claim_id: c_aLuHB2NopwxdYXdSkokoKJ
          source_id: s_TZfCbaZGNCs8bzcMeeqLLY
          stance: supports
          locator: CBDB:126622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126622）
          source: &a1
            id: s_TZfCbaZGNCs8bzcMeeqLLY
            source_type: api_record
            title: 中国历代人物传记资料库：王重光（CBDB 126622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126622&o=json
            external_identifier: CBDB:126622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1wpA1Bji3j61QRsonSsfPH
        subject_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1502年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJ1o5ws7h7pQjA67pxULgN
          claim_id: c_1wpA1Bji3j61QRsonSsfPH
          source_id: s_TZfCbaZGNCs8bzcMeeqLLY
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
        id: c_FiMGKaD8XBFUP1zxkfyLuT
        subject_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9AjTBD3j1JGFYKkjqtfhv
          claim_id: c_FiMGKaD8XBFUP1zxkfyLuT
          source_id: s_TZfCbaZGNCs8bzcMeeqLLY
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
        id: c_qFh48tmEtC65p4Y9foDJ37
        subject_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重光（1502年—1558年），明人物。明清進士進士，籍贯新城，入仕進士。（中国历代人物传记资料库 CBDB 126622）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PuOIa9l9H9lbfOzrWdZBQu
          claim_id: c_qFh48tmEtC65p4Y9foDJ37
          source_id: s_TZfCbaZGNCs8bzcMeeqLLY
          stance: supports
          locator: CBDB:126622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王重光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重光 | accepted |
| birth.date | 1502年 | accepted |
| death.date | 1558年 | accepted |
| bio.summary | 王重光（1502年—1558年），明人物。明清進士進士，籍贯新城，入仕進士。（中国历代人物传记资料库 CBDB 126622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王重光（CBDB 126622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126622&o=json)

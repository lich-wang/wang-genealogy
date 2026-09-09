---
schema: wang-person/v1
id: p_ZhHQYQLUt7z6RXx3QuuGWS
status: active
merged_into: null
display_name: 王鞏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_46FR1hfs1qSVsV7wbRK7xk
        subject_person_id: p_ZhHQYQLUt7z6RXx3QuuGWS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鞏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BPa4ac9yUhdeUGpW5HGPQe
          claim_id: c_46FR1hfs1qSVsV7wbRK7xk
          source_id: s_C9Nmhw98b41BhxBKaGR1hw
          stance: supports
          locator: CBDB:37922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37922）
          source: &a1
            id: s_C9Nmhw98b41BhxBKaGR1hw
            source_type: api_record
            title: 中国历代人物传记资料库：王鞏（CBDB 37922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37922&o=json
            external_identifier: CBDB:37922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LR7pH54i2YkpcSqUA5GF2h
        subject_person_id: p_ZhHQYQLUt7z6RXx3QuuGWS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W8j6ALPYyk6ZF1kBAB3WAH
          claim_id: c_LR7pH54i2YkpcSqUA5GF2h
          source_id: s_C9Nmhw98b41BhxBKaGR1hw
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
        id: c_iVEjVmcpi7zioZRSgFsEqC
        subject_person_id: p_ZhHQYQLUt7z6RXx3QuuGWS
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
        - id: cs_gTc7Dxe375rDRQEqqqPz6w
          claim_id: c_iVEjVmcpi7zioZRSgFsEqC
          source_id: s_C9Nmhw98b41BhxBKaGR1hw
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

# 王鞏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鞏 | accepted |
| death.date | 1236年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鞏（CBDB 37922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37922&o=json)

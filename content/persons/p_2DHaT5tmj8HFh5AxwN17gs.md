---
schema: wang-person/v1
id: p_2DHaT5tmj8HFh5AxwN17gs
status: active
merged_into: null
display_name: 王荃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aLfjCVZ3QMzPmt56FBxH3M
        subject_person_id: p_2DHaT5tmj8HFh5AxwN17gs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6pqdGTDLL48EXJCjZAyz1d
          claim_id: c_aLfjCVZ3QMzPmt56FBxH3M
          source_id: s_QpXPXJMpCLTEg2RMax7Jhm
          stance: supports
          locator: CBDB:56864
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56864）
          source: &a1
            id: s_QpXPXJMpCLTEg2RMax7Jhm
            source_type: api_record
            title: 中国历代人物传记资料库：王荃（CBDB 56864）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56864&o=json
            external_identifier: CBDB:56864
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AYzSUEm9VaGAuJeoZM3LeC
        subject_person_id: p_2DHaT5tmj8HFh5AxwN17gs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1712年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4KxuAcnt3FrMH7rKAmQBat
          claim_id: c_AYzSUEm9VaGAuJeoZM3LeC
          source_id: s_QpXPXJMpCLTEg2RMax7Jhm
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
        id: c_pHc1FvDqB7XfkceoGzJnfV
        subject_person_id: p_2DHaT5tmj8HFh5AxwN17gs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1762年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SBHiLvppXJrxJERE9ttTf8
          claim_id: c_pHc1FvDqB7XfkceoGzJnfV
          source_id: s_QpXPXJMpCLTEg2RMax7Jhm
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
        id: c_hTQ3TaPhLd3B6KtENFgzz8
        subject_person_id: p_2DHaT5tmj8HFh5AxwN17gs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荃（1712年—1762年），清人物。籍贯崑山，入仕恩科孝廉。（中国历代人物传记资料库 CBDB 56864）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GQHhWYUoP1tiDJx4Lk00_n
          claim_id: c_hTQ3TaPhLd3B6KtENFgzz8
          source_id: s_QpXPXJMpCLTEg2RMax7Jhm
          stance: supports
          locator: CBDB:56864
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

# 王荃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王荃 | accepted |
| birth.date | 1712年 | accepted |
| death.date | 1762年 | accepted |
| bio.summary | 王荃（1712年—1762年），清人物。籍贯崑山，入仕恩科孝廉。（中国历代人物传记资料库 CBDB 56864） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王荃（CBDB 56864）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56864&o=json)

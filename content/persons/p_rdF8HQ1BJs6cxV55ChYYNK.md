---
schema: wang-person/v1
id: p_rdF8HQ1BJs6cxV55ChYYNK
status: active
merged_into: null
display_name: 王相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BRe4K8xjLepD9iRC47CHcq
        subject_person_id: p_rdF8HQ1BJs6cxV55ChYYNK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P2CcFx6W1JXpdZDsLzRxpu
          claim_id: c_BRe4K8xjLepD9iRC47CHcq
          source_id: s_n8K6urBGg1MB7hchtwH3wo
          stance: supports
          locator: CBDB:71127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71127）
          source: &a1
            id: s_n8K6urBGg1MB7hchtwH3wo
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 71127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71127&o=json
            external_identifier: CBDB:71127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9bH23FdK2vKRDd57f871M4
        subject_person_id: p_rdF8HQ1BJs6cxV55ChYYNK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1789年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z5niLvc2FFNhAKVyKrWvL3
          claim_id: c_9bH23FdK2vKRDd57f871M4
          source_id: s_n8K6urBGg1MB7hchtwH3wo
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
        id: c_rQPuBGtixFH2eUAHG9VsMR
        subject_person_id: p_rdF8HQ1BJs6cxV55ChYYNK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YqCXpqCXxUGD4rhmRPmNj5
          claim_id: c_rQPuBGtixFH2eUAHG9VsMR
          source_id: s_n8K6urBGg1MB7hchtwH3wo
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
        id: c_zZkwspwmREDxFTkbNvNHDV
        subject_person_id: p_rdF8HQ1BJs6cxV55ChYYNK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相（1789年—1852年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 71127）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j6DtrXsqw6Exf3-honuP5I
          claim_id: c_zZkwspwmREDxFTkbNvNHDV
          source_id: s_n8K6urBGg1MB7hchtwH3wo
          stance: supports
          locator: CBDB:71127
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

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| birth.date | 1789年 | accepted |
| death.date | 1852年 | accepted |
| bio.summary | 王相（1789年—1852年），清人物。籍贯秀水。（中国历代人物传记资料库 CBDB 71127） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 71127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71127&o=json)

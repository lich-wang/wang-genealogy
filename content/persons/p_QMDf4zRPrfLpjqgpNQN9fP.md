---
schema: wang-person/v1
id: p_QMDf4zRPrfLpjqgpNQN9fP
status: active
merged_into: null
display_name: 王鰲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2yD1oLcjJR8sTUdESej8Pr
        subject_person_id: p_QMDf4zRPrfLpjqgpNQN9fP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鰲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fama5zQMMBp5h1fZCAAgNQ
          claim_id: c_2yD1oLcjJR8sTUdESej8Pr
          source_id: s_3mMS7Ya9SKBDP1SEXiRwvZ
          stance: supports
          locator: CBDB:71296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71296）
          source: &a1
            id: s_3mMS7Ya9SKBDP1SEXiRwvZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鰲（CBDB 71296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71296&o=json
            external_identifier: CBDB:71296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jhcf1V8HpwLWf3iQASHajN
        subject_person_id: p_QMDf4zRPrfLpjqgpNQN9fP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1683年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yBxUAV6z5kAuNSwhRNE778
          claim_id: c_jhcf1V8HpwLWf3iQASHajN
          source_id: s_3mMS7Ya9SKBDP1SEXiRwvZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K9tuUze1MrTyjfuVKDrCKV
        subject_person_id: p_QMDf4zRPrfLpjqgpNQN9fP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鰲（生于1683年），清人物。籍贯金谿。（中国历代人物传记资料库 CBDB 71296）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X6yAs3WOqQGYlIgdLhyZeT
          claim_id: c_K9tuUze1MrTyjfuVKDrCKV
          source_id: s_3mMS7Ya9SKBDP1SEXiRwvZ
          stance: supports
          locator: CBDB:71296
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

# 王鰲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鰲 | accepted |
| birth.date | 1683年 | accepted |
| bio.summary | 王鰲（生于1683年），清人物。籍贯金谿。（中国历代人物传记资料库 CBDB 71296） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鰲（CBDB 71296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71296&o=json)

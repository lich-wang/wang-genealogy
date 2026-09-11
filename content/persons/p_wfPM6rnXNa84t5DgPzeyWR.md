---
schema: wang-person/v1
id: p_wfPM6rnXNa84t5DgPzeyWR
status: active
merged_into: null
display_name: 王應龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PFd5ZgjbUKJ3Msi9nqFPPE
        subject_person_id: p_wfPM6rnXNa84t5DgPzeyWR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Q9NoGqq2mU796jgd5FugJ
          claim_id: c_PFd5ZgjbUKJ3Msi9nqFPPE
          source_id: s_xGiX1gRoAgGW1dwmwvm45j
          stance: supports
          locator: CBDB:338298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338298）
          source: &a1
            id: s_xGiX1gRoAgGW1dwmwvm45j
            source_type: api_record
            title: 中国历代人物传记资料库：王應龍（CBDB 338298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338298&o=json
            external_identifier: CBDB:338298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sUipPN4UNDAiqLKrEhjLkG
        subject_person_id: p_wfPM6rnXNa84t5DgPzeyWR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1646年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G5HAMJYsHrqPQsF3k1ub2B
          claim_id: c_sUipPN4UNDAiqLKrEhjLkG
          source_id: s_xGiX1gRoAgGW1dwmwvm45j
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
        id: c_EQ4B79xyZpTGdCu7uLcS8o
        subject_person_id: p_wfPM6rnXNa84t5DgPzeyWR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1712年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B2UABSX4xBpySSvUuaAbbt
          claim_id: c_EQ4B79xyZpTGdCu7uLcS8o
          source_id: s_xGiX1gRoAgGW1dwmwvm45j
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
        id: c_MQpsH5xN7LhFKUpm2McdNT
        subject_person_id: p_wfPM6rnXNa84t5DgPzeyWR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應龍（1646年—1712年），史料所见人物。本项目依据《中国历代人物传记资料库：王應龍（CBDB 338298）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iffgLkI7B6vUAML7ifiWsD
          claim_id: c_MQpsH5xN7LhFKUpm2McdNT
          source_id: s_xGiX1gRoAgGW1dwmwvm45j
          stance: supports
          locator: CBDB:338298
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王應龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應龍 | accepted |
| birth.date | 1646年 | accepted |
| death.date | 1712年 | accepted |
| bio.summary | 王應龍（1646年—1712年），史料所见人物。本项目依据《中国历代人物传记资料库：王應龍（CBDB 338298）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應龍（CBDB 338298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338298&o=json)

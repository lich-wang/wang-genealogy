---
schema: wang-person/v1
id: p_NwjJovgnmEU2QXKCPCrCSj
status: active
merged_into: null
display_name: 王德鍾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mRtDcu8qEf37C8X9iA96Qv
        subject_person_id: p_NwjJovgnmEU2QXKCPCrCSj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德鍾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VdDuHeJKS3gb1coyu62Nw6
          claim_id: c_mRtDcu8qEf37C8X9iA96Qv
          source_id: s_Eq49y85xFERSRxYQSmDY8v
          stance: supports
          locator: CBDB:72189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72189）
          source: &a1
            id: s_Eq49y85xFERSRxYQSmDY8v
            source_type: api_record
            title: 中国历代人物传记资料库：王德鍾（CBDB 72189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72189&o=json
            external_identifier: CBDB:72189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4UhVHHnLVgN32ze2Q896FW
        subject_person_id: p_NwjJovgnmEU2QXKCPCrCSj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1897年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UhMLy5mHzY2eo6YStkoWtG
          claim_id: c_4UhVHHnLVgN32ze2Q896FW
          source_id: s_Eq49y85xFERSRxYQSmDY8v
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
        id: c_8Grbf9CU1m8KGanequkGk7
        subject_person_id: p_NwjJovgnmEU2QXKCPCrCSj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1927年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H6Rb4QK5mL9jdGjgp9C99q
          claim_id: c_8Grbf9CU1m8KGanequkGk7
          source_id: s_Eq49y85xFERSRxYQSmDY8v
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
        id: c_G7LCg8Wt87rh4phQMURHJb
        subject_person_id: p_NwjJovgnmEU2QXKCPCrCSj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w24GjGbpEBE7B3DPMqBa1Y
          claim_id: c_G7LCg8Wt87rh4phQMURHJb
          source_id: s_Eq49y85xFERSRxYQSmDY8v
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

# 王德鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德鍾 | accepted |
| birth.date | 1897年 | accepted |
| death.date | 1927年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德鍾（CBDB 72189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72189&o=json)

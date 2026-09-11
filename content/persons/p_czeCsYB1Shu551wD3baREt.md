---
schema: wang-person/v1
id: p_czeCsYB1Shu551wD3baREt
status: active
merged_into: null
display_name: 王景彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sxxrEY5D4YojQHQN7jJFnL
        subject_person_id: p_czeCsYB1Shu551wD3baREt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bvRCQdGnaUQZB2sDBRx17T
          claim_id: c_sxxrEY5D4YojQHQN7jJFnL
          source_id: s_jyu3YGJi4rpLNED9782YAi
          stance: supports
          locator: CBDB:72077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72077）
          source: &a1
            id: s_jyu3YGJi4rpLNED9782YAi
            source_type: api_record
            title: 中国历代人物传记资料库：王景彝（CBDB 72077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72077&o=json
            external_identifier: CBDB:72077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xPP7R2GiDcXfH3Kcx1fo7i
        subject_person_id: p_czeCsYB1Shu551wD3baREt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1815年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sic1kGoj13sEFjDstsy33r
          claim_id: c_xPP7R2GiDcXfH3Kcx1fo7i
          source_id: s_jyu3YGJi4rpLNED9782YAi
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
        id: c_BEpfcEdJjCZgttW4zMx8dY
        subject_person_id: p_czeCsYB1Shu551wD3baREt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景彝（生于1815年），清人物。籍贯江夏。（中国历代人物传记资料库 CBDB 72077）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hwy81YUFCc_oZDd16BXBYq
          claim_id: c_BEpfcEdJjCZgttW4zMx8dY
          source_id: s_jyu3YGJi4rpLNED9782YAi
          stance: supports
          locator: CBDB:72077
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

# 王景彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景彝 | accepted |
| birth.date | 1815年 | accepted |
| bio.summary | 王景彝（生于1815年），清人物。籍贯江夏。（中国历代人物传记资料库 CBDB 72077） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景彝（CBDB 72077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72077&o=json)

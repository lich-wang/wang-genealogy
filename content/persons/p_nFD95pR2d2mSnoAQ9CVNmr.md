---
schema: wang-person/v1
id: p_nFD95pR2d2mSnoAQ9CVNmr
status: active
merged_into: null
display_name: 王驥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DkiSD57N7UJxfEnQpozuPs
        subject_person_id: p_nFD95pR2d2mSnoAQ9CVNmr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A3q64a7DJySBD4sVgLWFAE
          claim_id: c_DkiSD57N7UJxfEnQpozuPs
          source_id: s_RTisT3LAgWf1pd2uUXg8QP
          stance: supports
          locator: CBDB:67399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67399）
          source: &a1
            id: s_RTisT3LAgWf1pd2uUXg8QP
            source_type: api_record
            title: 中国历代人物传记资料库：王驥（CBDB 67399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67399&o=json
            external_identifier: CBDB:67399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4eAYqMJFvuHfcvCAwA3jVG
        subject_person_id: p_nFD95pR2d2mSnoAQ9CVNmr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1378年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_47R9Enp5zB1L1YnNr1A2L9
          claim_id: c_4eAYqMJFvuHfcvCAwA3jVG
          source_id: s_RTisT3LAgWf1pd2uUXg8QP
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
        id: c_Ufa7Y7ZQED3zHLzfP3VAn6
        subject_person_id: p_nFD95pR2d2mSnoAQ9CVNmr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ro9NcGGoq6f65jTEwJhF7N
          claim_id: c_Ufa7Y7ZQED3zHLzfP3VAn6
          source_id: s_RTisT3LAgWf1pd2uUXg8QP
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
        id: c_mJhAPqMCnYJfLQhZm5gi6u
        subject_person_id: p_nFD95pR2d2mSnoAQ9CVNmr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥（1378年—1460年），明人物。明清進士進士，籍贯束鹿，身份为精於騎射，入仕進士。（中国历代人物传记资料库 CBDB 67399）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bFluOcJoDFuQwf9kGVLQkn
          claim_id: c_mJhAPqMCnYJfLQhZm5gi6u
          source_id: s_RTisT3LAgWf1pd2uUXg8QP
          stance: supports
          locator: CBDB:67399
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

# 王驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王驥 | accepted |
| birth.date | 1378年 | accepted |
| death.date | 1460年 | accepted |
| bio.summary | 王驥（1378年—1460年），明人物。明清進士進士，籍贯束鹿，身份为精於騎射，入仕進士。（中国历代人物传记资料库 CBDB 67399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王驥（CBDB 67399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67399&o=json)

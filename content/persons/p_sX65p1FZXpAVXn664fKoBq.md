---
schema: wang-person/v1
id: p_sX65p1FZXpAVXn664fKoBq
status: active
merged_into: null
display_name: 王壽昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2PeZCJM2J5Y8Dk7NQ5dC1a
        subject_person_id: p_sX65p1FZXpAVXn664fKoBq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8UZ2G4qbCrfAUyvd4xQq6t
          claim_id: c_2PeZCJM2J5Y8Dk7NQ5dC1a
          source_id: s_TMA8UZxPqaktj5pXt4e4c6
          stance: supports
          locator: CBDB:71644
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71644）
          source: &a1
            id: s_TMA8UZxPqaktj5pXt4e4c6
            source_type: api_record
            title: 中国历代人物传记资料库：王壽昌（CBDB 71644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71644&o=json
            external_identifier: CBDB:71644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ATJqpqfNxpemXuchCbHCcG
        subject_person_id: p_sX65p1FZXpAVXn664fKoBq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L89f5SQc6KayA2WvwWeC6D
          claim_id: c_ATJqpqfNxpemXuchCbHCcG
          source_id: s_TMA8UZxPqaktj5pXt4e4c6
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
        id: c_S31mPmfJHBeenqsE41Ec7b
        subject_person_id: p_sX65p1FZXpAVXn664fKoBq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1925年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7QDr2Rs7tfzPpppu241V1Q
          claim_id: c_S31mPmfJHBeenqsE41Ec7b
          source_id: s_TMA8UZxPqaktj5pXt4e4c6
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
        id: c_w2XVbNvyjGUTLNcRE6Zr37
        subject_person_id: p_sX65p1FZXpAVXn664fKoBq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王壽昌（1863年—1925年），中華民國人物。籍贯閩縣。（中国历代人物传记资料库 CBDB 71644）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Ys65F1Owt-L3jJ59uGqo0
          claim_id: c_w2XVbNvyjGUTLNcRE6Zr37
          source_id: s_TMA8UZxPqaktj5pXt4e4c6
          stance: supports
          locator: CBDB:71644
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

# 王壽昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王壽昌 | accepted |
| birth.date | 1863年 | accepted |
| death.date | 1925年 | accepted |
| bio.summary | 王壽昌（1863年—1925年），中華民國人物。籍贯閩縣。（中国历代人物传记资料库 CBDB 71644） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王壽昌（CBDB 71644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71644&o=json)

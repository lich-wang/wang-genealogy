---
schema: wang-person/v1
id: p_QMT9AhChMMcn38M4BKKGf2
status: active
merged_into: null
display_name: 王澍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GAiRYdpDmp7uU9XqAJuWa6
        subject_person_id: p_QMT9AhChMMcn38M4BKKGf2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RxbdEhBx3nEnGGBVM43wHp
          claim_id: c_GAiRYdpDmp7uU9XqAJuWa6
          source_id: s_1NLNj1LLxA1rCwJu8E9NJH
          stance: supports
          locator: CBDB:323024
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323024）
          source: &a1
            id: s_1NLNj1LLxA1rCwJu8E9NJH
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 323024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323024&o=json
            external_identifier: CBDB:323024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QNdMCAb6Z33sASBEuM12H5
        subject_person_id: p_QMT9AhChMMcn38M4BKKGf2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍，明人物。嘉靖三十八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 323024）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_feSCF8S8DB7Jlhjp_-ZSWt
          claim_id: c_QNdMCAb6Z33sASBEuM12H5
          source_id: s_1NLNj1LLxA1rCwJu8E9NJH
          stance: supports
          locator: CBDB:323024
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

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| bio.summary | 王澍，明人物。嘉靖三十八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 323024） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澍（CBDB 323024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323024&o=json)

---
schema: wang-person/v1
id: p_rD4Hz3x9HbhZH5uEoRMQPw
status: active
merged_into: null
display_name: 王臨元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S6w5Lgj83BxcYJ8fY5LFWQ
        subject_person_id: p_rD4Hz3x9HbhZH5uEoRMQPw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dyqigBc9KR5mk4bQ7vUtVH
          claim_id: c_S6w5Lgj83BxcYJ8fY5LFWQ
          source_id: s_4782T63cCA8QF1kpvKBFup
          stance: supports
          locator: CBDB:123586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123586）
          source: &a1
            id: s_4782T63cCA8QF1kpvKBFup
            source_type: api_record
            title: 中国历代人物传记资料库：王臨元（CBDB 123586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123586&o=json
            external_identifier: CBDB:123586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_UjNU2hLkY458iVAGTxTs4j
        subject_person_id: p_rD4Hz3x9HbhZH5uEoRMQPw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1674年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wZ2SbtLHrbr3KwKio8KHBE
          claim_id: c_UjNU2hLkY458iVAGTxTs4j
          source_id: s_4782T63cCA8QF1kpvKBFup
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
        id: c_co9KNXLZmKoB5MjnTULKD7
        subject_person_id: p_rD4Hz3x9HbhZH5uEoRMQPw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨元（卒于1674年），明人物。籍贯聊城，入仕進士，曾任知縣、僉事。（中国历代人物传记资料库 CBDB 123586）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_krRErTNvZIOPfUZ2Fx-0fI
          claim_id: c_co9KNXLZmKoB5MjnTULKD7
          source_id: s_4782T63cCA8QF1kpvKBFup
          stance: supports
          locator: CBDB:123586
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

# 王臨元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臨元 | accepted |
| death.date | 1674年 | accepted |
| bio.summary | 王臨元（卒于1674年），明人物。籍贯聊城，入仕進士，曾任知縣、僉事。（中国历代人物传记资料库 CBDB 123586） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臨元（CBDB 123586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123586&o=json)

---
schema: wang-person/v1
id: p_DrREsodMXFDmdLaQeKfWTA
status: active
merged_into: null
display_name: 王正懋
cbdb_id: 288240
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nXMdNpvoT8VrJw57RJsg6V
        subject_person_id: p_DrREsodMXFDmdLaQeKfWTA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正懋，明人物。嘉靖八年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 288240）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Y1HE7hGKXHpFyg6x2JKaIs
          claim_id: c_nXMdNpvoT8VrJw57RJsg6V
          source_id: s_PKExdd4c3tFH4bvU6vr544
          stance: supports
          locator: CBDB:288240
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PKExdd4c3tFH4bvU6vr544
            source_type: api_record
            title: 中国历代人物传记资料库：王正懋（CBDB 288240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288240&o=json
            external_identifier: CBDB:288240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9sC7n68mRPrjHw2tgTZZY8
        subject_person_id: p_DrREsodMXFDmdLaQeKfWTA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Qc2J2WiVuSQQWpwtFPy9YM
          claim_id: c_9sC7n68mRPrjHw2tgTZZY8
          source_id: s_PKExdd4c3tFH4bvU6vr544
          stance: supports
          locator: CBDB:288240
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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

# 王正懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王正懋，明人物。嘉靖八年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 288240） | accepted |
| name.primary | 王正懋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正懋（CBDB 288240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288240&o=json)

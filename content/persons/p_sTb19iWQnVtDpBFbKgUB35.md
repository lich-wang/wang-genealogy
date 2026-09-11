---
schema: wang-person/v1
id: p_sTb19iWQnVtDpBFbKgUB35
status: active
merged_into: null
display_name: 王澤澍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EB8EN8abDiV28nBgYQpNN8
        subject_person_id: p_sTb19iWQnVtDpBFbKgUB35
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NEZiY3ewYQ2Feuris8Rw1j
          claim_id: c_EB8EN8abDiV28nBgYQpNN8
          source_id: s_F6ZJdtdToKHe7qBpiqjkGN
          stance: supports
          locator: CBDB:639235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639235）
          source: &a1
            id: s_F6ZJdtdToKHe7qBpiqjkGN
            source_type: api_record
            title: 中国历代人物传记资料库：王澤澍（CBDB 639235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639235&o=json
            external_identifier: CBDB:639235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lp95K1cC8XtWK9hkTZ6AUT
        subject_person_id: p_sTb19iWQnVtDpBFbKgUB35
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澤澍，清人物。籍贯鳳陽，曾任訓導。（中国历代人物传记资料库 CBDB 639235）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NTQv86gqPVz70g-pPchuIo
          claim_id: c_Lp95K1cC8XtWK9hkTZ6AUT
          source_id: s_F6ZJdtdToKHe7qBpiqjkGN
          stance: supports
          locator: CBDB:639235
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

# 王澤澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澤澍 | accepted |
| bio.summary | 王澤澍，清人物。籍贯鳳陽，曾任訓導。（中国历代人物传记资料库 CBDB 639235） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澤澍（CBDB 639235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639235&o=json)

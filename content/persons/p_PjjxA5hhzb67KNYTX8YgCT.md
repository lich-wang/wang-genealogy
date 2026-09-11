---
schema: wang-person/v1
id: p_PjjxA5hhzb67KNYTX8YgCT
status: active
merged_into: null
display_name: 王礪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JmeRv4Qhn8RUaPP36oSqMp
        subject_person_id: p_PjjxA5hhzb67KNYTX8YgCT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王礪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uyz7LLPccEjo5QwKA75r1c
          claim_id: c_JmeRv4Qhn8RUaPP36oSqMp
          source_id: s_yBEcnnztneQ9y5wzxhznwb
          stance: supports
          locator: CBDB:639559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639559）
          source: &a1
            id: s_yBEcnnztneQ9y5wzxhznwb
            source_type: api_record
            title: 中国历代人物传记资料库：王礪（CBDB 639559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639559&o=json
            external_identifier: CBDB:639559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jXmWcu4uHRY7abxb7Wvpap
        subject_person_id: p_PjjxA5hhzb67KNYTX8YgCT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王礪，清人物。籍贯歸德土司，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639559）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UsXPRn9VOwMAgW87fr--g3
          claim_id: c_jXmWcu4uHRY7abxb7Wvpap
          source_id: s_yBEcnnztneQ9y5wzxhznwb
          stance: supports
          locator: CBDB:639559
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

# 王礪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王礪 | accepted |
| bio.summary | 王礪，清人物。籍贯歸德土司，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639559） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王礪（CBDB 639559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639559&o=json)

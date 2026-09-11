---
schema: wang-person/v1
id: p_EGY1D2uAZY6QVkMzjpLAwf
status: active
merged_into: null
display_name: 王思孝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jK4qKn5z9RE58b2XUak4WW
        subject_person_id: p_EGY1D2uAZY6QVkMzjpLAwf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思孝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jtt32dptQb6EGPAQVT1ypo
          claim_id: c_jK4qKn5z9RE58b2XUak4WW
          source_id: s_yXgRkcBaaqWEQXcTzfVZUi
          stance: supports
          locator: CBDB:637797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637797）
          source: &a1
            id: s_yXgRkcBaaqWEQXcTzfVZUi
            source_type: api_record
            title: 中国历代人物传记资料库：王思孝（CBDB 637797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637797&o=json
            external_identifier: CBDB:637797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T3WCfP1pjhdE63H2zddd8c
        subject_person_id: p_EGY1D2uAZY6QVkMzjpLAwf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思孝，清人物。籍贯金山，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_69fqWbrZAgyzWyQpNiSin_
          claim_id: c_T3WCfP1pjhdE63H2zddd8c
          source_id: s_yXgRkcBaaqWEQXcTzfVZUi
          stance: supports
          locator: CBDB:637797
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

# 王思孝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思孝 | accepted |
| bio.summary | 王思孝，清人物。籍贯金山，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637797） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思孝（CBDB 637797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637797&o=json)

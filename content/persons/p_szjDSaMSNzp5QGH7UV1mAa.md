---
schema: wang-person/v1
id: p_szjDSaMSNzp5QGH7UV1mAa
status: active
merged_into: null
display_name: 王用楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bmTvhVieD72f3h81d5ESQR
        subject_person_id: p_szjDSaMSNzp5QGH7UV1mAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DbM1hir7ajFCsZq1aceH3N
          claim_id: c_bmTvhVieD72f3h81d5ESQR
          source_id: s_JKQM7yMG1fsvovy5usr1n7
          stance: supports
          locator: CBDB:639470
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639470）
          source: &a1
            id: s_JKQM7yMG1fsvovy5usr1n7
            source_type: api_record
            title: 中国历代人物传记资料库：王用楨（CBDB 639470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639470&o=json
            external_identifier: CBDB:639470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QAWqiZiaNDam27td8tqNPw
        subject_person_id: p_szjDSaMSNzp5QGH7UV1mAa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王用楨，清人物。籍贯成都，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639470）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wqZI29X1p0KgluAvwZhwWS
          claim_id: c_QAWqiZiaNDam27td8tqNPw
          source_id: s_JKQM7yMG1fsvovy5usr1n7
          stance: supports
          locator: CBDB:639470
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

# 王用楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用楨 | accepted |
| bio.summary | 王用楨，清人物。籍贯成都，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639470） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用楨（CBDB 639470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639470&o=json)

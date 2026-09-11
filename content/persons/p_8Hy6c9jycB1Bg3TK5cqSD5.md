---
schema: wang-person/v1
id: p_8Hy6c9jycB1Bg3TK5cqSD5
status: active
merged_into: null
display_name: 王宗偐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fzrFeErau5VTGCM2JjA129
        subject_person_id: p_8Hy6c9jycB1Bg3TK5cqSD5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗偐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1LgMYLv57kpXuhVLDj6Lj
          claim_id: c_fzrFeErau5VTGCM2JjA129
          source_id: s_U5oWQe1QUL3iGL3xBKPP3v
          stance: supports
          locator: CBDB:637090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637090）
          source: &a1
            id: s_U5oWQe1QUL3iGL3xBKPP3v
            source_type: api_record
            title: 中国历代人物传记资料库：王宗偐（CBDB 637090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637090&o=json
            external_identifier: CBDB:637090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pkurabntWZQPSxjZR2X2F7
        subject_person_id: p_8Hy6c9jycB1Bg3TK5cqSD5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗偐，清人物。籍贯永春直隸州直轄地方，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637090）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2rnryonvODYH4ojEIipcVr
          claim_id: c_pkurabntWZQPSxjZR2X2F7
          source_id: s_U5oWQe1QUL3iGL3xBKPP3v
          stance: supports
          locator: CBDB:637090
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

# 王宗偐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗偐 | accepted |
| bio.summary | 王宗偐，清人物。籍贯永春直隸州直轄地方，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 637090） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗偐（CBDB 637090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637090&o=json)

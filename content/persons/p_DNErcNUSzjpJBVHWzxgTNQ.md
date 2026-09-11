---
schema: wang-person/v1
id: p_DNErcNUSzjpJBVHWzxgTNQ
status: active
merged_into: null
display_name: 王源怡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6KpJ7w7uypX3rwR5SWyMZE
        subject_person_id: p_DNErcNUSzjpJBVHWzxgTNQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v4iYQsBT3QpJaAGAzbWFJ7
          claim_id: c_6KpJ7w7uypX3rwR5SWyMZE
          source_id: s_AaSvSH8RvX97oYDXtVHzZ1
          stance: supports
          locator: CBDB:639184
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639184）
          source: &a1
            id: s_AaSvSH8RvX97oYDXtVHzZ1
            source_type: api_record
            title: 中国历代人物传记资料库：王源怡（CBDB 639184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639184&o=json
            external_identifier: CBDB:639184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H7jNYMeS6DPkkSCgdxbhkS
        subject_person_id: p_DNErcNUSzjpJBVHWzxgTNQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王源怡，清人物。籍贯容城，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 639184）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ymeNdvZACY396EbQzLAxPY
          claim_id: c_H7jNYMeS6DPkkSCgdxbhkS
          source_id: s_AaSvSH8RvX97oYDXtVHzZ1
          stance: supports
          locator: CBDB:639184
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

# 王源怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源怡 | accepted |
| bio.summary | 王源怡，清人物。籍贯容城，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 639184） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源怡（CBDB 639184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639184&o=json)

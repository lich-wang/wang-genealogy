---
schema: wang-person/v1
id: p_84L9wg91TRmQnkT63nPcbq
status: active
merged_into: null
display_name: 王士楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pxeHiD9ApQmXf2FErNF3KF
        subject_person_id: p_84L9wg91TRmQnkT63nPcbq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ZpVQp8KrTH2hqQ2JLNn9T
          claim_id: c_pxeHiD9ApQmXf2FErNF3KF
          source_id: s_c3isKZZBRuPR5eqXgTsBta
          stance: supports
          locator: CBDB:342936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342936）
          source: &a1
            id: s_c3isKZZBRuPR5eqXgTsBta
            source_type: api_record
            title: 中国历代人物传记资料库：王士楨（CBDB 342936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342936&o=json
            external_identifier: CBDB:342936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.134Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UVKpAYFGP2oXVoe4cTqNYz
        subject_person_id: p_84L9wg91TRmQnkT63nPcbq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士楨，明人物。明清進士進士，籍贯泗水，入仕進士。（中国历代人物传记资料库 CBDB 342936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p5LAYIWHfO3ay1t-P_7gBl
          claim_id: c_UVKpAYFGP2oXVoe4cTqNYz
          source_id: s_c3isKZZBRuPR5eqXgTsBta
          stance: supports
          locator: CBDB:342936
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

# 王士楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士楨 | accepted |
| bio.summary | 王士楨，明人物。明清進士進士，籍贯泗水，入仕進士。（中国历代人物传记资料库 CBDB 342936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士楨（CBDB 342936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342936&o=json)

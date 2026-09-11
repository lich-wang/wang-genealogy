---
schema: wang-person/v1
id: p_6r5h5xbo56CZTEfuAJvcgr
status: active
merged_into: null
display_name: 王世隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNbN3m2qd6mmC4XY5B12sB
        subject_person_id: p_6r5h5xbo56CZTEfuAJvcgr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YzPXw4EHP9LDeGtFs8P86g
          claim_id: c_kNbN3m2qd6mmC4XY5B12sB
          source_id: s_GNky93xBTRSq5qFaMhsENE
          stance: supports
          locator: CBDB:635725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635725）
          source: &a1
            id: s_GNky93xBTRSq5qFaMhsENE
            source_type: api_record
            title: 中国历代人物传记资料库：王世隆（CBDB 635725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635725&o=json
            external_identifier: CBDB:635725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NgwM4RPYFbXzt5R7pq33Ds
        subject_person_id: p_6r5h5xbo56CZTEfuAJvcgr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世隆，清人物。籍贯觀城，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635725）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u38D9PzZxFo4sf5siCDo9i
          claim_id: c_NgwM4RPYFbXzt5R7pq33Ds
          source_id: s_GNky93xBTRSq5qFaMhsENE
          stance: supports
          locator: CBDB:635725
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

# 王世隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世隆 | accepted |
| bio.summary | 王世隆，清人物。籍贯觀城，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 635725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世隆（CBDB 635725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635725&o=json)

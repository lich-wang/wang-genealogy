---
schema: wang-person/v1
id: p_Ci7kxZMu5TSv8PzAoAg41q
status: active
merged_into: null
display_name: 王思訓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NpqtPigPjBYK3H3iUsLJRf
        subject_person_id: p_Ci7kxZMu5TSv8PzAoAg41q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ieafUkMLZHZURq2q7jdM1L
          claim_id: c_NpqtPigPjBYK3H3iUsLJRf
          source_id: s_gjZcdRtLii1gAUBHNiJZYq
          stance: supports
          locator: CBDB:343455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343455）
          source: &a1
            id: s_gjZcdRtLii1gAUBHNiJZYq
            source_type: api_record
            title: 中国历代人物传记资料库：王思訓（CBDB 343455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343455&o=json
            external_identifier: CBDB:343455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wvze7S862z219mJANDf27k
        subject_person_id: p_Ci7kxZMu5TSv8PzAoAg41q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思訓，清人物。明清進士進士，籍贯昆明，入仕進士，曾任編修、檢討、同考官。（中国历代人物传记资料库 CBDB 343455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V38RVKqAyKJ7tDSeF4MEye
          claim_id: c_Wvze7S862z219mJANDf27k
          source_id: s_gjZcdRtLii1gAUBHNiJZYq
          stance: supports
          locator: CBDB:343455
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

# 王思訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思訓 | accepted |
| bio.summary | 王思訓，清人物。明清進士進士，籍贯昆明，入仕進士，曾任編修、檢討、同考官。（中国历代人物传记资料库 CBDB 343455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思訓（CBDB 343455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343455&o=json)

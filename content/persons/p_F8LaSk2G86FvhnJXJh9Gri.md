---
schema: wang-person/v1
id: p_F8LaSk2G86FvhnJXJh9Gri
status: active
merged_into: null
display_name: 王濬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yHAMyQpiiMoyUmJ5MZtntA
        subject_person_id: p_F8LaSk2G86FvhnJXJh9Gri
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RcyRWVqVKbXUK9CtCz2sUp
          claim_id: c_yHAMyQpiiMoyUmJ5MZtntA
          source_id: s_ixaYr7F2N4HsqozJz4wa9U
          stance: supports
          locator: CBDB:342646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342646）
          source: &a1
            id: s_ixaYr7F2N4HsqozJz4wa9U
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 342646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342646&o=json
            external_identifier: CBDB:342646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zAKtwSZkmJfAhRLfwVeb8X
        subject_person_id: p_F8LaSk2G86FvhnJXJh9Gri
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濬，清人物。明清進士進士，籍贯猗氏，入仕進士。（中国历代人物传记资料库 CBDB 342646）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CNp1dCLYDnfZHmNnT8A9e6
          claim_id: c_zAKtwSZkmJfAhRLfwVeb8X
          source_id: s_ixaYr7F2N4HsqozJz4wa9U
          stance: supports
          locator: CBDB:342646
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

# 王濬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濬 | accepted |
| bio.summary | 王濬，清人物。明清進士進士，籍贯猗氏，入仕進士。（中国历代人物传记资料库 CBDB 342646） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 342646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342646&o=json)

---
schema: wang-person/v1
id: p_T6VXZGKs1ApuvY4vZEJs2r
status: active
merged_into: null
display_name: 王由
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7XE7EDVQCG3hrc9Ym5QjSq
        subject_person_id: p_T6VXZGKs1ApuvY4vZEJs2r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_45JFZhNY8uFNVTRMa7jetx
          claim_id: c_7XE7EDVQCG3hrc9Ym5QjSq
          source_id: s_dFfYeyp2pH6i2ozTdzsQ5M
          stance: supports
          locator: CBDB:685178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685178）
          source: &a1
            id: s_dFfYeyp2pH6i2ozTdzsQ5M
            source_type: api_record
            title: 中国历代人物传记资料库：王由（CBDB 685178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685178&o=json
            external_identifier: CBDB:685178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bGUYM5WeokHeUCofhCNB9p
        subject_person_id: p_T6VXZGKs1ApuvY4vZEJs2r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王由，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 685178）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bxWdDLmw4I5iBw1IVHZdSt
          claim_id: c_bGUYM5WeokHeUCofhCNB9p
          source_id: s_dFfYeyp2pH6i2ozTdzsQ5M
          stance: supports
          locator: CBDB:685178
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

# 王由

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王由 | accepted |
| bio.summary | 王由，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 685178） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王由（CBDB 685178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685178&o=json)

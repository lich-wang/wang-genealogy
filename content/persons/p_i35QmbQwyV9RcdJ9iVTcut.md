---
schema: wang-person/v1
id: p_i35QmbQwyV9RcdJ9iVTcut
status: active
merged_into: null
display_name: 王湛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vJ82wKCvMBE2Rons3B6GDn
        subject_person_id: p_i35QmbQwyV9RcdJ9iVTcut
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FnnLQesmZ77U6B6TrXDB1W
          claim_id: c_vJ82wKCvMBE2Rons3B6GDn
          source_id: s_GELu7EM9mU48qeBkDqd5jD
          stance: supports
          locator: CBDB:38259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38259）
          source: &a1
            id: s_GELu7EM9mU48qeBkDqd5jD
            source_type: api_record
            title: 中国历代人物传记资料库：王湛（CBDB 38259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38259&o=json
            external_identifier: CBDB:38259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fwwNWnwwfWba2J8CxqYYaH
        subject_person_id: p_i35QmbQwyV9RcdJ9iVTcut
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湛，宋人物。籍贯商州，入仕薦舉 (保任,保舉)，曾任樞密院編修。（中国历代人物传记资料库 CBDB 38259）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qJbykkAMfvTyFfL8QFwZ4r
          claim_id: c_fwwNWnwwfWba2J8CxqYYaH
          source_id: s_GELu7EM9mU48qeBkDqd5jD
          stance: supports
          locator: CBDB:38259
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

# 王湛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湛 | accepted |
| bio.summary | 王湛，宋人物。籍贯商州，入仕薦舉 (保任,保舉)，曾任樞密院編修。（中国历代人物传记资料库 CBDB 38259） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王湛（CBDB 38259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38259&o=json)

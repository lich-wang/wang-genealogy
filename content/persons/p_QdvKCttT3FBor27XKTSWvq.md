---
schema: wang-person/v1
id: p_QdvKCttT3FBor27XKTSWvq
status: active
merged_into: null
display_name: 王羽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3vEiPgC2ytbeVsJFqA7yaN
        subject_person_id: p_QdvKCttT3FBor27XKTSWvq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4M8KcGrAC6KzJFgXixaMtk
          claim_id: c_3vEiPgC2ytbeVsJFqA7yaN
          source_id: s_wENXXYSCC4ur656K4JXdb3
          stance: supports
          locator: CBDB:283309
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283309）
          source: &a1
            id: s_wENXXYSCC4ur656K4JXdb3
            source_type: api_record
            title: 中国历代人物传记资料库：王羽（CBDB 283309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283309&o=json
            external_identifier: CBDB:283309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yEp1XRHQU6n6By1Zh6LtgP
        subject_person_id: p_QdvKCttT3FBor27XKTSWvq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 283309）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yEpKR0e7MUvZabWI6T7WKn
          claim_id: c_yEp1XRHQU6n6By1Zh6LtgP
          source_id: s_wENXXYSCC4ur656K4JXdb3
          stance: supports
          locator: CBDB:283309
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

# 王羽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羽 | accepted |
| bio.summary | 王羽，明人物。景泰二年進士，籍贯仁和。（中国历代人物传记资料库 CBDB 283309） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王羽（CBDB 283309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283309&o=json)

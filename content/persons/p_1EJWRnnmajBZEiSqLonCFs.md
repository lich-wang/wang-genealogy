---
schema: wang-person/v1
id: p_1EJWRnnmajBZEiSqLonCFs
status: active
merged_into: null
display_name: 王成麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GzSyyPb33aMj57Bi4wjdt6
        subject_person_id: p_1EJWRnnmajBZEiSqLonCFs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPRixF7HYk4LPYsXReViFf
          claim_id: c_GzSyyPb33aMj57Bi4wjdt6
          source_id: s_34Mdcq85H7SFpMgG6LPsvb
          stance: supports
          locator: CBDB:638052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638052）
          source: &a1
            id: s_34Mdcq85H7SFpMgG6LPsvb
            source_type: api_record
            title: 中国历代人物传记资料库：王成麟（CBDB 638052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638052&o=json
            external_identifier: CBDB:638052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NPybuUxfve1CrfaJB9z9mB
        subject_person_id: p_1EJWRnnmajBZEiSqLonCFs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成麟，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zu2Vd7TJ0DOsZ8Z6YPtv3D
          claim_id: c_NPybuUxfve1CrfaJB9z9mB
          source_id: s_34Mdcq85H7SFpMgG6LPsvb
          stance: supports
          locator: CBDB:638052
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

# 王成麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成麟 | accepted |
| bio.summary | 王成麟，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638052） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成麟（CBDB 638052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638052&o=json)

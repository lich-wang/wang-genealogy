---
schema: wang-person/v1
id: p_jGE6jseWpQLtJB7YU5Rxz9
status: active
merged_into: null
display_name: 王學涵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P7dqoSs1o9KEbY1buBNtFx
        subject_person_id: p_jGE6jseWpQLtJB7YU5Rxz9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學涵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZX7SMdXFaK3UKjhAFszjLQ
          claim_id: c_P7dqoSs1o9KEbY1buBNtFx
          source_id: s_D4r9Qisv7yv4oaENquxHcb
          stance: supports
          locator: CBDB:637045
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637045）
          source: &a1
            id: s_D4r9Qisv7yv4oaENquxHcb
            source_type: api_record
            title: 中国历代人物传记资料库：王學涵（CBDB 637045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637045&o=json
            external_identifier: CBDB:637045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pXpjfBqXTwUyfbtL7TKh3r
        subject_person_id: p_jGE6jseWpQLtJB7YU5Rxz9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學涵，清人物。籍贯通州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637045）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w4syadi0W6ZRW0Cf4ozjv_
          claim_id: c_pXpjfBqXTwUyfbtL7TKh3r
          source_id: s_D4r9Qisv7yv4oaENquxHcb
          stance: supports
          locator: CBDB:637045
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

# 王學涵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學涵 | accepted |
| bio.summary | 王學涵，清人物。籍贯通州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637045） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學涵（CBDB 637045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637045&o=json)

---
schema: wang-person/v1
id: p_gfoMaNeYJ8P2CMQHiU1dJK
status: active
merged_into: null
display_name: 王曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QbEsrHfuYF34FSwcCaoTyX
        subject_person_id: p_gfoMaNeYJ8P2CMQHiU1dJK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZzKAFGUZ9pBjf5JzaVt6vt
          claim_id: c_QbEsrHfuYF34FSwcCaoTyX
          source_id: s_XDe8u7suftDNSAEYixfr3W
          stance: supports
          locator: CBDB:638555
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638555）
          source: &a1
            id: s_XDe8u7suftDNSAEYixfr3W
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 638555）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638555&o=json
            external_identifier: CBDB:638555
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GBmFQ8xxCrQZULHEGyyRFj
        subject_person_id: p_gfoMaNeYJ8P2CMQHiU1dJK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jstGMMayFvgB2dCLs6pRQf
          claim_id: c_GBmFQ8xxCrQZULHEGyyRFj
          source_id: s_XDe8u7suftDNSAEYixfr3W
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曾（CBDB 638555）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638555&o=json)

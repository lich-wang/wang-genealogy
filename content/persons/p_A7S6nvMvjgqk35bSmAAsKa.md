---
schema: wang-person/v1
id: p_A7S6nvMvjgqk35bSmAAsKa
status: active
merged_into: null
display_name: 王承榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uptDucijLCsuZo9QtwPuAm
        subject_person_id: p_A7S6nvMvjgqk35bSmAAsKa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7ZvYGkGnCWX1wSPhFrs6Mt
          claim_id: c_uptDucijLCsuZo9QtwPuAm
          source_id: s_EAZMGCSdNwsKe59raJft74
          stance: supports
          locator: CBDB:526685
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526685）
          source: &a1
            id: s_EAZMGCSdNwsKe59raJft74
            source_type: api_record
            title: 中国历代人物传记资料库：王承榮（CBDB 526685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526685&o=json
            external_identifier: CBDB:526685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WxkEMtwjVwa6yQttGyhgHn
        subject_person_id: p_A7S6nvMvjgqk35bSmAAsKa
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
        - id: cs_9BAnKaU7uVqvKwyD9yokTL
          claim_id: c_WxkEMtwjVwa6yQttGyhgHn
          source_id: s_EAZMGCSdNwsKe59raJft74
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

# 王承榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承榮 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承榮（CBDB 526685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526685&o=json)

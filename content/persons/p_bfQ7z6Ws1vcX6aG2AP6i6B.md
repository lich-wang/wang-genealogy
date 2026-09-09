---
schema: wang-person/v1
id: p_bfQ7z6Ws1vcX6aG2AP6i6B
status: active
merged_into: null
display_name: 王資
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FzVQafERSXMQPgZe85NLEL
        subject_person_id: p_bfQ7z6Ws1vcX6aG2AP6i6B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王資
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PvuVaZLnDRmYZDy8fF2K7q
          claim_id: c_FzVQafERSXMQPgZe85NLEL
          source_id: s_ZjtwQ8x4VsxE57M56o4gmp
          stance: supports
          locator: CBDB:510841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510841）
          source: &a1
            id: s_ZjtwQ8x4VsxE57M56o4gmp
            source_type: api_record
            title: 中国历代人物传记资料库：王資（CBDB 510841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510841&o=json
            external_identifier: CBDB:510841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_An2aAGytEsqoau8zeZWDba
        subject_person_id: p_bfQ7z6Ws1vcX6aG2AP6i6B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ftj4DnAp346FfiihtCPvAQ
          claim_id: c_An2aAGytEsqoau8zeZWDba
          source_id: s_ZjtwQ8x4VsxE57M56o4gmp
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

# 王資

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王資 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王資（CBDB 510841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510841&o=json)

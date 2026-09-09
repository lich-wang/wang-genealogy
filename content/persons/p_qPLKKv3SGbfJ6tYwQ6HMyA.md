---
schema: wang-person/v1
id: p_qPLKKv3SGbfJ6tYwQ6HMyA
status: active
merged_into: null
display_name: 王朝棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gbdFiLz2rqUTgdQ8uhdTog
        subject_person_id: p_qPLKKv3SGbfJ6tYwQ6HMyA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fDQAU6J8k9soajp3Cvvavn
          claim_id: c_gbdFiLz2rqUTgdQ8uhdTog
          source_id: s_EH4iyC5Lsi42WJF6cmuQ1y
          stance: supports
          locator: CBDB:490376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（490376）
          source: &a1
            id: s_EH4iyC5Lsi42WJF6cmuQ1y
            source_type: api_record
            title: 中国历代人物传记资料库：王朝棟（CBDB 490376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490376&o=json
            external_identifier: CBDB:490376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.112Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zWjjyZzdqfQU63FUzZeLSX
        subject_person_id: p_qPLKKv3SGbfJ6tYwQ6HMyA
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
        - id: cs_xdRBTFwGGodAguZ1CV1rEQ
          claim_id: c_zWjjyZzdqfQU63FUzZeLSX
          source_id: s_EH4iyC5Lsi42WJF6cmuQ1y
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

# 王朝棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝棟 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝棟（CBDB 490376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=490376&o=json)

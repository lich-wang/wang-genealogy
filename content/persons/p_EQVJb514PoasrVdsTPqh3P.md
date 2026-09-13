---
schema: wang-person/v1
id: p_EQVJb514PoasrVdsTPqh3P
status: active
merged_into: null
display_name: 王羨
cbdb_id: 379921
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UY5TSunFNP9mW7vXQRgADV
        subject_person_id: p_EQVJb514PoasrVdsTPqh3P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羨，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379921）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1f4WSJeT8StK3he6xOPbhq
          claim_id: c_UY5TSunFNP9mW7vXQRgADV
          source_id: s_nLhV9JS2hikobhf5xFdi34
          stance: supports
          locator: CBDB:379921
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nLhV9JS2hikobhf5xFdi34
            source_type: api_record
            title: 中国历代人物传记资料库：王羨（CBDB 379921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379921&o=json
            external_identifier: CBDB:379921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_f2u3Vw7LQNcvZU43Mgk5Pi
        subject_person_id: p_EQVJb514PoasrVdsTPqh3P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_EoF2Xx2XWbTRwnKZR52dxy
          claim_id: c_f2u3Vw7LQNcvZU43Mgk5Pi
          source_id: s_nLhV9JS2hikobhf5xFdi34
          stance: supports
          locator: CBDB:379921
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 唐
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

# 王羨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王羨，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379921） | accepted |
| name.primary | 王羨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王羨（CBDB 379921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379921&o=json)

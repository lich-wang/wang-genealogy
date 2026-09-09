---
schema: wang-person/v1
id: p_bo8uPwkb89NTsRgp3tNfnH
status: active
merged_into: null
display_name: 王雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wkU2DipmsSYaVtioR8yY4e
        subject_person_id: p_bo8uPwkb89NTsRgp3tNfnH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HNB6XkaBKKWWTQLqhaZeHR
          claim_id: c_wkU2DipmsSYaVtioR8yY4e
          source_id: s_48XufN3D7xohjkQmNBUUH9
          stance: supports
          locator: CBDB:38357
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38357）
          source: &a1
            id: s_48XufN3D7xohjkQmNBUUH9
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 38357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38357&o=json
            external_identifier: CBDB:38357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BDk9ruHLRmzM362jgeg7sE
        subject_person_id: p_bo8uPwkb89NTsRgp3tNfnH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Ape9WgCSN8rUx2kBJP1UF
          claim_id: c_BDk9ruHLRmzM362jgeg7sE
          source_id: s_48XufN3D7xohjkQmNBUUH9
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

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲（CBDB 38357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38357&o=json)

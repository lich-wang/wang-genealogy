---
schema: wang-person/v1
id: p_MLqA9S18cPcNsWU7L8tTns
status: active
merged_into: null
display_name: 王玄同
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_47MV1HAcfsNhrGzwZcAb9z
        subject_person_id: p_MLqA9S18cPcNsWU7L8tTns
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rS5Wj2E2NP8zSsBHaZHE5K
          claim_id: c_47MV1HAcfsNhrGzwZcAb9z
          source_id: s_DBHsyTVnuwuqgjAg2xgRGP
          stance: supports
          locator: CBDB:157305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157305）
          source: &a1
            id: s_DBHsyTVnuwuqgjAg2xgRGP
            source_type: api_record
            title: 中国历代人物传记资料库：王玄同（CBDB 157305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157305&o=json
            external_identifier: CBDB:157305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.905Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Q6boHq5DjCPz54HenPYjz
        subject_person_id: p_MLqA9S18cPcNsWU7L8tTns
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uafjrR5GHq8hZDeEKTqpyq
          claim_id: c_1Q6boHq5DjCPz54HenPYjz
          source_id: s_DBHsyTVnuwuqgjAg2xgRGP
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

# 王玄同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄同 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玄同（CBDB 157305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157305&o=json)

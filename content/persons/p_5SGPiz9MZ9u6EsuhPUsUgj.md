---
schema: wang-person/v1
id: p_5SGPiz9MZ9u6EsuhPUsUgj
status: active
merged_into: null
display_name: 王伯仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fs9b3EUdVxm2BkJKm1SEoH
        subject_person_id: p_5SGPiz9MZ9u6EsuhPUsUgj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4antEJiK8VVw6HS8xmr3rr
          claim_id: c_Fs9b3EUdVxm2BkJKm1SEoH
          source_id: s_SjRhzVYfVhHEKrSdAA78ju
          stance: supports
          locator: CBDB:147018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（147018）
          source: &a1
            id: s_SjRhzVYfVhHEKrSdAA78ju
            source_type: api_record
            title: 中国历代人物传记资料库：王伯仁（CBDB 147018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147018&o=json
            external_identifier: CBDB:147018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7A5mM2YC1dR2i1Q6iDyy8A
        subject_person_id: p_5SGPiz9MZ9u6EsuhPUsUgj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RYTJwe6bZjq45Jmq4BohJ5
          claim_id: c_7A5mM2YC1dR2i1Q6iDyy8A
          source_id: s_SjRhzVYfVhHEKrSdAA78ju
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

# 王伯仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯仁 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯仁（CBDB 147018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147018&o=json)

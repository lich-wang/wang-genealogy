---
schema: wang-person/v1
id: p_NUN9V2WpcJELAKS3hvUbxx
status: active
merged_into: null
display_name: 王瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uaoPqtT1sP8kdDZDeXgdjo
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vP5C2LwVPGC94P9rWZ8K6v
          claim_id: c_uaoPqtT1sP8kdDZDeXgdjo
          source_id: s_zjyME1KpDFD2t6hpRmnWEe
          stance: supports
          locator: CBDB:279876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279876）
          source: &a1
            id: s_zjyME1KpDFD2t6hpRmnWEe
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 279876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279876&o=json
            external_identifier: CBDB:279876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mz9zkE8ePsFv8Y4xMsQzSD
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
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
        - id: cs_hTaNcKTvsyaDDCY95jX24P
          claim_id: c_mz9zkE8ePsFv8Y4xMsQzSD
          source_id: s_zjyME1KpDFD2t6hpRmnWEe
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

# 王瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞（CBDB 279876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279876&o=json)

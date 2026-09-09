---
schema: wang-person/v1
id: p_RFDB1DEdY6L7mknQKuMWye
status: active
merged_into: null
display_name: 王遴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zfr96t3RiRa9tne87gXQU4
        subject_person_id: p_RFDB1DEdY6L7mknQKuMWye
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4GDkMgycVspePhyJY5MryC
          claim_id: c_Zfr96t3RiRa9tne87gXQU4
          source_id: s_bgoGCcnQ8CPg7aDin5w5tK
          stance: supports
          locator: CBDB:640471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640471）
          source: &a1
            id: s_bgoGCcnQ8CPg7aDin5w5tK
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 640471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640471&o=json
            external_identifier: CBDB:640471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5jZH2dv5H9Dz4EEFFD5Jii
        subject_person_id: p_RFDB1DEdY6L7mknQKuMWye
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
        - id: cs_dcah593rK1wcFDHtxpjz3Z
          claim_id: c_5jZH2dv5H9Dz4EEFFD5Jii
          source_id: s_bgoGCcnQ8CPg7aDin5w5tK
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

# 王遴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遴 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遴（CBDB 640471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640471&o=json)

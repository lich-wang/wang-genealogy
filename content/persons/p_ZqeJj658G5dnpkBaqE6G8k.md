---
schema: wang-person/v1
id: p_ZqeJj658G5dnpkBaqE6G8k
status: active
merged_into: null
display_name: 王淑牙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RbaUCKrUejps65WQy9N99P
        subject_person_id: p_ZqeJj658G5dnpkBaqE6G8k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑牙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cCM4Jf1rjtNGkvXgDKRFGu
          claim_id: c_RbaUCKrUejps65WQy9N99P
          source_id: s_SJG4uHKZ8souENhArwWsZJ
          stance: supports
          locator: CBDB:703231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703231）
          source: &a1
            id: s_SJG4uHKZ8souENhArwWsZJ
            source_type: api_record
            title: 中国历代人物传记资料库：王淑牙（CBDB 703231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703231&o=json
            external_identifier: CBDB:703231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sa2YScd68CU6uXy8uGBj4P
        subject_person_id: p_ZqeJj658G5dnpkBaqE6G8k
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
        - id: cs_HhcLrTCqk7dSiN8JqLrwMr
          claim_id: c_sa2YScd68CU6uXy8uGBj4P
          source_id: s_SJG4uHKZ8souENhArwWsZJ
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

# 王淑牙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑牙 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淑牙（CBDB 703231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703231&o=json)

---
schema: wang-person/v1
id: p_tS3aqzmoihV8cYa7pNW3Dz
status: active
merged_into: null
display_name: 王徽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A1hy96V3JgYs1qnH8Zmfiw
        subject_person_id: p_tS3aqzmoihV8cYa7pNW3Dz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uAL4QMMESrGB8SLkUTB1mh
          claim_id: c_A1hy96V3JgYs1qnH8Zmfiw
          source_id: s_meqJ4R7QKUD1gAzh7qb19R
          stance: supports
          locator: CBDB:143077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143077）
          source: &a1
            id: s_meqJ4R7QKUD1gAzh7qb19R
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 143077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143077&o=json
            external_identifier: CBDB:143077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kjZKCCoax7MCHmZHwXPN2T
        subject_person_id: p_tS3aqzmoihV8cYa7pNW3Dz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 695年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HBfKarGMHijYsNvdgSNX25
          claim_id: c_kjZKCCoax7MCHmZHwXPN2T
          source_id: s_meqJ4R7QKUD1gAzh7qb19R
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cY749p4BFQwMte151hr1eA
        subject_person_id: p_tS3aqzmoihV8cYa7pNW3Dz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 754年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PGfeHAVgdgovDAprUZbQ5W
          claim_id: c_cY749p4BFQwMte151hr1eA
          source_id: s_meqJ4R7QKUD1gAzh7qb19R
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1jKsBJmZ1bNR3otXtwrQ9F
        subject_person_id: p_tS3aqzmoihV8cYa7pNW3Dz
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
        - id: cs_gAS1pUt2tGqQZNw5FMACCz
          claim_id: c_1jKsBJmZ1bNR3otXtwrQ9F
          source_id: s_meqJ4R7QKUD1gAzh7qb19R
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CvcXO2V94N64BlOON7Ruyt
        subject_person_id: p_FZChE9r8nB1so1ECYTKrhd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tS3aqzmoihV8cYa7pNW3Dz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8h5hrXkXv4eiIYoNF9qRjP
          claim_id: c_CvcXO2V94N64BlOON7Ruyt
          source_id: s_6Ae2d8ejweTRArekCwF7dy
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Baoying3：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6Ae2d8ejweTRArekCwF7dy
            source_type: api_record
            title: 中国历代人物传记资料库：王覽（CBDB 165104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165104&o=json
            external_identifier: CBDB:165104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FZChE9r8nB1so1ECYTKrhd
        status: active
        display_name: 王覽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| birth.date | 695年 | accepted |
| death.date | 754年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FZChE9r8nB1so1ECYTKrhd | 王覽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 143077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143077&o=json)
- [中国历代人物传记资料库：王覽（CBDB 165104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165104&o=json)

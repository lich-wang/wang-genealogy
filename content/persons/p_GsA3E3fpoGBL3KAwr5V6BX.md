---
schema: wang-person/v1
id: p_GsA3E3fpoGBL3KAwr5V6BX
status: active
merged_into: null
display_name: 王德玄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u1JmM5NJtNJQW27jFz8arT
        subject_person_id: p_GsA3E3fpoGBL3KAwr5V6BX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6w9ptFN8pzMqh4YgDUUnWW
          claim_id: c_u1JmM5NJtNJQW27jFz8arT
          source_id: s_VkcHAaT9EifPMtdS3BV6Gf
          stance: supports
          locator: CBDB:175975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175975）
          source: &a1
            id: s_VkcHAaT9EifPMtdS3BV6Gf
            source_type: api_record
            title: 中国历代人物传记资料库：王德玄（CBDB 175975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175975&o=json
            external_identifier: CBDB:175975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5JssAeEvr6JvF2ev1Wsff7
        subject_person_id: p_GsA3E3fpoGBL3KAwr5V6BX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 653年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxxL2AqbhLdeXcBHmR6Nvy
          claim_id: c_5JssAeEvr6JvF2ev1Wsff7
          source_id: s_VkcHAaT9EifPMtdS3BV6Gf
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
        id: c_4V3UNBAcppYUcpYo9uGpu3
        subject_person_id: p_GsA3E3fpoGBL3KAwr5V6BX
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
        - id: cs_M8STB2KhRU66WqZLUCV7zr
          claim_id: c_4V3UNBAcppYUcpYo9uGpu3
          source_id: s_VkcHAaT9EifPMtdS3BV6Gf
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
        id: c__WeHPg-dQ65PKJaTuMTbyN
        subject_person_id: p_MAVU5hCjLKU7MKmUEk81nj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GsA3E3fpoGBL3KAwr5V6BX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xsBrTxevI8LePpkzDmT9iy
          claim_id: c__WeHPg-dQ65PKJaTuMTbyN
          source_id: s_VkcHAaT9EifPMtdS3BV6Gf
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MAVU5hCjLKU7MKmUEk81nj
        status: active
        display_name: 王長諧
        merged_into_person_id: null
  children:
    - claim:
        id: c_0FiH5s0NFkgQzFXnCeCd0J
        subject_person_id: p_GsA3E3fpoGBL3KAwr5V6BX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_121ZuM6cn6h5tFBRPmBPBT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Mr4ixnHgDzoz74Mfb_Uh9
          claim_id: c_0FiH5s0NFkgQzFXnCeCd0J
          source_id: s_BoVpnTWQqtZHZYCMybbrfh
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8381：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BoVpnTWQqtZHZYCMybbrfh
            source_type: api_record
            title: 中国历代人物传记资料库：王九功（CBDB 175976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175976&o=json
            external_identifier: CBDB:175976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_121ZuM6cn6h5tFBRPmBPBT
        status: active
        display_name: 王九功
        merged_into_person_id: null
    - claim:
        id: c_6UqpttX37a--Mp8TLIuOUd
        subject_person_id: p_GsA3E3fpoGBL3KAwr5V6BX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MnLrRdX6rf9t5n4XUDABDF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m3qiT-fUxQKDigHcZXTtas
          claim_id: c_6UqpttX37a--Mp8TLIuOUd
          source_id: s_VkcHAaT9EifPMtdS3BV6Gf
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MnLrRdX6rf9t5n4XUDABDF
        status: active
        display_name: 王九言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德玄 | accepted |
| death.date | 653年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MAVU5hCjLKU7MKmUEk81nj | 王長諧 | accepted |
| children | p_121ZuM6cn6h5tFBRPmBPBT | 王九功 | accepted |
| children | p_MnLrRdX6rf9t5n4XUDABDF | 王九言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德玄（CBDB 175975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175975&o=json)
- [中国历代人物传记资料库：王九功（CBDB 175976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175976&o=json)

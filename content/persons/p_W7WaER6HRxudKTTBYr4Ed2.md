---
schema: wang-person/v1
id: p_W7WaER6HRxudKTTBYr4Ed2
status: active
merged_into: null
display_name: 王諗
cbdb_id: 170463
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zxMH6H9quA9VTY5uCq2i55
        subject_person_id: p_W7WaER6HRxudKTTBYr4Ed2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諗（卒于841年），史料所见人物。本项目依据《中国历代人物传记资料库：王諗（CBDB 170463）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_v41mEFFF6kT4bxUQtml0ZP
          claim_id: c_zxMH6H9quA9VTY5uCq2i55
          source_id: s_c22NuMKQ6NgMxcPvGHtu6Z
          stance: supports
          locator: CBDB:170463
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_c22NuMKQ6NgMxcPvGHtu6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王諗（CBDB 170463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170463&o=json
            external_identifier: CBDB:170463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uEZK9nDdNxXJGRwnd87j1d
        subject_person_id: p_W7WaER6HRxudKTTBYr4Ed2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0841-01-01
            latest: 0841-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PCAUUpVf7nTReowXhqoAXt
          claim_id: c_uEZK9nDdNxXJGRwnd87j1d
          source_id: s_c22NuMKQ6NgMxcPvGHtu6Z
          stance: supports
          locator: CBDB:170463
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 841
          source:
            id: s_c22NuMKQ6NgMxcPvGHtu6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王諗（CBDB 170463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170463&o=json
            external_identifier: CBDB:170463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4XZPnXCB4KG9m85KcKCmBf
        subject_person_id: p_W7WaER6HRxudKTTBYr4Ed2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sGhrFTRBv3fGv65Ke7iaNV
          claim_id: c_4XZPnXCB4KG9m85KcKCmBf
          source_id: s_c22NuMKQ6NgMxcPvGHtu6Z
          stance: supports
          locator: CBDB:170463
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 841
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dYXcy0GzNVWkcuIWqyMuck
        subject_person_id: p_W7WaER6HRxudKTTBYr4Ed2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bKaSSL5DQPYxJazGLdWskd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_afsX-KE-jgZnAyN_UqLdI2
          claim_id: c_dYXcy0GzNVWkcuIWqyMuck
          source_id: s_mwJD2VykhQso2nAzRLNFXE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mwJD2VykhQso2nAzRLNFXE
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 170011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170011&o=json
            external_identifier: CBDB:170011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bKaSSL5DQPYxJazGLdWskd
        status: active
        display_name: 王裕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王諗（卒于841年），史料所见人物。本项目依据《中国历代人物传记资料库：王諗（CBDB 170463）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 841年 | accepted |
| name.primary | 王諗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bKaSSL5DQPYxJazGLdWskd | 王裕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諗（CBDB 170463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170463&o=json)
- [中国历代人物传记资料库：王裕（CBDB 170011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170011&o=json)

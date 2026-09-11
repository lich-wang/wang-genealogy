---
schema: wang-person/v1
id: p_Lc5T8QMpPxQWjzxvt1ckat
status: active
merged_into: null
display_name: 王全義
cbdb_id: 170010
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G1HnADNGLbB4jdZzpDYHt5
        subject_person_id: p_Lc5T8QMpPxQWjzxvt1ckat
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全義（卒于816年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 170010 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_hXgwqvOv3a0Kxo_XvD_Wp3
          claim_id: c_G1HnADNGLbB4jdZzpDYHt5
          source_id: s_VAcWoU19fTU1Kkxu9UutbZ
          stance: supports
          locator: CBDB:170010
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_VAcWoU19fTU1Kkxu9UutbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王全義（CBDB 170010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170010&o=json
            external_identifier: CBDB:170010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_V8ya1GuDfSnKDHR4oes9w2
        subject_person_id: p_Lc5T8QMpPxQWjzxvt1ckat
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 816年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0816-01-01
            latest: 0816-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SrTD46k1f8JDhoECcpRHXe
          claim_id: c_V8ya1GuDfSnKDHR4oes9w2
          source_id: s_VAcWoU19fTU1Kkxu9UutbZ
          stance: supports
          locator: CBDB:170010
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 816
          source:
            id: s_VAcWoU19fTU1Kkxu9UutbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王全義（CBDB 170010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170010&o=json
            external_identifier: CBDB:170010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wnxHd43XN2FiXbD89yPQxC
        subject_person_id: p_Lc5T8QMpPxQWjzxvt1ckat
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wWjXDViG8sCJTAj8LufHtY
          claim_id: c_wnxHd43XN2FiXbD89yPQxC
          source_id: s_VAcWoU19fTU1Kkxu9UutbZ
          stance: supports
          locator: CBDB:170010
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 816
          source:
            id: s_VAcWoU19fTU1Kkxu9UutbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王全義（CBDB 170010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170010&o=json
            external_identifier: CBDB:170010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SHO712MIbBf2dcfOd547HE
        subject_person_id: p_QyHi5dyDpFnFpCeLbwTXMC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lc5T8QMpPxQWjzxvt1ckat
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DlaPD8A5QSS2PRJmu9junH
          claim_id: c_SHO712MIbBf2dcfOd547HE
          source_id: s_USBeG5QpVF2zrRmaD54MZR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_USBeG5QpVF2zrRmaD54MZR
            source_type: api_record
            title: 中国历代人物传记资料库：王仁俊（CBDB 170462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170462&o=json
            external_identifier: CBDB:170462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QyHi5dyDpFnFpCeLbwTXMC
        status: active
        display_name: 王仁俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王全義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王全義（卒于816年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 170010 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 816年 | accepted |
| name.primary | 王全義 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QyHi5dyDpFnFpCeLbwTXMC | 王仁俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王全義（CBDB 170010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170010&o=json)
- [中国历代人物传记资料库：王仁俊（CBDB 170462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170462&o=json)

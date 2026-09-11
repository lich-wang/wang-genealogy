---
schema: wang-person/v1
id: p_dPrDcxvzw77CiuihLH4sqV
status: active
merged_into: null
display_name: 王旡難
cbdb_id: 195783
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SCcUZ98G8ZEGtvQoXTuDdE
        subject_person_id: p_dPrDcxvzw77CiuihLH4sqV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旡難（卒于717年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 195783 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_cZ7rTmN8zhf_YMrAe70tWN
          claim_id: c_SCcUZ98G8ZEGtvQoXTuDdE
          source_id: s_zJSS57W3GZKPhueyty79JZ
          stance: supports
          locator: CBDB:195783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_zJSS57W3GZKPhueyty79JZ
            source_type: api_record
            title: 中国历代人物传记资料库：王旡難（CBDB 195783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195783&o=json
            external_identifier: CBDB:195783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gm95m6NBFpsmDaPd8b8NoN
        subject_person_id: p_dPrDcxvzw77CiuihLH4sqV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 717年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0717-01-01
            latest: 0717-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VHECo7dSnNqPFudZ1tDok4
          claim_id: c_gm95m6NBFpsmDaPd8b8NoN
          source_id: s_zJSS57W3GZKPhueyty79JZ
          stance: supports
          locator: CBDB:195783
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 717
          source:
            id: s_zJSS57W3GZKPhueyty79JZ
            source_type: api_record
            title: 中国历代人物传记资料库：王旡難（CBDB 195783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195783&o=json
            external_identifier: CBDB:195783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CrCrFiax3FoDWoBG1Br66n
        subject_person_id: p_dPrDcxvzw77CiuihLH4sqV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旡難
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VaD7QJKheiQLRm4Hz3j9yB
          claim_id: c_CrCrFiax3FoDWoBG1Br66n
          source_id: s_zJSS57W3GZKPhueyty79JZ
          stance: supports
          locator: CBDB:195783
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 717
          source:
            id: s_zJSS57W3GZKPhueyty79JZ
            source_type: api_record
            title: 中国历代人物传记资料库：王旡難（CBDB 195783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195783&o=json
            external_identifier: CBDB:195783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qqoYwhH-24UKwBnwyXwLB7
        subject_person_id: p_uEBEoGitzHAkzsm1Lhs1px
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dPrDcxvzw77CiuihLH4sqV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gt0karteSzrOIC3lpi9JNz
          claim_id: c_qqoYwhH-24UKwBnwyXwLB7
          source_id: s_jD91Kp69RJC6vQB1gq5h23
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jD91Kp69RJC6vQB1gq5h23
            source_type: api_record
            title: 中国历代人物传记资料库：王嶷（CBDB 175777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175777&o=json
            external_identifier: CBDB:175777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.119Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uEBEoGitzHAkzsm1Lhs1px
        status: active
        display_name: 王嶷
        merged_into_person_id: null
  children:
    - claim:
        id: c_jdO_cKnwNjdlrtH7ZbBlJs
        subject_person_id: p_dPrDcxvzw77CiuihLH4sqV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PyHdswNykCSv14Sj9da67K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HuEi03kC_91dFyDRU-oOSO
          claim_id: c_jdO_cKnwNjdlrtH7ZbBlJs
          source_id: s_PkizAhJC2bek2LSDMboBHt
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PkizAhJC2bek2LSDMboBHt
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 146262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146262&o=json
            external_identifier: CBDB:146262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PyHdswNykCSv14Sj9da67K
        status: active
        display_name: 王潛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王旡難

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王旡難（卒于717年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 195783 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 717年 | accepted |
| name.primary | 王旡難 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uEBEoGitzHAkzsm1Lhs1px | 王嶷 | accepted |
| children | p_PyHdswNykCSv14Sj9da67K | 王潛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旡難（CBDB 195783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195783&o=json)
- [中国历代人物传记资料库：王潛（CBDB 146262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146262&o=json)
- [中国历代人物传记资料库：王嶷（CBDB 175777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175777&o=json)

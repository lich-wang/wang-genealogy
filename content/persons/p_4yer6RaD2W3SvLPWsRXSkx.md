---
schema: wang-person/v1
id: p_4yer6RaD2W3SvLPWsRXSkx
status: active
merged_into: null
display_name: 王傳慶
cbdb_id: 193634
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9K42HFxRHtNyozQPEajRL7
        subject_person_id: p_4yer6RaD2W3SvLPWsRXSkx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳慶（卒于746年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 193634 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_EcWF8I3nrGASD6tI16sSTa
          claim_id: c_9K42HFxRHtNyozQPEajRL7
          source_id: s_ra83A6K1wazGwg8Ub9vU14
          stance: supports
          locator: CBDB:193634
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ra83A6K1wazGwg8Ub9vU14
            source_type: api_record
            title: 中国历代人物传记资料库：王傳慶（CBDB 193634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193634&o=json
            external_identifier: CBDB:193634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wZxBYTM34NXjxEHj6GG9DJ
        subject_person_id: p_4yer6RaD2W3SvLPWsRXSkx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 746年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0746-01-01
            latest: 0746-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HKJfL4KBpTXV1bJxNpUNnD
          claim_id: c_wZxBYTM34NXjxEHj6GG9DJ
          source_id: s_ra83A6K1wazGwg8Ub9vU14
          stance: supports
          locator: CBDB:193634
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 746
          source:
            id: s_ra83A6K1wazGwg8Ub9vU14
            source_type: api_record
            title: 中国历代人物传记资料库：王傳慶（CBDB 193634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193634&o=json
            external_identifier: CBDB:193634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NScyivEFFrWJ914Xn6Udnf
        subject_person_id: p_4yer6RaD2W3SvLPWsRXSkx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傳慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_29AP62gWiFRKDiaZ1bJLcm
          claim_id: c_NScyivEFFrWJ914Xn6Udnf
          source_id: s_ra83A6K1wazGwg8Ub9vU14
          stance: supports
          locator: CBDB:193634
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 746
          source:
            id: s_ra83A6K1wazGwg8Ub9vU14
            source_type: api_record
            title: 中国历代人物传记资料库：王傳慶（CBDB 193634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193634&o=json
            external_identifier: CBDB:193634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_O-xttH-3_c39KChYMC2P5Y
        subject_person_id: p_4yer6RaD2W3SvLPWsRXSkx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tZW44NfiePoNXF2LiFTkkb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4iDXijMchxVJlTGDsXFpg0
          claim_id: c_O-xttH-3_c39KChYMC2P5Y
          source_id: s_ra83A6K1wazGwg8Ub9vU14
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tZW44NfiePoNXF2LiFTkkb
        status: active
        display_name: 王如寶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傳慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王傳慶（卒于746年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 193634 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 746年 | accepted |
| name.primary | 王傳慶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tZW44NfiePoNXF2LiFTkkb | 王如寶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳慶（CBDB 193634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193634&o=json)

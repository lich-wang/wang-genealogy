---
schema: wang-person/v1
id: p_XrTWKrQQBfj5ofYAyMKk12
status: active
merged_into: null
display_name: 王垂拱
cbdb_id: 698404
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NJCG97vNfLEg38SNeWNRzD
        subject_person_id: p_XrTWKrQQBfj5ofYAyMKk12
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂拱（卒于1642年），明人物。中国历代人物传记资料库（CBDB）以人物编号 698404 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_TaOc0nUTKHGpf4XE_Dg-oj
          claim_id: c_NJCG97vNfLEg38SNeWNRzD
          source_id: s_RqBrJE4KPd4tTpXCjGL9aT
          stance: supports
          locator: CBDB:698404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_RqBrJE4KPd4tTpXCjGL9aT
            source_type: api_record
            title: 中国历代人物传记资料库：王垂拱（CBDB 698404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698404&o=json
            external_identifier: CBDB:698404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RJGSRNdcVW5VjsLEW8J6ye
        subject_person_id: p_XrTWKrQQBfj5ofYAyMKk12
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1642年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1642-01-01
            latest: 1642-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ge3D12ubDEgWzkBLmXeGn6
          claim_id: c_RJGSRNdcVW5VjsLEW8J6ye
          source_id: s_RqBrJE4KPd4tTpXCjGL9aT
          stance: supports
          locator: CBDB:698404
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 卒年 = 1642
          source:
            id: s_RqBrJE4KPd4tTpXCjGL9aT
            source_type: api_record
            title: 中国历代人物传记资料库：王垂拱（CBDB 698404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698404&o=json
            external_identifier: CBDB:698404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qpfroyreaprzyQevbH3Quj
        subject_person_id: p_XrTWKrQQBfj5ofYAyMKk12
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂拱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iBQHK9GPKhUo94pQsfLqmS
          claim_id: c_qpfroyreaprzyQevbH3Quj
          source_id: s_RqBrJE4KPd4tTpXCjGL9aT
          stance: supports
          locator: CBDB:698404
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 卒年 = 1642
          source:
            id: s_RqBrJE4KPd4tTpXCjGL9aT
            source_type: api_record
            title: 中国历代人物传记资料库：王垂拱（CBDB 698404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698404&o=json
            external_identifier: CBDB:698404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_P8MdnmLL0i1l-kW1cvN9TY
        subject_person_id: p_HEBEMbatrU5oc351aRHFA3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XrTWKrQQBfj5ofYAyMKk12
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z8gr29Iq-kuckYUIxvJMvH
          claim_id: c_P8MdnmLL0i1l-kW1cvN9TY
          source_id: s_v6Hd5gSeMGCJTHNA5viqaH
          stance: supports
          locator: 新修菏澤縣志，lgid=725096：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v6Hd5gSeMGCJTHNA5viqaH
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 698405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698405&o=json
            external_identifier: CBDB:698405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HEBEMbatrU5oc351aRHFA3
        status: active
        display_name: 王瑩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王垂拱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王垂拱（卒于1642年），明人物。中国历代人物传记资料库（CBDB）以人物编号 698404 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1642年 | accepted |
| name.primary | 王垂拱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HEBEMbatrU5oc351aRHFA3 | 王瑩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垂拱（CBDB 698404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698404&o=json)
- [中国历代人物传记资料库：王瑩（CBDB 698405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698405&o=json)

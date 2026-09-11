---
schema: wang-person/v1
id: p_MmVpUWztCQKaC484qaKxXc
status: active
merged_into: null
display_name: 王汝濂
cbdb_id: 205966
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L8r44g1tMcDGH7qGQY3m14
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝濂（生于1534年），明人物。中国历代人物传记资料库（CBDB）以人物编号 205966 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__U-rpymhRh7rxm87fw1k5J
          claim_id: c_L8r44g1tMcDGH7qGQY3m14
          source_id: s_ZciW7GUxUz51DqwGXD8dM7
          stance: supports
          locator: CBDB:205966
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_ZciW7GUxUz51DqwGXD8dM7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝濂（CBDB 205966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205966&o=json
            external_identifier: CBDB:205966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_P4m5XVK7CH7XM1d3RAHkgV
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1534-01-01
            latest: 1534-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NSoCrjfNo1TDguYXYQiGPB
          claim_id: c_P4m5XVK7CH7XM1d3RAHkgV
          source_id: s_ZciW7GUxUz51DqwGXD8dM7
          stance: supports
          locator: CBDB:205966
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1534
          source:
            id: s_ZciW7GUxUz51DqwGXD8dM7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝濂（CBDB 205966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205966&o=json
            external_identifier: CBDB:205966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GLmMaAX4BmHafLjrLrKcJB
        subject_person_id: p_MmVpUWztCQKaC484qaKxXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C3Pf6a2hHZLtM93RCARQfM
          claim_id: c_GLmMaAX4BmHafLjrLrKcJB
          source_id: s_ZciW7GUxUz51DqwGXD8dM7
          stance: supports
          locator: CBDB:205966
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1534
          source:
            id: s_ZciW7GUxUz51DqwGXD8dM7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝濂（CBDB 205966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205966&o=json
            external_identifier: CBDB:205966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M5ZgXEBVRbTG49918D5hKE
        subject_person_id: p_5NvgpfYRCbA6xFX2b2beZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MmVpUWztCQKaC484qaKxXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g0vmr-PKXdcEtcJJgAj1-i
          claim_id: c_M5ZgXEBVRbTG49918D5hKE
          source_id: s_6Qxigr21Es5GTqyWWcgpWX
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6Qxigr21Es5GTqyWWcgpWX
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 211406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211406&o=json
            external_identifier: CBDB:211406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5NvgpfYRCbA6xFX2b2beZH
        status: active
        display_name: 王繼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝濂（生于1534年），明人物。中国历代人物传记资料库（CBDB）以人物编号 205966 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1534年 | accepted |
| name.primary | 王汝濂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5NvgpfYRCbA6xFX2b2beZH | 王繼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 211406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211406&o=json)
- [中国历代人物传记资料库：王汝濂（CBDB 205966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205966&o=json)

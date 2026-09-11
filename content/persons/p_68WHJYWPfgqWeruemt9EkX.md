---
schema: wang-person/v1
id: p_68WHJYWPfgqWeruemt9EkX
status: active
merged_into: null
display_name: 王南傑
cbdb_id: 37704
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4me5MMorBBbKDjaNwQFcqp
        subject_person_id: p_68WHJYWPfgqWeruemt9EkX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王南傑（生于1211年），宋人物。中国历代人物传记资料库（CBDB）以人物编号 37704 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_lGdew5LcXgw8POz8IMq3Jf
          claim_id: c_4me5MMorBBbKDjaNwQFcqp
          source_id: s_v223kd38iddFYF2a99HQgn
          stance: supports
          locator: CBDB:37704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_v223kd38iddFYF2a99HQgn
            source_type: api_record
            title: 中国历代人物传记资料库：王南傑（CBDB 37704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37704&o=json
            external_identifier: CBDB:37704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_djWPdGRC7JpabJSpWh91X6
        subject_person_id: p_68WHJYWPfgqWeruemt9EkX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1211年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1211-01-01
            latest: 1211-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xiy6ZK2wdUNTiTT9Lg3wBj
          claim_id: c_djWPdGRC7JpabJSpWh91X6
          source_id: s_v223kd38iddFYF2a99HQgn
          stance: supports
          locator: CBDB:37704
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1211
          source:
            id: s_v223kd38iddFYF2a99HQgn
            source_type: api_record
            title: 中国历代人物传记资料库：王南傑（CBDB 37704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37704&o=json
            external_identifier: CBDB:37704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pTL32BvR3Ab8McpA7YVKpR
        subject_person_id: p_68WHJYWPfgqWeruemt9EkX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王南傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TW7HHj1FsyMwVizRW3rcPk
          claim_id: c_pTL32BvR3Ab8McpA7YVKpR
          source_id: s_v223kd38iddFYF2a99HQgn
          stance: supports
          locator: CBDB:37704
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1211
          source:
            id: s_v223kd38iddFYF2a99HQgn
            source_type: api_record
            title: 中国历代人物传记资料库：王南傑（CBDB 37704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37704&o=json
            external_identifier: CBDB:37704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ctsib9LpPcmOyyqtisv2Z9
        subject_person_id: p_5A4S7L1Jx9xxrAHuLA5JAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_68WHJYWPfgqWeruemt9EkX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XaayrctJ3xuYZJ7ujx2dHQ
          claim_id: c_ctsib9LpPcmOyyqtisv2Z9
          source_id: s_TxMbuzCVKn2FVmxyAnqsrn
          stance: supports
          locator: 寶祐登科錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TxMbuzCVKn2FVmxyAnqsrn
            source_type: api_record
            title: 中国历代人物传记资料库：王錫之（CBDB 136336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136336&o=json
            external_identifier: CBDB:136336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5A4S7L1Jx9xxrAHuLA5JAa
        status: active
        display_name: 王錫之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_k4EzMHDQ3qoaFAmR96UJVu
        subject_person_id: p_JfR97Qo9EtVxoy9abyHbHM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_68WHJYWPfgqWeruemt9EkX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_967o2-M4saKmSlRcAxxy53
          claim_id: c_k4EzMHDQ3qoaFAmR96UJVu
          source_id: s_gHJMTXAudYMux1K5qRqzpt
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gHJMTXAudYMux1K5qRqzpt
            source_type: api_record
            title: 中国历代人物传记资料库：王大鈞（CBDB 137790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137790&o=json
            external_identifier: CBDB:137790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JfR97Qo9EtVxoy9abyHbHM
        status: active
        display_name: 王大鈞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王南傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王南傑（生于1211年），宋人物。中国历代人物传记资料库（CBDB）以人物编号 37704 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1211年 | accepted |
| name.primary | 王南傑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5A4S7L1Jx9xxrAHuLA5JAa | 王錫之 | accepted |
| ancestors | p_JfR97Qo9EtVxoy9abyHbHM | 王大鈞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大鈞（CBDB 137790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137790&o=json)
- [中国历代人物传记资料库：王南傑（CBDB 37704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37704&o=json)
- [中国历代人物传记资料库：王錫之（CBDB 136336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136336&o=json)

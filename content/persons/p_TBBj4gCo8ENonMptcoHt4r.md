---
schema: wang-person/v1
id: p_TBBj4gCo8ENonMptcoHt4r
status: active
merged_into: null
display_name: 王獻芝
cbdb_id: 202753
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sxSCeN3FJQkYisiiqBj9pU
        subject_person_id: p_TBBj4gCo8ENonMptcoHt4r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻芝（生于1500年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202753 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_m9J9qAfeifTRS-aYSYq7oZ
          claim_id: c_sxSCeN3FJQkYisiiqBj9pU
          source_id: s_DsXzYTbtTvPta41jGXkW9J
          stance: supports
          locator: CBDB:202753
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DsXzYTbtTvPta41jGXkW9J
            source_type: api_record
            title: 中国历代人物传记资料库：王獻芝（CBDB 202753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202753&o=json
            external_identifier: CBDB:202753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Yi5SAJJTzSEeeP9Dyrkc3j
        subject_person_id: p_TBBj4gCo8ENonMptcoHt4r
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1500年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1500-01-01
            latest: 1500-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8Sgake4ou5CkmMJVNCo6rw
          claim_id: c_Yi5SAJJTzSEeeP9Dyrkc3j
          source_id: s_DsXzYTbtTvPta41jGXkW9J
          stance: supports
          locator: CBDB:202753
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1500
          source:
            id: s_DsXzYTbtTvPta41jGXkW9J
            source_type: api_record
            title: 中国历代人物传记资料库：王獻芝（CBDB 202753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202753&o=json
            external_identifier: CBDB:202753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LP4eqxst47Vbn5UGprcseE
        subject_person_id: p_TBBj4gCo8ENonMptcoHt4r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻芝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_A2TjZfxtVMdwzD4vcLt1Bm
          claim_id: c_LP4eqxst47Vbn5UGprcseE
          source_id: s_DsXzYTbtTvPta41jGXkW9J
          stance: supports
          locator: CBDB:202753
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1500
          source:
            id: s_DsXzYTbtTvPta41jGXkW9J
            source_type: api_record
            title: 中国历代人物传记资料库：王獻芝（CBDB 202753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202753&o=json
            external_identifier: CBDB:202753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W-2rAX8WThEjpVcKgVIGM2
        subject_person_id: p_ydgJ4dzTCX4s92aDhwsv4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TBBj4gCo8ENonMptcoHt4r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q1Mbo8xRGl78iqzNn7eQMr
          claim_id: c_W-2rAX8WThEjpVcKgVIGM2
          source_id: s_osU4j1b4Q98g5XxnCPEZRD
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_osU4j1b4Q98g5XxnCPEZRD
            source_type: api_record
            title: 中国历代人物传记资料库：王寵（CBDB 293682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293682&o=json
            external_identifier: CBDB:293682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ydgJ4dzTCX4s92aDhwsv4k
        status: active
        display_name: 王寵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GYpQ0OKD_axOQxs6tK7Fj_
        subject_person_id: p_CfBpw258HLcQeTLTcYJMD7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TBBj4gCo8ENonMptcoHt4r
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hlzfda0OCOgXzQ4m_K97ju
          claim_id: c_GYpQ0OKD_axOQxs6tK7Fj_
          source_id: s_vxLiF5gZR2GshzrSLub3BU
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vxLiF5gZR2GshzrSLub3BU
            source_type: api_record
            title: 中国历代人物传记资料库：王瑗（CBDB 293681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293681&o=json
            external_identifier: CBDB:293681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CfBpw258HLcQeTLTcYJMD7
        status: active
        display_name: 王瑗
        merged_into_person_id: null
    - claim:
        id: c_XiUWPlye7Icwhw9r8NpbLA
        subject_person_id: p_psVhFC7ave4jJ5nVVeJckB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TBBj4gCo8ENonMptcoHt4r
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eMLPr_w7-DvqaXrblJsSof
          claim_id: c_XiUWPlye7Icwhw9r8NpbLA
          source_id: s_YRvu3VXHAVd5QDvM8fqxbx
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YRvu3VXHAVd5QDvM8fqxbx
            source_type: api_record
            title: 中国历代人物传记资料库：王永良（CBDB 293680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293680&o=json
            external_identifier: CBDB:293680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_psVhFC7ave4jJ5nVVeJckB
        status: active
        display_name: 王永良
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王獻芝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王獻芝（生于1500年），明人物。中国历代人物传记资料库（CBDB）以人物编号 202753 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1500年 | accepted |
| name.primary | 王獻芝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ydgJ4dzTCX4s92aDhwsv4k | 王寵 | accepted |
| ancestors | p_CfBpw258HLcQeTLTcYJMD7 | 王瑗 | accepted |
| ancestors | p_psVhFC7ave4jJ5nVVeJckB | 王永良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寵（CBDB 293682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293682&o=json)
- [中国历代人物传记资料库：王獻芝（CBDB 202753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202753&o=json)
- [中国历代人物传记资料库：王永良（CBDB 293680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293680&o=json)
- [中国历代人物传记资料库：王瑗（CBDB 293681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293681&o=json)

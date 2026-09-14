---
schema: wang-person/v1
id: p_RQNnvu8c2y9N9EYgnmFtCC
status: active
merged_into: null
display_name: 王期古
cbdb_id: 204782
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5zJhWkMDkRY8UCmujAjH1S
        subject_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期古（生于1532年），明人物。明清進士進士，籍贯潞州衛，入仕進士。（中国历代人物传记资料库 CBDB 204782）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_yYb-1pVyF_fsMCDj4CLPr6
          claim_id: c_5zJhWkMDkRY8UCmujAjH1S
          source_id: s_vTEotz3xJ459ST4EDWc78v
          stance: supports
          locator: CBDB:204782
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vTEotz3xJ459ST4EDWc78v
            source_type: api_record
            title: 中国历代人物传记资料库：王期古（CBDB 204782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204782&o=json
            external_identifier: CBDB:204782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ypi7eXyQya7H841mYXqonY
        subject_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1532-01-01
            latest: 1532-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3tM6cs9STGdAZ26L2y1J3A
          claim_id: c_ypi7eXyQya7H841mYXqonY
          source_id: s_vTEotz3xJ459ST4EDWc78v
          stance: supports
          locator: CBDB:204782
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1532
          source:
            id: s_vTEotz3xJ459ST4EDWc78v
            source_type: api_record
            title: 中国历代人物传记资料库：王期古（CBDB 204782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204782&o=json
            external_identifier: CBDB:204782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E34jUEsvqY6j47RPz3rBYd
        subject_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王期古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vpb8WWW9Kkeu9WA2kX3jzQ
          claim_id: c_E34jUEsvqY6j47RPz3rBYd
          source_id: s_vTEotz3xJ459ST4EDWc78v
          stance: supports
          locator: CBDB:204782
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1532
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IIKxFUYVQ2jNFiitw3_nAV
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rnZv0S5o9s1WptRo03P3Uz
          claim_id: c_IIKxFUYVQ2jNFiitw3_nAV
          source_id: s_HA313k62mqABMKAfGCy37D
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HA313k62mqABMKAfGCy37D
            source_type: api_record
            title: 中国历代人物传记资料库：王龍（CBDB 324014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324014&o=json
            external_identifier: CBDB:324014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CEMGnZJGkUBUQcSpdxgPnV
        status: active
        display_name: 王龍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_VVXuUegLfx6nZyib3si4vJ
        subject_person_id: p_dQStJzehn6KJtQpf7dGMPV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8QG4SkvsWV0Q3070V0Wh5_
          claim_id: c_VVXuUegLfx6nZyib3si4vJ
          source_id: s_MeGYZASvLwPuSTFcTQDaua
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MeGYZASvLwPuSTFcTQDaua
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 324012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324012&o=json
            external_identifier: CBDB:324012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dQStJzehn6KJtQpf7dGMPV
        status: active
        display_name: 王綱
        merged_into_person_id: null
    - claim:
        id: c_NsfiIyq33U6-sA5ZTQpt2j
        subject_person_id: p_oL4sEC8RjRxThS6ATE5WjX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W6S3mYYHH3YciKed7TffjE
          claim_id: c_NsfiIyq33U6-sA5ZTQpt2j
          source_id: s_oqNgQtfVymdbPXAM7WfTVe
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oqNgQtfVymdbPXAM7WfTVe
            source_type: api_record
            title: 中国历代人物传记资料库：王用（CBDB 324013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324013&o=json
            external_identifier: CBDB:324013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oL4sEC8RjRxThS6ATE5WjX
        status: active
        display_name: 王用
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_XMYj9yJRPUq-sUbYCstwB2
        subject_person_id: p_42SLpT34ZjcvcMR6Z4suis
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PCOOvQQ4tYmkjqJbmeIByp
          claim_id: c_XMYj9yJRPUq-sUbYCstwB2
          source_id: s_uzhyxICbrekBaOCIGCntlu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204782 王期古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uzhyxICbrekBaOCIGCntlu
            source_type: api_record
            title: 中国历代人物传记资料库：王期化（CBDB 324018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324018&o=json
            external_identifier: CBDB:324018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_42SLpT34ZjcvcMR6Z4suis
        status: active
        display_name: 王期化
        merged_into_person_id: null
    - claim:
        id: c_Bx2YDnlYoybSR8TjLDq8nV
        subject_person_id: p_D2qyaLmGT5TG6XRt6rLH8w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5dpI1KPsDSANtryUxBJe1s
          claim_id: c_Bx2YDnlYoybSR8TjLDq8nV
          source_id: s_hnS8P_RSUY_a64QuKT6eqO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204782 王期古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hnS8P_RSUY_a64QuKT6eqO
            source_type: api_record
            title: 中国历代人物传记资料库：王期道（CBDB 324020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324020&o=json
            external_identifier: CBDB:324020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D2qyaLmGT5TG6XRt6rLH8w
        status: active
        display_name: 王期道
        merged_into_person_id: null
    - claim:
        id: c_VLFq5PyaHwUzFYnmacvgHx
        subject_person_id: p_E7Zxb7UEW62oJJhDuLDRdG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RQNnvu8c2y9N9EYgnmFtCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__1Zj4WqiKoHdJ8a26zNuLr
          claim_id: c_VLFq5PyaHwUzFYnmacvgHx
          source_id: s_ylPxdfhdsJzQl9jNriV3e6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204782 王期古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ylPxdfhdsJzQl9jNriV3e6
            source_type: api_record
            title: 中国历代人物传记资料库：王期治（CBDB 324017）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324017&o=json
            external_identifier: CBDB:324017
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E7Zxb7UEW62oJJhDuLDRdG
        status: active
        display_name: 王期治
        merged_into_person_id: null
---

# 王期古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王期古（生于1532年），明人物。明清進士進士，籍贯潞州衛，入仕進士。（中国历代人物传记资料库 CBDB 204782） | accepted |
| birth.date | 1532年 | accepted |
| name.primary | 王期古 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CEMGnZJGkUBUQcSpdxgPnV | 王龍 | accepted |
| ancestors | p_dQStJzehn6KJtQpf7dGMPV | 王綱 | accepted |
| ancestors | p_oL4sEC8RjRxThS6ATE5WjX | 王用 | accepted |
| other | p_42SLpT34ZjcvcMR6Z4suis | 王期化 | accepted |
| other | p_D2qyaLmGT5TG6XRt6rLH8w | 王期道 | accepted |
| other | p_E7Zxb7UEW62oJJhDuLDRdG | 王期治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 324012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324012&o=json)
- [中国历代人物传记资料库：王龍（CBDB 324014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324014&o=json)
- [中国历代人物传记资料库：王期道（CBDB 324020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324020&o=json)
- [中国历代人物传记资料库：王期古（CBDB 204782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204782&o=json)
- [中国历代人物传记资料库：王期化（CBDB 324018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324018&o=json)
- [中国历代人物传记资料库：王期治（CBDB 324017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324017&o=json)
- [中国历代人物传记资料库：王用（CBDB 324013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324013&o=json)

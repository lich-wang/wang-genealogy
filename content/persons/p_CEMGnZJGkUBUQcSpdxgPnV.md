---
schema: wang-person/v1
id: p_CEMGnZJGkUBUQcSpdxgPnV
status: active
merged_into: null
display_name: 王龍
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hh2ENrGSP8d5oxbjzgTuEU
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kpHyECNCmQzuMBnJE1Gtp3
          claim_id: c_Hh2ENrGSP8d5oxbjzgTuEU
          source_id: s_HA313k62mqABMKAfGCy37D
          stance: supports
          locator: CBDB:324014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324014）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_86hpqxGMWX85GqeXntcnqh
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龍，明人物。嘉靖三十八年進士，籍贯潞州衛，曾任儀賓。（中国历代人物传记资料库 CBDB 324014）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uU_JsDCCVg_dSrjH29X7U3
          claim_id: c_86hpqxGMWX85GqeXntcnqh
          source_id: s_HA313k62mqABMKAfGCy37D
          stance: supports
          locator: CBDB:324014
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_RQNnvu8c2y9N9EYgnmFtCC
        status: active
        display_name: 王期古
        merged_into_person_id: null
    - claim:
        id: c_-23tg-Nwye9NCOPb093d3n
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42SLpT34ZjcvcMR6Z4suis
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qm5FjGRCM4GbfekgUYLpVy
          claim_id: c_-23tg-Nwye9NCOPb093d3n
          source_id: s_uzhyxICbrekBaOCIGCntlu
          stance: supports
          locator: CBDB：兄弟 王期古（204782）之父／母 王龍
          quotation: null
          interpretation_note: 由兄弟关系推断：王期化 与 王期古 为同胞（CBDB 记「兄」），王期古 之父／母即 王期化 之父／母。
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
        id: c_jZcAbMJdiR4CmSyq5JXjFO
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D2qyaLmGT5TG6XRt6rLH8w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3g_jWmZqKK72b6WowVIKMD
          claim_id: c_jZcAbMJdiR4CmSyq5JXjFO
          source_id: s_hnS8P_RSUY_a64QuKT6eqO
          stance: supports
          locator: CBDB：兄弟 王期古（204782）之父／母 王龍
          quotation: null
          interpretation_note: 由兄弟关系推断：王期道 与 王期古 为同胞（CBDB 记「兄」），王期古 之父／母即 王期道 之父／母。
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
        id: c_oSOJ7ZBQVTIB04lXAwEgF4
        subject_person_id: p_CEMGnZJGkUBUQcSpdxgPnV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E7Zxb7UEW62oJJhDuLDRdG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DOCRgRro6Dtue81NuJvmIB
          claim_id: c_oSOJ7ZBQVTIB04lXAwEgF4
          source_id: s_ylPxdfhdsJzQl9jNriV3e6
          stance: supports
          locator: CBDB：兄弟 王期古（204782）之父／母 王龍
          quotation: null
          interpretation_note: 由兄弟关系推断：王期治 与 王期古 为同胞（CBDB 记「兄」），王期古 之父／母即 王期治 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龍 | accepted |
| bio.summary | 王龍，明人物。嘉靖三十八年進士，籍贯潞州衛，曾任儀賓。（中国历代人物传记资料库 CBDB 324014） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RQNnvu8c2y9N9EYgnmFtCC | 王期古 | accepted |
| children | p_42SLpT34ZjcvcMR6Z4suis | 王期化 | accepted |
| children | p_D2qyaLmGT5TG6XRt6rLH8w | 王期道 | accepted |
| children | p_E7Zxb7UEW62oJJhDuLDRdG | 王期治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王龍（CBDB 324014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324014&o=json)
- [中国历代人物传记资料库：王期道（CBDB 324020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324020&o=json)
- [中国历代人物传记资料库：王期化（CBDB 324018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324018&o=json)
- [中国历代人物传记资料库：王期治（CBDB 324017）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324017&o=json)

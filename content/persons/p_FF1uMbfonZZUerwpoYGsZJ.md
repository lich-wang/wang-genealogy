---
schema: wang-person/v1
id: p_FF1uMbfonZZUerwpoYGsZJ
status: active
merged_into: null
display_name: 王郁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ws7HByWPLoU7LRkBhkrMcU
        subject_person_id: p_FF1uMbfonZZUerwpoYGsZJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wJD8LA2hAUkrAcWx2kqbaM
          claim_id: c_Ws7HByWPLoU7LRkBhkrMcU
          source_id: s_zCS6b7dveiWpFNsmNscBEW
          stance: supports
          locator: CBDB:200177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200177）
          source: &a1
            id: s_zCS6b7dveiWpFNsmNscBEW
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 200177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200177&o=json
            external_identifier: CBDB:200177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qF44c4QHCdKuPo6k4tV5v1
        subject_person_id: p_FF1uMbfonZZUerwpoYGsZJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1370年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QZvTHqD11dVfJYtLV6Hupm
          claim_id: c_qF44c4QHCdKuPo6k4tV5v1
          source_id: s_zCS6b7dveiWpFNsmNscBEW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rKNZCSuzNfe9KUJtq362wc
        subject_person_id: p_FF1uMbfonZZUerwpoYGsZJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郁（生于1370年），明人物。建文二年殿試進士，籍贯靈璧，入仕進士。（中国历代人物传记资料库 CBDB 200177）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U-N_bGptsonedoiiP-Eqcc
          claim_id: c_rKNZCSuzNfe9KUJtq362wc
          source_id: s_zCS6b7dveiWpFNsmNscBEW
          stance: supports
          locator: CBDB:200177
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ABpOvXIP9XZgec_iAYKYd3
        subject_person_id: p_ubGBvK1Bop9yB5KzQTMqqg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FF1uMbfonZZUerwpoYGsZJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oAmSHKx2KaI65Unt4ZDcr8
          claim_id: c_ABpOvXIP9XZgec_iAYKYd3
          source_id: s_zCS6b7dveiWpFNsmNscBEW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ubGBvK1Bop9yB5KzQTMqqg
        status: active
        display_name: 王聚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_xxKH4AiuN-i2kowQ6kI5z8
        subject_person_id: p_FF1uMbfonZZUerwpoYGsZJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_55w21bqueKgmZs52sCs4iP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f2G88MJuv3Q-wIKijMHBao
          claim_id: c_xxKH4AiuN-i2kowQ6kI5z8
          source_id: s_VB0A4jJb36uZb3ZjZl_gmm
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VB0A4jJb36uZb3ZjZl_gmm
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王郁妻)（CBDB 254533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254533&o=json
            external_identifier: CBDB:254533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_55w21bqueKgmZs52sCs4iP
        status: active
        display_name: 高氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_obaf0TOUgkp7Zt2zBnBCcG
        subject_person_id: p_sNWwAL6to8rH1MBPLZwd3p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FF1uMbfonZZUerwpoYGsZJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U8KHopoD1XTc-hmfStwQn5
          claim_id: c_obaf0TOUgkp7Zt2zBnBCcG
          source_id: s_zCS6b7dveiWpFNsmNscBEW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sNWwAL6to8rH1MBPLZwd3p
        status: active
        display_name: 王朝
        merged_into_person_id: null
    - claim:
        id: c_8W3KUs4pCNHpWkDkmlvnOT
        subject_person_id: p_h6ur3n3rWfGs73DSqdakhr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FF1uMbfonZZUerwpoYGsZJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydt5KTZr5_A-o4FgspoyXQ
          claim_id: c_8W3KUs4pCNHpWkDkmlvnOT
          source_id: s_zCS6b7dveiWpFNsmNscBEW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_h6ur3n3rWfGs73DSqdakhr
        status: active
        display_name: 王通
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王郁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郁 | accepted |
| birth.date | 1370年 | accepted |
| bio.summary | 王郁（生于1370年），明人物。建文二年殿試進士，籍贯靈璧，入仕進士。（中国历代人物传记资料库 CBDB 200177） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ubGBvK1Bop9yB5KzQTMqqg | 王聚 | accepted |
| spouses | p_55w21bqueKgmZs52sCs4iP | 高氏 | accepted |
| ancestors | p_sNWwAL6to8rH1MBPLZwd3p | 王朝 | accepted |
| ancestors | p_h6ur3n3rWfGs73DSqdakhr | 王通 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王郁妻)（CBDB 254533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254533&o=json)
- [中国历代人物传记资料库：王郁（CBDB 200177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200177&o=json)

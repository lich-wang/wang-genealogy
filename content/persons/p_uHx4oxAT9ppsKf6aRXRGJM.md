---
schema: wang-person/v1
id: p_uHx4oxAT9ppsKf6aRXRGJM
status: active
merged_into: null
display_name: 王尚貞
cbdb_id: 210676
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y6d49seoFRMoeHAVADLryU
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚貞，明人物。隆慶五年進士，籍贯夏邑，曾任七品散官。（中国历代人物传记资料库 CBDB 210676）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9wikB2cwpcPuVKXabdDYCU
          claim_id: c_Y6d49seoFRMoeHAVADLryU
          source_id: s_dAHdotuWXxACM824shQkMJ
          stance: supports
          locator: CBDB:210676
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dAHdotuWXxACM824shQkMJ
            source_type: api_record
            title: 中国历代人物传记资料库：王尚貞（CBDB 210676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210676&o=json
            external_identifier: CBDB:210676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CJa9eDXuDXd65A1VY6hvVs
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_evCed8kDx7onTEZri7oU5L
          claim_id: c_CJa9eDXuDXd65A1VY6hvVs
          source_id: s_dAHdotuWXxACM824shQkMJ
          stance: supports
          locator: CBDB:210676
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5sMBUmyahCa13LXd6ixol4
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ePMt9Ic6g_UsmcY0mBSOP6
          claim_id: c_5sMBUmyahCa13LXd6ixol4
          source_id: s_dAHdotuWXxACM824shQkMJ
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dAHdotuWXxACM824shQkMJ
            source_type: api_record
            title: 中国历代人物传记资料库：王尚貞（CBDB 210676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210676&o=json
            external_identifier: CBDB:210676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JTc1E7LgQAh6Uz9airZSVG
        status: active
        display_name: 王雲鷺
        merged_into_person_id: null
    - claim:
        id: c_eCSXS3HTypbzSzUDQ2yCJn
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_847jmYtbNaXCNUchPVYBZW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dza13Zzrr657Gi8-Vz5Pw6
          claim_id: c_eCSXS3HTypbzSzUDQ2yCJn
          source_id: s_Mp96U_8qbB7mw4a_LH30D7
          stance: supports
          locator: CBDB：兄弟 王雲鷺（205920）之父／母 王尚貞
          quotation: null
          interpretation_note: 由兄弟关系推断：王雲鸑 与 王雲鷺 为同胞（CBDB 记「弟」），王雲鷺 之父／母即 王雲鸑 之父／母。
          source:
            id: s_Mp96U_8qbB7mw4a_LH30D7
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鸑（CBDB 210681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210681&o=json
            external_identifier: CBDB:210681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_847jmYtbNaXCNUchPVYBZW
        status: active
        display_name: 王雲鸑
        merged_into_person_id: null
    - claim:
        id: c_4iKeIHxRGWlX_SE0WR_v2J
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EnLcaLS2uMczaE3AyynrjS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3rLcQ0Ua7si07xfsyNG6Um
          claim_id: c_4iKeIHxRGWlX_SE0WR_v2J
          source_id: s_9sTQXDfkgHhPclJEEpH2Y-
          stance: supports
          locator: CBDB：兄弟 王雲鷺（205920）之父／母 王尚貞
          quotation: null
          interpretation_note: 由兄弟关系推断：王雲鷟 与 王雲鷺 为同胞（CBDB 记「弟」），王雲鷺 之父／母即 王雲鷟 之父／母。
          source:
            id: s_9sTQXDfkgHhPclJEEpH2Y-
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷟（CBDB 210683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210683&o=json
            external_identifier: CBDB:210683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EnLcaLS2uMczaE3AyynrjS
        status: active
        display_name: 王雲鷟
        merged_into_person_id: null
    - claim:
        id: c_yZIycm_Jm4H1O1ubghi-I-
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XAwBghomVSmXqhmJhUwUKw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8k5ifoYX4bxl30jErOQ1Pc
          claim_id: c_yZIycm_Jm4H1O1ubghi-I-
          source_id: s_gZIGaXqcR1ANW18fRLAC-n
          stance: supports
          locator: CBDB：兄弟 王雲鷺（205920）之父／母 王尚貞
          quotation: null
          interpretation_note: 由兄弟关系推断：王雲鴈 与 王雲鷺 为同胞（CBDB 记「弟」），王雲鷺 之父／母即 王雲鴈 之父／母。
          source:
            id: s_gZIGaXqcR1ANW18fRLAC-n
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鴈（CBDB 210680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210680&o=json
            external_identifier: CBDB:210680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XAwBghomVSmXqhmJhUwUKw
        status: active
        display_name: 王雲鴈
        merged_into_person_id: null
    - claim:
        id: c_Ewvwg5b3JT3HjAlqqV2tXa
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zgMxPAPh9nRRPkisXUCpxq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AzVO9YDbW9ByvCT-ZfhjOn
          claim_id: c_Ewvwg5b3JT3HjAlqqV2tXa
          source_id: s_bpNzZMATMviwRAOIP7c7FI
          stance: supports
          locator: CBDB：兄弟 王雲鷺（205920）之父／母 王尚貞
          quotation: null
          interpretation_note: 由兄弟关系推断：王雲鷖 与 王雲鷺 为同胞（CBDB 记「弟」），王雲鷺 之父／母即 王雲鷖 之父／母。
          source:
            id: s_bpNzZMATMviwRAOIP7c7FI
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷖（CBDB 210684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210684&o=json
            external_identifier: CBDB:210684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zgMxPAPh9nRRPkisXUCpxq
        status: active
        display_name: 王雲鷖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王尚貞，明人物。隆慶五年進士，籍贯夏邑，曾任七品散官。（中国历代人物传记资料库 CBDB 210676） | accepted |
| name.primary | 王尚貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JTc1E7LgQAh6Uz9airZSVG | 王雲鷺 | accepted |
| children | p_847jmYtbNaXCNUchPVYBZW | 王雲鸑 | accepted |
| children | p_EnLcaLS2uMczaE3AyynrjS | 王雲鷟 | accepted |
| children | p_XAwBghomVSmXqhmJhUwUKw | 王雲鴈 | accepted |
| children | p_zgMxPAPh9nRRPkisXUCpxq | 王雲鷖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚貞（CBDB 210676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210676&o=json)
- [中国历代人物传记资料库：王雲鴈（CBDB 210680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210680&o=json)
- [中国历代人物传记资料库：王雲鷖（CBDB 210684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210684&o=json)
- [中国历代人物传记资料库：王雲鸑（CBDB 210681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210681&o=json)
- [中国历代人物传记资料库：王雲鷟（CBDB 210683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210683&o=json)

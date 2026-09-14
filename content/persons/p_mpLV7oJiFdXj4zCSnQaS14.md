---
schema: wang-person/v1
id: p_mpLV7oJiFdXj4zCSnQaS14
status: active
merged_into: null
display_name: 王勉
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBmF1bVkxVCr1KzFDcwNi2
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QGQZAzH2GsPvqrgmBxTsf2
          claim_id: c_kBmF1bVkxVCr1KzFDcwNi2
          source_id: s_zryi2LkK33o2BwF2L2reos
          stance: supports
          locator: CBDB:237318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237318）
          source: &a1
            id: s_zryi2LkK33o2BwF2L2reos
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 237318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237318&o=json
            external_identifier: CBDB:237318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A5Exk2YquzCU3sB3nudzJP
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉，明人物。正統四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 237318）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RMvKP__9Eth2xxscFeqgPT
          claim_id: c_A5Exk2YquzCU3sB3nudzJP
          source_id: s_zryi2LkK33o2BwF2L2reos
          stance: supports
          locator: CBDB:237318
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4MhEusLXJ-34bDNoelPb5F
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TvjN1nga4vdBGSvpaM82jn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H_6_XPkzbNiVU-xEL0iheu
          claim_id: c_4MhEusLXJ-34bDNoelPb5F
          source_id: s_zryi2LkK33o2BwF2L2reos
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TvjN1nga4vdBGSvpaM82jn
        status: active
        display_name: 王彧
        merged_into_person_id: null
    - claim:
        id: c_QrK4KRcLGr2wblYklMUvoJ
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9hF63bv2ktfbePmAh5NmZn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lRgmoU3zheQU0Sb8vJ1zdh
          claim_id: c_QrK4KRcLGr2wblYklMUvoJ
          source_id: s_nhn4PYu5pvyfRbeSB1nBUf
          stance: supports
          locator: CBDB：兄弟 王彧（207878）之父／母 王勉
          quotation: null
          interpretation_note: 由兄弟关系推断：王儀 与 王彧 为同胞（CBDB 记「兄」），王彧 之父／母即 王儀 之父／母。
          source:
            id: s_nhn4PYu5pvyfRbeSB1nBUf
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 237326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237326&o=json
            external_identifier: CBDB:237326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9hF63bv2ktfbePmAh5NmZn
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_uB31tEoGDQl45V-vXsHnWN
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NUC6mTWrwyxxWg6oDTdjSN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qFcGJWq1WJg0Was4yfPydu
          claim_id: c_uB31tEoGDQl45V-vXsHnWN
          source_id: s_0sToDp9kowC9DbeTDSOarr
          stance: supports
          locator: CBDB：兄弟 王彧（207878）之父／母 王勉
          quotation: null
          interpretation_note: 由兄弟关系推断：王伸 与 王彧 为同胞（CBDB 记「兄」），王彧 之父／母即 王伸 之父／母。
          source:
            id: s_0sToDp9kowC9DbeTDSOarr
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 237327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237327&o=json
            external_identifier: CBDB:237327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NUC6mTWrwyxxWg6oDTdjSN
        status: active
        display_name: 王伸
        merged_into_person_id: null
    - claim:
        id: c_f5NFc9cB9SoK6mT7g0cGgj
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ResYE64ryyAsWfUzYFbfRC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h3DtbyZsSARjCZ8B7zyG5M
          claim_id: c_f5NFc9cB9SoK6mT7g0cGgj
          source_id: s_4YfZTXsb53qIqgA41-jMrj
          stance: supports
          locator: CBDB：兄弟 王彧（207878）之父／母 王勉
          quotation: null
          interpretation_note: 由兄弟关系推断：王僖 与 王彧 为同胞（CBDB 记「兄」），王彧 之父／母即 王僖 之父／母。
          source:
            id: s_4YfZTXsb53qIqgA41-jMrj
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 237325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237325&o=json
            external_identifier: CBDB:237325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ResYE64ryyAsWfUzYFbfRC
        status: active
        display_name: 王僖
        merged_into_person_id: null
    - claim:
        id: c_TOY6AcrD48xIuGLaU5MlnX
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TJFB1cHaGkYtqZQ3ArjCKV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1mEem6UNUlTsJtEbpj7H8
          claim_id: c_TOY6AcrD48xIuGLaU5MlnX
          source_id: s_YerqFKfd08yBUWrGPCfue-
          stance: supports
          locator: CBDB：兄弟 王彧（207878）之父／母 王勉
          quotation: null
          interpretation_note: 由兄弟关系推断：王文 与 王彧 为同胞（CBDB 记「兄」），王彧 之父／母即 王文 之父／母。
          source:
            id: s_YerqFKfd08yBUWrGPCfue-
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 237323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237323&o=json
            external_identifier: CBDB:237323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TJFB1cHaGkYtqZQ3ArjCKV
        status: active
        display_name: 王文
        merged_into_person_id: null
    - claim:
        id: c_Q_8YRBBtW3YDw7oiXEXHsB
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x89vy8KfgdGry2vUzWnptF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tDN9pBNCKYKMzZYu6dkLCi
          claim_id: c_Q_8YRBBtW3YDw7oiXEXHsB
          source_id: s_80koRKmGELhU23xdVeUGaU
          stance: supports
          locator: CBDB：兄弟 王彧（207878）之父／母 王勉
          quotation: null
          interpretation_note: 由兄弟关系推断：王信 与 王彧 为同胞（CBDB 记「兄」），王彧 之父／母即 王信 之父／母。
          source:
            id: s_80koRKmGELhU23xdVeUGaU
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 237324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237324&o=json
            external_identifier: CBDB:237324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_x89vy8KfgdGry2vUzWnptF
        status: active
        display_name: 王信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勉 | accepted |
| bio.summary | 王勉，明人物。正統四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 237318） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TvjN1nga4vdBGSvpaM82jn | 王彧 | accepted |
| children | p_9hF63bv2ktfbePmAh5NmZn | 王儀 | accepted |
| children | p_NUC6mTWrwyxxWg6oDTdjSN | 王伸 | accepted |
| children | p_ResYE64ryyAsWfUzYFbfRC | 王僖 | accepted |
| children | p_TJFB1cHaGkYtqZQ3ArjCKV | 王文 | accepted |
| children | p_x89vy8KfgdGry2vUzWnptF | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勉（CBDB 237318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237318&o=json)
- [中国历代人物传记资料库：王伸（CBDB 237327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237327&o=json)
- [中国历代人物传记资料库：王文（CBDB 237323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237323&o=json)
- [中国历代人物传记资料库：王僖（CBDB 237325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237325&o=json)
- [中国历代人物传记资料库：王信（CBDB 237324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237324&o=json)
- [中国历代人物传记资料库：王儀（CBDB 237326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237326&o=json)

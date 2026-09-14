---
schema: wang-person/v1
id: p_yoJ8xkA6RKn5KTuDeY1X7C
status: active
merged_into: null
display_name: 王正功
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BcZ6c91hQHbiVDEYMkzWPf
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bjjiFBgmF3yGHC2A6C5o6y
          claim_id: c_BcZ6c91hQHbiVDEYMkzWPf
          source_id: s_pKwCwCh2ZSDQpztzLm1ryQ
          stance: supports
          locator: CBDB:19876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19876）
          source: &a1
            id: s_pKwCwCh2ZSDQpztzLm1ryQ
            source_type: api_record
            title: 中国历代人物传记资料库：王正功（CBDB 19876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19876&o=json
            external_identifier: CBDB:19876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5hK3EZHdDwFTfN7a9tV61B
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1133年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4y5borTgcA4fbKfWpsxFQC
          claim_id: c_5hK3EZHdDwFTfN7a9tV61B
          source_id: s_pKwCwCh2ZSDQpztzLm1ryQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_djn6hW4XZB51AVvgbuyuDM
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1203年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G4L4QBSE35ZLZ6xeFZxQV9
          claim_id: c_djn6hW4XZB51AVvgbuyuDM
          source_id: s_pKwCwCh2ZSDQpztzLm1ryQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HS33RUs2tiNXiRUnv1mUA5
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正功（1133年—1203年），宋人物。籍贯鄞縣，入仕恩蔭、蔭補，曾任將仕郎、路提點刑獄公事、通判。（中国历代人物传记资料库 CBDB 19876）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vJMJTlOsxrLsZsvyngJN8L
          claim_id: c_HS33RUs2tiNXiRUnv1mUA5
          source_id: s_pKwCwCh2ZSDQpztzLm1ryQ
          stance: supports
          locator: CBDB:19876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WAVF8y9rzVfmnWeahB5N8a
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Pvbhr3LE5rh7bWATKZco7S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_-r1B-tu6MtqzFwjAmX2Q6l
          claim_id: c_WAVF8y9rzVfmnWeahB5N8a
          source_id: s_J7DwMpwX1Ro5HXfV965DYB
          stance: supports
          locator: CBDB 亲属：父（KinPerson 19876）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_J7DwMpwX1Ro5HXfV965DYB
            source_type: api_record
            title: 中国历代人物传记资料库：王深（CBDB 35687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35687&o=json
            external_identifier: CBDB:35687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Pvbhr3LE5rh7bWATKZco7S
        status: active
        display_name: 王深
        merged_into_person_id: null
    - claim:
        id: c_jN0drFBQdbhxqQIEMex3Ax
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r9heHG2FojCpHTWKX5G61W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_lGg7pFjv0vST6ntSiRUamH
          claim_id: c_jN0drFBQdbhxqQIEMex3Ax
          source_id: s_dZjPNCND1lk1VU339fiv8c
          stance: supports
          locator: CBDB 亲属：父（KinPerson 19876）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_dZjPNCND1lk1VU339fiv8c
            source_type: api_record
            title: 中国历代人物传记资料库：王泌（CBDB 35689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35689&o=json
            external_identifier: CBDB:35689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r9heHG2FojCpHTWKX5G61W
        status: active
        display_name: 王泌
        merged_into_person_id: null
    - claim:
        id: c_FPwOgCfDvIU2dHlEwBBFsD
        subject_person_id: p_yoJ8xkA6RKn5KTuDeY1X7C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rA8Xm6td4MjUKdatRd96Gp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WrpyLrrPJFshWpalTz6wiN
          claim_id: c_FPwOgCfDvIU2dHlEwBBFsD
          source_id: s_afTVIigjOitREv0jvvb1mJ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 19876）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_afTVIigjOitREv0jvvb1mJ
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 19877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19877&o=json
            external_identifier: CBDB:19877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rA8Xm6td4MjUKdatRd96Gp
        status: active
        display_name: 王洙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正功 | accepted |
| birth.date | 1133年 | accepted |
| death.date | 1203年 | accepted |
| bio.summary | 王正功（1133年—1203年），宋人物。籍贯鄞縣，入仕恩蔭、蔭補，曾任將仕郎、路提點刑獄公事、通判。（中国历代人物传记资料库 CBDB 19876） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Pvbhr3LE5rh7bWATKZco7S | 王深 | accepted |
| children | p_r9heHG2FojCpHTWKX5G61W | 王泌 | accepted |
| children | p_rA8Xm6td4MjUKdatRd96Gp | 王洙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泌（CBDB 35689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35689&o=json)
- [中国历代人物传记资料库：王深（CBDB 35687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35687&o=json)
- [中国历代人物传记资料库：王正功（CBDB 19876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19876&o=json)
- [中国历代人物传记资料库：王洙（CBDB 19877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19877&o=json)

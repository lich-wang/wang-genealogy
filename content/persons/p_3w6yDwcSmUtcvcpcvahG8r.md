---
schema: wang-person/v1
id: p_3w6yDwcSmUtcvcpcvahG8r
status: active
merged_into: null
display_name: 王都
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RS16EFpvZTHTXWbd7SLnfk
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UKNp88P5oVP6ACMZtxBePn
          claim_id: c_RS16EFpvZTHTXWbd7SLnfk
          source_id: s_aMJtEETsGVvLFo3gwn4sGs
          stance: supports
          locator: CBDB:213950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213950）
          source: &a1
            id: s_aMJtEETsGVvLFo3gwn4sGs
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 213950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213950&o=json
            external_identifier: CBDB:213950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A6FLMADeVS97UJ7x55tgKa
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都，明人物。萬曆二年進士，籍贯唐山，曾任教諭。（中国历代人物传记资料库 CBDB 213950）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DWvYB8SQTeng_fj0jAUqPI
          claim_id: c_A6FLMADeVS97UJ7x55tgKa
          source_id: s_aMJtEETsGVvLFo3gwn4sGs
          stance: supports
          locator: CBDB:213950
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dD-wp1H0DEUq4uUsRRL_LC
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yJ3TVQF9TZGy72FnBo91RN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vlAdJWly68JAQvIm8OWHnF
          claim_id: c_dD-wp1H0DEUq4uUsRRL_LC
          source_id: s_aMJtEETsGVvLFo3gwn4sGs
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yJ3TVQF9TZGy72FnBo91RN
        status: active
        display_name: 王鳳竹
        merged_into_person_id: null
    - claim:
        id: c_u3Sp1DBm6F3c8r5a7bYEWf
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6CFCE8MuSaeScr947U7NFE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HrqtLSR5NJL7SeMoXS-H70
          claim_id: c_u3Sp1DBm6F3c8r5a7bYEWf
          source_id: s_-pv-LWhC_lxjgKM2zYE9EM
          stance: supports
          locator: CBDB：兄弟 王鳳竹（126794）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳岐 与 王鳳竹 为同胞（CBDB 记「弟」），王鳳竹 之父／母即 王鳳岐 之父／母。
          source:
            id: s_-pv-LWhC_lxjgKM2zYE9EM
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳岐（CBDB 213957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213957&o=json
            external_identifier: CBDB:213957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6CFCE8MuSaeScr947U7NFE
        status: active
        display_name: 王鳳岐
        merged_into_person_id: null
    - claim:
        id: c_39O-wWTDavYZHrasjqr_IJ
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CSmTqHxqedNwe6Ap9XLU3b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Na3MRaf96k9yyFsDXywAUf
          claim_id: c_39O-wWTDavYZHrasjqr_IJ
          source_id: s_jVPG22yifkkyIVaNMY7awo
          stance: supports
          locator: CBDB：兄弟 王鳳竹（126794）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳賡 与 王鳳竹 为同胞（CBDB 记「兄」），王鳳竹 之父／母即 王鳳賡 之父／母。
          source:
            id: s_jVPG22yifkkyIVaNMY7awo
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳賡（CBDB 213958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213958&o=json
            external_identifier: CBDB:213958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CSmTqHxqedNwe6Ap9XLU3b
        status: active
        display_name: 王鳳賡
        merged_into_person_id: null
    - claim:
        id: c_ntMDB_-R0HUF_Bxh7-NWaS
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E9yiZRcnv86R8z3Ga3MtSS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kA9UeZJ-e4GuDNXtdPjebR
          claim_id: c_ntMDB_-R0HUF_Bxh7-NWaS
          source_id: s_YR5gW3F-KG84eigEHyDIHz
          stance: supports
          locator: CBDB：兄弟 王鳳竹（126794）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳曆 与 王鳳竹 为同胞（CBDB 记「弟」），王鳳竹 之父／母即 王鳳曆 之父／母。
          source:
            id: s_YR5gW3F-KG84eigEHyDIHz
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳曆（CBDB 213955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213955&o=json
            external_identifier: CBDB:213955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E9yiZRcnv86R8z3Ga3MtSS
        status: active
        display_name: 王鳳曆
        merged_into_person_id: null
    - claim:
        id: c_gGTi39zWDL_MKR3nEXxJ0m
        subject_person_id: p_3w6yDwcSmUtcvcpcvahG8r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bTtS5MMCKCq6c4KMmXWoaE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8AMBqsZYP5GFWo9K5jg-e-
          claim_id: c_gGTi39zWDL_MKR3nEXxJ0m
          source_id: s_s4Dqbt0z238mGFmzRGTxz2
          stance: supports
          locator: CBDB：兄弟 王鳳竹（126794）之父／母 王都
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳鳴 与 王鳳竹 为同胞（CBDB 记「弟」），王鳳竹 之父／母即 王鳳鳴 之父／母。
          source:
            id: s_s4Dqbt0z238mGFmzRGTxz2
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳鳴（CBDB 213956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213956&o=json
            external_identifier: CBDB:213956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bTtS5MMCKCq6c4KMmXWoaE
        status: active
        display_name: 王鳳鳴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王都

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王都 | accepted |
| bio.summary | 王都，明人物。萬曆二年進士，籍贯唐山，曾任教諭。（中国历代人物传记资料库 CBDB 213950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yJ3TVQF9TZGy72FnBo91RN | 王鳳竹 | accepted |
| children | p_6CFCE8MuSaeScr947U7NFE | 王鳳岐 | accepted |
| children | p_CSmTqHxqedNwe6Ap9XLU3b | 王鳳賡 | accepted |
| children | p_E9yiZRcnv86R8z3Ga3MtSS | 王鳳曆 | accepted |
| children | p_bTtS5MMCKCq6c4KMmXWoaE | 王鳳鳴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王都（CBDB 213950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213950&o=json)
- [中国历代人物传记资料库：王鳳賡（CBDB 213958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213958&o=json)
- [中国历代人物传记资料库：王鳳曆（CBDB 213955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213955&o=json)
- [中国历代人物传记资料库：王鳳鳴（CBDB 213956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213956&o=json)
- [中国历代人物传记资料库：王鳳岐（CBDB 213957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213957&o=json)

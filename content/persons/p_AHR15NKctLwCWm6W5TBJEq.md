---
schema: wang-person/v1
id: p_AHR15NKctLwCWm6W5TBJEq
status: active
merged_into: null
display_name: 王一言
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_puGL3DNStzveu4dd72KPoa
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TtK6zvqcQ4bXJpNm74e5aj
          claim_id: c_puGL3DNStzveu4dd72KPoa
          source_id: s_V4r3VEJE6ghU8AhQU1Wdx5
          stance: supports
          locator: CBDB:297183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297183）
          source: &a1
            id: s_V4r3VEJE6ghU8AhQU1Wdx5
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 297183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297183&o=json
            external_identifier: CBDB:297183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8MDSabAUn4uMFzFZgUs71u
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言，明人物。嘉靖十四年進士，籍贯內江，曾任都察院右僉都御史。（中国历代人物传记资料库 CBDB 297183）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aJ9km1q5XblXsTmn2rGMms
          claim_id: c_8MDSabAUn4uMFzFZgUs71u
          source_id: s_V4r3VEJE6ghU8AhQU1Wdx5
          stance: supports
          locator: CBDB:297183
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YoUG8ZRIydYcbQq1sbTpwq
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DZwm7RH4zQwJTHWtWTtHUQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpWoKDYHlSQmx1rttif1gS
          claim_id: c_YoUG8ZRIydYcbQq1sbTpwq
          source_id: s_V4r3VEJE6ghU8AhQU1Wdx5
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DZwm7RH4zQwJTHWtWTtHUQ
        status: active
        display_name: 王之臣
        merged_into_person_id: null
    - claim:
        id: c_GUxQYdIvMNektUiF5a3st8
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D4xDmYYxaPbfAow2FpzQSg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kg_xkRk9oRNhthNvrWFT4J
          claim_id: c_GUxQYdIvMNektUiF5a3st8
          source_id: s_FwytMr0jMSo8h_j6B8RY0o
          stance: supports
          locator: CBDB：兄弟 王之臣（202945）之父／母 王一言
          quotation: null
          interpretation_note: 由兄弟关系推断：王鼎臣 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王鼎臣 之父／母。
          source:
            id: s_FwytMr0jMSo8h_j6B8RY0o
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎臣（CBDB 297190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297190&o=json
            external_identifier: CBDB:297190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D4xDmYYxaPbfAow2FpzQSg
        status: active
        display_name: 王鼎臣
        merged_into_person_id: null
    - claim:
        id: c_suiaDzdqDDKhtyNXvERGfN
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QayZfVFckcDP9zKgmPi2Cd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lA6SlFzXiEPo2p5uFiziqH
          claim_id: c_suiaDzdqDDKhtyNXvERGfN
          source_id: s_JdPKfjZ6z6el9URHjfSpEC
          stance: supports
          locator: CBDB：兄弟 王之臣（202945）之父／母 王一言
          quotation: null
          interpretation_note: 由兄弟关系推断：王忠臣 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王忠臣 之父／母。
          source:
            id: s_JdPKfjZ6z6el9URHjfSpEC
            source_type: api_record
            title: 中国历代人物传记资料库：王忠臣（CBDB 297186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297186&o=json
            external_identifier: CBDB:297186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QayZfVFckcDP9zKgmPi2Cd
        status: active
        display_name: 王忠臣
        merged_into_person_id: null
    - claim:
        id: c_tMJGB_nnAD5HBGfLaWTD8-
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VJL8ouDQa1QPkZ39YVSrFW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__avL-89JqcZeQEwOsHkzFM
          claim_id: c_tMJGB_nnAD5HBGfLaWTD8-
          source_id: s_bFVmOS4Gg5c_Yygte2r8Qn
          stance: supports
          locator: CBDB：兄弟 王之臣（202945）之父／母 王一言
          quotation: null
          interpretation_note: 由兄弟关系推断：王堯臣 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王堯臣 之父／母。
          source:
            id: s_bFVmOS4Gg5c_Yygte2r8Qn
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 297189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297189&o=json
            external_identifier: CBDB:297189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VJL8ouDQa1QPkZ39YVSrFW
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
    - claim:
        id: c_jCrHbJNJkQIGEZdXFMac9W
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_djQ1g5S5JzfJ58BkbSikeU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KmOb141f2XeOHLnWVaGb2H
          claim_id: c_jCrHbJNJkQIGEZdXFMac9W
          source_id: s_89_E2PATMBTJTe5LSMd2eq
          stance: supports
          locator: CBDB：兄弟 王之臣（202945）之父／母 王一言
          quotation: null
          interpretation_note: 由兄弟关系推断：王信臣 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王信臣 之父／母。
          source:
            id: s_89_E2PATMBTJTe5LSMd2eq
            source_type: api_record
            title: 中国历代人物传记资料库：王信臣（CBDB 297187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297187&o=json
            external_identifier: CBDB:297187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_djQ1g5S5JzfJ58BkbSikeU
        status: active
        display_name: 王信臣
        merged_into_person_id: null
    - claim:
        id: c_OoOSuvrT79QrZ62udT4Hr9
        subject_person_id: p_AHR15NKctLwCWm6W5TBJEq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zDJoxrgs2naodFzNG3D7Gn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6oFGnmOTZ4lNxCCg2I-Xw1
          claim_id: c_OoOSuvrT79QrZ62udT4Hr9
          source_id: s_0OtuXsrmI42A4cvrr5p2FC
          stance: supports
          locator: CBDB：兄弟 王之臣（202945）之父／母 王一言
          quotation: null
          interpretation_note: 由兄弟关系推断：王襄臣 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王襄臣 之父／母。
          source:
            id: s_0OtuXsrmI42A4cvrr5p2FC
            source_type: api_record
            title: 中国历代人物传记资料库：王襄臣（CBDB 297188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297188&o=json
            external_identifier: CBDB:297188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zDJoxrgs2naodFzNG3D7Gn
        status: active
        display_name: 王襄臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王一言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一言 | accepted |
| bio.summary | 王一言，明人物。嘉靖十四年進士，籍贯內江，曾任都察院右僉都御史。（中国历代人物传记资料库 CBDB 297183） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DZwm7RH4zQwJTHWtWTtHUQ | 王之臣 | accepted |
| children | p_D4xDmYYxaPbfAow2FpzQSg | 王鼎臣 | accepted |
| children | p_QayZfVFckcDP9zKgmPi2Cd | 王忠臣 | accepted |
| children | p_VJL8ouDQa1QPkZ39YVSrFW | 王堯臣 | accepted |
| children | p_djQ1g5S5JzfJ58BkbSikeU | 王信臣 | accepted |
| children | p_zDJoxrgs2naodFzNG3D7Gn | 王襄臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎臣（CBDB 297190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297190&o=json)
- [中国历代人物传记资料库：王襄臣（CBDB 297188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297188&o=json)
- [中国历代人物传记资料库：王信臣（CBDB 297187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297187&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 297189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297189&o=json)
- [中国历代人物传记资料库：王一言（CBDB 297183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297183&o=json)
- [中国历代人物传记资料库：王忠臣（CBDB 297186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297186&o=json)

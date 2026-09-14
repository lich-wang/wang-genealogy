---
schema: wang-person/v1
id: p_XWoQFU6m26umasN1nUqzCk
status: active
merged_into: null
display_name: 王珵
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NaRnBv7kx1bnZzGf4JyuvX
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b9txdR3zA9zHuU4skY2i5k
          claim_id: c_NaRnBv7kx1bnZzGf4JyuvX
          source_id: s_deYoefAHjDfYeJjkkyEFpS
          stance: supports
          locator: CBDB:306919
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306919）
          source: &a1
            id: s_deYoefAHjDfYeJjkkyEFpS
            source_type: api_record
            title: 中国历代人物传记资料库：王珵（CBDB 306919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306919&o=json
            external_identifier: CBDB:306919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ufz4tYkxor4n1uApGC4P4i
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珵，明人物。嘉靖二十三年進士，籍贯陽朔，曾任通判。（中国历代人物传记资料库 CBDB 306919）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wdSBF3v13xHgf1dZnifY0K
          claim_id: c_ufz4tYkxor4n1uApGC4P4i
          source_id: s_deYoefAHjDfYeJjkkyEFpS
          stance: supports
          locator: CBDB:306919
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_CQW9md0ue-p9QiO-TwHfL2
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mj43p62dQVDfJdFrwRMJq5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNDcnV1NaMVnEliiu0r5AY
          claim_id: c_CQW9md0ue-p9QiO-TwHfL2
          source_id: s_Z58o2X71P1Yga6T4xe26Xv
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第六十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z58o2X71P1Yga6T4xe26Xv
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 203587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203587&o=json
            external_identifier: CBDB:203587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mj43p62dQVDfJdFrwRMJq5
        status: active
        display_name: 王學
        merged_into_person_id: null
    - claim:
        id: c_e5bvYZjVEBFq6fye66CP7K
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1ruxvtnFk3xYbrznp37pjw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hPY5qC16UqTvwftnkySO4U
          claim_id: c_e5bvYZjVEBFq6fye66CP7K
          source_id: s_uehzJSy7JfBu5Cf5oHdjQm
          stance: supports
          locator: CBDB：兄弟 王學（203587）之父／母 王珵
          quotation: null
          interpretation_note: 由兄弟关系推断：王問學 与 王學 为同胞（CBDB 记「兄」），王學 之父／母即 王問學 之父／母。
          source:
            id: s_uehzJSy7JfBu5Cf5oHdjQm
            source_type: api_record
            title: 中国历代人物传记资料库：王問學（CBDB 306926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306926&o=json
            external_identifier: CBDB:306926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1ruxvtnFk3xYbrznp37pjw
        status: active
        display_name: 王問學
        merged_into_person_id: null
    - claim:
        id: c_vzMGyNPFNv8mCa2EWO-ES9
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F23fYphen2FH6jcDL7wNMK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYYUiwtOh7wBjcZqxZy0qv
          claim_id: c_vzMGyNPFNv8mCa2EWO-ES9
          source_id: s_bkKt9Xgu9tDcOsj4JHdMqz
          stance: supports
          locator: CBDB：兄弟 王學（203587）之父／母 王珵
          quotation: null
          interpretation_note: 由兄弟关系推断：王勤學 与 王學 为同胞（CBDB 记「弟」），王學 之父／母即 王勤學 之父／母。
          source:
            id: s_bkKt9Xgu9tDcOsj4JHdMqz
            source_type: api_record
            title: 中国历代人物传记资料库：王勤學（CBDB 306923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306923&o=json
            external_identifier: CBDB:306923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F23fYphen2FH6jcDL7wNMK
        status: active
        display_name: 王勤學
        merged_into_person_id: null
    - claim:
        id: c_qwr_Akq08N4_55fBV7J_Nu
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NWhDXjjyvtEHGZoHxxSNy6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C7Sg3sp0D0JHoK0SIXm96X
          claim_id: c_qwr_Akq08N4_55fBV7J_Nu
          source_id: s_CB9YMdMjxDswQoLAHNoXt2
          stance: supports
          locator: CBDB：兄弟 王學（203587）之父／母 王珵
          quotation: null
          interpretation_note: 由兄弟关系推断：王實學 与 王學 为同胞（CBDB 记「兄」），王學 之父／母即 王實學 之父／母。
          source:
            id: s_CB9YMdMjxDswQoLAHNoXt2
            source_type: api_record
            title: 中国历代人物传记资料库：王實學（CBDB 306925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306925&o=json
            external_identifier: CBDB:306925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NWhDXjjyvtEHGZoHxxSNy6
        status: active
        display_name: 王實學
        merged_into_person_id: null
    - claim:
        id: c_43FuC0JAQrQ9ywEFhqrGHw
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qeav4GLvbK5gz38hx7pdce
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0S4Hxeyg6n5P_dfQUDUNr
          claim_id: c_43FuC0JAQrQ9ywEFhqrGHw
          source_id: s_OjOYAPzRa9VVfe_3RyNPFb
          stance: supports
          locator: CBDB：兄弟 王學（203587）之父／母 王珵
          quotation: null
          interpretation_note: 由兄弟关系推断：王好學 与 王學 为同胞（CBDB 记「弟」），王學 之父／母即 王好學 之父／母。
          source:
            id: s_OjOYAPzRa9VVfe_3RyNPFb
            source_type: api_record
            title: 中国历代人物传记资料库：王好學（CBDB 306924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306924&o=json
            external_identifier: CBDB:306924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qeav4GLvbK5gz38hx7pdce
        status: active
        display_name: 王好學
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珵 | accepted |
| bio.summary | 王珵，明人物。嘉靖二十三年進士，籍贯陽朔，曾任通判。（中国历代人物传记资料库 CBDB 306919） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_mj43p62dQVDfJdFrwRMJq5 | 王學 | accepted |
| children | p_1ruxvtnFk3xYbrznp37pjw | 王問學 | accepted |
| children | p_F23fYphen2FH6jcDL7wNMK | 王勤學 | accepted |
| children | p_NWhDXjjyvtEHGZoHxxSNy6 | 王實學 | accepted |
| children | p_Qeav4GLvbK5gz38hx7pdce | 王好學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珵（CBDB 306919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306919&o=json)
- [中国历代人物传记资料库：王好學（CBDB 306924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306924&o=json)
- [中国历代人物传记资料库：王勤學（CBDB 306923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306923&o=json)
- [中国历代人物传记资料库：王實學（CBDB 306925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306925&o=json)
- [中国历代人物传记资料库：王問學（CBDB 306926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306926&o=json)
- [中国历代人物传记资料库：王學（CBDB 203587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203587&o=json)

---
schema: wang-person/v1
id: p_BtPUy8Ayd7XFTp2c4HBHNK
status: active
merged_into: null
display_name: 王榮
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KaVgkAzyKFKRzpYfv5kEuT
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4wj7ytoz2iRAdeWYEgYnZA
          claim_id: c_KaVgkAzyKFKRzpYfv5kEuT
          source_id: s_24eA4fyvhqr7NX93bEWr3B
          stance: supports
          locator: CBDB:221819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221819）
          source: &a1
            id: s_24eA4fyvhqr7NX93bEWr3B
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 221819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221819&o=json
            external_identifier: CBDB:221819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZsC6MESFo3iievHKanRTy1
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221819）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yl6j-7Syx4mzzjdGjyYvrt
          claim_id: c_ZsC6MESFo3iievHKanRTy1
          source_id: s_24eA4fyvhqr7NX93bEWr3B
          stance: supports
          locator: CBDB:221819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dhwpxiAt4qJTwGJeHKn6vq
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xlZLbflc-BzLV_VM54fgXb
          claim_id: c_dhwpxiAt4qJTwGJeHKn6vq
          source_id: s_24eA4fyvhqr7NX93bEWr3B
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qMg6Q8CEPodQMPp2EgjAAi
        status: active
        display_name: 王以通
        merged_into_person_id: null
    - claim:
        id: c_dowZvPZw7yaPXYTcrr3jEM
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FvNGBpFmFGjg8XdjJiMSuX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7MGKWJAMLKtu4-Ae5i6_4
          claim_id: c_dowZvPZw7yaPXYTcrr3jEM
          source_id: s_Q1_-X_1NHkbIfvpv_vgK8x
          stance: supports
          locator: CBDB：兄弟 王以通（206705）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王以道 与 王以通 为同胞（CBDB 记「弟」），王以通 之父／母即 王以道 之父／母。
          source:
            id: s_Q1_-X_1NHkbIfvpv_vgK8x
            source_type: api_record
            title: 中国历代人物传记资料库：王以道（CBDB 221824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221824&o=json
            external_identifier: CBDB:221824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FvNGBpFmFGjg8XdjJiMSuX
        status: active
        display_name: 王以道
        merged_into_person_id: null
    - claim:
        id: c_rZqE0AVmS_IJNp5KGiuIut
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k2Exjy1AEH6WNgAjMikVB8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hfIXf5597FVr7h1BuqdzIY
          claim_id: c_rZqE0AVmS_IJNp5KGiuIut
          source_id: s_8xvXJyEitY3j7i24AGZcJI
          stance: supports
          locator: CBDB：兄弟 王以通（206705）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王以選 与 王以通 为同胞（CBDB 记「兄」），王以通 之父／母即 王以選 之父／母。
          source:
            id: s_8xvXJyEitY3j7i24AGZcJI
            source_type: api_record
            title: 中国历代人物传记资料库：王以選（CBDB 221828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221828&o=json
            external_identifier: CBDB:221828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k2Exjy1AEH6WNgAjMikVB8
        status: active
        display_name: 王以選
        merged_into_person_id: null
    - claim:
        id: c_zftR2J4DCIqFhEnvbK90Cj
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m1vwRj9QZiJwCT2gjJ4qtS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D42kH73XAxtFFaKF34iGjY
          claim_id: c_zftR2J4DCIqFhEnvbK90Cj
          source_id: s_psrESDwd6SuDEMWTPwz3F9
          stance: supports
          locator: CBDB：兄弟 王以通（206705）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王以述 与 王以通 为同胞（CBDB 记「兄」），王以通 之父／母即 王以述 之父／母。
          source:
            id: s_psrESDwd6SuDEMWTPwz3F9
            source_type: api_record
            title: 中国历代人物传记资料库：王以述（CBDB 221826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221826&o=json
            external_identifier: CBDB:221826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m1vwRj9QZiJwCT2gjJ4qtS
        status: active
        display_name: 王以述
        merged_into_person_id: null
    - claim:
        id: c_upjkjluu-O-YYSa4Cd_wY9
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w2CrDojLjguoFVya645ZBC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SEHIYRWLMwG6QrwBpy3A-G
          claim_id: c_upjkjluu-O-YYSa4Cd_wY9
          source_id: s_0QXtJdwz3CV3eYQWgpRMgi
          stance: supports
          locator: CBDB：兄弟 王以通（206705）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王以逸 与 王以通 为同胞（CBDB 记「弟」），王以通 之父／母即 王以逸 之父／母。
          source:
            id: s_0QXtJdwz3CV3eYQWgpRMgi
            source_type: api_record
            title: 中国历代人物传记资料库：王以逸（CBDB 221823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221823&o=json
            external_identifier: CBDB:221823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w2CrDojLjguoFVya645ZBC
        status: active
        display_name: 王以逸
        merged_into_person_id: null
    - claim:
        id: c_2aKBFX5z0SrPjhzAGpEjU-
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xW2aUnUjDzbCx8Aq8j2zFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6e7mDAt7NEl86yWwcMK7Mo
          claim_id: c_2aKBFX5z0SrPjhzAGpEjU-
          source_id: s_-V7k9IemK4uLkY4ksEHwml
          stance: supports
          locator: CBDB：兄弟 王以通（206705）之父／母 王榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王以週 与 王以通 为同胞（CBDB 记「兄」），王以通 之父／母即 王以週 之父／母。
          source:
            id: s_-V7k9IemK4uLkY4ksEHwml
            source_type: api_record
            title: 中国历代人物传记资料库：王以週（CBDB 221825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221825&o=json
            external_identifier: CBDB:221825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xW2aUnUjDzbCx8Aq8j2zFY
        status: active
        display_name: 王以週
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | 王榮，明人物。萬曆八年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 221819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qMg6Q8CEPodQMPp2EgjAAi | 王以通 | accepted |
| children | p_FvNGBpFmFGjg8XdjJiMSuX | 王以道 | accepted |
| children | p_k2Exjy1AEH6WNgAjMikVB8 | 王以選 | accepted |
| children | p_m1vwRj9QZiJwCT2gjJ4qtS | 王以述 | accepted |
| children | p_w2CrDojLjguoFVya645ZBC | 王以逸 | accepted |
| children | p_xW2aUnUjDzbCx8Aq8j2zFY | 王以週 | accepted |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 221819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221819&o=json)
- [中国历代人物传记资料库：王以道（CBDB 221824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221824&o=json)
- [中国历代人物传记资料库：王以述（CBDB 221826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221826&o=json)
- [中国历代人物传记资料库：王以選（CBDB 221828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221828&o=json)
- [中国历代人物传记资料库：王以逸（CBDB 221823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221823&o=json)
- [中国历代人物传记资料库：王以週（CBDB 221825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221825&o=json)

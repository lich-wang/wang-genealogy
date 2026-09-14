---
schema: wang-person/v1
id: p_ax45r2gqCk3bG46hzyK38p
status: active
merged_into: null
display_name: 王璣
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WMaUR8RS32VT43tuKTMeMr
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sLD4zdBszSJTwLrH7MEw9J
          claim_id: c_WMaUR8RS32VT43tuKTMeMr
          source_id: s_VEiJuCDKCars6dXDia88fv
          stance: supports
          locator: CBDB:275661
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（275661）
          source: &a1
            id: s_VEiJuCDKCars6dXDia88fv
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 275661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275661&o=json
            external_identifier: CBDB:275661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2a3VNZYnUZiDGRc1dENzKS
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璣，明人物。弘治十八年進士，籍贯即墨，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 275661）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sLXCURl5U9X_m5N_d8o9Re
          claim_id: c_2a3VNZYnUZiDGRc1dENzKS
          source_id: s_VEiJuCDKCars6dXDia88fv
          stance: supports
          locator: CBDB:275661
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_a0RmZeJbEzwF_Ay1PnXFu1
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LvB1BmafWakeZPFiqa6trK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pvp3J3Wgmc_h0hgdINXur-
          claim_id: c_a0RmZeJbEzwF_Ay1PnXFu1
          source_id: s_VEiJuCDKCars6dXDia88fv
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二百零一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LvB1BmafWakeZPFiqa6trK
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c__fD38m_FCfpPkxKXjht68F
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2XTQk3YrwG9QtLMPvUZk3y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7rv2mXl8cUc6V2f2HYZjPd
          claim_id: c__fD38m_FCfpPkxKXjht68F
          source_id: s_ruXa_5S4cp-SOvWcYa3JP4
          stance: supports
          locator: CBDB：兄弟 王偉（201651）之父／母 王璣
          quotation: null
          interpretation_note: 由兄弟关系推断：王仁 与 王偉 为同胞（CBDB 记「弟」），王偉 之父／母即 王仁 之父／母。
          source:
            id: s_ruXa_5S4cp-SOvWcYa3JP4
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 275665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json
            external_identifier: CBDB:275665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XTQk3YrwG9QtLMPvUZk3y
        status: active
        display_name: 王仁
        merged_into_person_id: null
    - claim:
        id: c_aTnytWarrjbOLupFD0jCPu
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UP7zDrLNWoXaos8XXmeZ3C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EQrGAQ4lgb4N0l8Z_cUcZK
          claim_id: c_aTnytWarrjbOLupFD0jCPu
          source_id: s_gBv0JKC6fEkH7mrn4aRQ08
          stance: supports
          locator: CBDB：兄弟 王偉（201651）之父／母 王璣
          quotation: null
          interpretation_note: 由兄弟关系推断：王仕 与 王偉 为同胞（CBDB 记「兄」），王偉 之父／母即 王仕 之父／母。
          source:
            id: s_gBv0JKC6fEkH7mrn4aRQ08
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 275667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json
            external_identifier: CBDB:275667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UP7zDrLNWoXaos8XXmeZ3C
        status: active
        display_name: 王仕
        merged_into_person_id: null
    - claim:
        id: c_AJC7ZPadcQnxuY7luerWDv
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XR2vLngReApeX9AQ8f6DVq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__U95D2JAwkHCrgHuZ5OZtr
          claim_id: c_AJC7ZPadcQnxuY7luerWDv
          source_id: s_EYLluDsZwzN980HeRrH648
          stance: supports
          locator: CBDB：兄弟 王偉（201651）之父／母 王璣
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王偉 为同胞（CBDB 记「兄」），王偉 之父／母即 王紳 之父／母。
          source:
            id: s_EYLluDsZwzN980HeRrH648
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 275666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275666&o=json
            external_identifier: CBDB:275666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XR2vLngReApeX9AQ8f6DVq
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_5qB2srAY69YE4uSnU7Tjgm
        subject_person_id: p_ax45r2gqCk3bG46hzyK38p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_frRRsYuBAC2BAd33oM9ocj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T1cM6jyJaCozue3mfMJwY8
          claim_id: c_5qB2srAY69YE4uSnU7Tjgm
          source_id: s_MTk4OpvYwRR32WZEf7chiM
          stance: supports
          locator: CBDB：兄弟 王偉（201651）之父／母 王璣
          quotation: null
          interpretation_note: 由兄弟关系推断：王儒 与 王偉 为同胞（CBDB 记「兄」），王偉 之父／母即 王儒 之父／母。
          source:
            id: s_MTk4OpvYwRR32WZEf7chiM
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 275668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275668&o=json
            external_identifier: CBDB:275668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_frRRsYuBAC2BAd33oM9ocj
        status: active
        display_name: 王儒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璣 | accepted |
| bio.summary | 王璣，明人物。弘治十八年進士，籍贯即墨，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 275661） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LvB1BmafWakeZPFiqa6trK | 王偉 | accepted |
| children | p_2XTQk3YrwG9QtLMPvUZk3y | 王仁 | accepted |
| children | p_UP7zDrLNWoXaos8XXmeZ3C | 王仕 | accepted |
| children | p_XR2vLngReApeX9AQ8f6DVq | 王紳 | accepted |
| children | p_frRRsYuBAC2BAd33oM9ocj | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璣（CBDB 275661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275661&o=json)
- [中国历代人物传记资料库：王仁（CBDB 275665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275665&o=json)
- [中国历代人物传记资料库：王儒（CBDB 275668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275668&o=json)
- [中国历代人物传记资料库：王紳（CBDB 275666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275666&o=json)
- [中国历代人物传记资料库：王仕（CBDB 275667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275667&o=json)

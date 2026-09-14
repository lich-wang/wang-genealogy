---
schema: wang-person/v1
id: p_Hw9gy67gpeydJLtoAg5qH1
status: active
merged_into: null
display_name: 王惟正
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sqc1fb36dqNGGK8B5pisKH
        subject_person_id: p_Hw9gy67gpeydJLtoAg5qH1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z5ajC79qTi35TBwSgbrJHj
          claim_id: c_sqc1fb36dqNGGK8B5pisKH
          source_id: s_JEWBJRv8kWcqJsBfpfLGy9
          stance: supports
          locator: CBDB:1916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1916）
          source: &a1
            id: s_JEWBJRv8kWcqJsBfpfLGy9
            source_type: api_record
            title: 中国历代人物传记资料库：王惟正（CBDB 1916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1916&o=json
            external_identifier: CBDB:1916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.396Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8FQaSfMD9NS73QeCf81Md7
        subject_person_id: p_Hw9gy67gpeydJLtoAg5qH1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 972年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YcpaThQFJ2dvUqC9sKVS9V
          claim_id: c_8FQaSfMD9NS73QeCf81Md7
          source_id: s_JEWBJRv8kWcqJsBfpfLGy9
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
        id: c_pt3saxcTLoya2vFtjQc3kz
        subject_person_id: p_Hw9gy67gpeydJLtoAg5qH1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1042年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kDVwhAKCVtHxBxRExsG8KM
          claim_id: c_pt3saxcTLoya2vFtjQc3kz
          source_id: s_JEWBJRv8kWcqJsBfpfLGy9
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
        id: c_kSU2Hn59fFPyyxfUTMMiXc
        subject_person_id: p_Hw9gy67gpeydJLtoAg5qH1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟正（972年—1042年），宋人物。籍贯陽曲，入仕正奏名諸科(不含明經、明法)，曾任殿中省尚衣奉御、司戶參軍、通判。（中国历代人物传记资料库 CBDB 1916）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FSil9nGhLo7l3A_rYcM0zW
          claim_id: c_kSU2Hn59fFPyyxfUTMMiXc
          source_id: s_JEWBJRv8kWcqJsBfpfLGy9
          stance: supports
          locator: CBDB:1916
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xItKSbdm_lBSB-BfdmB3Xs
        subject_person_id: p_1nKt64gGCKiDcB8W4XD12c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hw9gy67gpeydJLtoAg5qH1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a-hmKmnsh6q3w9fM7WCJp8
          claim_id: c_xItKSbdm_lBSB-BfdmB3Xs
          source_id: s_UxH42YMEfHKyZzwykoMUCQ
          stance: supports
          locator: PersonKinshipInfo：子（王惟正）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UxH42YMEfHKyZzwykoMUCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 22181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22181&o=json
            external_identifier: CBDB:22181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1nKt64gGCKiDcB8W4XD12c
        status: active
        display_name: 王恩
        merged_into_person_id: null
  children:
    - claim:
        id: c_WSoJAl3oz0WQ_sT5yrRCZk
        subject_person_id: p_Hw9gy67gpeydJLtoAg5qH1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3DzeUj5KKY2KUxXUDf96hY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eynHW9BWLSTas7LKUXePQJ
          claim_id: c_WSoJAl3oz0WQ_sT5yrRCZk
          source_id: s__XpmD_CUKHNF7145dTVber
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1916）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s__XpmD_CUKHNF7145dTVber
            source_type: api_record
            title: 中国历代人物传记资料库：王桑中（CBDB 37562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37562&o=json
            external_identifier: CBDB:37562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3DzeUj5KKY2KUxXUDf96hY
        status: active
        display_name: 王桑中
        merged_into_person_id: null
    - claim:
        id: c_Zq2ua1PpWysTIxdLpsRpWQ
        subject_person_id: p_Hw9gy67gpeydJLtoAg5qH1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QT8ZUmn3KSrXV43eq9wSsw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YIUGJgaf0mMnBm16MZ7Yym
          claim_id: c_Zq2ua1PpWysTIxdLpsRpWQ
          source_id: s_HDl6ITOgxtl_PolvL3Y14q
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1916）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_HDl6ITOgxtl_PolvL3Y14q
            source_type: api_record
            title: 中国历代人物传记资料库：王執中（CBDB 37561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37561&o=json
            external_identifier: CBDB:37561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QT8ZUmn3KSrXV43eq9wSsw
        status: active
        display_name: 王執中
        merged_into_person_id: null
    - claim:
        id: c_YnAFwcCTaOtN4Q7BM6n5zc
        subject_person_id: p_Hw9gy67gpeydJLtoAg5qH1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t96wegbjJf44k7ip1qSp8G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uV_o6TmoFGEkWH_nfTHzN-
          claim_id: c_YnAFwcCTaOtN4Q7BM6n5zc
          source_id: s_LuEE5XVnRr-Lxfc_a9yn0i
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1916）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_LuEE5XVnRr-Lxfc_a9yn0i
            source_type: api_record
            title: 中国历代人物传记资料库：王敏中（CBDB 37560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37560&o=json
            external_identifier: CBDB:37560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t96wegbjJf44k7ip1qSp8G
        status: active
        display_name: 王敏中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟正 | accepted |
| birth.date | 972年 | accepted |
| death.date | 1042年 | accepted |
| bio.summary | 王惟正（972年—1042年），宋人物。籍贯陽曲，入仕正奏名諸科(不含明經、明法)，曾任殿中省尚衣奉御、司戶參軍、通判。（中国历代人物传记资料库 CBDB 1916） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1nKt64gGCKiDcB8W4XD12c | 王恩 | accepted |
| children | p_3DzeUj5KKY2KUxXUDf96hY | 王桑中 | accepted |
| children | p_QT8ZUmn3KSrXV43eq9wSsw | 王執中 | accepted |
| children | p_t96wegbjJf44k7ip1qSp8G | 王敏中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩（CBDB 22181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22181&o=json)
- [中国历代人物传记资料库：王敏中（CBDB 37560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37560&o=json)
- [中国历代人物传记资料库：王桑中（CBDB 37562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37562&o=json)
- [中国历代人物传记资料库：王惟正（CBDB 1916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1916&o=json)
- [中国历代人物传记资料库：王執中（CBDB 37561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37561&o=json)

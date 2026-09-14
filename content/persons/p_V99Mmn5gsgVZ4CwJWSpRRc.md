---
schema: wang-person/v1
id: p_V99Mmn5gsgVZ4CwJWSpRRc
status: active
merged_into: null
display_name: 王賓
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g8RbUMgNjP367eGSqww4D7
        subject_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zpcEVuFjR54nztGmHXLtbT
          claim_id: c_g8RbUMgNjP367eGSqww4D7
          source_id: s_oGu2BbekNkVYXspZ6FPit7
          stance: supports
          locator: CBDB:199150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199150）
          source: &a1
            id: s_oGu2BbekNkVYXspZ6FPit7
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 199150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199150&o=json
            external_identifier: CBDB:199150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Q3ApqAyxFdkRDZPq4xxw8B
        subject_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1432年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_59cAQJzFNtUPcdr4Bc6xKW
          claim_id: c_Q3ApqAyxFdkRDZPq4xxw8B
          source_id: s_oGu2BbekNkVYXspZ6FPit7
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
        id: c_PGXPtGQ9pRa3j1QKK7ppaC
        subject_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓（生于1432年），明人物。明清進士進士，籍贯淳安，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 199150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7b12OwvmGUqi_GNxuVVlTM
          claim_id: c_PGXPtGQ9pRa3j1QKK7ppaC
          source_id: s_oGu2BbekNkVYXspZ6FPit7
          stance: supports
          locator: CBDB:199150
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DRAKZ6ErGsNFF2ZNy8K-9_
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bCDo3Tm6yREFngpgHA_HTw
          claim_id: c_DRAKZ6ErGsNFF2ZNy8K-9_
          source_id: s_dBrYfWL3BziDyL6Xb7sSXW
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dBrYfWL3BziDyL6Xb7sSXW
            source_type: api_record
            title: 中国历代人物传记资料库：王志善（CBDB 237442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237442&o=json
            external_identifier: CBDB:237442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Lj8WT4nJBhsqQXhWW65SRH
        status: active
        display_name: 王志善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_QjtAWG1ksW0oAhzI8j77sf
        subject_person_id: p_MiEEDBF7PKuPDDgJBY2FPs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J3n8QUMrb8oNxgeQvqcSy4
          claim_id: c_QjtAWG1ksW0oAhzI8j77sf
          source_id: s_ndS7fWEQWiKRFFu2uah7Mh
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ndS7fWEQWiKRFFu2uah7Mh
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 237420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237420&o=json
            external_identifier: CBDB:237420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MiEEDBF7PKuPDDgJBY2FPs
        status: active
        display_name: 王榮
        merged_into_person_id: null
    - claim:
        id: c_ijq9Z3ntOPzXvLUOI178Ka
        subject_person_id: p_R34uSpR6TYLYd5FHAwpGjA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JHNUXyeqxpCZ8Ti24jQhJv
          claim_id: c_ijq9Z3ntOPzXvLUOI178Ka
          source_id: s_XZLb3Kmv4Cy4oZTJXxYEyb
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XZLb3Kmv4Cy4oZTJXxYEyb
            source_type: api_record
            title: 中国历代人物传记资料库：王本宗（CBDB 237431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237431&o=json
            external_identifier: CBDB:237431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_R34uSpR6TYLYd5FHAwpGjA
        status: active
        display_name: 王本宗
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_HmHXaQs_XBX4WpbLdLOE6A
        subject_person_id: p_79DhE7iPhUYkWdDaDLCGK5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7VGbjqitr48POusZgFtbl
          claim_id: c_HmHXaQs_XBX4WpbLdLOE6A
          source_id: s__zOYzfOYWP26grC2HsLVZK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__zOYzfOYWP26grC2HsLVZK
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 237509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237509&o=json
            external_identifier: CBDB:237509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_79DhE7iPhUYkWdDaDLCGK5
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_4rKMzQY5Nzaa_Dj3gKE4PO
        subject_person_id: p_8thUHCr9twjHPLL78tgjMM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TFqkFZ-Yb2NWcGsyRKJvIQ
          claim_id: c_4rKMzQY5Nzaa_Dj3gKE4PO
          source_id: s_jFSISPOeqa7fBI_tay4xTi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jFSISPOeqa7fBI_tay4xTi
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 237542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237542&o=json
            external_identifier: CBDB:237542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8thUHCr9twjHPLL78tgjMM
        status: active
        display_name: 王輔
        merged_into_person_id: null
    - claim:
        id: c_M8ER9Bh7CNUVK-PlrcK9cM
        subject_person_id: p_Shxcwohj84go27TxmbNFKM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p33GXl80HwpbJVRSzg5L3T
          claim_id: c_M8ER9Bh7CNUVK-PlrcK9cM
          source_id: s_bVwJy8sdyQNOvvKWF-IJg3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bVwJy8sdyQNOvvKWF-IJg3
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 237476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237476&o=json
            external_identifier: CBDB:237476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Shxcwohj84go27TxmbNFKM
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_-BZXE6BhCp2nuoQ1l1Gr2K
        subject_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YCkXgKeGc4euiy5P8UKn64
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9_VD953HUcLC1FZ9VkJi0t
          claim_id: c_-BZXE6BhCp2nuoQ1l1Gr2K
          source_id: s_FhP3Gny-71llhhvQYgOS6t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FhP3Gny-71llhhvQYgOS6t
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 237487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237487&o=json
            external_identifier: CBDB:237487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YCkXgKeGc4euiy5P8UKn64
        status: active
        display_name: 王玘
        merged_into_person_id: null
    - claim:
        id: c_x406qmwA2EhexFBSBYxlMf
        subject_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eamNopx9M1CAW2JsQBkgPv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nRT15ZwBh87ej2ZL-8Cwn8
          claim_id: c_x406qmwA2EhexFBSBYxlMf
          source_id: s_ij5Szkn_6Z3tOhrIdfKJGo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ij5Szkn_6Z3tOhrIdfKJGo
            source_type: api_record
            title: 中国历代人物传记资料库：王育（CBDB 237520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237520&o=json
            external_identifier: CBDB:237520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eamNopx9M1CAW2JsQBkgPv
        status: active
        display_name: 王育
        merged_into_person_id: null
    - claim:
        id: c_FR5W_CxQQwDicBZlO71P4H
        subject_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gdiHLnQVRUbfMNBVrFbZD3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7tYjoGgUBqrQkBpQzJkT9
          claim_id: c_FR5W_CxQQwDicBZlO71P4H
          source_id: s_y4u0Z43ZaT2ypMfF6LzLD0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y4u0Z43ZaT2ypMfF6LzLD0
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 237531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237531&o=json
            external_identifier: CBDB:237531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gdiHLnQVRUbfMNBVrFbZD3
        status: active
        display_name: 王誠
        merged_into_person_id: null
    - claim:
        id: c_bP63twTXqtN7d9vNw5Xnpm
        subject_person_id: p_V99Mmn5gsgVZ4CwJWSpRRc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tCEmrmUqz3BJ1fM5JWzVWi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bcKsdz1IpD-nC-u2BytiWt
          claim_id: c_bP63twTXqtN7d9vNw5Xnpm
          source_id: s_NU3OlvqBXQnuvD-Hujd8ji
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199150 王賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NU3OlvqBXQnuvD-Hujd8ji
            source_type: api_record
            title: 中国历代人物传记资料库：王澧（CBDB 237498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237498&o=json
            external_identifier: CBDB:237498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tCEmrmUqz3BJ1fM5JWzVWi
        status: active
        display_name: 王澧
        merged_into_person_id: null
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| birth.date | 1432年 | accepted |
| bio.summary | 王賓（生于1432年），明人物。明清進士進士，籍贯淳安，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 199150） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lj8WT4nJBhsqQXhWW65SRH | 王志善 | accepted |
| ancestors | p_MiEEDBF7PKuPDDgJBY2FPs | 王榮 | accepted |
| ancestors | p_R34uSpR6TYLYd5FHAwpGjA | 王本宗 | accepted |
| other | p_79DhE7iPhUYkWdDaDLCGK5 | 王琳 | accepted |
| other | p_8thUHCr9twjHPLL78tgjMM | 王輔 | accepted |
| other | p_Shxcwohj84go27TxmbNFKM | 王瑞 | accepted |
| other | p_YCkXgKeGc4euiy5P8UKn64 | 王玘 | accepted |
| other | p_eamNopx9M1CAW2JsQBkgPv | 王育 | accepted |
| other | p_gdiHLnQVRUbfMNBVrFbZD3 | 王誠 | accepted |
| other | p_tCEmrmUqz3BJ1fM5JWzVWi | 王澧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本宗（CBDB 237431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237431&o=json)
- [中国历代人物传记资料库：王賓（CBDB 199150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199150&o=json)
- [中国历代人物传记资料库：王誠（CBDB 237531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237531&o=json)
- [中国历代人物传记资料库：王輔（CBDB 237542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237542&o=json)
- [中国历代人物传记资料库：王澧（CBDB 237498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237498&o=json)
- [中国历代人物传记资料库：王琳（CBDB 237509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237509&o=json)
- [中国历代人物传记资料库：王玘（CBDB 237487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237487&o=json)
- [中国历代人物传记资料库：王榮（CBDB 237420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237420&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 237476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237476&o=json)
- [中国历代人物传记资料库：王育（CBDB 237520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237520&o=json)
- [中国历代人物传记资料库：王志善（CBDB 237442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237442&o=json)

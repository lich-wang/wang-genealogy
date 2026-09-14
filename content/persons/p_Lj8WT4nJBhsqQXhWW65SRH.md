---
schema: wang-person/v1
id: p_Lj8WT4nJBhsqQXhWW65SRH
status: active
merged_into: null
display_name: 王志善
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DdQceN7BbqVj8t16gs1qSQ
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6KSGG5XqLmH1mrK7VU6cYB
          claim_id: c_DdQceN7BbqVj8t16gs1qSQ
          source_id: s_dBrYfWL3BziDyL6Xb7sSXW
          stance: supports
          locator: CBDB:237442
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237442）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MZbScjFrj7jzTyRENHsrH7
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志善，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237442）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IuSspP9e9zcBhE7wLh-Kor
          claim_id: c_MZbScjFrj7jzTyRENHsrH7
          source_id: s_dBrYfWL3BziDyL6Xb7sSXW
          stance: supports
          locator: CBDB:237442
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_V99Mmn5gsgVZ4CwJWSpRRc
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_jQUdg3ls5qriZFLzf1pVcS
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_79DhE7iPhUYkWdDaDLCGK5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q02y9i2Q2wRlv4-JywIXYc
          claim_id: c_jQUdg3ls5qriZFLzf1pVcS
          source_id: s__zOYzfOYWP26grC2HsLVZK
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王琳 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王琳 之父／母。
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
        id: c_ZU_Se6KwFvVaT-JXx-7Ew3
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8thUHCr9twjHPLL78tgjMM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bPoS3yvGyETgDxGvzvxQIb
          claim_id: c_ZU_Se6KwFvVaT-JXx-7Ew3
          source_id: s_jFSISPOeqa7fBI_tay4xTi
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王輔 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王輔 之父／母。
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
        id: c_6-FPCfIk7Hb7BYhvKbuSKJ
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Shxcwohj84go27TxmbNFKM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9d_5Lh5wfb9n9OylN5priO
          claim_id: c_6-FPCfIk7Hb7BYhvKbuSKJ
          source_id: s_bVwJy8sdyQNOvvKWF-IJg3
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑞 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王瑞 之父／母。
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
        id: c_dWWhmN2tTs6YAJmSszQV0c
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YCkXgKeGc4euiy5P8UKn64
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3K8iYwxRXckTT8h_PWbUyy
          claim_id: c_dWWhmN2tTs6YAJmSszQV0c
          source_id: s_FhP3Gny-71llhhvQYgOS6t
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王玘 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王玘 之父／母。
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
        id: c_oEIuPPVEhr0sI9SBQNUvye
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eamNopx9M1CAW2JsQBkgPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7PXRarNw5qtBM9hVbVDUb
          claim_id: c_oEIuPPVEhr0sI9SBQNUvye
          source_id: s_ij5Szkn_6Z3tOhrIdfKJGo
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王育 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王育 之父／母。
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
        id: c_aYzuKqgASk7CuVu4iobFvY
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gdiHLnQVRUbfMNBVrFbZD3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X9-K3f-qbE6pR87UjX8h-6
          claim_id: c_aYzuKqgASk7CuVu4iobFvY
          source_id: s_y4u0Z43ZaT2ypMfF6LzLD0
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王誠 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王誠 之父／母。
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
        id: c_x7Acnr2IzBwbrSIRvhzvmk
        subject_person_id: p_Lj8WT4nJBhsqQXhWW65SRH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tCEmrmUqz3BJ1fM5JWzVWi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3lJKPC61KEgJxe-k5e2GTl
          claim_id: c_x7Acnr2IzBwbrSIRvhzvmk
          source_id: s_NU3OlvqBXQnuvD-Hujd8ji
          stance: supports
          locator: CBDB：兄弟 王賓（199150）之父／母 王志善
          quotation: null
          interpretation_note: 由兄弟关系推断：王澧 与 王賓 为同胞（CBDB 记「兄」），王賓 之父／母即 王澧 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志善 | accepted |
| bio.summary | 王志善，明人物。成化二年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 237442） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_V99Mmn5gsgVZ4CwJWSpRRc | 王賓 | accepted |
| children | p_79DhE7iPhUYkWdDaDLCGK5 | 王琳 | accepted |
| children | p_8thUHCr9twjHPLL78tgjMM | 王輔 | accepted |
| children | p_Shxcwohj84go27TxmbNFKM | 王瑞 | accepted |
| children | p_YCkXgKeGc4euiy5P8UKn64 | 王玘 | accepted |
| children | p_eamNopx9M1CAW2JsQBkgPv | 王育 | accepted |
| children | p_gdiHLnQVRUbfMNBVrFbZD3 | 王誠 | accepted |
| children | p_tCEmrmUqz3BJ1fM5JWzVWi | 王澧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 237531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237531&o=json)
- [中国历代人物传记资料库：王輔（CBDB 237542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237542&o=json)
- [中国历代人物传记资料库：王澧（CBDB 237498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237498&o=json)
- [中国历代人物传记资料库：王琳（CBDB 237509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237509&o=json)
- [中国历代人物传记资料库：王玘（CBDB 237487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237487&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 237476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237476&o=json)
- [中国历代人物传记资料库：王育（CBDB 237520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237520&o=json)
- [中国历代人物传记资料库：王志善（CBDB 237442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237442&o=json)

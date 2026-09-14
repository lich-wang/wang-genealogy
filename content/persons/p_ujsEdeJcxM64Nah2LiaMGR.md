---
schema: wang-person/v1
id: p_ujsEdeJcxM64Nah2LiaMGR
status: active
merged_into: null
display_name: 王廷賓
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5dz2eLP2kPQ6FfU5iyUYid
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v89fx4iPgFwg9uG4Y1p4td
          claim_id: c_5dz2eLP2kPQ6FfU5iyUYid
          source_id: s_5SwPAs2RZszpJv1bcgQ8Hk
          stance: supports
          locator: CBDB:273474
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273474）
          source: &a1
            id: s_5SwPAs2RZszpJv1bcgQ8Hk
            source_type: api_record
            title: 中国历代人物传记资料库：王廷賓（CBDB 273474）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273474&o=json
            external_identifier: CBDB:273474
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UfHLguVzSeXXsis2Lut5uw
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷賓，明人物。弘治十八年進士，籍贯瀘州，曾任學正。（中国历代人物传记资料库 CBDB 273474）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2V7EJGElkQzbgyyDNSdWND
          claim_id: c_UfHLguVzSeXXsis2Lut5uw
          source_id: s_5SwPAs2RZszpJv1bcgQ8Hk
          stance: supports
          locator: CBDB:273474
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DIHOYVE_d2jWY4DGsWloXi
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yKlm2Okjs6FBTsoU4IXh9P
          claim_id: c_DIHOYVE_d2jWY4DGsWloXi
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8DtRzDxXopvpFicBdQg4r9
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 201503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json
            external_identifier: CBDB:201503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2Fu5oCqGVWkUyo9rZxcW5L
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_jqGD4XEz2-QxwayFhoNCjZ
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6AGgUBgJL6zMWug8R17AH1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0MmVCTb8gqFhFvP4RvQINo
          claim_id: c_jqGD4XEz2-QxwayFhoNCjZ
          source_id: s_EJs3ZAnqYPURkiLy4RCoFZ
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶 与 王忠 为同胞（CBDB 记「弟」），王忠 之父／母即 王慶 之父／母。
          source:
            id: s_EJs3ZAnqYPURkiLy4RCoFZ
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 273480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273480&o=json
            external_identifier: CBDB:273480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6AGgUBgJL6zMWug8R17AH1
        status: active
        display_name: 王慶
        merged_into_person_id: null
    - claim:
        id: c_0TGx547Pu0nwEBG8rL8z6u
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DYnsDysa5m4Y4KbtXDzFyL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lf3D7j5W8uzGfE8o8IjSel
          claim_id: c_0TGx547Pu0nwEBG8rL8z6u
          source_id: s_WaOqhrGplZKxyDKcRQOhDm
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王愈 与 王忠 为同胞（CBDB 记「兄」），王忠 之父／母即 王愈 之父／母。
          source:
            id: s_WaOqhrGplZKxyDKcRQOhDm
            source_type: api_record
            title: 中国历代人物传记资料库：王愈（CBDB 273486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273486&o=json
            external_identifier: CBDB:273486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DYnsDysa5m4Y4KbtXDzFyL
        status: active
        display_name: 王愈
        merged_into_person_id: null
    - claim:
        id: c_83dRO0KoIkEvIuxoyRxDgR
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nexg3FPbSC1oMjvvKHKAS7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GvQ_kg6y8M9vGV2Nx08CPC
          claim_id: c_83dRO0KoIkEvIuxoyRxDgR
          source_id: s_I8IlbSTiCJgc4VzeA78PiC
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王惠 与 王忠 为同胞（CBDB 记「弟」），王忠 之父／母即 王惠 之父／母。
          source:
            id: s_I8IlbSTiCJgc4VzeA78PiC
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 273481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273481&o=json
            external_identifier: CBDB:273481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nexg3FPbSC1oMjvvKHKAS7
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_cHFUt2qLsaLCePjNEBzl1H
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Zppn462BPbELVFrEbxoebn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D64eGkyRBUomH4Ieeop754
          claim_id: c_cHFUt2qLsaLCePjNEBzl1H
          source_id: s_GDXN29tpj6hZrhrWetujsY
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王忠 为同胞（CBDB 记「兄」），王忠 之父／母即 王寧 之父／母。
          source:
            id: s_GDXN29tpj6hZrhrWetujsY
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 273484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273484&o=json
            external_identifier: CBDB:273484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zppn462BPbELVFrEbxoebn
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_ypf9aMg9Y0-Bv_W2YSCrIV
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gkQAN2qUqRaM9G93xfQ4FR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fQW_ABkQYEQWZJJWwgEA53
          claim_id: c_ypf9aMg9Y0-Bv_W2YSCrIV
          source_id: s_sn8jbaHoJt7NPjjTax5KMM
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲 与 王忠 为同胞（CBDB 记「弟」），王忠 之父／母即 王憲 之父／母。
          source:
            id: s_sn8jbaHoJt7NPjjTax5KMM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 273479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273479&o=json
            external_identifier: CBDB:273479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gkQAN2qUqRaM9G93xfQ4FR
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_nC9Tb6ZtizFZDySL7j4KF9
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gyFYsTP81AGCkV7JXvNyLJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_09wQ_mgZcJPqZrhmbuyYen
          claim_id: c_nC9Tb6ZtizFZDySL7j4KF9
          source_id: s_xTE8AP3kJTeAhzATYHSS-6
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王意 与 王忠 为同胞（CBDB 记「兄」），王忠 之父／母即 王意 之父／母。
          source:
            id: s_xTE8AP3kJTeAhzATYHSS-6
            source_type: api_record
            title: 中国历代人物传记资料库：王意（CBDB 273485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273485&o=json
            external_identifier: CBDB:273485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyFYsTP81AGCkV7JXvNyLJ
        status: active
        display_name: 王意
        merged_into_person_id: null
    - claim:
        id: c_ixUfqsBkNJAXg5_lgHw0Nx
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oj7GmWXJ5DnZnWe1Rj6445
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VzmgZvLiLakR3Tvw4Nv_de
          claim_id: c_ixUfqsBkNJAXg5_lgHw0Nx
          source_id: s_tqlHUle6LVhZzOiMydS4QK
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王恩 与 王忠 为同胞（CBDB 记「弟」），王忠 之父／母即 王恩 之父／母。
          source:
            id: s_tqlHUle6LVhZzOiMydS4QK
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 273482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273482&o=json
            external_identifier: CBDB:273482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oj7GmWXJ5DnZnWe1Rj6445
        status: active
        display_name: 王恩
        merged_into_person_id: null
    - claim:
        id: c_c6gIF4R9JPjOZ1DVCk_W9o
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v5PJWMe91mKCCnquhKxCRh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6_92Xv6Qb3TIfqpoKa_9KU
          claim_id: c_c6gIF4R9JPjOZ1DVCk_W9o
          source_id: s_b2tlvW2wTru_MJlzjhqb9s
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王愛 与 王忠 为同胞（CBDB 记「弟」），王忠 之父／母即 王愛 之父／母。
          source:
            id: s_b2tlvW2wTru_MJlzjhqb9s
            source_type: api_record
            title: 中国历代人物传记资料库：王愛（CBDB 273478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273478&o=json
            external_identifier: CBDB:273478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v5PJWMe91mKCCnquhKxCRh
        status: active
        display_name: 王愛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷賓 | accepted |
| bio.summary | 王廷賓，明人物。弘治十八年進士，籍贯瀘州，曾任學正。（中国历代人物传记资料库 CBDB 273474） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2Fu5oCqGVWkUyo9rZxcW5L | 王忠 | accepted |
| children | p_6AGgUBgJL6zMWug8R17AH1 | 王慶 | accepted |
| children | p_DYnsDysa5m4Y4KbtXDzFyL | 王愈 | accepted |
| children | p_Nexg3FPbSC1oMjvvKHKAS7 | 王惠 | accepted |
| children | p_Zppn462BPbELVFrEbxoebn | 王寧 | accepted |
| children | p_gkQAN2qUqRaM9G93xfQ4FR | 王憲 | accepted |
| children | p_gyFYsTP81AGCkV7JXvNyLJ | 王意 | accepted |
| children | p_oj7GmWXJ5DnZnWe1Rj6445 | 王恩 | accepted |
| children | p_v5PJWMe91mKCCnquhKxCRh | 王愛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愛（CBDB 273478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273478&o=json)
- [中国历代人物传记资料库：王恩（CBDB 273482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273482&o=json)
- [中国历代人物传记资料库：王惠（CBDB 273481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273481&o=json)
- [中国历代人物传记资料库：王寧（CBDB 273484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273484&o=json)
- [中国历代人物传记资料库：王慶（CBDB 273480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273480&o=json)
- [中国历代人物传记资料库：王廷賓（CBDB 273474）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273474&o=json)
- [中国历代人物传记资料库：王憲（CBDB 273479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273479&o=json)
- [中国历代人物传记资料库：王意（CBDB 273485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273485&o=json)
- [中国历代人物传记资料库：王愈（CBDB 273486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273486&o=json)
- [中国历代人物传记资料库：王忠（CBDB 201503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json)

---
schema: wang-person/v1
id: p_tz8uWFvWRBpp9FN5sbMR5o
status: active
merged_into: null
display_name: 王希文
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DDYHy9vvJa1eQju3Tc7eMN
        subject_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pSeWwuAuNXXFqfdcA9731t
          claim_id: c_DDYHy9vvJa1eQju3Tc7eMN
          source_id: s_TEFTzJxNAFBCXHtQgGm7CM
          stance: supports
          locator: CBDB:126543
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126543）
          source: &a1
            id: s_TEFTzJxNAFBCXHtQgGm7CM
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 126543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126543&o=json
            external_identifier: CBDB:126543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TsqQdgaHM6AAhBhGPTFt4L
        subject_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希文，明人物。明清進士進士，籍贯東莞，入仕進士，曾任刑科給事中。（中国历代人物传记资料库 CBDB 126543）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bcMM1vyxSE6Jx-lT0B0gnB
          claim_id: c_TsqQdgaHM6AAhBhGPTFt4L
          source_id: s_TEFTzJxNAFBCXHtQgGm7CM
          stance: supports
          locator: CBDB:126543
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_X1S3tBzMEuQmuVpgGlzdSl
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jf0nGw9jcW64AUseOzo6xi
          claim_id: c_X1S3tBzMEuQmuVpgGlzdSl
          source_id: s_inZkojFBAoF4MMfshXhVU4
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_inZkojFBAoF4MMfshXhVU4
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 287977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287977&o=json
            external_identifier: CBDB:287977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4jND336KsTQjFJcBTReoib
        status: active
        display_name: 王瑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_P-XTSX69Gb8INfeClovj4-
        subject_person_id: p_9cYrmMQ3HD8vqsdCdxsQUk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_toFrO6mRDzZaHPS5qMwzH-
          claim_id: c_P-XTSX69Gb8INfeClovj4-
          source_id: s_1tLFMF54z72b2Kqa9U8Nhn
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1tLFMF54z72b2Kqa9U8Nhn
            source_type: api_record
            title: 中国历代人物传记资料库：王里寶（CBDB 287975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287975&o=json
            external_identifier: CBDB:287975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_9cYrmMQ3HD8vqsdCdxsQUk
        status: active
        display_name: 王里寶
        merged_into_person_id: null
    - claim:
        id: c_1DjSj6HI9wAY-Ec0-ZGZas
        subject_person_id: p_o5GypCWM36MugZUaK6zcyv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VChMLcAfkWI-kARwe36r3e
          claim_id: c_1DjSj6HI9wAY-Ec0-ZGZas
          source_id: s_yjpSEGNz5hu4g6N5yARsVj
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yjpSEGNz5hu4g6N5yARsVj
            source_type: api_record
            title: 中国历代人物传记资料库：王惇信（CBDB 287976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287976&o=json
            external_identifier: CBDB:287976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_o5GypCWM36MugZUaK6zcyv
        status: active
        display_name: 王惇信
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_2wWdrV904iu5-EXUKtw7_U
        subject_person_id: p_7NAyU2j6Ue5njG5i41Q9z5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N0A9hHMYn0Vv4k9RVfawMZ
          claim_id: c_2wWdrV904iu5-EXUKtw7_U
          source_id: s_K-2IolExj0n4lXDsphh26R
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K-2IolExj0n4lXDsphh26R
            source_type: api_record
            title: 中国历代人物传记资料库：王世昭（CBDB 287983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287983&o=json
            external_identifier: CBDB:287983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7NAyU2j6Ue5njG5i41Q9z5
        status: active
        display_name: 王世昭
        merged_into_person_id: null
    - claim:
        id: c_aHkWZg44mhlgS8LYQLalhZ
        subject_person_id: p_DMfh1RSYuF5K9amD5CBFWW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_88ctCtkL5bezUtoHHC0mwV
          claim_id: c_aHkWZg44mhlgS8LYQLalhZ
          source_id: s_Yj9lekE65aMTe_fk3LEd1D
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Yj9lekE65aMTe_fk3LEd1D
            source_type: api_record
            title: 中国历代人物传记资料库：王希夷（CBDB 287981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287981&o=json
            external_identifier: CBDB:287981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DMfh1RSYuF5K9amD5CBFWW
        status: active
        display_name: 王希夷
        merged_into_person_id: null
    - claim:
        id: c_1UCfJ8xGeQqmTpCrk4wFWH
        subject_person_id: p_PZHVQD4iVHL1xh8QKphQB7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s6VmvmafuX1VYwx-qMDTgj
          claim_id: c_1UCfJ8xGeQqmTpCrk4wFWH
          source_id: s_IWf7a9l76EhTM9Vc8C8bLV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IWf7a9l76EhTM9Vc8C8bLV
            source_type: api_record
            title: 中国历代人物传记资料库：王希顏（CBDB 287988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287988&o=json
            external_identifier: CBDB:287988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PZHVQD4iVHL1xh8QKphQB7
        status: active
        display_name: 王希顏
        merged_into_person_id: null
    - claim:
        id: c_sr5Vd8r4egae3eIIASmnzE
        subject_person_id: p_WAgRSUKR3HxEKJJQ2dGsUM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iy1xrSi70sf8j3phPuBpiJ
          claim_id: c_sr5Vd8r4egae3eIIASmnzE
          source_id: s_GMk0EPC00rjfQlnsVKM2gt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GMk0EPC00rjfQlnsVKM2gt
            source_type: api_record
            title: 中国历代人物传记资料库：王世熙（CBDB 287989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287989&o=json
            external_identifier: CBDB:287989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WAgRSUKR3HxEKJJQ2dGsUM
        status: active
        display_name: 王世熙
        merged_into_person_id: null
    - claim:
        id: c_imR0V4-TTzDSGAvbh2fM3N
        subject_person_id: p_c3oQpqEbmM3ZGbK4rFPP4x
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fjz05dlCPGut7gEwF3hl2x
          claim_id: c_imR0V4-TTzDSGAvbh2fM3N
          source_id: s_6rpskIMqJlHGgdQPDJjIgj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6rpskIMqJlHGgdQPDJjIgj
            source_type: api_record
            title: 中国历代人物传记资料库：王世清（CBDB 287982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287982&o=json
            external_identifier: CBDB:287982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c3oQpqEbmM3ZGbK4rFPP4x
        status: active
        display_name: 王世清
        merged_into_person_id: null
    - claim:
        id: c_Le9o6nVzM40GMlypBx3A-S
        subject_person_id: p_ddM5Qh65sCgaYKcg1zCuPt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UWrY2n0cWB5I4ZSe_leUxP
          claim_id: c_Le9o6nVzM40GMlypBx3A-S
          source_id: s_2oEV-5Gw-aRdsytt1tZR4X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2oEV-5Gw-aRdsytt1tZR4X
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 287990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287990&o=json
            external_identifier: CBDB:287990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ddM5Qh65sCgaYKcg1zCuPt
        status: active
        display_name: 王希孟
        merged_into_person_id: null
    - claim:
        id: c_nR4cq-V-0mHBvI_AJXV1AL
        subject_person_id: p_eS1ERwXKFwBXswLMauLtn9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3fZiy2Z-rQ8fY88R1fiImO
          claim_id: c_nR4cq-V-0mHBvI_AJXV1AL
          source_id: s_SnKP_2QQEVvslT_QP320KV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SnKP_2QQEVvslT_QP320KV
            source_type: api_record
            title: 中国历代人物传记资料库：王希齊（CBDB 287987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287987&o=json
            external_identifier: CBDB:287987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eS1ERwXKFwBXswLMauLtn9
        status: active
        display_name: 王希齊
        merged_into_person_id: null
    - claim:
        id: c_qZnoxGUUZ8pFA9vCx5ahr6
        subject_person_id: p_tz8uWFvWRBpp9FN5sbMR5o
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uX2KpxGbcgw62fRXQ2HTZj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2PZ1dMi7YgdnwGKjP_fns8
          claim_id: c_qZnoxGUUZ8pFA9vCx5ahr6
          source_id: s_9ky44v1zplik9WMxeE8ECX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126543 王希文）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9ky44v1zplik9WMxeE8ECX
            source_type: api_record
            title: 中国历代人物传记资料库：王世彰（CBDB 287986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287986&o=json
            external_identifier: CBDB:287986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uX2KpxGbcgw62fRXQ2HTZj
        status: active
        display_name: 王世彰
        merged_into_person_id: null
---

# 王希文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希文 | accepted |
| bio.summary | 王希文，明人物。明清進士進士，籍贯東莞，入仕進士，曾任刑科給事中。（中国历代人物传记资料库 CBDB 126543） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4jND336KsTQjFJcBTReoib | 王瑄 | accepted |
| ancestors | p_9cYrmMQ3HD8vqsdCdxsQUk | 王里寶 | accepted |
| ancestors | p_o5GypCWM36MugZUaK6zcyv | 王惇信 | accepted |
| other | p_7NAyU2j6Ue5njG5i41Q9z5 | 王世昭 | accepted |
| other | p_DMfh1RSYuF5K9amD5CBFWW | 王希夷 | accepted |
| other | p_PZHVQD4iVHL1xh8QKphQB7 | 王希顏 | accepted |
| other | p_WAgRSUKR3HxEKJJQ2dGsUM | 王世熙 | accepted |
| other | p_c3oQpqEbmM3ZGbK4rFPP4x | 王世清 | accepted |
| other | p_ddM5Qh65sCgaYKcg1zCuPt | 王希孟 | accepted |
| other | p_eS1ERwXKFwBXswLMauLtn9 | 王希齊 | accepted |
| other | p_uX2KpxGbcgw62fRXQ2HTZj | 王世彰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惇信（CBDB 287976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287976&o=json)
- [中国历代人物传记资料库：王里寶（CBDB 287975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287975&o=json)
- [中国历代人物传记资料库：王世清（CBDB 287982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287982&o=json)
- [中国历代人物传记资料库：王世熙（CBDB 287989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287989&o=json)
- [中国历代人物传记资料库：王世彰（CBDB 287986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287986&o=json)
- [中国历代人物传记资料库：王世昭（CBDB 287983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287983&o=json)
- [中国历代人物传记资料库：王希孟（CBDB 287990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287990&o=json)
- [中国历代人物传记资料库：王希齊（CBDB 287987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287987&o=json)
- [中国历代人物传记资料库：王希文（CBDB 126543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126543&o=json)
- [中国历代人物传记资料库：王希顏（CBDB 287988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287988&o=json)
- [中国历代人物传记资料库：王希夷（CBDB 287981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287981&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 287977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287977&o=json)

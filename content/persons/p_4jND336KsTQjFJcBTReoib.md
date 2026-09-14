---
schema: wang-person/v1
id: p_4jND336KsTQjFJcBTReoib
status: active
merged_into: null
display_name: 王瑄
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4XjbpJaMbuJMrN6wxk6Bdq
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VCq1MMsuj9RnTLbDDs29e2
          claim_id: c_4XjbpJaMbuJMrN6wxk6Bdq
          source_id: s_inZkojFBAoF4MMfshXhVU4
          stance: supports
          locator: CBDB:287977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287977）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NMe1mD2x6uGjJAWt2LxEWw
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。嘉靖八年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 287977）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LgBXS6om9UdjOnBHss6FWm
          claim_id: c_NMe1mD2x6uGjJAWt2LxEWw
          source_id: s_inZkojFBAoF4MMfshXhVU4
          stance: supports
          locator: CBDB:287977
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_tz8uWFvWRBpp9FN5sbMR5o
        status: active
        display_name: 王希文
        merged_into_person_id: null
    - claim:
        id: c_1uV7zxvsP9xQgGEyy-C2qE
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7NAyU2j6Ue5njG5i41Q9z5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U9dOmvoyAnUFDoB1h9ZUMP
          claim_id: c_1uV7zxvsP9xQgGEyy-C2qE
          source_id: s_K-2IolExj0n4lXDsphh26R
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王世昭 与 王希文 为同胞（CBDB 记「弟」），王希文 之父／母即 王世昭 之父／母。
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
        id: c_ls4DwQk15Gc96j0mnBveu0
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DMfh1RSYuF5K9amD5CBFWW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zJapIf5OYK4UDM2A8VLv_H
          claim_id: c_ls4DwQk15Gc96j0mnBveu0
          source_id: s_Yj9lekE65aMTe_fk3LEd1D
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王希夷 与 王希文 为同胞（CBDB 记「弟」），王希文 之父／母即 王希夷 之父／母。
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
        id: c_m7Vaik2ZZQbnWAU2U5f5Zt
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PZHVQD4iVHL1xh8QKphQB7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kSLtqCgUZL2OOSSF0QUpF
          claim_id: c_m7Vaik2ZZQbnWAU2U5f5Zt
          source_id: s_IWf7a9l76EhTM9Vc8C8bLV
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王希顏 与 王希文 为同胞（CBDB 记「弟」），王希文 之父／母即 王希顏 之父／母。
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
        id: c_LtBg37PJfZLTLwNdCtY1HN
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WAgRSUKR3HxEKJJQ2dGsUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8scIjJBuEKpffOhBF4hSLm
          claim_id: c_LtBg37PJfZLTLwNdCtY1HN
          source_id: s_GMk0EPC00rjfQlnsVKM2gt
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王世熙 与 王希文 为同胞（CBDB 记「兄」），王希文 之父／母即 王世熙 之父／母。
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
        id: c_jcYkm7GLUw6AttprzLd8cS
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c3oQpqEbmM3ZGbK4rFPP4x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gE6qq9ARfVSEp85zW4tyns
          claim_id: c_jcYkm7GLUw6AttprzLd8cS
          source_id: s_6rpskIMqJlHGgdQPDJjIgj
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王世清 与 王希文 为同胞（CBDB 记「弟」），王希文 之父／母即 王世清 之父／母。
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
        id: c_N_f7UNgnC0HIj2oT3qAq6Z
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ddM5Qh65sCgaYKcg1zCuPt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xlN1pEhw5cNvTwUUUgNmO1
          claim_id: c_N_f7UNgnC0HIj2oT3qAq6Z
          source_id: s_2oEV-5Gw-aRdsytt1tZR4X
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王希孟 与 王希文 为同胞（CBDB 记「兄」），王希文 之父／母即 王希孟 之父／母。
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
        id: c_wk_nBZ7mh-Pyt06Xo_E9BX
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eS1ERwXKFwBXswLMauLtn9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xqUTBtx6THXWCm2PVP0KBS
          claim_id: c_wk_nBZ7mh-Pyt06Xo_E9BX
          source_id: s_SnKP_2QQEVvslT_QP320KV
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王希齊 与 王希文 为同胞（CBDB 记「弟」），王希文 之父／母即 王希齊 之父／母。
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
        id: c_FAhyUesvbTtpyggipikhxd
        subject_person_id: p_4jND336KsTQjFJcBTReoib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uX2KpxGbcgw62fRXQ2HTZj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eRpI7XPK8B5c9nszLM8vct
          claim_id: c_FAhyUesvbTtpyggipikhxd
          source_id: s_9ky44v1zplik9WMxeE8ECX
          stance: supports
          locator: CBDB：兄弟 王希文（126543）之父／母 王瑄
          quotation: null
          interpretation_note: 由兄弟关系推断：王世彰 与 王希文 为同胞（CBDB 记「弟」），王希文 之父／母即 王世彰 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。嘉靖八年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 287977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tz8uWFvWRBpp9FN5sbMR5o | 王希文 | accepted |
| children | p_7NAyU2j6Ue5njG5i41Q9z5 | 王世昭 | accepted |
| children | p_DMfh1RSYuF5K9amD5CBFWW | 王希夷 | accepted |
| children | p_PZHVQD4iVHL1xh8QKphQB7 | 王希顏 | accepted |
| children | p_WAgRSUKR3HxEKJJQ2dGsUM | 王世熙 | accepted |
| children | p_c3oQpqEbmM3ZGbK4rFPP4x | 王世清 | accepted |
| children | p_ddM5Qh65sCgaYKcg1zCuPt | 王希孟 | accepted |
| children | p_eS1ERwXKFwBXswLMauLtn9 | 王希齊 | accepted |
| children | p_uX2KpxGbcgw62fRXQ2HTZj | 王世彰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世清（CBDB 287982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287982&o=json)
- [中国历代人物传记资料库：王世熙（CBDB 287989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287989&o=json)
- [中国历代人物传记资料库：王世彰（CBDB 287986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287986&o=json)
- [中国历代人物传记资料库：王世昭（CBDB 287983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287983&o=json)
- [中国历代人物传记资料库：王希孟（CBDB 287990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287990&o=json)
- [中国历代人物传记资料库：王希齊（CBDB 287987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287987&o=json)
- [中国历代人物传记资料库：王希顏（CBDB 287988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287988&o=json)
- [中国历代人物传记资料库：王希夷（CBDB 287981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287981&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 287977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287977&o=json)

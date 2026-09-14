---
schema: wang-person/v1
id: p_KzB2C1aLBuDGmUVnrc9So3
status: active
merged_into: null
display_name: 王珪
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vNeJZQXdzps5DxhGa9wwAr
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9oMYrPBWUwwPS3ceLs1JPf
          claim_id: c_vNeJZQXdzps5DxhGa9wwAr
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
          stance: supports
          locator: CBDB:1845
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1845）
          source: &a1
            id: s_FNLuB5DJx6UNnRbHaEHKpA
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 1845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1845&o=json
            external_identifier: CBDB:1845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1xQfT9gVvmBaAcvjua3TLf
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1019年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zjb2b3LMkyKDrGZNBqXCwC
          claim_id: c_1xQfT9gVvmBaAcvjua3TLf
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
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
        id: c_dL9FmhhmH62496SJf6eXHv
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1085年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L3qFD7ESVCAtUiq3s91HiQ
          claim_id: c_dL9FmhhmH62496SJf6eXHv
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
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
        id: c_NKo4DdZ1qSTh1ENydfsc4j
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪（1019年—1085年），宋人物。籍贯東明，身份为入元祐黨籍者，入仕進士，曾任門下侍郎、提舉在京諸司、參知政事。（中国历代人物传记资料库 CBDB 1845）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8KOwPc6Mbq_3joQJ19knTT
          claim_id: c_NKo4DdZ1qSTh1ENydfsc4j
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
          stance: supports
          locator: CBDB:1845
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W4c3PUGTp0N-oifDQReK-B
        subject_person_id: p_qtbxt55gw7F1hTWtEuCisP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zI80h0k7-q0gnJau-wFUHp
          claim_id: c_W4c3PUGTp0N-oifDQReK-B
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，833;836：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qtbxt55gw7F1hTWtEuCisP
        status: active
        display_name: 王準
        merged_into_person_id: null
  children:
    - claim:
        id: c_EV29TxuSBrQEuKSGi4gvsG
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LcDFK2jg5Pshjk7BATBHA9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5tRt1rsYdC_DCu0WjY8_Lv
          claim_id: c_EV29TxuSBrQEuKSGi4gvsG
          source_id: s_2V8Pa5pTOpP931RbnKk0vg
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1845）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_2V8Pa5pTOpP931RbnKk0vg
            source_type: api_record
            title: 中国历代人物传记资料库：王仲端（CBDB 3944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3944&o=json
            external_identifier: CBDB:3944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LcDFK2jg5Pshjk7BATBHA9
        status: active
        display_name: 王仲端
        merged_into_person_id: null
    - claim:
        id: c_2S9XDThdbbOnmyzl5ZiWTt
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TU7g5GRwzHkJGqEJiGHBCN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_lvOwfHQiOvVXYzxdCYw_GG
          claim_id: c_2S9XDThdbbOnmyzl5ZiWTt
          source_id: s_TPEIEqpHPNWjd52BBMdBKG
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1845）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_TPEIEqpHPNWjd52BBMdBKG
            source_type: api_record
            title: 中国历代人物传记资料库：王仲修（CBDB 17934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17934&o=json
            external_identifier: CBDB:17934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TU7g5GRwzHkJGqEJiGHBCN
        status: active
        display_name: 王仲修
        merged_into_person_id: null
    - claim:
        id: c_4XtgcOkwhvqyvX3vuULf9D
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WykbGmfjqmk3M9dUxRJbE3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FdwilDO4QX1cydvSc4gOvq
          claim_id: c_4XtgcOkwhvqyvX3vuULf9D
          source_id: s_zWt3HV-dsQl3479QAGuDoK
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1845）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_zWt3HV-dsQl3479QAGuDoK
            source_type: api_record
            title: 中国历代人物传记资料库：王仲嶷（CBDB 7373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7373&o=json
            external_identifier: CBDB:7373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WykbGmfjqmk3M9dUxRJbE3
        status: active
        display_name: 王仲嶷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_jdCha5D0hKTWs84EZhBoP3
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wFAf7mtDmixKTWRc67Dcqf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sb2JRfMhWRx71bl_oUveWJ
          claim_id: c_jdCha5D0hKTWs84EZhBoP3
          source_id: s_m259RK7Gsxe6ypFl1DUOzo
          stance: supports
          locator: 宋人傳記資料索引(電子版)，833;840：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m259RK7Gsxe6ypFl1DUOzo
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王珪妻)（CBDB 38312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38312&o=json
            external_identifier: CBDB:38312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wFAf7mtDmixKTWRc67Dcqf
        status: active
        display_name: 鄭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_vtiUXRLTVfBWNOFR1Nqxvu
        subject_person_id: p_PNfmbNyKR2auC4aeL1AuSM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_axQskM6V53IhT6gHYPf8Ff
          claim_id: c_vtiUXRLTVfBWNOFR1Nqxvu
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，579：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PNfmbNyKR2auC4aeL1AuSM
        status: active
        display_name: 王永
        merged_into_person_id: null
    - claim:
        id: c_VJvR67JW1O8oaqR1Qo6b_h
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Sbohii06Ep3i4o91u53UL
          claim_id: c_VJvR67JW1O8oaqR1Qo6b_h
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，833;834：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QZHN7XBFLhdEfKGuEPQEhp
        status: active
        display_name: 王贄
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_8kvzEjBOxVn4veEnieLoS0
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4cye1JFWBJQv2VQjyoi17i
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3bvTGNDRUtinthcPVdMNc8
          claim_id: c_8kvzEjBOxVn4veEnieLoS0
          source_id: s_ZgyH83hJEC3GCk1HRZreAC
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZgyH83hJEC3GCk1HRZreAC
            source_type: api_record
            title: 中国历代人物传记资料库：王㬇（CBDB 1820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1820&o=json
            external_identifier: CBDB:1820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4cye1JFWBJQv2VQjyoi17i
        status: active
        display_name: 王㬇
        merged_into_person_id: null
    - claim:
        id: c_4JJ23hk-tr9_zbneDVdAFD
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_b4E11ABxwSj7bii7KnUjFs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2GMSYRYuyaPw150_MogdtN
          claim_id: c_4JJ23hk-tr9_zbneDVdAFD
          source_id: s_1r7K3EJ69DfcMV5VAcZMjT
          stance: supports
          locator: CBDB 双向互证（祖父 王珪 ⇄ 孫 王晟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_1r7K3EJ69DfcMV5VAcZMjT
            source_type: api_record
            title: 中国历代人物传记资料库：王晟（CBDB 1869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1869&o=json
            external_identifier: CBDB:1869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b4E11ABxwSj7bii7KnUjFs
        status: active
        display_name: 王晟
        merged_into_person_id: null
  other:
    - claim:
        id: c_bD4wQAVZ-q0w0yo4uZ2YhP
        subject_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dLJFAnfJrQyBMnZwWu6J97
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a_KbRCrw5tdRGpcVZ80qPU
          claim_id: c_bD4wQAVZ-q0w0yo4uZ2YhP
          source_id: s_i4NULKPGy8lzfUol6x-a2V
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 1845 王珪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_i4NULKPGy8lzfUol6x-a2V
            source_type: api_record
            title: 中国历代人物传记资料库：王瓘（CBDB 45854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45854&o=json
            external_identifier: CBDB:45854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dLJFAnfJrQyBMnZwWu6J97
        status: active
        display_name: 王瓘
        merged_into_person_id: null
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| birth.date | 1019年 | accepted |
| death.date | 1085年 | accepted |
| bio.summary | 王珪（1019年—1085年），宋人物。籍贯東明，身份为入元祐黨籍者，入仕進士，曾任門下侍郎、提舉在京諸司、參知政事。（中国历代人物传记资料库 CBDB 1845） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qtbxt55gw7F1hTWtEuCisP | 王準 | accepted |
| children | p_LcDFK2jg5Pshjk7BATBHA9 | 王仲端 | accepted |
| children | p_TU7g5GRwzHkJGqEJiGHBCN | 王仲修 | accepted |
| children | p_WykbGmfjqmk3M9dUxRJbE3 | 王仲嶷 | accepted |
| spouses | p_wFAf7mtDmixKTWRc67Dcqf | 鄭氏 | accepted |
| ancestors | p_PNfmbNyKR2auC4aeL1AuSM | 王永 | accepted |
| ancestors | p_QZHN7XBFLhdEfKGuEPQEhp | 王贄 | accepted |
| descendants | p_4cye1JFWBJQv2VQjyoi17i | 王㬇 | accepted |
| descendants | p_b4E11ABxwSj7bii7KnUjFs | 王晟 | accepted |
| other | p_dLJFAnfJrQyBMnZwWu6J97 | 王瓘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晟（CBDB 1869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1869&o=json)
- [中国历代人物传记资料库：王瓘（CBDB 45854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45854&o=json)
- [中国历代人物传记资料库：王珪（CBDB 1845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1845&o=json)
- [中国历代人物传记资料库：王仲端（CBDB 3944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3944&o=json)
- [中国历代人物传记资料库：王仲修（CBDB 17934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17934&o=json)
- [中国历代人物传记资料库：王仲嶷（CBDB 7373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7373&o=json)
- [中国历代人物传记资料库：王㬇（CBDB 1820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1820&o=json)
- [中国历代人物传记资料库：鄭氏(王珪妻)（CBDB 38312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38312&o=json)

---
schema: wang-person/v1
id: p_cBGCXtQ6wkhv554viPc99n
status: active
merged_into: null
display_name: 王文德
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h76jxEYNbvTHQBQ8HRivKX
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W2cELxje4AGYedJuNqGU1R
          claim_id: c_h76jxEYNbvTHQBQ8HRivKX
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: CBDB:696857
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696857）
          source: &a1
            id: s_szZBgRZFUof6ECVtLRNSze
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 696857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json
            external_identifier: CBDB:696857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QVbwmuLew4eCedX61qKisx
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文德，史料所见人物。本项目依据《中国历代人物传记资料库：王文德（CBDB 696857）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nJWsdVN06JrpBX7MLtGylF
          claim_id: c_QVbwmuLew4eCedX61qKisx
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: CBDB:696857
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_h1_RUwu2E5BjrlD2g8QQa3
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l9KIrT4ldUn9vBVwuRyCzT
          claim_id: c_h1_RUwu2E5BjrlD2g8QQa3
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pfkAJ6LT6dUqP7JHbgQTA7
        status: active
        display_name: 王廷言
        merged_into_person_id: null
    - claim:
        id: c_OtGib9DGAUU_f1djHyHZ7a
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_moE7rJDFp2R9Aac3W4FxPZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jtEhnoo6keGQ76sxUkZ8Qz
          claim_id: c_OtGib9DGAUU_f1djHyHZ7a
          source_id: s_NUj526A7RkfPNCRdD3geau
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NUj526A7RkfPNCRdD3geau
            source_type: api_record
            title: 中国历代人物传记资料库：王友亮（CBDB 58603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58603&o=json
            external_identifier: CBDB:58603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_moE7rJDFp2R9Aac3W4FxPZ
        status: active
        display_name: 王友亮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_T1I4XxhEbPkn_Jp01voKR4
        subject_person_id: p_oXsn4KEBt43c38UqC37ERZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cBGCXtQ6wkhv554viPc99n
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxItaDcjWhuhr_XPviWv9e
          claim_id: c_T1I4XxhEbPkn_Jp01voKR4
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oXsn4KEBt43c38UqC37ERZ
        status: active
        display_name: 王啟仁
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_YXr-ptwX2kWf5INXSM4lzN
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8SfbNUa9c5K4NMLzzfdGZb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jS6FGMK_G0qMxczpTOXHm
          claim_id: c_YXr-ptwX2kWf5INXSM4lzN
          source_id: s_WDHRNSfWYaS6zatBbZJCD3
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WDHRNSfWYaS6zatBbZJCD3
            source_type: api_record
            title: 中国历代人物传记资料库：王汝成（CBDB 696858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696858&o=json
            external_identifier: CBDB:696858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8SfbNUa9c5K4NMLzzfdGZb
        status: active
        display_name: 王汝成
        merged_into_person_id: null
    - claim:
        id: c_FUqnp7lju-CxKeTXcBXpYc
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q7ggBttVytDDHAgopL9CKb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7-ek1jAjLRA1Ddikcwkk6U
          claim_id: c_FUqnp7lju-CxKeTXcBXpYc
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q7ggBttVytDDHAgopL9CKb
        status: active
        display_name: 王鳳生
        merged_into_person_id: null
    - claim:
        id: c_SgGr5sUfSdp_4_FF0yconb
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mR8y3PTiCrMPbVWSCQfHXh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7ZrmemaH4CWknJLi6yAUP1
          claim_id: c_SgGr5sUfSdp_4_FF0yconb
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mR8y3PTiCrMPbVWSCQfHXh
        status: active
        display_name: 王麟生
        merged_into_person_id: null
    - claim:
        id: c_tljTjxflOV2o1NqyaU_Wf8
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tHMY7aEZfasnZD9EGJZ9jH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uadwdqwB6_tpcYqme_pw7u
          claim_id: c_tljTjxflOV2o1NqyaU_Wf8
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tHMY7aEZfasnZD9EGJZ9jH
        status: active
        display_name: 王芝祥
        merged_into_person_id: null
  other: []
---

# 王文德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文德 | accepted |
| bio.summary | 王文德，史料所见人物。本项目依据《中国历代人物传记资料库：王文德（CBDB 696857）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pfkAJ6LT6dUqP7JHbgQTA7 | 王廷言 | accepted |
| children | p_moE7rJDFp2R9Aac3W4FxPZ | 王友亮 | accepted |
| ancestors | p_oXsn4KEBt43c38UqC37ERZ | 王啟仁 | accepted |
| descendants | p_8SfbNUa9c5K4NMLzzfdGZb | 王汝成 | accepted |
| descendants | p_Q7ggBttVytDDHAgopL9CKb | 王鳳生 | accepted |
| descendants | p_mR8y3PTiCrMPbVWSCQfHXh | 王麟生 | accepted |
| descendants | p_tHMY7aEZfasnZD9EGJZ9jH | 王芝祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝成（CBDB 696858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696858&o=json)
- [中国历代人物传记资料库：王文德（CBDB 696857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json)
- [中国历代人物传记资料库：王友亮（CBDB 58603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58603&o=json)

---
schema: wang-person/v1
id: p_hnvFbFQMD3qoDJL59kCJv1
status: active
merged_into: null
display_name: 王應麟
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j4Ag8W56G6D8M7cbN7qekH
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DeJZp8TmBjDWtkURwbCwHK
          claim_id: c_j4Ag8W56G6D8M7cbN7qekH
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: CBDB:126851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126851）
          source: &a1
            id: s_USNXCoUtmKiaD7MqB2q9Qs
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 126851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json
            external_identifier: CBDB:126851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r75U4nhTKV36JTuCjMG6YJ
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1545年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rpAsJi3RNg5Avrd98VP8Nr
          claim_id: c_r75U4nhTKV36JTuCjMG6YJ
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
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
        id: c_wFLUGVZbnnUENjAtTyAw29
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1620年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLHJrAGd2WVXmHp1Fg1Uar
          claim_id: c_wFLUGVZbnnUENjAtTyAw29
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
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
        id: c_C8355i5giUJTkEjeWXHXfL
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟（1545年—1620年），明人物。明清進士進士，籍贯漳浦，入仕進士，曾任縣令、巡撫右副都御史。（中国历代人物传记资料库 CBDB 126851）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ag2neCdzE1_RVT4EJJf0cw
          claim_id: c_C8355i5giUJTkEjeWXHXfL
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: CBDB:126851
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OLEqWglKs3uqEz2QdivYXW
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YmLQFt9Hy_cWZ0KRiM0r6u
          claim_id: c_OLEqWglKs3uqEz2QdivYXW
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        status: active
        display_name: 王榮貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_avewCdSF2-lOHSfrvIVSGC
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FGqHZ31NWg2R6Ke3yWJUS7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-q-FVNjZUX_7Bd7iwtMEJ
          claim_id: c_avewCdSF2-lOHSfrvIVSGC
          source_id: s_mj0NThQIF6g6PDsOkbQpIt
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mj0NThQIF6g6PDsOkbQpIt
            source_type: api_record
            title: 中国历代人物传记资料库：潘氏(王應麟妻)（CBDB 221575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221575&o=json
            external_identifier: CBDB:221575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FGqHZ31NWg2R6Ke3yWJUS7
        status: active
        display_name: 潘氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_QC7YHT9x8TUV_zScRuH_ED
        subject_person_id: p_j6yFKCjZuRSKE6EaY7VL2H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-949Vse62N_k0wD151pgza
          claim_id: c_QC7YHT9x8TUV_zScRuH_ED
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j6yFKCjZuRSKE6EaY7VL2H
        status: active
        display_name: 王先宗
        merged_into_person_id: null
    - claim:
        id: c_gAo8JGuj8ePqF8ZtfZt0K8
        subject_person_id: p_MJhP1yFLnhK4DCVH2JD1UB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AWfoQNeEqcpKxq-6XhaWl6
          claim_id: c_gAo8JGuj8ePqF8ZtfZt0K8
          source_id: s_USNXCoUtmKiaD7MqB2q9Qs
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MJhP1yFLnhK4DCVH2JD1UB
        status: active
        display_name: 王質安
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_D2y0ye1FRwI2m-3Ygsabte
        subject_person_id: p_GByKTcLKi5FHpF19ChqCGj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KAIROiyRiJ7-q3ivWejdDd
          claim_id: c_D2y0ye1FRwI2m-3Ygsabte
          source_id: s_a0EPkzIP_DuvYe11FkVKVd
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a0EPkzIP_DuvYe11FkVKVd
            source_type: api_record
            title: 中国历代人物传记资料库：王學孝（CBDB 221576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221576&o=json
            external_identifier: CBDB:221576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GByKTcLKi5FHpF19ChqCGj
        status: active
        display_name: 王學孝
        merged_into_person_id: null
    - claim:
        id: c_y6BFfr9_YM4B-77IPI-zUF
        subject_person_id: p_M1PFNJsfKadpAQXffxK3F9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_At6YvjvUdNMO7ZSHyY6Q79
          claim_id: c_y6BFfr9_YM4B-77IPI-zUF
          source_id: s_cIKoDQGQESOxBDlJx1b7dR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cIKoDQGQESOxBDlJx1b7dR
            source_type: api_record
            title: 中国历代人物传记资料库：王應中（CBDB 221577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json
            external_identifier: CBDB:221577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M1PFNJsfKadpAQXffxK3F9
        status: active
        display_name: 王應中
        merged_into_person_id: null
    - claim:
        id: c___EoS6sMHAPCxDDqvrC6rI
        subject_person_id: p_VDBFAYpqqVNNp9HxYex1aB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xrKVd80AcS2tB5mpZz21C7
          claim_id: c___EoS6sMHAPCxDDqvrC6rI
          source_id: s_Wgp-IaF1f12yOl-Dt31VES
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wgp-IaF1f12yOl-Dt31VES
            source_type: api_record
            title: 中国历代人物传记资料库：王應薦（CBDB 221581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221581&o=json
            external_identifier: CBDB:221581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VDBFAYpqqVNNp9HxYex1aB
        status: active
        display_name: 王應薦
        merged_into_person_id: null
    - claim:
        id: c_StLekoRFsd2Kv1IEyrj5rQ
        subject_person_id: p_XzgidddQvWK1wNQtCDyJ69
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y58S5nC9Dry4Bb44uXD_7w
          claim_id: c_StLekoRFsd2Kv1IEyrj5rQ
          source_id: s_POrFTlk5u8EPN4gNmBfnRU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_POrFTlk5u8EPN4gNmBfnRU
            source_type: api_record
            title: 中国历代人物传记资料库：王應賓（CBDB 221580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221580&o=json
            external_identifier: CBDB:221580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XzgidddQvWK1wNQtCDyJ69
        status: active
        display_name: 王應賓
        merged_into_person_id: null
    - claim:
        id: c_JCMo-3X2vv-Lya8_fsaa-T
        subject_person_id: p_f8cdeyyhqojaX8KjkiWgNJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iEL2WJ_GSjygI8OEPBcgL9
          claim_id: c_JCMo-3X2vv-Lya8_fsaa-T
          source_id: s_dGAmJvhGMnLBKMyY9q8FMs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dGAmJvhGMnLBKMyY9q8FMs
            source_type: api_record
            title: 中国历代人物传记资料库：王應鵬（CBDB 221582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221582&o=json
            external_identifier: CBDB:221582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f8cdeyyhqojaX8KjkiWgNJ
        status: active
        display_name: 王應鵬
        merged_into_person_id: null
    - claim:
        id: c_Tb1FULonvmtoNzJgm_Vewe
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sgqXBKDaEtRzyPGQeE3NpG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4C7Lo-jfoxqMSFBlFVGYI-
          claim_id: c_Tb1FULonvmtoNzJgm_Vewe
          source_id: s_C5HWilHm5vIk3U4NNaYTFm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C5HWilHm5vIk3U4NNaYTFm
            source_type: api_record
            title: 中国历代人物传记资料库：王應命（CBDB 221578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221578&o=json
            external_identifier: CBDB:221578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sgqXBKDaEtRzyPGQeE3NpG
        status: active
        display_name: 王應命
        merged_into_person_id: null
    - claim:
        id: c_-w6w_Fgxv1HdE68jMa3ZSg
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vPvzYemegPB2rXY341CZT4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OAhSvfmCAtD51j21TQslTi
          claim_id: c_-w6w_Fgxv1HdE68jMa3ZSg
          source_id: s_80xZqEuz0EYZqFKnB_n4kj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_80xZqEuz0EYZqFKnB_n4kj
            source_type: api_record
            title: 中国历代人物传记资料库：王應鳳（CBDB 221579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221579&o=json
            external_identifier: CBDB:221579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vPvzYemegPB2rXY341CZT4
        status: active
        display_name: 王應鳳
        merged_into_person_id: null
    - claim:
        id: c_P2Z3PYiTRA65X5Juj2hait
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yhjfNcH3MwkNWLHhAHkTdS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xTeOHEe8X94JpR0REhkOSU
          claim_id: c_P2Z3PYiTRA65X5Juj2hait
          source_id: s_Skyeohn_UKY3PSUEwyAel_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Skyeohn_UKY3PSUEwyAel_
            source_type: api_record
            title: 中国历代人物传记资料库：王應麃（CBDB 221584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221584&o=json
            external_identifier: CBDB:221584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yhjfNcH3MwkNWLHhAHkTdS
        status: active
        display_name: 王應麃
        merged_into_person_id: null
---

# 王應麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應麟 | accepted |
| birth.date | 1545年 | accepted |
| death.date | 1620年 | accepted |
| bio.summary | 王應麟（1545年—1620年），明人物。明清進士進士，籍贯漳浦，入仕進士，曾任縣令、巡撫右副都御史。（中国历代人物传记资料库 CBDB 126851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MpRHKYQgMhyeJ8uJAKZD2Z | 王榮貴 | accepted |
| spouses | p_FGqHZ31NWg2R6Ke3yWJUS7 | 潘氏 | accepted |
| ancestors | p_j6yFKCjZuRSKE6EaY7VL2H | 王先宗 | accepted |
| ancestors | p_MJhP1yFLnhK4DCVH2JD1UB | 王質安 | accepted |
| other | p_GByKTcLKi5FHpF19ChqCGj | 王學孝 | accepted |
| other | p_M1PFNJsfKadpAQXffxK3F9 | 王應中 | accepted |
| other | p_VDBFAYpqqVNNp9HxYex1aB | 王應薦 | accepted |
| other | p_XzgidddQvWK1wNQtCDyJ69 | 王應賓 | accepted |
| other | p_f8cdeyyhqojaX8KjkiWgNJ | 王應鵬 | accepted |
| other | p_sgqXBKDaEtRzyPGQeE3NpG | 王應命 | accepted |
| other | p_vPvzYemegPB2rXY341CZT4 | 王應鳳 | accepted |
| other | p_yhjfNcH3MwkNWLHhAHkTdS | 王應麃 | accepted |

## 外部来源

- [中国历代人物传记资料库：潘氏(王應麟妻)（CBDB 221575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221575&o=json)
- [中国历代人物传记资料库：王學孝（CBDB 221576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221576&o=json)
- [中国历代人物传记资料库：王應賓（CBDB 221580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221580&o=json)
- [中国历代人物传记资料库：王應鳳（CBDB 221579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221579&o=json)
- [中国历代人物传记资料库：王應薦（CBDB 221581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221581&o=json)
- [中国历代人物传记资料库：王應麟（CBDB 126851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126851&o=json)
- [中国历代人物传记资料库：王應命（CBDB 221578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221578&o=json)
- [中国历代人物传记资料库：王應麃（CBDB 221584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221584&o=json)
- [中国历代人物传记资料库：王應鵬（CBDB 221582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221582&o=json)
- [中国历代人物传记资料库：王應中（CBDB 221577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json)

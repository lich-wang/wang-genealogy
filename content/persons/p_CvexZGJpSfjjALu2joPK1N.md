---
schema: wang-person/v1
id: p_CvexZGJpSfjjALu2joPK1N
status: active
merged_into: null
display_name: 王瑄
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t3ahXF8VDP29jxUNAtScA7
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
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
        - id: cs_8HhFrN6mKDQ3KjBrhCG535
          claim_id: c_t3ahXF8VDP29jxUNAtScA7
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: CBDB:126752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126752）
          source: &a1
            id: s_Yy8BuZ9UTECH2SA99gjmDH
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 126752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json
            external_identifier: CBDB:126752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7UyNAtw9iSdeRoBynMZgNf
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。明清進士進士，籍贯遂寧，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126752）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ifsn27XshzWf1KZrLyCt0Z
          claim_id: c_7UyNAtw9iSdeRoBynMZgNf
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: CBDB:126752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__oyCQu0QcnbomUMzz6GJPD
        subject_person_id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KEh4RHPQAaFC5WzQy7Qebi
          claim_id: c__oyCQu0QcnbomUMzz6GJPD
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ws6vwZFsXZUpBYjSrkcdGJ
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4vS7mf--rMrbi4r1pmDIko
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Dg27moF3SbFTVJLWr81o69
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7ODTIk-KB4bnQgSMjz-QN7
          claim_id: c_4vS7mf--rMrbi4r1pmDIko
          source_id: s_BFcUCAd5A_JdcVNTc5hdYG
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BFcUCAd5A_JdcVNTc5hdYG
            source_type: api_record
            title: 中国历代人物传记资料库：苟氏(王瑄妻)（CBDB 282501）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282501&o=json
            external_identifier: CBDB:282501
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Dg27moF3SbFTVJLWr81o69
        status: active
        display_name: 苟氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_KPhzbc4oMSt1U3dMu0SpIA
        subject_person_id: p_vTiLkryjy9ET11XHMxwRJR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VhtjH4ybS-gaoINhR2jWck
          claim_id: c_KPhzbc4oMSt1U3dMu0SpIA
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vTiLkryjy9ET11XHMxwRJR
        status: active
        display_name: 王清宇
        merged_into_person_id: null
    - claim:
        id: c_npQ5fPKhsEY49JShmR5iI9
        subject_person_id: p_y6k5bbhVEm5GUb8nPt89ho
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kTHQr5KlKpOd70dsFCiw8k
          claim_id: c_npQ5fPKhsEY49JShmR5iI9
          source_id: s_Yy8BuZ9UTECH2SA99gjmDH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百八十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y6k5bbhVEm5GUb8nPt89ho
        status: active
        display_name: 王同孝
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_F_Sw3TGHkw2az-RZZYmJgs
        subject_person_id: p_1N65LqTbYG3WVhuB7e8YV9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8NdxN72dGvniMCYD_CGNSn
          claim_id: c_F_Sw3TGHkw2az-RZZYmJgs
          source_id: s_6nBgfoPFJvS6CDuPTQOHF0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6nBgfoPFJvS6CDuPTQOHF0
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 282509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282509&o=json
            external_identifier: CBDB:282509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1N65LqTbYG3WVhuB7e8YV9
        status: active
        display_name: 王珣
        merged_into_person_id: null
    - claim:
        id: c_rP2yOV1qJa_AD7Zbns8UrD
        subject_person_id: p_CgPbjE7HKGSRncuYiRMFkb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CvexZGJpSfjjALu2joPK1N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xc_R2ax1RyjT81k8gggq9B
          claim_id: c_rP2yOV1qJa_AD7Zbns8UrD
          source_id: s_NRBL1dLOFQW_HWmPX4kPJN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NRBL1dLOFQW_HWmPX4kPJN
            source_type: api_record
            title: 中国历代人物传记资料库：王環（CBDB 282505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282505&o=json
            external_identifier: CBDB:282505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CgPbjE7HKGSRncuYiRMFkb
        status: active
        display_name: 王環
        merged_into_person_id: null
    - claim:
        id: c_ZTRkw10MS_M_n0QHMwpaJf
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JZWLLHiizKoJQGGfwvP2GQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R8g9aXoAgw5ayOCQTzeBr2
          claim_id: c_ZTRkw10MS_M_n0QHMwpaJf
          source_id: s_2pNDNJefUKCFv1YhcdMPmR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2pNDNJefUKCFv1YhcdMPmR
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 282508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282508&o=json
            external_identifier: CBDB:282508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JZWLLHiizKoJQGGfwvP2GQ
        status: active
        display_name: 王瑜
        merged_into_person_id: null
    - claim:
        id: c_Ho_CjjYFR8iP_xMth2Gq4A
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UbDnMmC6J6MoE9h83drrbB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DmF2Cmg_IMwvezrl9FgiJJ
          claim_id: c_Ho_CjjYFR8iP_xMth2Gq4A
          source_id: s_jb80SanRtbY4Eosw4h73cW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jb80SanRtbY4Eosw4h73cW
            source_type: api_record
            title: 中国历代人物传记资料库：王瑨（CBDB 282506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282506&o=json
            external_identifier: CBDB:282506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UbDnMmC6J6MoE9h83drrbB
        status: active
        display_name: 王瑨
        merged_into_person_id: null
    - claim:
        id: c_B_D4LHHjWpOLlGs1eYlaOP
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VmtHWW9HBMcRBoxoJTE23J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pwkpW0bYNz3tRJNFiwX4nA
          claim_id: c_B_D4LHHjWpOLlGs1eYlaOP
          source_id: s_Bm1r15S80BFM89pkE2SpG9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Bm1r15S80BFM89pkE2SpG9
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 282502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282502&o=json
            external_identifier: CBDB:282502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VmtHWW9HBMcRBoxoJTE23J
        status: active
        display_name: 王璲
        merged_into_person_id: null
    - claim:
        id: c_yrYt7EU0-vOl1zIU9seQFG
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WmoLL6wPihQGgdJbeHcGDV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vViz035gzcwR9HYc5wAfjS
          claim_id: c_yrYt7EU0-vOl1zIU9seQFG
          source_id: s_x2SX-ApP-QtBF-xanGOSzG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x2SX-ApP-QtBF-xanGOSzG
            source_type: api_record
            title: 中国历代人物传记资料库：王琠（CBDB 282504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282504&o=json
            external_identifier: CBDB:282504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WmoLL6wPihQGgdJbeHcGDV
        status: active
        display_name: 王琠
        merged_into_person_id: null
    - claim:
        id: c_GUO8_fLexEA71j8EIos-FG
        subject_person_id: p_CvexZGJpSfjjALu2joPK1N
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WyhiFhHAUths6uCohHVEMD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eum2JokrWiV-hfGSqVWfm5
          claim_id: c_GUO8_fLexEA71j8EIos-FG
          source_id: s_x8XencURFrlakyzPfLOaxj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126752 王瑄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x8XencURFrlakyzPfLOaxj
            source_type: api_record
            title: 中国历代人物传记资料库：王瑾（CBDB 282503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282503&o=json
            external_identifier: CBDB:282503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WyhiFhHAUths6uCohHVEMD
        status: active
        display_name: 王瑾
        merged_into_person_id: null
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。明清進士進士，籍贯遂寧，身份为以疾廢，入仕進士。（中国历代人物传记资料库 CBDB 126752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ws6vwZFsXZUpBYjSrkcdGJ | 王言 | accepted |
| spouses | p_Dg27moF3SbFTVJLWr81o69 | 苟氏 | accepted |
| ancestors | p_vTiLkryjy9ET11XHMxwRJR | 王清宇 | accepted |
| ancestors | p_y6k5bbhVEm5GUb8nPt89ho | 王同孝 | accepted |
| other | p_1N65LqTbYG3WVhuB7e8YV9 | 王珣 | accepted |
| other | p_CgPbjE7HKGSRncuYiRMFkb | 王環 | accepted |
| other | p_JZWLLHiizKoJQGGfwvP2GQ | 王瑜 | accepted |
| other | p_UbDnMmC6J6MoE9h83drrbB | 王瑨 | accepted |
| other | p_VmtHWW9HBMcRBoxoJTE23J | 王璲 | accepted |
| other | p_WmoLL6wPihQGgdJbeHcGDV | 王琠 | accepted |
| other | p_WyhiFhHAUths6uCohHVEMD | 王瑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：苟氏(王瑄妻)（CBDB 282501）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282501&o=json)
- [中国历代人物传记资料库：王環（CBDB 282505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282505&o=json)
- [中国历代人物传记资料库：王瑾（CBDB 282503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282503&o=json)
- [中国历代人物传记资料库：王瑨（CBDB 282506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282506&o=json)
- [中国历代人物传记资料库：王璲（CBDB 282502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282502&o=json)
- [中国历代人物传记资料库：王琠（CBDB 282504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282504&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 126752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126752&o=json)
- [中国历代人物传记资料库：王珣（CBDB 282509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282509&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 282508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282508&o=json)

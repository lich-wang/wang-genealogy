---
schema: wang-person/v1
id: p_nfDQpFcmyR41HhRtmj92PA
status: active
merged_into: null
display_name: 王愷
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kb9ypJH7JM5pFTmwxQwV2c
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zNVa1znqbtf7FqXFUuMrNC
          claim_id: c_Kb9ypJH7JM5pFTmwxQwV2c
          source_id: s_gLqYcPwPC3KJqKEtZKNiXV
          stance: supports
          locator: CBDB:300441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300441）
          source: &a1
            id: s_gLqYcPwPC3KJqKEtZKNiXV
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 300441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300441&o=json
            external_identifier: CBDB:300441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_99Kq9A9nZuK4DdtMYkh4Yj
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9dnwOtjOBmmxZJxiQA7pGz
          claim_id: c_99Kq9A9nZuK4DdtMYkh4Yj
          source_id: s_gLqYcPwPC3KJqKEtZKNiXV
          stance: supports
          locator: CBDB:300441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Y8ZY2Ll-u9AuQvYN8ownzN
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U90p_UqBTCR3Y9MXVj5RC5
          claim_id: c_Y8ZY2Ll-u9AuQvYN8ownzN
          source_id: s_gLqYcPwPC3KJqKEtZKNiXV
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VsUEBsvkAXXbA9FWfTN5pA
        status: active
        display_name: 王國禎
        merged_into_person_id: null
    - claim:
        id: c_vW_n8un8DSnKTqyyg4FPHY
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C5JXetdqzJDyK61Lkc87hJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KdqXYdNEeJ3bolpHpEs-qB
          claim_id: c_vW_n8un8DSnKTqyyg4FPHY
          source_id: s_JF___QwuavZRUvYE67s5L_
          stance: supports
          locator: CBDB：兄弟 王國禎（126691）之父／母 王愷
          quotation: null
          interpretation_note: 由兄弟关系推断：王國賓 与 王國禎 为同胞（CBDB 记「兄」），王國禎 之父／母即 王國賓 之父／母。
          source:
            id: s_JF___QwuavZRUvYE67s5L_
            source_type: api_record
            title: 中国历代人物传记资料库：王國賓（CBDB 300446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300446&o=json
            external_identifier: CBDB:300446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C5JXetdqzJDyK61Lkc87hJ
        status: active
        display_name: 王國賓
        merged_into_person_id: null
    - claim:
        id: c_hlXkl8ByftC8zJ0dO03cue
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NHWKFSJwMQa18gB2fHSFSP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d07dWT8H7pEpMK6FnnIGsv
          claim_id: c_hlXkl8ByftC8zJ0dO03cue
          source_id: s_y2VrrXeX9L4bjUW0fyhzoC
          stance: supports
          locator: CBDB：兄弟 王國禎（126691）之父／母 王愷
          quotation: null
          interpretation_note: 由兄弟关系推断：王國器 与 王國禎 为同胞（CBDB 记「兄」），王國禎 之父／母即 王國器 之父／母。
          source:
            id: s_y2VrrXeX9L4bjUW0fyhzoC
            source_type: api_record
            title: 中国历代人物传记资料库：王國器（CBDB 300448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300448&o=json
            external_identifier: CBDB:300448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NHWKFSJwMQa18gB2fHSFSP
        status: active
        display_name: 王國器
        merged_into_person_id: null
    - claim:
        id: c__Bxi6BKxQq3wtu0PJDB-RW
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kM8BgAuHD8CLZLgfEVoMZb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MxlcvDy3wGAbRaJh_5_tyh
          claim_id: c__Bxi6BKxQq3wtu0PJDB-RW
          source_id: s_SYlXVZ-RnOeXgRRq95rbD2
          stance: supports
          locator: CBDB：兄弟 王國禎（126691）之父／母 王愷
          quotation: null
          interpretation_note: 由兄弟关系推断：王國臣 与 王國禎 为同胞（CBDB 记「弟」），王國禎 之父／母即 王國臣 之父／母。
          source:
            id: s_SYlXVZ-RnOeXgRRq95rbD2
            source_type: api_record
            title: 中国历代人物传记资料库：王國臣（CBDB 300444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300444&o=json
            external_identifier: CBDB:300444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kM8BgAuHD8CLZLgfEVoMZb
        status: active
        display_name: 王國臣
        merged_into_person_id: null
    - claim:
        id: c_p9FMCtJzBoJish2_WogECN
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n4p43ECzNzGHq1vp3dKsGh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pQSjvhM9yOkhVq9NAWlxUf
          claim_id: c_p9FMCtJzBoJish2_WogECN
          source_id: s_SjKoXEAZI6xBjldjoD68l-
          stance: supports
          locator: CBDB：兄弟 王國禎（126691）之父／母 王愷
          quotation: null
          interpretation_note: 由兄弟关系推断：王國言 与 王國禎 为同胞（CBDB 记「兄」），王國禎 之父／母即 王國言 之父／母。
          source:
            id: s_SjKoXEAZI6xBjldjoD68l-
            source_type: api_record
            title: 中国历代人物传记资料库：王國言（CBDB 300445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300445&o=json
            external_identifier: CBDB:300445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n4p43ECzNzGHq1vp3dKsGh
        status: active
        display_name: 王國言
        merged_into_person_id: null
    - claim:
        id: c_vsUjrZQhAFtZrLMD9DMaP4
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pAjAvgf8GL8NvCzQiKHN93
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eqig8m1DIuwOuD7P00HeXO
          claim_id: c_vsUjrZQhAFtZrLMD9DMaP4
          source_id: s_QTK-yV3EwZyjyrbM-5n18h
          stance: supports
          locator: CBDB：兄弟 王國禎（126691）之父／母 王愷
          quotation: null
          interpretation_note: 由兄弟关系推断：王國某 与 王國禎 为同胞（CBDB 记「兄」），王國禎 之父／母即 王國某 之父／母。
          source:
            id: s_QTK-yV3EwZyjyrbM-5n18h
            source_type: api_record
            title: 中国历代人物传记资料库：王國某（CBDB 300447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300447&o=json
            external_identifier: CBDB:300447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pAjAvgf8GL8NvCzQiKHN93
        status: active
        display_name: 王國某
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愷 | accepted |
| bio.summary | 王愷，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VsUEBsvkAXXbA9FWfTN5pA | 王國禎 | accepted |
| children | p_C5JXetdqzJDyK61Lkc87hJ | 王國賓 | accepted |
| children | p_NHWKFSJwMQa18gB2fHSFSP | 王國器 | accepted |
| children | p_kM8BgAuHD8CLZLgfEVoMZb | 王國臣 | accepted |
| children | p_n4p43ECzNzGHq1vp3dKsGh | 王國言 | accepted |
| children | p_pAjAvgf8GL8NvCzQiKHN93 | 王國某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國賓（CBDB 300446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300446&o=json)
- [中国历代人物传记资料库：王國臣（CBDB 300444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300444&o=json)
- [中国历代人物传记资料库：王國某（CBDB 300447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300447&o=json)
- [中国历代人物传记资料库：王國器（CBDB 300448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300448&o=json)
- [中国历代人物传记资料库：王國言（CBDB 300445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300445&o=json)
- [中国历代人物传记资料库：王愷（CBDB 300441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300441&o=json)

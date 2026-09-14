---
schema: wang-person/v1
id: p_4PMudrRao4a9cRDuakPq7M
status: active
merged_into: null
display_name: 王同讚
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gygj79qcyiZqgJ9d685A6z
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同讚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FM6CYJSwxLQjDgL6KBMF9g
          claim_id: c_gygj79qcyiZqgJ9d685A6z
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: CBDB:204969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204969）
          source: &a1
            id: s_1rvQicHBV2nhuQQ8M41Xjf
            source_type: api_record
            title: 中国历代人物传记资料库：王同讚（CBDB 204969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json
            external_identifier: CBDB:204969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.844Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7dJ7M2KQN3V9tACFiM6UVw
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1532年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iQkGoDGyF8CeSiW6QNApQS
          claim_id: c_7dJ7M2KQN3V9tACFiM6UVw
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
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
        id: c_c9sMYCd9bU2BTBsPdreqyQ
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同讚（生于1532年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 204969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MzGE3y6rwa--D30DZwOYSm
          claim_id: c_c9sMYCd9bU2BTBsPdreqyQ
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: CBDB:204969
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zP701nQiwF-tvqPRBPLgIG
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_je-aZmrd42koe1C5etlFiH
          claim_id: c_zP701nQiwF-tvqPRBPLgIG
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BQt5KMQt85phWutCQLQcnd
        status: active
        display_name: 王叔中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_lx3Aec4Xl4vkUrzNek6NLG
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FX6yxdESt8n2A1QVNyJNuM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kr2wt-tMJPy_df4Si52R1b
          claim_id: c_lx3Aec4Xl4vkUrzNek6NLG
          source_id: s_iogO198fZkjXmrhFLuj4hV
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iogO198fZkjXmrhFLuj4hV
            source_type: api_record
            title: 中国历代人物传记资料库：唐氏(王同讚妻)（CBDB 326621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326621&o=json
            external_identifier: CBDB:326621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FX6yxdESt8n2A1QVNyJNuM
        status: active
        display_name: 唐氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_8BiRpqd0WOgYT-r5ewqBsH
        subject_person_id: p_Mb2RND5RPdkBbHc3mLAQVY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFrngecIRrLCn9sgUs6cXL
          claim_id: c_8BiRpqd0WOgYT-r5ewqBsH
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mb2RND5RPdkBbHc3mLAQVY
        status: active
        display_name: 王寰
        merged_into_person_id: null
    - claim:
        id: c_4EL9oWJldy48HroD4doOiQ
        subject_person_id: p_nuYPnF5g2SSrFSB8SSV1Bo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6xHh5B7oe6QQj6HCyNCNkv
          claim_id: c_4EL9oWJldy48HroD4doOiQ
          source_id: s_1rvQicHBV2nhuQQ8M41Xjf
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第三十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nuYPnF5g2SSrFSB8SSV1Bo
        status: active
        display_name: 王綱
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_w6DnkXbXQuoXg_qjp4pyWr
        subject_person_id: p_3dXrdfiSek18Q9DsAboTn9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4PMudrRao4a9cRDuakPq7M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iB4N8v4sNwNPi2nWK7gT6Y
          claim_id: c_w6DnkXbXQuoXg_qjp4pyWr
          source_id: s_bpjhD4g3twQWD1Xz1O-DoU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204969 王同讚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bpjhD4g3twQWD1Xz1O-DoU
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 326622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326622&o=json
            external_identifier: CBDB:326622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3dXrdfiSek18Q9DsAboTn9
        status: active
        display_name: 王同仁
        merged_into_person_id: null
    - claim:
        id: c_Z39HojB1WbSbmmB4du4uM8
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6WpYyEV6mDnjMunafdRdX3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NmN4ELxABAqZjTj4N7uKT
          claim_id: c_Z39HojB1WbSbmmB4du4uM8
          source_id: s_JYyIkrlPxefo1ZQ_wet5q-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204969 王同讚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JYyIkrlPxefo1ZQ_wet5q-
            source_type: api_record
            title: 中国历代人物传记资料库：王同論（CBDB 326625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326625&o=json
            external_identifier: CBDB:326625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6WpYyEV6mDnjMunafdRdX3
        status: active
        display_name: 王同論
        merged_into_person_id: null
    - claim:
        id: c_FIFVlgluBsGkVlqM31E-oE
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JPBNUpXKQdaNAyNXcfPMPv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TpAg0pQx7LU44o4rOhUxjp
          claim_id: c_FIFVlgluBsGkVlqM31E-oE
          source_id: s_oFfRfdwRUdzE3GGASVsDm4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204969 王同讚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oFfRfdwRUdzE3GGASVsDm4
            source_type: api_record
            title: 中国历代人物传记资料库：王同任（CBDB 326626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326626&o=json
            external_identifier: CBDB:326626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JPBNUpXKQdaNAyNXcfPMPv
        status: active
        display_name: 王同任
        merged_into_person_id: null
    - claim:
        id: c_79KhukSlMwOksPMZ6RFbuA
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_adRFAQLWhyXmaT47pftg3g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yQXA1b9LcAd8RRJLl2r8HG
          claim_id: c_79KhukSlMwOksPMZ6RFbuA
          source_id: s_7QxjeCnmwHUdUvkuHxv5MX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204969 王同讚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7QxjeCnmwHUdUvkuHxv5MX
            source_type: api_record
            title: 中国历代人物传记资料库：王同化（CBDB 326624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326624&o=json
            external_identifier: CBDB:326624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_adRFAQLWhyXmaT47pftg3g
        status: active
        display_name: 王同化
        merged_into_person_id: null
    - claim:
        id: c_-42rV4ySQb90Z8bvFVo8-I
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g9Yir1APiQpFvmBiV6zzPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKa3sarhJeFNwT9bx7NRVR
          claim_id: c_-42rV4ySQb90Z8bvFVo8-I
          source_id: s_HMIdz8SysTWZaj-quoRZy4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204969 王同讚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HMIdz8SysTWZaj-quoRZy4
            source_type: api_record
            title: 中国历代人物传记资料库：王同儼（CBDB 326627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326627&o=json
            external_identifier: CBDB:326627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_g9Yir1APiQpFvmBiV6zzPF
        status: active
        display_name: 王同儼
        merged_into_person_id: null
    - claim:
        id: c_r6kBI5k8ShAxQWmH8pqIIB
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s58PnUmfNbj4dJTDKq5fP2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dtG8o3-VGn9tsKoNqylMJ
          claim_id: c_r6kBI5k8ShAxQWmH8pqIIB
          source_id: s_OMMPD-dBoiFj1C5ypaPMdi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204969 王同讚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OMMPD-dBoiFj1C5ypaPMdi
            source_type: api_record
            title: 中国历代人物传记资料库：王同議（CBDB 326623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326623&o=json
            external_identifier: CBDB:326623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s58PnUmfNbj4dJTDKq5fP2
        status: active
        display_name: 王同議
        merged_into_person_id: null
---

# 王同讚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同讚 | accepted |
| birth.date | 1532年 | accepted |
| bio.summary | 王同讚（生于1532年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 204969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BQt5KMQt85phWutCQLQcnd | 王叔中 | accepted |
| spouses | p_FX6yxdESt8n2A1QVNyJNuM | 唐氏 | accepted |
| ancestors | p_Mb2RND5RPdkBbHc3mLAQVY | 王寰 | accepted |
| ancestors | p_nuYPnF5g2SSrFSB8SSV1Bo | 王綱 | accepted |
| other | p_3dXrdfiSek18Q9DsAboTn9 | 王同仁 | accepted |
| other | p_6WpYyEV6mDnjMunafdRdX3 | 王同論 | accepted |
| other | p_JPBNUpXKQdaNAyNXcfPMPv | 王同任 | accepted |
| other | p_adRFAQLWhyXmaT47pftg3g | 王同化 | accepted |
| other | p_g9Yir1APiQpFvmBiV6zzPF | 王同儼 | accepted |
| other | p_s58PnUmfNbj4dJTDKq5fP2 | 王同議 | accepted |

## 外部来源

- [中国历代人物传记资料库：唐氏(王同讚妻)（CBDB 326621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326621&o=json)
- [中国历代人物传记资料库：王同化（CBDB 326624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326624&o=json)
- [中国历代人物传记资料库：王同論（CBDB 326625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326625&o=json)
- [中国历代人物传记资料库：王同仁（CBDB 326622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326622&o=json)
- [中国历代人物传记资料库：王同任（CBDB 326626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326626&o=json)
- [中国历代人物传记资料库：王同儼（CBDB 326627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326627&o=json)
- [中国历代人物传记资料库：王同議（CBDB 326623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326623&o=json)
- [中国历代人物传记资料库：王同讚（CBDB 204969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204969&o=json)

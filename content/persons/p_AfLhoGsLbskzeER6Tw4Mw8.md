---
schema: wang-person/v1
id: p_AfLhoGsLbskzeER6Tw4Mw8
status: active
merged_into: null
display_name: 王道
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ES9B67qxDgdN2Uw9v71UT
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZC3UXFJQL7GSt2BEBhfu4s
          claim_id: c_1ES9B67qxDgdN2Uw9v71UT
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: CBDB:202119
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202119）
          source: &a1
            id: s_yeDS7MthSZ69rfW6mZGg3S
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 202119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json
            external_identifier: CBDB:202119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.722Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QRMc8DgXNm5UohTJGsECbf
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1484年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cv19VxuFa2d2fXnddKUnvV
          claim_id: c_QRMc8DgXNm5UohTJGsECbf
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
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
        id: c_2ADCZSWGpZL6SdM7SQs9GF
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道（生于1484年），明人物。明清進士進士，籍贯鄱陽，入仕進士。（中国历代人物传记资料库 CBDB 202119）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_grG_qwzdOtOPrVOyCbsvk_
          claim_id: c_2ADCZSWGpZL6SdM7SQs9GF
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: CBDB:202119
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r0Wd1xNXhNmCprr1w9DZw_
        subject_person_id: p_oKkzy3873cWFyj79szDYmN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDtBh1kto7gV1VoE7a-HLE
          claim_id: c_r0Wd1xNXhNmCprr1w9DZw_
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oKkzy3873cWFyj79szDYmN
        status: active
        display_name: 王廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_27wnXYvECV-vQCDgJLDQc3
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NzB8gp6CgQTGMkPmEGAF9j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L4ebYvJv1CMD6xVnZI0N8F
          claim_id: c_27wnXYvECV-vQCDgJLDQc3
          source_id: s_C2Pq0LW_W5S0pAIebYY9xM
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C2Pq0LW_W5S0pAIebYY9xM
            source_type: api_record
            title: 中国历代人物传记资料库：馮氏(王道妻)（CBDB 283884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283884&o=json
            external_identifier: CBDB:283884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NzB8gp6CgQTGMkPmEGAF9j
        status: active
        display_name: 馮氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_UGK3-KsgjfLDehrH491pNE
        subject_person_id: p_i6t4eV9N6rnEaCtkvK3PmA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oq_dFll8SH9gXU82vj3RNC
          claim_id: c_UGK3-KsgjfLDehrH491pNE
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_i6t4eV9N6rnEaCtkvK3PmA
        status: active
        display_name: 王詠
        merged_into_person_id: null
    - claim:
        id: c_nI35-QR7b3e4wbyhUvIIys
        subject_person_id: p_ihw5gNULzE5EmXWhh3PRjc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PG8IEgIGoLYOxSBWtt8RE
          claim_id: c_nI35-QR7b3e4wbyhUvIIys
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ihw5gNULzE5EmXWhh3PRjc
        status: active
        display_name: 王廉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_8zt6r9T0lGuvTa_WYTyxRo
        subject_person_id: p_Af4LSfN48z84SXXU6eroG5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m_6rc5rd3Qwym4bNtGQzsZ
          claim_id: c_8zt6r9T0lGuvTa_WYTyxRo
          source_id: s_ItiJGIYDQB4nA1MRDYwdrf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202119 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ItiJGIYDQB4nA1MRDYwdrf
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 283890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283890&o=json
            external_identifier: CBDB:283890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Af4LSfN48z84SXXU6eroG5
        status: active
        display_name: 王迎
        merged_into_person_id: null
    - claim:
        id: c_ZWj-WdJVVXj5uBAocrHmUF
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KFGGAQiXKLZ1How6GMLtHc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OuwTJDURXe6UGZHYWDJ5wB
          claim_id: c_ZWj-WdJVVXj5uBAocrHmUF
          source_id: s_qsLVOt2BpVN6qyJetL34zd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202119 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qsLVOt2BpVN6qyJetL34zd
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 283887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283887&o=json
            external_identifier: CBDB:283887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KFGGAQiXKLZ1How6GMLtHc
        status: active
        display_name: 王進
        merged_into_person_id: null
    - claim:
        id: c_Axk5RQ10YHIYbT39zdOQhv
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QYaDmcFu9VPJMNzFyiC5GV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tDaEEDx75paiSHrRF9mVgq
          claim_id: c_Axk5RQ10YHIYbT39zdOQhv
          source_id: s_J2zwhFumShXhDeuKj-SW1L
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202119 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_J2zwhFumShXhDeuKj-SW1L
            source_type: api_record
            title: 中国历代人物传记资料库：王遂（CBDB 283891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283891&o=json
            external_identifier: CBDB:283891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QYaDmcFu9VPJMNzFyiC5GV
        status: active
        display_name: 王遂
        merged_into_person_id: null
    - claim:
        id: c_8qD3VgfKTddL32jZYKFloY
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RRio7dJ4QAndzT95pkasoj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O_5GO8ImUpASjUHtXmlY3u
          claim_id: c_8qD3VgfKTddL32jZYKFloY
          source_id: s_BEjXoZfMqcTO7zCBVR9_pP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202119 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BEjXoZfMqcTO7zCBVR9_pP
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 283889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283889&o=json
            external_identifier: CBDB:283889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RRio7dJ4QAndzT95pkasoj
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_ZK7TN-5qPG6-E5so6QrYBj
        subject_person_id: p_AfLhoGsLbskzeER6Tw4Mw8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yiCBExH3DTLm2arPBKGYQA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_meoCpW_pWtKBI8-zjGDqIe
          claim_id: c_ZK7TN-5qPG6-E5so6QrYBj
          source_id: s_IUtuJbHdy3F9HeqMg_6aFu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202119 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IUtuJbHdy3F9HeqMg_6aFu
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 283886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283886&o=json
            external_identifier: CBDB:283886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yiCBExH3DTLm2arPBKGYQA
        status: active
        display_name: 王遜
        merged_into_person_id: null
---

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| birth.date | 1484年 | accepted |
| bio.summary | 王道（生于1484年），明人物。明清進士進士，籍贯鄱陽，入仕進士。（中国历代人物传记资料库 CBDB 202119） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oKkzy3873cWFyj79szDYmN | 王廉 | accepted |
| spouses | p_NzB8gp6CgQTGMkPmEGAF9j | 馮氏 | accepted |
| ancestors | p_i6t4eV9N6rnEaCtkvK3PmA | 王詠 | accepted |
| ancestors | p_ihw5gNULzE5EmXWhh3PRjc | 王廉 | accepted |
| other | p_Af4LSfN48z84SXXU6eroG5 | 王迎 | accepted |
| other | p_KFGGAQiXKLZ1How6GMLtHc | 王進 | accepted |
| other | p_QYaDmcFu9VPJMNzFyiC5GV | 王遂 | accepted |
| other | p_RRio7dJ4QAndzT95pkasoj | 王選 | accepted |
| other | p_yiCBExH3DTLm2arPBKGYQA | 王遜 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(王道妻)（CBDB 283884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283884&o=json)
- [中国历代人物传记资料库：王道（CBDB 202119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json)
- [中国历代人物传记资料库：王進（CBDB 283887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283887&o=json)
- [中国历代人物传记资料库：王遂（CBDB 283891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283891&o=json)
- [中国历代人物传记资料库：王選（CBDB 283889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283889&o=json)
- [中国历代人物传记资料库：王遜（CBDB 283886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283886&o=json)
- [中国历代人物传记资料库：王迎（CBDB 283890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283890&o=json)

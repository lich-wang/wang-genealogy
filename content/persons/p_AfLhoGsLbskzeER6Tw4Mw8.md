---
schema: wang-person/v1
id: p_AfLhoGsLbskzeER6Tw4Mw8
status: active
merged_into: null
display_name: 王道
revision: 3
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8h47hVZfjN1s4F8skmGUkn
          claim_id: c_2ADCZSWGpZL6SdM7SQs9GF
          source_id: s_yeDS7MthSZ69rfW6mZGg3S
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  other: []
---

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| birth.date | 1484年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oKkzy3873cWFyj79szDYmN | 王廉 | accepted |
| spouses | p_NzB8gp6CgQTGMkPmEGAF9j | 馮氏 | accepted |
| ancestors | p_i6t4eV9N6rnEaCtkvK3PmA | 王詠 | accepted |
| ancestors | p_ihw5gNULzE5EmXWhh3PRjc | 王廉 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(王道妻)（CBDB 283884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283884&o=json)
- [中国历代人物传记资料库：王道（CBDB 202119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202119&o=json)

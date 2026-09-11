---
schema: wang-person/v1
id: p_2WkB5UHe7A5kLMMt82Na3L
status: active
merged_into: null
display_name: 王之士
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nLZ2u14oowtr3ghKqz69EG
        subject_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L91wTJHPdQPZ124nDm3iri
          claim_id: c_nLZ2u14oowtr3ghKqz69EG
          source_id: s_uMbs1JEvz86ocgPbcdeRN4
          stance: supports
          locator: CBDB:126462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126462）
          source: &a1
            id: s_uMbs1JEvz86ocgPbcdeRN4
            source_type: api_record
            title: 中国历代人物传记资料库：王之士（CBDB 126462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126462&o=json
            external_identifier: CBDB:126462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XtjJaB11rVi8HzzzxgioC3
        subject_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WKr3PczwJTBCKUEYA2sm6n
          claim_id: c_XtjJaB11rVi8HzzzxgioC3
          source_id: s_uMbs1JEvz86ocgPbcdeRN4
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
        id: c_JcvsQ9D2WxDFLmGfigrN3H
        subject_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1592年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VAC8szLVUXkeoz9azoJkE3
          claim_id: c_JcvsQ9D2WxDFLmGfigrN3H
          source_id: s_uMbs1JEvz86ocgPbcdeRN4
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
        id: c_kBNnX4474BcDNPeHQiugeg
        subject_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之士（1536年—1592年），明人物。明清進士進士，籍贯鄒平，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 126462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Uxo9b2fyUjAOXDJpX4wCOD
          claim_id: c_kBNnX4474BcDNPeHQiugeg
          source_id: s_uMbs1JEvz86ocgPbcdeRN4
          stance: supports
          locator: CBDB:126462
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MqPr6xAxchbMvfj3XYJXHL
        subject_person_id: p_an8AZhFejWmrpm1FYeSJN6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3tJXQwpRnqIbTO_DRNiEs
          claim_id: c_MqPr6xAxchbMvfj3XYJXHL
          source_id: s_uMbs1JEvz86ocgPbcdeRN4
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_an8AZhFejWmrpm1FYeSJN6
        status: active
        display_name: 王陽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CfuA4DMrYRXuvvvHjoETo0
        subject_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_LzEELjJoPgtvqqg3hCWYLG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5r0vP0tWiACqQVfkxn3TTm
          claim_id: c_CfuA4DMrYRXuvvvHjoETo0
          source_id: s_sTlfPV6lNaliVn8l6PydHO
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sTlfPV6lNaliVn8l6PydHO
            source_type: api_record
            title: 中国历代人物传记资料库：韓氏(王之士妻)（CBDB 334259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334259&o=json
            external_identifier: CBDB:334259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LzEELjJoPgtvqqg3hCWYLG
        status: active
        display_name: 韓氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_lWAJitP5jAcigVs0Uhit8c
        subject_person_id: p_CPD7SKaQjjP9hwueEGdFvK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XmP5YntW2HzXZ_tyUCelXu
          claim_id: c_lWAJitP5jAcigVs0Uhit8c
          source_id: s_uMbs1JEvz86ocgPbcdeRN4
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CPD7SKaQjjP9hwueEGdFvK
        status: active
        display_name: 王晟
        merged_into_person_id: null
    - claim:
        id: c_zPl6HhLsSErjEQEdIcYARY
        subject_person_id: p_jvFn64p1o8kXZW3RThKb7Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2WkB5UHe7A5kLMMt82Na3L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uLhpMAJEWkS_f-ebMqybtc
          claim_id: c_zPl6HhLsSErjEQEdIcYARY
          source_id: s_uMbs1JEvz86ocgPbcdeRN4
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jvFn64p1o8kXZW3RThKb7Q
        status: active
        display_name: 王誥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之士 | accepted |
| birth.date | 1536年 | accepted |
| death.date | 1592年 | accepted |
| bio.summary | 王之士（1536年—1592年），明人物。明清進士進士，籍贯鄒平，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 126462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_an8AZhFejWmrpm1FYeSJN6 | 王陽 | accepted |
| spouses | p_LzEELjJoPgtvqqg3hCWYLG | 韓氏 | accepted |
| ancestors | p_CPD7SKaQjjP9hwueEGdFvK | 王晟 | accepted |
| ancestors | p_jvFn64p1o8kXZW3RThKb7Q | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓氏(王之士妻)（CBDB 334259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334259&o=json)
- [中国历代人物传记资料库：王之士（CBDB 126462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126462&o=json)

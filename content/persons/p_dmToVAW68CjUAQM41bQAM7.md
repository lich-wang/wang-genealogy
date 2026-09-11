---
schema: wang-person/v1
id: p_dmToVAW68CjUAQM41bQAM7
status: active
merged_into: null
display_name: 王世雍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F7JoPPrjGK8QK4qk2LLNqV
        subject_person_id: p_dmToVAW68CjUAQM41bQAM7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世雍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QcoTYV61KdEDBJT7NfQJn8
          claim_id: c_F7JoPPrjGK8QK4qk2LLNqV
          source_id: s_MteD2GZsVB7qEbg4aAkNb8
          stance: supports
          locator: CBDB:202939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202939）
          source: &a1
            id: s_MteD2GZsVB7qEbg4aAkNb8
            source_type: api_record
            title: 中国历代人物传记资料库：王世雍（CBDB 202939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202939&o=json
            external_identifier: CBDB:202939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1J4AP6niQuxx6F13Gn3g7f
        subject_person_id: p_dmToVAW68CjUAQM41bQAM7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1501年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8rP3vcjubmeEi7rQgpbxdi
          claim_id: c_1J4AP6niQuxx6F13Gn3g7f
          source_id: s_MteD2GZsVB7qEbg4aAkNb8
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
        id: c_pw73nnm4nTDPsRx1PQ21EL
        subject_person_id: p_dmToVAW68CjUAQM41bQAM7
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
        - id: cs_m9myHzowvnVkS61FjhNrXi
          claim_id: c_pw73nnm4nTDPsRx1PQ21EL
          source_id: s_MteD2GZsVB7qEbg4aAkNb8
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
        id: c_R9K4g426tq49aTHWkwhngL
        subject_person_id: p_qnL6JTk4AmGBe9uJN2PZjY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dmToVAW68CjUAQM41bQAM7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fPF64qxtXdA5CbKFnnAjQT
          claim_id: c_R9K4g426tq49aTHWkwhngL
          source_id: s_MteD2GZsVB7qEbg4aAkNb8
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qnL6JTk4AmGBe9uJN2PZjY
        status: active
        display_name: 王杲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_X3jDJbfH6Eemk5yBQZeouI
        subject_person_id: p_XkZdnDcNgm4x11EVgh6CqK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dmToVAW68CjUAQM41bQAM7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zt2q3N9I58d5X9HviOI4r8
          claim_id: c_X3jDJbfH6Eemk5yBQZeouI
          source_id: s_MteD2GZsVB7qEbg4aAkNb8
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XkZdnDcNgm4x11EVgh6CqK
        status: active
        display_name: 王釗
        merged_into_person_id: null
    - claim:
        id: c_yx6vamv_X59nZonFhLjOPW
        subject_person_id: p_u69LKR4SQaEEAYJvCcdg5V
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dmToVAW68CjUAQM41bQAM7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uw23aqk_EKW9KR8kTiGewy
          claim_id: c_yx6vamv_X59nZonFhLjOPW
          source_id: s_MteD2GZsVB7qEbg4aAkNb8
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第九十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_u69LKR4SQaEEAYJvCcdg5V
        status: active
        display_name: 王端
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世雍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世雍 | accepted |
| birth.date | 1501年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qnL6JTk4AmGBe9uJN2PZjY | 王杲 | accepted |
| ancestors | p_XkZdnDcNgm4x11EVgh6CqK | 王釗 | accepted |
| ancestors | p_u69LKR4SQaEEAYJvCcdg5V | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世雍（CBDB 202939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202939&o=json)

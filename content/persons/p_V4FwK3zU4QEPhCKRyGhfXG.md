---
schema: wang-person/v1
id: p_V4FwK3zU4QEPhCKRyGhfXG
status: active
merged_into: null
display_name: 王問
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J8BZx8LBLyGhJmmoHuLcaK
        subject_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7HwHGAvS5cWzv2piPTNGn1
          claim_id: c_J8BZx8LBLyGhJmmoHuLcaK
          source_id: s_9RzXF57vR5CxGLrLEAiBPA
          stance: supports
          locator: CBDB:199435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199435）
          source: &a1
            id: s_9RzXF57vR5CxGLrLEAiBPA
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 199435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199435&o=json
            external_identifier: CBDB:199435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xqzRTkENfSnJXeF3JdjgTJ
        subject_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1441年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hHCF3Ux56dyXfBCfYLP3tZ
          claim_id: c_xqzRTkENfSnJXeF3JdjgTJ
          source_id: s_9RzXF57vR5CxGLrLEAiBPA
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
        id: c_Jxwk75MnNqtJEc54jwNCKA
        subject_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
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
        - id: cs_wF1L49F8LHuiPw23LywdPQ
          claim_id: c_Jxwk75MnNqtJEc54jwNCKA
          source_id: s_9RzXF57vR5CxGLrLEAiBPA
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
        id: c_2qxJ5_C_Z0SbidN2l4S4ui
        subject_person_id: p_GcBvHSffABPszyHqYWBM3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmOrZzlVPH5VQVLExrchBs
          claim_id: c_2qxJ5_C_Z0SbidN2l4S4ui
          source_id: s_VsxZMjTKLcLm5T17FbA1Zd
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VsxZMjTKLcLm5T17FbA1Zd
            source_type: api_record
            title: 中国历代人物传记资料库：王循（CBDB 244955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244955&o=json
            external_identifier: CBDB:244955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GcBvHSffABPszyHqYWBM3f
        status: active
        display_name: 王循
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_bIonGj3XaZeBCxQXA4alDO
        subject_person_id: p_gPxjSLrcRkcbqzAo1NC5Gm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AiSvGdI1QQQ8bKO9sH9eqQ
          claim_id: c_bIonGj3XaZeBCxQXA4alDO
          source_id: s_hqFGY2fJ5wJvMKrbNNz7EJ
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hqFGY2fJ5wJvMKrbNNz7EJ
            source_type: api_record
            title: 中国历代人物传记资料库：王仲禮（CBDB 244954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244954&o=json
            external_identifier: CBDB:244954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gPxjSLrcRkcbqzAo1NC5Gm
        status: active
        display_name: 王仲禮
        merged_into_person_id: null
    - claim:
        id: c_jbKJENWLeQiaFnA2BeHi0n
        subject_person_id: p_uXdxzkne55hz196gT7ThgP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_V4FwK3zU4QEPhCKRyGhfXG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7oiTTeBW3vjn7rvlYUvPX1
          claim_id: c_jbKJENWLeQiaFnA2BeHi0n
          source_id: s_QaEUc5d45zGWRxn1Ky7pfY
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QaEUc5d45zGWRxn1Ky7pfY
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 244953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244953&o=json
            external_identifier: CBDB:244953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uXdxzkne55hz196gT7ThgP
        status: active
        display_name: 王思誠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問 | accepted |
| birth.date | 1441年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GcBvHSffABPszyHqYWBM3f | 王循 | accepted |
| ancestors | p_gPxjSLrcRkcbqzAo1NC5Gm | 王仲禮 | accepted |
| ancestors | p_uXdxzkne55hz196gT7ThgP | 王思誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 244953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244953&o=json)
- [中国历代人物传记资料库：王問（CBDB 199435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199435&o=json)
- [中国历代人物传记资料库：王循（CBDB 244955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244955&o=json)
- [中国历代人物传记资料库：王仲禮（CBDB 244954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244954&o=json)

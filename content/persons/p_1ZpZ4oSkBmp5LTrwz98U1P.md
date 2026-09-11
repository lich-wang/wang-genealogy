---
schema: wang-person/v1
id: p_1ZpZ4oSkBmp5LTrwz98U1P
status: active
merged_into: null
display_name: 王璒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uExcdKtCU6hEq5Vr5jEFPx
        subject_person_id: p_1ZpZ4oSkBmp5LTrwz98U1P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XRQTfEkqV94WKKzMY15Sew
          claim_id: c_uExcdKtCU6hEq5Vr5jEFPx
          source_id: s_NKRe2AbML1THQe9ZjP6YLj
          stance: supports
          locator: CBDB:126824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126824）
          source: &a1
            id: s_NKRe2AbML1THQe9ZjP6YLj
            source_type: api_record
            title: 中国历代人物传记资料库：王璒（CBDB 126824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126824&o=json
            external_identifier: CBDB:126824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cZnGP6vJ7Uj8oPMNoxGjgq
        subject_person_id: p_1ZpZ4oSkBmp5LTrwz98U1P
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
        - id: cs_KPw5WGLzvqFBXL4eq6FAam
          claim_id: c_cZnGP6vJ7Uj8oPMNoxGjgq
          source_id: s_NKRe2AbML1THQe9ZjP6YLj
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
        id: c_yRHLG5tyruAZ7jA0666OtB
        subject_person_id: p_emX7f7ZNYGdtrayueB5cGr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1ZpZ4oSkBmp5LTrwz98U1P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B5WOtFYA_4UEaX3qMAoBAd
          claim_id: c_yRHLG5tyruAZ7jA0666OtB
          source_id: s_NKRe2AbML1THQe9ZjP6YLj
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_emX7f7ZNYGdtrayueB5cGr
        status: active
        display_name: 王勛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_86QzFWB13J4NdCGfYQ5Efv
        subject_person_id: p_1ZpZ4oSkBmp5LTrwz98U1P
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3HyttLoPqbPoHkJk2CRTvs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JXQPZGizNRtikloe8bqxFx
          claim_id: c_86QzFWB13J4NdCGfYQ5Efv
          source_id: s_nq6kHamdx2agcjiAbRk-s6
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nq6kHamdx2agcjiAbRk-s6
            source_type: api_record
            title: 中国历代人物传记资料库：岳氏(王璒妻)（CBDB 332689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332689&o=json
            external_identifier: CBDB:332689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3HyttLoPqbPoHkJk2CRTvs
        status: active
        display_name: 岳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_zMg1zZPXO4Z4XxLlTXk8mk
        subject_person_id: p_86LNBmYKZz7jpSCGU33GA7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1ZpZ4oSkBmp5LTrwz98U1P
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oiNtGtJYrzih4uh6le8U7R
          claim_id: c_zMg1zZPXO4Z4XxLlTXk8mk
          source_id: s_NKRe2AbML1THQe9ZjP6YLj
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_86LNBmYKZz7jpSCGU33GA7
        status: active
        display_name: 王成
        merged_into_person_id: null
    - claim:
        id: c_Hz8D7cFUguCFEGjhzDnEI9
        subject_person_id: p_bjfrEWAYPSWh3qAFC84YCF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1ZpZ4oSkBmp5LTrwz98U1P
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JdGefEqeCrRk4bMZlCM6GG
          claim_id: c_Hz8D7cFUguCFEGjhzDnEI9
          source_id: s_NKRe2AbML1THQe9ZjP6YLj
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bjfrEWAYPSWh3qAFC84YCF
        status: active
        display_name: 王福順
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_emX7f7ZNYGdtrayueB5cGr | 王勛 | accepted |
| spouses | p_3HyttLoPqbPoHkJk2CRTvs | 岳氏 | accepted |
| ancestors | p_86LNBmYKZz7jpSCGU33GA7 | 王成 | accepted |
| ancestors | p_bjfrEWAYPSWh3qAFC84YCF | 王福順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璒（CBDB 126824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126824&o=json)
- [中国历代人物传记资料库：岳氏(王璒妻)（CBDB 332689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332689&o=json)

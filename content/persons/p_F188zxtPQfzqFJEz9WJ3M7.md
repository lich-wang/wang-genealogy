---
schema: wang-person/v1
id: p_F188zxtPQfzqFJEz9WJ3M7
status: active
merged_into: null
display_name: 王象乾
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9p7X7o6PuBaQwRmGZ2nBWE
        subject_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王象乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q1Whymec68cWuJbJbJYZ7u
          claim_id: c_9p7X7o6PuBaQwRmGZ2nBWE
          source_id: s_sVk4fUqFJQVM6MXSNGzJ63
          stance: supports
          locator: CBDB:65764
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（65764）
          source: &a1
            id: s_sVk4fUqFJQVM6MXSNGzJ63
            source_type: api_record
            title: 中国历代人物传记资料库：王象乾（CBDB 65764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65764&o=json
            external_identifier: CBDB:65764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cx7ckeXGpTzkDKhupeu5vG
        subject_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1630年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMtrUJD6GsnejqkGQxPsNG
          claim_id: c_cx7ckeXGpTzkDKhupeu5vG
          source_id: s_sVk4fUqFJQVM6MXSNGzJ63
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
        id: c_iHSw6sVbV8sGLJHEUv8sHK
        subject_person_id: p_F188zxtPQfzqFJEz9WJ3M7
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
        - id: cs_BmEKDYegFCxPMMfhPRcrb4
          claim_id: c_iHSw6sVbV8sGLJHEUv8sHK
          source_id: s_sVk4fUqFJQVM6MXSNGzJ63
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
        id: c_dFHk5UMzKDOWwYzZswXZ_V
        subject_person_id: p_fGrZaFxBB3nnx1rYYKLtZE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oA4_jRBupurZoSkNoEaptS
          claim_id: c_dFHk5UMzKDOWwYzZswXZ_V
          source_id: s_mmcgLQPmy3Q4M5xVZEb4UB
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mmcgLQPmy3Q4M5xVZEb4UB
            source_type: api_record
            title: 中国历代人物传记资料库：王之垣（CBDB 211354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211354&o=json
            external_identifier: CBDB:211354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.027Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fGrZaFxBB3nnx1rYYKLtZE
        status: active
        display_name: 王之垣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_TgRzaIDr7KpUgua7Kab9DO
        subject_person_id: p_6B46xfsBHuon3WVtJCQRJK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MKfBCFb9nYAnQok2-kDgk5
          claim_id: c_TgRzaIDr7KpUgua7Kab9DO
          source_id: s_GxeLkEJYqKPBDdaVPgF6HG
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十二名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GxeLkEJYqKPBDdaVPgF6HG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：畢氏（211357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211357&o=json
            external_identifier: CBDB:211357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:42.343Z
            metadata_json: null
      object_person:
        id: p_6B46xfsBHuon3WVtJCQRJK
        status: active
        display_name: 毕氏
        merged_into_person_id: null
    - claim:
        id: c_E9h11jIIj94QKTU4AkgXrb
        subject_person_id: p_a5vJPZn1znnbX98EG3cueA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SpoJRr3R4xuwEE4In4n1qx
          claim_id: c_E9h11jIIj94QKTU4AkgXrb
          source_id: s_GaxDV9z9Ec1yBmMTLzgF4i
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十二名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GaxDV9z9Ec1yBmMTLzgF4i
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：孟氏（211358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211358&o=json
            external_identifier: CBDB:211358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:42.326Z
            metadata_json: null
      object_person:
        id: p_a5vJPZn1znnbX98EG3cueA
        status: active
        display_name: 孟氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_dacegnjVI6qa-9JLNXbQ-4
        subject_person_id: p_ekUUUcSyzN6WhRbt4eNPox
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_McT5s5_9gR4hp74QaBvI49
          claim_id: c_dacegnjVI6qa-9JLNXbQ-4
          source_id: s_UPbhN87m2i3NV2QMsCPaZa
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UPbhN87m2i3NV2QMsCPaZa
            source_type: api_record
            title: 中国历代人物传记资料库：王重光（CBDB 220262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220262&o=json
            external_identifier: CBDB:220262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ekUUUcSyzN6WhRbt4eNPox
        status: active
        display_name: 王重光
        merged_into_person_id: null
    - claim:
        id: c_P17Pj_2krE8r923oIzfvdK
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_F188zxtPQfzqFJEz9WJ3M7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__OUH7KFisnfMSIxF4-4c71
          claim_id: c_P17Pj_2krE8r923oIzfvdK
          source_id: s_3zCeacwcDkrZyMjH7kCBJZ
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3zCeacwcDkrZyMjH7kCBJZ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王麟（220261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220261&o=json
            external_identifier: CBDB:220261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:09.445Z
            metadata_json: null
      object_person:
        id: p_dFBcsKbnFVcHN4YTvXeRwY
        status: active
        display_name: 王麟
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王象乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王象乾 | accepted |
| death.date | 1630年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fGrZaFxBB3nnx1rYYKLtZE | 王之垣 | accepted |
| spouses | p_6B46xfsBHuon3WVtJCQRJK | 毕氏 | accepted |
| spouses | p_a5vJPZn1znnbX98EG3cueA | 孟氏 | accepted |
| ancestors | p_ekUUUcSyzN6WhRbt4eNPox | 王重光 | accepted |
| ancestors | p_dFBcsKbnFVcHN4YTvXeRwY | 王麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王象乾（CBDB 65764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65764&o=json)
- [中国历代人物传记资料库：王之垣（CBDB 211354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211354&o=json)
- [中国历代人物传记资料库：王重光（CBDB 220262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220262&o=json)
- [CBDB 中国历代人物传记资料库：畢氏（211357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211357&o=json)
- [CBDB 中国历代人物传记资料库：孟氏（211358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211358&o=json)
- [CBDB 中国历代人物传记资料库：王麟（220261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220261&o=json)

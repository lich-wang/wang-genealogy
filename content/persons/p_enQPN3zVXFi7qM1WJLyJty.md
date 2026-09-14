---
schema: wang-person/v1
id: p_enQPN3zVXFi7qM1WJLyJty
status: active
merged_into: null
display_name: 王汝楫
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1EYHDmrdsETtACzw5KJqVL
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f6T9EDAjYCVXbpDzvKjxxf
          claim_id: c_1EYHDmrdsETtACzw5KJqVL
          source_id: s_g7XW5CaMVygR9LNxD68Hvg
          stance: supports
          locator: CBDB:288211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288211）
          source: &a1
            id: s_g7XW5CaMVygR9LNxD68Hvg
            source_type: api_record
            title: 中国历代人物传记资料库：王汝楫（CBDB 288211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288211&o=json
            external_identifier: CBDB:288211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bh5iSQJGsNCHMcr8xLNtvT
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝楫，明人物。嘉靖八年進士，籍贯襄城，曾任訓導。（中国历代人物传记资料库 CBDB 288211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j01zKK0xQ5nB0AVP8V3Gq2
          claim_id: c_Bh5iSQJGsNCHMcr8xLNtvT
          source_id: s_g7XW5CaMVygR9LNxD68Hvg
          stance: supports
          locator: CBDB:288211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SItaAQDQCEo-vRa5EB8LZb
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TTntK269568eA9RALQmA43
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E65I1rEbSwWRvIxr4jXfET
          claim_id: c_SItaAQDQCEo-vRa5EB8LZb
          source_id: s_g7XW5CaMVygR9LNxD68Hvg
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TTntK269568eA9RALQmA43
        status: active
        display_name: 王納言
        merged_into_person_id: null
    - claim:
        id: c_GBjp9_V4ax3IqtqEbKFJtk
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6ztBg2EgJwXATmnfE6XEgT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GEAyTqb9htlaJ_Nf6JrQmt
          claim_id: c_GBjp9_V4ax3IqtqEbKFJtk
          source_id: s_upzvJwWKbCC05rtwN3AfyE
          stance: supports
          locator: CBDB：兄弟 王納言（68459）之父／母 王汝楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王納謨 与 王納言 为同胞（CBDB 记「兄」），王納言 之父／母即 王納謨 之父／母。
          source:
            id: s_upzvJwWKbCC05rtwN3AfyE
            source_type: api_record
            title: 中国历代人物传记资料库：王納謨（CBDB 288217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288217&o=json
            external_identifier: CBDB:288217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ztBg2EgJwXATmnfE6XEgT
        status: active
        display_name: 王納謨
        merged_into_person_id: null
    - claim:
        id: c_ws0SGRTKOcqqR-hDcHU3ta
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Sp1kg55E8GaHteMGLQNA8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U5Gn9PYST6b9xSx2YUURs8
          claim_id: c_ws0SGRTKOcqqR-hDcHU3ta
          source_id: s_ZXQ8OVVQ9GafszhoqS2_tI
          stance: supports
          locator: CBDB：兄弟 王納言（68459）之父／母 王汝楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王納諫 与 王納言 为同胞（CBDB 记「兄」），王納言 之父／母即 王納諫 之父／母。
          source:
            id: s_ZXQ8OVVQ9GafszhoqS2_tI
            source_type: api_record
            title: 中国历代人物传记资料库：王納諫（CBDB 288216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288216&o=json
            external_identifier: CBDB:288216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Sp1kg55E8GaHteMGLQNA8
        status: active
        display_name: 王納諫
        merged_into_person_id: null
    - claim:
        id: c_-hz7KitrkRXkhVLirwV2pM
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U3pj5GzZLQGz1yWYaMs4YU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9yaDxTcls76KuFxG33r5h7
          claim_id: c_-hz7KitrkRXkhVLirwV2pM
          source_id: s_iwtxCF2o5sQ9JBUffppZj8
          stance: supports
          locator: CBDB：兄弟 王納言（68459）之父／母 王汝楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王納訓 与 王納言 为同胞（CBDB 记「兄」），王納言 之父／母即 王納訓 之父／母。
          source:
            id: s_iwtxCF2o5sQ9JBUffppZj8
            source_type: api_record
            title: 中国历代人物传记资料库：王納訓（CBDB 288218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288218&o=json
            external_identifier: CBDB:288218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U3pj5GzZLQGz1yWYaMs4YU
        status: active
        display_name: 王納訓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝楫 | accepted |
| bio.summary | 王汝楫，明人物。嘉靖八年進士，籍贯襄城，曾任訓導。（中国历代人物传记资料库 CBDB 288211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TTntK269568eA9RALQmA43 | 王納言 | accepted |
| children | p_6ztBg2EgJwXATmnfE6XEgT | 王納謨 | accepted |
| children | p_8Sp1kg55E8GaHteMGLQNA8 | 王納諫 | accepted |
| children | p_U3pj5GzZLQGz1yWYaMs4YU | 王納訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納諫（CBDB 288216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288216&o=json)
- [中国历代人物传记资料库：王納謨（CBDB 288217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288217&o=json)
- [中国历代人物传记资料库：王納訓（CBDB 288218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288218&o=json)
- [中国历代人物传记资料库：王汝楫（CBDB 288211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288211&o=json)

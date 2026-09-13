---
schema: wang-person/v1
id: p_PKmXoEz6WVxAL58MjFwTD2
status: active
merged_into: null
display_name: 王景信
cbdb_id: 257072
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SphWMhZxTbEW5eby2qAeNq
        subject_person_id: p_PKmXoEz6WVxAL58MjFwTD2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景信，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 257072）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_6KSTqCs-k3SPGn6oBebl4V
          claim_id: c_SphWMhZxTbEW5eby2qAeNq
          source_id: s_irHFsBsd3Vj6JT14getcVT
          stance: supports
          locator: CBDB:257072
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_irHFsBsd3Vj6JT14getcVT
            source_type: api_record
            title: 中国历代人物传记资料库：王景信（CBDB 257072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257072&o=json
            external_identifier: CBDB:257072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WynF6Nh4TeKTSpV5mCEUMp
        subject_person_id: p_PKmXoEz6WVxAL58MjFwTD2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NKtyrsRUKGd5iGAS41adSH
          claim_id: c_WynF6Nh4TeKTSpV5mCEUMp
          source_id: s_irHFsBsd3Vj6JT14getcVT
          stance: supports
          locator: CBDB:257072
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Bg6PlvOJH45FGFgrxfp-vg
        subject_person_id: p_PKmXoEz6WVxAL58MjFwTD2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FebULYZ1Mok5osGeZL97Vp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wy3-4JpO2N11uIkY_-F1sm
          claim_id: c_Bg6PlvOJH45FGFgrxfp-vg
          source_id: s_irHFsBsd3Vj6JT14getcVT
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a2
            id: s_irHFsBsd3Vj6JT14getcVT
            source_type: api_record
            title: 中国历代人物传记资料库：王景信（CBDB 257072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257072&o=json
            external_identifier: CBDB:257072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FebULYZ1Mok5osGeZL97Vp
        status: active
        display_name: 王嶽
        merged_into_person_id: null
    - claim:
        id: c_dVGzw9cAQLJt9u1VqlphiH
        subject_person_id: p_PKmXoEz6WVxAL58MjFwTD2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vDzf6isJ8G9fr8y7scc2fq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kr6_aUSul1R4fcVXyI5qYZ
          claim_id: c_dVGzw9cAQLJt9u1VqlphiH
          source_id: s_irHFsBsd3Vj6JT14getcVT
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_vDzf6isJ8G9fr8y7scc2fq
        status: active
        display_name: 王崑
        merged_into_person_id: null
  other: []
---

# 王景信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景信，明人物。成化十七年進士。（中国历代人物传记资料库 CBDB 257072） | accepted |
| name.primary | 王景信 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FebULYZ1Mok5osGeZL97Vp | 王嶽 | accepted |
| descendants | p_vDzf6isJ8G9fr8y7scc2fq | 王崑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景信（CBDB 257072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257072&o=json)

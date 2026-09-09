---
schema: wang-person/v1
id: p_GZ11NySmttrD94bxvY4MjB
status: active
merged_into: null
display_name: 王秀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ZC5rDxwh7jxiNv1M2XyEA
        subject_person_id: p_GZ11NySmttrD94bxvY4MjB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hKV5pGF5W1tL5CBG58LaKv
          claim_id: c_8ZC5rDxwh7jxiNv1M2XyEA
          source_id: s_bp2XtND3FFNrhJyV1vEziD
          stance: supports
          locator: CBDB:243556
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243556）
          source: &a1
            id: s_bp2XtND3FFNrhJyV1vEziD
            source_type: api_record
            title: 中国历代人物传记资料库：王秀（CBDB 243556）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243556&o=json
            external_identifier: CBDB:243556
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MWCfUGJ3D1ngkCM9bT9DHC
        subject_person_id: p_GZ11NySmttrD94bxvY4MjB
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
        - id: cs_EY6KQz9F1PTDpwgaHRiPvy
          claim_id: c_MWCfUGJ3D1ngkCM9bT9DHC
          source_id: s_bp2XtND3FFNrhJyV1vEziD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants: []
  other: []
---

# 王秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秀（CBDB 243556）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243556&o=json)

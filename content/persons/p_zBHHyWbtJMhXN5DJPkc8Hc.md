---
schema: wang-person/v1
id: p_zBHHyWbtJMhXN5DJPkc8Hc
status: active
merged_into: null
display_name: 王桂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xp1VLR1iqUGLk5qHnF4Rdv
        subject_person_id: p_zBHHyWbtJMhXN5DJPkc8Hc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zs4GVgiDjwqTL99jxwrZr1
          claim_id: c_xp1VLR1iqUGLk5qHnF4Rdv
          source_id: s_j4JuHjJWKKRprStDTjPqN4
          stance: supports
          locator: CBDB:281418
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281418）
          source: &a1
            id: s_j4JuHjJWKKRprStDTjPqN4
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 281418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281418&o=json
            external_identifier: CBDB:281418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jjA7aoCULHVT4U61TvuTQ9
        subject_person_id: p_zBHHyWbtJMhXN5DJPkc8Hc
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
        - id: cs_c3zntUbdaNAFw8jBVQ917U
          claim_id: c_jjA7aoCULHVT4U61TvuTQ9
          source_id: s_j4JuHjJWKKRprStDTjPqN4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9vbOyrwBCjCWYWUjw6yhHu
        subject_person_id: p_zBHHyWbtJMhXN5DJPkc8Hc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2bM722d9X3YmbYXbBeCDTM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r0y-l25MqSdwHcBHKi901x
          claim_id: c_9vbOyrwBCjCWYWUjw6yhHu
          source_id: s_HKUvL6tDCQPamiF1rrU2Yi
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HKUvL6tDCQPamiF1rrU2Yi
            source_type: api_record
            title: 中国历代人物传记资料库：王敬中（CBDB 198032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198032&o=json
            external_identifier: CBDB:198032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2bM722d9X3YmbYXbBeCDTM
        status: active
        display_name: 王敬中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2bM722d9X3YmbYXbBeCDTM | 王敬中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 281418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281418&o=json)
- [中国历代人物传记资料库：王敬中（CBDB 198032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198032&o=json)

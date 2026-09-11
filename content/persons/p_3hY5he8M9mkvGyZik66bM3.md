---
schema: wang-person/v1
id: p_3hY5he8M9mkvGyZik66bM3
status: active
merged_into: null
display_name: 王室垣
cbdb_id: 206814
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1XMyJH8xSTVJxCMouR9173
        subject_person_id: p_3hY5he8M9mkvGyZik66bM3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室垣（生于1558年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206814 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ebBZ7Npkrz1Vy7QAFjR5PS
          claim_id: c_1XMyJH8xSTVJxCMouR9173
          source_id: s_o26X9XWHdJQ11dYjztxqGq
          stance: supports
          locator: CBDB:206814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_o26X9XWHdJQ11dYjztxqGq
            source_type: api_record
            title: 中国历代人物传记资料库：王室垣（CBDB 206814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206814&o=json
            external_identifier: CBDB:206814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fbYrpn19suz8JBff4TMKF4
        subject_person_id: p_3hY5he8M9mkvGyZik66bM3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1558-01-01
            latest: 1558-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vQGxdLGZDkpHmmpqN3TyAn
          claim_id: c_fbYrpn19suz8JBff4TMKF4
          source_id: s_o26X9XWHdJQ11dYjztxqGq
          stance: supports
          locator: CBDB:206814
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source:
            id: s_o26X9XWHdJQ11dYjztxqGq
            source_type: api_record
            title: 中国历代人物传记资料库：王室垣（CBDB 206814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206814&o=json
            external_identifier: CBDB:206814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eK7SZT71H7hmuWa5hNHpH8
        subject_person_id: p_3hY5he8M9mkvGyZik66bM3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dPhTE3tkt5JCYkHXZpC4z8
          claim_id: c_eK7SZT71H7hmuWa5hNHpH8
          source_id: s_o26X9XWHdJQ11dYjztxqGq
          stance: supports
          locator: CBDB:206814
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1558
          source:
            id: s_o26X9XWHdJQ11dYjztxqGq
            source_type: api_record
            title: 中国历代人物传记资料库：王室垣（CBDB 206814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206814&o=json
            external_identifier: CBDB:206814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gJKqfiiNj9XLC663rK-QPv
        subject_person_id: p_bGYu4dMVakhcDXuLef1B17
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3hY5he8M9mkvGyZik66bM3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xVHZW_nUprxfPhhmYV_IKj
          claim_id: c_gJKqfiiNj9XLC663rK-QPv
          source_id: s_M5ZHDtzGX4x4M6YPu3XKaf
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M5ZHDtzGX4x4M6YPu3XKaf
            source_type: api_record
            title: 中国历代人物传记资料库：王一舉（CBDB 223627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223627&o=json
            external_identifier: CBDB:223627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.419Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bGYu4dMVakhcDXuLef1B17
        status: active
        display_name: 王一舉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Ovzx-w7IFnpA0tBkninQkf
        subject_person_id: p_jEj3xe4s8v8GyN8ATcB2q1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3hY5he8M9mkvGyZik66bM3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5yXhZ_ev5p3M0viCOJpKLc
          claim_id: c_Ovzx-w7IFnpA0tBkninQkf
          source_id: s_F5yyiH9EAK3DEA3GHPEG7P
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F5yyiH9EAK3DEA3GHPEG7P
            source_type: api_record
            title: 中国历代人物传记资料库：王宗舜（CBDB 223625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223625&o=json
            external_identifier: CBDB:223625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jEj3xe4s8v8GyN8ATcB2q1
        status: active
        display_name: 王宗舜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王室垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王室垣（生于1558年），明人物。中国历代人物传记资料库（CBDB）以人物编号 206814 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1558年 | accepted |
| name.primary | 王室垣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bGYu4dMVakhcDXuLef1B17 | 王一舉 | accepted |
| ancestors | p_jEj3xe4s8v8GyN8ATcB2q1 | 王宗舜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王室垣（CBDB 206814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206814&o=json)
- [中国历代人物传记资料库：王一舉（CBDB 223627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223627&o=json)
- [中国历代人物传记资料库：王宗舜（CBDB 223625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223625&o=json)

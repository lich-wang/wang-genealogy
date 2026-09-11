---
schema: wang-person/v1
id: p_8SbCCMPhrmycTk2h456Vi5
status: active
merged_into: null
display_name: 王璬
cbdb_id: 151615
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jNZ8CuCWMuzNXnK6fG4LiX
        subject_person_id: p_8SbCCMPhrmycTk2h456Vi5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璬，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151615 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_aRb80QPcUneytKlmlCsOlp
          claim_id: c_jNZ8CuCWMuzNXnK6fG4LiX
          source_id: s_cy6xHj13oDdeKTWqXx5j4F
          stance: supports
          locator: CBDB:151615
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_cy6xHj13oDdeKTWqXx5j4F
            source_type: api_record
            title: 中国历代人物传记资料库：王璬（CBDB 151615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151615&o=json
            external_identifier: CBDB:151615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UnChPqTCQiuUAzPpKGCvRK
        subject_person_id: p_8SbCCMPhrmycTk2h456Vi5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fPoUjNEftGg9AnkfK39mH1
          claim_id: c_UnChPqTCQiuUAzPpKGCvRK
          source_id: s_cy6xHj13oDdeKTWqXx5j4F
          stance: supports
          locator: CBDB:151615
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_cy6xHj13oDdeKTWqXx5j4F
            source_type: api_record
            title: 中国历代人物传记资料库：王璬（CBDB 151615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151615&o=json
            external_identifier: CBDB:151615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NKml_Vt7J_E98vtVN3-iit
        subject_person_id: p_DLG1zgaXP3p4Uge6Aa7xhu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8SbCCMPhrmycTk2h456Vi5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGb9pr4ur9hp9fT7hCwdmi
          claim_id: c_NKml_Vt7J_E98vtVN3-iit
          source_id: s_u5bE1VMMVfzsJ4j4D5A4fr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 134：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_u5bE1VMMVfzsJ4j4D5A4fr
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 140408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140408&o=json
            external_identifier: CBDB:140408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DLG1zgaXP3p4Uge6Aa7xhu
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王璬，唐人物。中国历代人物传记资料库（CBDB）以人物编号 151615 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王璬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DLG1zgaXP3p4Uge6Aa7xhu | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璬（CBDB 151615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151615&o=json)
- [中国历代人物传记资料库：王慶（CBDB 140408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140408&o=json)

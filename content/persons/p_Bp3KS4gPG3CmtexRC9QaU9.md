---
schema: wang-person/v1
id: p_Bp3KS4gPG3CmtexRC9QaU9
status: active
merged_into: null
display_name: 王華一
cbdb_id: 250566
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n2inJ4UYmfa1qceCHYZQE5
        subject_person_id: p_Bp3KS4gPG3CmtexRC9QaU9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華一，明人物。中国历代人物传记资料库（CBDB）以人物编号 250566 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_y_NCHofJpfYiVUEub9FWG9
          claim_id: c_n2inJ4UYmfa1qceCHYZQE5
          source_id: s_Qf3tgAv5u7Neq2JrHYNy3N
          stance: supports
          locator: CBDB:250566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Qf3tgAv5u7Neq2JrHYNy3N
            source_type: api_record
            title: 中国历代人物传记资料库：王華一（CBDB 250566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250566&o=json
            external_identifier: CBDB:250566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gU15Gu9s1rkBsAiQB2dM7N
        subject_person_id: p_Bp3KS4gPG3CmtexRC9QaU9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4XL7F9QjUVB9YKdWEfmLqf
          claim_id: c_gU15Gu9s1rkBsAiQB2dM7N
          source_id: s_Qf3tgAv5u7Neq2JrHYNy3N
          stance: supports
          locator: CBDB:250566
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_Qf3tgAv5u7Neq2JrHYNy3N
            source_type: api_record
            title: 中国历代人物传记资料库：王華一（CBDB 250566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250566&o=json
            external_identifier: CBDB:250566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_Qz5gCpC5s71qt-DJKZ1DCJ
        subject_person_id: p_Bp3KS4gPG3CmtexRC9QaU9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GGm15a95bmjM4yFUpB9QGR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ug_5BcJQoXWelSqOBqASsE
          claim_id: c_Qz5gCpC5s71qt-DJKZ1DCJ
          source_id: s_ZFRacVdsrHF9g9mvSJ3aS2
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百九十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZFRacVdsrHF9g9mvSJ3aS2
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 338703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338703&o=json
            external_identifier: CBDB:338703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GGm15a95bmjM4yFUpB9QGR
        status: active
        display_name: 王儼
        merged_into_person_id: null
  other: []
---

# 王華一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王華一，明人物。中国历代人物传记资料库（CBDB）以人物编号 250566 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王華一 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_GGm15a95bmjM4yFUpB9QGR | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王華一（CBDB 250566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250566&o=json)
- [中国历代人物传记资料库：王儼（CBDB 338703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338703&o=json)

---
schema: wang-person/v1
id: p_smrUUFMi5vUzJvegicWQC9
status: active
merged_into: null
display_name: 王文諒
cbdb_id: 273471
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BRVeKE8pWBkUVPj2wwEAAF
        subject_person_id: p_smrUUFMi5vUzJvegicWQC9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文諒，明人物。中国历代人物传记资料库（CBDB）以人物编号 273471 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_-oQNUeYX3jjT_l9N0lNpbW
          claim_id: c_BRVeKE8pWBkUVPj2wwEAAF
          source_id: s_T74CNUuoZGbuHGGP1RZCLL
          stance: supports
          locator: CBDB:273471
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_T74CNUuoZGbuHGGP1RZCLL
            source_type: api_record
            title: 中国历代人物传记资料库：王文諒（CBDB 273471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273471&o=json
            external_identifier: CBDB:273471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_n4Js7SxtmFqLJbwmFX4UVC
        subject_person_id: p_smrUUFMi5vUzJvegicWQC9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文諒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y1YMRXtLo3n6yHHsAb7Pju
          claim_id: c_n4Js7SxtmFqLJbwmFX4UVC
          source_id: s_T74CNUuoZGbuHGGP1RZCLL
          stance: supports
          locator: CBDB:273471
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_T74CNUuoZGbuHGGP1RZCLL
            source_type: api_record
            title: 中国历代人物传记资料库：王文諒（CBDB 273471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273471&o=json
            external_identifier: CBDB:273471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
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
        id: c_YVrhaPUPOiqCKnyn-FL5cp
        subject_person_id: p_smrUUFMi5vUzJvegicWQC9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lo0MNxKLdjVENnJzAIAG5F
          claim_id: c_YVrhaPUPOiqCKnyn-FL5cp
          source_id: s_8DtRzDxXopvpFicBdQg4r9
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第二甲第八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8DtRzDxXopvpFicBdQg4r9
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 201503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json
            external_identifier: CBDB:201503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2Fu5oCqGVWkUyo9rZxcW5L
        status: active
        display_name: 王忠
        merged_into_person_id: null
  other: []
---

# 王文諒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文諒，明人物。中国历代人物传记资料库（CBDB）以人物编号 273471 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王文諒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2Fu5oCqGVWkUyo9rZxcW5L | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文諒（CBDB 273471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273471&o=json)
- [中国历代人物传记资料库：王忠（CBDB 201503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201503&o=json)

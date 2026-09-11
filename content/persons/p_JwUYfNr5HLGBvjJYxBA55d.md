---
schema: wang-person/v1
id: p_JwUYfNr5HLGBvjJYxBA55d
status: active
merged_into: null
display_name: 王道淵
cbdb_id: 286304
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xKoEtEmShDJ2QSJWUsGi2d
        subject_person_id: p_JwUYfNr5HLGBvjJYxBA55d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道淵，明人物。中国历代人物传记资料库（CBDB）以人物编号 286304 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_6Gc2cEfJjvGoVy0_H1w2T5
          claim_id: c_xKoEtEmShDJ2QSJWUsGi2d
          source_id: s_5GKZcADeyRpcyavSBDNoE9
          stance: supports
          locator: CBDB:286304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5GKZcADeyRpcyavSBDNoE9
            source_type: api_record
            title: 中国历代人物传记资料库：王道淵（CBDB 286304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286304&o=json
            external_identifier: CBDB:286304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jzj9EC6RbCSro4zNqY8B9J
        subject_person_id: p_JwUYfNr5HLGBvjJYxBA55d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vj8cwQb3bHKEhPVEqHGytd
          claim_id: c_Jzj9EC6RbCSro4zNqY8B9J
          source_id: s_5GKZcADeyRpcyavSBDNoE9
          stance: supports
          locator: CBDB:286304
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_5GKZcADeyRpcyavSBDNoE9
            source_type: api_record
            title: 中国历代人物传记资料库：王道淵（CBDB 286304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286304&o=json
            external_identifier: CBDB:286304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
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
        id: c_HDCwYARV9HNboUw0E-WD3O
        subject_person_id: p_JwUYfNr5HLGBvjJYxBA55d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ok9dfyMkfikcpct7fKxMS3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aqgFo0qbt2f3g1qAhVi0Xw
          claim_id: c_HDCwYARV9HNboUw0E-WD3O
          source_id: s_5GKZcADeyRpcyavSBDNoE9
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第二百零五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ok9dfyMkfikcpct7fKxMS3
        status: active
        display_name: 王璜
        merged_into_person_id: null
  other: []
---

# 王道淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道淵，明人物。中国历代人物传记资料库（CBDB）以人物编号 286304 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王道淵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ok9dfyMkfikcpct7fKxMS3 | 王璜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道淵（CBDB 286304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286304&o=json)

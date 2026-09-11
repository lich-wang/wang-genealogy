---
schema: wang-person/v1
id: p_8CdN36FbF54RVCMd92N8La
status: active
merged_into: null
display_name: 王允某
cbdb_id: 291910
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z6P1xrpy9FFnhviu6d5cbp
        subject_person_id: p_8CdN36FbF54RVCMd92N8La
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允某，明人物。中国历代人物传记资料库（CBDB）以人物编号 291910 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tObXKs-huN5wAtenm4IX0F
          claim_id: c_z6P1xrpy9FFnhviu6d5cbp
          source_id: s_uG9ZYAwAD933EVzSBy2vLs
          stance: supports
          locator: CBDB:291910
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uG9ZYAwAD933EVzSBy2vLs
            source_type: api_record
            title: 中国历代人物传记资料库：王允某（CBDB 291910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291910&o=json
            external_identifier: CBDB:291910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xTEQ218u1r5PLrwbKHJawk
        subject_person_id: p_8CdN36FbF54RVCMd92N8La
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BLNqHEz6rMAzdRiwBngZ1v
          claim_id: c_xTEQ218u1r5PLrwbKHJawk
          source_id: s_uG9ZYAwAD933EVzSBy2vLs
          stance: supports
          locator: CBDB:291910
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_uG9ZYAwAD933EVzSBy2vLs
            source_type: api_record
            title: 中国历代人物传记资料库：王允某（CBDB 291910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291910&o=json
            external_identifier: CBDB:291910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
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
  ancestors:
    - claim:
        id: c_iQpqwfN4CqrLyQ-I88kNqC
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8CdN36FbF54RVCMd92N8La
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bMJfgN0fp5orqfMMS2LcGg
          claim_id: c_iQpqwfN4CqrLyQ-I88kNqC
          source_id: s_uG9ZYAwAD933EVzSBy2vLs
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王允某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王允某，明人物。中国历代人物传记资料库（CBDB）以人物编号 291910 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王允某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王允某（CBDB 291910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291910&o=json)

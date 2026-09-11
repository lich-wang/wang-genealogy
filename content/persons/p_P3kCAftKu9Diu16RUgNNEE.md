---
schema: wang-person/v1
id: p_P3kCAftKu9Diu16RUgNNEE
status: active
merged_into: null
display_name: 王伯儲
cbdb_id: 254945
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cf3g4mFxcQtkagGcH8jEHB
        subject_person_id: p_P3kCAftKu9Diu16RUgNNEE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯儲，明人物。中国历代人物传记资料库（CBDB）以人物编号 254945 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Pxww6afx0dIn9dfPVRLbrA
          claim_id: c_cf3g4mFxcQtkagGcH8jEHB
          source_id: s_8nVDfp7qgTricX9rUuCc7v
          stance: supports
          locator: CBDB:254945
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8nVDfp7qgTricX9rUuCc7v
            source_type: api_record
            title: 中国历代人物传记资料库：王伯儲（CBDB 254945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254945&o=json
            external_identifier: CBDB:254945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4iJPSUzZjGTKLHGHDFQ51d
        subject_person_id: p_P3kCAftKu9Diu16RUgNNEE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯儲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QbPAa8T7Di7jzF5BP6ot95
          claim_id: c_4iJPSUzZjGTKLHGHDFQ51d
          source_id: s_8nVDfp7qgTricX9rUuCc7v
          stance: supports
          locator: CBDB:254945
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_8nVDfp7qgTricX9rUuCc7v
            source_type: api_record
            title: 中国历代人物传记资料库：王伯儲（CBDB 254945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254945&o=json
            external_identifier: CBDB:254945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
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
        id: c_oxcM1wnOIJhaCNXDXADDoG
        subject_person_id: p_P3kCAftKu9Diu16RUgNNEE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G8UB9fUGo95gK5v77Cu4Q6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XVJ_ph-TANuD3LgqejQ1qe
          claim_id: c_oxcM1wnOIJhaCNXDXADDoG
          source_id: s_D8dDpacficMiYsJ44XxbBo
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第二十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D8dDpacficMiYsJ44XxbBo
            source_type: api_record
            title: 中国历代人物传记资料库：王機（CBDB 200214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200214&o=json
            external_identifier: CBDB:200214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G8UB9fUGo95gK5v77Cu4Q6
        status: active
        display_name: 王機
        merged_into_person_id: null
  other: []
---

# 王伯儲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯儲，明人物。中国历代人物传记资料库（CBDB）以人物编号 254945 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王伯儲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_G8UB9fUGo95gK5v77Cu4Q6 | 王機 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯儲（CBDB 254945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254945&o=json)
- [中国历代人物传记资料库：王機（CBDB 200214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200214&o=json)

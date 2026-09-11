---
schema: wang-person/v1
id: p_sLfupwUzfgDqZ8YZvZZpx9
status: active
merged_into: null
display_name: 王克完
cbdb_id: 210113
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zJLaAu6NCxcqgn65p5wf3g
        subject_person_id: p_sLfupwUzfgDqZ8YZvZZpx9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克完，明人物。中国历代人物传记资料库（CBDB）以人物编号 210113 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_t25vxwXbUxefUuNo88zbc8
          claim_id: c_zJLaAu6NCxcqgn65p5wf3g
          source_id: s_PmwpsbUpTbpA3oMUe6xFAT
          stance: supports
          locator: CBDB:210113
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_PmwpsbUpTbpA3oMUe6xFAT
            source_type: api_record
            title: 中国历代人物传记资料库：王克完（CBDB 210113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210113&o=json
            external_identifier: CBDB:210113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PLLSKKug1v97BGP7GsMi4F
        subject_person_id: p_sLfupwUzfgDqZ8YZvZZpx9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GnGTTQTSaqhACRmtcUsQww
          claim_id: c_PLLSKKug1v97BGP7GsMi4F
          source_id: s_PmwpsbUpTbpA3oMUe6xFAT
          stance: supports
          locator: CBDB:210113
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_PmwpsbUpTbpA3oMUe6xFAT
            source_type: api_record
            title: 中国历代人物传记资料库：王克完（CBDB 210113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210113&o=json
            external_identifier: CBDB:210113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
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
        id: c_eHQZYbxEyeNYoVIbCcC5bQ
        subject_person_id: p_sLfupwUzfgDqZ8YZvZZpx9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ty8QAStNHh_jWxK3vk7d1l
          claim_id: c_eHQZYbxEyeNYoVIbCcC5bQ
          source_id: s_4ni9ypkhqH9bL97APqjeXx
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4ni9ypkhqH9bL97APqjeXx
            source_type: api_record
            title: 中国历代人物传记资料库：王民順（CBDB 205877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json
            external_identifier: CBDB:205877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j9BHN5bLCRAdnEfQP7Yp6q
        status: active
        display_name: 王民順
        merged_into_person_id: null
  other: []
---

# 王克完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克完，明人物。中国历代人物传记资料库（CBDB）以人物编号 210113 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王克完 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_j9BHN5bLCRAdnEfQP7Yp6q | 王民順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克完（CBDB 210113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210113&o=json)
- [中国历代人物传记资料库：王民順（CBDB 205877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205877&o=json)

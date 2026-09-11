---
schema: wang-person/v1
id: p_PuxfejtYLHhEMMKN7Qz8Tp
status: active
merged_into: null
display_name: 王彥祖
cbdb_id: 525766
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mg8FCGGbfgabxNzCr73bq7
        subject_person_id: p_PuxfejtYLHhEMMKN7Qz8Tp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥祖，明人物。中国历代人物传记资料库（CBDB）以人物编号 525766 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_AbR2h4I-5423qC6V53Eg34
          claim_id: c_Mg8FCGGbfgabxNzCr73bq7
          source_id: s_RFGrP5PknaWBUaa3T6bN9z
          stance: supports
          locator: CBDB:525766
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_RFGrP5PknaWBUaa3T6bN9z
            source_type: api_record
            title: 中国历代人物传记资料库：王彥祖（CBDB 525766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525766&o=json
            external_identifier: CBDB:525766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b1tQKCya6RT8Sz8kaLxsDP
        subject_person_id: p_PuxfejtYLHhEMMKN7Qz8Tp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jc41GLAsVMcZCvNrWMiYmX
          claim_id: c_b1tQKCya6RT8Sz8kaLxsDP
          source_id: s_RFGrP5PknaWBUaa3T6bN9z
          stance: supports
          locator: CBDB:525766
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_RFGrP5PknaWBUaa3T6bN9z
            source_type: api_record
            title: 中国历代人物传记资料库：王彥祖（CBDB 525766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525766&o=json
            external_identifier: CBDB:525766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
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
        id: c__kpJ7HJPgVh5JTUGQrXbUU
        subject_person_id: p_PuxfejtYLHhEMMKN7Qz8Tp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FN2z9G7mF5F72a19HhvDMS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAvR1WeBGdc-Q7kg4uI6qs
          claim_id: c__kpJ7HJPgVh5JTUGQrXbUU
          source_id: s_3w4T7QpWZdbGyP5xC5bfyy
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11728：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3w4T7QpWZdbGyP5xC5bfyy
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 68077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68077&o=json
            external_identifier: CBDB:68077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FN2z9G7mF5F72a19HhvDMS
        status: active
        display_name: 王相
        merged_into_person_id: null
  other: []
---

# 王彥祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥祖，明人物。中国历代人物传记资料库（CBDB）以人物编号 525766 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王彥祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FN2z9G7mF5F72a19HhvDMS | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 68077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68077&o=json)
- [中国历代人物传记资料库：王彥祖（CBDB 525766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525766&o=json)

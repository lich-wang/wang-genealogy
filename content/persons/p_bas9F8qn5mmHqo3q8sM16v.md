---
schema: wang-person/v1
id: p_bas9F8qn5mmHqo3q8sM16v
status: active
merged_into: null
display_name: 王華姜
cbdb_id: 522323
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nYPmepWt6BjanZFZQVc1Pk
        subject_person_id: p_bas9F8qn5mmHqo3q8sM16v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華姜，清人物。中国历代人物传记资料库（CBDB）以人物编号 522323 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_mIF2L4sdF7xKo5IIh_oY80
          claim_id: c_nYPmepWt6BjanZFZQVc1Pk
          source_id: s_P72BE3i6QDnPh3v24R5WmR
          stance: supports
          locator: CBDB:522323
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_P72BE3i6QDnPh3v24R5WmR
            source_type: api_record
            title: 中国历代人物传记资料库：王華姜（CBDB 522323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522323&o=json
            external_identifier: CBDB:522323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MHR3L14FeJrMU3R2rbzmQU
        subject_person_id: p_bas9F8qn5mmHqo3q8sM16v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華姜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QwY2hHpMStWQth6MgHTLD5
          claim_id: c_MHR3L14FeJrMU3R2rbzmQU
          source_id: s_P72BE3i6QDnPh3v24R5WmR
          stance: supports
          locator: CBDB:522323
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_P72BE3i6QDnPh3v24R5WmR
            source_type: api_record
            title: 中国历代人物传记资料库：王華姜（CBDB 522323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522323&o=json
            external_identifier: CBDB:522323
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
  spouses:
    - claim:
        id: c_H-7Pj3OJBvxIppJzwPUXEe
        subject_person_id: p_bas9F8qn5mmHqo3q8sM16v
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_oSyFFLoub418FS3FsV7LyJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dVj8-RG_MlSOE2u5pZudD
          claim_id: c_H-7Pj3OJBvxIppJzwPUXEe
          source_id: s_JPlkw3XYYJcjsZLhDlBDnw
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9262：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JPlkw3XYYJcjsZLhDlBDnw
            source_type: api_record
            title: 中国历代人物传记资料库：屈大均（CBDB 30190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30190&o=json
            external_identifier: CBDB:30190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oSyFFLoub418FS3FsV7LyJ
        status: active
        display_name: 屈大均
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王華姜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王華姜，清人物。中国历代人物传记资料库（CBDB）以人物编号 522323 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王華姜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_oSyFFLoub418FS3FsV7LyJ | 屈大均 | accepted |

## 外部来源

- [中国历代人物传记资料库：屈大均（CBDB 30190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30190&o=json)
- [中国历代人物传记资料库：王華姜（CBDB 522323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522323&o=json)

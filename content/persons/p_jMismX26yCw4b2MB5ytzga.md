---
schema: wang-person/v1
id: p_jMismX26yCw4b2MB5ytzga
status: active
merged_into: null
display_name: 王守恥
cbdb_id: 526904
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JTvUZTJDbKKbhJgke9VkQx
        subject_person_id: p_jMismX26yCw4b2MB5ytzga
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守恥，清人物。中国历代人物传记资料库（CBDB）以人物编号 526904 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tmg5NMlxtKlTSOh37PsAyX
          claim_id: c_JTvUZTJDbKKbhJgke9VkQx
          source_id: s_M83oWi8B8WND7xne73CfvS
          stance: supports
          locator: CBDB:526904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_M83oWi8B8WND7xne73CfvS
            source_type: api_record
            title: 中国历代人物传记资料库：王守恥（CBDB 526904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526904&o=json
            external_identifier: CBDB:526904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KLcTof2o8RTLFYesf7cBHG
        subject_person_id: p_jMismX26yCw4b2MB5ytzga
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守恥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D7dCFaAJeRHnVDq21f34Ls
          claim_id: c_KLcTof2o8RTLFYesf7cBHG
          source_id: s_M83oWi8B8WND7xne73CfvS
          stance: supports
          locator: CBDB:526904
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_M83oWi8B8WND7xne73CfvS
            source_type: api_record
            title: 中国历代人物传记资料库：王守恥（CBDB 526904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526904&o=json
            external_identifier: CBDB:526904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
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
        id: c_QXDvcHM8ulgLbWQBV9e9qD
        subject_person_id: p_C76WEam8DrJz85GjQuBEXF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jMismX26yCw4b2MB5ytzga
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hGUC3UyLr1U-6hgcxltYJ-
          claim_id: c_QXDvcHM8ulgLbWQBV9e9qD
          source_id: s_g2v8cqJ5RPSCgN3VLzp6tD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13086：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g2v8cqJ5RPSCgN3VLzp6tD
            source_type: api_record
            title: 中国历代人物传记资料库：王頌蔚（CBDB 69381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json
            external_identifier: CBDB:69381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C76WEam8DrJz85GjQuBEXF
        status: active
        display_name: 王頌蔚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王守恥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守恥，清人物。中国历代人物传记资料库（CBDB）以人物编号 526904 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王守恥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_C76WEam8DrJz85GjQuBEXF | 王頌蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守恥（CBDB 526904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526904&o=json)
- [中国历代人物传记资料库：王頌蔚（CBDB 69381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69381&o=json)

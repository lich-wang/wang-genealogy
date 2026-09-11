---
schema: wang-person/v1
id: p_ZK5kFaWDXbAi9odKWjqWmw
status: active
merged_into: null
display_name: 王穩住
cbdb_id: 522262
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RxQD9sdR4FJ3yT3PR7M1Sz
        subject_person_id: p_ZK5kFaWDXbAi9odKWjqWmw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穩住，清人物。中国历代人物传记资料库（CBDB）以人物编号 522262 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_rMtV3omqCYq9ENjXZ6tXjY
          claim_id: c_RxQD9sdR4FJ3yT3PR7M1Sz
          source_id: s_evQax9iKx9ptxMq5u1SNLD
          stance: supports
          locator: CBDB:522262
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_evQax9iKx9ptxMq5u1SNLD
            source_type: api_record
            title: 中国历代人物传记资料库：王穩住（CBDB 522262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522262&o=json
            external_identifier: CBDB:522262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MDjCwYALauRiBzrCybHcm2
        subject_person_id: p_ZK5kFaWDXbAi9odKWjqWmw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穩住
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jXPL9u64FLzpToUA46uBzU
          claim_id: c_MDjCwYALauRiBzrCybHcm2
          source_id: s_evQax9iKx9ptxMq5u1SNLD
          stance: supports
          locator: CBDB:522262
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_evQax9iKx9ptxMq5u1SNLD
            source_type: api_record
            title: 中国历代人物传记资料库：王穩住（CBDB 522262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522262&o=json
            external_identifier: CBDB:522262
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
  ancestors:
    - claim:
        id: c_Ugjq7DzVeak2Qm2dAtc5eY
        subject_person_id: p_nWnvvK3mCHgBPx6MNxbPBC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZK5kFaWDXbAi9odKWjqWmw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvNslVNHu3FuFnoDz0Znon
          claim_id: c_Ugjq7DzVeak2Qm2dAtc5eY
          source_id: s_PYfj8Ko8WPPJgmRb4BBBiE
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9215：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PYfj8Ko8WPPJgmRb4BBBiE
            source_type: api_record
            title: 中国历代人物传记资料库：王崇簡（CBDB 65761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65761&o=json
            external_identifier: CBDB:65761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nWnvvK3mCHgBPx6MNxbPBC
        status: active
        display_name: 王崇簡
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王穩住

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穩住，清人物。中国历代人物传记资料库（CBDB）以人物编号 522262 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王穩住 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_nWnvvK3mCHgBPx6MNxbPBC | 王崇簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇簡（CBDB 65761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65761&o=json)
- [中国历代人物传记资料库：王穩住（CBDB 522262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522262&o=json)

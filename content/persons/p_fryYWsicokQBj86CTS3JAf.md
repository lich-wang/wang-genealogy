---
schema: wang-person/v1
id: p_fryYWsicokQBj86CTS3JAf
status: active
merged_into: null
display_name: 王曰貴
cbdb_id: 229374
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZECEP4pPJb4Myt3Dz6isti
        subject_person_id: p_fryYWsicokQBj86CTS3JAf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰貴，明人物。中国历代人物传记资料库（CBDB）以人物编号 229374 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_vAMqAn352mUYxW2Q3ZI57k
          claim_id: c_ZECEP4pPJb4Myt3Dz6isti
          source_id: s_5BHtNEq31b4oV9f9DdrnZW
          stance: supports
          locator: CBDB:229374
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5BHtNEq31b4oV9f9DdrnZW
            source_type: api_record
            title: 中国历代人物传记资料库：王曰貴（CBDB 229374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229374&o=json
            external_identifier: CBDB:229374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1JMu2Esw8etERSZvPqmJ17
        subject_person_id: p_fryYWsicokQBj86CTS3JAf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BNcTEPXWRuhfPtMcpBuUxS
          claim_id: c_1JMu2Esw8etERSZvPqmJ17
          source_id: s_5BHtNEq31b4oV9f9DdrnZW
          stance: supports
          locator: CBDB:229374
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_5BHtNEq31b4oV9f9DdrnZW
            source_type: api_record
            title: 中国历代人物传记资料库：王曰貴（CBDB 229374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229374&o=json
            external_identifier: CBDB:229374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
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
        id: c_x8_gCOGN-1IxuGeAbO-1Et
        subject_person_id: p_fryYWsicokQBj86CTS3JAf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_p7XKo89NhBCAZto4tXob1s
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KeAk5rHzfWp1Hd9bqMXNs3
          claim_id: c_x8_gCOGN-1IxuGeAbO-1Et
          source_id: s_5BHtNEq31b4oV9f9DdrnZW
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_p7XKo89NhBCAZto4tXob1s
        status: active
        display_name: 王希夔
        merged_into_person_id: null
  other: []
---

# 王曰貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曰貴，明人物。中国历代人物传记资料库（CBDB）以人物编号 229374 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王曰貴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_p7XKo89NhBCAZto4tXob1s | 王希夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曰貴（CBDB 229374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229374&o=json)

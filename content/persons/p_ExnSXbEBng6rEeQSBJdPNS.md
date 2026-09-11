---
schema: wang-person/v1
id: p_ExnSXbEBng6rEeQSBJdPNS
status: active
merged_into: null
display_name: 王原行
cbdb_id: 257392
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DYtQMpc6EAa5ztZpY5bSbC
        subject_person_id: p_ExnSXbEBng6rEeQSBJdPNS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原行，明人物。中国历代人物传记资料库（CBDB）以人物编号 257392 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ayniijwUVulpfQGEu9gEIf
          claim_id: c_DYtQMpc6EAa5ztZpY5bSbC
          source_id: s_SdJbNZFfSBQdjgDR3Vc7eW
          stance: supports
          locator: CBDB:257392
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_SdJbNZFfSBQdjgDR3Vc7eW
            source_type: api_record
            title: 中国历代人物传记资料库：王原行（CBDB 257392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257392&o=json
            external_identifier: CBDB:257392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MAp62i8b7AvzWd8WVwwrFt
        subject_person_id: p_ExnSXbEBng6rEeQSBJdPNS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sQ6kE4bi9fSdzaQBScDBpY
          claim_id: c_MAp62i8b7AvzWd8WVwwrFt
          source_id: s_SdJbNZFfSBQdjgDR3Vc7eW
          stance: supports
          locator: CBDB:257392
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_SdJbNZFfSBQdjgDR3Vc7eW
            source_type: api_record
            title: 中国历代人物传记资料库：王原行（CBDB 257392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257392&o=json
            external_identifier: CBDB:257392
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
        id: c_RfLqI3t-ETD9zPDoj08dZ_
        subject_person_id: p_ExnSXbEBng6rEeQSBJdPNS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mQ1J7fd25Z6UXRPAETHXDi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yYTfcbyKFX9qwxu1D-wYm2
          claim_id: c_RfLqI3t-ETD9zPDoj08dZ_
          source_id: s_ExaLzyQchNF44SEq4qpiZe
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ExaLzyQchNF44SEq4qpiZe
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 126657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126657&o=json
            external_identifier: CBDB:126657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mQ1J7fd25Z6UXRPAETHXDi
        status: active
        display_name: 王純
        merged_into_person_id: null
  other: []
---

# 王原行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王原行，明人物。中国历代人物传记资料库（CBDB）以人物编号 257392 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王原行 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mQ1J7fd25Z6UXRPAETHXDi | 王純 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 126657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126657&o=json)
- [中国历代人物传记资料库：王原行（CBDB 257392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257392&o=json)

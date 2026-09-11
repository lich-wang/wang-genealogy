---
schema: wang-person/v1
id: p_3JKHRJ23iN65rBD3F3StTg
status: active
merged_into: null
display_name: 王伯蘭
cbdb_id: 220567
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZB3JhHoV8LpZBPuLeDKpD1
        subject_person_id: p_3JKHRJ23iN65rBD3F3StTg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯蘭，明人物。中国历代人物传记资料库（CBDB）以人物编号 220567 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HXQw-YGU8YysWbZ3reL8mp
          claim_id: c_ZB3JhHoV8LpZBPuLeDKpD1
          source_id: s_VbCu7ZyhhizH9wNWej12Xj
          stance: supports
          locator: CBDB:220567
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VbCu7ZyhhizH9wNWej12Xj
            source_type: api_record
            title: 中国历代人物传记资料库：王伯蘭（CBDB 220567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220567&o=json
            external_identifier: CBDB:220567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vqJf4EaZ4Ze2TRNTf6cu58
        subject_person_id: p_3JKHRJ23iN65rBD3F3StTg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZFqzqrLV99MQZZceQJ6pFL
          claim_id: c_vqJf4EaZ4Ze2TRNTf6cu58
          source_id: s_VbCu7ZyhhizH9wNWej12Xj
          stance: supports
          locator: CBDB:220567
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_VbCu7ZyhhizH9wNWej12Xj
            source_type: api_record
            title: 中国历代人物传记资料库：王伯蘭（CBDB 220567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220567&o=json
            external_identifier: CBDB:220567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
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
        id: c_404N6DGPcC4WRhLUu2fAGN
        subject_person_id: p_3JKHRJ23iN65rBD3F3StTg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TxvCUWCPj6wVBqyLV556YD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PDQ_pLMJjiqHYfFgIjOj9F
          claim_id: c_404N6DGPcC4WRhLUu2fAGN
          source_id: s_VbCu7ZyhhizH9wNWej12Xj
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百零九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TxvCUWCPj6wVBqyLV556YD
        status: active
        display_name: 王大謨
        merged_into_person_id: null
  other: []
---

# 王伯蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯蘭，明人物。中国历代人物传记资料库（CBDB）以人物编号 220567 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王伯蘭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TxvCUWCPj6wVBqyLV556YD | 王大謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯蘭（CBDB 220567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220567&o=json)

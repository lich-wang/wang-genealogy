---
schema: wang-person/v1
id: p_EiHTYbCwNgFcHn8XwhbjFh
status: active
merged_into: null
display_name: 王得辛
cbdb_id: 273829
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q9QPL1418dJuhpbH68YnyC
        subject_person_id: p_EiHTYbCwNgFcHn8XwhbjFh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得辛，明人物。中国历代人物传记资料库（CBDB）以人物编号 273829 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_kc9pg6UB2eUi9PoiLaP34f
          claim_id: c_Q9QPL1418dJuhpbH68YnyC
          source_id: s_LkPn9LoimCMJu9HKvJ9vQ5
          stance: supports
          locator: CBDB:273829
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LkPn9LoimCMJu9HKvJ9vQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王得辛（CBDB 273829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273829&o=json
            external_identifier: CBDB:273829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gCRpo3vj9EmG4BeXCdGfTz
        subject_person_id: p_EiHTYbCwNgFcHn8XwhbjFh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得辛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KgP2HgB2kzYiZAii85xEH8
          claim_id: c_gCRpo3vj9EmG4BeXCdGfTz
          source_id: s_LkPn9LoimCMJu9HKvJ9vQ5
          stance: supports
          locator: CBDB:273829
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_LkPn9LoimCMJu9HKvJ9vQ5
            source_type: api_record
            title: 中国历代人物传记资料库：王得辛（CBDB 273829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273829&o=json
            external_identifier: CBDB:273829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
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
        id: c_l5j12_7eHa9ngZ0wS9cS43
        subject_person_id: p_EiHTYbCwNgFcHn8XwhbjFh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L8Mn_PlcjgbKIuGXm7BY0x
          claim_id: c_l5j12_7eHa9ngZ0wS9cS43
          source_id: s_LkPn9LoimCMJu9HKvJ9vQ5
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第二十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WQELCyNtxHbkJD3Uq4LakB
        status: active
        display_name: 王堯封
        merged_into_person_id: null
  other: []
---

# 王得辛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王得辛，明人物。中国历代人物传记资料库（CBDB）以人物编号 273829 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王得辛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WQELCyNtxHbkJD3Uq4LakB | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得辛（CBDB 273829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273829&o=json)

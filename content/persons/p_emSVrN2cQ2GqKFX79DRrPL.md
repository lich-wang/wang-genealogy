---
schema: wang-person/v1
id: p_emSVrN2cQ2GqKFX79DRrPL
status: active
merged_into: null
display_name: 王僑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AbhA21WNCtb8249t3Km5V9
        subject_person_id: p_emSVrN2cQ2GqKFX79DRrPL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qje1bYw7wGsBuafdDeHWRr
          claim_id: c_AbhA21WNCtb8249t3Km5V9
          source_id: s_sEQEViKcXkMBW7thxPUFxi
          stance: supports
          locator: CBDB:283503
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283503）
          source: &a1
            id: s_sEQEViKcXkMBW7thxPUFxi
            source_type: api_record
            title: 中国历代人物传记资料库：王僑（CBDB 283503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283503&o=json
            external_identifier: CBDB:283503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aiNNDZxYTKefrdQj4UAvcU
        subject_person_id: p_emSVrN2cQ2GqKFX79DRrPL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3otWiNa4AjewKJYM8nRGxE
          claim_id: c_aiNNDZxYTKefrdQj4UAvcU
          source_id: s_sEQEViKcXkMBW7thxPUFxi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
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
        id: c_qvPGgis8SjW3vKWSM4Ssar
        subject_person_id: p_emSVrN2cQ2GqKFX79DRrPL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_htEFhvA1GWN2EHqSp5mSSu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YuiPXGA0AZbC1blrDYuH4B
          claim_id: c_qvPGgis8SjW3vKWSM4Ssar
          source_id: s_sEQEViKcXkMBW7thxPUFxi
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_htEFhvA1GWN2EHqSp5mSSu
        status: active
        display_name: 王世芳
        merged_into_person_id: null
  other: []
---

# 王僑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_htEFhvA1GWN2EHqSp5mSSu | 王世芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僑（CBDB 283503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283503&o=json)

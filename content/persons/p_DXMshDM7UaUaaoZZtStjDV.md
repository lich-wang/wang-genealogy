---
schema: wang-person/v1
id: p_DXMshDM7UaUaaoZZtStjDV
status: active
merged_into: null
display_name: 王國柱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oZYnrmcNKAsiY6DyVbwnFt
        subject_person_id: p_DXMshDM7UaUaaoZZtStjDV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KjE6zuuK8nMaEt9vG2exfE
          claim_id: c_oZYnrmcNKAsiY6DyVbwnFt
          source_id: s_TxAhCuY7jNr8xvUsKW7LhY
          stance: supports
          locator: CBDB:691010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691010）
          source: &a1
            id: s_TxAhCuY7jNr8xvUsKW7LhY
            source_type: api_record
            title: 中国历代人物传记资料库：王國柱（CBDB 691010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691010&o=json
            external_identifier: CBDB:691010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.596Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T2WFH1x8PfH5yhBkmNRWMR
        subject_person_id: p_DXMshDM7UaUaaoZZtStjDV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國柱，明人物。籍贯錢塘，身份为戲曲作家，曾任同知、推官。（中国历代人物传记资料库 CBDB 691010）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S3_IA8topHkXWSjJrZ2z3F
          claim_id: c_T2WFH1x8PfH5yhBkmNRWMR
          source_id: s_TxAhCuY7jNr8xvUsKW7LhY
          stance: supports
          locator: CBDB:691010
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TEDIPdl1jfdNR1cX_U3iJt
        subject_person_id: p_DXMshDM7UaUaaoZZtStjDV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kgv5GqFNcLGvJNB7gg1h8u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKLYCtZbabCVGm3UQaOw_Q
          claim_id: c_TEDIPdl1jfdNR1cX_U3iJt
          source_id: s_TxAhCuY7jNr8xvUsKW7LhY
          stance: supports
          locator: 錢塘縣志，lgid=219720：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kgv5GqFNcLGvJNB7gg1h8u
        status: active
        display_name: 王道焜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國柱 | accepted |
| bio.summary | 王國柱，明人物。籍贯錢塘，身份为戲曲作家，曾任同知、推官。（中国历代人物传记资料库 CBDB 691010） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Kgv5GqFNcLGvJNB7gg1h8u | 王道焜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國柱（CBDB 691010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691010&o=json)

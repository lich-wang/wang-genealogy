---
schema: wang-person/v1
id: p_vziev5XZKu5i15QAie4vMb
status: active
merged_into: null
display_name: 王景深
cbdb_id: 237267
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QfhES5cQa6kYH172F3JQEK
        subject_person_id: p_vziev5XZKu5i15QAie4vMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景深，明人物。正統四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 237267）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3E0dsNrdaHnWwrRzYhbqnA
          claim_id: c_QfhES5cQa6kYH172F3JQEK
          source_id: s_A2S1Nvq2ctChkwRcSC1R3d
          stance: supports
          locator: CBDB:237267
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_A2S1Nvq2ctChkwRcSC1R3d
            source_type: api_record
            title: 中国历代人物传记资料库：王景深（CBDB 237267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237267&o=json
            external_identifier: CBDB:237267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ANstcSZ2WLxfTJTNMqFvJ5
        subject_person_id: p_vziev5XZKu5i15QAie4vMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景深
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rrqhwKqdfEu1wmitY8aN59
          claim_id: c_ANstcSZ2WLxfTJTNMqFvJ5
          source_id: s_A2S1Nvq2ctChkwRcSC1R3d
          stance: supports
          locator: CBDB:237267
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_C1e_Ja9yVjr8UdNeuEyTLP
        subject_person_id: p_vziev5XZKu5i15QAie4vMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ieK4DN3AcasJWKbAPHMC7t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j0cWGaghEfPiKvs0wI_o9U
          claim_id: c_C1e_Ja9yVjr8UdNeuEyTLP
          source_id: s_Lhy86W3h73usK4PsrRcEjc
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第三十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Lhy86W3h73usK4PsrRcEjc
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 207872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207872&o=json
            external_identifier: CBDB:207872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ieK4DN3AcasJWKbAPHMC7t
        status: active
        display_name: 王訥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景深

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景深，明人物。正統四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 237267） | accepted |
| name.primary | 王景深 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ieK4DN3AcasJWKbAPHMC7t | 王訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景深（CBDB 237267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237267&o=json)
- [中国历代人物传记资料库：王訥（CBDB 207872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207872&o=json)

---
schema: wang-person/v1
id: p_Y5zeDArc8FS9pBtqA8eJLH
status: active
merged_into: null
display_name: 王興
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bChLm1WtRMsU6Vjt8PVUK1
        subject_person_id: p_Y5zeDArc8FS9pBtqA8eJLH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1fHFqBZjWQDg482UM2rrNZ
          claim_id: c_bChLm1WtRMsU6Vjt8PVUK1
          source_id: s_Z4PAQWZh51S1yDJg3YDY1z
          stance: supports
          locator: CBDB:162273
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162273）
          source: &a1
            id: s_Z4PAQWZh51S1yDJg3YDY1z
            source_type: api_record
            title: 中国历代人物传记资料库：王興（CBDB 162273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162273&o=json
            external_identifier: CBDB:162273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xk4jbBK54ZCMLntmZfTSoY
        subject_person_id: p_Y5zeDArc8FS9pBtqA8eJLH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iGVdjn5G55DH5MmGHKPaao
          claim_id: c_Xk4jbBK54ZCMLntmZfTSoY
          source_id: s_Z4PAQWZh51S1yDJg3YDY1z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LFU50a725is0Rqd__SLpNh
        subject_person_id: p_Y5zeDArc8FS9pBtqA8eJLH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_73Ci4qEBjT8AD4gGvHhrDt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3lTkYfPv0RdMsXXt1OZUFz
          claim_id: c_LFU50a725is0Rqd__SLpNh
          source_id: s_tUcNwV564phkHaa2EkAQds
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Longshuo17：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tUcNwV564phkHaa2EkAQds
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 142524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142524&o=json
            external_identifier: CBDB:142524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.582Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_73Ci4qEBjT8AD4gGvHhrDt
        status: active
        display_name: 王植
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_73Ci4qEBjT8AD4gGvHhrDt | 王植 | accepted |

## 外部来源

- [中国历代人物传记资料库：王興（CBDB 162273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162273&o=json)
- [中国历代人物传记资料库：王植（CBDB 142524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142524&o=json)

---
schema: wang-person/v1
id: p_w3UbkEMdobeBRPKPUVJVKN
status: active
merged_into: null
display_name: 王聰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LsXT6jG3gBztyZJrs1Fdc1
        subject_person_id: p_w3UbkEMdobeBRPKPUVJVKN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4V2AnNZYP6DMS949oQRn3p
          claim_id: c_LsXT6jG3gBztyZJrs1Fdc1
          source_id: s_H2DrJ1g7Cq7ovjvBgyKGaF
          stance: supports
          locator: CBDB:263648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263648）
          source: &a1
            id: s_H2DrJ1g7Cq7ovjvBgyKGaF
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 263648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263648&o=json
            external_identifier: CBDB:263648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FAWfpYmtnq6M2GoM3k4Tgi
        subject_person_id: p_w3UbkEMdobeBRPKPUVJVKN
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
        - id: cs_ComDjD79LJwBHuEfq6s5b4
          claim_id: c_FAWfpYmtnq6M2GoM3k4Tgi
          source_id: s_H2DrJ1g7Cq7ovjvBgyKGaF
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
        id: c_8DThNDui_HRVwpbGhqg1x4
        subject_person_id: p_w3UbkEMdobeBRPKPUVJVKN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cxZ5yzSg26M1kF7erww7KG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_06ol8-xcYfl5zDn2AB67Bl
          claim_id: c_8DThNDui_HRVwpbGhqg1x4
          source_id: s_28t7HvLK65NjNF1HPcJjME
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_28t7HvLK65NjNF1HPcJjME
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 198371）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198371&o=json
            external_identifier: CBDB:198371
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cxZ5yzSg26M1kF7erww7KG
        status: active
        display_name: 王紀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cxZ5yzSg26M1kF7erww7KG | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 263648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263648&o=json)
- [中国历代人物传记资料库：王紀（CBDB 198371）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198371&o=json)

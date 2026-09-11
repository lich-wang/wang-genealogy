---
schema: wang-person/v1
id: p_khCnb8PLsCY5kwDiuH2tbM
status: active
merged_into: null
display_name: 王誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKfSKhnZ3mZfzVJmuSwcW1
        subject_person_id: p_khCnb8PLsCY5kwDiuH2tbM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UARpAVFszTWaGZ7dReRRnW
          claim_id: c_AKfSKhnZ3mZfzVJmuSwcW1
          source_id: s_HoCLuJELBEBPG47MNdZcT3
          stance: supports
          locator: CBDB:253053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253053）
          source: &a1
            id: s_HoCLuJELBEBPG47MNdZcT3
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 253053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253053&o=json
            external_identifier: CBDB:253053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FiijQfC9brqr5gj6bVGXCU
        subject_person_id: p_khCnb8PLsCY5kwDiuH2tbM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠，明人物。成化十四年進士，籍贯上元。（中国历代人物传记资料库 CBDB 253053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_43-PtTGvvt-6hh_7DXV8-O
          claim_id: c_FiijQfC9brqr5gj6bVGXCU
          source_id: s_HoCLuJELBEBPG47MNdZcT3
          stance: supports
          locator: CBDB:253053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GbB17pMIIuFUttbyIOx7qX
        subject_person_id: p_khCnb8PLsCY5kwDiuH2tbM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dGT7XJPTzH43E2nwtnh2aH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7kAgGSzFIdKN5kz_CANv82
          claim_id: c_GbB17pMIIuFUttbyIOx7qX
          source_id: s_CZEt9PyfQg11YUcwzJUQtY
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百四十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CZEt9PyfQg11YUcwzJUQtY
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 200041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200041&o=json
            external_identifier: CBDB:200041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dGT7XJPTzH43E2nwtnh2aH
        status: active
        display_name: 王進
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | 王誠，明人物。成化十四年進士，籍贯上元。（中国历代人物传记资料库 CBDB 253053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dGT7XJPTzH43E2nwtnh2aH | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 253053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253053&o=json)
- [中国历代人物传记资料库：王進（CBDB 200041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200041&o=json)

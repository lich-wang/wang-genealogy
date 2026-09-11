---
schema: wang-person/v1
id: p_K4dxAXnJm9smZxCxzJsN4q
status: active
merged_into: null
display_name: 王鐔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fx2Cu3JEqXyi5YmU5FG8dH
        subject_person_id: p_K4dxAXnJm9smZxCxzJsN4q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r9boTzEMFuCA5kSBt8FZQr
          claim_id: c_Fx2Cu3JEqXyi5YmU5FG8dH
          source_id: s_o9AZwP8QTSSANnPFXMAnD5
          stance: supports
          locator: CBDB:210721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210721）
          source: &a1
            id: s_o9AZwP8QTSSANnPFXMAnD5
            source_type: api_record
            title: 中国历代人物传记资料库：王鐔（CBDB 210721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210721&o=json
            external_identifier: CBDB:210721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sq8qQ67SzvYMYYN3t7JFrg
        subject_person_id: p_K4dxAXnJm9smZxCxzJsN4q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐔，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 210721）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RDczDmZ6DG18EfFXE8zlec
          claim_id: c_Sq8qQ67SzvYMYYN3t7JFrg
          source_id: s_o9AZwP8QTSSANnPFXMAnD5
          stance: supports
          locator: CBDB:210721
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_L6DOF4Oq--XQj596QIU8L0
        subject_person_id: p_K4dxAXnJm9smZxCxzJsN4q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sAZUvMC7u8bMFh2JrU8PMj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Shw4WuBrROT78Hj1COLNCS
          claim_id: c_L6DOF4Oq--XQj596QIU8L0
          source_id: s_o9AZwP8QTSSANnPFXMAnD5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百七十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sAZUvMC7u8bMFh2JrU8PMj
        status: active
        display_name: 王良心
        merged_into_person_id: null
  other: []
---

# 王鐔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐔 | accepted |
| bio.summary | 王鐔，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 210721） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sAZUvMC7u8bMFh2JrU8PMj | 王良心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐔（CBDB 210721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210721&o=json)

---
schema: wang-person/v1
id: p_3t2k2RqpEMgyeEqsF12rQr
status: active
merged_into: null
display_name: 王志道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xBRdH36hdSTCUFkMBex33e
        subject_person_id: p_3t2k2RqpEMgyeEqsF12rQr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yCQqZcRcDfaKSzhwWzi782
          claim_id: c_xBRdH36hdSTCUFkMBex33e
          source_id: s_5PYdHQUN7Eo7tG1nRnkgi1
          stance: supports
          locator: CBDB:247167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247167）
          source: &a1
            id: s_5PYdHQUN7Eo7tG1nRnkgi1
            source_type: api_record
            title: 中国历代人物传记资料库：王志道（CBDB 247167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247167&o=json
            external_identifier: CBDB:247167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y4BsezBup9wS6cPQ9QHUDw
        subject_person_id: p_3t2k2RqpEMgyeEqsF12rQr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志道，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247167）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rYwk-1aBrTv20rkD7gA0S0
          claim_id: c_y4BsezBup9wS6cPQ9QHUDw
          source_id: s_5PYdHQUN7Eo7tG1nRnkgi1
          stance: supports
          locator: CBDB:247167
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
        id: c_LAXOJB5wNFUkrTcm2e48qG
        subject_person_id: p_3t2k2RqpEMgyeEqsF12rQr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eonrrfCkN2hA5o48Aafwfz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJ4X4MwSC9nLArw_jqVnwV
          claim_id: c_LAXOJB5wNFUkrTcm2e48qG
          source_id: s_5PYdHQUN7Eo7tG1nRnkgi1
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eonrrfCkN2hA5o48Aafwfz
        status: active
        display_name: 王勉
        merged_into_person_id: null
  other: []
---

# 王志道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志道 | accepted |
| bio.summary | 王志道，明人物。成化八年進士。（中国历代人物传记资料库 CBDB 247167） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_eonrrfCkN2hA5o48Aafwfz | 王勉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志道（CBDB 247167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247167&o=json)

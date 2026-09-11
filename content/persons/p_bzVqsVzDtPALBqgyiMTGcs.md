---
schema: wang-person/v1
id: p_bzVqsVzDtPALBqgyiMTGcs
status: active
merged_into: null
display_name: 王表
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r1yj871x86a1MQi464CirE
        subject_person_id: p_bzVqsVzDtPALBqgyiMTGcs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eFBHrGj9uSXTPJjcKVKUm9
          claim_id: c_r1yj871x86a1MQi464CirE
          source_id: s_CqGjwbz29mF71uer51qoya
          stance: supports
          locator: CBDB:126567
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126567）
          source: &a1
            id: s_CqGjwbz29mF71uer51qoya
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 126567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126567&o=json
            external_identifier: CBDB:126567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LrBoyJTNP8BpwK7gHDfc3o
        subject_person_id: p_bzVqsVzDtPALBqgyiMTGcs
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
        - id: cs_yXMR8JAYY9MqfSniQda5V8
          claim_id: c_LrBoyJTNP8BpwK7gHDfc3o
          source_id: s_CqGjwbz29mF71uer51qoya
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QcV6Vc9EEXkY04SrpVLClO
        subject_person_id: p_cTNHybKxFsGeSXUqJF9nK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bzVqsVzDtPALBqgyiMTGcs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lghiFyvzNLGVm2VtO56cjU
          claim_id: c_QcV6Vc9EEXkY04SrpVLClO
          source_id: s_CqGjwbz29mF71uer51qoya
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cTNHybKxFsGeSXUqJF9nK2
        status: active
        display_name: 王冕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_U1NCCEq6FWNlPx2r0oIzD3
        subject_person_id: p_DXynKuJYoaBATs8tkwXjSx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bzVqsVzDtPALBqgyiMTGcs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUSkOVsNFylnHVkmHh96QF
          claim_id: c_U1NCCEq6FWNlPx2r0oIzD3
          source_id: s_CqGjwbz29mF71uer51qoya
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第四十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DXynKuJYoaBATs8tkwXjSx
        status: active
        display_name: 王遜
        merged_into_person_id: null
    - claim:
        id: c_a-LTqIOjajHtaXrmOZIJss
        subject_person_id: p_gH69iBnFvMEMWZbSE6mtUN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bzVqsVzDtPALBqgyiMTGcs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CpqOWdwWMFZZbQwdzQVswC
          claim_id: c_a-LTqIOjajHtaXrmOZIJss
          source_id: s_CqGjwbz29mF71uer51qoya
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gH69iBnFvMEMWZbSE6mtUN
        status: active
        display_name: 王子輝
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王表 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cTNHybKxFsGeSXUqJF9nK2 | 王冕 | accepted |
| ancestors | p_DXynKuJYoaBATs8tkwXjSx | 王遜 | accepted |
| ancestors | p_gH69iBnFvMEMWZbSE6mtUN | 王子輝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 126567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126567&o=json)

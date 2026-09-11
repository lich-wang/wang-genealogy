---
schema: wang-person/v1
id: p_nUEqPYrvDXtvPPHARECSus
status: active
merged_into: null
display_name: 王義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yqnVxALoPMCAv4xbhujNY6
        subject_person_id: p_nUEqPYrvDXtvPPHARECSus
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HAVaiZEjNUEH4yCLekHArE
          claim_id: c_yqnVxALoPMCAv4xbhujNY6
          source_id: s_LGiptT89Yjt7ZtGGBb2xFa
          stance: supports
          locator: CBDB:270627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270627）
          source: &a1
            id: s_LGiptT89Yjt7ZtGGBb2xFa
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 270627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270627&o=json
            external_identifier: CBDB:270627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cTfALbv4ntAoLLU4VCCFVB
        subject_person_id: p_nUEqPYrvDXtvPPHARECSus
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
        - id: cs_3yYVms9hrrAvGzqT78VDh9
          claim_id: c_cTfALbv4ntAoLLU4VCCFVB
          source_id: s_LGiptT89Yjt7ZtGGBb2xFa
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
        id: c_iGYe9n-t_qwj46qEXsgq-m
        subject_person_id: p_nUEqPYrvDXtvPPHARECSus
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CvioAH4pK1gg7UWTM6DCMS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uhnG52n_XYjjFP8Moaz912
          claim_id: c_iGYe9n-t_qwj46qEXsgq-m
          source_id: s_LGiptT89Yjt7ZtGGBb2xFa
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百零三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CvioAH4pK1gg7UWTM6DCMS
        status: active
        display_name: 王珪
        merged_into_person_id: null
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CvioAH4pK1gg7UWTM6DCMS | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 270627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270627&o=json)

---
schema: wang-person/v1
id: p_BbVptP39ZfzK25qw7xJj6P
status: active
merged_into: null
display_name: 王德儉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GN5kKejFxecSgv62HqMTBy
        subject_person_id: p_BbVptP39ZfzK25qw7xJj6P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J1v9E67AYUkCxcCrZL36tn
          claim_id: c_GN5kKejFxecSgv62HqMTBy
          source_id: s_BtAHtHFbCXwHgBLVoMqQaP
          stance: supports
          locator: CBDB:152188
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152188）
          source: &a1
            id: s_BtAHtHFbCXwHgBLVoMqQaP
            source_type: api_record
            title: 中国历代人物传记资料库：王德儉（CBDB 152188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152188&o=json
            external_identifier: CBDB:152188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j62cKEQBHnkZ97hxHEzBWd
        subject_person_id: p_BbVptP39ZfzK25qw7xJj6P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R75Ed1HQTLRLN88yCDwfKt
          claim_id: c_j62cKEQBHnkZ97hxHEzBWd
          source_id: s_BtAHtHFbCXwHgBLVoMqQaP
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
        id: c_r_zorX5LTga3qCPBt7MC9z
        subject_person_id: p_bKjdjLf8x3GHpbMR6Z5dP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BbVptP39ZfzK25qw7xJj6P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TzVSH9jdXkjXlMvzP1ZW2a
          claim_id: c_r_zorX5LTga3qCPBt7MC9z
          source_id: s_BtAHtHFbCXwHgBLVoMqQaP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bKjdjLf8x3GHpbMR6Z5dP8
        status: active
        display_name: 王纊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_IFV6M5ekdtYaDRjd_P-g-F
        subject_person_id: p_BbVptP39ZfzK25qw7xJj6P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCcpGv1P1CiTE2pLU2KQhf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PY5exnHES5qA0_ut8NQCss
          claim_id: c_IFV6M5ekdtYaDRjd_P-g-F
          source_id: s_BtAHtHFbCXwHgBLVoMqQaP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 292：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NCcpGv1P1CiTE2pLU2KQhf
        status: active
        display_name: 王同人
        merged_into_person_id: null
  other: []
---

# 王德儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德儉 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bKjdjLf8x3GHpbMR6Z5dP8 | 王纊 | accepted |
| descendants | p_NCcpGv1P1CiTE2pLU2KQhf | 王同人 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德儉（CBDB 152188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152188&o=json)

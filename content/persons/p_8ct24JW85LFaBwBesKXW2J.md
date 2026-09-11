---
schema: wang-person/v1
id: p_8ct24JW85LFaBwBesKXW2J
status: active
merged_into: null
display_name: 王延世
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EeQzi2wHaeBnER7HWJUV9J
        subject_person_id: p_8ct24JW85LFaBwBesKXW2J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延世
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PiU4pLGSRgzv29v1AJFW76
          claim_id: c_EeQzi2wHaeBnER7HWJUV9J
          source_id: s_DpXnKmpa5iqAqQ81mNyebu
          stance: supports
          locator: CBDB:555424
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555424）
          source: &a1
            id: s_DpXnKmpa5iqAqQ81mNyebu
            source_type: api_record
            title: 中国历代人物传记资料库：王延世（CBDB 555424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555424&o=json
            external_identifier: CBDB:555424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HvD2xZCf17kZfNyKuNNA8A
        subject_person_id: p_8ct24JW85LFaBwBesKXW2J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延世，明人物。籍贯信陽，曾任京營左參將、守備、營佐擊將軍。（中国历代人物传记资料库 CBDB 555424）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4QfbO9Mr6S0W3GyX2RsdJD
          claim_id: c_HvD2xZCf17kZfNyKuNNA8A
          source_id: s_DpXnKmpa5iqAqQ81mNyebu
          stance: supports
          locator: CBDB:555424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3DXEVTXlqcslPyr8z9x6-L
        subject_person_id: p_DoWNVNC6JZBAasWbqdoiCX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ct24JW85LFaBwBesKXW2J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQJskFBSwI4wiivhMYmKLL
          claim_id: c_3DXEVTXlqcslPyr8z9x6-L
          source_id: s_DpXnKmpa5iqAqQ81mNyebu
          stance: supports
          locator: (乾隆)信陽州志，lgid=868493：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DoWNVNC6JZBAasWbqdoiCX
        status: active
        display_name: 王祖嫡
        merged_into_person_id: null
  children:
    - claim:
        id: c_iZuufjKS4oHNF-B5j6AG8e
        subject_person_id: p_8ct24JW85LFaBwBesKXW2J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FrJBqWgwUnRtuWZzhb2b4A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pBbCV8R-vaQPFJshuiboUO
          claim_id: c_iZuufjKS4oHNF-B5j6AG8e
          source_id: s_DpXnKmpa5iqAqQ81mNyebu
          stance: supports
          locator: (乾隆)信陽州志，lgid=868493：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FrJBqWgwUnRtuWZzhb2b4A
        status: active
        display_name: 王星奎
        merged_into_person_id: null
    - claim:
        id: c_b0rm7lQBRm6KdsAHKEq2X6
        subject_person_id: p_8ct24JW85LFaBwBesKXW2J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k9n3ojWfK8xWpfgXcejN2j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sFRnbSN5WQIRg3GDaOoN7E
          claim_id: c_b0rm7lQBRm6KdsAHKEq2X6
          source_id: s_DpXnKmpa5iqAqQ81mNyebu
          stance: supports
          locator: (乾隆)信陽州志，Wang Xing bi：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k9n3ojWfK8xWpfgXcejN2j
        status: active
        display_name: 王星璧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0yWO7nVLJWfDdKBXQK7OFv
        subject_person_id: p_tBLAnfK4dS8P5LR1P2RqS9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8ct24JW85LFaBwBesKXW2J
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IMlZuu0mdHOTh5bzrny7zx
          claim_id: c_0yWO7nVLJWfDdKBXQK7OFv
          source_id: s_DpXnKmpa5iqAqQ81mNyebu
          stance: supports
          locator: (乾隆)信陽州志，lgid=868493：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tBLAnfK4dS8P5LR1P2RqS9
        status: active
        display_name: 王詔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王延世

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延世 | accepted |
| bio.summary | 王延世，明人物。籍贯信陽，曾任京營左參將、守備、營佐擊將軍。（中国历代人物传记资料库 CBDB 555424） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DoWNVNC6JZBAasWbqdoiCX | 王祖嫡 | accepted |
| children | p_FrJBqWgwUnRtuWZzhb2b4A | 王星奎 | accepted |
| children | p_k9n3ojWfK8xWpfgXcejN2j | 王星璧 | accepted |
| ancestors | p_tBLAnfK4dS8P5LR1P2RqS9 | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延世（CBDB 555424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555424&o=json)

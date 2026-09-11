---
schema: wang-person/v1
id: p_tBLAnfK4dS8P5LR1P2RqS9
status: active
merged_into: null
display_name: 王詔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BSGErZCLiRMUr5N18Tfazb
        subject_person_id: p_tBLAnfK4dS8P5LR1P2RqS9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jYPL46Swfy3wNRhSbW7qT3
          claim_id: c_BSGErZCLiRMUr5N18Tfazb
          source_id: s_NickpJSGq9egFCMg3aTP6S
          stance: supports
          locator: CBDB:211133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（211133）
          source: &a1
            id: s_NickpJSGq9egFCMg3aTP6S
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 211133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211133&o=json
            external_identifier: CBDB:211133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E6MsUFFkq22BoDXP7B9MxE
        subject_person_id: p_tBLAnfK4dS8P5LR1P2RqS9
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
        - id: cs_XYng4ERceQZxPC7fzPr1JK
          claim_id: c_E6MsUFFkq22BoDXP7B9MxE
          source_id: s_NickpJSGq9egFCMg3aTP6S
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
          source:
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
      object_person:
        id: p_8ct24JW85LFaBwBesKXW2J
        status: active
        display_name: 王延世
        merged_into_person_id: null
  other: []
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_8ct24JW85LFaBwBesKXW2J | 王延世 | accepted |

## 外部来源

- [中国历代人物传记资料库：王延世（CBDB 555424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555424&o=json)
- [中国历代人物传记资料库：王詔（CBDB 211133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211133&o=json)

---
schema: wang-person/v1
id: p_QiMXSEFT7jvgqUvHpGQMA4
status: active
merged_into: null
display_name: 王淑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SecPNpQvkb3NZ8Wo9ZsjPQ
        subject_person_id: p_QiMXSEFT7jvgqUvHpGQMA4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KCPzHsiDDh9ZrePQ1RG9jd
          claim_id: c_SecPNpQvkb3NZ8Wo9ZsjPQ
          source_id: s_AnDGfYaeCDc4TwS528G1fz
          stance: supports
          locator: CBDB:385777
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（385777）
          source: &a1
            id: s_AnDGfYaeCDc4TwS528G1fz
            source_type: api_record
            title: 中国历代人物传记资料库：王淑（CBDB 385777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385777&o=json
            external_identifier: CBDB:385777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qWx245G9xUNqxPCsAgEpuw
        subject_person_id: p_QiMXSEFT7jvgqUvHpGQMA4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLE52rMhYH86yDbYrajNvN
          claim_id: c_qWx245G9xUNqxPCsAgEpuw
          source_id: s_AnDGfYaeCDc4TwS528G1fz
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
        id: c_sQUiULSj_8tbu3-cWrM_U9
        subject_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QiMXSEFT7jvgqUvHpGQMA4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CN_BCimla7TAZQBTIsVRv2
          claim_id: c_sQUiULSj_8tbu3-cWrM_U9
          source_id: s_AnDGfYaeCDc4TwS528G1fz
          stance: supports
          locator: 全宋文，卷 4781：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bkMbqmq6U23rFXaG17Pxzk
        status: active
        display_name: 王師心
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bkMbqmq6U23rFXaG17Pxzk | 王師心 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑（CBDB 385777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385777&o=json)

---
schema: wang-person/v1
id: p_AzAGV5VxNGShzF5k2FBWAC
status: active
merged_into: null
display_name: 王珪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oypdQd5moMAdfy1Q3P4Eht
        subject_person_id: p_AzAGV5VxNGShzF5k2FBWAC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yqkMtmSL6qh3rewv4tSHUk
          claim_id: c_oypdQd5moMAdfy1Q3P4Eht
          source_id: s_17nnSc3NsNqxs15rHZyktX
          stance: supports
          locator: CBDB:299132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（299132）
          source: &a1
            id: s_17nnSc3NsNqxs15rHZyktX
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 299132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299132&o=json
            external_identifier: CBDB:299132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qNJs1NCCm5FPyPpvY1BE62
        subject_person_id: p_AzAGV5VxNGShzF5k2FBWAC
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
        - id: cs_CozdB2upXz1tn2AByWi5PP
          claim_id: c_qNJs1NCCm5FPyPpvY1BE62
          source_id: s_17nnSc3NsNqxs15rHZyktX
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
        id: c_ViosWB_QoEeLhVphSC0ZDw
        subject_person_id: p_AzAGV5VxNGShzF5k2FBWAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E2Hjum37Rd4UCpkHLkq4Ng
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLS_vkyiFjB4DMEfI9DkJw
          claim_id: c_ViosWB_QoEeLhVphSC0ZDw
          source_id: s_17nnSc3NsNqxs15rHZyktX
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E2Hjum37Rd4UCpkHLkq4Ng
        status: active
        display_name: 王輪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_E2Hjum37Rd4UCpkHLkq4Ng | 王輪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 299132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299132&o=json)

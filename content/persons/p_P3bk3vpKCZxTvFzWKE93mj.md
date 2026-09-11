---
schema: wang-person/v1
id: p_P3bk3vpKCZxTvFzWKE93mj
status: active
merged_into: null
display_name: 王麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MwFHPqq1PRyWbZPGJK6nzk
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aPCGuFNDhbyGTXEPWGFdEM
          claim_id: c_MwFHPqq1PRyWbZPGJK6nzk
          source_id: s_z7d5HYzKcD7H64D6YKWzRd
          stance: supports
          locator: CBDB:245697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245697）
          source: &a1
            id: s_z7d5HYzKcD7H64D6YKWzRd
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 245697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245697&o=json
            external_identifier: CBDB:245697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_93nVK4fMYcTApe3eEFQw5D
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
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
        - id: cs_DE1hHReDczsENMHhT3kQcF
          claim_id: c_93nVK4fMYcTApe3eEFQw5D
          source_id: s_z7d5HYzKcD7H64D6YKWzRd
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
        id: c_-pPL40RkHw1n6aldebjRJi
        subject_person_id: p_P3bk3vpKCZxTvFzWKE93mj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wEuXW2QRPfavvbFYPCJ1DK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G0_XUAWHUAX2EGOLbiLOze
          claim_id: c_-pPL40RkHw1n6aldebjRJi
          source_id: s_z7d5HYzKcD7H64D6YKWzRd
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wEuXW2QRPfavvbFYPCJ1DK
        status: active
        display_name: 王宏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wEuXW2QRPfavvbFYPCJ1DK | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 245697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245697&o=json)

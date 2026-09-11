---
schema: wang-person/v1
id: p_eJtHe962iSXPDuXk8JWW7s
status: active
merged_into: null
display_name: 王廷訓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rwcFS7A9pnEJsyCLjJUh4h
        subject_person_id: p_eJtHe962iSXPDuXk8JWW7s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GK28fU6KGQCwhGVGKwaGhA
          claim_id: c_rwcFS7A9pnEJsyCLjJUh4h
          source_id: s_cbF6g4Fqx4U5myqH51jNrD
          stance: supports
          locator: CBDB:39374
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39374）
          source: &a1
            id: s_cbF6g4Fqx4U5myqH51jNrD
            source_type: api_record
            title: 中国历代人物传记资料库：王廷訓（CBDB 39374）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39374&o=json
            external_identifier: CBDB:39374
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y6ufMAr6C5LQxUa3JZ8E6X
        subject_person_id: p_eJtHe962iSXPDuXk8JWW7s
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
        - id: cs_YM4voWkhMZyBJnEXJ7uA5T
          claim_id: c_y6ufMAr6C5LQxUa3JZ8E6X
          source_id: s_cbF6g4Fqx4U5myqH51jNrD
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
        id: c_8g1xPJuu7YsaRYH7bWhPqE
        subject_person_id: p_cWq3Ad37Fg61KqGA2RFrbD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJtHe962iSXPDuXk8JWW7s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B0llbUMcBJlW1EhZqqUK18
          claim_id: c_8g1xPJuu7YsaRYH7bWhPqE
          source_id: s_JEmLoa6B34TExkPDzfUvvx
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1641：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JEmLoa6B34TExkPDzfUvvx
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 38454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38454&o=json
            external_identifier: CBDB:38454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cWq3Ad37Fg61KqGA2RFrbD
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷訓 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cWq3Ad37Fg61KqGA2RFrbD | 王景 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景（CBDB 38454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38454&o=json)
- [中国历代人物传记资料库：王廷訓（CBDB 39374）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39374&o=json)

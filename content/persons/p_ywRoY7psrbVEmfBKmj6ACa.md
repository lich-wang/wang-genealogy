---
schema: wang-person/v1
id: p_ywRoY7psrbVEmfBKmj6ACa
status: active
merged_into: null
display_name: 王予盧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1LBMH8c6ugWyg8n5Fiv59U
        subject_person_id: p_ywRoY7psrbVEmfBKmj6ACa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王予盧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kfFX7J9qgWCV7kKMLfrGHs
          claim_id: c_1LBMH8c6ugWyg8n5Fiv59U
          source_id: s_aN6sE93cNu5XuxM7VCc794
          stance: supports
          locator: CBDB:526922
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526922）
          source: &a1
            id: s_aN6sE93cNu5XuxM7VCc794
            source_type: api_record
            title: 中国历代人物传记资料库：王予盧（CBDB 526922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526922&o=json
            external_identifier: CBDB:526922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bdf5RRquzWXJvWr1za1ZxB
        subject_person_id: p_ywRoY7psrbVEmfBKmj6ACa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1XPMHMfppqjbLqUfM3P46H
          claim_id: c_Bdf5RRquzWXJvWr1za1ZxB
          source_id: s_aN6sE93cNu5XuxM7VCc794
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
        id: c_hJCls34krfFjuSBVpUCZZs
        subject_person_id: p_DHYbJsS7LE12BDd6qGrWUt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ywRoY7psrbVEmfBKmj6ACa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Hc9-ZNftPuQXLzONpofqS
          claim_id: c_hJCls34krfFjuSBVpUCZZs
          source_id: s_aN6sE93cNu5XuxM7VCc794
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13096：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DHYbJsS7LE12BDd6qGrWUt
        status: active
        display_name: 王蒔蘭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王予盧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王予盧 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DHYbJsS7LE12BDd6qGrWUt | 王蒔蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王予盧（CBDB 526922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526922&o=json)

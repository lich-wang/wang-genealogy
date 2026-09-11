---
schema: wang-person/v1
id: p_rE9nJB28ro8YEGQnteMhEe
status: active
merged_into: null
display_name: 王恆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wQJ5CXjoYEe3bifQxmUN4m
        subject_person_id: p_rE9nJB28ro8YEGQnteMhEe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GtYnGKHQTyjVMcLV91PU5i
          claim_id: c_wQJ5CXjoYEe3bifQxmUN4m
          source_id: s_rdRkgHRkWobkBo9v3Rymwg
          stance: supports
          locator: CBDB:150815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150815）
          source: &a1
            id: s_rdRkgHRkWobkBo9v3Rymwg
            source_type: api_record
            title: 中国历代人物传记资料库：王恆（CBDB 150815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150815&o=json
            external_identifier: CBDB:150815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y5ZyBpd5hP4sXSKPEqy2P3
        subject_person_id: p_rE9nJB28ro8YEGQnteMhEe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wSB9KF5LZ9S7aUEQQJ1ZME
          claim_id: c_y5ZyBpd5hP4sXSKPEqy2P3
          source_id: s_rdRkgHRkWobkBo9v3Rymwg
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
        id: c_oooScxtP_j_TRRzEi5f8QS
        subject_person_id: p_W8E9H72h3otQNNGaDnB1FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rE9nJB28ro8YEGQnteMhEe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rVmw972hflXKhIq3JR3mqE
          claim_id: c_oooScxtP_j_TRRzEi5f8QS
          source_id: s_rdRkgHRkWobkBo9v3Rymwg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 28：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W8E9H72h3otQNNGaDnB1FU
        status: active
        display_name: 王景之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_W8E9H72h3otQNNGaDnB1FU | 王景之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆（CBDB 150815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150815&o=json)

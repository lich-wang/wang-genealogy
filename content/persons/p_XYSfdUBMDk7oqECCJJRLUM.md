---
schema: wang-person/v1
id: p_XYSfdUBMDk7oqECCJJRLUM
status: active
merged_into: null
display_name: 王敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wsK3vdYZgBei8FJoPQts15
        subject_person_id: p_XYSfdUBMDk7oqECCJJRLUM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y6BGTk4xy8jpi9ezmeDGXh
          claim_id: c_wsK3vdYZgBei8FJoPQts15
          source_id: s_W13gz1NfqS7sK9jGMrZx7m
          stance: supports
          locator: CBDB:269701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（269701）
          source: &a1
            id: s_W13gz1NfqS7sK9jGMrZx7m
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 269701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269701&o=json
            external_identifier: CBDB:269701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kJ8wZuBuxrN7HF6NLWZ1EX
        subject_person_id: p_XYSfdUBMDk7oqECCJJRLUM
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
        - id: cs_HXBPdAc2ii7PSDVigGWb92
          claim_id: c_kJ8wZuBuxrN7HF6NLWZ1EX
          source_id: s_W13gz1NfqS7sK9jGMrZx7m
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
        id: c_5EDxLCe614HjZY0cdbZh5P
        subject_person_id: p_XYSfdUBMDk7oqECCJJRLUM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kET5KeLjgEQ8jqCSugxSSk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LYZjKDlbBiF0goGImtpgTB
          claim_id: c_5EDxLCe614HjZY0cdbZh5P
          source_id: s_PK1WP6M7dNq3SM43V63SHW
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百九十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PK1WP6M7dNq3SM43V63SHW
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 201264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201264&o=json
            external_identifier: CBDB:201264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kET5KeLjgEQ8jqCSugxSSk
        status: active
        display_name: 王綸
        merged_into_person_id: null
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kET5KeLjgEQ8jqCSugxSSk | 王綸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 269701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269701&o=json)
- [中国历代人物传记资料库：王綸（CBDB 201264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201264&o=json)

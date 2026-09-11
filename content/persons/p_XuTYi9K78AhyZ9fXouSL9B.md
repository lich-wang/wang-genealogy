---
schema: wang-person/v1
id: p_XuTYi9K78AhyZ9fXouSL9B
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_35LmRW7nWrEDwkrzFdGBjv
        subject_person_id: p_XuTYi9K78AhyZ9fXouSL9B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_63hivDUPKEjQp7i6U4q9bx
          claim_id: c_35LmRW7nWrEDwkrzFdGBjv
          source_id: s_Hi17aRmnranFg4yvXCM7b8
          stance: supports
          locator: CBDB:274393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274393）
          source: &a1
            id: s_Hi17aRmnranFg4yvXCM7b8
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 274393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274393&o=json
            external_identifier: CBDB:274393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rVv9PnLAEpedrZHZhrbPKi
        subject_person_id: p_XuTYi9K78AhyZ9fXouSL9B
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
        - id: cs_FUb96m2Fmii7ZwNQjz9WeX
          claim_id: c_rVv9PnLAEpedrZHZhrbPKi
          source_id: s_Hi17aRmnranFg4yvXCM7b8
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
        id: c_7MEKABcu41EpWrgsVImIqY
        subject_person_id: p_XuTYi9K78AhyZ9fXouSL9B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3VTZoWGHQLyQ9mnF79uy7J
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5VLzFaE0CdU_GwocOavnm1
          claim_id: c_7MEKABcu41EpWrgsVImIqY
          source_id: s_hBdRe6QomwSAn3Scu61c6H
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第七十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hBdRe6QomwSAn3Scu61c6H
            source_type: api_record
            title: 中国历代人物传记资料库：王敎（CBDB 201563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201563&o=json
            external_identifier: CBDB:201563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.686Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3VTZoWGHQLyQ9mnF79uy7J
        status: active
        display_name: 王敎
        merged_into_person_id: null
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3VTZoWGHQLyQ9mnF79uy7J | 王敎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 274393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274393&o=json)
- [中国历代人物传记资料库：王敎（CBDB 201563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201563&o=json)

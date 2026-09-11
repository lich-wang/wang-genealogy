---
schema: wang-person/v1
id: p_uzqpzNGoBs7AcESxEaJR7X
status: active
merged_into: null
display_name: 王興祖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VDVe64upMZ86oeFQ1h6X9f
        subject_person_id: p_uzqpzNGoBs7AcESxEaJR7X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lshib3vUHNVHLjCnhHc5C8
          claim_id: c_VDVe64upMZ86oeFQ1h6X9f
          source_id: s_xmxXLzitZgkEH1oGHMZtAZ
          stance: supports
          locator: CBDB:245141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245141）
          source: &a1
            id: s_xmxXLzitZgkEH1oGHMZtAZ
            source_type: api_record
            title: 中国历代人物传记资料库：王興祖（CBDB 245141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245141&o=json
            external_identifier: CBDB:245141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7inYqzX2EecNLiJZSLbnNQ
        subject_person_id: p_uzqpzNGoBs7AcESxEaJR7X
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
        - id: cs_jPk3GMQqvQPr2rsymX45WL
          claim_id: c_7inYqzX2EecNLiJZSLbnNQ
          source_id: s_xmxXLzitZgkEH1oGHMZtAZ
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
        id: c_lZvVHW-UqlBaqq_yL5KDfx
        subject_person_id: p_uzqpzNGoBs7AcESxEaJR7X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YA1G7T5veW43cswnoFX8Ym
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kGfUmsKYaYjSa8rp8tRdRh
          claim_id: c_lZvVHW-UqlBaqq_yL5KDfx
          source_id: s_xmxXLzitZgkEH1oGHMZtAZ
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第九十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YA1G7T5veW43cswnoFX8Ym
        status: active
        display_name: 王智
        merged_into_person_id: null
  other: []
---

# 王興祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興祖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_YA1G7T5veW43cswnoFX8Ym | 王智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王興祖（CBDB 245141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245141&o=json)

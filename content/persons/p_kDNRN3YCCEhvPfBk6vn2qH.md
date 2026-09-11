---
schema: wang-person/v1
id: p_kDNRN3YCCEhvPfBk6vn2qH
status: active
merged_into: null
display_name: 王伯清
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ZQVVTdVw6yaWuiFvFJ7Fe
        subject_person_id: p_kDNRN3YCCEhvPfBk6vn2qH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cv5AtA6168KxAdgGU396oR
          claim_id: c_7ZQVVTdVw6yaWuiFvFJ7Fe
          source_id: s_E8hf8zFmpnYfKRw2dQnh4X
          stance: supports
          locator: CBDB:245398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245398）
          source: &a1
            id: s_E8hf8zFmpnYfKRw2dQnh4X
            source_type: api_record
            title: 中国历代人物传记资料库：王伯清（CBDB 245398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245398&o=json
            external_identifier: CBDB:245398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gLV8VcxUQ4j4V4jFixTmtf
        subject_person_id: p_kDNRN3YCCEhvPfBk6vn2qH
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
        - id: cs_1BScwmqRfDmqD9B3iy9q6y
          claim_id: c_gLV8VcxUQ4j4V4jFixTmtf
          source_id: s_E8hf8zFmpnYfKRw2dQnh4X
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
        id: c_APvnKsvEZCNG2jONjnC-GN
        subject_person_id: p_kDNRN3YCCEhvPfBk6vn2qH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oQRajD9oDBfYHERmWbMNcH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XgVJ_6hXsaISMyXZde-iAy
          claim_id: c_APvnKsvEZCNG2jONjnC-GN
          source_id: s_E8hf8zFmpnYfKRw2dQnh4X
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第三十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oQRajD9oDBfYHERmWbMNcH
        status: active
        display_name: 王宜
        merged_into_person_id: null
  other: []
---

# 王伯清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯清 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oQRajD9oDBfYHERmWbMNcH | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯清（CBDB 245398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245398&o=json)

---
schema: wang-person/v1
id: p_5Bkxep8g3GRGNATPHcjVUR
status: active
merged_into: null
display_name: 王遇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CpvbFnhf6anUcPFMwcDg5H
        subject_person_id: p_5Bkxep8g3GRGNATPHcjVUR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ghQeCoVnBSDgc21WU5GeBP
          claim_id: c_CpvbFnhf6anUcPFMwcDg5H
          source_id: s_e2ZfYLTC5FiCRasV9NvN74
          stance: supports
          locator: CBDB:38761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38761）
          source: &a1
            id: s_e2ZfYLTC5FiCRasV9NvN74
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 38761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38761&o=json
            external_identifier: CBDB:38761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_edXUoKknaAYqYx42qEJvBS
        subject_person_id: p_5Bkxep8g3GRGNATPHcjVUR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1142年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WXhhUEBNFh9Q5Du8xfmHkK
          claim_id: c_edXUoKknaAYqYx42qEJvBS
          source_id: s_e2ZfYLTC5FiCRasV9NvN74
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_huRika7BdfE5bAbJJ9jGN5
        subject_person_id: p_5Bkxep8g3GRGNATPHcjVUR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1211年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u9z2CfT6BKYiCQ7fgKY7RG
          claim_id: c_huRika7BdfE5bAbJJ9jGN5
          source_id: s_e2ZfYLTC5FiCRasV9NvN74
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jgS3gGtBaMQqGBxhRbxUPg
        subject_person_id: p_5Bkxep8g3GRGNATPHcjVUR
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
        - id: cs_yJQ8o5vZzkCJ5aR2WqZGi6
          claim_id: c_jgS3gGtBaMQqGBxhRbxUPg
          source_id: s_e2ZfYLTC5FiCRasV9NvN74
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
  descendants: []
  other: []
---

# 王遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇 | accepted |
| birth.date | 1142年 | accepted |
| death.date | 1211年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遇（CBDB 38761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38761&o=json)

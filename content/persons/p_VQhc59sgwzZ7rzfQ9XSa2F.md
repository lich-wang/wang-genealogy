---
schema: wang-person/v1
id: p_VQhc59sgwzZ7rzfQ9XSa2F
status: active
merged_into: null
display_name: 段公慶
revision: 1
cbdb_id: 166738
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cwlDpp2d5uK7oy5bxFA-M_
        subject_person_id: p_VQhc59sgwzZ7rzfQ9XSa2F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 段公慶
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rdbadJLA9UmuuPNzU8BhFG
          claim_id: c_cwlDpp2d5uK7oy5bxFA-M_
          source_id: s_xwqvH6kUqvD5nOMLbQ9oFZ
          stance: supports
          locator: CBDB:166738
          quotation: null
          interpretation_note: CBDB 明确记录的王僎先配偶
          source: &a1
            id: s_xwqvH6kUqvD5nOMLbQ9oFZ
            source_type: api_record
            title: 中国历代人物传记资料库：段公慶（CBDB 166738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166738&o=json
            external_identifier: CBDB:166738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EyuVugEVk9cEd1OR97oEcY
        subject_person_id: p_GSnwhV2e79Zrn6PDA1HGZ9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_VQhc59sgwzZ7rzfQ9XSa2F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xNKhrl_OEvN3-Q2FywnO3h
          claim_id: c_EyuVugEVk9cEd1OR97oEcY
          source_id: s_xwqvH6kUqvD5nOMLbQ9oFZ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dahe42：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GSnwhV2e79Zrn6PDA1HGZ9
        status: active
        display_name: 王僎先
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 段公慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 段公慶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_GSnwhV2e79Zrn6PDA1HGZ9 | 王僎先 | accepted |

## 外部来源

- [中国历代人物传记资料库：段公慶（CBDB 166738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166738&o=json)

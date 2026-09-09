---
schema: wang-person/v1
id: p_wAAPQtJMoGzarpF5cJ5CwT
status: active
merged_into: null
display_name: 王崇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VdscccbRg2qi7TbAuJPihj
        subject_person_id: p_wAAPQtJMoGzarpF5cJ5CwT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nhm5c7ZsKftC1zFRJEhcZa
          claim_id: c_VdscccbRg2qi7TbAuJPihj
          source_id: s_Pg5JfvEE3BiPd75gnYS4PK
          stance: supports
          locator: CBDB:637343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637343）
          source: &a1
            id: s_Pg5JfvEE3BiPd75gnYS4PK
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 637343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637343&o=json
            external_identifier: CBDB:637343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.389Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YAqbb2VuV4qAyb85gLqQj1
        subject_person_id: p_wAAPQtJMoGzarpF5cJ5CwT
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
        - id: cs_HA3ZeZ4KAG3sdisWq15Z37
          claim_id: c_YAqbb2VuV4qAyb85gLqQj1
          source_id: s_Pg5JfvEE3BiPd75gnYS4PK
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

# 王崇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 637343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637343&o=json)

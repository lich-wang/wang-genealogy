---
schema: wang-person/v1
id: p_xsRkU2N13GHhGRtveyMSWB
status: active
merged_into: null
display_name: 王肯稷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VcWGu2y7ApB94FZiiN9JDr
        subject_person_id: p_xsRkU2N13GHhGRtveyMSWB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肯稷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6nq6K5u7CFQAK7LW9h7cqC
          claim_id: c_VcWGu2y7ApB94FZiiN9JDr
          source_id: s_m6TMr8r26mdSDttENc8taN
          stance: supports
          locator: CBDB:639993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639993）
          source: &a1
            id: s_m6TMr8r26mdSDttENc8taN
            source_type: api_record
            title: 中国历代人物传记资料库：王肯稷（CBDB 639993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639993&o=json
            external_identifier: CBDB:639993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N9PcCtAM5FaHTmCibA8dk9
        subject_person_id: p_xsRkU2N13GHhGRtveyMSWB
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
        - id: cs_JVpKm4q7EapReqYSi9noi2
          claim_id: c_N9PcCtAM5FaHTmCibA8dk9
          source_id: s_m6TMr8r26mdSDttENc8taN
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

# 王肯稷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肯稷 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肯稷（CBDB 639993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639993&o=json)

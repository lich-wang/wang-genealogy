---
schema: wang-person/v1
id: p_jYfyyGuBuQ9ez1wedSMR1J
status: active
merged_into: null
display_name: 王餘普
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PZ8b817D6FcBJePXmScQxH
        subject_person_id: p_jYfyyGuBuQ9ez1wedSMR1J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王餘普
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MpELx5JDL6UauS98WCQuVB
          claim_id: c_PZ8b817D6FcBJePXmScQxH
          source_id: s_m24Nw5hjvP6UVhN9CC6sDQ
          stance: supports
          locator: CBDB:640887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640887）
          source: &a1
            id: s_m24Nw5hjvP6UVhN9CC6sDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王餘普（CBDB 640887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640887&o=json
            external_identifier: CBDB:640887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.403Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZZnoYhcjkc9wvfJ9541Wkp
        subject_person_id: p_jYfyyGuBuQ9ez1wedSMR1J
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
        - id: cs_YV6gZmB9RyFzQDK9Q2Hwp1
          claim_id: c_ZZnoYhcjkc9wvfJ9541Wkp
          source_id: s_m24Nw5hjvP6UVhN9CC6sDQ
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

# 王餘普

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王餘普 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王餘普（CBDB 640887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640887&o=json)

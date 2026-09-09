---
schema: wang-person/v1
id: p_sZUV4B5otKR7TFQazN79QS
status: active
merged_into: null
display_name: 王令樹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jH97cpf1mRbLoLD6V3KS7F
        subject_person_id: p_sZUV4B5otKR7TFQazN79QS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王令樹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dQ682HvDhJr1gMYyLsHjZ4
          claim_id: c_jH97cpf1mRbLoLD6V3KS7F
          source_id: s_4PCbEfgn4jf13CdN3S5gQd
          stance: supports
          locator: CBDB:71489
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71489）
          source: &a1
            id: s_4PCbEfgn4jf13CdN3S5gQd
            source_type: api_record
            title: 中国历代人物传记资料库：王令樹（CBDB 71489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71489&o=json
            external_identifier: CBDB:71489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.706Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zJMN1iuMyPAESzAemrDgzJ
        subject_person_id: p_sZUV4B5otKR7TFQazN79QS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1662年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vndNmPkS9KvBYJakhJwXuq
          claim_id: c_zJMN1iuMyPAESzAemrDgzJ
          source_id: s_4PCbEfgn4jf13CdN3S5gQd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_THifbWnKV3NB2SF7E8k672
        subject_person_id: p_sZUV4B5otKR7TFQazN79QS
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
        - id: cs_SXAh1pJoqWQ24doLo3R42b
          claim_id: c_THifbWnKV3NB2SF7E8k672
          source_id: s_4PCbEfgn4jf13CdN3S5gQd
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

# 王令樹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王令樹 | accepted |
| birth.date | 1662年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王令樹（CBDB 71489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71489&o=json)

---
schema: wang-person/v1
id: p_yB56Jwo9CTm2F6Zr3hemRu
status: active
merged_into: null
display_name: 王大經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r9vT6fw81b5Phn2noqmNGA
        subject_person_id: p_yB56Jwo9CTm2F6Zr3hemRu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gFuFG39LT3M8y4SKWUJEse
          claim_id: c_r9vT6fw81b5Phn2noqmNGA
          source_id: s_gXx87LSLimAp66BmBMZMG5
          stance: supports
          locator: CBDB:478831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（478831）
          source: &a1
            id: s_gXx87LSLimAp66BmBMZMG5
            source_type: api_record
            title: 中国历代人物传记资料库：王大經（CBDB 478831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478831&o=json
            external_identifier: CBDB:478831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GTZyfFD5kpnYAeGix7m4Bi
        subject_person_id: p_yB56Jwo9CTm2F6Zr3hemRu
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
        - id: cs_rFVcV4pkLCgUSu1Jxe2U9L
          claim_id: c_GTZyfFD5kpnYAeGix7m4Bi
          source_id: s_gXx87LSLimAp66BmBMZMG5
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

# 王大經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大經 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大經（CBDB 478831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=478831&o=json)

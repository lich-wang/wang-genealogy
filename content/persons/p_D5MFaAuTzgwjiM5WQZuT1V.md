---
schema: wang-person/v1
id: p_D5MFaAuTzgwjiM5WQZuT1V
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LgG1ovq25rVQ211iWiDKwK
        subject_person_id: p_D5MFaAuTzgwjiM5WQZuT1V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Awb6PWhAN3FKVivvw9cHm5
          claim_id: c_LgG1ovq25rVQ211iWiDKwK
          source_id: s_Y4QsyYv22oRSBAv5Bc6n2s
          stance: supports
          locator: CBDB:481015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（481015）
          source: &a1
            id: s_Y4QsyYv22oRSBAv5Bc6n2s
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 481015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481015&o=json
            external_identifier: CBDB:481015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hJJGuFC4efJn3W82bNDUfs
        subject_person_id: p_D5MFaAuTzgwjiM5WQZuT1V
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
        - id: cs_AYed35ipXACEApzWD2dC33
          claim_id: c_hJJGuFC4efJn3W82bNDUfs
          source_id: s_Y4QsyYv22oRSBAv5Bc6n2s
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 481015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=481015&o=json)

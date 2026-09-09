---
schema: wang-person/v1
id: p_LaHyoUJRe66P6enQpAJXdX
status: active
merged_into: null
display_name: 王元震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L3nU3nj7kG9aQHbG2pynUi
        subject_person_id: p_LaHyoUJRe66P6enQpAJXdX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zZsBLskCm1PA81P51FhC3Y
          claim_id: c_L3nU3nj7kG9aQHbG2pynUi
          source_id: s_Rw8mnZNKa22BCeSMPW2tAN
          stance: supports
          locator: CBDB:413921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（413921）
          source: &a1
            id: s_Rw8mnZNKa22BCeSMPW2tAN
            source_type: api_record
            title: 中国历代人物传记资料库：王元震（CBDB 413921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413921&o=json
            external_identifier: CBDB:413921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jj4hPAnWooxrhvMPdJCM65
        subject_person_id: p_LaHyoUJRe66P6enQpAJXdX
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
        - id: cs_8zhbY36MsEdk91ErN3EN1G
          claim_id: c_Jj4hPAnWooxrhvMPdJCM65
          source_id: s_Rw8mnZNKa22BCeSMPW2tAN
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

# 王元震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元震 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元震（CBDB 413921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413921&o=json)

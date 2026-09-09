---
schema: wang-person/v1
id: p_yHKkL3RNQGki11pFjNoDAw
status: active
merged_into: null
display_name: 王之愷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_phVysqNFb4qQDGnndzbX3d
        subject_person_id: p_yHKkL3RNQGki11pFjNoDAw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C4coVftwuvmfHXEHgct3Li
          claim_id: c_phVysqNFb4qQDGnndzbX3d
          source_id: s_FWr98VTSkW8zc3aVuoN2JQ
          stance: supports
          locator: CBDB:635785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635785）
          source: &a1
            id: s_FWr98VTSkW8zc3aVuoN2JQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之愷（CBDB 635785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635785&o=json
            external_identifier: CBDB:635785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.019Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6zvw6FWZN1pXT1VhyWuGzR
        subject_person_id: p_yHKkL3RNQGki11pFjNoDAw
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
        - id: cs_ZxP98ds331kziWdcErae8D
          claim_id: c_6zvw6FWZN1pXT1VhyWuGzR
          source_id: s_FWr98VTSkW8zc3aVuoN2JQ
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

# 王之愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之愷 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之愷（CBDB 635785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635785&o=json)

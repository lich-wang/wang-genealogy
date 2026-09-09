---
schema: wang-person/v1
id: p_r4wkj54F3BUe6EMK2HsfCh
status: active
merged_into: null
display_name: 王璵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZgGNgxyKgmagnvTLcgAZX
        subject_person_id: p_r4wkj54F3BUe6EMK2HsfCh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zJvTQfLi6GAE57sy7A2Ba8
          claim_id: c_UZgGNgxyKgmagnvTLcgAZX
          source_id: s_iQvb25GP1U5wSzK2i6jkrN
          stance: supports
          locator: CBDB:287106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287106）
          source: &a1
            id: s_iQvb25GP1U5wSzK2i6jkrN
            source_type: api_record
            title: 中国历代人物传记资料库：王璵（CBDB 287106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287106&o=json
            external_identifier: CBDB:287106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EZR3QbtsyNJ7Yp7ckbqdF3
        subject_person_id: p_r4wkj54F3BUe6EMK2HsfCh
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
        - id: cs_5j9j6FyUyPB3zdYPBEjk8g
          claim_id: c_EZR3QbtsyNJ7Yp7ckbqdF3
          source_id: s_iQvb25GP1U5wSzK2i6jkrN
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

# 王璵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璵 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璵（CBDB 287106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287106&o=json)

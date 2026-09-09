---
schema: wang-person/v1
id: p_GDgPnEHTSu9YNmDu6qZ3st
status: active
merged_into: null
display_name: 王盛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HDj7xY5wvjRRCK3KTZnuBW
        subject_person_id: p_GDgPnEHTSu9YNmDu6qZ3st
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王盛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H1btfmzyiwjfz7wJ7EXYbv
          claim_id: c_HDj7xY5wvjRRCK3KTZnuBW
          source_id: s_9MWDw3UiLbmP7Q49GbL9d1
          stance: supports
          locator: CBDB:482856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（482856）
          source: &a1
            id: s_9MWDw3UiLbmP7Q49GbL9d1
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 482856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482856&o=json
            external_identifier: CBDB:482856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TThk2BwQMiXeqMMFriZRzx
        subject_person_id: p_GDgPnEHTSu9YNmDu6qZ3st
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
        - id: cs_xU8YAsCXbiywQDozgVxrCx
          claim_id: c_TThk2BwQMiXeqMMFriZRzx
          source_id: s_9MWDw3UiLbmP7Q49GbL9d1
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

# 王盛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王盛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王盛（CBDB 482856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=482856&o=json)

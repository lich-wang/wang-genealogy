---
schema: wang-person/v1
id: p_JzbdGLztV1jssY8yCzdztY
status: active
merged_into: null
display_name: 王作孚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zasK88KCSAtUyZpze2GNWw
        subject_person_id: p_JzbdGLztV1jssY8yCzdztY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HhZL9K3Ek85bW5MfaqucMP
          claim_id: c_zasK88KCSAtUyZpze2GNWw
          source_id: s_jbK5BRb5TAGAoiyTda1E81
          stance: supports
          locator: CBDB:71680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71680）
          source: &a1
            id: s_jbK5BRb5TAGAoiyTda1E81
            source_type: api_record
            title: 中国历代人物传记资料库：王作孚（CBDB 71680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71680&o=json
            external_identifier: CBDB:71680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fN4h6GgPCQ35L4HuPHTLgN
        subject_person_id: p_JzbdGLztV1jssY8yCzdztY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1825年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uWF3cVXoLjG1LJtnsmE1XC
          claim_id: c_fN4h6GgPCQ35L4HuPHTLgN
          source_id: s_jbK5BRb5TAGAoiyTda1E81
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
        id: c_YxPJkDCeEYoxkX9bpFbH5L
        subject_person_id: p_JzbdGLztV1jssY8yCzdztY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作孚（生于1825年），清人物。明清進士進士，籍贯綏陽，入仕進士，曾任兵部武選司主事、兵部職方司員外郎、司運同。（中国历代人物传记资料库 CBDB 71680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vg0yUlqFk6GtT2PGYYPM9G
          claim_id: c_YxPJkDCeEYoxkX9bpFbH5L
          source_id: s_jbK5BRb5TAGAoiyTda1E81
          stance: supports
          locator: CBDB:71680
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王作孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作孚 | accepted |
| birth.date | 1825年 | accepted |
| bio.summary | 王作孚（生于1825年），清人物。明清進士進士，籍贯綏陽，入仕進士，曾任兵部武選司主事、兵部職方司員外郎、司運同。（中国历代人物传记资料库 CBDB 71680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作孚（CBDB 71680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71680&o=json)

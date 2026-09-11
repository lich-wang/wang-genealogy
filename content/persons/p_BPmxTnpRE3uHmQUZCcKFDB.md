---
schema: wang-person/v1
id: p_BPmxTnpRE3uHmQUZCcKFDB
status: active
merged_into: null
display_name: 王賡颺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rMrjoMVdzSCM1QzyEkaCNv
        subject_person_id: p_BPmxTnpRE3uHmQUZCcKFDB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡颺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kR6k4CUa53Nb5iTCphU2Ab
          claim_id: c_rMrjoMVdzSCM1QzyEkaCNv
          source_id: s_b8JZrYBwG4C2BqLPCh9YKM
          stance: supports
          locator: CBDB:576102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576102）
          source: &a1
            id: s_b8JZrYBwG4C2BqLPCh9YKM
            source_type: api_record
            title: 中国历代人物传记资料库：王賡颺（CBDB 576102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576102&o=json
            external_identifier: CBDB:576102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.938Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gxmLbS283htit4D7t4HkL8
        subject_person_id: p_BPmxTnpRE3uHmQUZCcKFDB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賡颺，清人物。籍贯東湖，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576102）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ejRt6a1AMDQVxe9Y4kFjIQ
          claim_id: c_gxmLbS283htit4D7t4HkL8
          source_id: s_b8JZrYBwG4C2BqLPCh9YKM
          stance: supports
          locator: CBDB:576102
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

# 王賡颺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賡颺 | accepted |
| bio.summary | 王賡颺，清人物。籍贯東湖，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賡颺（CBDB 576102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576102&o=json)

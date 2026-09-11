---
schema: wang-person/v1
id: p_wTZDHU5CvZmbxuGwWwqpEF
status: active
merged_into: null
display_name: 王履中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nQqCYAYZ4JdsqyK1FMAJQt
        subject_person_id: p_wTZDHU5CvZmbxuGwWwqpEF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YQ4tVxTd4bWYo4fQiKnz5D
          claim_id: c_nQqCYAYZ4JdsqyK1FMAJQt
          source_id: s_4fpgGohBDhjRQMZq9bcE8v
          stance: supports
          locator: CBDB:637312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637312）
          source: &a1
            id: s_4fpgGohBDhjRQMZq9bcE8v
            source_type: api_record
            title: 中国历代人物传记资料库：王履中（CBDB 637312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637312&o=json
            external_identifier: CBDB:637312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fjx6yXANUwefJc19ivTGCy
        subject_person_id: p_wTZDHU5CvZmbxuGwWwqpEF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王履中，清人物。籍贯湖州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_659Bk4hVphh_52lQma70JJ
          claim_id: c_Fjx6yXANUwefJc19ivTGCy
          source_id: s_4fpgGohBDhjRQMZq9bcE8v
          stance: supports
          locator: CBDB:637312
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

# 王履中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王履中 | accepted |
| bio.summary | 王履中，清人物。籍贯湖州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王履中（CBDB 637312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637312&o=json)

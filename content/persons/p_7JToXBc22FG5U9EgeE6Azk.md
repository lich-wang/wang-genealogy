---
schema: wang-person/v1
id: p_7JToXBc22FG5U9EgeE6Azk
status: active
merged_into: null
display_name: 王時奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S9MMhQ9hNaJ53GV5doqNH9
        subject_person_id: p_7JToXBc22FG5U9EgeE6Azk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_97fKfadaz7FXZor2CGtB3L
          claim_id: c_S9MMhQ9hNaJ53GV5doqNH9
          source_id: s_F1phK96pB5ocveojuUKY51
          stance: supports
          locator: CBDB:548507
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（548507）
          source: &a1
            id: s_F1phK96pB5ocveojuUKY51
            source_type: api_record
            title: 中国历代人物传记资料库：王時奇（CBDB 548507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548507&o=json
            external_identifier: CBDB:548507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.493Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VFdvAGVLLNpGCMX1FVHLQz
        subject_person_id: p_7JToXBc22FG5U9EgeE6Azk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時奇，宋人物。籍贯德興，入仕進士。（中国历代人物传记资料库 CBDB 548507）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dV1PHPCmg_0Qj0oehAqM7b
          claim_id: c_VFdvAGVLLNpGCMX1FVHLQz
          source_id: s_F1phK96pB5ocveojuUKY51
          stance: supports
          locator: CBDB:548507
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

# 王時奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時奇 | accepted |
| bio.summary | 王時奇，宋人物。籍贯德興，入仕進士。（中国历代人物传记资料库 CBDB 548507） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時奇（CBDB 548507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548507&o=json)

---
schema: wang-person/v1
id: p_jNZboNkpgWf44D8HeE3wvF
status: active
merged_into: null
display_name: 王伯成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H52sRgm9KgFKkSHHjzHfFj
        subject_person_id: p_jNZboNkpgWf44D8HeE3wvF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vmd2dQ5277pvvqPgWeX4gG
          claim_id: c_H52sRgm9KgFKkSHHjzHfFj
          source_id: s_duLCgtm43e2aG83dzZKXvJ
          stance: supports
          locator: CBDB:101182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101182）
          source: &a1
            id: s_duLCgtm43e2aG83dzZKXvJ
            source_type: api_record
            title: 中国历代人物传记资料库：王伯成（CBDB 101182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101182&o=json
            external_identifier: CBDB:101182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WMU6bK8MrVBbMe7qUDt7es
        subject_person_id: p_jNZboNkpgWf44D8HeE3wvF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯成，元人物。籍贯涿州，身份为曲作家。（中国历代人物传记资料库 CBDB 101182）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CSGTgHn47SBZx19HaNY1re
          claim_id: c_WMU6bK8MrVBbMe7qUDt7es
          source_id: s_duLCgtm43e2aG83dzZKXvJ
          stance: supports
          locator: CBDB:101182
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

# 王伯成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯成 | accepted |
| bio.summary | 王伯成，元人物。籍贯涿州，身份为曲作家。（中国历代人物传记资料库 CBDB 101182） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯成（CBDB 101182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101182&o=json)

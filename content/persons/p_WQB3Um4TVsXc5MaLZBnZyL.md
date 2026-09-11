---
schema: wang-person/v1
id: p_WQB3Um4TVsXc5MaLZBnZyL
status: active
merged_into: null
display_name: 王埏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jVvj5ccjUvnLUPDbRmwney
        subject_person_id: p_WQB3Um4TVsXc5MaLZBnZyL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ok2SMpkM4xAR7nLnYKQLhC
          claim_id: c_jVvj5ccjUvnLUPDbRmwney
          source_id: s_SHr9LrYiWbVnVfHZdpfPoT
          stance: supports
          locator: CBDB:57016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57016）
          source: &a1
            id: s_SHr9LrYiWbVnVfHZdpfPoT
            source_type: api_record
            title: 中国历代人物传记资料库：王埏（CBDB 57016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57016&o=json
            external_identifier: CBDB:57016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VmYtZMdwJRpXNmZPBXiGqh
        subject_person_id: p_WQB3Um4TVsXc5MaLZBnZyL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埏，清人物。身份为篆刻家，曾任都督同知、營副總兵、副總兵。（中国历代人物传记资料库 CBDB 57016）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NOU12naRYogIpvKuKxs_4o
          claim_id: c_VmYtZMdwJRpXNmZPBXiGqh
          source_id: s_SHr9LrYiWbVnVfHZdpfPoT
          stance: supports
          locator: CBDB:57016
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

# 王埏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埏 | accepted |
| bio.summary | 王埏，清人物。身份为篆刻家，曾任都督同知、營副總兵、副總兵。（中国历代人物传记资料库 CBDB 57016） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王埏（CBDB 57016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57016&o=json)

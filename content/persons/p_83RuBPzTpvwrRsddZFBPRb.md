---
schema: wang-person/v1
id: p_83RuBPzTpvwrRsddZFBPRb
status: active
merged_into: null
display_name: 王源引
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tEXFUA9NpbZuCy4q8BAnor
        subject_person_id: p_83RuBPzTpvwrRsddZFBPRb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源引
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vyXCpTXogTuqLZ1FfcEAZc
          claim_id: c_tEXFUA9NpbZuCy4q8BAnor
          source_id: s_GoEioLebQ1ZeG9CgT8TgoM
          stance: supports
          locator: CBDB:639183
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639183）
          source: &a1
            id: s_GoEioLebQ1ZeG9CgT8TgoM
            source_type: api_record
            title: 中国历代人物传记资料库：王源引（CBDB 639183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639183&o=json
            external_identifier: CBDB:639183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WX5GMKyQ6v76uKT8Yqv5iM
        subject_person_id: p_83RuBPzTpvwrRsddZFBPRb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源引，清人物。籍贯安陸，曾任復設訓導。（中国历代人物传记资料库 CBDB 639183）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z6WqksMMWv6FdsXsrxNySj
          claim_id: c_WX5GMKyQ6v76uKT8Yqv5iM
          source_id: s_GoEioLebQ1ZeG9CgT8TgoM
          stance: supports
          locator: CBDB:639183
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

# 王源引

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王源引 | accepted |
| bio.summary | 王源引，清人物。籍贯安陸，曾任復設訓導。（中国历代人物传记资料库 CBDB 639183） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源引（CBDB 639183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639183&o=json)

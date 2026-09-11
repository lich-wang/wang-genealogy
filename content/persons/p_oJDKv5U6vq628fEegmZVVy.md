---
schema: wang-person/v1
id: p_oJDKv5U6vq628fEegmZVVy
status: active
merged_into: null
display_name: 王應三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vPcpb4uF27S7UFcLoG78yx
        subject_person_id: p_oJDKv5U6vq628fEegmZVVy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5BokWfez9uJG37KE799GbJ
          claim_id: c_vPcpb4uF27S7UFcLoG78yx
          source_id: s_FGPi3w19wjFQBsyiA4vkBP
          stance: supports
          locator: CBDB:637974
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637974）
          source: &a1
            id: s_FGPi3w19wjFQBsyiA4vkBP
            source_type: api_record
            title: 中国历代人物传记资料库：王應三（CBDB 637974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637974&o=json
            external_identifier: CBDB:637974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.473Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BSbkzsTb8CCKcD3p25CZP4
        subject_person_id: p_oJDKv5U6vq628fEegmZVVy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應三，清人物。籍贯福州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637974）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Fm8hDzbrsB_hLhPjckvXny
          claim_id: c_BSbkzsTb8CCKcD3p25CZP4
          source_id: s_FGPi3w19wjFQBsyiA4vkBP
          stance: supports
          locator: CBDB:637974
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

# 王應三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應三 | accepted |
| bio.summary | 王應三，清人物。籍贯福州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637974） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應三（CBDB 637974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637974&o=json)

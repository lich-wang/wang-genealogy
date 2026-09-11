---
schema: wang-person/v1
id: p_LTHaJPPLKMgPbzQQvB6K6m
status: active
merged_into: null
display_name: 王心榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fx21gZkLAcpiZN9dD6W7RE
        subject_person_id: p_LTHaJPPLKMgPbzQQvB6K6m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cyUfjPaV78PMtua5HzBQyp
          claim_id: c_Fx21gZkLAcpiZN9dD6W7RE
          source_id: s_Y1sALQBs4pw1LZrYiG81k5
          stance: supports
          locator: CBDB:637735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637735）
          source: &a1
            id: s_Y1sALQBs4pw1LZrYiG81k5
            source_type: api_record
            title: 中国历代人物传记资料库：王心榮（CBDB 637735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637735&o=json
            external_identifier: CBDB:637735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GBpsgHRjBN8eTSfN9iXScB
        subject_person_id: p_LTHaJPPLKMgPbzQQvB6K6m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心榮，清人物。籍贯曹州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637735）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F-ZiSsmXKsxDTpgH6tSXOm
          claim_id: c_GBpsgHRjBN8eTSfN9iXScB
          source_id: s_Y1sALQBs4pw1LZrYiG81k5
          stance: supports
          locator: CBDB:637735
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

# 王心榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心榮 | accepted |
| bio.summary | 王心榮，清人物。籍贯曹州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 637735） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王心榮（CBDB 637735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637735&o=json)

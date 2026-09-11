---
schema: wang-person/v1
id: p_MrK8cCBWSuHu1VMDsj329s
status: active
merged_into: null
display_name: 王宗羲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gGdd1N7kywZKBH7yvGcrw3
        subject_person_id: p_MrK8cCBWSuHu1VMDsj329s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2TEFfCwzf8EueVFT9MYNXo
          claim_id: c_gGdd1N7kywZKBH7yvGcrw3
          source_id: s_jtyAVVh6B7wq5CUnJi3enG
          stance: supports
          locator: CBDB:637117
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637117）
          source: &a1
            id: s_jtyAVVh6B7wq5CUnJi3enG
            source_type: api_record
            title: 中国历代人物传记资料库：王宗羲（CBDB 637117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637117&o=json
            external_identifier: CBDB:637117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ruTTRdFtH68NSdSS3FzBAp
        subject_person_id: p_MrK8cCBWSuHu1VMDsj329s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗羲，清人物。籍贯吉安府，入仕鄉貢舉人，曾任典史、教諭、內閣中書。（中国历代人物传记资料库 CBDB 637117）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b2WawEGV-OveB6y7gTgSK0
          claim_id: c_ruTTRdFtH68NSdSS3FzBAp
          source_id: s_jtyAVVh6B7wq5CUnJi3enG
          stance: supports
          locator: CBDB:637117
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

# 王宗羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗羲 | accepted |
| bio.summary | 王宗羲，清人物。籍贯吉安府，入仕鄉貢舉人，曾任典史、教諭、內閣中書。（中国历代人物传记资料库 CBDB 637117） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗羲（CBDB 637117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637117&o=json)

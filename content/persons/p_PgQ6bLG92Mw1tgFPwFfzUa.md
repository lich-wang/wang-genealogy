---
schema: wang-person/v1
id: p_PgQ6bLG92Mw1tgFPwFfzUa
status: active
merged_into: null
display_name: 王鳳圖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LMAq2RosouSZ8TE1k5dAqu
        subject_person_id: p_PgQ6bLG92Mw1tgFPwFfzUa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pUYQnMEtvDYuMfhz12NqKC
          claim_id: c_LMAq2RosouSZ8TE1k5dAqu
          source_id: s_R1QQ29dZkcxb3oL2m8KgAA
          stance: supports
          locator: CBDB:640952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640952）
          source: &a1
            id: s_R1QQ29dZkcxb3oL2m8KgAA
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳圖（CBDB 640952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640952&o=json
            external_identifier: CBDB:640952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kQLD3am8upPMr9MPfkmyGM
        subject_person_id: p_PgQ6bLG92Mw1tgFPwFfzUa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳圖，清人物。籍贯順天府，曾任訓導。（中国历代人物传记资料库 CBDB 640952）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tAwZF77Biz0hdMWXkcmW5V
          claim_id: c_kQLD3am8upPMr9MPfkmyGM
          source_id: s_R1QQ29dZkcxb3oL2m8KgAA
          stance: supports
          locator: CBDB:640952
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

# 王鳳圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳圖 | accepted |
| bio.summary | 王鳳圖，清人物。籍贯順天府，曾任訓導。（中国历代人物传记资料库 CBDB 640952） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳圖（CBDB 640952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640952&o=json)

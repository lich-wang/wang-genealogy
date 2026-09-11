---
schema: wang-person/v1
id: p_UBAQ8NFkuhPgJftnrGNQx8
status: active
merged_into: null
display_name: 王大善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fFpMrBuaBMKXSBKiHKfe56
        subject_person_id: p_UBAQ8NFkuhPgJftnrGNQx8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CJ81nnYZsQ8PxEdxjEuz2d
          claim_id: c_fFpMrBuaBMKXSBKiHKfe56
          source_id: s_6rQQud1LGoDpbjQZDprXjk
          stance: supports
          locator: CBDB:690223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690223）
          source: &a1
            id: s_6rQQud1LGoDpbjQZDprXjk
            source_type: api_record
            title: 中国历代人物传记资料库：王大善（CBDB 690223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690223&o=json
            external_identifier: CBDB:690223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TtHStGhfHGsts6ms92EUHE
        subject_person_id: p_UBAQ8NFkuhPgJftnrGNQx8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大善，清人物。籍贯歙縣，身份为曆算家，入仕監生。（中国历代人物传记资料库 CBDB 690223）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UjMKcHMckDBOVdGez9JK5B
          claim_id: c_TtHStGhfHGsts6ms92EUHE
          source_id: s_6rQQud1LGoDpbjQZDprXjk
          stance: supports
          locator: CBDB:690223
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

# 王大善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大善 | accepted |
| bio.summary | 王大善，清人物。籍贯歙縣，身份为曆算家，入仕監生。（中国历代人物传记资料库 CBDB 690223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大善（CBDB 690223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690223&o=json)

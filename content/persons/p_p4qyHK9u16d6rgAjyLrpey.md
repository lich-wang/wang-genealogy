---
schema: wang-person/v1
id: p_p4qyHK9u16d6rgAjyLrpey
status: active
merged_into: null
display_name: 王有策
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CgHt9SScZiFkM6LGAfYoJv
        subject_person_id: p_p4qyHK9u16d6rgAjyLrpey
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z1evxDCkuGzAUY2xPDTF6b
          claim_id: c_CgHt9SScZiFkM6LGAfYoJv
          source_id: s_43JnMvMwfAy3W7sBHFB8rL
          stance: supports
          locator: CBDB:638598
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638598）
          source: &a1
            id: s_43JnMvMwfAy3W7sBHFB8rL
            source_type: api_record
            title: 中国历代人物传记资料库：王有策（CBDB 638598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638598&o=json
            external_identifier: CBDB:638598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9GVBz2veSDHctoxv42RkPj
        subject_person_id: p_p4qyHK9u16d6rgAjyLrpey
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有策，清人物。籍贯西安，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638598）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ID4pxMMaSgsE4qezXBVyCI
          claim_id: c_9GVBz2veSDHctoxv42RkPj
          source_id: s_43JnMvMwfAy3W7sBHFB8rL
          stance: supports
          locator: CBDB:638598
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

# 王有策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有策 | accepted |
| bio.summary | 王有策，清人物。籍贯西安，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 638598） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有策（CBDB 638598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638598&o=json)

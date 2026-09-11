---
schema: wang-person/v1
id: p_88ePuxd9BFiWCp1m5KHfPt
status: active
merged_into: null
display_name: 王春宇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JRejKr68mrc4BLeCGMDh7K
        subject_person_id: p_88ePuxd9BFiWCp1m5KHfPt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GwikjWBPA6FTr68JnDBQgr
          claim_id: c_JRejKr68mrc4BLeCGMDh7K
          source_id: s_vSChE5hW7ei5q1SgjeJDra
          stance: supports
          locator: CBDB:638410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638410）
          source: &a1
            id: s_vSChE5hW7ei5q1SgjeJDra
            source_type: api_record
            title: 中国历代人物传记资料库：王春宇（CBDB 638410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638410&o=json
            external_identifier: CBDB:638410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XiJFpH1uYF6yTGYyLLXn2b
        subject_person_id: p_88ePuxd9BFiWCp1m5KHfPt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王春宇，清人物。籍贯廣平，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AS-XnMLGMZEEZzwEx8S_1v
          claim_id: c_XiJFpH1uYF6yTGYyLLXn2b
          source_id: s_vSChE5hW7ei5q1SgjeJDra
          stance: supports
          locator: CBDB:638410
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

# 王春宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王春宇 | accepted |
| bio.summary | 王春宇，清人物。籍贯廣平，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638410） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王春宇（CBDB 638410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638410&o=json)

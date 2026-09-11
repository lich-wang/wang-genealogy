---
schema: wang-person/v1
id: p_U2784pM1wfxuszS66ALHGj
status: active
merged_into: null
display_name: 王沈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ys7EQgsSCoKTuh9AP9y79m
        subject_person_id: p_U2784pM1wfxuszS66ALHGj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XdTJp5s6CLzkP97nSJ7UFa
          claim_id: c_Ys7EQgsSCoKTuh9AP9y79m
          source_id: s_X49Nk4ZvK3nyX2Y47Bvjpx
          stance: supports
          locator: CBDB:639049
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639049）
          source: &a1
            id: s_X49Nk4ZvK3nyX2Y47Bvjpx
            source_type: api_record
            title: 中国历代人物传记资料库：王沈（CBDB 639049）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639049&o=json
            external_identifier: CBDB:639049
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TkXjuw7LGKpJmZEx9RgPGe
        subject_person_id: p_U2784pM1wfxuszS66ALHGj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沈，清人物。籍贯海澄，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639049）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lXCiI4Lt4Ll3fg8ylfw1g9
          claim_id: c_TkXjuw7LGKpJmZEx9RgPGe
          source_id: s_X49Nk4ZvK3nyX2Y47Bvjpx
          stance: supports
          locator: CBDB:639049
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

# 王沈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沈 | accepted |
| bio.summary | 王沈，清人物。籍贯海澄，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639049） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沈（CBDB 639049）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639049&o=json)

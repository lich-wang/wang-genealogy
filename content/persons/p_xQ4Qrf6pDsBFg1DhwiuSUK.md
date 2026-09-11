---
schema: wang-person/v1
id: p_xQ4Qrf6pDsBFg1DhwiuSUK
status: active
merged_into: null
display_name: 王益年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bDrYD3hUQ8ADtyRCjpeXjM
        subject_person_id: p_xQ4Qrf6pDsBFg1DhwiuSUK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Qn5b7gzKzwwkd2VTkwzTj
          claim_id: c_bDrYD3hUQ8ADtyRCjpeXjM
          source_id: s_gCgUKZVb1EQSKQQtim8GeX
          stance: supports
          locator: CBDB:639527
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639527）
          source: &a1
            id: s_gCgUKZVb1EQSKQQtim8GeX
            source_type: api_record
            title: 中国历代人物传记资料库：王益年（CBDB 639527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639527&o=json
            external_identifier: CBDB:639527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BcgL2vK3GpMvNoYmzWXfAG
        subject_person_id: p_xQ4Qrf6pDsBFg1DhwiuSUK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益年，清人物。籍贯太原，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639527）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_g3kME0-gY9_7R4-lrvqYM8
          claim_id: c_BcgL2vK3GpMvNoYmzWXfAG
          source_id: s_gCgUKZVb1EQSKQQtim8GeX
          stance: supports
          locator: CBDB:639527
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

# 王益年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益年 | accepted |
| bio.summary | 王益年，清人物。籍贯太原，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639527） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益年（CBDB 639527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639527&o=json)

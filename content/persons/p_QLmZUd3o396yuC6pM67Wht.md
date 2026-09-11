---
schema: wang-person/v1
id: p_QLmZUd3o396yuC6pM67Wht
status: active
merged_into: null
display_name: 王宗岳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e5QZfzFnKKco1wtFTm7QBt
        subject_person_id: p_QLmZUd3o396yuC6pM67Wht
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗岳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BKL4bmstZ7Yaii5gRcQy1q
          claim_id: c_e5QZfzFnKKco1wtFTm7QBt
          source_id: s_GCHHVj9eSBc5S85f2ftCWQ
          stance: supports
          locator: CBDB:39480
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39480）
          source: &a1
            id: s_GCHHVj9eSBc5S85f2ftCWQ
            source_type: api_record
            title: 中国历代人物传记资料库：王宗岳（CBDB 39480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39480&o=json
            external_identifier: CBDB:39480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.625Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WWMK2t1s4VUDJcv2yvuFUg
        subject_person_id: p_QLmZUd3o396yuC6pM67Wht
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗岳，宋人物。籍贯臨淮，身份为不求仕。（中国历代人物传记资料库 CBDB 39480）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8m-vGlePTLnEicTfPytbh_
          claim_id: c_WWMK2t1s4VUDJcv2yvuFUg
          source_id: s_GCHHVj9eSBc5S85f2ftCWQ
          stance: supports
          locator: CBDB:39480
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

# 王宗岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗岳 | accepted |
| bio.summary | 王宗岳，宋人物。籍贯臨淮，身份为不求仕。（中国历代人物传记资料库 CBDB 39480） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗岳（CBDB 39480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39480&o=json)

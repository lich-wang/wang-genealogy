---
schema: wang-person/v1
id: p_d56oDzjDy4BsqHLyC7G5Fv
status: active
merged_into: null
display_name: 王一寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dBkdTmnU1xC7w3BJdNFEsn
        subject_person_id: p_d56oDzjDy4BsqHLyC7G5Fv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8jLvhcAG89Z43BScTgJZp4
          claim_id: c_dBkdTmnU1xC7w3BJdNFEsn
          source_id: s_MY7ZWL9q1JuQkhr6xZKj3i
          stance: supports
          locator: CBDB:573581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（573581）
          source: &a1
            id: s_MY7ZWL9q1JuQkhr6xZKj3i
            source_type: api_record
            title: 中国历代人物传记资料库：王一寧（CBDB 573581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573581&o=json
            external_identifier: CBDB:573581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cE9zE9mh587scFoVUi1q5P
        subject_person_id: p_d56oDzjDy4BsqHLyC7G5Fv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一寧，清人物。籍贯江夏，曾任訓導。（中国历代人物传记资料库 CBDB 573581）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nJFDluXkc-4eiD84NjOrf6
          claim_id: c_cE9zE9mh587scFoVUi1q5P
          source_id: s_MY7ZWL9q1JuQkhr6xZKj3i
          stance: supports
          locator: CBDB:573581
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

# 王一寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一寧 | accepted |
| bio.summary | 王一寧，清人物。籍贯江夏，曾任訓導。（中国历代人物传记资料库 CBDB 573581） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一寧（CBDB 573581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573581&o=json)

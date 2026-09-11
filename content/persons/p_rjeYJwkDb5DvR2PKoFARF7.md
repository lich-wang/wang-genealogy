---
schema: wang-person/v1
id: p_rjeYJwkDb5DvR2PKoFARF7
status: active
merged_into: null
display_name: 王復
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x41mYrbZ3VKWRqGexKFMQJ
        subject_person_id: p_rjeYJwkDb5DvR2PKoFARF7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vpFh6iS3vJeVqbGynxKAVE
          claim_id: c_x41mYrbZ3VKWRqGexKFMQJ
          source_id: s_R7rtqC3KxpQPFSj8ZVNFMe
          stance: supports
          locator: CBDB:100825
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100825）
          source: &a1
            id: s_R7rtqC3KxpQPFSj8ZVNFMe
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 100825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100825&o=json
            external_identifier: CBDB:100825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.478Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LLNGET6JAGozHk4Vp9EDyp
        subject_person_id: p_rjeYJwkDb5DvR2PKoFARF7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復，元人物。曾任路錄判。（中国历代人物传记资料库 CBDB 100825）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0yDATeztMfvWy3KZWQ93xq
          claim_id: c_LLNGET6JAGozHk4Vp9EDyp
          source_id: s_R7rtqC3KxpQPFSj8ZVNFMe
          stance: supports
          locator: CBDB:100825
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

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| bio.summary | 王復，元人物。曾任路錄判。（中国历代人物传记资料库 CBDB 100825） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 100825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100825&o=json)

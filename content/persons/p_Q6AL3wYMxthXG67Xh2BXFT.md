---
schema: wang-person/v1
id: p_Q6AL3wYMxthXG67Xh2BXFT
status: active
merged_into: null
display_name: 王欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4S4H5mjHghb62WB9LYxpX5
        subject_person_id: p_Q6AL3wYMxthXG67Xh2BXFT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KtDSeD2U6oMjWCW8HJGDDX
          claim_id: c_4S4H5mjHghb62WB9LYxpX5
          source_id: s_JWLuusuFqvZZbXNqy95H1F
          stance: supports
          locator: CBDB:277034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（277034）
          source: &a1
            id: s_JWLuusuFqvZZbXNqy95H1F
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 277034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277034&o=json
            external_identifier: CBDB:277034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mRbvWZHA7gdHUgkT33MEpx
        subject_person_id: p_Q6AL3wYMxthXG67Xh2BXFT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。正德六年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 277034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__7pCk7ZbCtjtGJ3j4KuKCL
          claim_id: c_mRbvWZHA7gdHUgkT33MEpx
          source_id: s_JWLuusuFqvZZbXNqy95H1F
          stance: supports
          locator: CBDB:277034
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

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。正德六年進士，籍贯猗氏。（中国历代人物传记资料库 CBDB 277034） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 277034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277034&o=json)

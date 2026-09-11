---
schema: wang-person/v1
id: p_Ar9NJGN4ExsCNaRsFnEHWP
status: active
merged_into: null
display_name: 王元興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e8BonneMNjCx52aheziTQ5
        subject_person_id: p_Ar9NJGN4ExsCNaRsFnEHWP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ofir28EMPXApRNJMQyUTmo
          claim_id: c_e8BonneMNjCx52aheziTQ5
          source_id: s_NAFgKXiRTt1hBhyLb6pUH4
          stance: supports
          locator: CBDB:636136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636136）
          source: &a1
            id: s_NAFgKXiRTt1hBhyLb6pUH4
            source_type: api_record
            title: 中国历代人物传记资料库：王元興（CBDB 636136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636136&o=json
            external_identifier: CBDB:636136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6GFTTpm6FAuP6938r1Tfxn
        subject_person_id: p_Ar9NJGN4ExsCNaRsFnEHWP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元興，清人物。籍贯會昌，曾任典史。（中国历代人物传记资料库 CBDB 636136）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OQqHXOwgzEOYkPX_1_IqYu
          claim_id: c_6GFTTpm6FAuP6938r1Tfxn
          source_id: s_NAFgKXiRTt1hBhyLb6pUH4
          stance: supports
          locator: CBDB:636136
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

# 王元興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元興 | accepted |
| bio.summary | 王元興，清人物。籍贯會昌，曾任典史。（中国历代人物传记资料库 CBDB 636136） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元興（CBDB 636136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636136&o=json)

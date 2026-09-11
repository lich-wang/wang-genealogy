---
schema: wang-person/v1
id: p_mLv7EQiooGkwVg4cFafLCz
status: active
merged_into: null
display_name: 王承枚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N2pRqRogbbQsFnM1GdU5f4
        subject_person_id: p_mLv7EQiooGkwVg4cFafLCz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承枚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VvBJCh8iHB62HF1dZMccMh
          claim_id: c_N2pRqRogbbQsFnM1GdU5f4
          source_id: s_NbASyQYCbTEKPur9fhgBhk
          stance: supports
          locator: CBDB:638082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638082）
          source: &a1
            id: s_NbASyQYCbTEKPur9fhgBhk
            source_type: api_record
            title: 中国历代人物传记资料库：王承枚（CBDB 638082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638082&o=json
            external_identifier: CBDB:638082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_67ctfECby9iZCeNJ3K1pi7
        subject_person_id: p_mLv7EQiooGkwVg4cFafLCz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承枚，清人物。籍贯紹興府，曾任復設訓導。（中国历代人物传记资料库 CBDB 638082）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ye96o7nKAt3oj_TYINqRJX
          claim_id: c_67ctfECby9iZCeNJ3K1pi7
          source_id: s_NbASyQYCbTEKPur9fhgBhk
          stance: supports
          locator: CBDB:638082
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

# 王承枚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承枚 | accepted |
| bio.summary | 王承枚，清人物。籍贯紹興府，曾任復設訓導。（中国历代人物传记资料库 CBDB 638082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承枚（CBDB 638082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638082&o=json)

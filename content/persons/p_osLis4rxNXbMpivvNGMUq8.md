---
schema: wang-person/v1
id: p_osLis4rxNXbMpivvNGMUq8
status: active
merged_into: null
display_name: 王鼐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tc9CM5CgoWp3cT4ixd7SyY
        subject_person_id: p_osLis4rxNXbMpivvNGMUq8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p2hUCx852s1tQmi3ZTUTEj
          claim_id: c_tc9CM5CgoWp3cT4ixd7SyY
          source_id: s_KJnXKZ2brFbkT4xfeWLi7Y
          stance: supports
          locator: CBDB:689888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689888）
          source: &a1
            id: s_KJnXKZ2brFbkT4xfeWLi7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 689888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689888&o=json
            external_identifier: CBDB:689888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3mTyHR8jrxibE5Bcgd6bws
        subject_person_id: p_osLis4rxNXbMpivvNGMUq8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼐，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689888）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oDNPbgoV5pMiZf99B9gRLE
          claim_id: c_3mTyHR8jrxibE5Bcgd6bws
          source_id: s_KJnXKZ2brFbkT4xfeWLi7Y
          stance: supports
          locator: CBDB:689888
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

# 王鼐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼐 | accepted |
| bio.summary | 王鼐，清人物。身份为畫家。（中国历代人物传记资料库 CBDB 689888） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼐（CBDB 689888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689888&o=json)

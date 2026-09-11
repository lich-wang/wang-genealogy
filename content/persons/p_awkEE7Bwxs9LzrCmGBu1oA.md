---
schema: wang-person/v1
id: p_awkEE7Bwxs9LzrCmGBu1oA
status: active
merged_into: null
display_name: 王紹元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d1Ddo8hdBoo6SYH41SiFtf
        subject_person_id: p_awkEE7Bwxs9LzrCmGBu1oA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xCdWD5o8kY88RN3pDgBPuY
          claim_id: c_d1Ddo8hdBoo6SYH41SiFtf
          source_id: s_RPDyLXkX1ULbJ7pU7UiLvE
          stance: supports
          locator: CBDB:639752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639752）
          source: &a1
            id: s_RPDyLXkX1ULbJ7pU7UiLvE
            source_type: api_record
            title: 中国历代人物传记资料库：王紹元（CBDB 639752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639752&o=json
            external_identifier: CBDB:639752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DCJ3qEDCZJjFGxKfWiStgY
        subject_person_id: p_awkEE7Bwxs9LzrCmGBu1oA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹元，清人物。籍贯貴州省，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639752）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u48gL-n7ecDGDnq5g38jj_
          claim_id: c_DCJ3qEDCZJjFGxKfWiStgY
          source_id: s_RPDyLXkX1ULbJ7pU7UiLvE
          stance: supports
          locator: CBDB:639752
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

# 王紹元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹元 | accepted |
| bio.summary | 王紹元，清人物。籍贯貴州省，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639752） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹元（CBDB 639752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639752&o=json)

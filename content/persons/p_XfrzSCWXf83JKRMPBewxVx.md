---
schema: wang-person/v1
id: p_XfrzSCWXf83JKRMPBewxVx
status: active
merged_into: null
display_name: 王本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FQ7hHEFZH5LJV57hdpNJRA
        subject_person_id: p_XfrzSCWXf83JKRMPBewxVx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GXNUf9uq1fgXKSeLAhmikA
          claim_id: c_FQ7hHEFZH5LJV57hdpNJRA
          source_id: s_jognMfCHmfkyCk8pHu8ALD
          stance: supports
          locator: CBDB:246858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（246858）
          source: &a1
            id: s_jognMfCHmfkyCk8pHu8ALD
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 246858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246858&o=json
            external_identifier: CBDB:246858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nxBUJkESZDbhAnCxJTcZz7
        subject_person_id: p_XfrzSCWXf83JKRMPBewxVx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本，明人物。成化八年進士，籍贯汝州，曾任主簿。（中国历代人物传记资料库 CBDB 246858）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UbEcmGzDRe98F67AWWEY5e
          claim_id: c_nxBUJkESZDbhAnCxJTcZz7
          source_id: s_jognMfCHmfkyCk8pHu8ALD
          stance: supports
          locator: CBDB:246858
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

# 王本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本 | accepted |
| bio.summary | 王本，明人物。成化八年進士，籍贯汝州，曾任主簿。（中国历代人物传记资料库 CBDB 246858） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本（CBDB 246858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246858&o=json)

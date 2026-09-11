---
schema: wang-person/v1
id: p_hFvcS8x8XG86mf51qa2V4C
status: active
merged_into: null
display_name: 王公袞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3ozqsygmPRCqa2Bv3bstA1
        subject_person_id: p_hFvcS8x8XG86mf51qa2V4C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_776V14hVacDHihMeKhvzPe
          claim_id: c_3ozqsygmPRCqa2Bv3bstA1
          source_id: s_8kDEJKASD18TtVcJkoHNGt
          stance: supports
          locator: CBDB:384857
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（384857）
          source: &a1
            id: s_8kDEJKASD18TtVcJkoHNGt
            source_type: api_record
            title: 中国历代人物传记资料库：王公袞（CBDB 384857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384857&o=json
            external_identifier: CBDB:384857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fE9YysAWXE7782CKLjhvvP
        subject_person_id: p_hFvcS8x8XG86mf51qa2V4C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公袞，宋人物。籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 384857）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eZBuKHtm0ZmpwLs3Az7hty
          claim_id: c_fE9YysAWXE7782CKLjhvvP
          source_id: s_8kDEJKASD18TtVcJkoHNGt
          stance: supports
          locator: CBDB:384857
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

# 王公袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公袞 | accepted |
| bio.summary | 王公袞，宋人物。籍贯金華，入仕進士。（中国历代人物传记资料库 CBDB 384857） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公袞（CBDB 384857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384857&o=json)

---
schema: wang-person/v1
id: p_jVHvLhqu33VanPeEzREwMZ
status: active
merged_into: null
display_name: 王日休
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cmAEfb59m1ZNu6wnrjFwkU
        subject_person_id: p_jVHvLhqu33VanPeEzREwMZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KAZzkobUGq9UNtvKnK9zQp
          claim_id: c_cmAEfb59m1ZNu6wnrjFwkU
          source_id: s_vfjyKjNnGvgkTrPYP6m8X8
          stance: supports
          locator: CBDB:688753
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688753）
          source: &a1
            id: s_vfjyKjNnGvgkTrPYP6m8X8
            source_type: api_record
            title: 中国历代人物传记资料库：王日休（CBDB 688753）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688753&o=json
            external_identifier: CBDB:688753
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hpC8iqJsWPUDGEve2M9zKV
        subject_person_id: p_jVHvLhqu33VanPeEzREwMZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日休，宋人物。籍贯分水，入仕學究科。（中国历代人物传记资料库 CBDB 688753）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YQ4leUornEYWizJWfmTCWb
          claim_id: c_hpC8iqJsWPUDGEve2M9zKV
          source_id: s_vfjyKjNnGvgkTrPYP6m8X8
          stance: supports
          locator: CBDB:688753
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

# 王日休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日休 | accepted |
| bio.summary | 王日休，宋人物。籍贯分水，入仕學究科。（中国历代人物传记资料库 CBDB 688753） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王日休（CBDB 688753）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688753&o=json)

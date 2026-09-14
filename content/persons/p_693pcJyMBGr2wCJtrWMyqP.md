---
schema: wang-person/v1
id: p_693pcJyMBGr2wCJtrWMyqP
status: active
merged_into: null
display_name: 王曄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7iF1AUg4PrH2QAX5u86em7
        subject_person_id: p_693pcJyMBGr2wCJtrWMyqP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TB7EmG5WnmDjsXnkjMS27w
          claim_id: c_7iF1AUg4PrH2QAX5u86em7
          source_id: s_uoMdRkG4m6p4suczwmeuoF
          stance: supports
          locator: CBDB:208878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208878）
          source: &a1
            id: s_uoMdRkG4m6p4suczwmeuoF
            source_type: api_record
            title: 中国历代人物传记资料库：王曄（CBDB 208878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208878&o=json
            external_identifier: CBDB:208878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DPohXdBcui4JNFAJ1zM9Yt
        subject_person_id: p_693pcJyMBGr2wCJtrWMyqP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曄，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208878）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yscw7gX8jkqIgo79sYIzM5
          claim_id: c_DPohXdBcui4JNFAJ1zM9Yt
          source_id: s_uoMdRkG4m6p4suczwmeuoF
          stance: supports
          locator: CBDB:208878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BaJ1dknMxHmDEyKFf4_nyJ
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_693pcJyMBGr2wCJtrWMyqP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5zF7tl1zWiZ3pQwrwd9OSP
          claim_id: c_BaJ1dknMxHmDEyKFf4_nyJ
          source_id: s_vK8qGHoXkzrzZs5U-8CFTH
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王曄 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王曄 之父／母。
          source:
            id: s_vK8qGHoXkzrzZs5U-8CFTH
            source_type: api_record
            title: 中国历代人物传记资料库：王曄（CBDB 208878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208878&o=json
            external_identifier: CBDB:208878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_548o1SKAP1oKBMmyuHA5jA
        status: active
        display_name: 王崇義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_M-NP4k29Z29jaoIU60XE1q
        subject_person_id: p_693pcJyMBGr2wCJtrWMyqP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6sY3VRKaW3kczEZi0fTHR7
          claim_id: c_M-NP4k29Z29jaoIU60XE1q
          source_id: s_vK8qGHoXkzrzZs5U-8CFTH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vK8qGHoXkzrzZs5U-8CFTH
            source_type: api_record
            title: 中国历代人物传记资料库：王曄（CBDB 208878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208878&o=json
            external_identifier: CBDB:208878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RznqNoKYNYcxhtUnus5Vov
        status: active
        display_name: 王曉
        merged_into_person_id: null
---

# 王曄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曄 | accepted |
| bio.summary | 王曄，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208878） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_548o1SKAP1oKBMmyuHA5jA | 王崇義 | accepted |
| other | p_RznqNoKYNYcxhtUnus5Vov | 王曉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曄（CBDB 208878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208878&o=json)

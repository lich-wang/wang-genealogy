---
schema: wang-person/v1
id: p_oUrguJ86TzwVt9RXZNBMYF
status: active
merged_into: null
display_name: 王達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ScEqFeztPtsNRcpQgJi3w1
        subject_person_id: p_oUrguJ86TzwVt9RXZNBMYF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XLqMvMKXZFtxr5UW95RoSq
          claim_id: c_ScEqFeztPtsNRcpQgJi3w1
          source_id: s_fMoi84N76ayVH8a7xZLqwN
          stance: supports
          locator: CBDB:38813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38813）
          source: &a1
            id: s_fMoi84N76ayVH8a7xZLqwN
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 38813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38813&o=json
            external_identifier: CBDB:38813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.559Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CE5rPVrEA4PKpLPHFU7PDX
        subject_person_id: p_oUrguJ86TzwVt9RXZNBMYF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1274年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9eKUPtpCpHidzL3RUCsXGh
          claim_id: c_CE5rPVrEA4PKpLPHFU7PDX
          source_id: s_fMoi84N76ayVH8a7xZLqwN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pF6xKfvX9ezUNwQZHurcWf
        subject_person_id: p_oUrguJ86TzwVt9RXZNBMYF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8jc4yGvuTMAodybZQyitv
          claim_id: c_pF6xKfvX9ezUNwQZHurcWf
          source_id: s_fMoi84N76ayVH8a7xZLqwN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| death.date | 1274年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 38813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38813&o=json)

---
schema: wang-person/v1
id: p_P3mFtMVCTajGd3jU4sVJYh
status: active
merged_into: null
display_name: 王得祿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c6zNisLPJN2F7X1eySgmQA
        subject_person_id: p_P3mFtMVCTajGd3jU4sVJYh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hZUa9eqxNZ12q2g4tSDxvU
          claim_id: c_c6zNisLPJN2F7X1eySgmQA
          source_id: s_zsAMKyj8TL5DURD5QMLqdm
          stance: supports
          locator: CBDB:57176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57176）
          source: &a1
            id: s_zsAMKyj8TL5DURD5QMLqdm
            source_type: api_record
            title: 中国历代人物传记资料库：王得祿（CBDB 57176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57176&o=json
            external_identifier: CBDB:57176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.088Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Wqd7jhDN6NSWZK1qxZ2Duh
        subject_person_id: p_P3mFtMVCTajGd3jU4sVJYh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VpAd6s5Y9KyCCSR7Xi5aHP
          claim_id: c_Wqd7jhDN6NSWZK1qxZ2Duh
          source_id: s_zsAMKyj8TL5DURD5QMLqdm
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
        id: c_vw74d4ypiJJdExBcA3DmHN
        subject_person_id: p_P3mFtMVCTajGd3jU4sVJYh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得祿（卒于1842年），清人物。籍贯諸羅，入仕武舉人，曾任督標水師營右哨千總、鎮標左營遊擊。（中国历代人物传记资料库 CBDB 57176）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E93QBxFsl4XnyYCdpaEW3E
          claim_id: c_vw74d4ypiJJdExBcA3DmHN
          source_id: s_zsAMKyj8TL5DURD5QMLqdm
          stance: supports
          locator: CBDB:57176
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

# 王得祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王得祿 | accepted |
| death.date | 1842年 | accepted |
| bio.summary | 王得祿（卒于1842年），清人物。籍贯諸羅，入仕武舉人，曾任督標水師營右哨千總、鎮標左營遊擊。（中国历代人物传记资料库 CBDB 57176） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王得祿（CBDB 57176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57176&o=json)

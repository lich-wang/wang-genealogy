---
schema: wang-person/v1
id: p_zgqBVANRtX4KH53AAifbGm
status: active
merged_into: null
display_name: 王際福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PxCsWtJsqz8okhPYrr6V5o
        subject_person_id: p_zgqBVANRtX4KH53AAifbGm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YV7vuQ1QbQg7kPt8ALgdis
          claim_id: c_PxCsWtJsqz8okhPYrr6V5o
          source_id: s_RKeJaEDvFAtfy6CEi7EGnc
          stance: supports
          locator: CBDB:69415
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69415）
          source: &a1
            id: s_RKeJaEDvFAtfy6CEi7EGnc
            source_type: api_record
            title: 中国历代人物传记资料库：王際福（CBDB 69415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69415&o=json
            external_identifier: CBDB:69415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QmvkpXoRpKFBPr216QDoaR
        subject_person_id: p_zgqBVANRtX4KH53AAifbGm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1681年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nR5miBpfq3kCCfvcFT5gcJ
          claim_id: c_QmvkpXoRpKFBPr216QDoaR
          source_id: s_RKeJaEDvFAtfy6CEi7EGnc
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
        id: c_JJcomBhD1894i2rdneoSQV
        subject_person_id: p_zgqBVANRtX4KH53AAifbGm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王際福（卒于1681年），清人物。曾任鎮標外委守備。（中国历代人物传记资料库 CBDB 69415）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wVgNKAlRCiLOqmXWL6ZfWC
          claim_id: c_JJcomBhD1894i2rdneoSQV
          source_id: s_RKeJaEDvFAtfy6CEi7EGnc
          stance: supports
          locator: CBDB:69415
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

# 王際福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王際福 | accepted |
| death.date | 1681年 | accepted |
| bio.summary | 王際福（卒于1681年），清人物。曾任鎮標外委守備。（中国历代人物传记资料库 CBDB 69415） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王際福（CBDB 69415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69415&o=json)

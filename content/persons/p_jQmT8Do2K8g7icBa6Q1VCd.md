---
schema: wang-person/v1
id: p_jQmT8Do2K8g7icBa6Q1VCd
status: active
merged_into: null
display_name: 王有宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3mdaJ1dPjKE79TGr2B4MuC
        subject_person_id: p_jQmT8Do2K8g7icBa6Q1VCd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sbQgg7YTLDKgcamCz9zLcV
          claim_id: c_3mdaJ1dPjKE79TGr2B4MuC
          source_id: s_5NH2jczB2B4kzVEQLLMJMZ
          stance: supports
          locator: CBDB:69187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69187）
          source: &a1
            id: s_5NH2jczB2B4kzVEQLLMJMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王有宏（CBDB 69187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69187&o=json
            external_identifier: CBDB:69187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wBpT6ib5qhgyeiDBNiAbF9
        subject_person_id: p_jQmT8Do2K8g7icBa6Q1VCd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1853年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSBpFfKtFrW7ESivmmsr3U
          claim_id: c_wBpT6ib5qhgyeiDBNiAbF9
          source_id: s_5NH2jczB2B4kzVEQLLMJMZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yb5WGPp9gjEYFQa2DBdJHy
        subject_person_id: p_jQmT8Do2K8g7icBa6Q1VCd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1911年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YTKrS2TGvTLwjGT72PEz85
          claim_id: c_yb5WGPp9gjEYFQa2DBdJHy
          source_id: s_5NH2jczB2B4kzVEQLLMJMZ
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
        id: c_eHf6UHupBPxEfm7LVx5mrg
        subject_person_id: p_jQmT8Do2K8g7icBa6Q1VCd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有宏（1853年—1911年），清人物。籍贯天津，入仕軍功補授(軍功)，曾任營遊擊。（中国历代人物传记资料库 CBDB 69187）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w6AelqQmi8oZBtcxRXPf6f
          claim_id: c_eHf6UHupBPxEfm7LVx5mrg
          source_id: s_5NH2jczB2B4kzVEQLLMJMZ
          stance: supports
          locator: CBDB:69187
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

# 王有宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有宏 | accepted |
| birth.date | 1853年 | accepted |
| death.date | 1911年 | accepted |
| bio.summary | 王有宏（1853年—1911年），清人物。籍贯天津，入仕軍功補授(軍功)，曾任營遊擊。（中国历代人物传记资料库 CBDB 69187） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有宏（CBDB 69187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69187&o=json)

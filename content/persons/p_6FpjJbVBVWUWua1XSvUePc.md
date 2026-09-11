---
schema: wang-person/v1
id: p_6FpjJbVBVWUWua1XSvUePc
status: active
merged_into: null
display_name: 王繼龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qoJHp4tUUPW8beVTtb7y7S
        subject_person_id: p_6FpjJbVBVWUWua1XSvUePc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AjWp8s4Ec9Aj7vC1DrjviT
          claim_id: c_qoJHp4tUUPW8beVTtb7y7S
          source_id: s_qGaN6PbtU5LPukfXUCMprQ
          stance: supports
          locator: CBDB:69475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69475）
          source: &a1
            id: s_qGaN6PbtU5LPukfXUCMprQ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼龍（CBDB 69475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69475&o=json
            external_identifier: CBDB:69475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Hcid3PqF1QPavZ6Z368LZF
        subject_person_id: p_6FpjJbVBVWUWua1XSvUePc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1858年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_byGdPJ4sBzeV66KTAKkYQJ
          claim_id: c_Hcid3PqF1QPavZ6Z368LZF
          source_id: s_qGaN6PbtU5LPukfXUCMprQ
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
        id: c_dpABEG2aTvmQmknLRSMS6A
        subject_person_id: p_6FpjJbVBVWUWua1XSvUePc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼龍（卒于1858年），清人物。籍贯湘鄉。（中国历代人物传记资料库 CBDB 69475）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AhshwJ2KQy6NsE2Ypql9Hx
          claim_id: c_dpABEG2aTvmQmknLRSMS6A
          source_id: s_qGaN6PbtU5LPukfXUCMprQ
          stance: supports
          locator: CBDB:69475
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

# 王繼龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼龍 | accepted |
| death.date | 1858年 | accepted |
| bio.summary | 王繼龍（卒于1858年），清人物。籍贯湘鄉。（中国历代人物传记资料库 CBDB 69475） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼龍（CBDB 69475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69475&o=json)

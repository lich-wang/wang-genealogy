---
schema: wang-person/v1
id: p_JFiHEANZ6JMT4vvcPcuy5p
status: active
merged_into: null
display_name: 王則
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rdW7XLNGLZuE4y2bHFJhf9
        subject_person_id: p_JFiHEANZ6JMT4vvcPcuy5p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ozDEhtpdBCBHVFQ82Xuq9e
          claim_id: c_rdW7XLNGLZuE4y2bHFJhf9
          source_id: s_meCnRuRhf3HYsMfBBnqk7P
          stance: supports
          locator: CBDB:140138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140138）
          source: &a1
            id: s_meCnRuRhf3HYsMfBBnqk7P
            source_type: api_record
            title: 中国历代人物传记资料库：王則（CBDB 140138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140138&o=json
            external_identifier: CBDB:140138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_56b4myYuDgmxFsPhNoLTjJ
        subject_person_id: p_JFiHEANZ6JMT4vvcPcuy5p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 650年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NdLM1eFDHiAZM126XQSsW
          claim_id: c_56b4myYuDgmxFsPhNoLTjJ
          source_id: s_meCnRuRhf3HYsMfBBnqk7P
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
        id: c_LoscofUnLNYm9ZXfjsrTMR
        subject_person_id: p_JFiHEANZ6JMT4vvcPcuy5p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 703年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZD3XLCYbRVJPAir4KoL7P
          claim_id: c_LoscofUnLNYm9ZXfjsrTMR
          source_id: s_meCnRuRhf3HYsMfBBnqk7P
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
        id: c_BgYDMPGx2dhE22ozyXxjQ1
        subject_person_id: p_JFiHEANZ6JMT4vvcPcuy5p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王則（650年—703年），周人物。籍贯太原。（中国历代人物传记资料库 CBDB 140138）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7Vk_pj7eani159eYC2CWnc
          claim_id: c_BgYDMPGx2dhE22ozyXxjQ1
          source_id: s_meCnRuRhf3HYsMfBBnqk7P
          stance: supports
          locator: CBDB:140138
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

# 王則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王則 | accepted |
| birth.date | 650年 | accepted |
| death.date | 703年 | accepted |
| bio.summary | 王則（650年—703年），周人物。籍贯太原。（中国历代人物传记资料库 CBDB 140138） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王則（CBDB 140138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140138&o=json)

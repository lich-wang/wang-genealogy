---
schema: wang-person/v1
id: p_LB2YKYEL6G92ub8T4Qcmk3
status: active
merged_into: null
display_name: 王振畿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H44Dn39kwi3ATrXa71J81k
        subject_person_id: p_LB2YKYEL6G92ub8T4Qcmk3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振畿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FSTuCZcvp75gyh77earbGs
          claim_id: c_H44Dn39kwi3ATrXa71J81k
          source_id: s_v6Z2wTeNGttW1RZpYqPrbc
          stance: supports
          locator: CBDB:69346
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69346）
          source: &a1
            id: s_v6Z2wTeNGttW1RZpYqPrbc
            source_type: api_record
            title: 中国历代人物传记资料库：王振畿（CBDB 69346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69346&o=json
            external_identifier: CBDB:69346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_T9y3ERMsngXMUAB1hP331J
        subject_person_id: p_LB2YKYEL6G92ub8T4Qcmk3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1861年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EGGstGJkBRbjgMmPhRZkS9
          claim_id: c_T9y3ERMsngXMUAB1hP331J
          source_id: s_v6Z2wTeNGttW1RZpYqPrbc
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
        id: c_VPwy8D8eWqi1L9V5XqunvA
        subject_person_id: p_LB2YKYEL6G92ub8T4Qcmk3
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
        - id: cs_y3gxYeXoZcPWVmYBjF88Kk
          claim_id: c_VPwy8D8eWqi1L9V5XqunvA
          source_id: s_v6Z2wTeNGttW1RZpYqPrbc
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
        id: c_R58JG6BvvsVJHHaNJmFpYv
        subject_person_id: p_LB2YKYEL6G92ub8T4Qcmk3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振畿（1861年—1911年），清人物。籍贯滕縣，入仕武生員，曾任協統領。（中国历代人物传记资料库 CBDB 69346）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JkvCpYqyM_jDEOj8cCDvdW
          claim_id: c_R58JG6BvvsVJHHaNJmFpYv
          source_id: s_v6Z2wTeNGttW1RZpYqPrbc
          stance: supports
          locator: CBDB:69346
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

# 王振畿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振畿 | accepted |
| birth.date | 1861年 | accepted |
| death.date | 1911年 | accepted |
| bio.summary | 王振畿（1861年—1911年），清人物。籍贯滕縣，入仕武生員，曾任協統領。（中国历代人物传记资料库 CBDB 69346） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振畿（CBDB 69346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69346&o=json)

---
schema: wang-person/v1
id: p_FP3zLk4Mmua96JCrdNC8rU
status: active
merged_into: null
display_name: 王德興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PN18DRcCr9HCCupFsffYPR
        subject_person_id: p_FP3zLk4Mmua96JCrdNC8rU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L4zFzhgv9k4pyScP4AsJ2e
          claim_id: c_PN18DRcCr9HCCupFsffYPR
          source_id: s_pF1YusdBDTuk5EBh7yyMDp
          stance: supports
          locator: CBDB:69447
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69447）
          source: &a1
            id: s_pF1YusdBDTuk5EBh7yyMDp
            source_type: api_record
            title: 中国历代人物传记资料库：王德興（CBDB 69447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69447&o=json
            external_identifier: CBDB:69447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nb56DcsC4YCvs6DMz5JCVB
        subject_person_id: p_FP3zLk4Mmua96JCrdNC8rU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1865年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1mkjcHporbiLkwm2fxNsFC
          claim_id: c_nb56DcsC4YCvs6DMz5JCVB
          source_id: s_pF1YusdBDTuk5EBh7yyMDp
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
        id: c_JQTCPcBPEd631oBmGktu7d
        subject_person_id: p_FP3zLk4Mmua96JCrdNC8rU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王德興（卒于1865年），清人物。籍贯合肥，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 69447）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2IyCwGlz1x1Wcd-R4c56HA
          claim_id: c_JQTCPcBPEd631oBmGktu7d
          source_id: s_pF1YusdBDTuk5EBh7yyMDp
          stance: supports
          locator: CBDB:69447
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

# 王德興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德興 | accepted |
| death.date | 1865年 | accepted |
| bio.summary | 王德興（卒于1865年），清人物。籍贯合肥，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 69447） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德興（CBDB 69447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69447&o=json)

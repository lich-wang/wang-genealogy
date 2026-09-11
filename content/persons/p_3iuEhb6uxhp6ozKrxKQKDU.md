---
schema: wang-person/v1
id: p_3iuEhb6uxhp6ozKrxKQKDU
status: active
merged_into: null
display_name: 王鉅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K3git88Q5QXZgmUNq5kEEW
        subject_person_id: p_3iuEhb6uxhp6ozKrxKQKDU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oCCdLfN7iro9FvaA64voM3
          claim_id: c_K3git88Q5QXZgmUNq5kEEW
          source_id: s_AQykDeHMMALBM4RcJD66S7
          stance: supports
          locator: CBDB:71133
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71133）
          source: &a1
            id: s_AQykDeHMMALBM4RcJD66S7
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅（CBDB 71133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71133&o=json
            external_identifier: CBDB:71133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r4y4QBcSBTtY73RCR6pTBL
        subject_person_id: p_3iuEhb6uxhp6ozKrxKQKDU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1772年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qajKtFTNHJguPu6RvZbg7Z
          claim_id: c_r4y4QBcSBTtY73RCR6pTBL
          source_id: s_AQykDeHMMALBM4RcJD66S7
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
        id: c_zB8U186LR5BiMP4RVM5XdD
        subject_person_id: p_3iuEhb6uxhp6ozKrxKQKDU
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
        - id: cs_Uyyw7LsENFiXQTE83T38DF
          claim_id: c_zB8U186LR5BiMP4RVM5XdD
          source_id: s_AQykDeHMMALBM4RcJD66S7
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
        id: c_hH76qBd1c6GUXz69CUrJYt
        subject_person_id: p_3iuEhb6uxhp6ozKrxKQKDU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅（1772年—1842年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 71133）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dowgQBua0OFTIO441HBInl
          claim_id: c_hH76qBd1c6GUXz69CUrJYt
          source_id: s_AQykDeHMMALBM4RcJD66S7
          stance: supports
          locator: CBDB:71133
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

# 王鉅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉅 | accepted |
| birth.date | 1772年 | accepted |
| death.date | 1842年 | accepted |
| bio.summary | 王鉅（1772年—1842年），清人物。籍贯太倉直隸州。（中国历代人物传记资料库 CBDB 71133） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉅（CBDB 71133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71133&o=json)

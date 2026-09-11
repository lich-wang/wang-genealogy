---
schema: wang-person/v1
id: p_Ugs8u8pDB25xW66L3SJJ5x
status: active
merged_into: null
display_name: 王煦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_32bNXZncYK37yXaASP4xbH
        subject_person_id: p_Ugs8u8pDB25xW66L3SJJ5x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zdh2J9LB55NtQZ1qDmgmZ3
          claim_id: c_32bNXZncYK37yXaASP4xbH
          source_id: s_kZnPPhjAm59yxtjBySEirr
          stance: supports
          locator: CBDB:71247
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71247）
          source: &a1
            id: s_kZnPPhjAm59yxtjBySEirr
            source_type: api_record
            title: 中国历代人物传记资料库：王煦（CBDB 71247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71247&o=json
            external_identifier: CBDB:71247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DrTmADzjbLky1VwG1B4Swv
        subject_person_id: p_Ugs8u8pDB25xW66L3SJJ5x
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1781年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nMKJ6JafeCuvMNgbAcBNnc
          claim_id: c_DrTmADzjbLky1VwG1B4Swv
          source_id: s_kZnPPhjAm59yxtjBySEirr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MRcnL4BD22HVERUukCqQwj
        subject_person_id: p_Ugs8u8pDB25xW66L3SJJ5x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦（生于1781年），清人物。籍贯昌黎。（中国历代人物传记资料库 CBDB 71247）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WEHm5Ym6eAK8wWcaUdGWJa
          claim_id: c_MRcnL4BD22HVERUukCqQwj
          source_id: s_kZnPPhjAm59yxtjBySEirr
          stance: supports
          locator: CBDB:71247
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

# 王煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煦 | accepted |
| birth.date | 1781年 | accepted |
| bio.summary | 王煦（生于1781年），清人物。籍贯昌黎。（中国历代人物传记资料库 CBDB 71247） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煦（CBDB 71247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71247&o=json)

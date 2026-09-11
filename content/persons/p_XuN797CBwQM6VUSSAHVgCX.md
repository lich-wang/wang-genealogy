---
schema: wang-person/v1
id: p_XuN797CBwQM6VUSSAHVgCX
status: active
merged_into: null
display_name: 王澞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6R4hFpcnVuvfD9DiDJC72T
        subject_person_id: p_XuN797CBwQM6VUSSAHVgCX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xgKHwqSdq9HN42xeKGZ3t6
          claim_id: c_6R4hFpcnVuvfD9DiDJC72T
          source_id: s_6VE7X5pcHtt7XLhaeAEEaP
          stance: supports
          locator: CBDB:191707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191707）
          source: &a1
            id: s_6VE7X5pcHtt7XLhaeAEEaP
            source_type: api_record
            title: 中国历代人物传记资料库：王澞（CBDB 191707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191707&o=json
            external_identifier: CBDB:191707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W8NetMXmjrRcRnxae6HQfL
        subject_person_id: p_XuN797CBwQM6VUSSAHVgCX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 878年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pu9bL51Dh1PakwUNJ7BMKo
          claim_id: c_W8NetMXmjrRcRnxae6HQfL
          source_id: s_6VE7X5pcHtt7XLhaeAEEaP
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
        id: c_yU34VUAsR7XszqqoPcroQT
        subject_person_id: p_XuN797CBwQM6VUSSAHVgCX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澞（卒于878年），唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 191707）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l-9gw2eKxWEQj6lcDckJYW
          claim_id: c_yU34VUAsR7XszqqoPcroQT
          source_id: s_6VE7X5pcHtt7XLhaeAEEaP
          stance: supports
          locator: CBDB:191707
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

# 王澞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澞 | accepted |
| death.date | 878年 | accepted |
| bio.summary | 王澞（卒于878年），唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 191707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澞（CBDB 191707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191707&o=json)

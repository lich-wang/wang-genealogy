---
schema: wang-person/v1
id: p_9MiuL48tXcQ7r5ofDRarNF
status: active
merged_into: null
display_name: 王佶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zMGQysAv752L28Qqf1AsiZ
        subject_person_id: p_9MiuL48tXcQ7r5ofDRarNF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mFZ4Er8d791HTa6x4w2fwu
          claim_id: c_zMGQysAv752L28Qqf1AsiZ
          source_id: s_BdwfKtfF5Cp8KfEchGrjqG
          stance: supports
          locator: CBDB:175786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175786）
          source: &a1
            id: s_BdwfKtfF5Cp8KfEchGrjqG
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 175786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175786&o=json
            external_identifier: CBDB:175786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_B8Af9mQyufsL2AG9LaFD6z
        subject_person_id: p_9MiuL48tXcQ7r5ofDRarNF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 752年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ThttJLB2B49Cx96BKko7oN
          claim_id: c_B8Af9mQyufsL2AG9LaFD6z
          source_id: s_BdwfKtfF5Cp8KfEchGrjqG
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
        id: c_MDBWvAWnQrEBAQ7zPypzKA
        subject_person_id: p_9MiuL48tXcQ7r5ofDRarNF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iQ3m84jUMT9x4noCDqibEZ
          claim_id: c_MDBWvAWnQrEBAQ7zPypzKA
          source_id: s_BdwfKtfF5Cp8KfEchGrjqG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王佶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佶 | accepted |
| death.date | 752年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佶（CBDB 175786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175786&o=json)

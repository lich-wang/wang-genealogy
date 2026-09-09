---
schema: wang-person/v1
id: p_6yEQbCpPbZgLz7LGDngBr9
status: active
merged_into: null
display_name: 王茂蔭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_do7zRHwQPeKfdChmpFuuJD
        subject_person_id: p_6yEQbCpPbZgLz7LGDngBr9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PEAF86KwXJ7s8CXdMb9m3W
          claim_id: c_do7zRHwQPeKfdChmpFuuJD
          source_id: s_FU1VmgaFchy2vPp6w3C66B
          stance: supports
          locator: CBDB:58609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58609）
          source: &a1
            id: s_FU1VmgaFchy2vPp6w3C66B
            source_type: api_record
            title: 中国历代人物传记资料库：王茂蔭（CBDB 58609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58609&o=json
            external_identifier: CBDB:58609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wTjhbUYPWVpHWbg1ruso12
        subject_person_id: p_6yEQbCpPbZgLz7LGDngBr9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1798年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pUrDdLX1esTqbC4UGrjVcm
          claim_id: c_wTjhbUYPWVpHWbg1ruso12
          source_id: s_FU1VmgaFchy2vPp6w3C66B
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
        id: c_U1YqzAtq6Lus4W8YQnFipQ
        subject_person_id: p_6yEQbCpPbZgLz7LGDngBr9
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
        - id: cs_dK7hwtNG2fDojvbim9gDqV
          claim_id: c_U1YqzAtq6Lus4W8YQnFipQ
          source_id: s_FU1VmgaFchy2vPp6w3C66B
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
        id: c_FnoYMcvm2A4HfhEhMLV3Th
        subject_person_id: p_6yEQbCpPbZgLz7LGDngBr9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZpYCaFGdcM5ntKQFMJLhKL
          claim_id: c_FnoYMcvm2A4HfhEhMLV3Th
          source_id: s_FU1VmgaFchy2vPp6w3C66B
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

# 王茂蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂蔭 | accepted |
| birth.date | 1798年 | accepted |
| death.date | 1865年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王茂蔭（CBDB 58609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58609&o=json)

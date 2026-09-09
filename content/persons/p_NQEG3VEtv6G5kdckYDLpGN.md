---
schema: wang-person/v1
id: p_NQEG3VEtv6G5kdckYDLpGN
status: active
merged_into: null
display_name: 王之渙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qRByDaUq3xQqiD3dMM5e1Q
        subject_person_id: p_NQEG3VEtv6G5kdckYDLpGN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之渙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cKDjoA7WHyEC5aaDb2VGw3
          claim_id: c_qRByDaUq3xQqiD3dMM5e1Q
          source_id: s_2bAh3JtSzzMZJHRdgcDLcM
          stance: supports
          locator: CBDB:91975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91975）
          source: &a1
            id: s_2bAh3JtSzzMZJHRdgcDLcM
            source_type: api_record
            title: 中国历代人物传记资料库：王之渙（CBDB 91975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91975&o=json
            external_identifier: CBDB:91975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dEfjC6C7V8hwxYgR9iTeiE
        subject_person_id: p_NQEG3VEtv6G5kdckYDLpGN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 688年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YVF4nDJtKqNvCXE6cGuBfX
          claim_id: c_dEfjC6C7V8hwxYgR9iTeiE
          source_id: s_2bAh3JtSzzMZJHRdgcDLcM
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
        id: c_mNDxk1sfW5pa7HoWiSQAmH
        subject_person_id: p_NQEG3VEtv6G5kdckYDLpGN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 742年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EyZXWrNQVvCxCrbNX5oE74
          claim_id: c_mNDxk1sfW5pa7HoWiSQAmH
          source_id: s_2bAh3JtSzzMZJHRdgcDLcM
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
        id: c_9f4sxPaYn8egwFSNf21vTr
        subject_person_id: p_NQEG3VEtv6G5kdckYDLpGN
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
        - id: cs_oPy7f22krnX2JvZ1Aio9kT
          claim_id: c_9f4sxPaYn8egwFSNf21vTr
          source_id: s_2bAh3JtSzzMZJHRdgcDLcM
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

# 王之渙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之渙 | accepted |
| birth.date | 688年 | accepted |
| death.date | 742年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之渙（CBDB 91975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91975&o=json)

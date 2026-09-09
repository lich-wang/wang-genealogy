---
schema: wang-person/v1
id: p_PPCjb3WLAXAZdvH2wXG32m
status: active
merged_into: null
display_name: 王釗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKF6bpNWn1kxW6X11MsBEQ
        subject_person_id: p_PPCjb3WLAXAZdvH2wXG32m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QYqRodJY8yzsfEzyTkEMLT
          claim_id: c_AKF6bpNWn1kxW6X11MsBEQ
          source_id: s_MKo3G8iUg8PRoV5DYSeBCu
          stance: supports
          locator: CBDB:186146
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186146）
          source: &a1
            id: s_MKo3G8iUg8PRoV5DYSeBCu
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 186146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186146&o=json
            external_identifier: CBDB:186146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_dvLWNAcb95xH2btZ1WyQb1
        subject_person_id: p_PPCjb3WLAXAZdvH2wXG32m
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 910年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8VCRBQcBa2HRF9PSTmtugm
          claim_id: c_dvLWNAcb95xH2btZ1WyQb1
          source_id: s_MKo3G8iUg8PRoV5DYSeBCu
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
        id: c_R9TgJj5RCxAfpXwGXHAtct
        subject_person_id: p_PPCjb3WLAXAZdvH2wXG32m
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
        - id: cs_S9zC51G9CMaSHuFxA9wzWJ
          claim_id: c_R9TgJj5RCxAfpXwGXHAtct
          source_id: s_MKo3G8iUg8PRoV5DYSeBCu
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

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| death.date | 910年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王釗（CBDB 186146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186146&o=json)

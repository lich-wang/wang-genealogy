---
schema: wang-person/v1
id: p_PPCjb3WLAXAZdvH2wXG32m
status: active
merged_into: null
display_name: 王釗
revision: 2
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
  parents:
    - claim:
        id: c_oR-GGFj1QXLvoQwcVZwO8g
        subject_person_id: p_5UAth4rJCPGaoG71WcGgsp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PPCjb3WLAXAZdvH2wXG32m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yhnToYyV2dpzOab680Ed3X
          claim_id: c_oR-GGFj1QXLvoQwcVZwO8g
          source_id: s_b4y5Ah8FMs1dAAQC1d3wNR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b4y5Ah8FMs1dAAQC1d3wNR
            source_type: api_record
            title: 中国历代人物传记资料库：王權（CBDB 185654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185654&o=json
            external_identifier: CBDB:185654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5UAth4rJCPGaoG71WcGgsp
        status: active
        display_name: 王權
        merged_into_person_id: null
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
| parents | p_5UAth4rJCPGaoG71WcGgsp | 王權 | accepted |

## 外部来源

- [中国历代人物传记资料库：王權（CBDB 185654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185654&o=json)
- [中国历代人物传记资料库：王釗（CBDB 186146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186146&o=json)

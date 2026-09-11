---
schema: wang-person/v1
id: p_YK4bpXQdAzwAFmUdFckAGb
status: active
merged_into: null
display_name: 王仲建
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2XWFdntCmPMjPFGd1cMxRs
        subject_person_id: p_YK4bpXQdAzwAFmUdFckAGb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pmfAgFQM1YUVSZjNUr114b
          claim_id: c_2XWFdntCmPMjPFGd1cMxRs
          source_id: s_9WsZUzHyUGnjUuD4oGC3LM
          stance: supports
          locator: CBDB:141999
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141999）
          source: &a1
            id: s_9WsZUzHyUGnjUuD4oGC3LM
            source_type: api_record
            title: 中国历代人物传记资料库：王仲建（CBDB 141999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141999&o=json
            external_identifier: CBDB:141999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.209Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Two93x6MV9DsCFpB1w7YVR
        subject_person_id: p_YK4bpXQdAzwAFmUdFckAGb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 806年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ik9WwdsVEacujCmwNhLMr
          claim_id: c_Two93x6MV9DsCFpB1w7YVR
          source_id: s_9WsZUzHyUGnjUuD4oGC3LM
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
        id: c_5bT4a8KCB9C3TVFBfk2heS
        subject_person_id: p_YK4bpXQdAzwAFmUdFckAGb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 865年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TBXuNHWGhkt72UWgKLEt66
          claim_id: c_5bT4a8KCB9C3TVFBfk2heS
          source_id: s_9WsZUzHyUGnjUuD4oGC3LM
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
        id: c_kPr5TEash29bcfx63ngAkA
        subject_person_id: p_YK4bpXQdAzwAFmUdFckAGb
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
        - id: cs_z487XdxHjMePnt56yNmc7F
          claim_id: c_kPr5TEash29bcfx63ngAkA
          source_id: s_9WsZUzHyUGnjUuD4oGC3LM
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
        id: c_Kf87NMURJ9PKNuKZoXYVY5
        subject_person_id: p_p6Cfh5FMfq4RGbk9EBSDYa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YK4bpXQdAzwAFmUdFckAGb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gItTbHiGTBS_Ixa8JAozNk
          claim_id: c_Kf87NMURJ9PKNuKZoXYVY5
          source_id: s_o35r9tq1fQ1NVice9bPWPa
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 47：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_o35r9tq1fQ1NVice9bPWPa
            source_type: api_record
            title: 中国历代人物传记资料库：王坤（CBDB 160481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160481&o=json
            external_identifier: CBDB:160481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_p6Cfh5FMfq4RGbk9EBSDYa
        status: active
        display_name: 王坤
        merged_into_person_id: null
  children:
    - claim:
        id: c_8qwOofNdKonONmxH5jnE3h
        subject_person_id: p_YK4bpXQdAzwAFmUdFckAGb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eAj5DW49NBgmuSsqK5Hgjq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ot7e5-jeyPQ6Q9fZwGM40t
          claim_id: c_8qwOofNdKonONmxH5jnE3h
          source_id: s_Rt5ECniPESR8kDrtgYoFcp
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 47：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Rt5ECniPESR8kDrtgYoFcp
            source_type: api_record
            title: 中国历代人物传记资料库：王知教（CBDB 160482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160482&o=json
            external_identifier: CBDB:160482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_eAj5DW49NBgmuSsqK5Hgjq
        status: active
        display_name: 王知教
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲建 | accepted |
| birth.date | 806年 | accepted |
| death.date | 865年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p6Cfh5FMfq4RGbk9EBSDYa | 王坤 | accepted |
| children | p_eAj5DW49NBgmuSsqK5Hgjq | 王知教 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坤（CBDB 160481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160481&o=json)
- [中国历代人物传记资料库：王知教（CBDB 160482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160482&o=json)
- [中国历代人物传记资料库：王仲建（CBDB 141999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141999&o=json)

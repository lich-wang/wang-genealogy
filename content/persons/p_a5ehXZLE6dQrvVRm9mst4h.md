---
schema: wang-person/v1
id: p_a5ehXZLE6dQrvVRm9mst4h
status: active
merged_into: null
display_name: 王孝廉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mKKMPBjvU7DXCNcSPNGW7s
        subject_person_id: p_a5ehXZLE6dQrvVRm9mst4h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Md59Ft9XtAsGco52L5gVHd
          claim_id: c_mKKMPBjvU7DXCNcSPNGW7s
          source_id: s_1aNuKrqHRWdUEd5Mepbs9F
          stance: supports
          locator: CBDB:166889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166889）
          source: &a1
            id: s_1aNuKrqHRWdUEd5Mepbs9F
            source_type: api_record
            title: 中国历代人物传记资料库：王孝廉（CBDB 166889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166889&o=json
            external_identifier: CBDB:166889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hstQ16aSEZX1hyR8RMEM45
        subject_person_id: p_a5ehXZLE6dQrvVRm9mst4h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝廉，史料所见人物。本项目依据《中国历代人物传记资料库：王孝廉（CBDB 166889）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EITA2OkkEu7YKQheN9wmJu
          claim_id: c_hstQ16aSEZX1hyR8RMEM45
          source_id: s_1aNuKrqHRWdUEd5Mepbs9F
          stance: supports
          locator: CBDB:166889
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_n9xH7gkgzd1jZHrq2KyOpD
        subject_person_id: p_a5ehXZLE6dQrvVRm9mst4h
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TWWuYba2aWLP7ohuWjN9Jn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AQL4J7iMEkLaNA7Wuya-pA
          claim_id: c_n9xH7gkgzd1jZHrq2KyOpD
          source_id: s_MWy_jiUxWbCgwPaNr0haJ6
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaicheng17：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MWy_jiUxWbCgwPaNr0haJ6
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(楊某女)（CBDB 143399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143399&o=json
            external_identifier: CBDB:143399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TWWuYba2aWLP7ohuWjN9Jn
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王孝廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝廉 | accepted |
| bio.summary | 王孝廉，史料所见人物。本项目依据《中国历代人物传记资料库：王孝廉（CBDB 166889）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_TWWuYba2aWLP7ohuWjN9Jn | 楊氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孝廉（CBDB 166889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166889&o=json)
- [中国历代人物传记资料库：楊氏(楊某女)（CBDB 143399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143399&o=json)

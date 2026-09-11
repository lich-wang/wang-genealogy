---
schema: wang-person/v1
id: p_p6Cfh5FMfq4RGbk9EBSDYa
status: active
merged_into: null
display_name: 王坤
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R2qNNNvXwocww4BARUKBSF
        subject_person_id: p_p6Cfh5FMfq4RGbk9EBSDYa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JSrpuLK52ZdQ4dJLEvp9xB
          claim_id: c_R2qNNNvXwocww4BARUKBSF
          source_id: s_o35r9tq1fQ1NVice9bPWPa
          stance: supports
          locator: CBDB:160481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（160481）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_35A2kPCbaKYJN6SiYJrVnC
        subject_person_id: p_p6Cfh5FMfq4RGbk9EBSDYa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坤，史料所见人物。本项目依据《中国历代人物传记资料库：王坤（CBDB 160481）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U-XbBXv_mGD63nDWebzzGU
          claim_id: c_35A2kPCbaKYJN6SiYJrVnC
          source_id: s_o35r9tq1fQ1NVice9bPWPa
          stance: supports
          locator: CBDB:160481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_YK4bpXQdAzwAFmUdFckAGb
        status: active
        display_name: 王仲建
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王坤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坤 | accepted |
| bio.summary | 王坤，史料所见人物。本项目依据《中国历代人物传记资料库：王坤（CBDB 160481）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YK4bpXQdAzwAFmUdFckAGb | 王仲建 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坤（CBDB 160481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160481&o=json)

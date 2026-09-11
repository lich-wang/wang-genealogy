---
schema: wang-person/v1
id: p_DGzZ8wX5BL5EKCxJCq69dz
status: active
merged_into: null
display_name: 王鎔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iLk2YVECG4DxJ4Gd1UmLSc
        subject_person_id: p_DGzZ8wX5BL5EKCxJCq69dz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TmLQcLsRuQAEDNdp17X6G4
          claim_id: c_iLk2YVECG4DxJ4Gd1UmLSc
          source_id: s_mJZRWFbG4gLqoKptttYS2k
          stance: supports
          locator: CBDB:118641
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（118641）
          source: &a1
            id: s_mJZRWFbG4gLqoKptttYS2k
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 118641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118641&o=json
            external_identifier: CBDB:118641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_snVu2iY5Ra6XRKwh1WQfNg
        subject_person_id: p_DGzZ8wX5BL5EKCxJCq69dz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8YZX9Gk9p247mkcSJA5HK2
          claim_id: c_snVu2iY5Ra6XRKwh1WQfNg
          source_id: s_mJZRWFbG4gLqoKptttYS2k
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
        id: c_P5PdkNJrkfkD27CCheqqwc
        subject_person_id: p_DGzZ8wX5BL5EKCxJCq69dz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1661年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rRGTjFbyhYQS5snUuNB7yU
          claim_id: c_P5PdkNJrkfkD27CCheqqwc
          source_id: s_mJZRWFbG4gLqoKptttYS2k
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
        id: c_9JvaEunkB1ARkHmoY9sjgf
        subject_person_id: p_DGzZ8wX5BL5EKCxJCq69dz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎔（1628年—1661年），史料所见人物。本项目依据《中国历代人物传记资料库：王鎔（CBDB 118641）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PJxdI1PdhIdMKUzqfU2_h_
          claim_id: c_9JvaEunkB1ARkHmoY9sjgf
          source_id: s_mJZRWFbG4gLqoKptttYS2k
          stance: supports
          locator: CBDB:118641
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
  spouses: []
  ancestors:
    - claim:
        id: c_fO3OEpwFe3pAisPxKX8sSd
        subject_person_id: p_BqT9GM9yFPoPmNsjdsf7T3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DGzZ8wX5BL5EKCxJCq69dz
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LK448573gUt2_GLf70i5LX
          claim_id: c_fO3OEpwFe3pAisPxKX8sSd
          source_id: s_mJZRWFbG4gLqoKptttYS2k
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2247：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BqT9GM9yFPoPmNsjdsf7T3
        status: active
        display_name: 王化行
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鎔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎔 | accepted |
| birth.date | 1628年 | accepted |
| death.date | 1661年 | accepted |
| bio.summary | 王鎔（1628年—1661年），史料所见人物。本项目依据《中国历代人物传记资料库：王鎔（CBDB 118641）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_BqT9GM9yFPoPmNsjdsf7T3 | 王化行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎔（CBDB 118641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118641&o=json)

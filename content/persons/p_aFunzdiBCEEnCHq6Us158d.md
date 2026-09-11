---
schema: wang-person/v1
id: p_aFunzdiBCEEnCHq6Us158d
status: active
merged_into: null
display_name: 王麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hrGJ8szpQNCtmJ3NgHwoY7
        subject_person_id: p_aFunzdiBCEEnCHq6Us158d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6vsMrH5SmsEGuLBFzfEaHf
          claim_id: c_hrGJ8szpQNCtmJ3NgHwoY7
          source_id: s_SyPFB1pzQ1zjZ5DxuXsmM5
          stance: supports
          locator: CBDB:328689
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328689）
          source: &a1
            id: s_SyPFB1pzQ1zjZ5DxuXsmM5
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 328689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328689&o=json
            external_identifier: CBDB:328689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hm61SnLBhiHXfWkma2bcDb
        subject_person_id: p_aFunzdiBCEEnCHq6Us158d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。嘉靖四十一年進士，曾任戶部主事、教授。（中国历代人物传记资料库 CBDB 328689）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dwtkW0m7AHJDAQm_mykmeA
          claim_id: c_hm61SnLBhiHXfWkma2bcDb
          source_id: s_SyPFB1pzQ1zjZ5DxuXsmM5
          stance: supports
          locator: CBDB:328689
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
  descendants:
    - claim:
        id: c_S87XpqCXLirDYz_2TseVFN
        subject_person_id: p_aFunzdiBCEEnCHq6Us158d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_esnkJduB5GpM6eiD8Nh16h
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XdVpWwSM2vzInHutK72gpe
          claim_id: c_S87XpqCXLirDYz_2TseVFN
          source_id: s_SyPFB1pzQ1zjZ5DxuXsmM5
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_esnkJduB5GpM6eiD8Nh16h
        status: active
        display_name: 王之垣
        merged_into_person_id: null
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，明人物。嘉靖四十一年進士，曾任戶部主事、教授。（中国历代人物传记资料库 CBDB 328689） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_esnkJduB5GpM6eiD8Nh16h | 王之垣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 328689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328689&o=json)

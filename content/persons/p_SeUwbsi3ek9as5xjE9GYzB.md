---
schema: wang-person/v1
id: p_SeUwbsi3ek9as5xjE9GYzB
status: active
merged_into: null
display_name: 王敏道
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UPcAxgBZsGFWjVqV5WZfVf
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o5seQViG42LkKmhArKvrHx
          claim_id: c_UPcAxgBZsGFWjVqV5WZfVf
          source_id: s_6kwmYf1L3ZceQWBXBcMTf8
          stance: supports
          locator: CBDB:287084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287084）
          source: &a1
            id: s_6kwmYf1L3ZceQWBXBcMTf8
            source_type: api_record
            title: 中国历代人物传记资料库：王敏道（CBDB 287084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287084&o=json
            external_identifier: CBDB:287084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LS5mnJ8McYfs8xvAj242Lt
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏道，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZBYNRJvQ-n1N4D76-T7NVw
          claim_id: c_LS5mnJ8McYfs8xvAj242Lt
          source_id: s_6kwmYf1L3ZceQWBXBcMTf8
          stance: supports
          locator: CBDB:287084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gzXtf57vMFWevysZ8_7Iyw
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDI_bH0f9RYZ6GuF-d0dMF
          claim_id: c_gzXtf57vMFWevysZ8_7Iyw
          source_id: s_6kwmYf1L3ZceQWBXBcMTf8
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2J6v6Z1BCr8cEtWSejd2v
        status: active
        display_name: 王時習
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敏道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏道 | accepted |
| bio.summary | 王敏道，明人物。永樂十年進士，籍贯南康。（中国历代人物传记资料库 CBDB 287084） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_s2J6v6Z1BCr8cEtWSejd2v | 王時習 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敏道（CBDB 287084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287084&o=json)

---
schema: wang-person/v1
id: p_L49PD7VBdyK2G5NKVXJE6L
status: active
merged_into: null
display_name: 王氏
revision: 2
cbdb_id: 513078
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YklekYnI4VPmpXWdHUaSrJ
        subject_person_id: p_L49PD7VBdyK2G5NKVXJE6L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，史料所见人物。本项目依据《中国历代人物传记资料库：王氏(王應泰妻)（CBDB 513078）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5xCD93XIO9rvtfYT2_SVj2
          claim_id: c_YklekYnI4VPmpXWdHUaSrJ
          source_id: s_K_5PZMagfS_K-tJ7D4RGkG
          stance: supports
          locator: CBDB:513078
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_K_5PZMagfS_K-tJ7D4RGkG
            source_type: api_record
            title: 中国历代人物传记资料库：王氏(王應泰妻)（CBDB 513078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513078&o=json
            external_identifier: CBDB:513078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SPVxGkxJmOOoKJHpE2Hass
        subject_person_id: p_L49PD7VBdyK2G5NKVXJE6L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tfTmnLz5zFOMGqfAsaWvqe
          claim_id: c_SPVxGkxJmOOoKJHpE2Hass
          source_id: s_K_5PZMagfS_K-tJ7D4RGkG
          stance: supports
          locator: CBDB:513078
          quotation: null
          interpretation_note: CBDB 明确记录的王應泰配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8GqjyBy3kP-yMUo8beNsn2
        subject_person_id: p_L49PD7VBdyK2G5NKVXJE6L
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_8DX5yJ6EprbCARPG46d4uR
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vi7Pr7K3R0wNp8n7_-8h_t
          claim_id: c_8GqjyBy3kP-yMUo8beNsn2
          source_id: s_iUcS1mvPCBSiioq7EJSYY2
          stance: supports
          locator: CBDB 亲属：母（KinPerson 513078）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_iUcS1mvPCBSiioq7EJSYY2
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 513080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513080&o=json
            external_identifier: CBDB:513080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8DX5yJ6EprbCARPG46d4uR
        status: active
        display_name: 王賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Nh2YQja5YzG-VxqmlR7bpo
        subject_person_id: p_sLNnhEkACQNxtMGGEm3Y6S
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_L49PD7VBdyK2G5NKVXJE6L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgHyjaECPQhNmX-UE2pw7_
          claim_id: c_Nh2YQja5YzG-VxqmlR7bpo
          source_id: s_K_5PZMagfS_K-tJ7D4RGkG
          stance: supports
          locator: (道光)敦煌縣志，lgid=1104937：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sLNnhEkACQNxtMGGEm3Y6S
        status: active
        display_name: 王應泰
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，史料所见人物。本项目依据《中国历代人物传记资料库：王氏(王應泰妻)（CBDB 513078）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8DX5yJ6EprbCARPG46d4uR | 王賓 | accepted |
| spouses | p_sLNnhEkACQNxtMGGEm3Y6S | 王應泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 513080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513080&o=json)
- [中国历代人物传记资料库：王氏(王應泰妻)（CBDB 513078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513078&o=json)

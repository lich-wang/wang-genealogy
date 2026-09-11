---
schema: wang-person/v1
id: p_V1Lxrxvhjt1V6KGoR8pwse
status: active
merged_into: null
display_name: 王安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N7ve1CTT4oHJPgcM8e4X3b
        subject_person_id: p_V1Lxrxvhjt1V6KGoR8pwse
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sRxZmxiFkoqR4LRqbAL92P
          claim_id: c_N7ve1CTT4oHJPgcM8e4X3b
          source_id: s_92DA7Crq517en2QZHHLaie
          stance: supports
          locator: CBDB:285845
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285845）
          source: &a1
            id: s_92DA7Crq517en2QZHHLaie
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 285845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285845&o=json
            external_identifier: CBDB:285845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aPD9T77PrdfhnDp2Ls3GxP
        subject_person_id: p_V1Lxrxvhjt1V6KGoR8pwse
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NK6YCiFqNLQN6cGgZmk9GD
          claim_id: c_aPD9T77PrdfhnDp2Ls3GxP
          source_id: s_92DA7Crq517en2QZHHLaie
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
  descendants:
    - claim:
        id: c_ON0cNXjPcpyAi_78FN1Nnf
        subject_person_id: p_V1Lxrxvhjt1V6KGoR8pwse
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sah6VPDFd2T0n6YgSnUecY
          claim_id: c_ON0cNXjPcpyAi_78FN1Nnf
          source_id: s_92DA7Crq517en2QZHHLaie
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HgaWqM5nscyN4tzrPQd5UX
        status: active
        display_name: 王重賢
        merged_into_person_id: null
  other: []
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HgaWqM5nscyN4tzrPQd5UX | 王重賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 285845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285845&o=json)

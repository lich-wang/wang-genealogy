---
schema: wang-person/v1
id: p_sujGaKswrg8KUFGQ4G6jyw
status: active
merged_into: null
display_name: 王朝用
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B4uJ1wF4SuKj52APR3GsPz
        subject_person_id: p_sujGaKswrg8KUFGQ4G6jyw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qqu1WUA13jgEKUjVRmJFmz
          claim_id: c_B4uJ1wF4SuKj52APR3GsPz
          source_id: s_WBQqsncyC2aYiGCHfz45Ns
          stance: supports
          locator: CBDB:210610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210610）
          source: &a1
            id: s_WBQqsncyC2aYiGCHfz45Ns
            source_type: api_record
            title: 中国历代人物传记资料库：王朝用（CBDB 210610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210610&o=json
            external_identifier: CBDB:210610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.008Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8VUg7wgwhUqZ7TdkZiYoDh
        subject_person_id: p_sujGaKswrg8KUFGQ4G6jyw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝用，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 210610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BRMJKtGM-q32XZ6THNxk4P
          claim_id: c_8VUg7wgwhUqZ7TdkZiYoDh
          source_id: s_WBQqsncyC2aYiGCHfz45Ns
          stance: supports
          locator: CBDB:210610
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
        id: c_8ZcrtRTStWDyKnYken8Nj8
        subject_person_id: p_sujGaKswrg8KUFGQ4G6jyw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TFTLmHU5uD9CZvePXzWQV6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wJ1059WsUTuGc8LulavS5f
          claim_id: c_8ZcrtRTStWDyKnYken8Nj8
          source_id: s_WBQqsncyC2aYiGCHfz45Ns
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TFTLmHU5uD9CZvePXzWQV6
        status: active
        display_name: 王來聘
        merged_into_person_id: null
  other: []
---

# 王朝用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝用 | accepted |
| bio.summary | 王朝用，明人物。隆慶五年進士。（中国历代人物传记资料库 CBDB 210610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_TFTLmHU5uD9CZvePXzWQV6 | 王來聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝用（CBDB 210610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210610&o=json)

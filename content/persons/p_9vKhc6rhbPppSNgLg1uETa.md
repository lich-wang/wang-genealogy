---
schema: wang-person/v1
id: p_9vKhc6rhbPppSNgLg1uETa
status: active
merged_into: null
display_name: 王藝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DwwFZmf2YYEyz7NzCkM4GT
        subject_person_id: p_9vKhc6rhbPppSNgLg1uETa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_17GVBbaMUBfaMTJUvMvPiB
          claim_id: c_DwwFZmf2YYEyz7NzCkM4GT
          source_id: s_oXx5u5U263NLqYwR8WP48A
          stance: supports
          locator: CBDB:272646
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272646）
          source: &a1
            id: s_oXx5u5U263NLqYwR8WP48A
            source_type: api_record
            title: 中国历代人物传记资料库：王藝（CBDB 272646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272646&o=json
            external_identifier: CBDB:272646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.890Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HFwVyqcDQoPSmAV4DZtJRP
        subject_person_id: p_9vKhc6rhbPppSNgLg1uETa
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
        - id: cs_M3AakHF9DkkkPH5pMnGeuG
          claim_id: c_HFwVyqcDQoPSmAV4DZtJRP
          source_id: s_oXx5u5U263NLqYwR8WP48A
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
        id: c_laiQ5VOcldj_Cgx2hAH8SU
        subject_person_id: p_9vKhc6rhbPppSNgLg1uETa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vMrsFyx3mJ3d7E7imZc3LS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5JJrkxexrEcvYTHrXBbMnc
          claim_id: c_laiQ5VOcldj_Cgx2hAH8SU
          source_id: s_oXx5u5U263NLqYwR8WP48A
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百九十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vMrsFyx3mJ3d7E7imZc3LS
        status: active
        display_name: 王鑾
        merged_into_person_id: null
  other: []
---

# 王藝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藝 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vMrsFyx3mJ3d7E7imZc3LS | 王鑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藝（CBDB 272646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272646&o=json)

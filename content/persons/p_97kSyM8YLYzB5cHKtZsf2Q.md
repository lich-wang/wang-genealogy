---
schema: wang-person/v1
id: p_97kSyM8YLYzB5cHKtZsf2Q
status: active
merged_into: null
display_name: 王充
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ubXKawnA8zoFNa6nXPFLBu
        subject_person_id: p_97kSyM8YLYzB5cHKtZsf2Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王充
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VtXspDrw9x8TcN222rR5Fa
          claim_id: c_ubXKawnA8zoFNa6nXPFLBu
          source_id: s_AuBWZA8VrTP5KHHkmR5L2C
          stance: supports
          locator: CBDB:300165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300165）
          source: &a1
            id: s_AuBWZA8VrTP5KHHkmR5L2C
            source_type: api_record
            title: 中国历代人物传记资料库：王充（CBDB 300165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300165&o=json
            external_identifier: CBDB:300165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.613Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VL6NH4ggqppv98REFtVvDM
        subject_person_id: p_97kSyM8YLYzB5cHKtZsf2Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王充，明人物。嘉靖十七年進士，曾任提刑按察使司僉事、訓導。（中国历代人物传记资料库 CBDB 300165）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EZFRnVnaRGjNf9AlsURqWJ
          claim_id: c_VL6NH4ggqppv98REFtVvDM
          source_id: s_AuBWZA8VrTP5KHHkmR5L2C
          stance: supports
          locator: CBDB:300165
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
        id: c_dyV3qm9NWYvrh2gi75y40I
        subject_person_id: p_97kSyM8YLYzB5cHKtZsf2Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_20xi0Ufr0UM92HC1nf6n6f
          claim_id: c_dyV3qm9NWYvrh2gi75y40I
          source_id: s_AuBWZA8VrTP5KHHkmR5L2C
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fYsU7A3SFMfzEtkjj2jnfk
        status: active
        display_name: 王之臣
        merged_into_person_id: null
  other: []
---

# 王充

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王充 | accepted |
| bio.summary | 王充，明人物。嘉靖十七年進士，曾任提刑按察使司僉事、訓導。（中国历代人物传记资料库 CBDB 300165） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fYsU7A3SFMfzEtkjj2jnfk | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王充（CBDB 300165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300165&o=json)

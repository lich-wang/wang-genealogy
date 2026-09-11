---
schema: wang-person/v1
id: p_SNoxRDc6ZXuEctRukJJ8LQ
status: active
merged_into: null
display_name: 王昇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NTwn7hzdwEpCwvFsE1m2Ty
        subject_person_id: p_SNoxRDc6ZXuEctRukJJ8LQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gehkWYxwwELPwEU6cLAtXE
          claim_id: c_NTwn7hzdwEpCwvFsE1m2Ty
          source_id: s_fQgSpfVKC1KyjkE86uSGqe
          stance: supports
          locator: CBDB:272647
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272647）
          source: &a1
            id: s_fQgSpfVKC1KyjkE86uSGqe
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 272647）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272647&o=json
            external_identifier: CBDB:272647
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DfD8Me6Lpim7NFxA5s7HzZ
        subject_person_id: p_SNoxRDc6ZXuEctRukJJ8LQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇，明人物。弘治十五年進士，曾任戶部郎中。（中国历代人物传记资料库 CBDB 272647）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hrqkpd3oIYPdHrUt-8qHCN
          claim_id: c_DfD8Me6Lpim7NFxA5s7HzZ
          source_id: s_fQgSpfVKC1KyjkE86uSGqe
          stance: supports
          locator: CBDB:272647
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
        id: c_FNoDMO4IEbFjA9ZXRCQPiW
        subject_person_id: p_SNoxRDc6ZXuEctRukJJ8LQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vMrsFyx3mJ3d7E7imZc3LS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IeZ-UWtlbIjArCQckfEwFX
          claim_id: c_FNoDMO4IEbFjA9ZXRCQPiW
          source_id: s_fQgSpfVKC1KyjkE86uSGqe
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第一百九十五名：孫
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

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | 王昇，明人物。弘治十五年進士，曾任戶部郎中。（中国历代人物传记资料库 CBDB 272647） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vMrsFyx3mJ3d7E7imZc3LS | 王鑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 272647）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272647&o=json)

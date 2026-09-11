---
schema: wang-person/v1
id: p_KExZhSo8TNJTdvvuCwYoPs
status: active
merged_into: null
display_name: 王璉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_czXyw3TgPfGqayPgs4HsSi
        subject_person_id: p_KExZhSo8TNJTdvvuCwYoPs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EWi3iyG7C2PBmu6gREzzDH
          claim_id: c_czXyw3TgPfGqayPgs4HsSi
          source_id: s_Q15xrKc5DsMx67eqzNVzJx
          stance: supports
          locator: CBDB:557809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557809）
          source: &a1
            id: s_Q15xrKc5DsMx67eqzNVzJx
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 557809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557809&o=json
            external_identifier: CBDB:557809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qHE7oZLLXuHgToCgCo9B9y
        subject_person_id: p_KExZhSo8TNJTdvvuCwYoPs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vpn6ZnowD5mk1q352748Uz
          claim_id: c_qHE7oZLLXuHgToCgCo9B9y
          source_id: s_Q15xrKc5DsMx67eqzNVzJx
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
  spouses:
    - claim:
        id: c_yU4ejzmfeWiu6QesgKLDrC
        subject_person_id: p_KExZhSo8TNJTdvvuCwYoPs
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_m6agcxQevENA9kfWL5nuZ5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TIjdl6vSz2nHwfHJMLOQe5
          claim_id: c_yU4ejzmfeWiu6QesgKLDrC
          source_id: s_kT92fxM_p7oVtNdrfVz-P3
          stance: supports
          locator: 南陽府志，lgid=878793：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kT92fxM_p7oVtNdrfVz-P3
            source_type: api_record
            title: 中国历代人物传记资料库：王氏(王璉妻)（CBDB 557810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557810&o=json
            external_identifier: CBDB:557810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_m6agcxQevENA9kfWL5nuZ5
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_m6agcxQevENA9kfWL5nuZ5 | 王氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 557809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557809&o=json)
- [中国历代人物传记资料库：王氏(王璉妻)（CBDB 557810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557810&o=json)

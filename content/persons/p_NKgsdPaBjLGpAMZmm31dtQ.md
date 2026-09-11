---
schema: wang-person/v1
id: p_NKgsdPaBjLGpAMZmm31dtQ
status: active
merged_into: null
display_name: 王騊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ptqbyKQWpCMsv3CN95cq5Q
        subject_person_id: p_NKgsdPaBjLGpAMZmm31dtQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_21KNFQrNPBXWybhVuvFzf3
          claim_id: c_ptqbyKQWpCMsv3CN95cq5Q
          source_id: s_mYkTAw16UzFagwYmCkGRPH
          stance: supports
          locator: CBDB:513482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（513482）
          source: &a1
            id: s_mYkTAw16UzFagwYmCkGRPH
            source_type: api_record
            title: 中国历代人物传记资料库：王騊（CBDB 513482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513482&o=json
            external_identifier: CBDB:513482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xn9s7DLLHcKmpTQ6h7BWiD
        subject_person_id: p_NKgsdPaBjLGpAMZmm31dtQ
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
        - id: cs_ehccxkrGzUXVo4UQNqa8vK
          claim_id: c_Xn9s7DLLHcKmpTQ6h7BWiD
          source_id: s_mYkTAw16UzFagwYmCkGRPH
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
  ancestors:
    - claim:
        id: c_Y90IcH3mBEwf2_vA5vu-Fq
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NKgsdPaBjLGpAMZmm31dtQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oHSBShGLILaa0aRydcegl8
          claim_id: c_Y90IcH3mBEwf2_vA5vu-Fq
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HCahiMsh5E8CcBDkdkb7uC
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 56849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56849&o=json
            external_identifier: CBDB:56849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6sBCzo4EktCjTb4NiwWGko
        status: active
        display_name: 王傑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王騊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騊 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6sBCzo4EktCjTb4NiwWGko | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 56849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56849&o=json)
- [中国历代人物传记资料库：王騊（CBDB 513482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513482&o=json)

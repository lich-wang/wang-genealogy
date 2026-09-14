---
schema: wang-person/v1
id: p_PpuMiMEEk8C33Mk9DLKgxC
status: active
merged_into: null
display_name: 王顥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_57SKrByo7F382DFxnhsfNs
        subject_person_id: p_PpuMiMEEk8C33Mk9DLKgxC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vjWLfHhafP3f4Meh3AExxA
          claim_id: c_57SKrByo7F382DFxnhsfNs
          source_id: s_benPWxWtDv3DpaRHLH9m7y
          stance: supports
          locator: CBDB:336763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336763）
          source: &a1
            id: s_benPWxWtDv3DpaRHLH9m7y
            source_type: api_record
            title: 中国历代人物传记资料库：王顥（CBDB 336763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336763&o=json
            external_identifier: CBDB:336763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eBLRvcW1j2u55tyKAuNwF9
        subject_person_id: p_PpuMiMEEk8C33Mk9DLKgxC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顥，明人物。隆慶二年進士，籍贯潛山，曾任都指揮僉事。（中国历代人物传记资料库 CBDB 336763）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mA8bfg0tnjOS9o8wteBt6S
          claim_id: c_eBLRvcW1j2u55tyKAuNwF9
          source_id: s_benPWxWtDv3DpaRHLH9m7y
          stance: supports
          locator: CBDB:336763
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EnGGNwBfB9pZWJT6pwif8t
        subject_person_id: p_ynQe45xhMHwcsbW4fYyuNe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PpuMiMEEk8C33Mk9DLKgxC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZXkZnG3f0QdETFvpdiDW69
          claim_id: c_EnGGNwBfB9pZWJT6pwif8t
          source_id: s__69DmLjRtCSrPG27ZbM1qU
          stance: supports
          locator: CBDB：兄弟 王頤（205673）之父／母 王命
          quotation: null
          interpretation_note: 由兄弟关系推断：王顥 与 王頤 为同胞（CBDB 记「弟」），王頤 之父／母即 王顥 之父／母。
          source:
            id: s__69DmLjRtCSrPG27ZbM1qU
            source_type: api_record
            title: 中国历代人物传记资料库：王顥（CBDB 336763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336763&o=json
            external_identifier: CBDB:336763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ynQe45xhMHwcsbW4fYyuNe
        status: active
        display_name: 王命
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Rk8i9qUnhVacBbCYuJI_vd
        subject_person_id: p_PkVHbp7ooYr1QRfwUsQL7L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PpuMiMEEk8C33Mk9DLKgxC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_li7iTK0jzmekoAxaLFL3Bj
          claim_id: c_Rk8i9qUnhVacBbCYuJI_vd
          source_id: s__69DmLjRtCSrPG27ZbM1qU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205673 王頤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__69DmLjRtCSrPG27ZbM1qU
            source_type: api_record
            title: 中国历代人物传记资料库：王顥（CBDB 336763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336763&o=json
            external_identifier: CBDB:336763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PkVHbp7ooYr1QRfwUsQL7L
        status: active
        display_name: 王頤
        merged_into_person_id: null
---

# 王顥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顥 | accepted |
| bio.summary | 王顥，明人物。隆慶二年進士，籍贯潛山，曾任都指揮僉事。（中国历代人物传记资料库 CBDB 336763） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ynQe45xhMHwcsbW4fYyuNe | 王命 | accepted |
| other | p_PkVHbp7ooYr1QRfwUsQL7L | 王頤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王顥（CBDB 336763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336763&o=json)

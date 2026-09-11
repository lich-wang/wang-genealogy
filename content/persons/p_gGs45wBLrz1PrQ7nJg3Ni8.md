---
schema: wang-person/v1
id: p_gGs45wBLrz1PrQ7nJg3Ni8
status: active
merged_into: null
display_name: 王璋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qm1qyJKgeMQB8shD7HAn8a
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GxrDEZGDE2Tgzg1DRka467
          claim_id: c_Qm1qyJKgeMQB8shD7HAn8a
          source_id: s_FBKhA7M3A4jwqAZB2SSZVx
          stance: supports
          locator: CBDB:290151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290151）
          source: &a1
            id: s_FBKhA7M3A4jwqAZB2SSZVx
            source_type: api_record
            title: 中国历代人物传记资料库：王璋（CBDB 290151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290151&o=json
            external_identifier: CBDB:290151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kMnJCHo94NYGb7Pd44UE88
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璋，明人物。嘉靖八年進士，籍贯灤州，曾任縣丞。（中国历代人物传记资料库 CBDB 290151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KiHz3BVgRXR30R2e-PDBNf
          claim_id: c_kMnJCHo94NYGb7Pd44UE88
          source_id: s_FBKhA7M3A4jwqAZB2SSZVx
          stance: supports
          locator: CBDB:290151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fNrU73mImhYyMxqxoO9bBd
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Kl4Ky_cPKQXecj3YfJY1U
          claim_id: c_fNrU73mImhYyMxqxoO9bBd
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zQhfYZPNcGJvYKAzCCCRiq
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 126866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126866&o=json
            external_identifier: CBDB:126866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8fLyT7ZEVM5q6B59fHgKMb
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璋 | accepted |
| bio.summary | 王璋，明人物。嘉靖八年進士，籍贯灤州，曾任縣丞。（中国历代人物传记资料库 CBDB 290151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8fLyT7ZEVM5q6B59fHgKMb | 王鎬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 126866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126866&o=json)
- [中国历代人物传记资料库：王璋（CBDB 290151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290151&o=json)

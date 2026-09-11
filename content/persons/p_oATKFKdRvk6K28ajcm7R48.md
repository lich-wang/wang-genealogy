---
schema: wang-person/v1
id: p_oATKFKdRvk6K28ajcm7R48
status: active
merged_into: null
display_name: 王惟德
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TLSc9nQvFCWYZ8SbMM76ZU
        subject_person_id: p_oATKFKdRvk6K28ajcm7R48
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HAojkUbL1sTUdVeTUERs8x
          claim_id: c_TLSc9nQvFCWYZ8SbMM76ZU
          source_id: s_iNxykTShcu6BtovxLF8rS5
          stance: supports
          locator: CBDB:276665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276665）
          source: &a1
            id: s_iNxykTShcu6BtovxLF8rS5
            source_type: api_record
            title: 中国历代人物传记资料库：王惟德（CBDB 276665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276665&o=json
            external_identifier: CBDB:276665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hHHmbx5h8hsZ6G6Qr4Tp5b
        subject_person_id: p_oATKFKdRvk6K28ajcm7R48
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟德，明人物。正德六年進士，籍贯句容，曾任教諭。（中国历代人物传记资料库 CBDB 276665）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4jzAf1dhj_Te3BW_EFoqAH
          claim_id: c_hHHmbx5h8hsZ6G6Qr4Tp5b
          source_id: s_iNxykTShcu6BtovxLF8rS5
          stance: supports
          locator: CBDB:276665
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_sLlTc5Cad6JziQDa8JTJug
        subject_person_id: p_oATKFKdRvk6K28ajcm7R48
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oEEcQRCAqs4YewibUGGkH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__zOlaItlbRK17m5_nIN5T5
          claim_id: c_sLlTc5Cad6JziQDa8JTJug
          source_id: s_iNxykTShcu6BtovxLF8rS5
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oEEcQRCAqs4YewibUGGkH9
        status: active
        display_name: 王介
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟德 | accepted |
| bio.summary | 王惟德，明人物。正德六年進士，籍贯句容，曾任教諭。（中国历代人物传记资料库 CBDB 276665） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oEEcQRCAqs4YewibUGGkH9 | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟德（CBDB 276665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276665&o=json)

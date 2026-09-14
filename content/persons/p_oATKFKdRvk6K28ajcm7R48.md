---
schema: wang-person/v1
id: p_oATKFKdRvk6K28ajcm7R48
status: active
merged_into: null
display_name: 王惟德
revision: 5
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
    - claim:
        id: c_PviRBwegqqT8_X3TTvplLU
        subject_person_id: p_oATKFKdRvk6K28ajcm7R48
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SLGgjBhQt68wxs3DaxrpDc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AhrB1U2-z7k3KTUXj2nXW3
          claim_id: c_PviRBwegqqT8_X3TTvplLU
          source_id: s_HdSs2ECnlMuRyIXowpy-GJ
          stance: supports
          locator: CBDB：兄弟 王介（201700）之父／母 王惟德
          quotation: null
          interpretation_note: 由兄弟关系推断：王輔 与 王介 为同胞（CBDB 记「弟」），王介 之父／母即 王輔 之父／母。
          source:
            id: s_HdSs2ECnlMuRyIXowpy-GJ
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 276669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276669&o=json
            external_identifier: CBDB:276669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SLGgjBhQt68wxs3DaxrpDc
        status: active
        display_name: 王輔
        merged_into_person_id: null
    - claim:
        id: c_cILxVDu3cFVwKzRAkMgWa-
        subject_person_id: p_oATKFKdRvk6K28ajcm7R48
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UhoPXcrxFcCNcL2nANg7DU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fu6BhvGbwaRrhoJEFwJyDt
          claim_id: c_cILxVDu3cFVwKzRAkMgWa-
          source_id: s_SnDcX5WY4Sw2sgVWFChRd0
          stance: supports
          locator: CBDB：兄弟 王介（201700）之父／母 王惟德
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王介 为同胞（CBDB 记「弟」），王介 之父／母即 王佐 之父／母。
          source:
            id: s_SnDcX5WY4Sw2sgVWFChRd0
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 276670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276670&o=json
            external_identifier: CBDB:276670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UhoPXcrxFcCNcL2nANg7DU
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_Qrmw5YpYbbKOpLoOS25aBb
        subject_person_id: p_oATKFKdRvk6K28ajcm7R48
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZWY8xZMkJzdZTRMT8Yjmes
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oeXtKGOhP_FJixqITJw4zC
          claim_id: c_Qrmw5YpYbbKOpLoOS25aBb
          source_id: s_fwR__8b1DZ8yXL5ah-m8XL
          stance: supports
          locator: CBDB：兄弟 王介（201700）之父／母 王惟德
          quotation: null
          interpretation_note: 由兄弟关系推断：王儉 与 王介 为同胞（CBDB 记「弟」），王介 之父／母即 王儉 之父／母。
          source:
            id: s_fwR__8b1DZ8yXL5ah-m8XL
            source_type: api_record
            title: 中国历代人物传记资料库：王儉（CBDB 276671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276671&o=json
            external_identifier: CBDB:276671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZWY8xZMkJzdZTRMT8Yjmes
        status: active
        display_name: 王儉
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
| children | p_SLGgjBhQt68wxs3DaxrpDc | 王輔 | accepted |
| children | p_UhoPXcrxFcCNcL2nANg7DU | 王佐 | accepted |
| children | p_ZWY8xZMkJzdZTRMT8Yjmes | 王儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 276669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276669&o=json)
- [中国历代人物传记资料库：王儉（CBDB 276671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276671&o=json)
- [中国历代人物传记资料库：王惟德（CBDB 276665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276665&o=json)
- [中国历代人物传记资料库：王佐（CBDB 276670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276670&o=json)

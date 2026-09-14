---
schema: wang-person/v1
id: p_SLGgjBhQt68wxs3DaxrpDc
status: active
merged_into: null
display_name: 王輔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M5Qcc7ByyTdqp3e9ZUwA6H
        subject_person_id: p_SLGgjBhQt68wxs3DaxrpDc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FnKfNXpSq2HHDQcCouj1qK
          claim_id: c_M5Qcc7ByyTdqp3e9ZUwA6H
          source_id: s_5zxHi1JFj5fwCAR9mKhh8E
          stance: supports
          locator: CBDB:276669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276669）
          source: &a1
            id: s_5zxHi1JFj5fwCAR9mKhh8E
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 276669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276669&o=json
            external_identifier: CBDB:276669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b9XcPFP8pi9VeivHpLDCR4
        subject_person_id: p_SLGgjBhQt68wxs3DaxrpDc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔，明人物。正德六年進士，籍贯句容。（中国历代人物传记资料库 CBDB 276669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1W65GNLrLoE_ASN3zf--jz
          claim_id: c_b9XcPFP8pi9VeivHpLDCR4
          source_id: s_5zxHi1JFj5fwCAR9mKhh8E
          stance: supports
          locator: CBDB:276669
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_oATKFKdRvk6K28ajcm7R48
        status: active
        display_name: 王惟德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SLt77ZL__CUNjdETwEi69J
        subject_person_id: p_SLGgjBhQt68wxs3DaxrpDc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oEEcQRCAqs4YewibUGGkH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hfc0P63jCfMPz50OtyGxVN
          claim_id: c_SLt77ZL__CUNjdETwEi69J
          source_id: s_HdSs2ECnlMuRyIXowpy-GJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201700 王介）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_oEEcQRCAqs4YewibUGGkH9
        status: active
        display_name: 王介
        merged_into_person_id: null
---

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | 王輔，明人物。正德六年進士，籍贯句容。（中国历代人物传记资料库 CBDB 276669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oATKFKdRvk6K28ajcm7R48 | 王惟德 | accepted |
| other | p_oEEcQRCAqs4YewibUGGkH9 | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 276669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276669&o=json)

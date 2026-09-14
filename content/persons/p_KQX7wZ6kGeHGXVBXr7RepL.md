---
schema: wang-person/v1
id: p_KQX7wZ6kGeHGXVBXr7RepL
status: active
merged_into: null
display_name: 王國寧
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q2tScNHdFBgMabBCxM57Hf
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZZu6RmDw88JEsPyi4WAfjU
          claim_id: c_q2tScNHdFBgMabBCxM57Hf
          source_id: s_kUVE4BP4DZUmzxjQje8RBQ
          stance: supports
          locator: CBDB:288735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288735）
          source: &a1
            id: s_kUVE4BP4DZUmzxjQje8RBQ
            source_type: api_record
            title: 中国历代人物传记资料库：王國寧（CBDB 288735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288735&o=json
            external_identifier: CBDB:288735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FVBXmA5qJXzCCRssi6Mk53
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國寧，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288735）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Scq9UY40TezgVYYblpDzDI
          claim_id: c_FVBXmA5qJXzCCRssi6Mk53
          source_id: s_kUVE4BP4DZUmzxjQje8RBQ
          stance: supports
          locator: CBDB:288735
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Q_UgkJr40FJ9RwfCnsd2B8
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hs5dTewocAZFYmsQxmyBFY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivJrT3fzYVnkH-KGJXqz9l
          claim_id: c_Q_UgkJr40FJ9RwfCnsd2B8
          source_id: s_kUVE4BP4DZUmzxjQje8RBQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hs5dTewocAZFYmsQxmyBFY
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_ZDaSuHK9ftCwh7-DLbUQqg
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AdKipHPpgb7LqWLAgDN3XB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sii_KTwjAY2MukvT0KIggI
          claim_id: c_ZDaSuHK9ftCwh7-DLbUQqg
          source_id: s_54mkPpGjEfSovZ1V98TYAR
          stance: supports
          locator: CBDB：兄弟 王紳（202472）之父／母 王國寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王績 与 王紳 为同胞（CBDB 记「兄」），王紳 之父／母即 王績 之父／母。
          source:
            id: s_54mkPpGjEfSovZ1V98TYAR
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 288739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288739&o=json
            external_identifier: CBDB:288739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AdKipHPpgb7LqWLAgDN3XB
        status: active
        display_name: 王績
        merged_into_person_id: null
    - claim:
        id: c_z-KGkoOac60iP3ikHA9_kk
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_atfBE8SW3zcBDXScoRSUhL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b5Xip57YP-8xGp7HXlA9Tk
          claim_id: c_z-KGkoOac60iP3ikHA9_kk
          source_id: s_Tp7-DuHPcuSKYN1PN_1VYF
          stance: supports
          locator: CBDB：兄弟 王紳（202472）之父／母 王國寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王緒 与 王紳 为同胞（CBDB 记「兄」），王紳 之父／母即 王緒 之父／母。
          source:
            id: s_Tp7-DuHPcuSKYN1PN_1VYF
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 288742）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288742&o=json
            external_identifier: CBDB:288742
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_atfBE8SW3zcBDXScoRSUhL
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_Csm0bKyuGn01Wkj-NZRKDi
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eWBmW9UuYE2fe3KZ1jvovA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j0lIyh8JBj0CekkC7Zz1xe
          claim_id: c_Csm0bKyuGn01Wkj-NZRKDi
          source_id: s_rG2DRVGY5y8xWx_kVCHUFj
          stance: supports
          locator: CBDB：兄弟 王紳（202472）之父／母 王國寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王紌 与 王紳 为同胞（CBDB 记「兄」），王紳 之父／母即 王紌 之父／母。
          source:
            id: s_rG2DRVGY5y8xWx_kVCHUFj
            source_type: api_record
            title: 中国历代人物传记资料库：王紌（CBDB 288740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288740&o=json
            external_identifier: CBDB:288740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eWBmW9UuYE2fe3KZ1jvovA
        status: active
        display_name: 王紌
        merged_into_person_id: null
    - claim:
        id: c_qCYYVNRr7BzmQ1pzuIK9K4
        subject_person_id: p_KQX7wZ6kGeHGXVBXr7RepL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gX4GGz8AVWcWAUz4K38wbr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h-mW_T1ObE9qZvmG4s8QTi
          claim_id: c_qCYYVNRr7BzmQ1pzuIK9K4
          source_id: s_rsVm2qlzoTa_bm0YhbNMa6
          stance: supports
          locator: CBDB：兄弟 王紳（202472）之父／母 王國寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王縉 与 王紳 为同胞（CBDB 记「弟」），王紳 之父／母即 王縉 之父／母。
          source:
            id: s_rsVm2qlzoTa_bm0YhbNMa6
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 288738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288738&o=json
            external_identifier: CBDB:288738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gX4GGz8AVWcWAUz4K38wbr
        status: active
        display_name: 王縉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國寧 | accepted |
| bio.summary | 王國寧，明人物。嘉靖八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 288735） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Hs5dTewocAZFYmsQxmyBFY | 王紳 | accepted |
| children | p_AdKipHPpgb7LqWLAgDN3XB | 王績 | accepted |
| children | p_atfBE8SW3zcBDXScoRSUhL | 王緒 | accepted |
| children | p_eWBmW9UuYE2fe3KZ1jvovA | 王紌 | accepted |
| children | p_gX4GGz8AVWcWAUz4K38wbr | 王縉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國寧（CBDB 288735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288735&o=json)
- [中国历代人物传记资料库：王績（CBDB 288739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288739&o=json)
- [中国历代人物传记资料库：王縉（CBDB 288738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288738&o=json)
- [中国历代人物传记资料库：王紌（CBDB 288740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288740&o=json)
- [中国历代人物传记资料库：王緒（CBDB 288742）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288742&o=json)

---
schema: wang-person/v1
id: p_LR2VsjyEnVTGhLG3Px6n2u
status: active
merged_into: null
display_name: 王俊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H6PehsmVmWuVtH6y2P411i
        subject_person_id: p_LR2VsjyEnVTGhLG3Px6n2u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dhHjRutZeLUUGf9X7VZ9YH
          claim_id: c_H6PehsmVmWuVtH6y2P411i
          source_id: s_MgTLKfRDqnDNQrh6cQCv5S
          stance: supports
          locator: CBDB:326390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326390）
          source: &a1
            id: s_MgTLKfRDqnDNQrh6cQCv5S
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 326390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326390&o=json
            external_identifier: CBDB:326390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EF8HJutnj9rTFREgtwUceT
        subject_person_id: p_LR2VsjyEnVTGhLG3Px6n2u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326390）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DW0zp0pMoCno0eaDL9G0XA
          claim_id: c_EF8HJutnj9rTFREgtwUceT
          source_id: s_MgTLKfRDqnDNQrh6cQCv5S
          stance: supports
          locator: CBDB:326390
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fBEPKbPeqQAjROEL3NrVuT
        subject_person_id: p_mxcPanzqKKzAH8GE9Zk1aa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LR2VsjyEnVTGhLG3Px6n2u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSymwCMpNUUhPbED0AUK41
          claim_id: c_fBEPKbPeqQAjROEL3NrVuT
          source_id: s_-V9Njx-W9ibWD7AbGMTgim
          stance: supports
          locator: CBDB：兄弟 王宜（204956）之父／母 王絹
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王宜 为同胞（CBDB 记「兄」），王宜 之父／母即 王俊 之父／母。
          source:
            id: s_-V9Njx-W9ibWD7AbGMTgim
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 326390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326390&o=json
            external_identifier: CBDB:326390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mxcPanzqKKzAH8GE9Zk1aa
        status: active
        display_name: 王絹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GQ1F0cpqPJiTDKclc_LUq5
        subject_person_id: p_LR2VsjyEnVTGhLG3Px6n2u
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zRoaCHSKLmhLA6JAg13u3d
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6igNjPnKure-2Wr75P0Pil
          claim_id: c_GQ1F0cpqPJiTDKclc_LUq5
          source_id: s_-V9Njx-W9ibWD7AbGMTgim
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204956 王宜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-V9Njx-W9ibWD7AbGMTgim
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 326390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326390&o=json
            external_identifier: CBDB:326390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zRoaCHSKLmhLA6JAg13u3d
        status: active
        display_name: 王宜
        merged_into_person_id: null
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。嘉靖四十一年進士，籍贯莆田。（中国历代人物传记资料库 CBDB 326390） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mxcPanzqKKzAH8GE9Zk1aa | 王絹 | accepted |
| other | p_zRoaCHSKLmhLA6JAg13u3d | 王宜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 326390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326390&o=json)

---
schema: wang-person/v1
id: p_fBj1NXZUcbt3aVj9zDcMeY
status: active
merged_into: null
display_name: 王夢豸
cbdb_id: 224186
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ai38mt9ykGHk347BH1sp31
        subject_person_id: p_fBj1NXZUcbt3aVj9zDcMeY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢豸，明人物。萬曆十一年進士，籍贯掖縣。（中国历代人物传记资料库 CBDB 224186）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JMZEcQv2QC5Acf8_qZ5JNx
          claim_id: c_ai38mt9ykGHk347BH1sp31
          source_id: s_uKBaGnzHutMKEywQoaVE4t
          stance: supports
          locator: CBDB:224186
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uKBaGnzHutMKEywQoaVE4t
            source_type: api_record
            title: 中国历代人物传记资料库：王夢豸（CBDB 224186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224186&o=json
            external_identifier: CBDB:224186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hkoyFH3QMfxL7RXbR9otM7
        subject_person_id: p_fBj1NXZUcbt3aVj9zDcMeY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢豸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_edNmvQY8mQVwRmy6vXNS7B
          claim_id: c_hkoyFH3QMfxL7RXbR9otM7
          source_id: s_uKBaGnzHutMKEywQoaVE4t
          stance: supports
          locator: CBDB:224186
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UU17sGs-XRWKCh81fe0muD
        subject_person_id: p_tA8L9oJKVbRZ4sRbvb6FuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fBj1NXZUcbt3aVj9zDcMeY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cAF2GWprX-_YmrWxnh-PXQ
          claim_id: c_UU17sGs-XRWKCh81fe0muD
          source_id: s_fgUXLz_P_Q164o1XEDrYqj
          stance: supports
          locator: CBDB：兄弟 王夢鯉（206856）之父／母 王三重
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢豸 与 王夢鯉 为同胞（CBDB 记「兄」），王夢鯉 之父／母即 王夢豸 之父／母。
          source:
            id: s_fgUXLz_P_Q164o1XEDrYqj
            source_type: api_record
            title: 中国历代人物传记资料库：王夢豸（CBDB 224186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224186&o=json
            external_identifier: CBDB:224186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tA8L9oJKVbRZ4sRbvb6FuX
        status: active
        display_name: 王三重
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eHGHdf4VZuy5WyISh8RhSM
        subject_person_id: p_fBj1NXZUcbt3aVj9zDcMeY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_peUehXHPLMte3L7YPhiTwo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QSQuRHHZN9doCp9o1aHVnb
          claim_id: c_eHGHdf4VZuy5WyISh8RhSM
          source_id: s_fgUXLz_P_Q164o1XEDrYqj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206856 王夢鯉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fgUXLz_P_Q164o1XEDrYqj
            source_type: api_record
            title: 中国历代人物传记资料库：王夢豸（CBDB 224186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224186&o=json
            external_identifier: CBDB:224186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_peUehXHPLMte3L7YPhiTwo
        status: active
        display_name: 王夢鯉
        merged_into_person_id: null
---

# 王夢豸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢豸，明人物。萬曆十一年進士，籍贯掖縣。（中国历代人物传记资料库 CBDB 224186） | accepted |
| name.primary | 王夢豸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tA8L9oJKVbRZ4sRbvb6FuX | 王三重 | accepted |
| other | p_peUehXHPLMte3L7YPhiTwo | 王夢鯉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢豸（CBDB 224186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224186&o=json)

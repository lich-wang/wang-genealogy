---
schema: wang-person/v1
id: p_zNSEty4Yr3kQxQHfcZbC3c
status: active
merged_into: null
display_name: 王憲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y5qtY1L6TLZPe2Gj8RQF9H
        subject_person_id: p_zNSEty4Yr3kQxQHfcZbC3c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bH2n1gpvf4veTJU5xH8fY8
          claim_id: c_y5qtY1L6TLZPe2Gj8RQF9H
          source_id: s_mLNoiH7QDVNqUAVcTFPJyA
          stance: supports
          locator: CBDB:255759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255759）
          source: &a1
            id: s_mLNoiH7QDVNqUAVcTFPJyA
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 255759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255759&o=json
            external_identifier: CBDB:255759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jk3GDdNmsBuAjLKUG7fXsH
        subject_person_id: p_zNSEty4Yr3kQxQHfcZbC3c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲，明人物。成化十七年進士，籍贯容城。（中国历代人物传记资料库 CBDB 255759）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ay3RwGYEDrmfQD84sBlZlo
          claim_id: c_Jk3GDdNmsBuAjLKUG7fXsH
          source_id: s_mLNoiH7QDVNqUAVcTFPJyA
          stance: supports
          locator: CBDB:255759
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__etWAvKWUcVXHnn2IeTZEU
        subject_person_id: p_ZvcYSxF75Ub3o8A9bCQMfH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zNSEty4Yr3kQxQHfcZbC3c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Rr-iac0TOZVjn1d8ajyL3
          claim_id: c__etWAvKWUcVXHnn2IeTZEU
          source_id: s__eEAl7LzRJvfMgsF1xLr1l
          stance: supports
          locator: CBDB：兄弟 王寅（126668）之父／母 王志廣
          quotation: null
          interpretation_note: 由兄弟关系推断：王憲 与 王寅 为同胞（CBDB 记「兄」），王寅 之父／母即 王憲 之父／母。
          source:
            id: s__eEAl7LzRJvfMgsF1xLr1l
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 255759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255759&o=json
            external_identifier: CBDB:255759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZvcYSxF75Ub3o8A9bCQMfH
        status: active
        display_name: 王志廣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yla2a22ohTNPucYtchql6x
        subject_person_id: p_qcp613MEZvW9QYvDGgbu1f
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zNSEty4Yr3kQxQHfcZbC3c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vPbkNarbmOZpNjedxs6L_D
          claim_id: c_yla2a22ohTNPucYtchql6x
          source_id: s__eEAl7LzRJvfMgsF1xLr1l
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126668 王寅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__eEAl7LzRJvfMgsF1xLr1l
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 255759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255759&o=json
            external_identifier: CBDB:255759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qcp613MEZvW9QYvDGgbu1f
        status: active
        display_name: 王寅
        merged_into_person_id: null
---

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | 王憲，明人物。成化十七年進士，籍贯容城。（中国历代人物传记资料库 CBDB 255759） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZvcYSxF75Ub3o8A9bCQMfH | 王志廣 | accepted |
| other | p_qcp613MEZvW9QYvDGgbu1f | 王寅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 255759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255759&o=json)

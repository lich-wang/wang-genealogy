---
schema: wang-person/v1
id: p_PiGQRrZ25P7Jmsf8AnzTUr
status: active
merged_into: null
display_name: 王敬
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wFcgSoa1vNwp8jDoz5dmKL
        subject_person_id: p_PiGQRrZ25P7Jmsf8AnzTUr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xR8K22mMUP2XmgtghjyoqD
          claim_id: c_wFcgSoa1vNwp8jDoz5dmKL
          source_id: s_zCaK7Ajn8iTANBw3ydjYN4
          stance: supports
          locator: CBDB:259408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259408）
          source: &a1
            id: s_zCaK7Ajn8iTANBw3ydjYN4
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 259408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259408&o=json
            external_identifier: CBDB:259408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.460Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YmYSTMaVgzb3S6EXPNvzgg
        subject_person_id: p_PiGQRrZ25P7Jmsf8AnzTUr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬，明人物。成化二十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 259408）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rZcLydz3hp1mXyyNfRGdhD
          claim_id: c_YmYSTMaVgzb3S6EXPNvzgg
          source_id: s_zCaK7Ajn8iTANBw3ydjYN4
          stance: supports
          locator: CBDB:259408
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mDnYVrPQ_OLPikcOR4pjt2
        subject_person_id: p_PiGQRrZ25P7Jmsf8AnzTUr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uwC7U2dhe6Kyw5xBECanBE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j-XHueNzO9Y8ZsEXF0Cge8
          claim_id: c_mDnYVrPQ_OLPikcOR4pjt2
          source_id: s_zCaK7Ajn8iTANBw3ydjYN4
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第八十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uwC7U2dhe6Kyw5xBECanBE
        status: active
        display_name: 王珍
        merged_into_person_id: null
    - claim:
        id: c_zcd45lt5TLA3K0hPDBVK4V
        subject_person_id: p_PiGQRrZ25P7Jmsf8AnzTUr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VqN693NH9zQAVDLeqGpGqF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BfcS6IXW3WHatO5VYuljJ7
          claim_id: c_zcd45lt5TLA3K0hPDBVK4V
          source_id: s_dKTRRzZGmE0azJSvbivBF_
          stance: supports
          locator: CBDB：兄弟 王珍（200536）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王璟 与 王珍 为同胞（CBDB 记「兄」），王珍 之父／母即 王璟 之父／母。
          source:
            id: s_dKTRRzZGmE0azJSvbivBF_
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 259411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259411&o=json
            external_identifier: CBDB:259411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VqN693NH9zQAVDLeqGpGqF
        status: active
        display_name: 王璟
        merged_into_person_id: null
    - claim:
        id: c_I80yxJKL6X67rMQzrHduXg
        subject_person_id: p_PiGQRrZ25P7Jmsf8AnzTUr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eude2emeX1HsE9ua25BiMB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wHT6jeYVJWHz-Lpdcv65_I
          claim_id: c_I80yxJKL6X67rMQzrHduXg
          source_id: s_QiGTYsW0LEtoHfM2I0GDgL
          stance: supports
          locator: CBDB：兄弟 王珍（200536）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王珊 与 王珍 为同胞（CBDB 记「兄」），王珍 之父／母即 王珊 之父／母。
          source:
            id: s_QiGTYsW0LEtoHfM2I0GDgL
            source_type: api_record
            title: 中国历代人物传记资料库：王珊（CBDB 259415）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259415&o=json
            external_identifier: CBDB:259415
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eude2emeX1HsE9ua25BiMB
        status: active
        display_name: 王珊
        merged_into_person_id: null
    - claim:
        id: c_rrBFSJvVynOA1RSbV5SXLv
        subject_person_id: p_PiGQRrZ25P7Jmsf8AnzTUr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v2HjdkPB9W4ikhcb7EBB9Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0ETuxk_1ve1XtNcEs-XScK
          claim_id: c_rrBFSJvVynOA1RSbV5SXLv
          source_id: s_fYFDoGFwpbvHIRjnHgaL2I
          stance: supports
          locator: CBDB：兄弟 王珍（200536）之父／母 王敬
          quotation: null
          interpretation_note: 由兄弟关系推断：王琦 与 王珍 为同胞（CBDB 记「兄」），王珍 之父／母即 王琦 之父／母。
          source:
            id: s_fYFDoGFwpbvHIRjnHgaL2I
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 259414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259414&o=json
            external_identifier: CBDB:259414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v2HjdkPB9W4ikhcb7EBB9Z
        status: active
        display_name: 王琦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | 王敬，明人物。成化二十三年進士，籍贯和州。（中国历代人物传记资料库 CBDB 259408） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uwC7U2dhe6Kyw5xBECanBE | 王珍 | accepted |
| children | p_VqN693NH9zQAVDLeqGpGqF | 王璟 | accepted |
| children | p_eude2emeX1HsE9ua25BiMB | 王珊 | accepted |
| children | p_v2HjdkPB9W4ikhcb7EBB9Z | 王琦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 259411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259411&o=json)
- [中国历代人物传记资料库：王敬（CBDB 259408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259408&o=json)
- [中国历代人物传记资料库：王琦（CBDB 259414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259414&o=json)
- [中国历代人物传记资料库：王珊（CBDB 259415）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259415&o=json)

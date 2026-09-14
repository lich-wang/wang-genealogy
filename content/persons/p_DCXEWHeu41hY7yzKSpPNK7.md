---
schema: wang-person/v1
id: p_DCXEWHeu41hY7yzKSpPNK7
status: active
merged_into: null
display_name: 王斛
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHCCMSCCAAJ6knZpV5hdZW
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ASPQaBTNH3sgw2yhWmAxjk
          claim_id: c_AHCCMSCCAAJ6knZpV5hdZW
          source_id: s_rLLqfnFEVDpd1if1VyZPQa
          stance: supports
          locator: CBDB:203566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203566）
          source: &a1
            id: s_rLLqfnFEVDpd1if1VyZPQa
            source_type: api_record
            title: 中国历代人物传记资料库：王斛（CBDB 203566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203566&o=json
            external_identifier: CBDB:203566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VMTJsSVhiSHcJxNRfVoAT3
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BKbx4Ckq2ToRzJz4emsdnx
          claim_id: c_VMTJsSVhiSHcJxNRfVoAT3
          source_id: s_rLLqfnFEVDpd1if1VyZPQa
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y3mAd7j47WFXKAW9sLPFxT
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斛（生于1525年），明人物。明清進士進士，籍贯漢陽，入仕進士。（中国历代人物传记资料库 CBDB 203566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hPG8JaTnPgdFqZmNlh_rie
          claim_id: c_y3mAd7j47WFXKAW9sLPFxT
          source_id: s_rLLqfnFEVDpd1if1VyZPQa
          stance: supports
          locator: CBDB:203566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nxNKRXO0rajjSqpnu8g8MW
        subject_person_id: p_asR7CUjP1iXKvRkyGBMSJF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZV5vF_RR_YV8JSmHFdc3Vv
          claim_id: c_nxNKRXO0rajjSqpnu8g8MW
          source_id: s_jQ1xVhGJBYhR3uYYGyKa7V
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jQ1xVhGJBYhR3uYYGyKa7V
            source_type: api_record
            title: 中国历代人物传记资料库：王教（CBDB 306622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306622&o=json
            external_identifier: CBDB:306622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_asR7CUjP1iXKvRkyGBMSJF
        status: active
        display_name: 王教
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XHCq0fm8phZWYjy9DEgDjZ
        subject_person_id: p_GiRXJTzMrTmS7SYHZYijNT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8obtELdjAdexT1bQaxQTKz
          claim_id: c_XHCq0fm8phZWYjy9DEgDjZ
          source_id: s_CCKSPDYdztby8shHXQYH1H
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CCKSPDYdztby8shHXQYH1H
            source_type: api_record
            title: 中国历代人物传记资料库：王繼宗（CBDB 306620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306620&o=json
            external_identifier: CBDB:306620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GiRXJTzMrTmS7SYHZYijNT
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
    - claim:
        id: c_t14wa3IFGsDRnEX49K5t0D
        subject_person_id: p_LLXLf3xsw1XcJX2YDi1mfd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NTFGPF0XDtZYNKUK-8JPjM
          claim_id: c_t14wa3IFGsDRnEX49K5t0D
          source_id: s_Mn7XUeMZr7ZigP6kMPMQnr
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mn7XUeMZr7ZigP6kMPMQnr
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 306621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306621&o=json
            external_identifier: CBDB:306621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LLXLf3xsw1XcJX2YDi1mfd
        status: active
        display_name: 王清
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_SJ4sjq_crcFRfOmzZMBwrT
        subject_person_id: p_55H14yQgzo8QVs4BBQ28Nh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lBtQ14DKKWHGCGKJnDWJVz
          claim_id: c_SJ4sjq_crcFRfOmzZMBwrT
          source_id: s_VlvXqS6svoXHt2UWEsBP0N
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203566 王斛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VlvXqS6svoXHt2UWEsBP0N
            source_type: api_record
            title: 中国历代人物传记资料库：王角（CBDB 306626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306626&o=json
            external_identifier: CBDB:306626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_55H14yQgzo8QVs4BBQ28Nh
        status: active
        display_name: 王角
        merged_into_person_id: null
    - claim:
        id: c_8jNekjfwRrxzS6JnRfOQfd
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MCyPiC4v1HM42jQDhCTDUR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qi_Zl5sTk7wF0elZYX9w9x
          claim_id: c_8jNekjfwRrxzS6JnRfOQfd
          source_id: s_XbEaK5kUduyIQjdEJ-Rgol
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203566 王斛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XbEaK5kUduyIQjdEJ-Rgol
            source_type: api_record
            title: 中国历代人物传记资料库：王觶（CBDB 306627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306627&o=json
            external_identifier: CBDB:306627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MCyPiC4v1HM42jQDhCTDUR
        status: active
        display_name: 王觶
        merged_into_person_id: null
    - claim:
        id: c_eBU_8hh--q5R4ZE_bZsb9E
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dUX8BJh6C6SQnpC9k2EM6v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BPS7kPoGzcltbp4dtTWED4
          claim_id: c_eBU_8hh--q5R4ZE_bZsb9E
          source_id: s_XmjGrQkJkwjkx0aONkB7Ou
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203566 王斛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XmjGrQkJkwjkx0aONkB7Ou
            source_type: api_record
            title: 中国历代人物传记资料库：王觥（CBDB 306630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306630&o=json
            external_identifier: CBDB:306630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dUX8BJh6C6SQnpC9k2EM6v
        status: active
        display_name: 王觥
        merged_into_person_id: null
    - claim:
        id: c_yea0ImBXnkUy2AKw5P8uHR
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_itqEG3DxWGUJwtsgtMEKSc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_72AZyvAN4Qy4BTisVT0mlS
          claim_id: c_yea0ImBXnkUy2AKw5P8uHR
          source_id: s_s2vSI10UR3JXAnNVLq0IIS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203566 王斛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s2vSI10UR3JXAnNVLq0IIS
            source_type: api_record
            title: 中国历代人物传记资料库：王觪（CBDB 306629）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306629&o=json
            external_identifier: CBDB:306629
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_itqEG3DxWGUJwtsgtMEKSc
        status: active
        display_name: 王觪
        merged_into_person_id: null
---

# 王斛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斛 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | 王斛（生于1525年），明人物。明清進士進士，籍贯漢陽，入仕進士。（中国历代人物传记资料库 CBDB 203566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_asR7CUjP1iXKvRkyGBMSJF | 王教 | accepted |
| ancestors | p_GiRXJTzMrTmS7SYHZYijNT | 王繼宗 | accepted |
| ancestors | p_LLXLf3xsw1XcJX2YDi1mfd | 王清 | accepted |
| other | p_55H14yQgzo8QVs4BBQ28Nh | 王角 | accepted |
| other | p_MCyPiC4v1HM42jQDhCTDUR | 王觶 | accepted |
| other | p_dUX8BJh6C6SQnpC9k2EM6v | 王觥 | accepted |
| other | p_itqEG3DxWGUJwtsgtMEKSc | 王觪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觥（CBDB 306630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306630&o=json)
- [中国历代人物传记资料库：王斛（CBDB 203566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203566&o=json)
- [中国历代人物传记资料库：王繼宗（CBDB 306620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306620&o=json)
- [中国历代人物传记资料库：王角（CBDB 306626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306626&o=json)
- [中国历代人物传记资料库：王教（CBDB 306622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306622&o=json)
- [中国历代人物传记资料库：王清（CBDB 306621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306621&o=json)
- [中国历代人物传记资料库：王觪（CBDB 306629）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306629&o=json)
- [中国历代人物传记资料库：王觶（CBDB 306627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306627&o=json)

---
schema: wang-person/v1
id: p_PWaCFJXXBRP2vf5HKKSrKh
status: active
merged_into: null
display_name: 王夢魚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NumM6F4Nb1ArsokSAQJoo3
        subject_person_id: p_PWaCFJXXBRP2vf5HKKSrKh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢魚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hTV3h75i4qB2U7gT1Y6xBV
          claim_id: c_NumM6F4Nb1ArsokSAQJoo3
          source_id: s_JNcdmb4AMt2kLc8qaB42Ve
          stance: supports
          locator: CBDB:309664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309664）
          source: &a1
            id: s_JNcdmb4AMt2kLc8qaB42Ve
            source_type: api_record
            title: 中国历代人物传记资料库：王夢魚（CBDB 309664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json
            external_identifier: CBDB:309664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7sVRRwhN1d43ZCBrH9eD2W
        subject_person_id: p_PWaCFJXXBRP2vf5HKKSrKh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢魚，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309664）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__7H9xWiSWanLqz_8YssGh-
          claim_id: c_7sVRRwhN1d43ZCBrH9eD2W
          source_id: s_JNcdmb4AMt2kLc8qaB42Ve
          stance: supports
          locator: CBDB:309664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6YXl-OOOEdbwf1PB5dr1yG
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PWaCFJXXBRP2vf5HKKSrKh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gch76CK_zCrFmAwbpOqXA_
          claim_id: c_6YXl-OOOEdbwf1PB5dr1yG
          source_id: s_mHFx-NtyCtBbaTeyevix_1
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢魚 与 王樵 为同胞（CBDB 记「兄」），王樵 之父／母即 王夢魚 之父／母。
          source:
            id: s_mHFx-NtyCtBbaTeyevix_1
            source_type: api_record
            title: 中国历代人物传记资料库：王夢魚（CBDB 309664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json
            external_identifier: CBDB:309664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yMGungtYmcfvvxOKb1RwOa
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PWaCFJXXBRP2vf5HKKSrKh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YdHUwqpUu_TbQ50WmUuI4r
          claim_id: c_yMGungtYmcfvvxOKb1RwOa
          source_id: s_mHFx-NtyCtBbaTeyevix_1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mHFx-NtyCtBbaTeyevix_1
            source_type: api_record
            title: 中国历代人物传记资料库：王夢魚（CBDB 309664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json
            external_identifier: CBDB:309664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_923xZ5qSMZFGgS46h7nLWU
        status: active
        display_name: 王樵
        merged_into_person_id: null
---

# 王夢魚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢魚 | accepted |
| bio.summary | 王夢魚，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |
| other | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王夢魚（CBDB 309664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json)

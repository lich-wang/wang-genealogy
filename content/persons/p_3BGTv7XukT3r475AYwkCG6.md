---
schema: wang-person/v1
id: p_3BGTv7XukT3r475AYwkCG6
status: active
merged_into: null
display_name: 王永貞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pEeL2aTe6ZQhHKNAQ9xCJj
        subject_person_id: p_3BGTv7XukT3r475AYwkCG6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tudz9EW1xEEHstg4gXLch9
          claim_id: c_pEeL2aTe6ZQhHKNAQ9xCJj
          source_id: s_4TGQZMRWJ8NJs4FF7xzmvd
          stance: supports
          locator: CBDB:221619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221619）
          source: &a1
            id: s_4TGQZMRWJ8NJs4FF7xzmvd
            source_type: api_record
            title: 中国历代人物传记资料库：王永貞（CBDB 221619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221619&o=json
            external_identifier: CBDB:221619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DVXpV4WSbmiq8gmbWKr4ir
        subject_person_id: p_3BGTv7XukT3r475AYwkCG6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永貞，明人物。萬曆八年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 221619）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_coRCVp3uJjBifcPEIug1Kj
          claim_id: c_DVXpV4WSbmiq8gmbWKr4ir
          source_id: s_4TGQZMRWJ8NJs4FF7xzmvd
          stance: supports
          locator: CBDB:221619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WNbWwOg7mYOOHqpdRZEEC5
        subject_person_id: p_Syn7L23qcdCnWJH3gNVxhk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3BGTv7XukT3r475AYwkCG6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTYzKpktAkeyivw2HVZUtd
          claim_id: c_WNbWwOg7mYOOHqpdRZEEC5
          source_id: s_jc9a7bB4n9iPMw6FMoEygu
          stance: supports
          locator: CBDB：兄弟 王永寧（206689）之父／母 王國柱
          quotation: null
          interpretation_note: 由兄弟关系推断：王永貞 与 王永寧 为同胞（CBDB 记「兄」），王永寧 之父／母即 王永貞 之父／母。
          source:
            id: s_jc9a7bB4n9iPMw6FMoEygu
            source_type: api_record
            title: 中国历代人物传记资料库：王永貞（CBDB 221619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221619&o=json
            external_identifier: CBDB:221619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Syn7L23qcdCnWJH3gNVxhk
        status: active
        display_name: 王國柱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tr_mOUK0oR7etbi_mkPObR
        subject_person_id: p_3BGTv7XukT3r475AYwkCG6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Vu5wPFU9etB1mZyT3n6avf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_siICc1MNrx6Cs6SL7lxdCp
          claim_id: c_tr_mOUK0oR7etbi_mkPObR
          source_id: s_jc9a7bB4n9iPMw6FMoEygu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206689 王永寧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jc9a7bB4n9iPMw6FMoEygu
            source_type: api_record
            title: 中国历代人物传记资料库：王永貞（CBDB 221619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221619&o=json
            external_identifier: CBDB:221619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Vu5wPFU9etB1mZyT3n6avf
        status: active
        display_name: 王永寧
        merged_into_person_id: null
---

# 王永貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永貞 | accepted |
| bio.summary | 王永貞，明人物。萬曆八年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 221619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Syn7L23qcdCnWJH3gNVxhk | 王國柱 | accepted |
| other | p_Vu5wPFU9etB1mZyT3n6avf | 王永寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永貞（CBDB 221619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221619&o=json)

---
schema: wang-person/v1
id: p_LBNLcSyeGkhZ18tJMVzLgu
status: active
merged_into: null
display_name: 王三省
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vkp5Vk49P8Kx72JQzg2gJW
        subject_person_id: p_LBNLcSyeGkhZ18tJMVzLgu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三省
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3nuNY89tLHUyV3983HbRpW
          claim_id: c_vkp5Vk49P8Kx72JQzg2gJW
          source_id: s_oKY3g3gAh83n3Etj8eHYB5
          stance: supports
          locator: CBDB:311398
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311398）
          source: &a1
            id: s_oKY3g3gAh83n3Etj8eHYB5
            source_type: api_record
            title: 中国历代人物传记资料库：王三省（CBDB 311398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311398&o=json
            external_identifier: CBDB:311398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U9mBjtTA8Ge6jqfRxGg8Sc
        subject_person_id: p_LBNLcSyeGkhZ18tJMVzLgu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三省，明人物。嘉靖二十六年進士，籍贯洪洞。（中国历代人物传记资料库 CBDB 311398）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M5PDFit2ijtBjs9tXyYSgM
          claim_id: c_U9mBjtTA8Ge6jqfRxGg8Sc
          source_id: s_oKY3g3gAh83n3Etj8eHYB5
          stance: supports
          locator: CBDB:311398
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tw1S5PjuHY4gTryyrOqhYo
        subject_person_id: p_qsqNNxC6SQb2oA7yPxzojc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LBNLcSyeGkhZ18tJMVzLgu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rx3Ym54yD4tWWCq5rDVxDf
          claim_id: c_Tw1S5PjuHY4gTryyrOqhYo
          source_id: s_kIMEbeLl110Jel8D7_h72o
          stance: supports
          locator: CBDB：兄弟 王三接（203882）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王三省 与 王三接 为同胞（CBDB 记「兄」），王三接 之父／母即 王三省 之父／母。
          source:
            id: s_kIMEbeLl110Jel8D7_h72o
            source_type: api_record
            title: 中国历代人物传记资料库：王三省（CBDB 311398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311398&o=json
            external_identifier: CBDB:311398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qsqNNxC6SQb2oA7yPxzojc
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xusvFstA4COm5a1jwq5GmZ
        subject_person_id: p_LBNLcSyeGkhZ18tJMVzLgu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QWqbvdIJORMbadGFlxx-VZ
          claim_id: c_xusvFstA4COm5a1jwq5GmZ
          source_id: s_kIMEbeLl110Jel8D7_h72o
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203882 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kIMEbeLl110Jel8D7_h72o
            source_type: api_record
            title: 中国历代人物传记资料库：王三省（CBDB 311398）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311398&o=json
            external_identifier: CBDB:311398
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vc9c3mkQxRy6aUfxzv3hqq
        status: active
        display_name: 王三接
        merged_into_person_id: null
---

# 王三省

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三省 | accepted |
| bio.summary | 王三省，明人物。嘉靖二十六年進士，籍贯洪洞。（中国历代人物传记资料库 CBDB 311398） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qsqNNxC6SQb2oA7yPxzojc | 王相 | accepted |
| other | p_vc9c3mkQxRy6aUfxzv3hqq | 王三接 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三省（CBDB 311398）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311398&o=json)

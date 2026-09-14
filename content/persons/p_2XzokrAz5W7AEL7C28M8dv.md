---
schema: wang-person/v1
id: p_2XzokrAz5W7AEL7C28M8dv
status: active
merged_into: null
display_name: 王永鍚
cbdb_id: 333001
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W89ZTXzWU69qJbVEocxR9A
        subject_person_id: p_2XzokrAz5W7AEL7C28M8dv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永鍚，明人物。嘉靖四十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 333001）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JOWsZGDnQEgOT-80DvseLw
          claim_id: c_W89ZTXzWU69qJbVEocxR9A
          source_id: s_p7Qz1GA1teg1tNxbiiyBt6
          stance: supports
          locator: CBDB:333001
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_p7Qz1GA1teg1tNxbiiyBt6
            source_type: api_record
            title: 中国历代人物传记资料库：王永鍚（CBDB 333001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333001&o=json
            external_identifier: CBDB:333001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jar3scsSo7H1iCK9sGZDmv
        subject_person_id: p_2XzokrAz5W7AEL7C28M8dv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永鍚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_35D2XK1r9yC1aaSJrA9Bav
          claim_id: c_Jar3scsSo7H1iCK9sGZDmv
          source_id: s_p7Qz1GA1teg1tNxbiiyBt6
          stance: supports
          locator: CBDB:333001
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bRL5rnq4wCB_FTo7h7uBAf
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2XzokrAz5W7AEL7C28M8dv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9y92ciaUIoVNY84td9sRj9
          claim_id: c_bRL5rnq4wCB_FTo7h7uBAf
          source_id: s_PeGCfgb_ejWh3NhI33Xz8y
          stance: supports
          locator: CBDB：兄弟 王三鍚（205426）之父／母 王一陽
          quotation: null
          interpretation_note: 由兄弟关系推断：王永鍚 与 王三鍚 为同胞（CBDB 记「兄」），王三鍚 之父／母即 王永鍚 之父／母。
          source:
            id: s_PeGCfgb_ejWh3NhI33Xz8y
            source_type: api_record
            title: 中国历代人物传记资料库：王永鍚（CBDB 333001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333001&o=json
            external_identifier: CBDB:333001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TBNAibWSwiLJagKdPeWqgE
        status: active
        display_name: 王一陽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_35DXjB9wQaiaJIIgzvIdV1
        subject_person_id: p_2XzokrAz5W7AEL7C28M8dv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ebQYaCFXIpT-zO0NIZmyGB
          claim_id: c_35DXjB9wQaiaJIIgzvIdV1
          source_id: s_PeGCfgb_ejWh3NhI33Xz8y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205426 王三鍚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PeGCfgb_ejWh3NhI33Xz8y
            source_type: api_record
            title: 中国历代人物传记资料库：王永鍚（CBDB 333001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333001&o=json
            external_identifier: CBDB:333001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RPorhHfNa1cjhpbMo2ZnFo
        status: active
        display_name: 王三鍚
        merged_into_person_id: null
---

# 王永鍚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永鍚，明人物。嘉靖四十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 333001） | accepted |
| name.primary | 王永鍚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TBNAibWSwiLJagKdPeWqgE | 王一陽 | accepted |
| other | p_RPorhHfNa1cjhpbMo2ZnFo | 王三鍚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永鍚（CBDB 333001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333001&o=json)

---
schema: wang-person/v1
id: p_JGkdEGAwvYQLDBLsCSYeVF
status: active
merged_into: null
display_name: 王有性
cbdb_id: 249010
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GBmKyrSwGAGHxwbhFPT685
        subject_person_id: p_JGkdEGAwvYQLDBLsCSYeVF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有性，明人物。成化十一年進士，籍贯長樂。（中国历代人物传记资料库 CBDB 249010）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ufYqD47oxb_MGDSQ0XR1db
          claim_id: c_GBmKyrSwGAGHxwbhFPT685
          source_id: s_e3bQktaVVtNDNBB6noYorV
          stance: supports
          locator: CBDB:249010
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_e3bQktaVVtNDNBB6noYorV
            source_type: api_record
            title: 中国历代人物传记资料库：王有性（CBDB 249010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249010&o=json
            external_identifier: CBDB:249010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bqpoKHS7n7535Vjb2Pe4w5
        subject_person_id: p_JGkdEGAwvYQLDBLsCSYeVF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有性
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tuN28PfY6B1sQFubykwGni
          claim_id: c_bqpoKHS7n7535Vjb2Pe4w5
          source_id: s_e3bQktaVVtNDNBB6noYorV
          stance: supports
          locator: CBDB:249010
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TMCTSWJZ0yRWeipaXvimkt
        subject_person_id: p_pEywX39NWKUq9nsDk1FUH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JGkdEGAwvYQLDBLsCSYeVF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSalnOmNgoVf8cGgLT8-02
          claim_id: c_TMCTSWJZ0yRWeipaXvimkt
          source_id: s_JYj5o2rfUMPE9v9viQ-Ojz
          stance: supports
          locator: CBDB：兄弟 王有恬（199727）之父／母 王明哲
          quotation: null
          interpretation_note: 由兄弟关系推断：王有性 与 王有恬 为同胞（CBDB 记「弟」），王有恬 之父／母即 王有性 之父／母。
          source:
            id: s_JYj5o2rfUMPE9v9viQ-Ojz
            source_type: api_record
            title: 中国历代人物传记资料库：王有性（CBDB 249010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249010&o=json
            external_identifier: CBDB:249010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pEywX39NWKUq9nsDk1FUH7
        status: active
        display_name: 王明哲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6Qh2vgxrulwjFHg709LzkU
        subject_person_id: p_JGkdEGAwvYQLDBLsCSYeVF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pTZB8fs7H6HDdDBGYmoZTE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O_8hw3HTOcGbExnLyRvJts
          claim_id: c_6Qh2vgxrulwjFHg709LzkU
          source_id: s_JYj5o2rfUMPE9v9viQ-Ojz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199727 王有恬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JYj5o2rfUMPE9v9viQ-Ojz
            source_type: api_record
            title: 中国历代人物传记资料库：王有性（CBDB 249010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249010&o=json
            external_identifier: CBDB:249010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pTZB8fs7H6HDdDBGYmoZTE
        status: active
        display_name: 王有恬
        merged_into_person_id: null
---

# 王有性

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有性，明人物。成化十一年進士，籍贯長樂。（中国历代人物传记资料库 CBDB 249010） | accepted |
| name.primary | 王有性 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pEywX39NWKUq9nsDk1FUH7 | 王明哲 | accepted |
| other | p_pTZB8fs7H6HDdDBGYmoZTE | 王有恬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王有性（CBDB 249010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249010&o=json)

---
schema: wang-person/v1
id: p_Hzb8g4nvJ5yV9WDhTcHUPK
status: active
merged_into: null
display_name: 王堪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SbF4MgyTLdzyU6ZC11F957
        subject_person_id: p_Hzb8g4nvJ5yV9WDhTcHUPK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4abbmtgzJ7EASzxJviistu
          claim_id: c_SbF4MgyTLdzyU6ZC11F957
          source_id: s_so7jBSnBgU8mhMw3Co7NXT
          stance: supports
          locator: CBDB:225733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225733）
          source: &a1
            id: s_so7jBSnBgU8mhMw3Co7NXT
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 225733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225733&o=json
            external_identifier: CBDB:225733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RwGLDXvw9wZBPSPw2EDYua
        subject_person_id: p_Hzb8g4nvJ5yV9WDhTcHUPK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堪，明人物。萬曆十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 225733）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mol61wTdhqSTEU4_MRWjLi
          claim_id: c_RwGLDXvw9wZBPSPw2EDYua
          source_id: s_so7jBSnBgU8mhMw3Co7NXT
          stance: supports
          locator: CBDB:225733
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9lAfCPOfTHiZZTFvdXHoUS
        subject_person_id: p_7mmFEyZWywonqa5VSZtBkH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hzb8g4nvJ5yV9WDhTcHUPK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5krsJMSgEXDGoYe8xH0bCe
          claim_id: c_9lAfCPOfTHiZZTFvdXHoUS
          source_id: s_rLUNBIN9AZjfPzlfI7U675
          stance: supports
          locator: CBDB：兄弟 王堦（206978）之父／母 王宗靖
          quotation: null
          interpretation_note: 由兄弟关系推断：王堪 与 王堦 为同胞（CBDB 记「兄」），王堦 之父／母即 王堪 之父／母。
          source:
            id: s_rLUNBIN9AZjfPzlfI7U675
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 225733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225733&o=json
            external_identifier: CBDB:225733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7mmFEyZWywonqa5VSZtBkH
        status: active
        display_name: 王宗靖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_c44J0DPRAIxA0n1GCWCnfK
        subject_person_id: p_Hzb8g4nvJ5yV9WDhTcHUPK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pmhbXfi-zEoDaMJNIMVYQD
          claim_id: c_c44J0DPRAIxA0n1GCWCnfK
          source_id: s_rLUNBIN9AZjfPzlfI7U675
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206978 王堦）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rLUNBIN9AZjfPzlfI7U675
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 225733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225733&o=json
            external_identifier: CBDB:225733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oKtgLK3Hc3EvgppJQNGw5k
        status: active
        display_name: 王堦
        merged_into_person_id: null
---

# 王堪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堪 | accepted |
| bio.summary | 王堪，明人物。萬曆十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 225733） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7mmFEyZWywonqa5VSZtBkH | 王宗靖 | accepted |
| other | p_oKtgLK3Hc3EvgppJQNGw5k | 王堦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堪（CBDB 225733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225733&o=json)

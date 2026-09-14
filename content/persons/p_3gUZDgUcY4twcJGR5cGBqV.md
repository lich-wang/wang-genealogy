---
schema: wang-person/v1
id: p_3gUZDgUcY4twcJGR5cGBqV
status: active
merged_into: null
display_name: 王仕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f7wd88JaMLEDjG3RFXj99M
        subject_person_id: p_3gUZDgUcY4twcJGR5cGBqV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BNrwGEo4Kg8dCAqjVEMyus
          claim_id: c_f7wd88JaMLEDjG3RFXj99M
          source_id: s_RBB2ftaB5XorBJ1R3waYCJ
          stance: supports
          locator: CBDB:229901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229901）
          source: &a1
            id: s_RBB2ftaB5XorBJ1R3waYCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 229901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229901&o=json
            external_identifier: CBDB:229901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bu94fR6zaDGnRT1P1CJkJo
        subject_person_id: p_3gUZDgUcY4twcJGR5cGBqV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229901）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JpzfhCNkdgbVZRfIepvOch
          claim_id: c_bu94fR6zaDGnRT1P1CJkJo
          source_id: s_RBB2ftaB5XorBJ1R3waYCJ
          stance: supports
          locator: CBDB:229901
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aQa2WIcIF_rYxo5jhR-Ubq
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3gUZDgUcY4twcJGR5cGBqV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__eDsR4Gb4PqW7F5HBtNS5_
          claim_id: c_aQa2WIcIF_rYxo5jhR-Ubq
          source_id: s_K0rAn1kalvCbKbc4o4B3VT
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王仕 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王仕 之父／母。
          source:
            id: s_K0rAn1kalvCbKbc4o4B3VT
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 229901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229901&o=json
            external_identifier: CBDB:229901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HMYgDEoVuyW9xCPbxcPZ9o
        status: active
        display_name: 王大才
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_krCNE0DcbEI19asMe-Lg9X
        subject_person_id: p_3gUZDgUcY4twcJGR5cGBqV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uoljjBMD1iRoo7W-7xknk8
          claim_id: c_krCNE0DcbEI19asMe-Lg9X
          source_id: s_K0rAn1kalvCbKbc4o4B3VT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K0rAn1kalvCbKbc4o4B3VT
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 229901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229901&o=json
            external_identifier: CBDB:229901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DJcqSVwRMjWd5tk8GAdMxa
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕 | accepted |
| bio.summary | 王仕，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229901） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HMYgDEoVuyW9xCPbxcPZ9o | 王大才 | accepted |
| other | p_DJcqSVwRMjWd5tk8GAdMxa | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仕（CBDB 229901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229901&o=json)

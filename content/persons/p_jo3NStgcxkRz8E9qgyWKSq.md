---
schema: wang-person/v1
id: p_jo3NStgcxkRz8E9qgyWKSq
status: active
merged_into: null
display_name: 王珪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iJGDr2mWBDERHzGMa5muUd
        subject_person_id: p_jo3NStgcxkRz8E9qgyWKSq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kwsLb2CvYdfK4yPX973231
          claim_id: c_iJGDr2mWBDERHzGMa5muUd
          source_id: s_ZKh5EJYo9Adr6D9D9VBUtm
          stance: supports
          locator: CBDB:231094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231094）
          source: &a1
            id: s_ZKh5EJYo9Adr6D9D9VBUtm
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 231094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231094&o=json
            external_identifier: CBDB:231094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.637Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_if23H1KWUUW184YXYAisK1
        subject_person_id: p_jo3NStgcxkRz8E9qgyWKSq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，明人物。宣德八年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 231094）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b-wmuk7pK8_vPkGqZTJLZ1
          claim_id: c_if23H1KWUUW184YXYAisK1
          source_id: s_ZKh5EJYo9Adr6D9D9VBUtm
          stance: supports
          locator: CBDB:231094
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MOuwIHeeqxvvzIR5xqVmfL
        subject_person_id: p_8bLH6jDFtEPUQUPbN8XFMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jo3NStgcxkRz8E9qgyWKSq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3YFO-Cc12P4bUkCJ96nMCs
          claim_id: c_MOuwIHeeqxvvzIR5xqVmfL
          source_id: s_fZ6QhJ7HrMsOFsX8Kgvpaw
          stance: supports
          locator: CBDB：兄弟 王用（207307）之父／母 王思名
          quotation: null
          interpretation_note: 由兄弟关系推断：王珪 与 王用 为同胞（CBDB 记「兄」），王用 之父／母即 王珪 之父／母。
          source:
            id: s_fZ6QhJ7HrMsOFsX8Kgvpaw
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 231094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231094&o=json
            external_identifier: CBDB:231094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8bLH6jDFtEPUQUPbN8XFMB
        status: active
        display_name: 王思名
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_h724BDNL9zfkADr3poTla3
        subject_person_id: p_9Ebxw9nqUzpjPj6LJw3JKY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jo3NStgcxkRz8E9qgyWKSq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKeRuBVygd516xzx0EB4fz
          claim_id: c_h724BDNL9zfkADr3poTla3
          source_id: s_fZ6QhJ7HrMsOFsX8Kgvpaw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207307 王用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fZ6QhJ7HrMsOFsX8Kgvpaw
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 231094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231094&o=json
            external_identifier: CBDB:231094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9Ebxw9nqUzpjPj6LJw3JKY
        status: active
        display_name: 王用
        merged_into_person_id: null
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，明人物。宣德八年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 231094） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8bLH6jDFtEPUQUPbN8XFMB | 王思名 | accepted |
| other | p_9Ebxw9nqUzpjPj6LJw3JKY | 王用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 231094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231094&o=json)

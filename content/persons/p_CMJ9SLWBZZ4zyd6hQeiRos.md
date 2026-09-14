---
schema: wang-person/v1
id: p_CMJ9SLWBZZ4zyd6hQeiRos
status: active
merged_into: null
display_name: 王洪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4d3CPMRL65FhcZmM5qmNm3
        subject_person_id: p_CMJ9SLWBZZ4zyd6hQeiRos
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gDXJJXXHSxvCw8worayaFe
          claim_id: c_4d3CPMRL65FhcZmM5qmNm3
          source_id: s_NnJNBud8mhDUhsbHkLXp9w
          stance: supports
          locator: CBDB:289996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（289996）
          source: &a1
            id: s_NnJNBud8mhDUhsbHkLXp9w
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 289996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289996&o=json
            external_identifier: CBDB:289996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hMpMcXUG2NYGLhZT5KNPQh
        subject_person_id: p_CMJ9SLWBZZ4zyd6hQeiRos
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪，明人物。嘉靖八年進士，籍贯永康。（中国历代人物传记资料库 CBDB 289996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4K3bE4vreai954oi_Boz9e
          claim_id: c_hMpMcXUG2NYGLhZT5KNPQh
          source_id: s_NnJNBud8mhDUhsbHkLXp9w
          stance: supports
          locator: CBDB:289996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-8bTb7fBjFxhv3S1vrb-B8
        subject_person_id: p_if8g1GSPCjBBvajQMp9fXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CMJ9SLWBZZ4zyd6hQeiRos
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xafVUkE9FNbQFYI8g29Q5q
          claim_id: c_-8bTb7fBjFxhv3S1vrb-B8
          source_id: s_8xXXuYKJvogWr4DQR7SN_O
          stance: supports
          locator: CBDB：兄弟 王崇（126684）之父／母 王科
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王洪 之父／母。
          source:
            id: s_8xXXuYKJvogWr4DQR7SN_O
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 289996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289996&o=json
            external_identifier: CBDB:289996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_if8g1GSPCjBBvajQMp9fXi
        status: active
        display_name: 王科
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MXcbJ6cUksPnZQtXp4xMIB
        subject_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CMJ9SLWBZZ4zyd6hQeiRos
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shMN5qAX2mCz6kWpTmU-7P
          claim_id: c_MXcbJ6cUksPnZQtXp4xMIB
          source_id: s_8xXXuYKJvogWr4DQR7SN_O
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126684 王崇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8xXXuYKJvogWr4DQR7SN_O
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 289996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289996&o=json
            external_identifier: CBDB:289996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        status: active
        display_name: 王崇
        merged_into_person_id: null
---

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| bio.summary | 王洪，明人物。嘉靖八年進士，籍贯永康。（中国历代人物传记资料库 CBDB 289996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_if8g1GSPCjBBvajQMp9fXi | 王科 | accepted |
| other | p_5Nsm7LtaHH2TfQdw6zv4Pu | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 289996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289996&o=json)

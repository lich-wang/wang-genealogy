---
schema: wang-person/v1
id: p_A8iVyGdRUPCxrvePx9TtWf
status: active
merged_into: null
display_name: 王翔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WHaAMAEHx5tUwMZDP3PbGE
        subject_person_id: p_A8iVyGdRUPCxrvePx9TtWf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZKBo9gRJfovXXSKEajbXdF
          claim_id: c_WHaAMAEHx5tUwMZDP3PbGE
          source_id: s_Sw3bcPgxcQ1YVGw1uwwsB4
          stance: supports
          locator: CBDB:298757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298757）
          source: &a1
            id: s_Sw3bcPgxcQ1YVGw1uwwsB4
            source_type: api_record
            title: 中国历代人物传记资料库：王翔（CBDB 298757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298757&o=json
            external_identifier: CBDB:298757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LjngA233MueW7PT2sGJpQZ
        subject_person_id: p_A8iVyGdRUPCxrvePx9TtWf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翔，明人物。天順元年進士，籍贯蘄州衛。（中国历代人物传记资料库 CBDB 298757）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S8BWUG6Dc30z-1Cdp80ODT
          claim_id: c_LjngA233MueW7PT2sGJpQZ
          source_id: s_Sw3bcPgxcQ1YVGw1uwwsB4
          stance: supports
          locator: CBDB:298757
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HNRJhZfmUDqUEEsLhEuspA
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A8iVyGdRUPCxrvePx9TtWf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1qEENS8DS9Fo4k7uBRVi1G
          claim_id: c_HNRJhZfmUDqUEEsLhEuspA
          source_id: s_hEuRhRfMX8n9MG8-q89kHW
          stance: supports
          locator: CBDB：兄弟 王翰（198648）之父／母 王恭
          quotation: null
          interpretation_note: 由兄弟关系推断：王翔 与 王翰 为同胞（CBDB 记「兄」），王翰 之父／母即 王翔 之父／母。
          source:
            id: s_hEuRhRfMX8n9MG8-q89kHW
            source_type: api_record
            title: 中国历代人物传记资料库：王翔（CBDB 298757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298757&o=json
            external_identifier: CBDB:298757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EXMZPtghLZpQ12NTp4oe7P
        status: active
        display_name: 王恭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pywbpPUxcLyPjyIJC3jDqV
        subject_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_A8iVyGdRUPCxrvePx9TtWf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CJyqpDMgqnXBE6n4pg7JJs
          claim_id: c_pywbpPUxcLyPjyIJC3jDqV
          source_id: s_hEuRhRfMX8n9MG8-q89kHW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198648 王翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hEuRhRfMX8n9MG8-q89kHW
            source_type: api_record
            title: 中国历代人物传记资料库：王翔（CBDB 298757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298757&o=json
            external_identifier: CBDB:298757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_26otXuRvyNkWGBZaSdCQ3z
        status: active
        display_name: 王翰
        merged_into_person_id: null
---

# 王翔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翔 | accepted |
| bio.summary | 王翔，明人物。天順元年進士，籍贯蘄州衛。（中国历代人物传记资料库 CBDB 298757） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EXMZPtghLZpQ12NTp4oe7P | 王恭 | accepted |
| other | p_26otXuRvyNkWGBZaSdCQ3z | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翔（CBDB 298757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298757&o=json)

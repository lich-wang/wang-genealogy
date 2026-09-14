---
schema: wang-person/v1
id: p_if8g1GSPCjBBvajQMp9fXi
status: active
merged_into: null
display_name: 王科
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mi7wXgbjLALmoV5QNiQGYH
        subject_person_id: p_if8g1GSPCjBBvajQMp9fXi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ULej1nhMENQBbUy6YZu6Cb
          claim_id: c_mi7wXgbjLALmoV5QNiQGYH
          source_id: s_nBk55irV6n9prRc5VNLgH1
          stance: supports
          locator: CBDB:289992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（289992）
          source: &a1
            id: s_nBk55irV6n9prRc5VNLgH1
            source_type: api_record
            title: 中国历代人物传记资料库：王科（CBDB 289992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289992&o=json
            external_identifier: CBDB:289992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UDtFw8hD4BBuLKdtoxqXPH
        subject_person_id: p_if8g1GSPCjBBvajQMp9fXi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王科，明人物。嘉靖八年進士，籍贯永康。（中国历代人物传记资料库 CBDB 289992）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GURD5EGpxLh4JjvuOuTkjp
          claim_id: c_UDtFw8hD4BBuLKdtoxqXPH
          source_id: s_nBk55irV6n9prRc5VNLgH1
          stance: supports
          locator: CBDB:289992
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GvoUgtasBAqq5ucFfRHZUG
        subject_person_id: p_if8g1GSPCjBBvajQMp9fXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0x4TZlU8LqBkFBnIVedXPG
          claim_id: c_GvoUgtasBAqq5ucFfRHZUG
          source_id: s_4P9sB4w6wzqeoekXVGxMGt
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百五十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4P9sB4w6wzqeoekXVGxMGt
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 126684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126684&o=json
            external_identifier: CBDB:126684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.121Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5Nsm7LtaHH2TfQdw6zv4Pu
        status: active
        display_name: 王崇
        merged_into_person_id: null
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
        id: p_CMJ9SLWBZZ4zyd6hQeiRos
        status: active
        display_name: 王洪
        merged_into_person_id: null
    - claim:
        id: c_Awnp60_H9ErToc88XBus0t
        subject_person_id: p_if8g1GSPCjBBvajQMp9fXi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rbYXmX1uMRrafLoo6WS9MX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_imbgYPwXIyRUVgxwwb7Iqg
          claim_id: c_Awnp60_H9ErToc88XBus0t
          source_id: s_JKt5P3Cuby5BU0dBTAGOux
          stance: supports
          locator: CBDB：兄弟 王崇（126684）之父／母 王科
          quotation: null
          interpretation_note: 由兄弟关系推断：王京 与 王崇 为同胞（CBDB 记「兄」），王崇 之父／母即 王京 之父／母。
          source:
            id: s_JKt5P3Cuby5BU0dBTAGOux
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 289995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289995&o=json
            external_identifier: CBDB:289995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rbYXmX1uMRrafLoo6WS9MX
        status: active
        display_name: 王京
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王科

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王科 | accepted |
| bio.summary | 王科，明人物。嘉靖八年進士，籍贯永康。（中国历代人物传记资料库 CBDB 289992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5Nsm7LtaHH2TfQdw6zv4Pu | 王崇 | accepted |
| children | p_CMJ9SLWBZZ4zyd6hQeiRos | 王洪 | accepted |
| children | p_rbYXmX1uMRrafLoo6WS9MX | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 126684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126684&o=json)
- [中国历代人物传记资料库：王洪（CBDB 289996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289996&o=json)
- [中国历代人物传记资料库：王京（CBDB 289995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289995&o=json)
- [中国历代人物传记资料库：王科（CBDB 289992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289992&o=json)

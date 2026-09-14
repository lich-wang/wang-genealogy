---
schema: wang-person/v1
id: p_EXMZPtghLZpQ12NTp4oe7P
status: active
merged_into: null
display_name: 王恭
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8DV1dNYm6QijcexXg2dJ78
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VcEiJjf5AMbAk21QuriNRJ
          claim_id: c_8DV1dNYm6QijcexXg2dJ78
          source_id: s_ocE5b3394vQ6KhxvuCmWHH
          stance: supports
          locator: CBDB:298702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298702）
          source: &a1
            id: s_ocE5b3394vQ6KhxvuCmWHH
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 298702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298702&o=json
            external_identifier: CBDB:298702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FpWXVJjjFtsvjy7r8Lp4Vh
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭，明人物。天順元年進士，籍贯蘄州衛。（中国历代人物传记资料库 CBDB 298702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4dobdeY4pZI6ww-Pe_Lc1j
          claim_id: c_FpWXVJjjFtsvjy7r8Lp4Vh
          source_id: s_ocE5b3394vQ6KhxvuCmWHH
          stance: supports
          locator: CBDB:298702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_H66rbU1bq1WaLw5X6yn5Mt
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26otXuRvyNkWGBZaSdCQ3z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Saf5k06GozK3O25rSw7l-M
          claim_id: c_H66rbU1bq1WaLw5X6yn5Mt
          source_id: s_T83fogLUrutThepXCGjKi8
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第八十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T83fogLUrutThepXCGjKi8
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 198648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json
            external_identifier: CBDB:198648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26otXuRvyNkWGBZaSdCQ3z
        status: active
        display_name: 王翰
        merged_into_person_id: null
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
        id: p_A8iVyGdRUPCxrvePx9TtWf
        status: active
        display_name: 王翔
        merged_into_person_id: null
    - claim:
        id: c_qT9XhTWm4S8WWNgqbHhh-2
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HEcYmFiWFEDzbzkKdJkAmj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bs-ByKCMw6i6HJ3WziVVp9
          claim_id: c_qT9XhTWm4S8WWNgqbHhh-2
          source_id: s_kQHV9zoKsrJoMWjcu4fZDa
          stance: supports
          locator: CBDB：兄弟 王翰（198648）之父／母 王恭
          quotation: null
          interpretation_note: 由兄弟关系推断：王翊 与 王翰 为同胞（CBDB 记「弟」），王翰 之父／母即 王翊 之父／母。
          source:
            id: s_kQHV9zoKsrJoMWjcu4fZDa
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 298735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298735&o=json
            external_identifier: CBDB:298735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HEcYmFiWFEDzbzkKdJkAmj
        status: active
        display_name: 王翊
        merged_into_person_id: null
    - claim:
        id: c_6mH0azaQEDj87ikgWDlHQe
        subject_person_id: p_EXMZPtghLZpQ12NTp4oe7P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y9eK8P23zr16EQi669R1fE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZmOBxdaqO00T2oNDR5pYwt
          claim_id: c_6mH0azaQEDj87ikgWDlHQe
          source_id: s_IXpwXpu2cLSBrRcajM6-aQ
          stance: supports
          locator: CBDB：兄弟 王翰（198648）之父／母 王恭
          quotation: null
          interpretation_note: 由兄弟关系推断：王翱 与 王翰 为同胞（CBDB 记「兄」），王翰 之父／母即 王翱 之父／母。
          source:
            id: s_IXpwXpu2cLSBrRcajM6-aQ
            source_type: api_record
            title: 中国历代人物传记资料库：王翱（CBDB 298746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298746&o=json
            external_identifier: CBDB:298746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y9eK8P23zr16EQi669R1fE
        status: active
        display_name: 王翱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| bio.summary | 王恭，明人物。天順元年進士，籍贯蘄州衛。（中国历代人物传记资料库 CBDB 298702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_26otXuRvyNkWGBZaSdCQ3z | 王翰 | accepted |
| children | p_A8iVyGdRUPCxrvePx9TtWf | 王翔 | accepted |
| children | p_HEcYmFiWFEDzbzkKdJkAmj | 王翊 | accepted |
| children | p_Y9eK8P23zr16EQi669R1fE | 王翱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翱（CBDB 298746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298746&o=json)
- [中国历代人物传记资料库：王恭（CBDB 298702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298702&o=json)
- [中国历代人物传记资料库：王翰（CBDB 198648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198648&o=json)
- [中国历代人物传记资料库：王翔（CBDB 298757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298757&o=json)
- [中国历代人物传记资料库：王翊（CBDB 298735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298735&o=json)

---
schema: wang-person/v1
id: p_DSKsWKJmH5oHVZyhn4Ad7m
status: active
merged_into: null
display_name: 王瑒
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1hvzbFXsQqAH5k3MACTWsa
        subject_person_id: p_DSKsWKJmH5oHVZyhn4Ad7m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f9KXCE9goJrNo2mb1jg4NT
          claim_id: c_1hvzbFXsQqAH5k3MACTWsa
          source_id: s_KdzP7qpCLbwc9HBtU3Hqhj
          stance: supports
          locator: CBDB:154280
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（154280）
          source: &a1
            id: s_KdzP7qpCLbwc9HBtU3Hqhj
            source_type: api_record
            title: 中国历代人物传记资料库：王瑒（CBDB 154280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154280&o=json
            external_identifier: CBDB:154280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H1h58oKe8X7mY9DVy2aCC9
        subject_person_id: p_DSKsWKJmH5oHVZyhn4Ad7m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑒，唐人物。籍贯太原，曾任府丞。（中国历代人物传记资料库 CBDB 154280）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QKANe5cDcr_wehjzzOAdUx
          claim_id: c_H1h58oKe8X7mY9DVy2aCC9
          source_id: s_KdzP7qpCLbwc9HBtU3Hqhj
          stance: supports
          locator: CBDB:154280
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wSvMRjT4oqMH-__A_AAlpG
        subject_person_id: p_aMH6LTAy41QNB3jZAPp6oX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DSKsWKJmH5oHVZyhn4Ad7m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U6SDgfTnosXBueATqBJbhT
          claim_id: c_wSvMRjT4oqMH-__A_AAlpG
          source_id: s_sAc6eD93K7B9kEVuxArfdn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sAc6eD93K7B9kEVuxArfdn
            source_type: api_record
            title: 中国历代人物传记资料库：王仙客（CBDB 154279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154279&o=json
            external_identifier: CBDB:154279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aMH6LTAy41QNB3jZAPp6oX
        status: active
        display_name: 王仙客
        merged_into_person_id: null
  children:
    - claim:
        id: c_Qphj8CuRtDIwbiCltm3Ay1
        subject_person_id: p_DSKsWKJmH5oHVZyhn4Ad7m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1R27M2czAahiFDCMUScN43
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RQ_ozHZUwSkmqVHH32M9DD
          claim_id: c_Qphj8CuRtDIwbiCltm3Ay1
          source_id: s_gSvbm3ZseREEmUhYMheei9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 216：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gSvbm3ZseREEmUhYMheei9
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 141020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141020&o=json
            external_identifier: CBDB:141020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1R27M2czAahiFDCMUScN43
        status: active
        display_name: 王京
        merged_into_person_id: null
    - claim:
        id: c_p9mGTWfvGUw971dONCS50S
        subject_person_id: p_DSKsWKJmH5oHVZyhn4Ad7m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DiF3ukC7QM5GmPCe6ANHEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UIFseOy5saOgrnkwp055ab
          claim_id: c_p9mGTWfvGUw971dONCS50S
          source_id: s_vaxDG5PEUZtWGLbw5SiMfH
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vaxDG5PEUZtWGLbw5SiMfH
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 175810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175810&o=json
            external_identifier: CBDB:175810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DiF3ukC7QM5GmPCe6ANHEG
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑒 | accepted |
| bio.summary | 王瑒，唐人物。籍贯太原，曾任府丞。（中国历代人物传记资料库 CBDB 154280） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aMH6LTAy41QNB3jZAPp6oX | 王仙客 | accepted |
| children | p_1R27M2czAahiFDCMUScN43 | 王京 | accepted |
| children | p_DiF3ukC7QM5GmPCe6ANHEG | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑒（CBDB 154280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154280&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 175810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175810&o=json)
- [中国历代人物传记资料库：王京（CBDB 141020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141020&o=json)
- [中国历代人物传记资料库：王仙客（CBDB 154279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=154279&o=json)

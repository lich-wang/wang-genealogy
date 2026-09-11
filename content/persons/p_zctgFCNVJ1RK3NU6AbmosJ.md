---
schema: wang-person/v1
id: p_zctgFCNVJ1RK3NU6AbmosJ
status: active
merged_into: null
display_name: 王行成
cbdb_id: 165865
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xWj9LLNEYYi7ocnuV6aiRh
        subject_person_id: p_zctgFCNVJ1RK3NU6AbmosJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行成，唐人物。中国历代人物传记资料库（CBDB）以人物编号 165865 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_mfYtJmSDEd7ZZh6PBcF8LA
          claim_id: c_xWj9LLNEYYi7ocnuV6aiRh
          source_id: s_Bb9PUE8eAyrTgFFSERrJ3B
          stance: supports
          locator: CBDB:165865
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Bb9PUE8eAyrTgFFSERrJ3B
            source_type: api_record
            title: 中国历代人物传记资料库：王行成（CBDB 165865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165865&o=json
            external_identifier: CBDB:165865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gcwN1Zn1j7P7PrSHhqMYsE
        subject_person_id: p_zctgFCNVJ1RK3NU6AbmosJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qbkzaT2R34U2G7pjXQj3WU
          claim_id: c_gcwN1Zn1j7P7PrSHhqMYsE
          source_id: s_Bb9PUE8eAyrTgFFSERrJ3B
          stance: supports
          locator: CBDB:165865
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_Bb9PUE8eAyrTgFFSERrJ3B
            source_type: api_record
            title: 中国历代人物传记资料库：王行成（CBDB 165865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165865&o=json
            external_identifier: CBDB:165865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_hM4EhdgCVzO1eRPQkSnWTr
        subject_person_id: p_zctgFCNVJ1RK3NU6AbmosJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WxaYaeUM6Wm9_ug6PlUN6P
          claim_id: c_hM4EhdgCVzO1eRPQkSnWTr
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NUKaMQLG4Qa6pFRsxP79dG
            source_type: api_record
            title: 中国历代人物传记资料库：王文林（CBDB 190754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190754&o=json
            external_identifier: CBDB:190754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9vp8SfkcaLh3BHQ66WSVvS
        status: active
        display_name: 王文林
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_g65fFgihzdV3d8EVSYbaD6
        subject_person_id: p_zctgFCNVJ1RK3NU6AbmosJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GyDFNM8h3KCT9MHvDUXLC2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__opApdB3ytwyV7yYJTwZ96
          claim_id: c_g65fFgihzdV3d8EVSYbaD6
          source_id: s_i7VeDGRjr3jLVssGMAx7FC
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe3：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i7VeDGRjr3jLVssGMAx7FC
            source_type: api_record
            title: 中国历代人物传记资料库：王惟誠（CBDB 143228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143228&o=json
            external_identifier: CBDB:143228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GyDFNM8h3KCT9MHvDUXLC2
        status: active
        display_name: 王惟誠
        merged_into_person_id: null
  other: []
---

# 王行成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王行成，唐人物。中国历代人物传记资料库（CBDB）以人物编号 165865 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王行成 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9vp8SfkcaLh3BHQ66WSVvS | 王文林 | accepted |
| descendants | p_GyDFNM8h3KCT9MHvDUXLC2 | 王惟誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟誠（CBDB 143228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143228&o=json)
- [中国历代人物传记资料库：王文林（CBDB 190754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190754&o=json)
- [中国历代人物传记资料库：王行成（CBDB 165865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165865&o=json)

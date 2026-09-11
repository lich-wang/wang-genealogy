---
schema: wang-person/v1
id: p_1FCXxHhqD3wzUFWARQDXSE
status: active
merged_into: null
display_name: 王道行
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k8tPaYfpyQFTPdXQJYk6Lg
        subject_person_id: p_1FCXxHhqD3wzUFWARQDXSE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9hM2bvEQVih3NnKF3NXUJ
          claim_id: c_k8tPaYfpyQFTPdXQJYk6Lg
          source_id: s_Nr2qY755GTwgwauW1Hdu83
          stance: supports
          locator: CBDB:126744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126744）
          source: &a1
            id: s_Nr2qY755GTwgwauW1Hdu83
            source_type: api_record
            title: 中国历代人物传记资料库：王道行（CBDB 126744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126744&o=json
            external_identifier: CBDB:126744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LG3cpzQqv87pzQ3cR3kQ7z
        subject_person_id: p_1FCXxHhqD3wzUFWARQDXSE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道行，明人物。明清進士進士，籍贯陽曲，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126744）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i0wpgod05c0B9otyEfoMHA
          claim_id: c_LG3cpzQqv87pzQ3cR3kQ7z
          source_id: s_Nr2qY755GTwgwauW1Hdu83
          stance: supports
          locator: CBDB:126744
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-2vhI-zDijpF_uGyp3bQSB
        subject_person_id: p_Lg426XjwtGThS6GKpMTASR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1FCXxHhqD3wzUFWARQDXSE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2KeQVBqeldGrNbycbiu07z
          claim_id: c_-2vhI-zDijpF_uGyp3bQSB
          source_id: s_Nr2qY755GTwgwauW1Hdu83
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lg426XjwtGThS6GKpMTASR
        status: active
        display_name: 王尚智
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2mzj5rkRPPYPVt9hDRSL0e
        subject_person_id: p_oaNDfLCNACocvS6e5dX6tR
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1FCXxHhqD3wzUFWARQDXSE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XJ57f_AvHF_cIadveh5LyF
          claim_id: c_2mzj5rkRPPYPVt9hDRSL0e
          source_id: s_5KdizvAFPJEps1ZHmf6uDF
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5KdizvAFPJEps1ZHmf6uDF
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 312137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312137&o=json
            external_identifier: CBDB:312137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oaNDfLCNACocvS6e5dX6tR
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_Tbuy1GCMEq0aui6NCGTwE-
        subject_person_id: p_m69DkPkNmbULcq7eko5aNw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1FCXxHhqD3wzUFWARQDXSE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5N0ytlK39ubKOWY3nqlvpN
          claim_id: c_Tbuy1GCMEq0aui6NCGTwE-
          source_id: s_UJAoeaY3HmhmD9gApV75WN
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UJAoeaY3HmhmD9gApV75WN
            source_type: api_record
            title: 中国历代人物传记资料库：王居（CBDB 312136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312136&o=json
            external_identifier: CBDB:312136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_m69DkPkNmbULcq7eko5aNw
        status: active
        display_name: 王居
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王道行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道行 | accepted |
| bio.summary | 王道行，明人物。明清進士進士，籍贯陽曲，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126744） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Lg426XjwtGThS6GKpMTASR | 王尚智 | accepted |
| ancestors | p_oaNDfLCNACocvS6e5dX6tR | 王鼎 | accepted |
| ancestors | p_m69DkPkNmbULcq7eko5aNw | 王居 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道行（CBDB 126744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126744&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 312137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312137&o=json)
- [中国历代人物传记资料库：王居（CBDB 312136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312136&o=json)

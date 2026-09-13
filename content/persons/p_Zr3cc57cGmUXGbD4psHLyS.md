---
schema: wang-person/v1
id: p_Zr3cc57cGmUXGbD4psHLyS
status: active
merged_into: null
display_name: 王仕復
cbdb_id: 238052
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gXLhHgkEGFPetx4R8LEzCv
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕復，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238052）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_THccbaU5YX7BM4FdXdGKfh
          claim_id: c_gXLhHgkEGFPetx4R8LEzCv
          source_id: s_iN76XxvPC1gB1fMEhEaeAP
          stance: supports
          locator: CBDB:238052
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iN76XxvPC1gB1fMEhEaeAP
            source_type: api_record
            title: 中国历代人物传记资料库：王仕復（CBDB 238052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238052&o=json
            external_identifier: CBDB:238052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2QxDR4X9g1R6vfYuG5Lewr
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qEDLk3whmU7EHLA6rqA8eG
          claim_id: c_2QxDR4X9g1R6vfYuG5Lewr
          source_id: s_iN76XxvPC1gB1fMEhEaeAP
          stance: supports
          locator: CBDB:238052
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_B8o3gYbeOxx3Z0i4cWDPD-
        subject_person_id: p_Zr3cc57cGmUXGbD4psHLyS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Sfy82F6BmihArAucn9Vuw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lMQPsnar_3FC8lH_0YSEwB
          claim_id: c_B8o3gYbeOxx3Z0i4cWDPD-
          source_id: s_p1CXfyPv5LXzNzgR3qcWyx
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p1CXfyPv5LXzNzgR3qcWyx
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json
            external_identifier: CBDB:67953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Sfy82F6BmihArAucn9Vuw
        status: active
        display_name: 王詔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仕復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仕復，明人物。正统七年進士，籍贯衡陽。（中国历代人物传记资料库 CBDB 238052） | accepted |
| name.primary | 王仕復 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8Sfy82F6BmihArAucn9Vuw | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仕復（CBDB 238052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238052&o=json)
- [中国历代人物传记资料库：王詔（CBDB 67953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67953&o=json)

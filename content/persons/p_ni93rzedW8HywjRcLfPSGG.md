---
schema: wang-person/v1
id: p_ni93rzedW8HywjRcLfPSGG
status: active
merged_into: null
display_name: 王民
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BHDeAGC4MWYz8BEET5vSqe
        subject_person_id: p_ni93rzedW8HywjRcLfPSGG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iGDL9R3DBnvcEh9RxYhWBP
          claim_id: c_BHDeAGC4MWYz8BEET5vSqe
          source_id: s_Ezt3Na7tG3g8JumS7oJ3ZU
          stance: supports
          locator: CBDB:291943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291943）
          source: &a1
            id: s_Ezt3Na7tG3g8JumS7oJ3ZU
            source_type: api_record
            title: 中国历代人物传记资料库：王民（CBDB 291943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291943&o=json
            external_identifier: CBDB:291943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J4sWjLqcGAMDq8GLJjB76o
        subject_person_id: p_ni93rzedW8HywjRcLfPSGG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民，明人物。嘉靖十一年進士，籍贯高郵州，曾任散官。（中国历代人物传记资料库 CBDB 291943）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o3W-jrPor4Pi6bhR-VE6wO
          claim_id: c_J4sWjLqcGAMDq8GLJjB76o
          source_id: s_Ezt3Na7tG3g8JumS7oJ3ZU
          stance: supports
          locator: CBDB:291943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Cwwy8uJKiR5S4wOz-quoCp
        subject_person_id: p_ni93rzedW8HywjRcLfPSGG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ufRLVRWc7tv4zcxsauhE29
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nxrc2rSyJ2hhrnwM2YO0Yq
          claim_id: c_Cwwy8uJKiR5S4wOz-quoCp
          source_id: s_Ezt3Na7tG3g8JumS7oJ3ZU
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ufRLVRWc7tv4zcxsauhE29
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

# 王民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王民 | accepted |
| bio.summary | 王民，明人物。嘉靖十一年進士，籍贯高郵州，曾任散官。（中国历代人物传记资料库 CBDB 291943） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ufRLVRWc7tv4zcxsauhE29 | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王民（CBDB 291943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291943&o=json)

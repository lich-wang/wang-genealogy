---
schema: wang-person/v1
id: p_phyeEqSq8dsFBd6QTWPuEQ
status: active
merged_into: null
display_name: 王芝田
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tQNQKw278V2GCe5T1Qa69T
        subject_person_id: p_phyeEqSq8dsFBd6QTWPuEQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芝田
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mPRTi38UJ7QjUQ24Bdmdqi
          claim_id: c_tQNQKw278V2GCe5T1Qa69T
          source_id: s_MkHUCW2d2kpNigq2MyFtz3
          stance: supports
          locator: CBDB:699038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699038）
          source: &a1
            id: s_MkHUCW2d2kpNigq2MyFtz3
            source_type: api_record
            title: 中国历代人物传记资料库：王芝田（CBDB 699038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699038&o=json
            external_identifier: CBDB:699038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lk5G9HHHRj1SQn6mPRDVnA
        subject_person_id: p_phyeEqSq8dsFBd6QTWPuEQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王芝田，清人物。籍贯渮澤，入仕貢生: 恩貢，曾任教諭。（中国历代人物传记资料库 CBDB 699038）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R1V_X4J6sTKcXflbh1D2bH
          claim_id: c_Lk5G9HHHRj1SQn6mPRDVnA
          source_id: s_MkHUCW2d2kpNigq2MyFtz3
          stance: supports
          locator: CBDB:699038
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uuRFAObnCoXhFN651eFGsU
        subject_person_id: p_phyeEqSq8dsFBd6QTWPuEQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B9CSkxyVG7WBfsSZpKSTGf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KhiwaFI4IOfkPFVvX1tSFf
          claim_id: c_uuRFAObnCoXhFN651eFGsU
          source_id: s_Up7oHYmZRPYHhEJTuixB87
          stance: supports
          locator: 新修菏澤縣志，lgid=725115：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Up7oHYmZRPYHhEJTuixB87
            source_type: api_record
            title: 中国历代人物传记资料库：王作孚（CBDB 699039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699039&o=json
            external_identifier: CBDB:699039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B9CSkxyVG7WBfsSZpKSTGf
        status: active
        display_name: 王作孚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王芝田

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芝田 | accepted |
| bio.summary | 王芝田，清人物。籍贯渮澤，入仕貢生: 恩貢，曾任教諭。（中国历代人物传记资料库 CBDB 699038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_B9CSkxyVG7WBfsSZpKSTGf | 王作孚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芝田（CBDB 699038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699038&o=json)
- [中国历代人物传记资料库：王作孚（CBDB 699039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699039&o=json)

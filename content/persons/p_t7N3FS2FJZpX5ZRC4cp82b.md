---
schema: wang-person/v1
id: p_t7N3FS2FJZpX5ZRC4cp82b
status: active
merged_into: null
display_name: 王鑰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d9PYCAvp5CJprV8zg3Amkk
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T6dMUmomCLEhQAjEDx2y23
          claim_id: c_d9PYCAvp5CJprV8zg3Amkk
          source_id: s_jvxEg6VW4Hj34nnzFPuvCg
          stance: supports
          locator: CBDB:297824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297824）
          source: &a1
            id: s_jvxEg6VW4Hj34nnzFPuvCg
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 297824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297824&o=json
            external_identifier: CBDB:297824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZnAS54idVxkBi38rqox4iJ
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰，明人物。天順元年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 297824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pHTpgSXsd140_vX3Ntj-Yg
          claim_id: c_ZnAS54idVxkBi38rqox4iJ
          source_id: s_jvxEg6VW4Hj34nnzFPuvCg
          stance: supports
          locator: CBDB:297824
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aU5k1l9RcY-TYrnLnSCoDJ
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AkmvWiOlpIHaukjaN5dkxh
          claim_id: c_aU5k1l9RcY-TYrnLnSCoDJ
          source_id: s_3nScnB9r5mRQFv6y1VT1PM
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第七十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3nScnB9r5mRQFv6y1VT1PM
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 67719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json
            external_identifier: CBDB:67719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JCqwAkFqCg6AEXKEULaDMW
        status: active
        display_name: 王淵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鑰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑰 | accepted |
| bio.summary | 王鑰，明人物。天順元年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 297824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JCqwAkFqCg6AEXKEULaDMW | 王淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑰（CBDB 297824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297824&o=json)
- [中国历代人物传记资料库：王淵（CBDB 67719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67719&o=json)

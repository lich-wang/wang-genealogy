---
schema: wang-person/v1
id: p_CCcKrCDVukY43voMZETTGf
status: active
merged_into: null
display_name: 王中孚
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZznF74uDrmHFumNn2ASJCF
        subject_person_id: p_CCcKrCDVukY43voMZETTGf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i1N5j3G3CN7nnCwoXYSFZy
          claim_id: c_ZznF74uDrmHFumNn2ASJCF
          source_id: s_tfp6ZqpdSaDGscNchdeHZ2
          stance: supports
          locator: CBDB:337346
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（337346）
          source: &a1
            id: s_tfp6ZqpdSaDGscNchdeHZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王中孚（CBDB 337346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337346&o=json
            external_identifier: CBDB:337346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tm2Eh4MJdxertKRYFq7X4Q
        subject_person_id: p_CCcKrCDVukY43voMZETTGf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中孚，明人物。隆慶二年進士，籍贯宣武衛，曾任知縣。（中国历代人物传记资料库 CBDB 337346）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o0Vg_-4ukYl7FG31K6fz5h
          claim_id: c_Tm2Eh4MJdxertKRYFq7X4Q
          source_id: s_tfp6ZqpdSaDGscNchdeHZ2
          stance: supports
          locator: CBDB:337346
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Msl6aM7zXP0sWDjSLPDeBK
        subject_person_id: p_N3FQWHHsU1jDdJrJRdhgNj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CCcKrCDVukY43voMZETTGf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nx2qwhOF8wUmZz7-S1AVWf
          claim_id: c_Msl6aM7zXP0sWDjSLPDeBK
          source_id: s_iToaK_gWgmCZcfitM2En0T
          stance: supports
          locator: CBDB：兄弟 王中逵（205715）之父／母 王琇
          quotation: null
          interpretation_note: 由兄弟关系推断：王中孚 与 王中逵 为同胞（CBDB 记「弟」），王中逵 之父／母即 王中孚 之父／母。
          source:
            id: s_iToaK_gWgmCZcfitM2En0T
            source_type: api_record
            title: 中国历代人物传记资料库：王中孚（CBDB 337346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337346&o=json
            external_identifier: CBDB:337346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N3FQWHHsU1jDdJrJRdhgNj
        status: active
        display_name: 王琇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1uUDUwF9JPx_xViMpWSW8U
        subject_person_id: p_CCcKrCDVukY43voMZETTGf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RFSk9U6s1PdRrrCWPSXxDg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uk1TwR1AFZjVmqohYASJJp
          claim_id: c_1uUDUwF9JPx_xViMpWSW8U
          source_id: s_iToaK_gWgmCZcfitM2En0T
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205715 王中逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iToaK_gWgmCZcfitM2En0T
            source_type: api_record
            title: 中国历代人物传记资料库：王中孚（CBDB 337346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337346&o=json
            external_identifier: CBDB:337346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RFSk9U6s1PdRrrCWPSXxDg
        status: active
        display_name: 王中逵
        merged_into_person_id: null
---

# 王中孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中孚 | accepted |
| bio.summary | 王中孚，明人物。隆慶二年進士，籍贯宣武衛，曾任知縣。（中国历代人物传记资料库 CBDB 337346） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N3FQWHHsU1jDdJrJRdhgNj | 王琇 | accepted |
| other | p_RFSk9U6s1PdRrrCWPSXxDg | 王中逵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王中孚（CBDB 337346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337346&o=json)

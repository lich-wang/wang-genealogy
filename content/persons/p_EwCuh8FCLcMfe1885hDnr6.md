---
schema: wang-person/v1
id: p_EwCuh8FCLcMfe1885hDnr6
status: active
merged_into: null
display_name: 王綬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GpHr6ngbeVQjP2pCDwnaeW
        subject_person_id: p_EwCuh8FCLcMfe1885hDnr6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CiQKZZy3oPJkcvDkp4XnkL
          claim_id: c_GpHr6ngbeVQjP2pCDwnaeW
          source_id: s_Ar7gnq8q4Xh3KW37oFcqXR
          stance: supports
          locator: CBDB:333626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333626）
          source: &a1
            id: s_Ar7gnq8q4Xh3KW37oFcqXR
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 333626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333626&o=json
            external_identifier: CBDB:333626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.423Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C9T46AKGbn25ZGfh3yc9kN
        subject_person_id: p_EwCuh8FCLcMfe1885hDnr6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬，明人物。隆慶二年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 333626）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mzpaou_bYHi1SmtZbyuQnd
          claim_id: c_C9T46AKGbn25ZGfh3yc9kN
          source_id: s_Ar7gnq8q4Xh3KW37oFcqXR
          stance: supports
          locator: CBDB:333626
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4ZoBRW5eKjYU1SV7BoROkJ
        subject_person_id: p_U6zX3wnxTCMh3nEUMpMz4g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EwCuh8FCLcMfe1885hDnr6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_udU-QZwPXQshvf3I2zEUZs
          claim_id: c_4ZoBRW5eKjYU1SV7BoROkJ
          source_id: s_QkY2WmIg6AhjqO7GZFLCPs
          stance: supports
          locator: CBDB：兄弟 王周紹（205463）之父／母 王一貫
          quotation: null
          interpretation_note: 由兄弟关系推断：王綬 与 王周紹 为同胞（CBDB 记「兄」），王周紹 之父／母即 王綬 之父／母。
          source:
            id: s_QkY2WmIg6AhjqO7GZFLCPs
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 333626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333626&o=json
            external_identifier: CBDB:333626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U6zX3wnxTCMh3nEUMpMz4g
        status: active
        display_name: 王一貫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FVOuX9ZhSUVZ2871GMrngC
        subject_person_id: p_EwCuh8FCLcMfe1885hDnr6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_McURSghs63gxnc5WxHG3bH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8oR2JbB4LqNh4yEEkb3eWy
          claim_id: c_FVOuX9ZhSUVZ2871GMrngC
          source_id: s_QkY2WmIg6AhjqO7GZFLCPs
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205463 王周紹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QkY2WmIg6AhjqO7GZFLCPs
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 333626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333626&o=json
            external_identifier: CBDB:333626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_McURSghs63gxnc5WxHG3bH
        status: active
        display_name: 王周紹
        merged_into_person_id: null
---

# 王綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綬 | accepted |
| bio.summary | 王綬，明人物。隆慶二年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 333626） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_U6zX3wnxTCMh3nEUMpMz4g | 王一貫 | accepted |
| other | p_McURSghs63gxnc5WxHG3bH | 王周紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綬（CBDB 333626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333626&o=json)

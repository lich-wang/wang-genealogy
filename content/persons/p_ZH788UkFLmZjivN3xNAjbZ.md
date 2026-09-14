---
schema: wang-person/v1
id: p_ZH788UkFLmZjivN3xNAjbZ
status: active
merged_into: null
display_name: 王業
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q1nz8tdFpim96iDg7vN77s
        subject_person_id: p_ZH788UkFLmZjivN3xNAjbZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KY2CmSiS2vyji8uCyse2oy
          claim_id: c_Q1nz8tdFpim96iDg7vN77s
          source_id: s_8gBvxAmtsYQKc2T3Qi34Ew
          stance: supports
          locator: CBDB:329628
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329628）
          source: &a1
            id: s_8gBvxAmtsYQKc2T3Qi34Ew
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 329628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329628&o=json
            external_identifier: CBDB:329628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bYPH3PXTGTgDuHC1UQSnaP
        subject_person_id: p_ZH788UkFLmZjivN3xNAjbZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業，明人物。嘉靖四十四年進士，籍贯登州府。（中国历代人物传记资料库 CBDB 329628）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JBkMGm8a7J6-XmzZdu2bTf
          claim_id: c_bYPH3PXTGTgDuHC1UQSnaP
          source_id: s_8gBvxAmtsYQKc2T3Qi34Ew
          stance: supports
          locator: CBDB:329628
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AbqAVC7hchz5AUd5GZQzLL
        subject_person_id: p_6sYWcb482zJ4XWUwwNYJRi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZH788UkFLmZjivN3xNAjbZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gZNM7IjnEQlAG3uHe8wYYd
          claim_id: c_AbqAVC7hchz5AUd5GZQzLL
          source_id: s_1Qf40-YVIhUyyXQOZlmcpT
          stance: supports
          locator: CBDB：兄弟 王基（126676）之父／母 王士先
          quotation: null
          interpretation_note: 由兄弟关系推断：王業 与 王基 为同胞（CBDB 记「兄」），王基 之父／母即 王業 之父／母。
          source:
            id: s_1Qf40-YVIhUyyXQOZlmcpT
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 329628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329628&o=json
            external_identifier: CBDB:329628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6sYWcb482zJ4XWUwwNYJRi
        status: active
        display_name: 王士先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_aXRr6Moo-Vg0XhY7Yc303f
        subject_person_id: p_Lha1sy2QN5ZZFX6JESvChc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZH788UkFLmZjivN3xNAjbZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M_SSU_jZ-dXd6SdJUnJIVe
          claim_id: c_aXRr6Moo-Vg0XhY7Yc303f
          source_id: s_1Qf40-YVIhUyyXQOZlmcpT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126676 王基）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1Qf40-YVIhUyyXQOZlmcpT
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 329628）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329628&o=json
            external_identifier: CBDB:329628
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lha1sy2QN5ZZFX6JESvChc
        status: active
        display_name: 王基
        merged_into_person_id: null
---

# 王業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業 | accepted |
| bio.summary | 王業，明人物。嘉靖四十四年進士，籍贯登州府。（中国历代人物传记资料库 CBDB 329628） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6sYWcb482zJ4XWUwwNYJRi | 王士先 | accepted |
| other | p_Lha1sy2QN5ZZFX6JESvChc | 王基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王業（CBDB 329628）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329628&o=json)

---
schema: wang-person/v1
id: p_XXXBy3DnjSzXDzw4sMPEXi
status: active
merged_into: null
display_name: 王都
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_foFeEho7XJUzuAz1ZQdyfB
        subject_person_id: p_XXXBy3DnjSzXDzw4sMPEXi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oUkUYij9FtMbRY95um4hkV
          claim_id: c_foFeEho7XJUzuAz1ZQdyfB
          source_id: s_K186JNNHfj3pyfTU2hVhiG
          stance: supports
          locator: CBDB:335222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335222）
          source: &a1
            id: s_K186JNNHfj3pyfTU2hVhiG
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 335222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335222&o=json
            external_identifier: CBDB:335222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CprVrC8EFErycirDC16bgS
        subject_person_id: p_XXXBy3DnjSzXDzw4sMPEXi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王都，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335222）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FMkaw-vJLzOFCqJGwdG0uT
          claim_id: c_CprVrC8EFErycirDC16bgS
          source_id: s_K186JNNHfj3pyfTU2hVhiG
          stance: supports
          locator: CBDB:335222
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8xhird6g-132SoYC4SuD-A
        subject_person_id: p_xsB7dQbxgv1VM3fErdpLd2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XXXBy3DnjSzXDzw4sMPEXi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7lhQ6snNPrDEopV9PqKn-f
          claim_id: c_8xhird6g-132SoYC4SuD-A
          source_id: s_WckXsPH4Xnwj3OpZXWOFyk
          stance: supports
          locator: CBDB：兄弟 王京（205560）之父／母 王秉忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王都 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王都 之父／母。
          source:
            id: s_WckXsPH4Xnwj3OpZXWOFyk
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 335222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335222&o=json
            external_identifier: CBDB:335222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xsB7dQbxgv1VM3fErdpLd2
        status: active
        display_name: 王秉忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YYltYLP8zUEaeGc2D4txom
        subject_person_id: p_XXXBy3DnjSzXDzw4sMPEXi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f981TFKbL8hMbR-aD2EiEM
          claim_id: c_YYltYLP8zUEaeGc2D4txom
          source_id: s_WckXsPH4Xnwj3OpZXWOFyk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205560 王京）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WckXsPH4Xnwj3OpZXWOFyk
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 335222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335222&o=json
            external_identifier: CBDB:335222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iKF3URQYd2AiG1hYtKBDpV
        status: active
        display_name: 王京
        merged_into_person_id: null
---

# 王都

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王都 | accepted |
| bio.summary | 王都，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335222） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xsB7dQbxgv1VM3fErdpLd2 | 王秉忠 | accepted |
| other | p_iKF3URQYd2AiG1hYtKBDpV | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王都（CBDB 335222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335222&o=json)

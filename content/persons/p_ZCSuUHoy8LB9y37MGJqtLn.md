---
schema: wang-person/v1
id: p_ZCSuUHoy8LB9y37MGJqtLn
status: active
merged_into: null
display_name: 王宗禹
cbdb_id: 317697
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pUC9YcuVcmYe56DP1nEN24
        subject_person_id: p_ZCSuUHoy8LB9y37MGJqtLn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗禹，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317697）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_c2ecRtzZqXX-9e3r2mS2Gc
          claim_id: c_pUC9YcuVcmYe56DP1nEN24
          source_id: s_72PX4VBCdc8qqe8KcDbbHd
          stance: supports
          locator: CBDB:317697
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_72PX4VBCdc8qqe8KcDbbHd
            source_type: api_record
            title: 中国历代人物传记资料库：王宗禹（CBDB 317697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317697&o=json
            external_identifier: CBDB:317697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_L5UiLwCdamHM6vQE47VVTc
        subject_person_id: p_ZCSuUHoy8LB9y37MGJqtLn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗禹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eCLj2T363URpNSFD7hafgY
          claim_id: c_L5UiLwCdamHM6vQE47VVTc
          source_id: s_72PX4VBCdc8qqe8KcDbbHd
          stance: supports
          locator: CBDB:317697
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UF539oS1fYFu6yoD06FQJy
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZCSuUHoy8LB9y37MGJqtLn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yL5pN2HjkOVaCV8IDXyAti
          claim_id: c_UF539oS1fYFu6yoD06FQJy
          source_id: s_rv1VIdgp4U7XJWY1rSGz7i
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗禹 与 王宗舜 为同胞（CBDB 记「兄」），王宗舜 之父／母即 王宗禹 之父／母。
          source:
            id: s_rv1VIdgp4U7XJWY1rSGz7i
            source_type: api_record
            title: 中国历代人物传记资料库：王宗禹（CBDB 317697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317697&o=json
            external_identifier: CBDB:317697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oBz6NLHmFuUeBahrr88xPZ
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_q2KtnH60023VpT4CwaHISa
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZCSuUHoy8LB9y37MGJqtLn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lSfP6_cTFR4F6TPdfg91Xc
          claim_id: c_q2KtnH60023VpT4CwaHISa
          source_id: s_rv1VIdgp4U7XJWY1rSGz7i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rv1VIdgp4U7XJWY1rSGz7i
            source_type: api_record
            title: 中国历代人物传记资料库：王宗禹（CBDB 317697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317697&o=json
            external_identifier: CBDB:317697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9DQWxHegXc6PNKo9W5YA34
        status: active
        display_name: 王宗舜
        merged_into_person_id: null
---

# 王宗禹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗禹，明人物。嘉靖三十二年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 317697） | accepted |
| name.primary | 王宗禹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oBz6NLHmFuUeBahrr88xPZ | 王澄 | accepted |
| other | p_9DQWxHegXc6PNKo9W5YA34 | 王宗舜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗禹（CBDB 317697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317697&o=json)

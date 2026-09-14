---
schema: wang-person/v1
id: p_oBz6NLHmFuUeBahrr88xPZ
status: active
merged_into: null
display_name: 王澄
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6T5cqpqDhq7M7rfuBjymrk
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EGcQqCCqrBbVv5iG7eGAX3
          claim_id: c_6T5cqpqDhq7M7rfuBjymrk
          source_id: s_EB55GLGH4yBFH7R5XfAe27
          stance: supports
          locator: CBDB:317688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317688）
          source: &a1
            id: s_EB55GLGH4yBFH7R5XfAe27
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 317688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317688&o=json
            external_identifier: CBDB:317688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A5pUtnSMQTMsFGSUYSyWde
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄，明人物。嘉靖三十二年進士，籍贯聞喜，曾任訓導。（中国历代人物传记资料库 CBDB 317688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RPPDe38cDUeL4Mbu15MGt5
          claim_id: c_A5pUtnSMQTMsFGSUYSyWde
          source_id: s_EB55GLGH4yBFH7R5XfAe27
          stance: supports
          locator: CBDB:317688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_iuMyfrONJ97UgooVsF91tI
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9DQWxHegXc6PNKo9W5YA34
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ECq9XVnC48-I5gZpwvEv0p
          claim_id: c_iuMyfrONJ97UgooVsF91tI
          source_id: s_EB55GLGH4yBFH7R5XfAe27
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9DQWxHegXc6PNKo9W5YA34
        status: active
        display_name: 王宗舜
        merged_into_person_id: null
    - claim:
        id: c_p8xwA5ks0JaJxuogolBS5Q
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2BZTYtweXYja81g4qeSs2i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gN5gAdOZtZ9hwp7UzvqrPh
          claim_id: c_p8xwA5ks0JaJxuogolBS5Q
          source_id: s_P20B1JZxBP26lsfynwSUwf
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗孔 与 王宗舜 为同胞（CBDB 记「弟」），王宗舜 之父／母即 王宗孔 之父／母。
          source:
            id: s_P20B1JZxBP26lsfynwSUwf
            source_type: api_record
            title: 中国历代人物传记资料库：王宗孔（CBDB 317693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317693&o=json
            external_identifier: CBDB:317693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2BZTYtweXYja81g4qeSs2i
        status: active
        display_name: 王宗孔
        merged_into_person_id: null
    - claim:
        id: c_Xmm1zKvAJl82zq3MCcE-ms
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AUm5weM8G3aQMhoQ6WrDHY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__m7Zs0WrOmC7QtsUshGaYf
          claim_id: c_Xmm1zKvAJl82zq3MCcE-ms
          source_id: s_ImW7hmTPVJ8Kvm0hggDSpw
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗夏 与 王宗舜 为同胞（CBDB 记「弟」），王宗舜 之父／母即 王宗夏 之父／母。
          source:
            id: s_ImW7hmTPVJ8Kvm0hggDSpw
            source_type: api_record
            title: 中国历代人物传记资料库：王宗夏（CBDB 317692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317692&o=json
            external_identifier: CBDB:317692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUm5weM8G3aQMhoQ6WrDHY
        status: active
        display_name: 王宗夏
        merged_into_person_id: null
    - claim:
        id: c_Db4_MTnaqioR3QshAU7C6S
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KzJALsbQkFcqCtr3grZEAQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rMJhz8Wr3dp6jXqEKDnCyi
          claim_id: c_Db4_MTnaqioR3QshAU7C6S
          source_id: s_9JYlIQR_vnXPtdstPBk6Ym
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗武 与 王宗舜 为同胞（CBDB 记「兄」），王宗舜 之父／母即 王宗武 之父／母。
          source:
            id: s_9JYlIQR_vnXPtdstPBk6Ym
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 317700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317700&o=json
            external_identifier: CBDB:317700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KzJALsbQkFcqCtr3grZEAQ
        status: active
        display_name: 王宗武
        merged_into_person_id: null
    - claim:
        id: c_EsnrksUulUUOVQwls0T3cr
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MEVC7nLdbiCDqY72MuUAmm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_krBYVgTPO3rzkY8UGFfTG_
          claim_id: c_EsnrksUulUUOVQwls0T3cr
          source_id: s_5goB6ZCoEAj-RRYJAN_89m
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗湯 与 王宗舜 为同胞（CBDB 记「兄」），王宗舜 之父／母即 王宗湯 之父／母。
          source:
            id: s_5goB6ZCoEAj-RRYJAN_89m
            source_type: api_record
            title: 中国历代人物传记资料库：王宗湯（CBDB 317698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json
            external_identifier: CBDB:317698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MEVC7nLdbiCDqY72MuUAmm
        status: active
        display_name: 王宗湯
        merged_into_person_id: null
    - claim:
        id: c_f3-5beHujrFYe_kIBAUv2v
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WSxqscNRKPRdaJc2ZEcAPF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUqVGxseunmaOH87Pzrkgf
          claim_id: c_f3-5beHujrFYe_kIBAUv2v
          source_id: s_n2Lw6xW2c9pFKUkxx97HHS
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗文 与 王宗舜 为同胞（CBDB 记「兄」），王宗舜 之父／母即 王宗文 之父／母。
          source:
            id: s_n2Lw6xW2c9pFKUkxx97HHS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗文（CBDB 317699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json
            external_identifier: CBDB:317699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WSxqscNRKPRdaJc2ZEcAPF
        status: active
        display_name: 王宗文
        merged_into_person_id: null
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
        id: p_ZCSuUHoy8LB9y37MGJqtLn
        status: active
        display_name: 王宗禹
        merged_into_person_id: null
    - claim:
        id: c_GnAOmG2ufu7KH3ygEo5aQR
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rXe3KCvrB8nAMh6vAeQnSM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v0bJ-DkHioxbkZFsDSbhVZ
          claim_id: c_GnAOmG2ufu7KH3ygEo5aQR
          source_id: s_lbdlwWaiqnwGY70BjoNKox
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗堯 与 王宗舜 为同胞（CBDB 记「弟」），王宗舜 之父／母即 王宗堯 之父／母。
          source:
            id: s_lbdlwWaiqnwGY70BjoNKox
            source_type: api_record
            title: 中国历代人物传记资料库：王宗堯（CBDB 317694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317694&o=json
            external_identifier: CBDB:317694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rXe3KCvrB8nAMh6vAeQnSM
        status: active
        display_name: 王宗堯
        merged_into_person_id: null
    - claim:
        id: c_a9szZoqG6KhFIx3P3X5ZOv
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w5cSBr9rgK9hC3xW7Cp3AH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WOkdvBKx2fYNB48t2IPQJ9
          claim_id: c_a9szZoqG6KhFIx3P3X5ZOv
          source_id: s_S8Ye9p11_Rr44WEBUysFSr
          stance: supports
          locator: CBDB：兄弟 王宗舜（126560）之父／母 王澄
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗孟 与 王宗舜 为同胞（CBDB 记「弟」），王宗舜 之父／母即 王宗孟 之父／母。
          source:
            id: s_S8Ye9p11_Rr44WEBUysFSr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗孟（CBDB 317695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317695&o=json
            external_identifier: CBDB:317695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5cSBr9rgK9hC3xW7Cp3AH
        status: active
        display_name: 王宗孟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄 | accepted |
| bio.summary | 王澄，明人物。嘉靖三十二年進士，籍贯聞喜，曾任訓導。（中国历代人物传记资料库 CBDB 317688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9DQWxHegXc6PNKo9W5YA34 | 王宗舜 | accepted |
| children | p_2BZTYtweXYja81g4qeSs2i | 王宗孔 | accepted |
| children | p_AUm5weM8G3aQMhoQ6WrDHY | 王宗夏 | accepted |
| children | p_KzJALsbQkFcqCtr3grZEAQ | 王宗武 | accepted |
| children | p_MEVC7nLdbiCDqY72MuUAmm | 王宗湯 | accepted |
| children | p_WSxqscNRKPRdaJc2ZEcAPF | 王宗文 | accepted |
| children | p_ZCSuUHoy8LB9y37MGJqtLn | 王宗禹 | accepted |
| children | p_rXe3KCvrB8nAMh6vAeQnSM | 王宗堯 | accepted |
| children | p_w5cSBr9rgK9hC3xW7Cp3AH | 王宗孟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 317688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317688&o=json)
- [中国历代人物传记资料库：王宗孔（CBDB 317693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317693&o=json)
- [中国历代人物传记资料库：王宗孟（CBDB 317695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317695&o=json)
- [中国历代人物传记资料库：王宗湯（CBDB 317698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json)
- [中国历代人物传记资料库：王宗文（CBDB 317699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json)
- [中国历代人物传记资料库：王宗武（CBDB 317700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317700&o=json)
- [中国历代人物传记资料库：王宗夏（CBDB 317692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317692&o=json)
- [中国历代人物传记资料库：王宗堯（CBDB 317694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317694&o=json)
- [中国历代人物传记资料库：王宗禹（CBDB 317697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317697&o=json)

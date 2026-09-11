---
schema: wang-person/v1
id: p_pfkAJ6LT6dUqP7JHbgQTA7
status: active
merged_into: null
display_name: 王廷言
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_F4WcMwMjNmZEZoPKu8pFmL
        subject_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_88rE6bHtfWmsYJ4evEGvRX
          claim_id: c_F4WcMwMjNmZEZoPKu8pFmL
          source_id: s_JVivZWB5Z7AFEKmAu96moB
          stance: supports
          locator: CBDB:71560
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71560）
          source: &a1
            id: s_JVivZWB5Z7AFEKmAu96moB
            source_type: api_record
            title: 中国历代人物传记资料库：王廷言（CBDB 71560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71560&o=json
            external_identifier: CBDB:71560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jKRKZMQiZi2ypaGwnc1hS2
        subject_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1725年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SGMw9bvDpUjtqP2JH3oWKL
          claim_id: c_jKRKZMQiZi2ypaGwnc1hS2
          source_id: s_JVivZWB5Z7AFEKmAu96moB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_JTL2sNdhA6KsjQiosLYfoV
        subject_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1807年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s9rJYS4L8dP3uW4uZEAhUM
          claim_id: c_JTL2sNdhA6KsjQiosLYfoV
          source_id: s_JVivZWB5Z7AFEKmAu96moB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tPaP67kxdMJyvMAUsW2Jm4
        subject_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷言（1725年—1807年），清人物。籍贯婺源，曾任知府。（中国历代人物传记资料库 CBDB 71560）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B5jBer9WAYPnRuA9iLvV9v
          claim_id: c_tPaP67kxdMJyvMAUsW2Jm4
          source_id: s_JVivZWB5Z7AFEKmAu96moB
          stance: supports
          locator: CBDB:71560
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h1_RUwu2E5BjrlD2g8QQa3
        subject_person_id: p_cBGCXtQ6wkhv554viPc99n
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l9KIrT4ldUn9vBVwuRyCzT
          claim_id: c_h1_RUwu2E5BjrlD2g8QQa3
          source_id: s_szZBgRZFUof6ECVtLRNSze
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_szZBgRZFUof6ECVtLRNSze
            source_type: api_record
            title: 中国历代人物传记资料库：王文德（CBDB 696857）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json
            external_identifier: CBDB:696857
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cBGCXtQ6wkhv554viPc99n
        status: active
        display_name: 王文德
        merged_into_person_id: null
  children:
    - claim:
        id: c_8dqImfJ7CtMCUVj8Cygbwc
        subject_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8SfbNUa9c5K4NMLzzfdGZb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UfIy5HezkpRbZ55_Gx2JjK
          claim_id: c_8dqImfJ7CtMCUVj8Cygbwc
          source_id: s_WDHRNSfWYaS6zatBbZJCD3
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160868：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WDHRNSfWYaS6zatBbZJCD3
            source_type: api_record
            title: 中国历代人物传记资料库：王汝成（CBDB 696858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696858&o=json
            external_identifier: CBDB:696858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8SfbNUa9c5K4NMLzzfdGZb
        status: active
        display_name: 王汝成
        merged_into_person_id: null
    - claim:
        id: c_m77YLszXa2pfZhsQhwEWRp
        subject_person_id: p_pfkAJ6LT6dUqP7JHbgQTA7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tn8DUA9bYGXcmK139JjzXS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AfzmjB8QGLGBuMlUycQI-7
          claim_id: c_m77YLszXa2pfZhsQhwEWRp
          source_id: s_r23iQ39bnk1Sxvw5JQGBHE
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3623, HuWenKai #230：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r23iQ39bnk1Sxvw5JQGBHE
            source_type: api_record
            title: 中国历代人物传记资料库：王少華（CBDB 120316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120316&o=json
            external_identifier: CBDB:120316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.898Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tn8DUA9bYGXcmK139JjzXS
        status: active
        display_name: 王少華
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷言 | accepted |
| birth.date | 1725年 | accepted |
| death.date | 1807年 | accepted |
| bio.summary | 王廷言（1725年—1807年），清人物。籍贯婺源，曾任知府。（中国历代人物传记资料库 CBDB 71560） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cBGCXtQ6wkhv554viPc99n | 王文德 | accepted |
| children | p_8SfbNUa9c5K4NMLzzfdGZb | 王汝成 | accepted |
| children | p_tn8DUA9bYGXcmK139JjzXS | 王少華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝成（CBDB 696858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696858&o=json)
- [中国历代人物传记资料库：王少華（CBDB 120316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120316&o=json)
- [中国历代人物传记资料库：王廷言（CBDB 71560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71560&o=json)
- [中国历代人物传记资料库：王文德（CBDB 696857）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696857&o=json)

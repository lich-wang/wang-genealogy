---
schema: wang-person/v1
id: p_UQ2CAEcY93V7nzCVPmH8am
status: active
merged_into: null
display_name: 王旒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ACMvwutp1SSVeCBPzt1MiP
        subject_person_id: p_UQ2CAEcY93V7nzCVPmH8am
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cNmcPPkSQn61LJR9CEhpdc
          claim_id: c_ACMvwutp1SSVeCBPzt1MiP
          source_id: s_QzwKh6cMZcS36bV8q1APf6
          stance: supports
          locator: CBDB:327860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327860）
          source: &a1
            id: s_QzwKh6cMZcS36bV8q1APf6
            source_type: api_record
            title: 中国历代人物传记资料库：王旒（CBDB 327860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327860&o=json
            external_identifier: CBDB:327860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AP1D1MyEHrgWzzZ2uBTq5o
        subject_person_id: p_UQ2CAEcY93V7nzCVPmH8am
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旒，明人物。嘉靖四十一年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 327860）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5IlEQLR2QOuNt4Uvsj7iyN
          claim_id: c_AP1D1MyEHrgWzzZ2uBTq5o
          source_id: s_QzwKh6cMZcS36bV8q1APf6
          stance: supports
          locator: CBDB:327860
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZOlGM-E6eMeTdFFoWKM2-q
        subject_person_id: p_qo5VK1CeeyLVbmsSuofcsc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UQ2CAEcY93V7nzCVPmH8am
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3KsShfxFlJJImwxWAsRRWA
          claim_id: c_ZOlGM-E6eMeTdFFoWKM2-q
          source_id: s_ZU0NnenoSbnSqwxv3arwdR
          stance: supports
          locator: CBDB：兄弟 王嘉言（126780）之父／母 王魯
          quotation: null
          interpretation_note: 由兄弟关系推断：王旒 与 王嘉言 为同胞（CBDB 记「弟」），王嘉言 之父／母即 王旒 之父／母。
          source:
            id: s_ZU0NnenoSbnSqwxv3arwdR
            source_type: api_record
            title: 中国历代人物传记资料库：王旒（CBDB 327860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327860&o=json
            external_identifier: CBDB:327860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qo5VK1CeeyLVbmsSuofcsc
        status: active
        display_name: 王魯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2Hjq_fV9BdrGYwScrWJepW
        subject_person_id: p_UQ2CAEcY93V7nzCVPmH8am
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rnGMv5wiQ8owdX8n1Qtwbm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jwycDf0oMbAwdS2X3SCnCk
          claim_id: c_2Hjq_fV9BdrGYwScrWJepW
          source_id: s_ZU0NnenoSbnSqwxv3arwdR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126780 王嘉言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZU0NnenoSbnSqwxv3arwdR
            source_type: api_record
            title: 中国历代人物传记资料库：王旒（CBDB 327860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327860&o=json
            external_identifier: CBDB:327860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rnGMv5wiQ8owdX8n1Qtwbm
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
---

# 王旒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旒 | accepted |
| bio.summary | 王旒，明人物。嘉靖四十一年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 327860） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qo5VK1CeeyLVbmsSuofcsc | 王魯 | accepted |
| other | p_rnGMv5wiQ8owdX8n1Qtwbm | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王旒（CBDB 327860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327860&o=json)

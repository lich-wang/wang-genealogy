---
schema: wang-person/v1
id: p_TJFB1cHaGkYtqZQ3ArjCKV
status: active
merged_into: null
display_name: 王文
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UJe8yADEc12W4xVbtYUbKU
        subject_person_id: p_TJFB1cHaGkYtqZQ3ArjCKV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dZKFKPwb7dCQUF3QFoC7r7
          claim_id: c_UJe8yADEc12W4xVbtYUbKU
          source_id: s_vECpUMruYLTy56ai4MD7i1
          stance: supports
          locator: CBDB:237323
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237323）
          source: &a1
            id: s_vECpUMruYLTy56ai4MD7i1
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 237323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237323&o=json
            external_identifier: CBDB:237323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qJYySHPufhaWwg2Gkg8Mm9
        subject_person_id: p_TJFB1cHaGkYtqZQ3ArjCKV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。正統四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 237323）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Phk8Sv0I14syCxm9et3S7N
          claim_id: c_qJYySHPufhaWwg2Gkg8Mm9
          source_id: s_vECpUMruYLTy56ai4MD7i1
          stance: supports
          locator: CBDB:237323
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TOY6AcrD48xIuGLaU5MlnX
        subject_person_id: p_mpLV7oJiFdXj4zCSnQaS14
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TJFB1cHaGkYtqZQ3ArjCKV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y1mEem6UNUlTsJtEbpj7H8
          claim_id: c_TOY6AcrD48xIuGLaU5MlnX
          source_id: s_YerqFKfd08yBUWrGPCfue-
          stance: supports
          locator: CBDB：兄弟 王彧（207878）之父／母 王勉
          quotation: null
          interpretation_note: 由兄弟关系推断：王文 与 王彧 为同胞（CBDB 记「兄」），王彧 之父／母即 王文 之父／母。
          source:
            id: s_YerqFKfd08yBUWrGPCfue-
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 237323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237323&o=json
            external_identifier: CBDB:237323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mpLV7oJiFdXj4zCSnQaS14
        status: active
        display_name: 王勉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WLFtB41_3Y9QR9L5JmyxHx
        subject_person_id: p_TJFB1cHaGkYtqZQ3ArjCKV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TvjN1nga4vdBGSvpaM82jn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YDCZhMdv4jXiP-P7PzdauY
          claim_id: c_WLFtB41_3Y9QR9L5JmyxHx
          source_id: s_YerqFKfd08yBUWrGPCfue-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207878 王彧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YerqFKfd08yBUWrGPCfue-
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 237323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237323&o=json
            external_identifier: CBDB:237323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TvjN1nga4vdBGSvpaM82jn
        status: active
        display_name: 王彧
        merged_into_person_id: null
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，明人物。正統四年進士，籍贯開州。（中国历代人物传记资料库 CBDB 237323） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mpLV7oJiFdXj4zCSnQaS14 | 王勉 | accepted |
| other | p_TvjN1nga4vdBGSvpaM82jn | 王彧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 237323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237323&o=json)

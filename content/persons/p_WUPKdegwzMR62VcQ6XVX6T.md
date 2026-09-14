---
schema: wang-person/v1
id: p_WUPKdegwzMR62VcQ6XVX6T
status: active
merged_into: null
display_name: 王省
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FgFhmrFAe8p6N4omAKkW59
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王省
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aLjoxN8PmqurqN5LmeA3cF
          claim_id: c_FgFhmrFAe8p6N4omAKkW59
          source_id: s_P223hSkCaKXjWci8XgaC1u
          stance: supports
          locator: CBDB:334990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334990）
          source: &a1
            id: s_P223hSkCaKXjWci8XgaC1u
            source_type: api_record
            title: 中国历代人物传记资料库：王省（CBDB 334990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334990&o=json
            external_identifier: CBDB:334990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nieRNVkmWJUvitqYGs8t4b
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王省，明人物。隆慶二年進士，籍贯信陽。（中国历代人物传记资料库 CBDB 334990）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__3XWHpVoYU-ZtUAzqOISkO
          claim_id: c_nieRNVkmWJUvitqYGs8t4b
          source_id: s_P223hSkCaKXjWci8XgaC1u
          stance: supports
          locator: CBDB:334990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_xoDOe5GfMbJKX8-InbQXd0
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aRn6IffrmgssVNouZo15nY
          claim_id: c_xoDOe5GfMbJKX8-InbQXd0
          source_id: s_P223hSkCaKXjWci8XgaC1u
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        status: active
        display_name: 王應辰
        merged_into_person_id: null
    - claim:
        id: c_eps7RN8BbXbaopur1ttTyV
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5CcJvT8BLcp1KLWTfPZwCq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N7PDOQSC-yiWSQSy9NI0pv
          claim_id: c_eps7RN8BbXbaopur1ttTyV
          source_id: s_1Lh2R7Kbo7BjnIPmjzCTX6
          stance: supports
          locator: CBDB：兄弟 王應辰（205548）之父／母 王省
          quotation: null
          interpretation_note: 由兄弟关系推断：王應期 与 王應辰 为同胞（CBDB 记「弟」），王應辰 之父／母即 王應期 之父／母。
          source:
            id: s_1Lh2R7Kbo7BjnIPmjzCTX6
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 334994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334994&o=json
            external_identifier: CBDB:334994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CcJvT8BLcp1KLWTfPZwCq
        status: active
        display_name: 王應期
        merged_into_person_id: null
    - claim:
        id: c_jWWtpySfZwo2frNCmr2rvZ
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yh8c2xSCHG3efoW3KFKu4e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xs6Z7ahZNINsVKqc3tJCFj
          claim_id: c_jWWtpySfZwo2frNCmr2rvZ
          source_id: s_kyFRCKPTapt0h9OZldHly4
          stance: supports
          locator: CBDB：兄弟 王應辰（205548）之父／母 王省
          quotation: null
          interpretation_note: 由兄弟关系推断：王應元 与 王應辰 为同胞（CBDB 记「弟」），王應辰 之父／母即 王應元 之父／母。
          source:
            id: s_kyFRCKPTapt0h9OZldHly4
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 334993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334993&o=json
            external_identifier: CBDB:334993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yh8c2xSCHG3efoW3KFKu4e
        status: active
        display_name: 王應元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王省

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王省 | accepted |
| bio.summary | 王省，明人物。隆慶二年進士，籍贯信陽。（中国历代人物传记资料库 CBDB 334990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Uk3JWD2Whpfr1nbW4yeaJ2 | 王應辰 | accepted |
| children | p_5CcJvT8BLcp1KLWTfPZwCq | 王應期 | accepted |
| children | p_yh8c2xSCHG3efoW3KFKu4e | 王應元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王省（CBDB 334990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334990&o=json)
- [中国历代人物传记资料库：王應期（CBDB 334994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334994&o=json)
- [中国历代人物传记资料库：王應元（CBDB 334993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334993&o=json)

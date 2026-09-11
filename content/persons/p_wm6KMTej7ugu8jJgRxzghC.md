---
schema: wang-person/v1
id: p_wm6KMTej7ugu8jJgRxzghC
status: active
merged_into: null
display_name: 王得志
cbdb_id: 327149
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G382PEgniKQobTauNJb6Fn
        subject_person_id: p_wm6KMTej7ugu8jJgRxzghC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得志，明人物。中国历代人物传记资料库（CBDB）以人物编号 327149 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_r1d2nrFn5PP8zvDMxoMQMt
          claim_id: c_G382PEgniKQobTauNJb6Fn
          source_id: s_xA23t21kWDKERppsdi8RPo
          stance: supports
          locator: CBDB:327149
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_xA23t21kWDKERppsdi8RPo
            source_type: api_record
            title: 中国历代人物传记资料库：王得志（CBDB 327149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327149&o=json
            external_identifier: CBDB:327149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_K38zAuWRNrdUYV6UMEvabL
        subject_person_id: p_wm6KMTej7ugu8jJgRxzghC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vWaTp4eR63uV4wS3fArsWx
          claim_id: c_K38zAuWRNrdUYV6UMEvabL
          source_id: s_xA23t21kWDKERppsdi8RPo
          stance: supports
          locator: CBDB:327149
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_xA23t21kWDKERppsdi8RPo
            source_type: api_record
            title: 中国历代人物传记资料库：王得志（CBDB 327149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327149&o=json
            external_identifier: CBDB:327149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_-A8Eeb7-nOr8Zdojeg6XR1
        subject_person_id: p_wm6KMTej7ugu8jJgRxzghC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BxK799vwCxhyA6JGbqpHzN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n-MfGHG5QWd2zNYbbIoG_d
          claim_id: c_-A8Eeb7-nOr8Zdojeg6XR1
          source_id: s_n8fY6D3sur5MtKi8shwUp7
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n8fY6D3sur5MtKi8shwUp7
            source_type: api_record
            title: 中国历代人物传记资料库：王乾章（CBDB 126679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json
            external_identifier: CBDB:126679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BxK799vwCxhyA6JGbqpHzN
        status: active
        display_name: 王乾章
        merged_into_person_id: null
  other: []
---

# 王得志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王得志，明人物。中国历代人物传记资料库（CBDB）以人物编号 327149 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王得志 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_BxK799vwCxhyA6JGbqpHzN | 王乾章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得志（CBDB 327149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327149&o=json)
- [中国历代人物传记资料库：王乾章（CBDB 126679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126679&o=json)

---
schema: wang-person/v1
id: p_81CvExYf89XJWc841QKkeM
status: active
merged_into: null
display_name: 王槐卿
cbdb_id: 121679
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tJ7TkrfTRa52TmgNQnJYuK
        subject_person_id: p_81CvExYf89XJWc841QKkeM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐卿，清人物。中国历代人物传记资料库（CBDB）以人物编号 121679 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_OoGMmr_moHp6F4kKRh6yvI
          claim_id: c_tJ7TkrfTRa52TmgNQnJYuK
          source_id: s_epvxwFoMqGHsiegZDQpVDK
          stance: supports
          locator: CBDB:121679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_epvxwFoMqGHsiegZDQpVDK
            source_type: api_record
            title: 中国历代人物传记资料库：王槐卿（CBDB 121679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121679&o=json
            external_identifier: CBDB:121679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DiMAFYU1CJUPsMNmLv2g4F
        subject_person_id: p_81CvExYf89XJWc841QKkeM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iXz3mJAyjk8RwevRDuNvW7
          claim_id: c_DiMAFYU1CJUPsMNmLv2g4F
          source_id: s_epvxwFoMqGHsiegZDQpVDK
          stance: supports
          locator: CBDB:121679
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_epvxwFoMqGHsiegZDQpVDK
            source_type: api_record
            title: 中国历代人物传记资料库：王槐卿（CBDB 121679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121679&o=json
            external_identifier: CBDB:121679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Tz3FHoDRNoUBmPa1dSMIL8
        subject_person_id: p_nK3jUhYWuHJtmJWPhiPswM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_81CvExYf89XJWc841QKkeM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4TLOhF0t1RiDzZah95myuc
          claim_id: c_Tz3FHoDRNoUBmPa1dSMIL8
          source_id: s_FVjyThk6iEKgGpU27936UC
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4301：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FVjyThk6iEKgGpU27936UC
            source_type: api_record
            title: 中国历代人物传记资料库：王翁（CBDB 121673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121673&o=json
            external_identifier: CBDB:121673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nK3jUhYWuHJtmJWPhiPswM
        status: active
        display_name: 王翁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iCKnKX6U1pTaEidxFNGobv
        subject_person_id: p_81CvExYf89XJWc841QKkeM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EaTRB6KmWrHdr7pwj3q4uH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p1FUNKFPl2YhMLEnfxSiy1
          claim_id: c_iCKnKX6U1pTaEidxFNGobv
          source_id: s_bLWhziqCJTojO_G_YL4EAQ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4301：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bLWhziqCJTojO_G_YL4EAQ
            source_type: api_record
            title: 中国历代人物传记资料库：秦小珊（CBDB 121669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121669&o=json
            external_identifier: CBDB:121669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EaTRB6KmWrHdr7pwj3q4uH
        status: active
        display_name: 秦小珊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王槐卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王槐卿，清人物。中国历代人物传记资料库（CBDB）以人物编号 121679 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王槐卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nK3jUhYWuHJtmJWPhiPswM | 王翁 | accepted |
| spouses | p_EaTRB6KmWrHdr7pwj3q4uH | 秦小珊 | accepted |

## 外部来源

- [中国历代人物传记资料库：秦小珊（CBDB 121669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121669&o=json)
- [中国历代人物传记资料库：王槐卿（CBDB 121679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121679&o=json)
- [中国历代人物传记资料库：王翁（CBDB 121673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121673&o=json)

---
schema: wang-person/v1
id: p_n2iAZLE7BCf58ThDuUbMwY
status: active
merged_into: null
display_name: 王堯年
cbdb_id: 301850
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rHDVH732CfE3r5M3BWbMGC
        subject_person_id: p_n2iAZLE7BCf58ThDuUbMwY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯年，明人物。嘉靖十七年進士，籍贯鹿邑。（中国历代人物传记资料库 CBDB 301850）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nppLj9njTLnLvFWYHgIBoQ
          claim_id: c_rHDVH732CfE3r5M3BWbMGC
          source_id: s_WZviwNeoSUPX9Zhhp61Tdy
          stance: supports
          locator: CBDB:301850
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WZviwNeoSUPX9Zhhp61Tdy
            source_type: api_record
            title: 中国历代人物传记资料库：王堯年（CBDB 301850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301850&o=json
            external_identifier: CBDB:301850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RxpQ8gs3mXa1dBusGr8xHk
        subject_person_id: p_n2iAZLE7BCf58ThDuUbMwY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Beqk7dG4eKQKXtc3kaETNb
          claim_id: c_RxpQ8gs3mXa1dBusGr8xHk
          source_id: s_WZviwNeoSUPX9Zhhp61Tdy
          stance: supports
          locator: CBDB:301850
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4s0D9fKmkfhKifugbdNf93
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n2iAZLE7BCf58ThDuUbMwY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rHVsiYKvXnX11FIPLbMd-n
          claim_id: c_4s0D9fKmkfhKifugbdNf93
          source_id: s_HVQf7paOj4u3Ufk_WC2K4i
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126715 王堯日）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HVQf7paOj4u3Ufk_WC2K4i
            source_type: api_record
            title: 中国历代人物传记资料库：王堯年（CBDB 301850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301850&o=json
            external_identifier: CBDB:301850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9PcP1eVw2Xs1K2J2cm2szS
        status: active
        display_name: 王堯日
        merged_into_person_id: null
---

# 王堯年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堯年，明人物。嘉靖十七年進士，籍贯鹿邑。（中国历代人物传记资料库 CBDB 301850） | accepted |
| name.primary | 王堯年 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_9PcP1eVw2Xs1K2J2cm2szS | 王堯日 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堯年（CBDB 301850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301850&o=json)

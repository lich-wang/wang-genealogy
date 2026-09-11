---
schema: wang-person/v1
id: p_KoNAR72gTJQfz6MsFMPqCS
status: active
merged_into: null
display_name: 王演之
cbdb_id: 69756
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JNYqXJ8AY6gMMK7Qf6V5aV
        subject_person_id: p_KoNAR72gTJQfz6MsFMPqCS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演之，清人物。中国历代人物传记资料库（CBDB）以人物编号 69756 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_pB6SD7vhStTv2_qRCcX4L2
          claim_id: c_JNYqXJ8AY6gMMK7Qf6V5aV
          source_id: s_Vi3cgUfimcmGJ6HV2wMmW6
          stance: supports
          locator: CBDB:69756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Vi3cgUfimcmGJ6HV2wMmW6
            source_type: api_record
            title: 中国历代人物传记资料库：王演之（CBDB 69756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69756&o=json
            external_identifier: CBDB:69756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KjNcwTFGxJGHfYt9nZPJfi
        subject_person_id: p_KoNAR72gTJQfz6MsFMPqCS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6LYWWgbBTy6svzKuaNEs88
          claim_id: c_KjNcwTFGxJGHfYt9nZPJfi
          source_id: s_Vi3cgUfimcmGJ6HV2wMmW6
          stance: supports
          locator: CBDB:69756
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_Vi3cgUfimcmGJ6HV2wMmW6
            source_type: api_record
            title: 中国历代人物传记资料库：王演之（CBDB 69756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69756&o=json
            external_identifier: CBDB:69756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_-lSLsoeFyBj2agNTFYEU7x
        subject_person_id: p_KoNAR72gTJQfz6MsFMPqCS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XG6K9t9wK6K8A9gnb8zgyk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1IRTzdHDvn9qpOi_jLzPc7
          claim_id: c_-lSLsoeFyBj2agNTFYEU7x
          source_id: s_bAyGZvtmUqZX7GYdR2FwXB
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #704, HuWenKai #247：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bAyGZvtmUqZX7GYdR2FwXB
            source_type: api_record
            title: 中国历代人物传记资料库：張萬策（CBDB 69790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69790&o=json
            external_identifier: CBDB:69790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XG6K9t9wK6K8A9gnb8zgyk
        status: active
        display_name: 張萬策
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王演之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王演之，清人物。中国历代人物传记资料库（CBDB）以人物编号 69756 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王演之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_XG6K9t9wK6K8A9gnb8zgyk | 張萬策 | accepted |

## 外部来源

- [中国历代人物传记资料库：王演之（CBDB 69756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69756&o=json)
- [中国历代人物传记资料库：張萬策（CBDB 69790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69790&o=json)

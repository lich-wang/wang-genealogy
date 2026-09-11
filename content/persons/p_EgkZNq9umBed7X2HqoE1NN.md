---
schema: wang-person/v1
id: p_EgkZNq9umBed7X2HqoE1NN
status: active
merged_into: null
display_name: 王谷英
cbdb_id: 254337
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DgMsVdBU8W3hfaiWxcoknY
        subject_person_id: p_EgkZNq9umBed7X2HqoE1NN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谷英，明人物。中国历代人物传记资料库（CBDB）以人物编号 254337 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_RpxdblSq3ySb7NkaCoiCE0
          claim_id: c_DgMsVdBU8W3hfaiWxcoknY
          source_id: s_DwMajRVMzG9P8DKkxyaqdR
          stance: supports
          locator: CBDB:254337
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DwMajRVMzG9P8DKkxyaqdR
            source_type: api_record
            title: 中国历代人物传记资料库：王谷英（CBDB 254337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254337&o=json
            external_identifier: CBDB:254337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Cf3umqq15e8FqbtN1gzU4
        subject_person_id: p_EgkZNq9umBed7X2HqoE1NN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王谷英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8X8xMd1KoC6JMzmMm7AsxC
          claim_id: c_1Cf3umqq15e8FqbtN1gzU4
          source_id: s_DwMajRVMzG9P8DKkxyaqdR
          stance: supports
          locator: CBDB:254337
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_DwMajRVMzG9P8DKkxyaqdR
            source_type: api_record
            title: 中国历代人物传记资料库：王谷英（CBDB 254337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254337&o=json
            external_identifier: CBDB:254337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
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
        id: c_E1Q-7jDg7hbEP3B5D7SdfI
        subject_person_id: p_EgkZNq9umBed7X2HqoE1NN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jHwZfHWM4vMLPpm1ZfMXFt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xEHMb-ThceGC9gcvRiGIXF
          claim_id: c_E1Q-7jDg7hbEP3B5D7SdfI
          source_id: s_srAnw7NJCmjSg2UeHn9GXe
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_srAnw7NJCmjSg2UeHn9GXe
            source_type: api_record
            title: 中国历代人物传记资料库：王彝（CBDB 200153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json
            external_identifier: CBDB:200153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jHwZfHWM4vMLPpm1ZfMXFt
        status: active
        display_name: 王彝
        merged_into_person_id: null
  other: []
---

# 王谷英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王谷英，明人物。中国历代人物传记资料库（CBDB）以人物编号 254337 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王谷英 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jHwZfHWM4vMLPpm1ZfMXFt | 王彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王谷英（CBDB 254337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254337&o=json)
- [中国历代人物传记资料库：王彝（CBDB 200153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200153&o=json)

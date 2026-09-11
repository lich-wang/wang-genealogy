---
schema: wang-person/v1
id: p_jhmTi4r4WfRpFK4vF1pzQj
status: active
merged_into: null
display_name: 王濺
cbdb_id: 163972
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b6rw43m6QDwZacpuzLBwKz
        subject_person_id: p_jhmTi4r4WfRpFK4vF1pzQj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濺，唐人物。中国历代人物传记资料库（CBDB）以人物编号 163972 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Y27kyWoQ5HlWEWtjERYX36
          claim_id: c_b6rw43m6QDwZacpuzLBwKz
          source_id: s_YKMrbCtwToeb7Tq4LbvqBN
          stance: supports
          locator: CBDB:163972
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YKMrbCtwToeb7Tq4LbvqBN
            source_type: api_record
            title: 中国历代人物传记资料库：王濺（CBDB 163972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163972&o=json
            external_identifier: CBDB:163972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WYaqBNZ9zHK3Jqjop523iQ
        subject_person_id: p_jhmTi4r4WfRpFK4vF1pzQj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4GmcmnRJmHYqbffFSHEwRC
          claim_id: c_WYaqBNZ9zHK3Jqjop523iQ
          source_id: s_YKMrbCtwToeb7Tq4LbvqBN
          stance: supports
          locator: CBDB:163972
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_YKMrbCtwToeb7Tq4LbvqBN
            source_type: api_record
            title: 中国历代人物传记资料库：王濺（CBDB 163972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163972&o=json
            external_identifier: CBDB:163972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__fefjgO5S0Z7Aoy-tflFxd
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jhmTi4r4WfRpFK4vF1pzQj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9nac328z1a147hcRgmqBni
          claim_id: c__fefjgO5S0Z7Aoy-tflFxd
          source_id: s_YKMrbCtwToeb7Tq4LbvqBN
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan74：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qpYjs58xCf6rGyH3FU2c1P
        status: active
        display_name: 王嵩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王濺，唐人物。中国历代人物传记资料库（CBDB）以人物编号 163972 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王濺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qpYjs58xCf6rGyH3FU2c1P | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濺（CBDB 163972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163972&o=json)

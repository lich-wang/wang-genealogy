---
schema: wang-person/v1
id: p_GdMD2U5cMXJm7vvjZhwJqE
status: active
merged_into: null
display_name: 王仲玄
cbdb_id: 150828
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g4NVgFT94BNu98hyFsqQdm
        subject_person_id: p_GdMD2U5cMXJm7vvjZhwJqE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲玄，唐人物。中国历代人物传记资料库（CBDB）以人物编号 150828 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_4rWOPZEJX14tpFCtggpexQ
          claim_id: c_g4NVgFT94BNu98hyFsqQdm
          source_id: s_kKkBfFNdJ3HredtRR2iQHa
          stance: supports
          locator: CBDB:150828
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_kKkBfFNdJ3HredtRR2iQHa
            source_type: api_record
            title: 中国历代人物传记资料库：王仲玄（CBDB 150828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150828&o=json
            external_identifier: CBDB:150828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6a5JBQzk53VG79CRfPxrJg
        subject_person_id: p_GdMD2U5cMXJm7vvjZhwJqE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DCg99kUJ5S5TT6uTnvKEVp
          claim_id: c_6a5JBQzk53VG79CRfPxrJg
          source_id: s_kKkBfFNdJ3HredtRR2iQHa
          stance: supports
          locator: CBDB:150828
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_kKkBfFNdJ3HredtRR2iQHa
            source_type: api_record
            title: 中国历代人物传记资料库：王仲玄（CBDB 150828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150828&o=json
            external_identifier: CBDB:150828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lmVSz5orEXQvYiEX1uWkjc
        subject_person_id: p_6RXDLLM6sg158etGji2Ajt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GdMD2U5cMXJm7vvjZhwJqE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VLjgoYnSM-3bXRBWG_P9tp
          claim_id: c_lmVSz5orEXQvYiEX1uWkjc
          source_id: s_aQPEiFDKhXewR97dFD4wYj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 32：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aQPEiFDKhXewR97dFD4wYj
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 140259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140259&o=json
            external_identifier: CBDB:140259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.488Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6RXDLLM6sg158etGji2Ajt
        status: active
        display_name: 王震
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲玄，唐人物。中国历代人物传记资料库（CBDB）以人物编号 150828 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仲玄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6RXDLLM6sg158etGji2Ajt | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王震（CBDB 140259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140259&o=json)
- [中国历代人物传记资料库：王仲玄（CBDB 150828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150828&o=json)

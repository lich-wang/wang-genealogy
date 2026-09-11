---
schema: wang-person/v1
id: p_LtibHoqT49GS1fdf4zHFf9
status: active
merged_into: null
display_name: 王映奎
cbdb_id: 120730
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n81wRebchKZvHrEZajBBS6
        subject_person_id: p_LtibHoqT49GS1fdf4zHFf9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王映奎，清人物。中国历代人物传记资料库（CBDB）以人物编号 120730 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_SGrFiNyfP_ohQGCdSk_kii
          claim_id: c_n81wRebchKZvHrEZajBBS6
          source_id: s_JyUW4m87KVYCzYuurCF94F
          stance: supports
          locator: CBDB:120730
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_JyUW4m87KVYCzYuurCF94F
            source_type: api_record
            title: 中国历代人物传记资料库：王映奎（CBDB 120730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120730&o=json
            external_identifier: CBDB:120730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iEP6ZRC7enFpRYMreFWsyf
        subject_person_id: p_LtibHoqT49GS1fdf4zHFf9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王映奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VYQL2us1E9jGb9cdEmy8sP
          claim_id: c_iEP6ZRC7enFpRYMreFWsyf
          source_id: s_JyUW4m87KVYCzYuurCF94F
          stance: supports
          locator: CBDB:120730
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_JyUW4m87KVYCzYuurCF94F
            source_type: api_record
            title: 中国历代人物传记资料库：王映奎（CBDB 120730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120730&o=json
            external_identifier: CBDB:120730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
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
        id: c_aLZOD1Zb6eWdT5CtpdM3yT
        subject_person_id: p_LtibHoqT49GS1fdf4zHFf9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NrDPGzDpaMqHxJ8ALdPWg3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jOdr1VsN6WijEgOj8aQziT
          claim_id: c_aLZOD1Zb6eWdT5CtpdM3yT
          source_id: s__AzcMEFiKPbeOGla2sSh3m
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3889, HuWenKai #558：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s__AzcMEFiKPbeOGla2sSh3m
            source_type: api_record
            title: 中国历代人物传记资料库：許元淳（CBDB 120722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120722&o=json
            external_identifier: CBDB:120722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NrDPGzDpaMqHxJ8ALdPWg3
        status: active
        display_name: 許元淳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王映奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王映奎，清人物。中国历代人物传记资料库（CBDB）以人物编号 120730 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王映奎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NrDPGzDpaMqHxJ8ALdPWg3 | 許元淳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王映奎（CBDB 120730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120730&o=json)
- [中国历代人物传记资料库：許元淳（CBDB 120722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120722&o=json)

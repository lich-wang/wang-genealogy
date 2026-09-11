---
schema: wang-person/v1
id: p_2qBjdsqrRxq7QXCqAbApA7
status: active
merged_into: null
display_name: 王贇某
cbdb_id: 193558
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_y5tVy6cMdB7by36fH8FMbD
        subject_person_id: p_2qBjdsqrRxq7QXCqAbApA7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇某（卒于864年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 193558 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_lRMGRKmx_jX0nE0tggMUVr
          claim_id: c_y5tVy6cMdB7by36fH8FMbD
          source_id: s_5twSeHDfNUZCBaV1hsdTXZ
          stance: supports
          locator: CBDB:193558
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5twSeHDfNUZCBaV1hsdTXZ
            source_type: api_record
            title: 中国历代人物传记资料库：王贇某（CBDB 193558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193558&o=json
            external_identifier: CBDB:193558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_LFr13yAhS2Qd89hV8J7FmJ
        subject_person_id: p_2qBjdsqrRxq7QXCqAbApA7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 864年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0864-01-01
            latest: 0864-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QUqozCsJe7MuMPvK3GBa58
          claim_id: c_LFr13yAhS2Qd89hV8J7FmJ
          source_id: s_5twSeHDfNUZCBaV1hsdTXZ
          stance: supports
          locator: CBDB:193558
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 864
          source:
            id: s_5twSeHDfNUZCBaV1hsdTXZ
            source_type: api_record
            title: 中国历代人物传记资料库：王贇某（CBDB 193558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193558&o=json
            external_identifier: CBDB:193558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i9kD1HMmv98G6Y3NohDRXP
        subject_person_id: p_2qBjdsqrRxq7QXCqAbApA7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X1UkmKY1HNofgGSrQ61kvG
          claim_id: c_i9kD1HMmv98G6Y3NohDRXP
          source_id: s_5twSeHDfNUZCBaV1hsdTXZ
          stance: supports
          locator: CBDB:193558
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 864
          source:
            id: s_5twSeHDfNUZCBaV1hsdTXZ
            source_type: api_record
            title: 中国历代人物传记资料库：王贇某（CBDB 193558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193558&o=json
            external_identifier: CBDB:193558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a_aY-TZVSHdXRETdzb2Ef9
        subject_person_id: p_ZuFC93AY6BQ8RYk1LeSddc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2qBjdsqrRxq7QXCqAbApA7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6NZMWWlHFpm77FUU7NTFLM
          claim_id: c_a_aY-TZVSHdXRETdzb2Ef9
          source_id: s_5twSeHDfNUZCBaV1hsdTXZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZuFC93AY6BQ8RYk1LeSddc
        status: active
        display_name: 王常散
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王贇某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王贇某（卒于864年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 193558 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 864年 | accepted |
| name.primary | 王贇某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZuFC93AY6BQ8RYk1LeSddc | 王常散 | accepted |

## 外部来源

- [中国历代人物传记资料库：王贇某（CBDB 193558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193558&o=json)

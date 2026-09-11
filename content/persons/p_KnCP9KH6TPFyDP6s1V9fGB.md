---
schema: wang-person/v1
id: p_KnCP9KH6TPFyDP6s1V9fGB
status: active
merged_into: null
display_name: 王舒綸
cbdb_id: 58431
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TdmwFhymLPSw4M1eHCkLyj
        subject_person_id: p_KnCP9KH6TPFyDP6s1V9fGB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒綸（卒于1853年），清人物。中国历代人物传记资料库（CBDB）以人物编号 58431 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_gSj1ds4c40u7StEXwhndJY
          claim_id: c_TdmwFhymLPSw4M1eHCkLyj
          source_id: s_NvQq15xBSyzQ2cXr2HqcGd
          stance: supports
          locator: CBDB:58431
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_NvQq15xBSyzQ2cXr2HqcGd
            source_type: api_record
            title: 中国历代人物传记资料库：王舒綸（CBDB 58431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58431&o=json
            external_identifier: CBDB:58431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_kNpxvzXAK1v8kEsmiv1CRP
        subject_person_id: p_KnCP9KH6TPFyDP6s1V9fGB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1853年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1853-01-01
            latest: 1853-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_437qGCU1n6Ei3BJahvHyD2
          claim_id: c_kNpxvzXAK1v8kEsmiv1CRP
          source_id: s_NvQq15xBSyzQ2cXr2HqcGd
          stance: supports
          locator: CBDB:58431
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1853
          source:
            id: s_NvQq15xBSyzQ2cXr2HqcGd
            source_type: api_record
            title: 中国历代人物传记资料库：王舒綸（CBDB 58431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58431&o=json
            external_identifier: CBDB:58431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UNu6Jet3zbEabunQAo3Amb
        subject_person_id: p_KnCP9KH6TPFyDP6s1V9fGB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yQCWzA1dKKw6wLVLLin8JJ
          claim_id: c_UNu6Jet3zbEabunQAo3Amb
          source_id: s_NvQq15xBSyzQ2cXr2HqcGd
          stance: supports
          locator: CBDB:58431
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1853
          source:
            id: s_NvQq15xBSyzQ2cXr2HqcGd
            source_type: api_record
            title: 中国历代人物传记资料库：王舒綸（CBDB 58431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58431&o=json
            external_identifier: CBDB:58431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TeOUBransieu4xouTSN0R4
        subject_person_id: p_KnCP9KH6TPFyDP6s1V9fGB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6cZnuDEZ8DPpLq5d1gkmkR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FjFyCs2QrUp_q88Nig9zg0
          claim_id: c_TeOUBransieu4xouTSN0R4
          source_id: s_W2kfTGTE4Lcvvd4PBXyakA
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1683：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_W2kfTGTE4Lcvvd4PBXyakA
            source_type: api_record
            title: 中国历代人物传记资料库：王豫芳（CBDB 517027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517027&o=json
            external_identifier: CBDB:517027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6cZnuDEZ8DPpLq5d1gkmkR
        status: active
        display_name: 王豫芳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舒綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舒綸（卒于1853年），清人物。中国历代人物传记资料库（CBDB）以人物编号 58431 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 1853年 | accepted |
| name.primary | 王舒綸 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6cZnuDEZ8DPpLq5d1gkmkR | 王豫芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舒綸（CBDB 58431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58431&o=json)
- [中国历代人物传记资料库：王豫芳（CBDB 517027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517027&o=json)

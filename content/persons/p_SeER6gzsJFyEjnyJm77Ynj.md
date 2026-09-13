---
schema: wang-person/v1
id: p_SeER6gzsJFyEjnyJm77Ynj
status: active
merged_into: null
display_name: 王有問
cbdb_id: 261514
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c6v1tZercucsh8Hy5HVhLV
        subject_person_id: p_SeER6gzsJFyEjnyJm77Ynj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有問，明人物。景泰五年進士，籍贯平夷長官司。（中国历代人物传记资料库 CBDB 261514）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EqJXLM1kaVwhT33zv6Rfeg
          claim_id: c_c6v1tZercucsh8Hy5HVhLV
          source_id: s_xaERodaQjWqR4yU72Pu8xf
          stance: supports
          locator: CBDB:261514
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xaERodaQjWqR4yU72Pu8xf
            source_type: api_record
            title: 中国历代人物传记资料库：王有問（CBDB 261514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261514&o=json
            external_identifier: CBDB:261514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UBgvA1AYizRb3Gqka7auQ6
        subject_person_id: p_SeER6gzsJFyEjnyJm77Ynj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GF9Yf2jAdHzTDXBHcLAh4M
          claim_id: c_UBgvA1AYizRb3Gqka7auQ6
          source_id: s_xaERodaQjWqR4yU72Pu8xf
          stance: supports
          locator: CBDB:261514
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PZHhFeyFCfKk04JMfcWWQP
        subject_person_id: p_SeER6gzsJFyEjnyJm77Ynj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TRO7EtvFQMlgfnvJ_yenN9
          claim_id: c_PZHhFeyFCfKk04JMfcWWQP
          source_id: s_HNnvggNwswDJGWDv9EXqk2
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HNnvggNwswDJGWDv9EXqk2
            source_type: api_record
            title: 中国历代人物传记资料库：王常（CBDB 198354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198354&o=json
            external_identifier: CBDB:198354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.482Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_99gNXAHSy7CHUSg6MDVZmM
        status: active
        display_name: 王常
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王有問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王有問，明人物。景泰五年進士，籍贯平夷長官司。（中国历代人物传记资料库 CBDB 261514） | accepted |
| name.primary | 王有問 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_99gNXAHSy7CHUSg6MDVZmM | 王常 | accepted |

## 外部来源

- [中国历代人物传记资料库：王常（CBDB 198354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198354&o=json)
- [中国历代人物传记资料库：王有問（CBDB 261514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261514&o=json)

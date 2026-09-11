---
schema: wang-person/v1
id: p_ZGHd7P3eMyCmTX6S6iKN2h
status: active
merged_into: null
display_name: 王兀愛
cbdb_id: 101025
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YQDPTiiUmSfe87zHaXGxhw
        subject_person_id: p_ZGHd7P3eMyCmTX6S6iKN2h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兀愛，元人物。中国历代人物传记资料库（CBDB）以人物编号 101025 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_h10HfFs5nsUaKhv6nJ5E4P
          claim_id: c_YQDPTiiUmSfe87zHaXGxhw
          source_id: s_3K9zUBefWFLXCts8mGvJkp
          stance: supports
          locator: CBDB:101025
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3K9zUBefWFLXCts8mGvJkp
            source_type: api_record
            title: 中国历代人物传记资料库：王兀愛（CBDB 101025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101025&o=json
            external_identifier: CBDB:101025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ad7m7eku5Qqp8S3A5z3584
        subject_person_id: p_ZGHd7P3eMyCmTX6S6iKN2h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兀愛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6YsB1XHTKeR1pTxqFAmPWL
          claim_id: c_Ad7m7eku5Qqp8S3A5z3584
          source_id: s_3K9zUBefWFLXCts8mGvJkp
          stance: supports
          locator: CBDB:101025
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 元
          source:
            id: s_3K9zUBefWFLXCts8mGvJkp
            source_type: api_record
            title: 中国历代人物传记资料库：王兀愛（CBDB 101025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101025&o=json
            external_identifier: CBDB:101025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q-iUpX6Qtcuvi3ipTINX52
        subject_person_id: p_2NMYzKK7wTac2gL33PTAn5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZGHd7P3eMyCmTX6S6iKN2h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WxxCJW2FhEYEsjBbnt2w5o
          claim_id: c_q-iUpX6Qtcuvi3ipTINX52
          source_id: s_3K9zUBefWFLXCts8mGvJkp
          stance: supports
          locator: 元人傳記資料索引，855：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2NMYzKK7wTac2gL33PTAn5
        status: active
        display_name: 王綧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王兀愛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王兀愛，元人物。中国历代人物传记资料库（CBDB）以人物编号 101025 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王兀愛 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2NMYzKK7wTac2gL33PTAn5 | 王綧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王兀愛（CBDB 101025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101025&o=json)

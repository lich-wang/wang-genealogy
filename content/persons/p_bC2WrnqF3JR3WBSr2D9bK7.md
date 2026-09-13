---
schema: wang-person/v1
id: p_bC2WrnqF3JR3WBSr2D9bK7
status: active
merged_into: null
display_name: 王䢼
cbdb_id: 186850
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fMHqL3a6fireZYyoH1UatD
        subject_person_id: p_bC2WrnqF3JR3WBSr2D9bK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䢼（卒于959年），五代人物。籍贯曲陽。（中国历代人物传记资料库 CBDB 186850）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GP1d4VqezvMcL0EWobiF8E
          claim_id: c_fMHqL3a6fireZYyoH1UatD
          source_id: s_x9pRaw5T9kUaXAZ7tcuv4a
          stance: supports
          locator: CBDB:186850
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_x9pRaw5T9kUaXAZ7tcuv4a
            source_type: api_record
            title: 中国历代人物传记资料库：王䢼（CBDB 186850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186850&o=json
            external_identifier: CBDB:186850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vQwE7mQw5eh4Xw8JJ33MQM
        subject_person_id: p_bC2WrnqF3JR3WBSr2D9bK7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 959年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0959-01-01
            latest: 0959-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_18VLM6BsNgsZMivy8MPcKV
          claim_id: c_vQwE7mQw5eh4Xw8JJ33MQM
          source_id: s_x9pRaw5T9kUaXAZ7tcuv4a
          stance: supports
          locator: CBDB:186850
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 959
          source:
            id: s_x9pRaw5T9kUaXAZ7tcuv4a
            source_type: api_record
            title: 中国历代人物传记资料库：王䢼（CBDB 186850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186850&o=json
            external_identifier: CBDB:186850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9C1aFLEhTnbSXVAJUey3yp
        subject_person_id: p_bC2WrnqF3JR3WBSr2D9bK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王䢼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1EHMQDzajWRhThtpmvS9Jo
          claim_id: c_9C1aFLEhTnbSXVAJUey3yp
          source_id: s_x9pRaw5T9kUaXAZ7tcuv4a
          stance: supports
          locator: CBDB:186850
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 959
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_98XBHG8FeNwzTQu2oIgAsi
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bC2WrnqF3JR3WBSr2D9bK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6w-zNf2XxdevSjUX7tDBMO
          claim_id: c_98XBHG8FeNwzTQu2oIgAsi
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DUzV7KbT9MziCZ4BqcdavQ
            source_type: api_record
            title: 中国历代人物传记资料库：王處直（CBDB 144827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json
            external_identifier: CBDB:144827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4gNLMaQqWEd6Tcr2zT2brF
        status: active
        display_name: 王處直
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王䢼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王䢼（卒于959年），五代人物。籍贯曲陽。（中国历代人物传记资料库 CBDB 186850） | accepted |
| death.date | 959年 | accepted |
| name.primary | 王䢼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4gNLMaQqWEd6Tcr2zT2brF | 王處直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處直（CBDB 144827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json)
- [中国历代人物传记资料库：王䢼（CBDB 186850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186850&o=json)

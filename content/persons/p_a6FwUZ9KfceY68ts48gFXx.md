---
schema: wang-person/v1
id: p_a6FwUZ9KfceY68ts48gFXx
status: active
merged_into: null
display_name: 王錦繡
cbdb_id: 58630
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LzpsCq6N5NsL4ZK24DPWES
        subject_person_id: p_a6FwUZ9KfceY68ts48gFXx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦繡（卒于1853年），清人物。籍贯馬平，曾任協副將、營參將、營都司。（中国历代人物传记资料库 CBDB 58630）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_S_c3rP3wsgnKhTZdqJL-pK
          claim_id: c_LzpsCq6N5NsL4ZK24DPWES
          source_id: s_6HZ4GospCCVDfz1VrjpR7Y
          stance: supports
          locator: CBDB:58630
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6HZ4GospCCVDfz1VrjpR7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王錦繡（CBDB 58630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58630&o=json
            external_identifier: CBDB:58630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nQzW7G7oWS5Cp885ncuW7K
        subject_person_id: p_a6FwUZ9KfceY68ts48gFXx
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
        - id: cs_SisYPAgu43Q3ETc6iWNWur
          claim_id: c_nQzW7G7oWS5Cp885ncuW7K
          source_id: s_6HZ4GospCCVDfz1VrjpR7Y
          stance: supports
          locator: CBDB:58630
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1853
          source:
            id: s_6HZ4GospCCVDfz1VrjpR7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王錦繡（CBDB 58630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58630&o=json
            external_identifier: CBDB:58630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tFgc1CQKQWGXVXUuPzuzga
        subject_person_id: p_a6FwUZ9KfceY68ts48gFXx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦繡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Uq7wEUNmbdhPYrE6qYT1CK
          claim_id: c_tFgc1CQKQWGXVXUuPzuzga
          source_id: s_6HZ4GospCCVDfz1VrjpR7Y
          stance: supports
          locator: CBDB:58630
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1-100）｜历史性依据：CBDB 卒年 = 1853
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_BgGVuliF0cyVwblTeRVBAD
        subject_person_id: p_a6FwUZ9KfceY68ts48gFXx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPJ4doSTnrjoY9EGtNdvvR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fPmiScVPUk74M7kK8IUEPc
          claim_id: c_BgGVuliF0cyVwblTeRVBAD
          source_id: s_6HZ4GospCCVDfz1VrjpR7Y
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1892：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6HZ4GospCCVDfz1VrjpR7Y
            source_type: api_record
            title: 中国历代人物传记资料库：王錦繡（CBDB 58630）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58630&o=json
            external_identifier: CBDB:58630
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_wPJ4doSTnrjoY9EGtNdvvR
        status: active
        display_name: 王崑山
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錦繡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王錦繡（卒于1853年），清人物。籍贯馬平，曾任協副將、營參將、營都司。（中国历代人物传记资料库 CBDB 58630） | accepted |
| death.date | 1853年 | accepted |
| name.primary | 王錦繡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wPJ4doSTnrjoY9EGtNdvvR | 王崑山 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦繡（CBDB 58630）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58630&o=json)

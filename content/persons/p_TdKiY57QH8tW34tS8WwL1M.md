---
schema: wang-person/v1
id: p_TdKiY57QH8tW34tS8WwL1M
status: active
merged_into: null
display_name: 王訅
cbdb_id: 157639
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iub1b9r3WKTubVxTSfCEXP
        subject_person_id: p_TdKiY57QH8tW34tS8WwL1M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訅，唐人物。籍贯鄂州。（中国历代人物传记资料库 CBDB 157639）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2zs6l-6zNZmb214BgPnjyV
          claim_id: c_iub1b9r3WKTubVxTSfCEXP
          source_id: s_4e5uCH6jJzHK5q2b8vN31d
          stance: supports
          locator: CBDB:157639
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4e5uCH6jJzHK5q2b8vN31d
            source_type: api_record
            title: 中国历代人物传记资料库：王訅（CBDB 157639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157639&o=json
            external_identifier: CBDB:157639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AEmTrrPDDU6KqaxSVdChWS
        subject_person_id: p_TdKiY57QH8tW34tS8WwL1M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5RaCwsaXbxoQcR5SgYN6mA
          claim_id: c_AEmTrrPDDU6KqaxSVdChWS
          source_id: s_4e5uCH6jJzHK5q2b8vN31d
          stance: supports
          locator: CBDB:157639
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_594JdO1cuZxxA_b8pbYFIj
        subject_person_id: p_kW6BHpFnPbBsA8JbJBRAGy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TdKiY57QH8tW34tS8WwL1M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7stFyOSQaLhH5ZUNJhSc5E
          claim_id: c_594JdO1cuZxxA_b8pbYFIj
          source_id: s_4e5uCH6jJzHK5q2b8vN31d
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 15：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4e5uCH6jJzHK5q2b8vN31d
            source_type: api_record
            title: 中国历代人物传记资料库：王訅（CBDB 157639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157639&o=json
            external_identifier: CBDB:157639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_kW6BHpFnPbBsA8JbJBRAGy
        status: active
        display_name: 王師正
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王訅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王訅，唐人物。籍贯鄂州。（中国历代人物传记资料库 CBDB 157639） | accepted |
| name.primary | 王訅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kW6BHpFnPbBsA8JbJBRAGy | 王師正 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訅（CBDB 157639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157639&o=json)

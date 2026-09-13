---
schema: wang-person/v1
id: p_aaXCcqzX726kRnD1bUf93P
status: merged
merged_into: p_cGRfNcadJhvW1K3GcfaQqB
display_name: 鍾琰
revision: 3
cbdb_id: 134964
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RvSntyqSN7q6ynJD5NbP1f
        subject_person_id: p_aaXCcqzX726kRnD1bUf93P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鍾琰，史料所见人物。本项目依据《中国历代人物传记资料库：鍾琰（CBDB 134964）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iz1CBAri2l2L2vVJlZ41bi
          claim_id: c_RvSntyqSN7q6ynJD5NbP1f
          source_id: s_tzee7YeY1elGRyd1BOAfH6
          stance: supports
          locator: CBDB:134964
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_tzee7YeY1elGRyd1BOAfH6
            source_type: api_record
            title: 中国历代人物传记资料库：鍾琰（CBDB 134964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134964&o=json
            external_identifier: CBDB:134964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9-mE7DZvoN8JhsRvo5Cedg
        subject_person_id: p_aaXCcqzX726kRnD1bUf93P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鍾琰
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LDjanLOk0C8R6zD9kmHDMs
          claim_id: c_9-mE7DZvoN8JhsRvo5Cedg
          source_id: s_tzee7YeY1elGRyd1BOAfH6
          stance: supports
          locator: CBDB:134964
          quotation: null
          interpretation_note: CBDB 明确记录的王渾配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 鍾琰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 鍾琰，史料所见人物。本项目依据《中国历代人物传记资料库：鍾琰（CBDB 134964）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 鍾琰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：鍾琰（CBDB 134964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134964&o=json)

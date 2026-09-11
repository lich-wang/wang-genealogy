---
schema: wang-person/v1
id: p_yQ6KJdc2EBDEjyMiLzJWbv
status: active
merged_into: null
display_name: 王朝士
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VDtxeyk4NuvvSiWbEDmdCP
        subject_person_id: p_yQ6KJdc2EBDEjyMiLzJWbv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝士
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WEnaMUugjNWBLhhRndD7G6
          claim_id: c_VDtxeyk4NuvvSiWbEDmdCP
          source_id: s_1JDi7VWggAJT1HNQCQVH5Y
          stance: supports
          locator: CBDB:638613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638613）
          source: &a1
            id: s_1JDi7VWggAJT1HNQCQVH5Y
            source_type: api_record
            title: 中国历代人物传记资料库：王朝士（CBDB 638613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638613&o=json
            external_identifier: CBDB:638613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hsTq9JMFj652Sbrg5v8qeT
        subject_person_id: p_yQ6KJdc2EBDEjyMiLzJWbv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝士，清人物。籍贯武邑，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638613）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2S_qh_oMhs2zo4jnxpTtZf
          claim_id: c_hsTq9JMFj652Sbrg5v8qeT
          source_id: s_1JDi7VWggAJT1HNQCQVH5Y
          stance: supports
          locator: CBDB:638613
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王朝士

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝士 | accepted |
| bio.summary | 王朝士，清人物。籍贯武邑，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝士（CBDB 638613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638613&o=json)

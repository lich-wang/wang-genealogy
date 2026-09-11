---
schema: wang-person/v1
id: p_TSH6pmB6RgU9jcXNeQLsG9
status: active
merged_into: null
display_name: 張某
revision: 1
cbdb_id: 147459
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NON9sEwbUkewNwU8VHFXsu
        subject_person_id: p_TSH6pmB6RgU9jcXNeQLsG9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張某
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_453k7mJlN3mhQSn6FPYNtK
          claim_id: c_NON9sEwbUkewNwU8VHFXsu
          source_id: s_3zq5sJwAGOpQHYMfDPN9w5
          stance: supports
          locator: CBDB:147459
          quotation: null
          interpretation_note: CBDB 明确记录的王媛配偶
          source: &a1
            id: s_3zq5sJwAGOpQHYMfDPN9w5
            source_type: api_record
            title: 中国历代人物传记资料库：張某(王媛夫)（CBDB 147459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147459&o=json
            external_identifier: CBDB:147459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2pDery46WK-FCbzq08Lvs-
        subject_person_id: p_uP1bD9Zx7E65bhCATKc6Cp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TSH6pmB6RgU9jcXNeQLsG9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RUHan-0vRxyLXgo3fPGYR6
          claim_id: c_2pDery46WK-FCbzq08Lvs-
          source_id: s_3zq5sJwAGOpQHYMfDPN9w5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 74：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uP1bD9Zx7E65bhCATKc6Cp
        status: active
        display_name: 王媛
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 張某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_uP1bD9Zx7E65bhCATKc6Cp | 王媛 | accepted |

## 外部来源

- [中国历代人物传记资料库：張某(王媛夫)（CBDB 147459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147459&o=json)

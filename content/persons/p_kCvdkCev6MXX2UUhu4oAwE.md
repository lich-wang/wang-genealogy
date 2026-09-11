---
schema: wang-person/v1
id: p_kCvdkCev6MXX2UUhu4oAwE
status: active
merged_into: null
display_name: 乙婁氏
revision: 1
cbdb_id: 149838
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_-8eTMPLFKTIMDKGpj8akmA
        subject_person_id: p_kCvdkCev6MXX2UUhu4oAwE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 乙婁氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kb3TTxvnWxLzazxo6zTZIO
          claim_id: c_-8eTMPLFKTIMDKGpj8akmA
          source_id: s_LmNy77ur_R5NGdbfm0VdVt
          stance: supports
          locator: CBDB:149838
          quotation: null
          interpretation_note: CBDB 明确记录的王思訥配偶
          source: &a1
            id: s_LmNy77ur_R5NGdbfm0VdVt
            source_type: api_record
            title: 中国历代人物传记资料库：乙婁氏(王思訥妻)（CBDB 149838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149838&o=json
            external_identifier: CBDB:149838
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
        id: c_Quh7SQE7TjiLIYYKMPEtlo
        subject_person_id: p_96KQuq1ZTf34yAWUr3nQms
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kCvdkCev6MXX2UUhu4oAwE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jAxI5IFbe7szBm7KT3hXuV
          claim_id: c_Quh7SQE7TjiLIYYKMPEtlo
          source_id: s_LmNy77ur_R5NGdbfm0VdVt
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tiancewansui 6：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_96KQuq1ZTf34yAWUr3nQms
        status: active
        display_name: 王思訥
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 乙婁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 乙婁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_96KQuq1ZTf34yAWUr3nQms | 王思訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：乙婁氏(王思訥妻)（CBDB 149838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149838&o=json)

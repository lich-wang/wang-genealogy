---
schema: wang-person/v1
id: p_H8j7bhrwDREUoxhxsKxCHJ
status: active
merged_into: null
display_name: 王逵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7G1odDHHzxvD2GchVR1PD4
        subject_person_id: p_H8j7bhrwDREUoxhxsKxCHJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7rEeNAsomutPeLPD1fKbnx
          claim_id: c_7G1odDHHzxvD2GchVR1PD4
          source_id: s_ucVEzC3xFd77izjJkWDDYH
          stance: supports
          locator: CBDB:155481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155481）
          source: &a1
            id: s_ucVEzC3xFd77izjJkWDDYH
            source_type: api_record
            title: 中国历代人物传记资料库：王逵（CBDB 155481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155481&o=json
            external_identifier: CBDB:155481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hJkKNUpcznMfEAF51GhLpM
        subject_person_id: p_H8j7bhrwDREUoxhxsKxCHJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EgqQXLC8jzNyjBiCvMRLEH
          claim_id: c_hJkKNUpcznMfEAF51GhLpM
          source_id: s_ucVEzC3xFd77izjJkWDDYH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vGqxlqCddT0F4KKdyMNeas
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H8j7bhrwDREUoxhxsKxCHJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SXaLZ2wO6jJ3ImH8_0JTR4
          claim_id: c_vGqxlqCddT0F4KKdyMNeas
          source_id: s_ucVEzC3xFd77izjJkWDDYH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 21：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sSM4LF9AAPNVQ51D7otD4r
        status: active
        display_name: 王郅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王逵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逵 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sSM4LF9AAPNVQ51D7otD4r | 王郅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逵（CBDB 155481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155481&o=json)

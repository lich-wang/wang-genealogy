---
schema: wang-person/v1
id: p_kNvoZFnJm2KQZhvhLXYs7R
status: active
merged_into: null
display_name: 王惟中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GXJ5CMHzdgjGNr8xzhE67e
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WHahhg6MHe5LWF1v45apeo
          claim_id: c_GXJ5CMHzdgjGNr8xzhE67e
          source_id: s_JdxuK8SMW5Cg89USVQp6Rs
          stance: supports
          locator: CBDB:228268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228268）
          source: &a1
            id: s_JdxuK8SMW5Cg89USVQp6Rs
            source_type: api_record
            title: 中国历代人物传记资料库：王惟中（CBDB 228268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228268&o=json
            external_identifier: CBDB:228268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8wMbnQHKWUrkLRQpcHN16c
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aekoVbtQ2cJ7egDgypkiQu
          claim_id: c_8wMbnQHKWUrkLRQpcHN16c
          source_id: s_JdxuK8SMW5Cg89USVQp6Rs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_p0tj7EIMohCg0e_5rHN1FV
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYhSm1gQZ0-d0_55qLU7r8
          claim_id: c_p0tj7EIMohCg0e_5rHN1FV
          source_id: s_JdxuK8SMW5Cg89USVQp6Rs
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MWFGy9uHg9NsSwK8c42QRv
        status: active
        display_name: 王同休
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟中 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_MWFGy9uHg9NsSwK8c42QRv | 王同休 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟中（CBDB 228268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228268&o=json)

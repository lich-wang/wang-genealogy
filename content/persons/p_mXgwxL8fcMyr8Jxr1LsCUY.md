---
schema: wang-person/v1
id: p_mXgwxL8fcMyr8Jxr1LsCUY
status: active
merged_into: null
display_name: 王浦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5YS5hfG17kMD9L9yqTySLt
        subject_person_id: p_mXgwxL8fcMyr8Jxr1LsCUY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3DSmmv1qTMnaBQswhRmAQf
          claim_id: c_5YS5hfG17kMD9L9yqTySLt
          source_id: s_7bNLTbejo5C1F3MA7V8fBd
          stance: supports
          locator: CBDB:122408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122408）
          source: &a1
            id: s_7bNLTbejo5C1F3MA7V8fBd
            source_type: api_record
            title: 中国历代人物传记资料库：王浦（CBDB 122408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122408&o=json
            external_identifier: CBDB:122408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.925Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6jNsBYoQZC29ezJV7WjufP
        subject_person_id: p_mXgwxL8fcMyr8Jxr1LsCUY
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
        - id: cs_ftK9nLQKDA4eC23MDGLp9a
          claim_id: c_6jNsBYoQZC29ezJV7WjufP
          source_id: s_7bNLTbejo5C1F3MA7V8fBd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GUGI1PABErO5hYB_4TkZQL
        subject_person_id: p_mXgwxL8fcMyr8Jxr1LsCUY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Fa3KipTtKM2ehWG8Rsv2Ti
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q_B8PuUIT4aA_Yu0Xp05QP
          claim_id: c_GUGI1PABErO5hYB_4TkZQL
          source_id: s_XAV8nB7lwnHjYvknMb4My2
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3380：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XAV8nB7lwnHjYvknMb4My2
            source_type: api_record
            title: 中国历代人物传记资料库：賀綠（CBDB 122407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122407&o=json
            external_identifier: CBDB:122407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Fa3KipTtKM2ehWG8Rsv2Ti
        status: active
        display_name: 賀綠
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王浦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Fa3KipTtKM2ehWG8Rsv2Ti | 賀綠 | accepted |

## 外部来源

- [中国历代人物传记资料库：賀綠（CBDB 122407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122407&o=json)
- [中国历代人物传记资料库：王浦（CBDB 122408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122408&o=json)

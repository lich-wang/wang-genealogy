---
schema: wang-person/v1
id: p_pXPVcMeJshC4SvpfKfYh6y
status: active
merged_into: null
display_name: 王濓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EvzSXyMXDuAsGzBVF6f2Ra
        subject_person_id: p_pXPVcMeJshC4SvpfKfYh6y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MMoDyNRW22SnK9VMRMPAXv
          claim_id: c_EvzSXyMXDuAsGzBVF6f2Ra
          source_id: s_M6xL38jWF83Tbd6XZEvq38
          stance: supports
          locator: CBDB:695531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695531）
          source: &a1
            id: s_M6xL38jWF83Tbd6XZEvq38
            source_type: api_record
            title: 中国历代人物传记资料库：王濓（CBDB 695531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695531&o=json
            external_identifier: CBDB:695531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LtN4NHGVsEKYgZKjQeY5xP
        subject_person_id: p_pXPVcMeJshC4SvpfKfYh6y
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
        - id: cs_PkZTpL4v6gc8kjWi8fTUWS
          claim_id: c_LtN4NHGVsEKYgZKjQeY5xP
          source_id: s_M6xL38jWF83Tbd6XZEvq38
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
        id: c_QxWbuqr_9SUCFvFcZ8UBtk
        subject_person_id: p_pXPVcMeJshC4SvpfKfYh6y
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kW5VqB92BM2UPYW9zgJ36o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Abf-QYm8QWyTb6CxuLHMLn
          claim_id: c_QxWbuqr_9SUCFvFcZ8UBtk
          source_id: s_c9M0Jj5KwCokx16qjzCm7u
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294154：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_c9M0Jj5KwCokx16qjzCm7u
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(王濓妻)（CBDB 695530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695530&o=json
            external_identifier: CBDB:695530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kW5VqB92BM2UPYW9zgJ36o
        status: active
        display_name: 許氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王濓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kW5VqB92BM2UPYW9zgJ36o | 許氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濓（CBDB 695531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695531&o=json)
- [中国历代人物传记资料库：許氏(王濓妻)（CBDB 695530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695530&o=json)

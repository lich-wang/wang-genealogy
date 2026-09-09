---
schema: wang-person/v1
id: p_jTG4g5xLzbJGWgvWMaVQeX
status: active
merged_into: null
display_name: 王慶存
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DLnEVoJVvnBLcWsAGhrhom
        subject_person_id: p_jTG4g5xLzbJGWgvWMaVQeX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶存
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_78qbXNE594GM6SMCM3VT8z
          claim_id: c_DLnEVoJVvnBLcWsAGhrhom
          source_id: s_AMr41Bt1emjNQAK2p2muVT
          stance: supports
          locator: CBDB:189494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189494）
          source: &a1
            id: s_AMr41Bt1emjNQAK2p2muVT
            source_type: api_record
            title: 中国历代人物传记资料库：王慶存（CBDB 189494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189494&o=json
            external_identifier: CBDB:189494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DHrGTd82b4XpoPe2akun5i
        subject_person_id: p_jTG4g5xLzbJGWgvWMaVQeX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 870年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cuZiUSuBPymjdK2on7zofR
          claim_id: c_DHrGTd82b4XpoPe2akun5i
          source_id: s_AMr41Bt1emjNQAK2p2muVT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vfC8P6xJ6J4RQAC9MvZzsR
        subject_person_id: p_jTG4g5xLzbJGWgvWMaVQeX
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
        - id: cs_4vks7q1YEhxfoexk6DsJAZ
          claim_id: c_vfC8P6xJ6J4RQAC9MvZzsR
          source_id: s_AMr41Bt1emjNQAK2p2muVT
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
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶存

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶存 | accepted |
| death.date | 870年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶存（CBDB 189494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189494&o=json)

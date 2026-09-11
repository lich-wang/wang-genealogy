---
schema: wang-person/v1
id: p_6Ed3HaMSzFY5mCk231e1KC
status: active
merged_into: null
display_name: 王子麟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o26Ltf6oM38vWnjxgVs2XL
        subject_person_id: p_6Ed3HaMSzFY5mCk231e1KC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cMLgR35Mr42ZjS9D3pA9rw
          claim_id: c_o26Ltf6oM38vWnjxgVs2XL
          source_id: s_35JFKhC7B9WWpbqPc5QvEr
          stance: supports
          locator: CBDB:140337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140337）
          source: &a1
            id: s_35JFKhC7B9WWpbqPc5QvEr
            source_type: api_record
            title: 中国历代人物传记资料库：王子麟（CBDB 140337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140337&o=json
            external_identifier: CBDB:140337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xkEDRUZQUhXEKLZjmDnPXG
        subject_person_id: p_6Ed3HaMSzFY5mCk231e1KC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 660年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xY6WFqaHKG6kPL2E1V12R3
          claim_id: c_xkEDRUZQUhXEKLZjmDnPXG
          source_id: s_35JFKhC7B9WWpbqPc5QvEr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KS8rE16dgnLr9XrgvtMtxM
        subject_person_id: p_6Ed3HaMSzFY5mCk231e1KC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 717年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BGi65Qs14DKxnHhSG4uCWx
          claim_id: c_KS8rE16dgnLr9XrgvtMtxM
          source_id: s_35JFKhC7B9WWpbqPc5QvEr
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
        id: c_ZH2fyuLgQe2RWYN6Xz1rBB
        subject_person_id: p_6Ed3HaMSzFY5mCk231e1KC
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
        - id: cs_ozUY6iACsTGrfskj6wQzXQ
          claim_id: c_ZH2fyuLgQe2RWYN6Xz1rBB
          source_id: s_35JFKhC7B9WWpbqPc5QvEr
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
        id: c_1EhrSX6M2Vo3kWhElWlrZR
        subject_person_id: p_ZYfU6f6WCfWM3Z9QvkLsmh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6Ed3HaMSzFY5mCk231e1KC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z0kxKJzVnNft3s9GxP9za9
          claim_id: c_1EhrSX6M2Vo3kWhElWlrZR
          source_id: s_35JFKhC7B9WWpbqPc5QvEr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 62：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZYfU6f6WCfWM3Z9QvkLsmh
        status: active
        display_name: 王元綱
        merged_into_person_id: null
  children:
    - claim:
        id: c_f45d7Z1bIBVeCvy1Gp2FH5
        subject_person_id: p_6Ed3HaMSzFY5mCk231e1KC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XWEaqMrZaQqSFFSScpR4sc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9EYkjQghE10vnp0vDHtot5
          claim_id: c_f45d7Z1bIBVeCvy1Gp2FH5
          source_id: s_35JFKhC7B9WWpbqPc5QvEr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 62：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XWEaqMrZaQqSFFSScpR4sc
        status: active
        display_name: 王冲之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gcG06A2k-YZxSVY2uN0PVm
        subject_person_id: p_6Ed3HaMSzFY5mCk231e1KC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CufZGMw5CUxT3ebd8Md4Q3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_16qTC6_go5N-j4Vb7k2ml-
          claim_id: c_gcG06A2k-YZxSVY2uN0PVm
          source_id: s_oHqOpoJlsFMCs8o41suOfA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 62：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oHqOpoJlsFMCs8o41suOfA
            source_type: api_record
            title: 中国历代人物传记资料库：馮氏(王子麟妻)（CBDB 151317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151317&o=json
            external_identifier: CBDB:151317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CufZGMw5CUxT3ebd8Md4Q3
        status: active
        display_name: 馮氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王子麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子麟 | accepted |
| birth.date | 660年 | accepted |
| death.date | 717年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZYfU6f6WCfWM3Z9QvkLsmh | 王元綱 | accepted |
| children | p_XWEaqMrZaQqSFFSScpR4sc | 王冲之 | accepted |
| spouses | p_CufZGMw5CUxT3ebd8Md4Q3 | 馮氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：馮氏(王子麟妻)（CBDB 151317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151317&o=json)
- [中国历代人物传记资料库：王子麟（CBDB 140337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140337&o=json)

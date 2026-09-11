---
schema: wang-person/v1
id: p_RUxQjxNeVEChHyh4xeFZaM
status: active
merged_into: null
display_name: 汝氏
revision: 1
cbdb_id: 704003
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aUhsk-pQlYxaFEmwbntS2l
        subject_person_id: p_RUxQjxNeVEChHyh4xeFZaM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汝氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 704003）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qf4yltfUyQmyqTM6KWRBma
          claim_id: c_aUhsk-pQlYxaFEmwbntS2l
          source_id: s_VZMHo8dGZpkTgRPMLuuqh5
          stance: supports
          locator: CBDB:704003
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VZMHo8dGZpkTgRPMLuuqh5
            source_type: api_record
            title: 中国历代人物传记资料库：汝氏(王蘭亭妻)（CBDB 704003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=704003&o=json
            external_identifier: CBDB:704003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HBdRRfdKKGNmrmtU4k1WOR
        subject_person_id: p_RUxQjxNeVEChHyh4xeFZaM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汝氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F-SsveN6vPSWnxWl58KfKL
          claim_id: c_HBdRRfdKKGNmrmtU4k1WOR
          source_id: s_VZMHo8dGZpkTgRPMLuuqh5
          stance: supports
          locator: CBDB:704003
          quotation: null
          interpretation_note: CBDB 明确记录的王蘭亭配偶
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
        id: c_Oe7ez-ymxCILoKPDJkm-j9
        subject_person_id: p_jMpRnqarn5QmNUEf92wbHJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_RUxQjxNeVEChHyh4xeFZaM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5pPxKhezWKAkduQwe_hmb6
          claim_id: c_Oe7ez-ymxCILoKPDJkm-j9
          source_id: s_VZMHo8dGZpkTgRPMLuuqh5
          stance: supports
          locator: 平陰縣志，lgid=630890：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jMpRnqarn5QmNUEf92wbHJ
        status: active
        display_name: 王蘭亭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 汝氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 汝氏，清人物。籍贯平陰。（中国历代人物传记资料库 CBDB 704003） | accepted |
| name.primary | 汝氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_jMpRnqarn5QmNUEf92wbHJ | 王蘭亭 | accepted |

## 外部来源

- [中国历代人物传记资料库：汝氏(王蘭亭妻)（CBDB 704003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=704003&o=json)

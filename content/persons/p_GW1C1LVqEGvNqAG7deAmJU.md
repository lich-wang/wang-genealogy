---
schema: wang-person/v1
id: p_GW1C1LVqEGvNqAG7deAmJU
status: active
merged_into: null
display_name: 王元弼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_31Jd247Wut9MSY6cksBYhs
        subject_person_id: p_GW1C1LVqEGvNqAG7deAmJU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gGUnmhMd1a93ha7GhRC5Jc
          claim_id: c_31Jd247Wut9MSY6cksBYhs
          source_id: s_1aRbjhGjx65hejJDGAjg67
          stance: supports
          locator: CBDB:191271
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191271）
          source: &a1
            id: s_1aRbjhGjx65hejJDGAjg67
            source_type: api_record
            title: 中国历代人物传记资料库：王元弼（CBDB 191271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191271&o=json
            external_identifier: CBDB:191271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.357Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RgbuPBY7CHH2sAqMJvRb1d
        subject_person_id: p_GW1C1LVqEGvNqAG7deAmJU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 839年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G6dYdU9KMiFGsmhAfGLek4
          claim_id: c_RgbuPBY7CHH2sAqMJvRb1d
          source_id: s_1aRbjhGjx65hejJDGAjg67
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
        id: c_NftedMDtiTUQ6Qe1in3bNM
        subject_person_id: p_GW1C1LVqEGvNqAG7deAmJU
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
        - id: cs_L1wFCFrfKyQDs7duVtiQpb
          claim_id: c_NftedMDtiTUQ6Qe1in3bNM
          source_id: s_1aRbjhGjx65hejJDGAjg67
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
        id: c_yaDxf1keGSh0XZiCK1zWPf
        subject_person_id: p_P7GhwesJiVs4C1A4Nba7Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GW1C1LVqEGvNqAG7deAmJU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45tgq9y1RiW8Y1YKtaQrI_
          claim_id: c_yaDxf1keGSh0XZiCK1zWPf
          source_id: s_1aRbjhGjx65hejJDGAjg67
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P7GhwesJiVs4C1A4Nba7Jb
        status: active
        display_name: 王紹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元弼 | accepted |
| death.date | 839年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P7GhwesJiVs4C1A4Nba7Jb | 王紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元弼（CBDB 191271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191271&o=json)

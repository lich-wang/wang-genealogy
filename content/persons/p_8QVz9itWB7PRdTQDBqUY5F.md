---
schema: wang-person/v1
id: p_8QVz9itWB7PRdTQDBqUY5F
status: active
merged_into: null
display_name: 王公素
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XXfXmSFUPhWXrFGZ3UFySq
        subject_person_id: p_8QVz9itWB7PRdTQDBqUY5F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c2HRSdcJ3H9DFdEtWXEWkV
          claim_id: c_XXfXmSFUPhWXrFGZ3UFySq
          source_id: s_CFa8aNLKNE8juEBFe3rfNM
          stance: supports
          locator: CBDB:191744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191744）
          source: &a1
            id: s_CFa8aNLKNE8juEBFe3rfNM
            source_type: api_record
            title: 中国历代人物传记资料库：王公素（CBDB 191744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191744&o=json
            external_identifier: CBDB:191744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.377Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6uYManzFME33TXfqEoQqBc
        subject_person_id: p_8QVz9itWB7PRdTQDBqUY5F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 883年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CrbnM7B7DHWzPUgnnQC75w
          claim_id: c_6uYManzFME33TXfqEoQqBc
          source_id: s_CFa8aNLKNE8juEBFe3rfNM
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
        id: c_YQZd4HqwAB4E4fGCzfN6CZ
        subject_person_id: p_8QVz9itWB7PRdTQDBqUY5F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公素（卒于883年），唐人物。籍贯上黨，曾任未詳。（中国历代人物传记资料库 CBDB 191744）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ae924iBXBszUpStEloOVqk
          claim_id: c_YQZd4HqwAB4E4fGCzfN6CZ
          source_id: s_CFa8aNLKNE8juEBFe3rfNM
          stance: supports
          locator: CBDB:191744
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c-jypEtAA-JU0J5bcTDGy8
        subject_person_id: p_oDN8zXwLEiLaLbSQ6vv12L
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8QVz9itWB7PRdTQDBqUY5F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cog_qrGYzOlo1Oz6Ynh4qU
          claim_id: c_c-jypEtAA-JU0J5bcTDGy8
          source_id: s_CFa8aNLKNE8juEBFe3rfNM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oDN8zXwLEiLaLbSQ6vv12L
        status: active
        display_name: 王朝倩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公素 | accepted |
| death.date | 883年 | accepted |
| bio.summary | 王公素（卒于883年），唐人物。籍贯上黨，曾任未詳。（中国历代人物传记资料库 CBDB 191744） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oDN8zXwLEiLaLbSQ6vv12L | 王朝倩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公素（CBDB 191744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191744&o=json)

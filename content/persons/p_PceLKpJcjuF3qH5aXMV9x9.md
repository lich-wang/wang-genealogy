---
schema: wang-person/v1
id: p_PceLKpJcjuF3qH5aXMV9x9
status: active
merged_into: null
display_name: 王國悅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_63jPugiHZAfEda1edKtKnF
        subject_person_id: p_PceLKpJcjuF3qH5aXMV9x9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國悅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UJfPdPz4DP8HhqkkP9LTHn
          claim_id: c_63jPugiHZAfEda1edKtKnF
          source_id: s_M8T96wgjSGA4JjXv8K7zxW
          stance: supports
          locator: CBDB:189430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189430）
          source: &a1
            id: s_M8T96wgjSGA4JjXv8K7zxW
            source_type: api_record
            title: 中国历代人物传记资料库：王國悅（CBDB 189430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189430&o=json
            external_identifier: CBDB:189430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7CKEJwkSxCb6HXTT7MRSiE
        subject_person_id: p_PceLKpJcjuF3qH5aXMV9x9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 826年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jU6N1X5h1dgCiZ7yyy6t3q
          claim_id: c_7CKEJwkSxCb6HXTT7MRSiE
          source_id: s_M8T96wgjSGA4JjXv8K7zxW
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
        id: c_chnrGBBzzkYJ288QxgnQfy
        subject_person_id: p_PceLKpJcjuF3qH5aXMV9x9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國悅（卒于826年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 189430）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W0heLD83DBBIPM004Et3iw
          claim_id: c_chnrGBBzzkYJ288QxgnQfy
          source_id: s_M8T96wgjSGA4JjXv8K7zxW
          stance: supports
          locator: CBDB:189430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dLdyAqDTUUn5HMf53Oztwi
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PceLKpJcjuF3qH5aXMV9x9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-0LdM6n9GQ83dLD3UmfqGA
          claim_id: c_dLdyAqDTUUn5HMf53Oztwi
          source_id: s_M8T96wgjSGA4JjXv8K7zxW
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XLxs9xX4nF1yHAK9NTckvC
        status: active
        display_name: 王興滿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國悅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國悅 | accepted |
| death.date | 826年 | accepted |
| bio.summary | 王國悅（卒于826年），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 189430） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLxs9xX4nF1yHAK9NTckvC | 王興滿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國悅（CBDB 189430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189430&o=json)

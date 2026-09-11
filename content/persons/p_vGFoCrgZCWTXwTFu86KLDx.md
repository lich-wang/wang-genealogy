---
schema: wang-person/v1
id: p_vGFoCrgZCWTXwTFu86KLDx
status: active
merged_into: null
display_name: 王瑜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2sG65j5AoZDNY9ERhEAhBe
        subject_person_id: p_vGFoCrgZCWTXwTFu86KLDx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hRthB91Bji29HTQSHaLX5g
          claim_id: c_2sG65j5AoZDNY9ERhEAhBe
          source_id: s_2FxXhHqn874YRiFtDQvLMK
          stance: supports
          locator: CBDB:170219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（170219）
          source: &a1
            id: s_2FxXhHqn874YRiFtDQvLMK
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 170219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170219&o=json
            external_identifier: CBDB:170219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MtpYH2k6Dd7LP5R9NC48T9
        subject_person_id: p_vGFoCrgZCWTXwTFu86KLDx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 690年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PN8TwDgbuKRxxMhdn882M
          claim_id: c_MtpYH2k6Dd7LP5R9NC48T9
          source_id: s_2FxXhHqn874YRiFtDQvLMK
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
        id: c_Fe2gD8KTajbKcwACVd1o94
        subject_person_id: p_vGFoCrgZCWTXwTFu86KLDx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜（卒于690年），唐人物。籍贯臨渙，曾任縣令。（中国历代人物传记资料库 CBDB 170219）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zACeDZAuqC5BGPP_yv2oGm
          claim_id: c_Fe2gD8KTajbKcwACVd1o94
          source_id: s_2FxXhHqn874YRiFtDQvLMK
          stance: supports
          locator: CBDB:170219
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mtbS5z8CBUwFcDYbIdYaUP
        subject_person_id: p_vGFoCrgZCWTXwTFu86KLDx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UHyuFiNJ8n617D7P4wMsNq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ffaWpPF3qkQVnGOooWu56
          claim_id: c_mtbS5z8CBUwFcDYbIdYaUP
          source_id: s_P7QRP3oFDxZZdiowyGVCGX
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P7QRP3oFDxZZdiowyGVCGX
            source_type: api_record
            title: 中国历代人物传记资料库：王亞卿（CBDB 169730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169730&o=json
            external_identifier: CBDB:169730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UHyuFiNJ8n617D7P4wMsNq
        status: active
        display_name: 王亞卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| death.date | 690年 | accepted |
| bio.summary | 王瑜（卒于690年），唐人物。籍贯臨渙，曾任縣令。（中国历代人物传记资料库 CBDB 170219） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_UHyuFiNJ8n617D7P4wMsNq | 王亞卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亞卿（CBDB 169730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169730&o=json)
- [中国历代人物传记资料库：王瑜（CBDB 170219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170219&o=json)

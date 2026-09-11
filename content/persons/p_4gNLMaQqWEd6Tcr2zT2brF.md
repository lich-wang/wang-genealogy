---
schema: wang-person/v1
id: p_4gNLMaQqWEd6Tcr2zT2brF
status: active
merged_into: null
display_name: 王處直
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_21Vqd6EtqHMtNyQP1A7hU6
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EujW6yzC589a77VFmBDXWd
          claim_id: c_21Vqd6EtqHMtNyQP1A7hU6
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: CBDB:144827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144827）
          source: &a1
            id: s_DUzV7KbT9MziCZ4BqcdavQ
            source_type: api_record
            title: 中国历代人物传记资料库：王處直（CBDB 144827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json
            external_identifier: CBDB:144827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8QUNFnULH1kQKDfpa1RrqT
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 863年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XGe3cPypYyJJ19G4Wdaz18
          claim_id: c_8QUNFnULH1kQKDfpa1RrqT
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
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
        id: c_KEwk8Kx3PdwNj3gTR75KdL
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 923年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XFkeVYmGytbk1NPZBhMMdB
          claim_id: c_KEwk8Kx3PdwNj3gTR75KdL
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
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
        id: c_w12qwcJuy9xVLzy635mZeK
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處直（863年—923年），唐人物。籍贯曲陽，曾任節度使、太師、中書令。（中国历代人物传记资料库 CBDB 144827）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uObK_AuYOJmdfsvS6OgNLu
          claim_id: c_w12qwcJuy9xVLzy635mZeK
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: CBDB:144827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nze038Am_SaeW3AZJ5xsh7
        subject_person_id: p_ZpcYCX21cFGgpj8DaWwV25
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s_vT3Oq-ZwDGoa5PdeVZBM
          claim_id: c_nze038Am_SaeW3AZJ5xsh7
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZpcYCX21cFGgpj8DaWwV25
        status: active
        display_name: 王寮
        merged_into_person_id: null
  children:
    - claim:
        id: c_eOS0-rxQS2f4Unl2SFXUyA
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VoLzwtN4e2pofEFYkpZCMW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0zFh2KB0pl74e6bCUqRQlP
          claim_id: c_eOS0-rxQS2f4Unl2SFXUyA
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VoLzwtN4e2pofEFYkpZCMW
        status: active
        display_name: 王郁
        merged_into_person_id: null
    - claim:
        id: c_K21UP5vEsZ8AAWjyj92cby
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N13cHvEfUQLu2AU9JvS3xk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Ak5qusIObyhVx1HWSBwHr
          claim_id: c_K21UP5vEsZ8AAWjyj92cby
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N13cHvEfUQLu2AU9JvS3xk
        status: active
        display_name: 王都
        merged_into_person_id: null
    - claim:
        id: c_9Kr7clo84wdMK1tqpyHN20
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PYScCSBT9W5sFMGc1Pn1Hk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RKrA59A4Hy2fyLFv3t27OI
          claim_id: c_9Kr7clo84wdMK1tqpyHN20
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PYScCSBT9W5sFMGc1Pn1Hk
        status: active
        display_name: 王鄑
        merged_into_person_id: null
    - claim:
        id: c_MQbekgqsD1v-GkMv0CglNU
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gaRB6foh67PJ327C2wT8be
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9j4bkU9PMddF0GyMw3MPS
          claim_id: c_MQbekgqsD1v-GkMv0CglNU
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gaRB6foh67PJ327C2wT8be
        status: active
        display_name: 王郇
        merged_into_person_id: null
    - claim:
        id: c_NHBDYsTu29fZLaJ-aEZE47
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_APDFto73DvLobTPBETbBQG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DSfNdY4gkYhcbf7vdDJ9N8
          claim_id: c_NHBDYsTu29fZLaJ-aEZE47
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_APDFto73DvLobTPBETbBQG
        status: active
        display_name: 王邠
        merged_into_person_id: null
    - claim:
        id: c_98XBHG8FeNwzTQu2oIgAsi
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bC2WrnqF3JR3WBSr2D9bK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6w-zNf2XxdevSjUX7tDBMO
          claim_id: c_98XBHG8FeNwzTQu2oIgAsi
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bC2WrnqF3JR3WBSr2D9bK7
        status: active
        display_name: 王䢼
        merged_into_person_id: null
    - claim:
        id: c_1CS1HLJF3BOZVFUvtd2OjA
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Pr8Us7tH6onXE7FuCHg4D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CIEvlzP1ODgL7g_bYAdGKj
          claim_id: c_1CS1HLJF3BOZVFUvtd2OjA
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8Pr8Us7tH6onXE7FuCHg4D
        status: active
        display_name: 王郴
        merged_into_person_id: null
    - claim:
        id: c_9G6guEGTqZbvpp06gEP0Cb
        subject_person_id: p_4gNLMaQqWEd6Tcr2zT2brF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZQPEPxJWGSr6hcKCHjFpPL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MMxhXj47yhIqb51kKl5toU
          claim_id: c_9G6guEGTqZbvpp06gEP0Cb
          source_id: s_DUzV7KbT9MziCZ4BqcdavQ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZQPEPxJWGSr6hcKCHjFpPL
        status: active
        display_name: 王郹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王處直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處直 | accepted |
| birth.date | 863年 | accepted |
| death.date | 923年 | accepted |
| bio.summary | 王處直（863年—923年），唐人物。籍贯曲陽，曾任節度使、太師、中書令。（中国历代人物传记资料库 CBDB 144827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZpcYCX21cFGgpj8DaWwV25 | 王寮 | accepted |
| children | p_VoLzwtN4e2pofEFYkpZCMW | 王郁 | accepted |
| children | p_N13cHvEfUQLu2AU9JvS3xk | 王都 | accepted |
| children | p_PYScCSBT9W5sFMGc1Pn1Hk | 王鄑 | accepted |
| children | p_gaRB6foh67PJ327C2wT8be | 王郇 | accepted |
| children | p_APDFto73DvLobTPBETbBQG | 王邠 | accepted |
| children | p_bC2WrnqF3JR3WBSr2D9bK7 | 王䢼 | accepted |
| children | p_8Pr8Us7tH6onXE7FuCHg4D | 王郴 | accepted |
| children | p_ZQPEPxJWGSr6hcKCHjFpPL | 王郹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處直（CBDB 144827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144827&o=json)

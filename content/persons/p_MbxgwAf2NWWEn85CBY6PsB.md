---
schema: wang-person/v1
id: p_MbxgwAf2NWWEn85CBY6PsB
status: active
merged_into: null
display_name: 王叔寧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CsaSLZSKVFupUXeKtEpe7F
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r2AkwCTA41ytW84QZ74x6T
          claim_id: c_CsaSLZSKVFupUXeKtEpe7F
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
          stance: supports
          locator: CBDB:145015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145015）
          source: &a1
            id: s_Q1iPSuwmWyCAdnQoNLNRij
            source_type: api_record
            title: 中国历代人物传记资料库：王叔寧（CBDB 145015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145015&o=json
            external_identifier: CBDB:145015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YiftPt5KueVB2wkZhMrHCq
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 770年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZp9BtAqu3ZDHxL6WB1jJ1
          claim_id: c_YiftPt5KueVB2wkZhMrHCq
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
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
        id: c_Gz2v2iWWCMeeERKEV33jvb
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zx3QDX3Z8SKrqgMVuuSbyZ
          claim_id: c_Gz2v2iWWCMeeERKEV33jvb
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
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
        id: c_Qj5B7UhWV6e5c85qXv4HQ7
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔寧（770年—848年），唐人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 145015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hNHETruPpnOioAdKuGo3MH
          claim_id: c_Qj5B7UhWV6e5c85qXv4HQ7
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
          stance: supports
          locator: CBDB:145015
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_iXatwsdn7vWQSL4szGVh6Z
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Mh3hMyCbw9fyVEfpqRC6z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xbj0XxMroFBR_m34OQVKcb
          claim_id: c_iXatwsdn7vWQSL4szGVh6Z
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5Mh3hMyCbw9fyVEfpqRC6z
        status: active
        display_name: 王志皋
        merged_into_person_id: null
    - claim:
        id: c_amY2jNOycyDCzTmiHTJhca
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zuM3Mpr6KWo8nddkeNeGAg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YDsNyRYV_o_kPRkx2fO9-_
          claim_id: c_amY2jNOycyDCzTmiHTJhca
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zuM3Mpr6KWo8nddkeNeGAg
        status: active
        display_name: 王建初
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_yEtAbTwhZDcksQaalCst9J
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wi37Gn35NMVYcwoza3zXcj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qck6dmuMJ33RnImATztYzj
          claim_id: c_yEtAbTwhZDcksQaalCst9J
          source_id: s_7Xj0TvnMHrMgjeYFi-LOpw
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Xj0TvnMHrMgjeYFi-LOpw
            source_type: api_record
            title: 中国历代人物传记资料库：弘氏(弘昇女)（CBDB 143436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143436&o=json
            external_identifier: CBDB:143436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wi37Gn35NMVYcwoza3zXcj
        status: active
        display_name: 弘氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王叔寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔寧 | accepted |
| birth.date | 770年 | accepted |
| death.date | 848年 | accepted |
| bio.summary | 王叔寧（770年—848年），唐人物。籍贯丹徒。（中国历代人物传记资料库 CBDB 145015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5Mh3hMyCbw9fyVEfpqRC6z | 王志皋 | accepted |
| children | p_zuM3Mpr6KWo8nddkeNeGAg | 王建初 | accepted |
| spouses | p_wi37Gn35NMVYcwoza3zXcj | 弘氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：弘氏(弘昇女)（CBDB 143436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143436&o=json)
- [中国历代人物传记资料库：王叔寧（CBDB 145015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145015&o=json)

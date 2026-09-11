---
schema: wang-person/v1
id: p_mgxHev7zFTwcmkSJE7CaXn
status: active
merged_into: null
display_name: 王良玉
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M9C6i2QsycM163VeP1j5y2
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C35krcBfMpjLAyg9xmZCui
          claim_id: c_M9C6i2QsycM163VeP1j5y2
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB:10725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10725）
          source: &a1
            id: s_BAjxo671XMFTkByAe6GdPY
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 10725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json
            external_identifier: CBDB:10725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_v437Q6UeeffNF1Z91wcJS9
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1290年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VrK6asmt91Ch2oW6knANFx
          claim_id: c_v437Q6UeeffNF1Z91wcJS9
          source_id: s_BAjxo671XMFTkByAe6GdPY
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
        id: c_Fn3kXJ9XCh7YBWscGxDi3k
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1364年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYRGxdQd5HYoLC2yW1NYKi
          claim_id: c_Fn3kXJ9XCh7YBWscGxDi3k
          source_id: s_BAjxo671XMFTkByAe6GdPY
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
        id: c_g9eNvUafPL9oxFCNibx22v
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ChQDYj6fqPhzttjgxSUKSg
          claim_id: c_g9eNvUafPL9oxFCNibx22v
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_K_85h8SymJNKwNmSC4vGlv
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zV3xYYvS_EPPIlKZ6Q-et-
          claim_id: c_K_85h8SymJNKwNmSC4vGlv
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: 元人傳記資料索引，18636：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NxhVtsQFEKS3B7HARgTqxM
        status: active
        display_name: 王褘
        merged_into_person_id: null
    - claim:
        id: c_x32jGgVfs7OisFdwZiS37I
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pv2LvWNq1p1mi8bH9JeT5s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rq3OLYQLPrwGezZO1fy2Js
          claim_id: c_x32jGgVfs7OisFdwZiS37I
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（子 王初 ⇄ 父 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_pv2LvWNq1p1mi8bH9JeT5s
        status: active
        display_name: 王初
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_QrpEtBbidXshsDAKeRoMmC
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Dg1WdBP4eJ21T75J5qorCA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g-P8LWXNn_5Z2CKKpQ_juy
          claim_id: c_QrpEtBbidXshsDAKeRoMmC
          source_id: s_IFAmbO1xlKyIPra9UHIhTy
          stance: supports
          locator: CBDB 双向互证（妻子 陳貞）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_IFAmbO1xlKyIPra9UHIhTy
            source_type: api_record
            title: 中国历代人物传记资料库：陳貞（CBDB 437648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437648&o=json
            external_identifier: CBDB:437648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Dg1WdBP4eJ21T75J5qorCA
        status: active
        display_name: 陳貞
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_2r9xu0QHRoXltku4iqYu5q
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2AB1URRfbsHUZBcKrDjdbb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8KOUDZ3kaSLRnEGjNyR4fI
          claim_id: c_2r9xu0QHRoXltku4iqYu5q
          source_id: s_kN9AECxneSW4S9GVD2Wb7R
          stance: supports
          locator: CBDB 双向互证（祖父 王良玉 ⇄ 孫 王綱）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_kN9AECxneSW4S9GVD2Wb7R
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 437652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437652&o=json
            external_identifier: CBDB:437652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2AB1URRfbsHUZBcKrDjdbb
        status: active
        display_name: 王綱
        merged_into_person_id: null
    - claim:
        id: c_PJJHQpoeCzJnpu4IiS2kgt
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CMt2fXZyZFD74yNHp3joRj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_slnSWKuRxAk6XZNXkxZ78I
          claim_id: c_PJJHQpoeCzJnpu4IiS2kgt
          source_id: s_AbNG4BZL6RejJqvCaTjDTB
          stance: supports
          locator: CBDB 双向互证（祖父 王良玉 ⇄ 孫 王綸）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_AbNG4BZL6RejJqvCaTjDTB
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 437651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437651&o=json
            external_identifier: CBDB:437651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CMt2fXZyZFD74yNHp3joRj
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_t7Naka23XPAxC5LhT7M-7r
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_g8LozYthDKqGsT34EKjN14
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PYLu07tQIie7Fz6tQYUCm5
          claim_id: c_t7Naka23XPAxC5LhT7M-7r
          source_id: s_zCcfMJfrzmuEQmja8qQKmm
          stance: supports
          locator: CBDB 双向互证（祖父 王良玉 ⇄ 孫 王紀）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_zCcfMJfrzmuEQmja8qQKmm
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 437653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437653&o=json
            external_identifier: CBDB:437653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_g8LozYthDKqGsT34EKjN14
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_Y3SORaVs05iyD0Y85FZeLN
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EPoEhnzxUXZ38QvoPDgs5s
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DxUYv2f2zzPU1uAvtHCggw
          claim_id: c_Y3SORaVs05iyD0Y85FZeLN
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（孫 王綬 ⇄ 祖父 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_EPoEhnzxUXZ38QvoPDgs5s
        status: active
        display_name: 王绶
        merged_into_person_id: null
    - claim:
        id: c_u6av2V5dhGJyZ1L0YB1077
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ujxGmCBGatyUsmPNvx1eeB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WY5R1vfewnuFRXJk5ssKtC
          claim_id: c_u6av2V5dhGJyZ1L0YB1077
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（孫 王紳 ⇄ 祖父 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ujxGmCBGatyUsmPNvx1eeB
        status: active
        display_name: 王绅
        merged_into_person_id: null
    - claim:
        id: c_WTjClPRDV2pYkM2kzNCPHY
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w6XQU754bPECKFqtaFc4Q2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R52jIUCgaWAdgFmEXSuKv7
          claim_id: c_WTjClPRDV2pYkM2kzNCPHY
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（孫 王紹 ⇄ 祖父 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_w6XQU754bPECKFqtaFc4Q2
        status: active
        display_name: 王紹
        merged_into_person_id: null
    - claim:
        id: c_1uJmNQXrCtF0pS6NaLbNzH
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xsZccYFbwo9A3bucCejqjr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Q7lGNh4naTgQiRbvUxNDc
          claim_id: c_1uJmNQXrCtF0pS6NaLbNzH
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王穆 ⇄ 曾祖 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_xsZccYFbwo9A3bucCejqjr
        status: active
        display_name: 王穆
        merged_into_person_id: null
    - claim:
        id: c_VNZsNqvyAKLwW-UNobPjeI
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bxE16iQMV3ZvduCYN5Z2Cd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2zpkxtegNnoeTJepv0apc
          claim_id: c_VNZsNqvyAKLwW-UNobPjeI
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王穰 ⇄ 曾祖 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_bxE16iQMV3ZvduCYN5Z2Cd
        status: active
        display_name: 王穰
        merged_into_person_id: null
    - claim:
        id: c_YQzjReF8JoTvhajiCnX41g
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OO6El7UF_n7aSAwvSD9ncn
          claim_id: c_YQzjReF8JoTvhajiCnX41g
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王稌 ⇄ 曾祖 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Djkmc4uicJBuT6DjuX7m7t
        status: active
        display_name: 王稌
        merged_into_person_id: null
    - claim:
        id: c_b1S9MgrRZcEshhj_6rNJM2
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Jdra2pmbS6B6k7DYWxMEfe
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w2tLaxqiOUZ5GUHxPDp1Ms
          claim_id: c_b1S9MgrRZcEshhj_6rNJM2
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王稔 ⇄ 曾祖 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Jdra2pmbS6B6k7DYWxMEfe
        status: active
        display_name: 王稔
        merged_into_person_id: null
    - claim:
        id: c_D5om1HpkfwmTB95RUQj0Wp
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1AythoREbDbJi54YNX5Fzu
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pp_GFr8mAM41ESqEUOufUc
          claim_id: c_D5om1HpkfwmTB95RUQj0Wp
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王稚 ⇄ 曾祖 王良玉）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_1AythoREbDbJi54YNX5Fzu
        status: active
        display_name: 王稚
        merged_into_person_id: null
  other: []
---

# 王良玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良玉 | accepted |
| birth.date | 1290年 | accepted |
| death.date | 1364年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NxhVtsQFEKS3B7HARgTqxM | 王褘 | accepted |
| children | p_pv2LvWNq1p1mi8bH9JeT5s | 王初 | accepted |
| spouses | p_Dg1WdBP4eJ21T75J5qorCA | 陳貞 | accepted |
| descendants | p_2AB1URRfbsHUZBcKrDjdbb | 王綱 | accepted |
| descendants | p_CMt2fXZyZFD74yNHp3joRj | 王綸 | accepted |
| descendants | p_g8LozYthDKqGsT34EKjN14 | 王紀 | accepted |
| descendants | p_EPoEhnzxUXZ38QvoPDgs5s | 王绶 | accepted |
| descendants | p_ujxGmCBGatyUsmPNvx1eeB | 王绅 | accepted |
| descendants | p_w6XQU754bPECKFqtaFc4Q2 | 王紹 | accepted |
| descendants | p_xsZccYFbwo9A3bucCejqjr | 王穆 | accepted |
| descendants | p_bxE16iQMV3ZvduCYN5Z2Cd | 王穰 | accepted |
| descendants | p_Djkmc4uicJBuT6DjuX7m7t | 王稌 | accepted |
| descendants | p_Jdra2pmbS6B6k7DYWxMEfe | 王稔 | accepted |
| descendants | p_1AythoREbDbJi54YNX5Fzu | 王稚 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳貞（CBDB 437648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437648&o=json)
- [中国历代人物传记资料库：王綱（CBDB 437652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437652&o=json)
- [中国历代人物传记资料库：王紀（CBDB 437653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437653&o=json)
- [中国历代人物传记资料库：王良玉（CBDB 10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
- [中国历代人物传记资料库：王綸（CBDB 437651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437651&o=json)

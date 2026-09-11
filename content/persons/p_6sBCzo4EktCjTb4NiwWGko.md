---
schema: wang-person/v1
id: p_6sBCzo4EktCjTb4NiwWGko
status: active
merged_into: null
display_name: 王傑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EG88LfLK4jVyoWa5u4v8zM
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WhfKykAvnM933m7JxEnZCs
          claim_id: c_EG88LfLK4jVyoWa5u4v8zM
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: CBDB:56849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56849）
          source: &a1
            id: s_HCahiMsh5E8CcBDkdkb7uC
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 56849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56849&o=json
            external_identifier: CBDB:56849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1Jdu8MphnbV8X44zQPiZdS
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1725年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W1K9jMfmy9nb3F1effvPCo
          claim_id: c_1Jdu8MphnbV8X44zQPiZdS
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
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
        id: c_1CX2uBcnLp5s3dJ74A5WXQ
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1805年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZHRheDRkMiZQ72M3AHE8JS
          claim_id: c_1CX2uBcnLp5s3dJ74A5WXQ
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
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
        id: c_rE43bHj79ALdLtGAtZrCi5
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑（1725年—1805年），清人物。明清進士進士，籍贯韓城，入仕進士，曾任會試考官、禮部侍郎、吏部侍郎。（中国历代人物传记资料库 CBDB 56849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hFEQ1QpE9EsZk-0C_mfrIX
          claim_id: c_rE43bHj79ALdLtGAtZrCi5
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: CBDB:56849
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_PaDzQCbKo0hW2Tq88RVrgn
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jj9MyHrAhxttVzzbCt67ZT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D_GHLDjM2p441DsMYDQkMN
          claim_id: c_PaDzQCbKo0hW2Tq88RVrgn
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Jj9MyHrAhxttVzzbCt67ZT
        status: active
        display_name: 王堉時
        merged_into_person_id: null
    - claim:
        id: c_j5Sznayqe-IcRDF0CnSNX0
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cWLSoXHQ8UHEBUXaxRR6Dn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jBVf-Cgtd4-mFLCeLP_kTs
          claim_id: c_j5Sznayqe-IcRDF0CnSNX0
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cWLSoXHQ8UHEBUXaxRR6Dn
        status: active
        display_name: 王垿時
        merged_into_person_id: null
    - claim:
        id: c_9wrTfZC9jnoJKZS7-mDIiq
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m6JqkVZNfJm95LmoghtH9J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_luyti-UWYSSfJTi9pzYEPQ
          claim_id: c_9wrTfZC9jnoJKZS7-mDIiq
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m6JqkVZNfJm95LmoghtH9J
        status: active
        display_name: 王嵊時
        merged_into_person_id: null
    - claim:
        id: c_GuyCxEGaBC64K7EJ3iMG0F
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9goUKx6KDft2sN3Lztv7SU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r8d1fmvuNA3_qmKKjmnVXH
          claim_id: c_GuyCxEGaBC64K7EJ3iMG0F
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9goUKx6KDft2sN3Lztv7SU
        status: active
        display_name: 王塽時
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_GrNd4b261r-Ku8TSZJTzu5
        subject_person_id: p_fLj7eCRaVcvbsywEcVLYML
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6sBCzo4EktCjTb4NiwWGko
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VJZgV2T_9Sx8sQEBz3rhvJ
          claim_id: c_GrNd4b261r-Ku8TSZJTzu5
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fLj7eCRaVcvbsywEcVLYML
        status: active
        display_name: 王象峰
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_ou98lCH6mGeKl3KkcUut0m
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1rMKMgmHRPEBfLv4UG994w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YE7AXeQCwRHOSb8CmmRpoO
          claim_id: c_ou98lCH6mGeKl3KkcUut0m
          source_id: s_8aC9va1Vf4icncKYRQbaZF
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8aC9va1Vf4icncKYRQbaZF
            source_type: api_record
            title: 中国历代人物传记资料库：王騫（CBDB 513483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513483&o=json
            external_identifier: CBDB:513483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1rMKMgmHRPEBfLv4UG994w
        status: active
        display_name: 王騫
        merged_into_person_id: null
    - claim:
        id: c_xaH44zYP4dIN-Ht3abLDIE
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PfGFDCNNBR7Cd8j1MzPf9H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OzyTl9HLVpXyw_o1iA4y23
          claim_id: c_xaH44zYP4dIN-Ht3abLDIE
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PfGFDCNNBR7Cd8j1MzPf9H
        status: active
        display_name: 王駎
        merged_into_person_id: null
    - claim:
        id: c_q5M1-xEG-xo_cqJlqryDYi
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EVGWpjKLyBvzRAMy57D9Lb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ir7XHm7U5DYqi9pjH8rlC7
          claim_id: c_q5M1-xEG-xo_cqJlqryDYi
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EVGWpjKLyBvzRAMy57D9Lb
        status: active
        display_name: 王駉
        merged_into_person_id: null
    - claim:
        id: c_Y90IcH3mBEwf2_vA5vu-Fq
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NKgsdPaBjLGpAMZmm31dtQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oHSBShGLILaa0aRydcegl8
          claim_id: c_Y90IcH3mBEwf2_vA5vu-Fq
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NKgsdPaBjLGpAMZmm31dtQ
        status: active
        display_name: 王騊
        merged_into_person_id: null
    - claim:
        id: c_miUdseEjtDou8Rx-Y_B2RG
        subject_person_id: p_6sBCzo4EktCjTb4NiwWGko
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sToGREbRK53VoAMWgwySDt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YqNMdL1usZUa98HkjElPie
          claim_id: c_miUdseEjtDou8Rx-Y_B2RG
          source_id: s_HCahiMsh5E8CcBDkdkb7uC
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），42：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sToGREbRK53VoAMWgwySDt
        status: active
        display_name: 王驌
        merged_into_person_id: null
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| birth.date | 1725年 | accepted |
| death.date | 1805年 | accepted |
| bio.summary | 王傑（1725年—1805年），清人物。明清進士進士，籍贯韓城，入仕進士，曾任會試考官、禮部侍郎、吏部侍郎。（中国历代人物传记资料库 CBDB 56849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Jj9MyHrAhxttVzzbCt67ZT | 王堉時 | accepted |
| children | p_cWLSoXHQ8UHEBUXaxRR6Dn | 王垿時 | accepted |
| children | p_m6JqkVZNfJm95LmoghtH9J | 王嵊時 | accepted |
| children | p_9goUKx6KDft2sN3Lztv7SU | 王塽時 | accepted |
| ancestors | p_fLj7eCRaVcvbsywEcVLYML | 王象峰 | accepted |
| descendants | p_1rMKMgmHRPEBfLv4UG994w | 王騫 | accepted |
| descendants | p_PfGFDCNNBR7Cd8j1MzPf9H | 王駎 | accepted |
| descendants | p_EVGWpjKLyBvzRAMy57D9Lb | 王駉 | accepted |
| descendants | p_NKgsdPaBjLGpAMZmm31dtQ | 王騊 | accepted |
| descendants | p_sToGREbRK53VoAMWgwySDt | 王驌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 56849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56849&o=json)
- [中国历代人物传记资料库：王騫（CBDB 513483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513483&o=json)

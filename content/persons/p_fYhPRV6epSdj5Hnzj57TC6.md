---
schema: wang-person/v1
id: p_fYhPRV6epSdj5Hnzj57TC6
status: active
merged_into: null
display_name: 王文韶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B1tfRXbeEbQmhYvGkNuKq1
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NViLJezLWxqEyXPRQRvsZ3
          claim_id: c_B1tfRXbeEbQmhYvGkNuKq1
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: CBDB:57121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57121）
          source: &a1
            id: s_4j2jjxfAtAgmNjeAv2sgPb
            source_type: api_record
            title: 中国历代人物传记资料库：王文韶（CBDB 57121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57121&o=json
            external_identifier: CBDB:57121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QFQBB3LKAV4brbww2XbND6
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1830年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GzbJ1UnsZ9wD132qwPyG6N
          claim_id: c_QFQBB3LKAV4brbww2XbND6
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
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
        id: c_WwL3kyij1YviT1zaJnUAir
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1908年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L2XrhzeBhWPjiVixDFQj5M
          claim_id: c_WwL3kyij1YviT1zaJnUAir
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
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
        id: c_q6TXEtGGYsC6ugDZtTWQLW
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文韶（1830年—1908年），清人物。籍贯仁和，入仕鄉貢舉人，曾任督辦路礦大臣、司郎中、鹽運使銜。（中国历代人物传记资料库 CBDB 57121）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YDdWf_Pyy4dMKW9FU_LzZF
          claim_id: c_q6TXEtGGYsC6ugDZtTWQLW
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: CBDB:57121
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nEjTi9SfgDYkspZGombN5k
        subject_person_id: p_hGkNQg472YWd1xHE5CBJHn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O87duXXhoThG2CxRQVUvKl
          claim_id: c_nEjTi9SfgDYkspZGombN5k
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hGkNQg472YWd1xHE5CBJHn
        status: active
        display_name: 王又沂
        merged_into_person_id: null
  children:
    - claim:
        id: c_b76JOvQn24wE_5GNT4m6t3
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UwmSbq35f1tXkd8G8oWnym
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h-1mUZCjf9za641Y9UzkLp
          claim_id: c_b76JOvQn24wE_5GNT4m6t3
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UwmSbq35f1tXkd8G8oWnym
        status: active
        display_name: 王稚夔
        merged_into_person_id: null
    - claim:
        id: c_0rNBg8Ey0WXBxvWE-EIz5A
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EzTbdBF4wZFdPB4edMAPSF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vrKeNKG0OQ0hIqaFHf3v2O
          claim_id: c_0rNBg8Ey0WXBxvWE-EIz5A
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EzTbdBF4wZFdPB4edMAPSF
        status: active
        display_name: 王慶甲
        merged_into_person_id: null
    - claim:
        id: c_11zkF9SrUKQh5nqHg1zZNq
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mm95wadt9b4QgSGd4Ps4xQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e2d3Xn_VeSMavdHZfaNQWU
          claim_id: c_11zkF9SrUKQh5nqHg1zZNq
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mm95wadt9b4QgSGd4Ps4xQ
        status: active
        display_name: 王慶同
        merged_into_person_id: null
    - claim:
        id: c_KhcZSJ3FBJl9BxGvGbzQGe
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CJo299SVAc1152UcV67Adk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JVPQo_mvQJj9ngyy_nXQfO
          claim_id: c_KhcZSJ3FBJl9BxGvGbzQGe
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CJo299SVAc1152UcV67Adk
        status: active
        display_name: 王慶鈞
        merged_into_person_id: null
    - claim:
        id: c_46sj-sHOEBt3ZTyMhQ_XCS
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_baEAAx4dA9J5yu1TVL1Z9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_214w_s8VnwVSJ-c3E9lIyd
          claim_id: c_46sj-sHOEBt3ZTyMhQ_XCS
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_baEAAx4dA9J5yu1TVL1Z9K
        status: active
        display_name: 王慶銘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_iz0L-ISzpqmI8UXglrBvm1
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VF3gND7HLNAEYaA1jm9fF6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kIbkFgFfZdrM2jzaEO6LNT
          claim_id: c_iz0L-ISzpqmI8UXglrBvm1
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VF3gND7HLNAEYaA1jm9fF6
        status: active
        display_name: 王晉孫
        merged_into_person_id: null
    - claim:
        id: c_nokroFKsqOnNi-pI_FUdHg
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D6E2Qs572vax4oiRKNht19
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Z_EuQG_rstPDq9_FuY7WR
          claim_id: c_nokroFKsqOnNi-pI_FUdHg
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D6E2Qs572vax4oiRKNht19
        status: active
        display_name: 王彬孫
        merged_into_person_id: null
    - claim:
        id: c_bMIZxSetvcYgrlqN99M7pG
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_er7pREp2Tj52wEqrK65Fwa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u2nYE-uRUHkKxZacdBetEj
          claim_id: c_bMIZxSetvcYgrlqN99M7pG
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_er7pREp2Tj52wEqrK65Fwa
        status: active
        display_name: 王鈺孫
        merged_into_person_id: null
    - claim:
        id: c_zc5TxQJp-LytIr06BlPOzw
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cBQwe7c25qRNWE1KYeNJiV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wso9DxZTa35yopqATocMqW
          claim_id: c_zc5TxQJp-LytIr06BlPOzw
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cBQwe7c25qRNWE1KYeNJiV
        status: active
        display_name: 王銓孫
        merged_into_person_id: null
    - claim:
        id: c_396H6L5ZS7TO-c3nUtCINv
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_okT8NSaAK4W9U6Kxgf8vBB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d70gv2jEG6oJuadExk828u
          claim_id: c_396H6L5ZS7TO-c3nUtCINv
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_okT8NSaAK4W9U6Kxgf8vBB
        status: active
        display_name: 王慕孫
        merged_into_person_id: null
    - claim:
        id: c_y1wfmMu-K4EldqTQ8QpmZe
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pMLFQSHfFG2LU4Gm6aFUWD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nDl9ohDPwDNojEmj3388f4
          claim_id: c_y1wfmMu-K4EldqTQ8QpmZe
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pMLFQSHfFG2LU4Gm6aFUWD
        status: active
        display_name: 王頤孫
        merged_into_person_id: null
    - claim:
        id: c_Wl1ORy3f3ZWad1Zyo7EXi1
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CJgeFgXZja86Ku1WKgb5is
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_peKQRFiFvgdon3VH6XiHdS
          claim_id: c_Wl1ORy3f3ZWad1Zyo7EXi1
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），340：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CJgeFgXZja86Ku1WKgb5is
        status: active
        display_name: 王鍔孫
        merged_into_person_id: null
  other: []
---

# 王文韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文韶 | accepted |
| birth.date | 1830年 | accepted |
| death.date | 1908年 | accepted |
| bio.summary | 王文韶（1830年—1908年），清人物。籍贯仁和，入仕鄉貢舉人，曾任督辦路礦大臣、司郎中、鹽運使銜。（中国历代人物传记资料库 CBDB 57121） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hGkNQg472YWd1xHE5CBJHn | 王又沂 | accepted |
| children | p_UwmSbq35f1tXkd8G8oWnym | 王稚夔 | accepted |
| children | p_EzTbdBF4wZFdPB4edMAPSF | 王慶甲 | accepted |
| children | p_Mm95wadt9b4QgSGd4Ps4xQ | 王慶同 | accepted |
| children | p_CJo299SVAc1152UcV67Adk | 王慶鈞 | accepted |
| children | p_baEAAx4dA9J5yu1TVL1Z9K | 王慶銘 | accepted |
| descendants | p_VF3gND7HLNAEYaA1jm9fF6 | 王晉孫 | accepted |
| descendants | p_D6E2Qs572vax4oiRKNht19 | 王彬孫 | accepted |
| descendants | p_er7pREp2Tj52wEqrK65Fwa | 王鈺孫 | accepted |
| descendants | p_cBQwe7c25qRNWE1KYeNJiV | 王銓孫 | accepted |
| descendants | p_okT8NSaAK4W9U6Kxgf8vBB | 王慕孫 | accepted |
| descendants | p_pMLFQSHfFG2LU4Gm6aFUWD | 王頤孫 | accepted |
| descendants | p_CJgeFgXZja86Ku1WKgb5is | 王鍔孫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文韶（CBDB 57121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57121&o=json)

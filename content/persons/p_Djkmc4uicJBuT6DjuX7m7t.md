---
schema: wang-person/v1
id: p_Djkmc4uicJBuT6DjuX7m7t
status: active
merged_into: null
display_name: 王稌
cbdb_id: 437664
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gnWpm6qnQ977EibLia9hZy
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稌，明人物。CBDB 记录其籍贯记录为義烏，曾任中書舍人。中国历代人物传记资料库（CBDB）以人物编号 437664 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BgtFNf2RafEya8EKtfgv13
          claim_id: c_gnWpm6qnQ977EibLia9hZy
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_LPKamJ78vzJUu4765xEYKj
            source_type: api_record
            title: 维基数据：王稌（Q65903516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903516
            external_identifier: Q65903516
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
        - id: cs_bT98MJeEKy_PCPgaPrpP3z
          claim_id: c_gnWpm6qnQ977EibLia9hZy
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: CBDB:437664
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DifVCfdMFb5K6Mo67xCm1z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王稌（437664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json
            external_identifier: CBDB:437664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.885Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NN6HeYPFFs7LMMYGYZffLt
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稌
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_UVWZRLFnFMoA413nvK7BUB
          claim_id: c_NN6HeYPFFs7LMMYGYZffLt
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: Q65903516
          quotation: null
          interpretation_note: null
          source:
            id: s_LPKamJ78vzJUu4765xEYKj
            source_type: api_record
            title: 维基数据：王稌（Q65903516）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903516
            external_identifier: Q65903516
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
        - id: cs_iWd4hEdfLL3KtUzUksVQAD
          claim_id: c_NN6HeYPFFs7LMMYGYZffLt
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: Q65903516
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XGq5Kxym5uFUKwsJ65jJ1a
        subject_person_id: p_ujxGmCBGatyUsmPNvx1eeB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a46MB7kX66NacWoy67BtvD
          claim_id: c_XGq5Kxym5uFUKwsJ65jJ1a
          source_id: s_vS2t2ntyv7LmatgEDDuYin
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vS2t2ntyv7LmatgEDDuYin
            source_type: api_record
            title: 维基数据：王绅（Q45413317）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45413317
            external_identifier: Q45413317
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:07.031Z
            metadata_json: null
        - id: cs_rSK1ewJ9k4CQvrGTfFGoZQ
          claim_id: c_XGq5Kxym5uFUKwsJ65jJ1a
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_hTc9k3M9RTLip2ZeJQefij
          claim_id: c_XGq5Kxym5uFUKwsJ65jJ1a
          source_id: s_TRViFeuhUj6uqvpFPe1kuG
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_TRViFeuhUj6uqvpFPe1kuG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王紳（28112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28112&o=json
            external_identifier: CBDB:28112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:07.216Z
            metadata_json: null
      object_person:
        id: p_ujxGmCBGatyUsmPNvx1eeB
        status: active
        display_name: 王绅
        merged_into_person_id: null
  children:
    - claim:
        id: c_yofUyGuoo5HcYsA6yRwzd6
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qJM7h8dFu3we6W3CZKZQQr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QdB88t8B7cS7B4LPiEkVXN
          claim_id: c_yofUyGuoo5HcYsA6yRwzd6
          source_id: s_RZpxiNzearwSZRREZr91Tc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RZpxiNzearwSZRREZr91Tc
            source_type: api_record
            title: 维基数据：王瀹（Q65904230）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65904230
            external_identifier: Q65904230
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_VQoFj62rQCLhf8tuKgGqRh
          claim_id: c_yofUyGuoo5HcYsA6yRwzd6
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_KNTNsjwu2zav2EBVLG2p8n
          claim_id: c_yofUyGuoo5HcYsA6yRwzd6
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_qJM7h8dFu3we6W3CZKZQQr
        status: active
        display_name: 王瀹
        merged_into_person_id: null
    - claim:
        id: c_y8LjyKkDzFekcPLvkB6Egg
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9VxEWjL3WdRDJDc2ecBK47
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5iTfZiCQKH8Xkwb75zWrwY
          claim_id: c_y8LjyKkDzFekcPLvkB6Egg
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_9VxEWjL3WdRDJDc2ecBK47
        status: active
        display_name: 王汶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_uQUEABqSDzYkq4GPPgJCGS
        subject_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DNBu7dKBcHTFT8EoXEHiXT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMDtS4J6t3E4Y3K4e8NEZA
          claim_id: c_uQUEABqSDzYkq4GPPgJCGS
          source_id: s_Gp3VAxCA4pAUQ4tcQCX6eX
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Gp3VAxCA4pAUQ4tcQCX6eX
            source_type: api_record
            title: 维基数据：丁氏（Q65904233）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65904233
            external_identifier: Q65904233
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_hN8PpPSKL3mrbH3WAZhFZU
          claim_id: c_uQUEABqSDzYkq4GPPgJCGS
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_KuTG2QFgqdJddxmgatQKsb
          claim_id: c_uQUEABqSDzYkq4GPPgJCGS
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: 亲属关系：第一任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_DNBu7dKBcHTFT8EoXEHiXT
        status: active
        display_name: 丁氏
        merged_into_person_id: null
    - claim:
        id: c_EXyCCWwSnwaQ7SkXr6LTEG
        subject_person_id: p_8GF834u9vuJrzqkRvDZrHA
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Djkmc4uicJBuT6DjuX7m7t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_phEixpci28yu39ksFB5Zij
          claim_id: c_EXyCCWwSnwaQ7SkXr6LTEG
          source_id: s_1etS6b7DFhjigtQyStvchA
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_1etS6b7DFhjigtQyStvchA
            source_type: api_record
            title: 维基数据：吴氏（Q65904236）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65904236
            external_identifier: Q65904236
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_KEmiUpvFMHziwVFXZMTT72
          claim_id: c_EXyCCWwSnwaQ7SkXr6LTEG
          source_id: s_LPKamJ78vzJUu4765xEYKj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_8n3N7nvP4q5x68GWj2nrgo
          claim_id: c_EXyCCWwSnwaQ7SkXr6LTEG
          source_id: s_DifVCfdMFb5K6Mo67xCm1z
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_8GF834u9vuJrzqkRvDZrHA
        status: active
        display_name: 吴氏
        merged_into_person_id: null
  ancestors:
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
          source:
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
      object_person:
        id: p_mgxHev7zFTwcmkSJE7CaXn
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王稌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王稌，明人物。CBDB 记录其籍贯记录为義烏，曾任中書舍人。中国历代人物传记资料库（CBDB）以人物编号 437664 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王稌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujxGmCBGatyUsmPNvx1eeB | 王绅 | accepted |
| children | p_qJM7h8dFu3we6W3CZKZQQr | 王瀹 | accepted |
| children | p_9VxEWjL3WdRDJDc2ecBK47 | 王汶 | accepted |
| spouses | p_DNBu7dKBcHTFT8EoXEHiXT | 丁氏 | accepted |
| spouses | p_8GF834u9vuJrzqkRvDZrHA | 吴氏 | accepted |
| ancestors | p_mgxHev7zFTwcmkSJE7CaXn | 王良玉 | accepted |

## 外部来源

- [维基数据：丁氏（Q65904233）](https://www.wikidata.org/wiki/Q65904233)
- [维基数据：王绅（Q45413317）](https://www.wikidata.org/wiki/Q45413317)
- [维基数据：王稌（Q65903516）](https://www.wikidata.org/wiki/Q65903516)
- [维基数据：王瀹（Q65904230）](https://www.wikidata.org/wiki/Q65904230)
- [维基数据：吴氏（Q65904236）](https://www.wikidata.org/wiki/Q65904236)
- [中国历代人物传记资料库：王良玉（CBDB 10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
- [CBDB 中国历代人物传记资料库：王紳（28112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28112&o=json)
- [CBDB 中国历代人物传记资料库：王稌（437664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437664&o=json)

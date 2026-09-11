---
schema: wang-person/v1
id: p_5r1wESpKqnWgbhR5AChbjE
status: active
merged_into: null
display_name: 王之猷
cbdb_id: 126467
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aafhWKf46nRS1qUafEz9iC
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之猷（1549年—1599年），字爾嘉，號栢峯，山東濟南府新城縣人，匠籍，明朝政治人物。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ER4sGwhYyoDvwUZFMet6id
          claim_id: c_aafhWKf46nRS1qUafEz9iC
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_4omftLuK67wUsCAnVU8byp
            source_type: api_record
            title: 维基数据：王之猷（Q16075308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075308
            external_identifier: Q16075308
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
        - id: cs_pnLi9YmBd8kiPgtIutNeUL
          claim_id: c_aafhWKf46nRS1qUafEz9iC
          source_id: s_2ZmnKG6DOrt129kfYNZT49
          stance: supports
          locator: 导言
          quotation: 王之猷（1549年—1599年），字爾嘉，號栢峯，山東濟南府新城
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_2ZmnKG6DOrt129kfYNZT49
            source_type: website
            title: 中文维基百科：王之猷
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
            external_identifier: Q16075308
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kfFtmAmX2kBGVt5VzrBscd
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之猷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9qyKVRqNAmFBZB2CczoMUz
          claim_id: c_kfFtmAmX2kBGVt5VzrBscd
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: Q16075308
          quotation: null
          interpretation_note: null
          source:
            id: s_4omftLuK67wUsCAnVU8byp
            source_type: api_record
            title: 维基数据：王之猷（Q16075308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075308
            external_identifier: Q16075308
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
        - id: cs_yGPy7vJW9uocqNZE8ShW6y
          claim_id: c_kfFtmAmX2kBGVt5VzrBscd
          source_id: s_fTSBwdBbGaM2F5XBW7sb2z
          stance: supports
          locator: Q16075308
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_fTSBwdBbGaM2F5XBW7sb2z
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之猷（126467）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126467&o=json
            external_identifier: CBDB:126467
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:58.678Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JJB7UKtTAqgKFU2PWASNFn
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ApoF2qB7R1EMCoo4RvFEEV
          claim_id: c_JJB7UKtTAqgKFU2PWASNFn
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_4omftLuK67wUsCAnVU8byp
            source_type: api_record
            title: 维基数据：王之猷（Q16075308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075308
            external_identifier: Q16075308
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
        - id: cs_axuLNZF9krs5esnwyz2QH8
          claim_id: c_JJB7UKtTAqgKFU2PWASNFn
          source_id: s_8v97D6aRgy5zRhLaWeAPgN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v97D6aRgy5zRhLaWeAPgN
            source_type: api_record
            title: 维基数据：王重光（Q15935070）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935070
            external_identifier: Q15935070
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
    - claim:
        id: c_OfX2jhMa_DheJTaR6iCIvU
        subject_person_id: p_x6JTyX7qDKG5C4hpwhpzxp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ZCqenUud9qoaVAxdtZS9Y
          claim_id: c_OfX2jhMa_DheJTaR6iCIvU
          source_id: s_FD8PVwbNnLwfYhK5NKbWPj
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FD8PVwbNnLwfYhK5NKbWPj
            source_type: api_record
            title: 中国历代人物传记资料库：王重光（CBDB 217732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217732&o=json
            external_identifier: CBDB:217732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.255Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_x6JTyX7qDKG5C4hpwhpzxp
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children:
    - claim:
        id: c_roAuXBF9e21srCYxze7jAM
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iko9zCvjCxvA9HKpjEWpt4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RV9cKJ9mveQ34mPkgy6Yyh
          claim_id: c_roAuXBF9e21srCYxze7jAM
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: &a1
            id: s_4omftLuK67wUsCAnVU8byp
            source_type: api_record
            title: 维基数据：王之猷（Q16075308）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075308
            external_identifier: Q16075308
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7
        - id: cs_3u8jHQAJXU9vNg5n3rsovC
          claim_id: c_roAuXBF9e21srCYxze7jAM
          source_id: s_Jh59dCbMpghFUoJALitq8C
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Jh59dCbMpghFUoJALitq8C
            source_type: api_record
            title: 维基数据：王象恒（Q15940995）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940995
            external_identifier: Q15940995
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:48.391Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%81%92
      object_person:
        id: p_iko9zCvjCxvA9HKpjEWpt4
        status: active
        display_name: 王象恒
        merged_into_person_id: null
    - claim:
        id: c_BgQB5ozJnBttrdFeAxpENH
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1vwHH8EjSEP1q2oifpwF8P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3fyf1EHwF5hvaVkaW4ghV
          claim_id: c_BgQB5ozJnBttrdFeAxpENH
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_FZNRr23DCZVaQ4VCnSeg73
          claim_id: c_BgQB5ozJnBttrdFeAxpENH
          source_id: s_Y1XjPJB2E3sdU1bzkZCXWH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Y1XjPJB2E3sdU1bzkZCXWH
            source_type: api_record
            title: 维基数据：王象春（Q16260916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16260916
            external_identifier: Q16260916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:52.050Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B1%A1%E6%98%A5
      object_person:
        id: p_1vwHH8EjSEP1q2oifpwF8P
        status: active
        display_name: 王象春
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EjtQ2j2buhUHVqpPMtMnnp
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nVeRPzH9zM6X3E5H4rwVq1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a9nR5ogHo1vdqwmYPWcuYY
          claim_id: c_EjtQ2j2buhUHVqpPMtMnnp
          source_id: s_4omftLuK67wUsCAnVU8byp
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qBKMtk9DcQ11Qzoap33at6
          claim_id: c_EjtQ2j2buhUHVqpPMtMnnp
          source_id: s_FmCaExmBx5NXeFkAjLnQYm
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_FmCaExmBx5NXeFkAjLnQYm
            source_type: api_record
            title: 维基数据：李氏（Q65820432）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65820432
            external_identifier: Q65820432
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:06.712Z
            metadata_json: null
        - id: cs_KXaKdcDyBSt4b6M8g2MnTj
          claim_id: c_EjtQ2j2buhUHVqpPMtMnnp
          source_id: s_fTSBwdBbGaM2F5XBW7sb2z
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：萬曆五年進士登科錄:一卷
          source: *a2
      object_person:
        id: p_nVeRPzH9zM6X3E5H4rwVq1
        status: active
        display_name: 李氏
        merged_into_person_id: null
    - claim:
        id: c_0_T-5DtRdhmzoLRcff_Mz7
        subject_person_id: p_nVeRPzH9zM6X3E5H4rwVq1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jtRDDvEfGebG1Nxz1gcS1h
          claim_id: c_0_T-5DtRdhmzoLRcff_Mz7
          source_id: s_jYgfVpA5NdEbCanRKQ1W2x
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百五十七名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jYgfVpA5NdEbCanRKQ1W2x
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：李氏（217734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217734&o=json
            external_identifier: CBDB:217734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:06.884Z
            metadata_json: null
      object_person:
        id: p_nVeRPzH9zM6X3E5H4rwVq1
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Wg_5pTVcWJ5GE8vBDUdU1V
        subject_person_id: p_VwN7eG86JDxNDZrGUdF1Q5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AXDvffMCx7bwj-I_Lmwn5Y
          claim_id: c_Wg_5pTVcWJ5GE8vBDUdU1V
          source_id: s_BsgioAgQi2bNfV41XYhCP9
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BsgioAgQi2bNfV41XYhCP9
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 232520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232520&o=json
            external_identifier: CBDB:232520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VwN7eG86JDxNDZrGUdF1Q5
        status: active
        display_name: 王麟
        merged_into_person_id: null
    - claim:
        id: c_ZkypYFnypEdHtWl3T8Kx4M
        subject_person_id: p_XwKHLH17io2m6CKt414qzT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__VzyUUqs4u7XTig1OWIjVr
          claim_id: c_ZkypYFnypEdHtWl3T8Kx4M
          source_id: s_FJ1HG7BynJqSbkFRirS4id
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百五十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FJ1HG7BynJqSbkFRirS4id
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伍（217730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217730&o=json
            external_identifier: CBDB:217730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:19.307Z
            metadata_json: null
      object_person:
        id: p_XwKHLH17io2m6CKt414qzT
        status: active
        display_name: 王伍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之猷（1549年—1599年），字爾嘉，號栢峯，山東濟南府新城縣人，匠籍，明朝政治人物。 | accepted |
| name.primary | 王之猷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| parents | p_x6JTyX7qDKG5C4hpwhpzxp | 王重光 | accepted |
| children | p_iko9zCvjCxvA9HKpjEWpt4 | 王象恒 | accepted |
| children | p_1vwHH8EjSEP1q2oifpwF8P | 王象春 | accepted |
| spouses | p_nVeRPzH9zM6X3E5H4rwVq1 | 李氏 | accepted |
| spouses | p_nVeRPzH9zM6X3E5H4rwVq1 | 李氏 | accepted |
| ancestors | p_VwN7eG86JDxNDZrGUdF1Q5 | 王麟 | accepted |
| ancestors | p_XwKHLH17io2m6CKt414qzT | 王伍 | accepted |

## 外部来源

- [维基数据：李氏（Q65820432）](https://www.wikidata.org/wiki/Q65820432)
- [维基数据：王象春（Q16260916）](https://www.wikidata.org/wiki/Q16260916)
- [维基数据：王象恒（Q15940995）](https://www.wikidata.org/wiki/Q15940995)
- [维基数据：王之猷（Q16075308）](https://www.wikidata.org/wiki/Q16075308)
- [维基数据：王重光（Q15935070）](https://www.wikidata.org/wiki/Q15935070)
- [中国历代人物传记资料库：王麟（CBDB 232520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232520&o=json)
- [中国历代人物传记资料库：王重光（CBDB 217732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217732&o=json)
- [中文维基百科：王之猷](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E7%8C%B7)
- [CBDB 中国历代人物传记资料库：李氏（217734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217734&o=json)
- [CBDB 中国历代人物传记资料库：王伍（217730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217730&o=json)
- [CBDB 中国历代人物传记资料库：王之猷（126467）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126467&o=json)

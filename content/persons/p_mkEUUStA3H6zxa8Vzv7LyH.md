---
schema: wang-person/v1
id: p_mkEUUStA3H6zxa8Vzv7LyH
status: active
merged_into: null
display_name: 王昂
cbdb_id: 337975
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mCn5YavoiKNP4fM21nfeLx
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂，明人物。天順八年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 337975）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_fbC5XKL6kKCBA5CL5v22U4
          claim_id: c_mCn5YavoiKNP4fM21nfeLx
          source_id: s_S71Vwi2CwFX8kSRHwTPyST
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_S71Vwi2CwFX8kSRHwTPyST
            source_type: api_record
            title: 维基数据：王昂（Q45539296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45539296
            external_identifier: Q45539296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_4XEa4yHNGQxP2fyWbE8qEP
          claim_id: c_mCn5YavoiKNP4fM21nfeLx
          source_id: s_LNXrSAMEKqgcXBznQXD7vt
          stance: supports
          locator: CBDB:337975
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LNXrSAMEKqgcXBznQXD7vt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昂（337975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337975&o=json
            external_identifier: CBDB:337975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:52.238Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Td7bAs6UqC2hYgiy39r76C
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7jqYjTwK2n9CburgEbqaq3
          claim_id: c_Td7bAs6UqC2hYgiy39r76C
          source_id: s_S71Vwi2CwFX8kSRHwTPyST
          stance: supports
          locator: Q45539296
          quotation: null
          interpretation_note: null
          source:
            id: s_S71Vwi2CwFX8kSRHwTPyST
            source_type: api_record
            title: 维基数据：王昂（Q45539296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45539296
            external_identifier: Q45539296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_xzjzvBjFWq6kC5Dpo9qp4H
          claim_id: c_Td7bAs6UqC2hYgiy39r76C
          source_id: s_LNXrSAMEKqgcXBznQXD7vt
          stance: supports
          locator: Q45539296
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VSa8bmyZeUaA3r7ANBiLTH
        subject_person_id: p_nmksiEiPj8BciQGG5LZXMB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q3nWLyYjjBEH6aVbNkJTfL
          claim_id: c_VSa8bmyZeUaA3r7ANBiLTH
          source_id: s_S71Vwi2CwFX8kSRHwTPyST
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_S71Vwi2CwFX8kSRHwTPyST
            source_type: api_record
            title: 维基数据：王昂（Q45539296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45539296
            external_identifier: Q45539296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_LySYqmLNkh6gHPWSDUMeX7
          claim_id: c_VSa8bmyZeUaA3r7ANBiLTH
          source_id: s_pYzRbbN51bzA3eo9bup8B9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pYzRbbN51bzA3eo9bup8B9
            source_type: api_record
            title: 维基数据：王理（Q45538785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538785
            external_identifier: Q45538785
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
      object_person:
        id: p_nmksiEiPj8BciQGG5LZXMB
        status: active
        display_name: 王理
        merged_into_person_id: null
  children:
    - claim:
        id: c_EWDf3BS8qKzXQvpNRt1sdj
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ARknwHLDtDNeZVf48qiF3F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2B7RoVrEL8VA4r4hnM8auJ
          claim_id: c_EWDf3BS8qKzXQvpNRt1sdj
          source_id: s_cbBNC69nJo7iA6xbFpqp97
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_cbBNC69nJo7iA6xbFpqp97
            source_type: api_record
            title: 维基数据：王诏（Q15928211）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928211
            external_identifier: Q15928211
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:33.776Z
            metadata_json: null
        - id: cs_ENCPCzVkLVPaWsgx77b9A9
          claim_id: c_EWDf3BS8qKzXQvpNRt1sdj
          source_id: s_S71Vwi2CwFX8kSRHwTPyST
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_S71Vwi2CwFX8kSRHwTPyST
            source_type: api_record
            title: 维基数据：王昂（Q45539296）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45539296
            external_identifier: Q45539296
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
      object_person:
        id: p_ARknwHLDtDNeZVf48qiF3F
        status: active
        display_name: 王诏
        merged_into_person_id: null
    - claim:
        id: c_dEKOalLx5jmluTI1__SfQ5
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rKUpV2pr3s8XkG7N6JBbTr
          claim_id: c_dEKOalLx5jmluTI1__SfQ5
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第六十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pFJEtZMtXSRxJbNHTJPiqT
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json
            external_identifier: CBDB:67938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3NK6EhTAXgAtmFG5Dkqh4A
        status: active
        display_name: 王詔
        merged_into_person_id: null
    - claim:
        id: c_apmR9lvV_sCRbeczeM9-uU
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6d5u4KXShYSqA6iWUHjoz7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s1QqWFZF3FHbvmhE0UTUzE
          claim_id: c_apmR9lvV_sCRbeczeM9-uU
          source_id: s_YlnKUFUreSQAoU5JD8dpsR
          stance: supports
          locator: CBDB：兄弟 王詔（67938）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王誥 之父／母。
          source:
            id: s_YlnKUFUreSQAoU5JD8dpsR
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 338053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338053&o=json
            external_identifier: CBDB:338053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6d5u4KXShYSqA6iWUHjoz7
        status: active
        display_name: 王誥
        merged_into_person_id: null
    - claim:
        id: c_llsF-mWhvoTE3_lXxEB5WM
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KjASpV4nMp6G93U6MZvKrH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ll3FCb5XXX4dMEwB9VO7Z8
          claim_id: c_llsF-mWhvoTE3_lXxEB5WM
          source_id: s_6llkNhKswqnk-ZzewW4Ogf
          stance: supports
          locator: CBDB：兄弟 王詔（67938）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑾 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王鑾 之父／母。
          source:
            id: s_6llkNhKswqnk-ZzewW4Ogf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 338064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338064&o=json
            external_identifier: CBDB:338064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KjASpV4nMp6G93U6MZvKrH
        status: active
        display_name: 王鑾
        merged_into_person_id: null
    - claim:
        id: c_6pRkEzbNNpEQq1oT9JU9T5
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QCT1JrAAMuTrPdE9xk6A1T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qgYGRDU88im-HSk4_YR5g5
          claim_id: c_6pRkEzbNNpEQq1oT9JU9T5
          source_id: s_eREpNRDUeZq1XF9qCK4zG4
          stance: supports
          locator: CBDB：兄弟 王詔（67938）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王銘 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王銘 之父／母。
          source:
            id: s_eREpNRDUeZq1XF9qCK4zG4
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 338020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338020&o=json
            external_identifier: CBDB:338020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QCT1JrAAMuTrPdE9xk6A1T
        status: active
        display_name: 王銘
        merged_into_person_id: null
    - claim:
        id: c_DQPAmiCuHh1mPY3riTHfHm
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jpTWPGGx48Ru5Dv5bx2XFG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s66I2ziXmJxNqAS0nZHBCo
          claim_id: c_DQPAmiCuHh1mPY3riTHfHm
          source_id: s_iYnsz-0x1smdRcH9FU-_WO
          stance: supports
          locator: CBDB：兄弟 王詔（67938）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王讓 与 王詔 为同胞（CBDB 记「兄」），王詔 之父／母即 王讓 之父／母。
          source:
            id: s_iYnsz-0x1smdRcH9FU-_WO
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 338042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338042&o=json
            external_identifier: CBDB:338042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jpTWPGGx48Ru5Dv5bx2XFG
        status: active
        display_name: 王讓
        merged_into_person_id: null
    - claim:
        id: c_L1130Rs5nurvhpButDljpL
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qvCR1SY41Lq4VCNYzK347B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jqw1GgUGJxiOLLK_9_tuS1
          claim_id: c_L1130Rs5nurvhpButDljpL
          source_id: s_qHg30jFn1TV5h9OlK25_kU
          stance: supports
          locator: CBDB：兄弟 王詔（67938）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王謙 之父／母。
          source:
            id: s_qHg30jFn1TV5h9OlK25_kU
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 338031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338031&o=json
            external_identifier: CBDB:338031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qvCR1SY41Lq4VCNYzK347B
        status: active
        display_name: 王謙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昂，明人物。天順八年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 337975） | accepted |
| name.primary | 王昂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nmksiEiPj8BciQGG5LZXMB | 王理 | accepted |
| children | p_ARknwHLDtDNeZVf48qiF3F | 王诏 | accepted |
| children | p_3NK6EhTAXgAtmFG5Dkqh4A | 王詔 | accepted |
| children | p_6d5u4KXShYSqA6iWUHjoz7 | 王誥 | accepted |
| children | p_KjASpV4nMp6G93U6MZvKrH | 王鑾 | accepted |
| children | p_QCT1JrAAMuTrPdE9xk6A1T | 王銘 | accepted |
| children | p_jpTWPGGx48Ru5Dv5bx2XFG | 王讓 | accepted |
| children | p_qvCR1SY41Lq4VCNYzK347B | 王謙 | accepted |

## 外部来源

- [维基数据：王昂（Q45539296）](https://www.wikidata.org/wiki/Q45539296)
- [维基数据：王理（Q45538785）](https://www.wikidata.org/wiki/Q45538785)
- [维基数据：王诏（Q15928211）](https://www.wikidata.org/wiki/Q15928211)
- [中国历代人物传记资料库：王誥（CBDB 338053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338053&o=json)
- [中国历代人物传记资料库：王鑾（CBDB 338064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338064&o=json)
- [中国历代人物传记资料库：王銘（CBDB 338020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338020&o=json)
- [中国历代人物传记资料库：王謙（CBDB 338031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338031&o=json)
- [中国历代人物传记资料库：王讓（CBDB 338042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338042&o=json)
- [中国历代人物传记资料库：王詔（CBDB 67938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json)
- [CBDB 中国历代人物传记资料库：王昂（337975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337975&o=json)

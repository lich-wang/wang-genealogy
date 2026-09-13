---
schema: wang-person/v1
id: p_hhmhrJoJhGam6MtTDBQHpt
status: active
merged_into: null
display_name: 王辂
cbdb_id: 250185
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WQDVP3Em74MqzAT9KoZZtV
        subject_person_id: p_hhmhrJoJhGam6MtTDBQHpt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辂，明人物。成化十一年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 250185）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_4NDJ4TgLMnypEzFwRw7Hpv
          claim_id: c_WQDVP3Em74MqzAT9KoZZtV
          source_id: s_kkjVXEanZ4kgny7SvGjgRQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_kkjVXEanZ4kgny7SvGjgRQ
            source_type: api_record
            title: 维基数据：王辂（Q45443021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45443021
            external_identifier: Q45443021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.042Z
            metadata_json: null
        - id: cs_MuugAodkKRYnxmHnKE-RWw
          claim_id: c_WQDVP3Em74MqzAT9KoZZtV
          source_id: s_MhHR7F8MQqudKNaJjoQEP8
          stance: supports
          locator: CBDB:250185
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_MhHR7F8MQqudKNaJjoQEP8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王輅（250185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250185&o=json
            external_identifier: CBDB:250185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:11.197Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6uAqBCdPQwfn2AnjuQ3FqX
        subject_person_id: p_hhmhrJoJhGam6MtTDBQHpt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王辂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DXpq86srHEvNomYvt2p2z8
          claim_id: c_6uAqBCdPQwfn2AnjuQ3FqX
          source_id: s_kkjVXEanZ4kgny7SvGjgRQ
          stance: supports
          locator: Q45443021
          quotation: null
          interpretation_note: null
          source:
            id: s_kkjVXEanZ4kgny7SvGjgRQ
            source_type: api_record
            title: 维基数据：王辂（Q45443021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45443021
            external_identifier: Q45443021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.042Z
            metadata_json: null
        - id: cs_nAtCqWCHa1MiaS3qSh73rG
          claim_id: c_6uAqBCdPQwfn2AnjuQ3FqX
          source_id: s_MhHR7F8MQqudKNaJjoQEP8
          stance: supports
          locator: Q45443021
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GGwbF1EeKt3XbdCtBucLDw
        subject_person_id: p_jFuufzfY72LPXJ1cXZRs83
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hhmhrJoJhGam6MtTDBQHpt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_RDwy7ApJBrrNJHCS32CXvX
          claim_id: c_GGwbF1EeKt3XbdCtBucLDw
          source_id: s_kkjVXEanZ4kgny7SvGjgRQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_kkjVXEanZ4kgny7SvGjgRQ
            source_type: api_record
            title: 维基数据：王辂（Q45443021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45443021
            external_identifier: Q45443021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.042Z
            metadata_json: null
        - id: cs_CB8owB9a9YBX94hc524UmV
          claim_id: c_GGwbF1EeKt3XbdCtBucLDw
          source_id: s_H7oK5fFS5buGRQJqjruUQC
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_H7oK5fFS5buGRQJqjruUQC
            source_type: api_record
            title: 维基数据：王琳（Q45637271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45637271
            external_identifier: Q45637271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:47.952Z
            metadata_json: null
      object_person:
        id: p_jFuufzfY72LPXJ1cXZRs83
        status: active
        display_name: 王琳
        merged_into_person_id: null
  children:
    - claim:
        id: c_qjPprEEJHeBPAo4Cw7Ce7u
        subject_person_id: p_hhmhrJoJhGam6MtTDBQHpt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2CY82LiLunPZpBKWzpBz3S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_iUPRjXPAM1B1d9ZrmfrkCn
          claim_id: c_qjPprEEJHeBPAo4Cw7Ce7u
          source_id: s_WHsNKn1tPFGnXwAiuPuc2t
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WHsNKn1tPFGnXwAiuPuc2t
            source_type: api_record
            title: 维基数据：王倬（Q20063835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q20063835
            external_identifier: Q20063835
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:55.454Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%80%AC_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
        - id: cs_wtMEWE2gF8GweX7wQjLAUa
          claim_id: c_qjPprEEJHeBPAo4Cw7Ce7u
          source_id: s_KiKcwY7ixByX4xMwNVCevX
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化十四年進士登科錄:一卷
          source:
            id: s_KiKcwY7ixByX4xMwNVCevX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倬（126663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json
            external_identifier: CBDB:126663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:55.585Z
            metadata_json: null
        - id: cs_PmP66WhMkFKEAG5rBQVk9M
          claim_id: c_qjPprEEJHeBPAo4Cw7Ce7u
          source_id: s_kkjVXEanZ4kgny7SvGjgRQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kkjVXEanZ4kgny7SvGjgRQ
            source_type: api_record
            title: 维基数据：王辂（Q45443021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45443021
            external_identifier: Q45443021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.042Z
            metadata_json: null
      object_person:
        id: p_2CY82LiLunPZpBKWzpBz3S
        status: active
        display_name: 王倬
        merged_into_person_id: null
    - claim:
        id: c_jFhCH41hU9FAkd1KcTHezy
        subject_person_id: p_hhmhrJoJhGam6MtTDBQHpt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U2Fggori7BCBLtrGmDkhHG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4cL65ZdBAKQf5xdUcHYZzn
          claim_id: c_jFhCH41hU9FAkd1KcTHezy
          source_id: s_kkjVXEanZ4kgny7SvGjgRQ
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kkjVXEanZ4kgny7SvGjgRQ
            source_type: api_record
            title: 维基数据：王辂（Q45443021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45443021
            external_identifier: Q45443021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.042Z
            metadata_json: null
        - id: cs_gqu7NNxDWPDEe9b1LAd22v
          claim_id: c_jFhCH41hU9FAkd1KcTHezy
          source_id: s_MhHR7F8MQqudKNaJjoQEP8
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化十一年進士登科錄:一卷
          source:
            id: s_MhHR7F8MQqudKNaJjoQEP8
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王輅（250185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250185&o=json
            external_identifier: CBDB:250185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:11.197Z
            metadata_json: null
        - id: cs_8MthynaGDHWGJBZjLnJNY2
          claim_id: c_jFhCH41hU9FAkd1KcTHezy
          source_id: s_jayXTadzSBPRNkB7T2cgNb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jayXTadzSBPRNkB7T2cgNb
            source_type: api_record
            title: 维基数据：王侨（Q19856054）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q19856054
            external_identifier: Q19856054
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:33.844Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
        - id: cs_GDPKKkmxcGAuj3h75WZpGS
          claim_id: c_jFhCH41hU9FAkd1KcTHezy
          source_id: s_dMF2frrYaWy1v7bz1SUT5J
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化十一年進士登科錄:一卷
          source:
            id: s_dMF2frrYaWy1v7bz1SUT5J
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王僑（199828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199828&o=json
            external_identifier: CBDB:199828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:34.004Z
            metadata_json: null
        - id: cs_K8VKeTEYWAHLL58GUuEBtD
          claim_id: c_jFhCH41hU9FAkd1KcTHezy
          source_id: s_43NcmX3fqpgyecqBk9Mp3P
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 父王輅
          interpretation_note: null
          source:
            id: s_43NcmX3fqpgyecqBk9Mp3P
            source_type: website
            title: 中文维基百科：王僑 (成化進士)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person:
        id: p_U2Fggori7BCBLtrGmDkhHG
        status: active
        display_name: 王侨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_GD6785MjEbF3aN1CbiQZGu
        subject_person_id: p_hhmhrJoJhGam6MtTDBQHpt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tzPYf19jqCxJhm5ZUDkp4h
          claim_id: c_GD6785MjEbF3aN1CbiQZGu
          source_id: s_E6h9jdxebBKJtgq5x8chCs
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 曾祖王輅；祖父王倬，兵部侍郎；父王忬，監察御史。
          interpretation_note: null
          source:
            id: s_E6h9jdxebBKJtgq5x8chCs
            source_type: website
            title: 中文维基百科：王世贞
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:13.415Z
            metadata_json: null
      object_person:
        id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        status: active
        display_name: 王世贞
        merged_into_person_id: null
    - claim:
        id: c_fixNDz8Gr4LBTth1Ke3NQi
        subject_person_id: p_hhmhrJoJhGam6MtTDBQHpt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_38CvMQkfBCMzR3DNrBhBQJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LzueFE6LR7kimyby8G1sBm
          claim_id: c_fixNDz8Gr4LBTth1Ke3NQi
          source_id: s_KSnQUJhtzzoh7dcPEKdVU4
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 曾祖王輅，贈通議大夫南京兵部右侍郎；祖父王倬。
          interpretation_note: null
          source:
            id: s_KSnQUJhtzzoh7dcPEKdVU4
            source_type: website
            title: 中文维基百科：王世懋
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E6%87%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:57:05.025Z
            metadata_json: null
      object_person:
        id: p_38CvMQkfBCMzR3DNrBhBQJ
        status: active
        display_name: 王世懋
        merged_into_person_id: null
  other: []
---

# 王辂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王辂，明人物。成化十一年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 250185） | accepted |
| name.primary | 王辂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jFuufzfY72LPXJ1cXZRs83 | 王琳 | accepted |
| children | p_2CY82LiLunPZpBKWzpBz3S | 王倬 | accepted |
| children | p_U2Fggori7BCBLtrGmDkhHG | 王侨 | accepted |
| descendants | p_g5KSSBRpZ9iAzVfbXmLaWQ | 王世贞 | accepted |
| descendants | p_38CvMQkfBCMzR3DNrBhBQJ | 王世懋 | accepted |

## 外部来源

- [维基数据：王琳（Q45637271）](https://www.wikidata.org/wiki/Q45637271)
- [维基数据：王辂（Q45443021）](https://www.wikidata.org/wiki/Q45443021)
- [维基数据：王侨（Q19856054）](https://www.wikidata.org/wiki/Q19856054)
- [维基数据：王倬（Q20063835）](https://www.wikidata.org/wiki/Q20063835)
- [中文维基百科：王僑 (成化進士)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%83%91_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB))
- [中文维基百科：王世懋](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E6%87%8B)
- [中文维基百科：王世贞](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E)
- [CBDB 中国历代人物传记资料库：王輅（250185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250185&o=json)
- [CBDB 中国历代人物传记资料库：王僑（199828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199828&o=json)
- [CBDB 中国历代人物传记资料库：王倬（126663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json)

---
schema: wang-person/v1
id: p_tvnrFsvHvQUKrNdzPoHEVm
status: active
merged_into: null
display_name: 王益之
cbdb_id: 22239
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sZeciKNfG9p89XZM51WBCH
        subject_person_id: p_tvnrFsvHvQUKrNdzPoHEVm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益之，字行甫，金华人，尝官大理司直，南宋史学家。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_bqxwom48Dn2EqHjY6FRNEo
          claim_id: c_sZeciKNfG9p89XZM51WBCH
          source_id: s_hGdsQz7aqgwRprM8Z69YpF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a1
            id: s_hGdsQz7aqgwRprM8Z69YpF
            source_type: api_record
            title: 维基数据：王益之（Q18905525）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905525
            external_identifier: Q18905525
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:06.804Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9B%8A%E4%B9%8B
        - id: cs_I7uT-XS4jcsXAXbOfvc9-d
          claim_id: c_sZeciKNfG9p89XZM51WBCH
          source_id: s_4V46zWSA_5aG2VplafwWJA
          stance: supports
          locator: 导言
          quotation: 王益之，字行甫，金华人，尝官大理司直，南宋史学家。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_4V46zWSA_5aG2VplafwWJA
            source_type: website
            title: 中文维基百科：王益之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9B%8A%E4%B9%8B
            external_identifier: Q18905525
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-11T10:29:31.867Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZXBw3PHHgSuVnRZ8iR7fVa
        subject_person_id: p_tvnrFsvHvQUKrNdzPoHEVm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4m489yjPSAgNhnrY8Tm35S
          claim_id: c_ZXBw3PHHgSuVnRZ8iR7fVa
          source_id: s_hGdsQz7aqgwRprM8Z69YpF
          stance: supports
          locator: Q18905525
          quotation: null
          interpretation_note: null
          source:
            id: s_hGdsQz7aqgwRprM8Z69YpF
            source_type: api_record
            title: 维基数据：王益之（Q18905525）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905525
            external_identifier: Q18905525
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:06.804Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9B%8A%E4%B9%8B
        - id: cs_ttBZwcWaJgKqRCXdqSo5NQ
          claim_id: c_ZXBw3PHHgSuVnRZ8iR7fVa
          source_id: s_gXKt8x2CzaZnCb1hs7YGLa
          stance: supports
          locator: Q18905525
          quotation: null
          interpretation_note: null
          source:
            id: s_gXKt8x2CzaZnCb1hs7YGLa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王益之（22239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22239&o=json
            external_identifier: CBDB:22239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:06.970Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pqUq1nA5e1kb3gxCyiH2Ko
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tvnrFsvHvQUKrNdzPoHEVm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eQ4LDMuS3wRGKzBA3EAUrA
          claim_id: c_pqUq1nA5e1kb3gxCyiH2Ko
          source_id: s_hGdsQz7aqgwRprM8Z69YpF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ZJDtt5CCGAiWgjGM3gnviF
          claim_id: c_pqUq1nA5e1kb3gxCyiH2Ko
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_D7NNZLUFKQfdTjRPpLvri2
            source_type: api_record
            title: 维基数据：王师古（Q45369091）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369091
            external_identifier: Q45369091
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_CyVhr9wMgzyJ7VLjZGkjak
          claim_id: c_pqUq1nA5e1kb3gxCyiH2Ko
          source_id: s_411AG8EkY8NdEgG32DgoBa
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_411AG8EkY8NdEgG32DgoBa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師古（10688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10688&o=json
            external_identifier: CBDB:10688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:57.995Z
            metadata_json: null
      object_person:
        id: p_CvkqbHiKU1yv5J5yN1sDim
        status: active
        display_name: 王师古
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_U6rpeGRTB9ONJqGYwCRj-e
        subject_person_id: p_S21V1QtRVNHD8arYZz2Tbo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tvnrFsvHvQUKrNdzPoHEVm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KAZiOrLAoFECpW_piSVGgd
          claim_id: c_U6rpeGRTB9ONJqGYwCRj-e
          source_id: s_waNdnAWGu0tY6BWrRcusgG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22239 王益之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_waNdnAWGu0tY6BWrRcusgG
            source_type: api_record
            title: 中国历代人物传记资料库：王睡之（CBDB 384594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384594&o=json
            external_identifier: CBDB:384594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S21V1QtRVNHD8arYZz2Tbo
        status: active
        display_name: 王睡之
        merged_into_person_id: null
---

# 王益之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王益之，字行甫，金华人，尝官大理司直，南宋史学家。 | accepted |
| name.primary | 王益之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CvkqbHiKU1yv5J5yN1sDim | 王师古 | accepted |
| other | p_S21V1QtRVNHD8arYZz2Tbo | 王睡之 | accepted |

## 外部来源

- [维基数据：王师古（Q45369091）](https://www.wikidata.org/wiki/Q45369091)
- [维基数据：王益之（Q18905525）](https://www.wikidata.org/wiki/Q18905525)
- [中国历代人物传记资料库：王睡之（CBDB 384594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384594&o=json)
- [中文维基百科：王益之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9B%8A%E4%B9%8B)
- [CBDB 中国历代人物传记资料库：王師古（10688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10688&o=json)
- [CBDB 中国历代人物传记资料库：王益之（22239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22239&o=json)

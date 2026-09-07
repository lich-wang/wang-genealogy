---
schema: wang-person/v1
id: p_YrA9NHKrJ9RAt9EUXTAeHn
status: active
merged_into: null
display_name: 王沿
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wEaMNxlBSmW0ovRq3DQ-R4
        subject_person_id: p_YrA9NHKrJ9RAt9EUXTAeHn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沿（?—?），字聖源，大名館陶人。 少年時好讀《春秋》。進士出身，試秘書省校書郎。歷官彭城、新昌縣令，後改相州觀察推官。張知白很器重他，擢拔為著作佐郎，直昭文館，涇州觀察使。慶曆二年（1042年），李元昊入寇，副都總管葛懷敏戰死，李元昊趁勝進攻渭州，王沿令州民登城，大舉旗幟以虛張聲勢，敵遂引去。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YbgQDaE8JvVMVX8YE8QpSF
          claim_id: c_wEaMNxlBSmW0ovRq3DQ-R4
          source_id: s_OfXposTDm4oJyMCUmjpCLc
          stance: supports
          locator: 导言
          quotation: 王沿（?—?），字聖源，大名館陶人。 少年時好讀《春秋》。進士出
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_OfXposTDm4oJyMCUmjpCLc
            source_type: website
            title: 中文维基百科：王沿
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B2%BF
            external_identifier: Q10415436
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VGFFbxCRz4mrX1au3gJqMK
        subject_person_id: p_YrA9NHKrJ9RAt9EUXTAeHn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1044年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1044-01-01
            latest: 1044-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F1zryAiSd5xHDrrxUBC5LA
          claim_id: c_VGFFbxCRz4mrX1au3gJqMK
          source_id: s_XwhJZ2cwgSt1iStmBXrUJg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_XwhJZ2cwgSt1iStmBXrUJg
            source_type: api_record
            title: 维基数据：王沿（Q10415436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415436
            external_identifier: Q10415436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_249TcUBWah6KQMfcf6i8yd
        subject_person_id: p_YrA9NHKrJ9RAt9EUXTAeHn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_muPvXEfQGniwDJJMEoUnqB
          claim_id: c_249TcUBWah6KQMfcf6i8yd
          source_id: s_XwhJZ2cwgSt1iStmBXrUJg
          stance: supports
          locator: Q10415436
          quotation: null
          interpretation_note: null
          source:
            id: s_XwhJZ2cwgSt1iStmBXrUJg
            source_type: api_record
            title: 维基数据：王沿（Q10415436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415436
            external_identifier: Q10415436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wvFtCJJ8huULQrpvYYP675
        subject_person_id: p_YrA9NHKrJ9RAt9EUXTAeHn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_YeDuBRffhPgU4my3fpH9gW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F5P8uAacptsAgKLqhfXXS7
          claim_id: c_wvFtCJJ8huULQrpvYYP675
          source_id: s_p82hdqZkuwzq67cgQv63Hp
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_p82hdqZkuwzq67cgQv63Hp
            source_type: api_record
            title: 维基数据：王鼎（Q45359716）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359716
            external_identifier: Q45359716
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_vqRKEpLjoRthsPtnYwqp9C
          claim_id: c_wvFtCJJ8huULQrpvYYP675
          source_id: s_XwhJZ2cwgSt1iStmBXrUJg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XwhJZ2cwgSt1iStmBXrUJg
            source_type: api_record
            title: 维基数据：王沿（Q10415436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415436
            external_identifier: Q10415436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
        - id: cs_z4PgsMiyPewtnyunRc4tZH
          claim_id: c_wvFtCJJ8huULQrpvYYP675
          source_id: s_K8RFUFWNNRBbugHS4bJxi3
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_K8RFUFWNNRBbugHS4bJxi3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沿（1922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1922&o=json
            external_identifier: CBDB:1922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:30.288Z
            metadata_json: null
      object_person:
        id: p_YeDuBRffhPgU4my3fpH9gW
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_thjNKh3MdTzkMzPMWV4pic
        subject_person_id: p_YrA9NHKrJ9RAt9EUXTAeHn
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PyELbkAg8a9FxMvC5HGPr1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6pWzBhTYxrMhUBdVASJ16Q
          claim_id: c_thjNKh3MdTzkMzPMWV4pic
          source_id: s_K8RFUFWNNRBbugHS4bJxi3
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_K8RFUFWNNRBbugHS4bJxi3
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沿（1922）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1922&o=json
            external_identifier: CBDB:1922
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:30.288Z
            metadata_json: null
        - id: cs_LxtMSiSyTfubRsLEfn1aEi
          claim_id: c_thjNKh3MdTzkMzPMWV4pic
          source_id: s_XwhJZ2cwgSt1iStmBXrUJg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XwhJZ2cwgSt1iStmBXrUJg
            source_type: api_record
            title: 维基数据：王沿（Q10415436）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415436
            external_identifier: Q10415436
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
        - id: cs_Ss1rbkFM2jN8hnP8W2nvio
          claim_id: c_thjNKh3MdTzkMzPMWV4pic
          source_id: s_28GqpbAj5GFBBMy3bgLQei
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_28GqpbAj5GFBBMy3bgLQei
            source_type: api_record
            title: 维基数据：王豫（Q45363061）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363061
            external_identifier: Q45363061
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
      object_person:
        id: p_PyELbkAg8a9FxMvC5HGPr1
        status: active
        display_name: 王豫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王沿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王沿（?—?），字聖源，大名館陶人。 少年時好讀《春秋》。進士出身，試秘書省校書郎。歷官彭城、新昌縣令，後改相州觀察推官。張知白很器重他，擢拔為著作佐郎，直昭文館，涇州觀察使。慶曆二年（1042年），李元昊入寇，副都總管葛懷敏戰死，李元昊趁勝進攻渭州，王沿令州民登城，大舉旗幟以虛張聲勢，敵遂引去。 | accepted |
| death.date | 1044年 | accepted |
| name.primary | 王沿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_YeDuBRffhPgU4my3fpH9gW | 王鼎 | accepted |
| children | p_PyELbkAg8a9FxMvC5HGPr1 | 王豫 | accepted |

## 外部来源

- [维基数据：王鼎（Q45359716）](https://www.wikidata.org/wiki/Q45359716)
- [维基数据：王沿（Q10415436）](https://www.wikidata.org/wiki/Q10415436)
- [维基数据：王豫（Q45363061）](https://www.wikidata.org/wiki/Q45363061)
- [中文维基百科：王沿](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B2%BF)
- [CBDB 中国历代人物传记资料库：王沿（1922）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1922&o=json)

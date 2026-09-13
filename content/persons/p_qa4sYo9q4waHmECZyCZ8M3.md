---
schema: wang-person/v1
id: p_qa4sYo9q4waHmECZyCZ8M3
status: active
merged_into: null
display_name: 王文
cbdb_id: 288333
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UUpF4ppimupH8WhWFPCvzf
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。嘉靖八年進士，曾任通判、承德郎。（中国历代人物传记资料库 CBDB 288333）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_fkUDx6tPBcst4c1RCt7cn9
          claim_id: c_UUpF4ppimupH8WhWFPCvzf
          source_id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
            source_type: api_record
            title: 维基数据：王文（Q45449706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449706
            external_identifier: Q45449706
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
        - id: cs_p0vpRGIW1f5-vhyfbsidsH
          claim_id: c_UUpF4ppimupH8WhWFPCvzf
          source_id: s_ggPMxgP9MUw47QUWi5DSum
          stance: supports
          locator: CBDB:288333
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ggPMxgP9MUw47QUWi5DSum
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文（288333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288333&o=json
            external_identifier: CBDB:288333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:57.641Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6V2pihvV9YWBjxejATbdnY
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LKa2M395B6Z6rB2GD2TYt9
          claim_id: c_6V2pihvV9YWBjxejATbdnY
          source_id: s_ggPMxgP9MUw47QUWi5DSum
          stance: supports
          locator: Q45449706
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_jztWBg5q5Ko3iqJA3BQrKn
          claim_id: c_6V2pihvV9YWBjxejATbdnY
          source_id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
          stance: supports
          locator: Q45449706
          quotation: null
          interpretation_note: null
          source:
            id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
            source_type: api_record
            title: 维基数据：王文（Q45449706）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449706
            external_identifier: Q45449706
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4CBJHyfmjjqLXBC7uZhbzP
        subject_person_id: p_FxDnZ7tzsLrvZRviCHaK5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qXH7VGTJTDekUigPsdHZdd
          claim_id: c_4CBJHyfmjjqLXBC7uZhbzP
          source_id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_igK4wfV2Wj99JECd16QUYq
          claim_id: c_4CBJHyfmjjqLXBC7uZhbzP
          source_id: s_CzK2yqN8DLsEC3RpxtfMj4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CzK2yqN8DLsEC3RpxtfMj4
            source_type: api_record
            title: 维基数据：王睿（Q45449642）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449642
            external_identifier: Q45449642
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_FxDnZ7tzsLrvZRviCHaK5y
        status: active
        display_name: 王睿
        merged_into_person_id: null
  children:
    - claim:
        id: c_K9JP1NGDmdRYw9J1Asw8rR
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KHASkzeAzAbrH4KC5REzz6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_inFRDJztiqDC3x1akt6FV7
          claim_id: c_K9JP1NGDmdRYw9J1Asw8rR
          source_id: s_7uDJHF5B7XAk94UpqzckJt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7uDJHF5B7XAk94UpqzckJt
            source_type: api_record
            title: 维基数据：王爵（Q45449767）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45449767
            external_identifier: Q45449767
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:49.962Z
            metadata_json: null
        - id: cs_5kzKQ5ENPMb7PiuBsMWdTt
          claim_id: c_K9JP1NGDmdRYw9J1Asw8rR
          source_id: s_KYCJ7T8t7oGBe9X6NxJ2Mi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_KHASkzeAzAbrH4KC5REzz6
        status: active
        display_name: 王爵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_2ThUw0DJiMfRFXCY9iAwtJ
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nTV1T9RX74vHEA3tyMaebm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KYOAJRT5qsOXfoICSc_ZAB
          claim_id: c_2ThUw0DJiMfRFXCY9iAwtJ
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VNsrGWznq4wS5HwLa4u6ov
            source_type: api_record
            title: 中国历代人物传记资料库：王與齡（CBDB 68464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json
            external_identifier: CBDB:68464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nTV1T9RX74vHEA3tyMaebm
        status: active
        display_name: 王與齡
        merged_into_person_id: null
    - claim:
        id: c_H20whXWxRIYGG2OS_2_RYR
        subject_person_id: p_qa4sYo9q4waHmECZyCZ8M3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qzznHsDy1MaFH1YWPbYub4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1A4x89A3bPQ63v8HTGmsdb
          claim_id: c_H20whXWxRIYGG2OS_2_RYR
          source_id: s_ggPMxgP9MUw47QUWi5DSum
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第九十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qzznHsDy1MaFH1YWPbYub4
        status: active
        display_name: 王培龄
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文，明人物。嘉靖八年進士，曾任通判、承德郎。（中国历代人物传记资料库 CBDB 288333） | accepted |
| name.primary | 王文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FxDnZ7tzsLrvZRviCHaK5y | 王睿 | accepted |
| children | p_KHASkzeAzAbrH4KC5REzz6 | 王爵 | accepted |
| descendants | p_nTV1T9RX74vHEA3tyMaebm | 王與齡 | accepted |
| descendants | p_qzznHsDy1MaFH1YWPbYub4 | 王培龄 | accepted |

## 外部来源

- [维基数据：王爵（Q45449767）](https://www.wikidata.org/wiki/Q45449767)
- [维基数据：王睿（Q45449642）](https://www.wikidata.org/wiki/Q45449642)
- [维基数据：王文（Q45449706）](https://www.wikidata.org/wiki/Q45449706)
- [中国历代人物传记资料库：王與齡（CBDB 68464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json)
- [CBDB 中国历代人物传记资料库：王文（288333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288333&o=json)

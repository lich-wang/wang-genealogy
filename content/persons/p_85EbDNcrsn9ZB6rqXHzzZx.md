---
schema: wang-person/v1
id: p_85EbDNcrsn9ZB6rqXHzzZx
status: active
merged_into: null
display_name: 王承祐
cbdb_id: 17749
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GNQZ9toA6bAMW9a4p39j7e
        subject_person_id: p_85EbDNcrsn9ZB6rqXHzzZx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祐，宋人物。籍贯開封，曾任如京使、尚書省禮部祠部司郎中。（中国历代人物传记资料库 CBDB 17749）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_HC8dY5acRREc9R6nsyJLJ4
          claim_id: c_GNQZ9toA6bAMW9a4p39j7e
          source_id: s_b6Pc1i8AQzFkjZM7aVVC7A
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_b6Pc1i8AQzFkjZM7aVVC7A
            source_type: api_record
            title: 维基数据：王承祐（Q45387105）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387105
            external_identifier: Q45387105
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_XHdqtanPNDDgXLqUIQhL8L
          claim_id: c_GNQZ9toA6bAMW9a4p39j7e
          source_id: s_A9no22qD7MHbRmwYnZYjQe
          stance: supports
          locator: CBDB:17749
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_A9no22qD7MHbRmwYnZYjQe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承祐（17749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17749&o=json
            external_identifier: CBDB:17749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:01.779Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DJyH7KaBC8PnzkC5E1HDrw
        subject_person_id: p_85EbDNcrsn9ZB6rqXHzzZx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祐
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_En443QCA1BTYaJzTrBuDnb
          claim_id: c_DJyH7KaBC8PnzkC5E1HDrw
          source_id: s_b6Pc1i8AQzFkjZM7aVVC7A
          stance: supports
          locator: Q45387105
          quotation: null
          interpretation_note: null
          source:
            id: s_b6Pc1i8AQzFkjZM7aVVC7A
            source_type: api_record
            title: 维基数据：王承祐（Q45387105）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387105
            external_identifier: Q45387105
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_htddLbmLwwwQYfFWkLjzXz
          claim_id: c_DJyH7KaBC8PnzkC5E1HDrw
          source_id: s_A9no22qD7MHbRmwYnZYjQe
          stance: supports
          locator: Q45387105
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Fi5VQcdjkvHeYpS71TRc1j
        subject_person_id: p_jhAXJEb1U9Ldt73n9uUeLS
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_85EbDNcrsn9ZB6rqXHzzZx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G64voxWRiqYeu8c8dXQSwu
          claim_id: c_Fi5VQcdjkvHeYpS71TRc1j
          source_id: s_xENpuVFCdYJGng5v6VfekN
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_xENpuVFCdYJGng5v6VfekN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王審琦（3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:41.447Z
            metadata_json: null
        - id: cs_eXNTPQ3DhFLwr5r65iaH5X
          claim_id: c_Fi5VQcdjkvHeYpS71TRc1j
          source_id: s_b6Pc1i8AQzFkjZM7aVVC7A
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_b6Pc1i8AQzFkjZM7aVVC7A
            source_type: api_record
            title: 维基数据：王承祐（Q45387105）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387105
            external_identifier: Q45387105
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:01.600Z
            metadata_json: null
        - id: cs_uVNz6j93QFg4et3wuMqLoc
          claim_id: c_Fi5VQcdjkvHeYpS71TRc1j
          source_id: s_DD7i8QKPn7xPVwKmB24Dfi
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_DD7i8QKPn7xPVwKmB24Dfi
            source_type: api_record
            title: 维基数据：王审琦（Q15940340）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15940340
            external_identifier: Q15940340
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person:
        id: p_jhAXJEb1U9Ldt73n9uUeLS
        status: active
        display_name: 王审琦
        merged_into_person_id: null
    - claim:
        id: c_kOe0ieOxYG7CQ-HZZEZ4ei
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_85EbDNcrsn9ZB6rqXHzzZx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MN60lD5HnEEW_BQY5N2GPy
          claim_id: c_kOe0ieOxYG7CQ-HZZEZ4ei
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1710：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kXDqY3oX1V5PnHzqot3UVv
            source_type: api_record
            title: 中国历代人物传记资料库：王審琦（CBDB 3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3FwfmVLuawARCoZyhyo5mg
        status: active
        display_name: 王審琦
        merged_into_person_id: null
  children:
    - claim:
        id: c_9WLCzHt5tECLPWrNfL9GPi
        subject_person_id: p_85EbDNcrsn9ZB6rqXHzzZx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FeTYKhXT263ArThLLQ1A9F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rH5fQsozTBfFUxpopw988r
          claim_id: c_9WLCzHt5tECLPWrNfL9GPi
          source_id: s_b6Pc1i8AQzFkjZM7aVVC7A
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_pbR6T4jqYDJHQWfRVCoU2B
          claim_id: c_9WLCzHt5tECLPWrNfL9GPi
          source_id: s_AR4PsZDWVcPSsPLajb8s1c
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_AR4PsZDWVcPSsPLajb8s1c
            source_type: api_record
            title: 维基数据：王世彦（Q45387199）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45387199
            external_identifier: Q45387199
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:16.211Z
            metadata_json: null
        - id: cs_86ETFxWWczhmnQMrQnRcZD
          claim_id: c_9WLCzHt5tECLPWrNfL9GPi
          source_id: s_A9no22qD7MHbRmwYnZYjQe
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_FeTYKhXT263ArThLLQ1A9F
        status: active
        display_name: 王世彦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承祐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承祐，宋人物。籍贯開封，曾任如京使、尚書省禮部祠部司郎中。（中国历代人物传记资料库 CBDB 17749） | accepted |
| name.primary | 王承祐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jhAXJEb1U9Ldt73n9uUeLS | 王审琦 | accepted |
| parents | p_3FwfmVLuawARCoZyhyo5mg | 王審琦 | accepted |
| children | p_FeTYKhXT263ArThLLQ1A9F | 王世彦 | accepted |

## 外部来源

- [维基数据：王承祐（Q45387105）](https://www.wikidata.org/wiki/Q45387105)
- [维基数据：王审琦（Q15940340）](https://www.wikidata.org/wiki/Q15940340)
- [维基数据：王世彦（Q45387199）](https://www.wikidata.org/wiki/Q45387199)
- [中国历代人物传记资料库：王審琦（CBDB 3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
- [CBDB 中国历代人物传记资料库：王承祐（17749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17749&o=json)

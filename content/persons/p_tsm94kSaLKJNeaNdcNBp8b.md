---
schema: wang-person/v1
id: p_tsm94kSaLKJNeaNdcNBp8b
status: active
merged_into: null
display_name: 王之奇
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L6mG8ngFIWRqzPCSBDjuwR
        subject_person_id: p_tsm94kSaLKJNeaNdcNBp8b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之奇（？—1173年），字能甫，庆州（今甘肃省庆阳县）人。南宋大臣。徽猷阁直学士王庶之子。 宋高宗绍兴元年（1131年）以父任补京秩，宋孝宗隆兴元年（1163年）知光化军。乾道二年（1166年）转任淮南转运判官。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_DQAM1Xyn4DvLQ1m4zAXQC9
          claim_id: c_L6mG8ngFIWRqzPCSBDjuwR
          source_id: s_HJTaHvutQDKLfEkKwcpc9F
          stance: supports
          locator: 导言
          quotation: 王之奇（？—1173年），字能甫，庆州（今甘肃省庆阳县）人。南宋
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_HJTaHvutQDKLfEkKwcpc9F
            source_type: website
            title: 中文维基百科：王之奇
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E5%A5%87
            external_identifier: Q45378637
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2dyNZkjAGbxWRM88XaFDdd
        subject_person_id: p_tsm94kSaLKJNeaNdcNBp8b
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1173年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1173-01-01
            latest: 1173-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fRPY8848UCtLEDAmtb7Uht
          claim_id: c_2dyNZkjAGbxWRM88XaFDdd
          source_id: s_kA7y7DSZb3PP4dNd178fn4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_kA7y7DSZb3PP4dNd178fn4
            source_type: api_record
            title: 维基数据：王之奇（Q45378637）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378637
            external_identifier: Q45378637
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xMvhtFvVZy9C6oXj2sh2zP
        subject_person_id: p_tsm94kSaLKJNeaNdcNBp8b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之奇
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HCdeiETaMLBW3jacaA476r
          claim_id: c_xMvhtFvVZy9C6oXj2sh2zP
          source_id: s_kA7y7DSZb3PP4dNd178fn4
          stance: supports
          locator: Q45378637
          quotation: null
          interpretation_note: null
          source:
            id: s_kA7y7DSZb3PP4dNd178fn4
            source_type: api_record
            title: 维基数据：王之奇（Q45378637）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378637
            external_identifier: Q45378637
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8Jx3aTzY6JRcjGAgxB3R8J
        subject_person_id: p_dFErF9xwN5pGwyUpnh9Vds
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_tsm94kSaLKJNeaNdcNBp8b
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_35bFZV2iyyNqz5ER2ZPtvF
          claim_id: c_8Jx3aTzY6JRcjGAgxB3R8J
          source_id: s_kA7y7DSZb3PP4dNd178fn4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_kA7y7DSZb3PP4dNd178fn4
            source_type: api_record
            title: 维基数据：王之奇（Q45378637）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378637
            external_identifier: Q45378637
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
        - id: cs_G9KZBTgaK7i6JJVHZYWxbt
          claim_id: c_8Jx3aTzY6JRcjGAgxB3R8J
          source_id: s_A9NvMbSKLNVkGa8A8sht2j
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_A9NvMbSKLNVkGa8A8sht2j
            source_type: api_record
            title: 维基数据：王庶（Q45359667）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359667
            external_identifier: Q45359667
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:49:54.134Z
            metadata_json: null
        - id: cs_QJuPqoP9n1dfBSwitUtSUD
          claim_id: c_8Jx3aTzY6JRcjGAgxB3R8J
          source_id: s_i5eaBd4Jiq59LiTDrRCQwi
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_i5eaBd4Jiq59LiTDrRCQwi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王庶（1878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1878&o=json
            external_identifier: CBDB:1878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:17.729Z
            metadata_json: null
      object_person:
        id: p_dFErF9xwN5pGwyUpnh9Vds
        status: active
        display_name: 王庶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王之奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之奇（？—1173年），字能甫，庆州（今甘肃省庆阳县）人。南宋大臣。徽猷阁直学士王庶之子。 宋高宗绍兴元年（1131年）以父任补京秩，宋孝宗隆兴元年（1163年）知光化军。乾道二年（1166年）转任淮南转运判官。 | accepted |
| death.date | 1173年 | accepted |
| name.primary | 王之奇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dFErF9xwN5pGwyUpnh9Vds | 王庶 | accepted |

## 外部来源

- [维基数据：王庶（Q45359667）](https://www.wikidata.org/wiki/Q45359667)
- [维基数据：王之奇（Q45378637）](https://www.wikidata.org/wiki/Q45378637)
- [中文维基百科：王之奇](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E5%A5%87)
- [CBDB 中国历代人物传记资料库：王庶（1878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1878&o=json)

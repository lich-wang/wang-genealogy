---
schema: wang-person/v1
id: p_cwt7w7d5McN5D25Wz98qBN
status: active
merged_into: null
display_name: 王伯序
cbdb_id: 17445
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7AnJy4ydj2D3g7MPhQnd2J
        subject_person_id: p_cwt7w7d5McN5D25Wz98qBN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯序，宋人物。籍贯鄞縣，入仕進士，曾任宗正寺丞。（中国历代人物传记资料库 CBDB 17445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FUSVbcNcLHnx2jZW7rHZBg
          claim_id: c_7AnJy4ydj2D3g7MPhQnd2J
          source_id: s_Jsqj1W6zLox2eHwzqdPyns
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Jsqj1W6zLox2eHwzqdPyns
            source_type: api_record
            title: 维基数据：王伯序（Q45386166）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386166
            external_identifier: Q45386166
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_i8zQXcoEJucU4NmNBTdHml
          claim_id: c_7AnJy4ydj2D3g7MPhQnd2J
          source_id: s_W7yZyGZP5vrgPJJ2xJuQVv
          stance: supports
          locator: CBDB:17445
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_W7yZyGZP5vrgPJJ2xJuQVv
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王伯序（17445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17445&o=json
            external_identifier: CBDB:17445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.417Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NhD55QDYDfFdTEx2tCV6Fn
        subject_person_id: p_cwt7w7d5McN5D25Wz98qBN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯序
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_S6hgrh5FKWQ61JLLHcCMVk
          claim_id: c_NhD55QDYDfFdTEx2tCV6Fn
          source_id: s_Jsqj1W6zLox2eHwzqdPyns
          stance: supports
          locator: Q45386166
          quotation: null
          interpretation_note: null
          source:
            id: s_Jsqj1W6zLox2eHwzqdPyns
            source_type: api_record
            title: 维基数据：王伯序（Q45386166）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386166
            external_identifier: Q45386166
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_pVx4e1uFiJQX5HzKDc3Zx1
          claim_id: c_NhD55QDYDfFdTEx2tCV6Fn
          source_id: s_W7yZyGZP5vrgPJJ2xJuQVv
          stance: supports
          locator: Q45386166
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HCM34CJhB5nwj5fbuLEGTJ
        subject_person_id: p_4Ggi24K5h2C2ehfArZY8Pm
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_cwt7w7d5McN5D25Wz98qBN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1MnujtMzKEV9LGJg1jHuCJ
          claim_id: c_HCM34CJhB5nwj5fbuLEGTJ
          source_id: s_LA9Z3uamCjfBnA9kJYSEdz
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_LA9Z3uamCjfBnA9kJYSEdz
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王次翁（1908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1908&o=json
            external_identifier: CBDB:1908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:29.118Z
            metadata_json: null
        - id: cs_HUJYhbHFV21R78DBhowXHw
          claim_id: c_HCM34CJhB5nwj5fbuLEGTJ
          source_id: s_Jsqj1W6zLox2eHwzqdPyns
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Jsqj1W6zLox2eHwzqdPyns
            source_type: api_record
            title: 维基数据：王伯序（Q45386166）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386166
            external_identifier: Q45386166
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_ab5psC45umBB963MHttZBG
          claim_id: c_HCM34CJhB5nwj5fbuLEGTJ
          source_id: s_N8J87U9e5LKKFKtnTF4GL7
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_N8J87U9e5LKKFKtnTF4GL7
            source_type: api_record
            title: 维基数据：王次翁（Q10415243）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415243
            external_identifier: Q10415243
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:46.417Z
            metadata_json: null
      object_person:
        id: p_4Ggi24K5h2C2ehfArZY8Pm
        status: active
        display_name: 王次翁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王伯序

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯序，宋人物。籍贯鄞縣，入仕進士，曾任宗正寺丞。（中国历代人物传记资料库 CBDB 17445） | accepted |
| name.primary | 王伯序 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4Ggi24K5h2C2ehfArZY8Pm | 王次翁 | accepted |

## 外部来源

- [维基数据：王伯序（Q45386166）](https://www.wikidata.org/wiki/Q45386166)
- [维基数据：王次翁（Q10415243）](https://www.wikidata.org/wiki/Q10415243)
- [CBDB 中国历代人物传记资料库：王伯序（17445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17445&o=json)
- [CBDB 中国历代人物传记资料库：王次翁（1908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1908&o=json)

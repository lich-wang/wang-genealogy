---
schema: wang-person/v1
id: p_AQQK44rG2aArJYPrsmJA2p
status: active
merged_into: null
display_name: 王士珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1aZaB5vER995v5FoDC6H9n
        subject_person_id: p_AQQK44rG2aArJYPrsmJA2p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4WgwFTLR334s8BuxBM3rB6
          claim_id: c_1aZaB5vER995v5FoDC6H9n
          source_id: s_tEwsaPFvc1VJPzYHqm2tjq
          stance: supports
          locator: CBDB:58759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58759）
          source: &a1
            id: s_tEwsaPFvc1VJPzYHqm2tjq
            source_type: api_record
            title: 中国历代人物传记资料库：王士珍（CBDB 58759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58759&o=json
            external_identifier: CBDB:58759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zUxrpuruFzcuzEyM5NpE3L
        subject_person_id: p_AQQK44rG2aArJYPrsmJA2p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1861年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zB3u18QDxTUdwz7T3g8vC3
          claim_id: c_zUxrpuruFzcuzEyM5NpE3L
          source_id: s_tEwsaPFvc1VJPzYHqm2tjq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_haSBwk3E6nTkbGfFEdaBEH
        subject_person_id: p_AQQK44rG2aArJYPrsmJA2p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1930年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MnbwySSb8NZz8ZdfvnB3Kn
          claim_id: c_haSBwk3E6nTkbGfFEdaBEH
          source_id: s_tEwsaPFvc1VJPzYHqm2tjq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oFA8XFThFSBfTx84DGkGTh
        subject_person_id: p_AQQK44rG2aArJYPrsmJA2p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士珍（1861年—1930年），中華民國人物。籍贯正定，入仕武舉人，曾任軍政司正使、陸軍部右侍郎、陸軍大臣。（中国历代人物传记资料库 CBDB 58759）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vxJhMhRjE6HkTJIPnrNvak
          claim_id: c_oFA8XFThFSBfTx84DGkGTh
          source_id: s_tEwsaPFvc1VJPzYHqm2tjq
          stance: supports
          locator: CBDB:58759
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士珍 | accepted |
| birth.date | 1861年 | accepted |
| death.date | 1930年 | accepted |
| bio.summary | 王士珍（1861年—1930年），中華民國人物。籍贯正定，入仕武舉人，曾任軍政司正使、陸軍部右侍郎、陸軍大臣。（中国历代人物传记资料库 CBDB 58759） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士珍（CBDB 58759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58759&o=json)

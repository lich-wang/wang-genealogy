---
schema: wang-person/v1
id: p_VABDaNqeokNeUhSBaXqRrB
status: active
merged_into: null
display_name: 王玄
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1zSr26MAVDV5u71ipK8fY1
        subject_person_id: p_VABDaNqeokNeUhSBaXqRrB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄，五代人物。CBDB 记录其籍贯记录为平棘，身份包括富豪，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 21949 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tpTXKXhz3VNi6SDdKXFN8r
          claim_id: c_1zSr26MAVDV5u71ipK8fY1
          source_id: s_ZU4AZH8igVG4hRZTkSYybo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZU4AZH8igVG4hRZTkSYybo
            source_type: api_record
            title: 维基数据：王玄（Q45401566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401566
            external_identifier: Q45401566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
        - id: cs_hJ6VgwdZGaVAK3lg2GgGaX
          claim_id: c_1zSr26MAVDV5u71ipK8fY1
          source_id: s_4sGUMc4wRTGTMtQEDiCSra
          stance: supports
          locator: CBDB:21949
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4sGUMc4wRTGTMtQEDiCSra
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王玄（21949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21949&o=json
            external_identifier: CBDB:21949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:13.023Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6R46CagtiEXkMSmENX5kfG
        subject_person_id: p_VABDaNqeokNeUhSBaXqRrB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DxEhWFxWdN5YVopYDQoT78
          claim_id: c_6R46CagtiEXkMSmENX5kfG
          source_id: s_ZU4AZH8igVG4hRZTkSYybo
          stance: supports
          locator: Q45401566
          quotation: null
          interpretation_note: null
          source:
            id: s_ZU4AZH8igVG4hRZTkSYybo
            source_type: api_record
            title: 维基数据：王玄（Q45401566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401566
            external_identifier: Q45401566
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
        - id: cs_VFYEbwdAKmD1Go27UsEbBV
          claim_id: c_6R46CagtiEXkMSmENX5kfG
          source_id: s_4sGUMc4wRTGTMtQEDiCSra
          stance: supports
          locator: Q45401566
          quotation: null
          interpretation_note: null
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

# 王玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玄，五代人物。CBDB 记录其籍贯记录为平棘，身份包括富豪，入仕记录为封贈。中国历代人物传记资料库（CBDB）以人物编号 21949 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王玄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王玄（Q45401566）](https://www.wikidata.org/wiki/Q45401566)
- [CBDB 中国历代人物传记资料库：王玄（21949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21949&o=json)

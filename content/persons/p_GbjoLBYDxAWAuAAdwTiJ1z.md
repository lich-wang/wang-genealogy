---
schema: wang-person/v1
id: p_GbjoLBYDxAWAuAAdwTiJ1z
status: active
merged_into: null
display_name: 桃根
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m8tKk-OqYN3A0qw2CYMTBK
        subject_person_id: p_GbjoLBYDxAWAuAAdwTiJ1z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 桃根，東晉人物。中国历代人物传记资料库（CBDB）以人物编号 135443 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D9oqgr8XmjNMJRN6YJegEX
          claim_id: c_m8tKk-OqYN3A0qw2CYMTBK
          source_id: s_uwNH2dAJxGQ3DZd37a14He
          stance: supports
          locator: CBDB:135443
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uwNH2dAJxGQ3DZd37a14He
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：桃根（135443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135443&o=json
            external_identifier: CBDB:135443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:31.505Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PW2JM2bRGZDaPVHtzy5VBM
        subject_person_id: p_GbjoLBYDxAWAuAAdwTiJ1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 桃根
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6YgMmV3GuRtBYQtz3FYD45
          claim_id: c_PW2JM2bRGZDaPVHtzy5VBM
          source_id: s_uwNH2dAJxGQ3DZd37a14He
          stance: supports
          locator: Q45472947
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qvFP6XJM7St42Pd1EbNPMm
          claim_id: c_PW2JM2bRGZDaPVHtzy5VBM
          source_id: s_9zS5n7VKB8DJj5GDELZakP
          stance: supports
          locator: Q45472947
          quotation: null
          interpretation_note: null
          source:
            id: s_9zS5n7VKB8DJj5GDELZakP
            source_type: api_record
            title: 维基数据：桃根（Q45472947）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45472947
            external_identifier: Q45472947
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:31.373Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_MK8HhRyKsr5FLPZCopdh6Z
        subject_person_id: p_9kvwNC8EwFdL41MBGhg7HG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GbjoLBYDxAWAuAAdwTiJ1z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FUoVxSiAWVcBwSFV3p2iGA
          claim_id: c_MK8HhRyKsr5FLPZCopdh6Z
          source_id: s_dypc2T3zk15WKQ7XHyCLp1
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_dypc2T3zk15WKQ7XHyCLp1
            source_type: api_record
            title: 維基數據：王獻之（Q559425）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q559425
            external_identifier: Q559425
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:47.659Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8C%AE%E4%B9%8B
        - id: cs_roJku5NiUoDruUfFTWmoW2
          claim_id: c_MK8HhRyKsr5FLPZCopdh6Z
          source_id: s_9zS5n7VKB8DJj5GDELZakP
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_9zS5n7VKB8DJj5GDELZakP
            source_type: api_record
            title: 维基数据：桃根（Q45472947）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45472947
            external_identifier: Q45472947
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:31.373Z
            metadata_json: null
        - id: cs_NdoAHFzWFCWq3DiW8nufMB
          claim_id: c_MK8HhRyKsr5FLPZCopdh6Z
          source_id: s_uwNH2dAJxGQ3DZd37a14He
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_uwNH2dAJxGQ3DZd37a14He
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：桃根（135443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135443&o=json
            external_identifier: CBDB:135443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:31.505Z
            metadata_json: null
      object_person:
        id: p_9kvwNC8EwFdL41MBGhg7HG
        status: active
        display_name: 王獻之
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 桃根

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 桃根，東晉人物。中国历代人物传记资料库（CBDB）以人物编号 135443 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 桃根 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_9kvwNC8EwFdL41MBGhg7HG | 王獻之 | accepted |

## 外部来源

- [维基数据：桃根（Q45472947）](https://www.wikidata.org/wiki/Q45472947)
- [維基數據：王獻之（Q559425）](https://www.wikidata.org/wiki/Q559425)
- [CBDB 中国历代人物传记资料库：桃根（135443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135443&o=json)

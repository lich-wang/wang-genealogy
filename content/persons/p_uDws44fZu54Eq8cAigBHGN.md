---
schema: wang-person/v1
id: p_uDws44fZu54Eq8cAigBHGN
status: active
merged_into: null
display_name: 阎氏
cbdb_id: 262451
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QXEs3oiRfgq3oVnQ52Hsrz
        subject_person_id: p_uDws44fZu54Eq8cAigBHGN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 阎氏，王時中妻。维基数据以独立条目 Q65869000 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_D9L3_1NfH1MgvP6K_1hseN
          claim_id: c_QXEs3oiRfgq3oVnQ52Hsrz
          source_id: s_kmC97kGDVVwQFRHMuqZKMU
          stance: supports
          locator: Q65869000
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_kmC97kGDVVwQFRHMuqZKMU
            source_type: api_record
            title: 维基数据：阎氏（Q65869000）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65869000
            external_identifier: Q65869000
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:43.085Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_24sjYChaGK8uE9BPbhJTMU
        subject_person_id: p_uDws44fZu54Eq8cAigBHGN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 阎氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JuaZ4AW7fSryZLftopf3V7
          claim_id: c_24sjYChaGK8uE9BPbhJTMU
          source_id: s_kmC97kGDVVwQFRHMuqZKMU
          stance: supports
          locator: Q65869000
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_eNohPDm4iYp7Gygft44SaQ
          claim_id: c_24sjYChaGK8uE9BPbhJTMU
          source_id: s_WR4FVLexzdT5jvPbjG2tFA
          stance: supports
          locator: Q65869000
          quotation: null
          interpretation_note: null
          source:
            id: s_WR4FVLexzdT5jvPbjG2tFA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：閻氏（262451）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262451&o=json
            external_identifier: CBDB:262451
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:43.275Z
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
        id: c_DHcrJF2jQjzpwJRLK5d3Sh
        subject_person_id: p_3SWv8LY5fsb1rb4ZwewsLo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uDws44fZu54Eq8cAigBHGN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3KJ8iyYf5o5nJPHcqqyuVs
          claim_id: c_DHcrJF2jQjzpwJRLK5d3Sh
          source_id: s_kmC97kGDVVwQFRHMuqZKMU
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_kmC97kGDVVwQFRHMuqZKMU
            source_type: api_record
            title: 维基数据：阎氏（Q65869000）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65869000
            external_identifier: Q65869000
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:43.085Z
            metadata_json: null
        - id: cs_BHxCEDrMnNsYTAkV2aB9UH
          claim_id: c_DHcrJF2jQjzpwJRLK5d3Sh
          source_id: s_6HmtB82CwUfnZsN8f8ZvkG
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_6HmtB82CwUfnZsN8f8ZvkG
            source_type: api_record
            title: 维基数据：王时中（Q15913916）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15913916
            external_identifier: Q15913916
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:14.516Z
            metadata_json: null
        - id: cs_nQw2czN7KNvniEadEbQfdY
          claim_id: c_DHcrJF2jQjzpwJRLK5d3Sh
          source_id: s_JbqBcgU9EH7wWKxkC1JgHf
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：弘治三年進士登科錄:一卷
          source:
            id: s_JbqBcgU9EH7wWKxkC1JgHf
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王時中（68328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json
            external_identifier: CBDB:68328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:25.209Z
            metadata_json: null
      object_person:
        id: p_3SWv8LY5fsb1rb4ZwewsLo
        status: active
        display_name: 王时中
        merged_into_person_id: null
    - claim:
        id: c__HXweP-vRhu6pKGthQcwRl
        subject_person_id: p_fEfMjJL54WdS6wVP79X5vL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_uDws44fZu54Eq8cAigBHGN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_33AnSivEyrJWnZLtQfbrDP
          claim_id: c__HXweP-vRhu6pKGthQcwRl
          source_id: s_XorrntH4J6QdzdVHhn6Fby
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XorrntH4J6QdzdVHhn6Fby
            source_type: api_record
            title: 中国历代人物传记资料库：王時中（CBDB 68328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json
            external_identifier: CBDB:68328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fEfMjJL54WdS6wVP79X5vL
        status: active
        display_name: 王時中
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 阎氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 阎氏，王時中妻。维基数据以独立条目 Q65869000 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 阎氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3SWv8LY5fsb1rb4ZwewsLo | 王时中 | accepted |
| spouses | p_fEfMjJL54WdS6wVP79X5vL | 王時中 | accepted |

## 外部来源

- [维基数据：王时中（Q15913916）](https://www.wikidata.org/wiki/Q15913916)
- [维基数据：阎氏（Q65869000）](https://www.wikidata.org/wiki/Q65869000)
- [中国历代人物传记资料库：王時中（CBDB 68328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68328&o=json)
- [CBDB 中国历代人物传记资料库：閻氏（262451）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262451&o=json)

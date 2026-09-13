---
schema: wang-person/v1
id: p_1kmCRjxjheRUcKs82v5c1r
status: active
merged_into: null
display_name: 王庭椿
cbdb_id: 24240
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rr9vFDifG27kxEwaPiVBxC
        subject_person_id: p_1kmCRjxjheRUcKs82v5c1r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭椿，史料所见人物。本项目依据《中国历代人物传记资料库：王庭椿（CBDB 24240）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_buYC_3IODlov6_fhn2nS2E
          claim_id: c_Rr9vFDifG27kxEwaPiVBxC
          source_id: s_PRNnpaRg8PwxiVVDfJUJBW
          stance: supports
          locator: CBDB:24240
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PRNnpaRg8PwxiVVDfJUJBW
            source_type: api_record
            title: 中国历代人物传记资料库：王庭椿（CBDB 24240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24240&o=json
            external_identifier: CBDB:24240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yC3Ap4jgEzGHp2CJf2Jcva
        subject_person_id: p_1kmCRjxjheRUcKs82v5c1r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_b95nFAEPWqRuBk9Zh9Gyd3
          claim_id: c_yC3Ap4jgEzGHp2CJf2Jcva
          source_id: s_PRNnpaRg8PwxiVVDfJUJBW
          stance: supports
          locator: CBDB:24240
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lrBJLmscVL3xwK9ukP3aNK
        subject_person_id: p_ZCFBggnkNHAtiFjGNwBVSK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1kmCRjxjheRUcKs82v5c1r
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TuzWPmbA3lBNU-TQnDawy4
          claim_id: c_lrBJLmscVL3xwK9ukP3aNK
          source_id: s_DBFxKnaMSNtcFThC9xvRDa
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王庭椿 ⇄ 高祖;四世祖 王珪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DBFxKnaMSNtcFThC9xvRDa
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 1846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1846&o=json
            external_identifier: CBDB:1846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZCFBggnkNHAtiFjGNwBVSK
        status: active
        display_name: 王珪
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王庭椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭椿，史料所见人物。本项目依据《中国历代人物传记资料库：王庭椿（CBDB 24240）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王庭椿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ZCFBggnkNHAtiFjGNwBVSK | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 1846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1846&o=json)
- [中国历代人物传记资料库：王庭椿（CBDB 24240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24240&o=json)

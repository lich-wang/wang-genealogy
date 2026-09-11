---
schema: wang-person/v1
id: p_xRJGDseQUMBKBkn294Qbio
status: active
merged_into: null
display_name: 王德先
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TwF5AHKizQqmx9yy7HeJ4Z
        subject_person_id: p_xRJGDseQUMBKBkn294Qbio
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bdEJxu8u6im7KVTXycwSh9
          claim_id: c_TwF5AHKizQqmx9yy7HeJ4Z
          source_id: s_Y2LsNvPh18h3QrCuu8hn4G
          stance: supports
          locator: CBDB:23240
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23240）
          source: &a1
            id: s_Y2LsNvPh18h3QrCuu8hn4G
            source_type: api_record
            title: 中国历代人物传记资料库：王德先（CBDB 23240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23240&o=json
            external_identifier: CBDB:23240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.873Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dekBEfHBvJFj89bWjLFw6p
        subject_person_id: p_xRJGDseQUMBKBkn294Qbio
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德先，宋人物。籍贯烏程。（中国历代人物传记资料库 CBDB 23240）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-R_JvDJCDudfrsWlBwflGq
          claim_id: c_dekBEfHBvJFj89bWjLFw6p
          source_id: s_Y2LsNvPh18h3QrCuu8hn4G
          stance: supports
          locator: CBDB:23240
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xM5DiY7DpTOBhtTSo0BiMc
        subject_person_id: p_HZGPa62CZY8YGnDTSnEf7k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xRJGDseQUMBKBkn294Qbio
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2MY0RRy0HhlJo0MeqgsOx_
          claim_id: c_xM5DiY7DpTOBhtTSo0BiMc
          source_id: s_DQenVEh4QwpCMj6KY6UDMV
          stance: supports
          locator: CBDB 双向互证（子 王德先 ⇄ 父 王貴）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DQenVEh4QwpCMj6KY6UDMV
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 23239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23239&o=json
            external_identifier: CBDB:23239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HZGPa62CZY8YGnDTSnEf7k
        status: active
        display_name: 王貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9NB5CDpiXo48XYMcGwnCsu
        subject_person_id: p_F481CHuNMyvWGFBTFg72AH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xRJGDseQUMBKBkn294Qbio
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zV1Hytmj1fyHIrgeaSjhxx
          claim_id: c_9NB5CDpiXo48XYMcGwnCsu
          source_id: s_LeUdx6a3EXQmKSqzgA4GQN
          stance: supports
          locator: 紹興十八年同年小錄，176：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LeUdx6a3EXQmKSqzgA4GQN
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 23238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23238&o=json
            external_identifier: CBDB:23238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F481CHuNMyvWGFBTFg72AH
        status: active
        display_name: 王達
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王德先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德先 | accepted |
| bio.summary | 王德先，宋人物。籍贯烏程。（中国历代人物传记资料库 CBDB 23240） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HZGPa62CZY8YGnDTSnEf7k | 王貴 | accepted |
| ancestors | p_F481CHuNMyvWGFBTFg72AH | 王達 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 23238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23238&o=json)
- [中国历代人物传记资料库：王德先（CBDB 23240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23240&o=json)
- [中国历代人物传记资料库：王貴（CBDB 23239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23239&o=json)

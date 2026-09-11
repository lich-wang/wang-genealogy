---
schema: wang-person/v1
id: p_RSUipjDpHxz3E9HHKd8tnd
status: active
merged_into: null
display_name: 王大成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9mwCiyMcLS9AEXpZTjCzbS
        subject_person_id: p_RSUipjDpHxz3E9HHKd8tnd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9z1BYZwnaRdP9FDGY4xo1m
          claim_id: c_9mwCiyMcLS9AEXpZTjCzbS
          source_id: s_B4g3pqC7Hts9drdhiW8yBH
          stance: supports
          locator: CBDB:10341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10341）
          source: &a1
            id: s_B4g3pqC7Hts9drdhiW8yBH
            source_type: api_record
            title: 中国历代人物传记资料库：王大成（CBDB 10341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10341&o=json
            external_identifier: CBDB:10341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rMmVFSS4QYBZHZgYPLMLK7
        subject_person_id: p_RSUipjDpHxz3E9HHKd8tnd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_646JhK9j3DaA12EiDT6sg5
          claim_id: c_rMmVFSS4QYBZHZgYPLMLK7
          source_id: s_B4g3pqC7Hts9drdhiW8yBH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iiA57tbyP70s4XcXFMQV-y
        subject_person_id: p_GYzrQ2BLrYSPJE8qZpwK3Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RSUipjDpHxz3E9HHKd8tnd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YtWT1Rr2rtIb_AfzELAbSZ
          claim_id: c_iiA57tbyP70s4XcXFMQV-y
          source_id: s_Hpvy4Q9DgNbYJ7v6vcdLK4
          stance: supports
          locator: CBDB 双向互证（子 王大成 ⇄ 父 王蘊）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Hpvy4Q9DgNbYJ7v6vcdLK4
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊（CBDB 25232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25232&o=json
            external_identifier: CBDB:25232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GYzrQ2BLrYSPJE8qZpwK3Z
        status: active
        display_name: 王蘊
        merged_into_person_id: null
  children:
    - claim:
        id: c_Fnc3Biq_95mRz75E7-wYUC
        subject_person_id: p_RSUipjDpHxz3E9HHKd8tnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8wg5cR6vkEPrWyh2yu2Nbh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LcHkkwac17BY2SfW-qmuFT
          claim_id: c_Fnc3Biq_95mRz75E7-wYUC
          source_id: s_ER1KwCZXdEaAsM4fG9D7bN
          stance: supports
          locator: CBDB 双向互证（父 王大成 ⇄ 子 王楙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ER1KwCZXdEaAsM4fG9D7bN
            source_type: api_record
            title: 中国历代人物传记资料库：王楙（CBDB 10342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10342&o=json
            external_identifier: CBDB:10342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8wg5cR6vkEPrWyh2yu2Nbh
        status: active
        display_name: 王楙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大成 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GYzrQ2BLrYSPJE8qZpwK3Z | 王蘊 | accepted |
| children | p_8wg5cR6vkEPrWyh2yu2Nbh | 王楙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大成（CBDB 10341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10341&o=json)
- [中国历代人物传记资料库：王楙（CBDB 10342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10342&o=json)
- [中国历代人物传记资料库：王蘊（CBDB 25232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25232&o=json)

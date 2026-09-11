---
schema: wang-person/v1
id: p_a4oCdkGAPfaPsLi6y1N89U
status: active
merged_into: null
display_name: 王道純
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DAyzQPP2BWDvsz3EYm2C8x
        subject_person_id: p_a4oCdkGAPfaPsLi6y1N89U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rCzTLBsqAxZrmZpZ4jRECS
          claim_id: c_DAyzQPP2BWDvsz3EYm2C8x
          source_id: s_oE32to5g5jPQ78Qt2kfp4c
          stance: supports
          locator: CBDB:206081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206081）
          source: &a1
            id: s_oE32to5g5jPQ78Qt2kfp4c
            source_type: api_record
            title: 中国历代人物传记资料库：王道純（CBDB 206081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206081&o=json
            external_identifier: CBDB:206081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FETHYcc5dmTGF1153niwVx
        subject_person_id: p_a4oCdkGAPfaPsLi6y1N89U
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1548年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VL8YkNxHb4uc6HguAf2Vsu
          claim_id: c_FETHYcc5dmTGF1153niwVx
          source_id: s_oE32to5g5jPQ78Qt2kfp4c
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hQdUxdrTXujxc9xHBBKvG3
        subject_person_id: p_a4oCdkGAPfaPsLi6y1N89U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道純（生于1548年），明人物。明清進士進士，籍贯西安府，入仕進士。（中国历代人物传记资料库 CBDB 206081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pYrTMVCoBPzulgztkq91wz
          claim_id: c_hQdUxdrTXujxc9xHBBKvG3
          source_id: s_oE32to5g5jPQ78Qt2kfp4c
          stance: supports
          locator: CBDB:206081
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FbZeezjcrDOGTemySttcXk
        subject_person_id: p_zz3j8uK33AcFrLMLMFDM25
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a4oCdkGAPfaPsLi6y1N89U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ESMaMNn7XDb4f7RaMeMQwu
          claim_id: c_FbZeezjcrDOGTemySttcXk
          source_id: s_Y6sazMFN9VEzYrYbNw1uA2
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Y6sazMFN9VEzYrYbNw1uA2
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 213046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213046&o=json
            external_identifier: CBDB:213046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.104Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zz3j8uK33AcFrLMLMFDM25
        status: active
        display_name: 王詔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_nMdnq04ylIBuGAHx9Rl5jg
        subject_person_id: p_4UJ4VVxj4v3cfXMSY98LaM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_a4oCdkGAPfaPsLi6y1N89U
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kv5Agjb_LQamDOHOlewrlT
          claim_id: c_nMdnq04ylIBuGAHx9Rl5jg
          source_id: s_WLmbnvsPjgQzqPv8hRcdCX
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WLmbnvsPjgQzqPv8hRcdCX
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 213044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213044&o=json
            external_identifier: CBDB:213044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4UJ4VVxj4v3cfXMSY98LaM
        status: active
        display_name: 王雄
        merged_into_person_id: null
    - claim:
        id: c_BeMoPRNiygtBNK5VVMWZjf
        subject_person_id: p_LPidWW6eDJF27pPS5n46uq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_a4oCdkGAPfaPsLi6y1N89U
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5zjVEZOL-Cx2rBIRpUnMMw
          claim_id: c_BeMoPRNiygtBNK5VVMWZjf
          source_id: s_tR9UGszvkxE3ef9F4rqRVv
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tR9UGszvkxE3ef9F4rqRVv
            source_type: api_record
            title: 中国历代人物传记资料库：王鸞（CBDB 213045）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213045&o=json
            external_identifier: CBDB:213045
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LPidWW6eDJF27pPS5n46uq
        status: active
        display_name: 王鸞
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王道純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道純 | accepted |
| birth.date | 1548年 | accepted |
| bio.summary | 王道純（生于1548年），明人物。明清進士進士，籍贯西安府，入仕進士。（中国历代人物传记资料库 CBDB 206081） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zz3j8uK33AcFrLMLMFDM25 | 王詔 | accepted |
| ancestors | p_4UJ4VVxj4v3cfXMSY98LaM | 王雄 | accepted |
| ancestors | p_LPidWW6eDJF27pPS5n46uq | 王鸞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道純（CBDB 206081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206081&o=json)
- [中国历代人物传记资料库：王鸞（CBDB 213045）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213045&o=json)
- [中国历代人物传记资料库：王雄（CBDB 213044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213044&o=json)
- [中国历代人物传记资料库：王詔（CBDB 213046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213046&o=json)

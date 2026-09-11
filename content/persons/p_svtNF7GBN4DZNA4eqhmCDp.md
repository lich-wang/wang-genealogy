---
schema: wang-person/v1
id: p_svtNF7GBN4DZNA4eqhmCDp
status: active
merged_into: null
display_name: 王應乾
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RWsr5snW5A196pexy7ke4v
        subject_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jGHrdTeJD6GNj49NDSf6NN
          claim_id: c_RWsr5snW5A196pexy7ke4v
          source_id: s_x5aHJTcdgpDKD2LF4RkPPB
          stance: supports
          locator: CBDB:205803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205803）
          source: &a1
            id: s_x5aHJTcdgpDKD2LF4RkPPB
            source_type: api_record
            title: 中国历代人物传记资料库：王應乾（CBDB 205803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205803&o=json
            external_identifier: CBDB:205803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GSeauu7uzr522swkNEhPAu
        subject_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_khHaM7ykWb7x78KYj1mh5L
          claim_id: c_GSeauu7uzr522swkNEhPAu
          source_id: s_x5aHJTcdgpDKD2LF4RkPPB
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
        id: c_EgGvKLD5KF4FpM4BoeGMzM
        subject_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2n6y17jyFD64XycfktD1Bw
          claim_id: c_EgGvKLD5KF4FpM4BoeGMzM
          source_id: s_x5aHJTcdgpDKD2LF4RkPPB
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
        id: c_-2JZBbF6mjf6-0gyWkMUBv
        subject_person_id: p_9wJmZu8ZKLBaT7U97D7E3V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eLyZQJVYMVOJWWNClZuD6d
          claim_id: c_-2JZBbF6mjf6-0gyWkMUBv
          source_id: s_NDK9hzRsb38FVL8t3brT4a
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NDK9hzRsb38FVL8t3brT4a
            source_type: api_record
            title: 中国历代人物传记资料库：王文錦（CBDB 208833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208833&o=json
            external_identifier: CBDB:208833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9wJmZu8ZKLBaT7U97D7E3V
        status: active
        display_name: 王文錦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6NVqZcRfqTzy47u2nuHVbm
        subject_person_id: p_BwSK1wePNKFq4VEfY6jr8A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EcuHEaV1lYJov8BMu7qorL
          claim_id: c_6NVqZcRfqTzy47u2nuHVbm
          source_id: s_wCfvRbnwn2AKpwKHRpGQoo
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wCfvRbnwn2AKpwKHRpGQoo
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 208832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208832&o=json
            external_identifier: CBDB:208832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BwSK1wePNKFq4VEfY6jr8A
        status: active
        display_name: 王禎
        merged_into_person_id: null
    - claim:
        id: c_A5wuUWZvsxSg182IEt2YFk
        subject_person_id: p_YB8zgczxYhRCLX7M3PkMcJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kg5Q8wLXTZFOl3q0sr-4VU
          claim_id: c_A5wuUWZvsxSg182IEt2YFk
          source_id: s_Q9Thvw2J6cP5R8a5kERzJM
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q9Thvw2J6cP5R8a5kERzJM
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 208831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208831&o=json
            external_identifier: CBDB:208831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YB8zgczxYhRCLX7M3PkMcJ
        status: active
        display_name: 王維
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應乾 | accepted |
| birth.date | 1540年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9wJmZu8ZKLBaT7U97D7E3V | 王文錦 | accepted |
| ancestors | p_BwSK1wePNKFq4VEfY6jr8A | 王禎 | accepted |
| ancestors | p_YB8zgczxYhRCLX7M3PkMcJ | 王維 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維（CBDB 208831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208831&o=json)
- [中国历代人物传记资料库：王文錦（CBDB 208833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208833&o=json)
- [中国历代人物传记资料库：王應乾（CBDB 205803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205803&o=json)
- [中国历代人物传记资料库：王禎（CBDB 208832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208832&o=json)

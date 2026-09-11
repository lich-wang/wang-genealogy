---
schema: wang-person/v1
id: p_qALPGgh8VtugjCeKfcSDNY
status: active
merged_into: null
display_name: 王公錠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QwAmwCn77rVYME11QPo4Ab
        subject_person_id: p_qALPGgh8VtugjCeKfcSDNY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公錠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PwkTdUjouJMoAtcc4ntJin
          claim_id: c_QwAmwCn77rVYME11QPo4Ab
          source_id: s_yEAhw3xNuwosmaJFxnu4M1
          stance: supports
          locator: CBDB:571271
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（571271）
          source: &a1
            id: s_yEAhw3xNuwosmaJFxnu4M1
            source_type: api_record
            title: 中国历代人物传记资料库：王公錠（CBDB 571271）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571271&o=json
            external_identifier: CBDB:571271
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FhdqX9sQPA7Bjr5CCRNMMo
        subject_person_id: p_qALPGgh8VtugjCeKfcSDNY
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
        - id: cs_Umra5NtLNXo5yC8voV3pWo
          claim_id: c_FhdqX9sQPA7Bjr5CCRNMMo
          source_id: s_yEAhw3xNuwosmaJFxnu4M1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_Ew0cqUX4TddkRkd4Y30fxi
        subject_person_id: p_qALPGgh8VtugjCeKfcSDNY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fS9PQCqUyAKcB7s5ivqJ6H
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XSOkLjPaFnq3ycqKscNtT4
          claim_id: c_Ew0cqUX4TddkRkd4Y30fxi
          source_id: s_6Ahk4ML96PFF75jMtDMG4r
          stance: supports
          locator: 南昌府志，Igid=1203680：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6Ahk4ML96PFF75jMtDMG4r
            source_type: api_record
            title: 中国历代人物传记资料库：王質卿（CBDB 571272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571272&o=json
            external_identifier: CBDB:571272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fS9PQCqUyAKcB7s5ivqJ6H
        status: active
        display_name: 王質卿
        merged_into_person_id: null
  other: []
---

# 王公錠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公錠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fS9PQCqUyAKcB7s5ivqJ6H | 王質卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公錠（CBDB 571271）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571271&o=json)
- [中国历代人物传记资料库：王質卿（CBDB 571272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=571272&o=json)

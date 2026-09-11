---
schema: wang-person/v1
id: p_CStSncMJtJZRZHmAw3DK6e
status: active
merged_into: null
display_name: 葉氏
revision: 1
cbdb_id: 386581
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_lhBb4F8RbuMZPpki70XWdf
        subject_person_id: p_CStSncMJtJZRZHmAw3DK6e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 葉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AJs0fj6S-EdW5oc6XdXU6u
          claim_id: c_lhBb4F8RbuMZPpki70XWdf
          source_id: s_X2S7nxMMRainh3bcTIue4L
          stance: supports
          locator: CBDB:386581
          quotation: null
          interpretation_note: CBDB 明确记录的王濟配偶
          source: &a1
            id: s_X2S7nxMMRainh3bcTIue4L
            source_type: api_record
            title: 中国历代人物传记资料库：葉氏(葉由庚女)（CBDB 386581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386581&o=json
            external_identifier: CBDB:386581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_4sJ1KgPSpd6ixDrsJFhZh8
        subject_person_id: p_j9qHX4aKEb32fQHnBMPgoh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CStSncMJtJZRZHmAw3DK6e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s2fxhP0NQr_JYnYVF_H_f3
          claim_id: c_4sJ1KgPSpd6ixDrsJFhZh8
          source_id: s_X2S7nxMMRainh3bcTIue4L
          stance: supports
          locator: CBDB 双向互证（妻子 葉氏(葉由庚女)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_j9qHX4aKEb32fQHnBMPgoh
        status: active
        display_name: 王濟
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 葉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 葉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_j9qHX4aKEb32fQHnBMPgoh | 王濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：葉氏(葉由庚女)（CBDB 386581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386581&o=json)

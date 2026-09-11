---
schema: wang-person/v1
id: p_tJLPSgL13g5Bn4eeTNS1zm
status: active
merged_into: null
display_name: 王秬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8qGgz5MDnMtBAuZM5EpVko
        subject_person_id: p_tJLPSgL13g5Bn4eeTNS1zm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CWDMQX52V1159rQYyhHTTB
          claim_id: c_8qGgz5MDnMtBAuZM5EpVko
          source_id: s_2QJvV8kezM4QekN57fwwSU
          stance: supports
          locator: CBDB:1792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1792）
          source: &a1
            id: s_2QJvV8kezM4QekN57fwwSU
            source_type: api_record
            title: 中国历代人物传记资料库：王秬（CBDB 1792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1792&o=json
            external_identifier: CBDB:1792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.260Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TK3pS64PJWj2JuMqQMy5vh
        subject_person_id: p_tJLPSgL13g5Bn4eeTNS1zm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1173年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AHHKCge3MBjhsqEbA1s3Hb
          claim_id: c_TK3pS64PJWj2JuMqQMy5vh
          source_id: s_2QJvV8kezM4QekN57fwwSU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eodnfRy6p45F8KEBeAAPiB
        subject_person_id: p_tJLPSgL13g5Bn4eeTNS1zm
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
        - id: cs_eB36vRXwoMihNRj4rKWzjM
          claim_id: c_eodnfRy6p45F8KEBeAAPiB
          source_id: s_2QJvV8kezM4QekN57fwwSU
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
  ancestors:
    - claim:
        id: c_SlOUsnqZf_qN2zg8DWjFnD
        subject_person_id: p_YH2AWKboAH8csm9uQT4BD3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tJLPSgL13g5Bn4eeTNS1zm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wdzZqA3oqovbPEMzXCClWO
          claim_id: c_SlOUsnqZf_qN2zg8DWjFnD
          source_id: s_2QJvV8kezM4QekN57fwwSU
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YH2AWKboAH8csm9uQT4BD3
        status: active
        display_name: 王安中
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王秬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秬 | accepted |
| death.date | 1173年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_YH2AWKboAH8csm9uQT4BD3 | 王安中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秬（CBDB 1792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1792&o=json)

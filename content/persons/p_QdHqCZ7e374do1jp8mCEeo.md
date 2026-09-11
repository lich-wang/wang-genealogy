---
schema: wang-person/v1
id: p_QdHqCZ7e374do1jp8mCEeo
status: active
merged_into: null
display_name: 王式
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eJJVTp1GD78xgGFJvQ35C5
        subject_person_id: p_QdHqCZ7e374do1jp8mCEeo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5MhrAFQWKb3eMJnujBfgCE
          claim_id: c_eJJVTp1GD78xgGFJvQ35C5
          source_id: s_jewBGtKUzpoaLPwiKSBegj
          stance: supports
          locator: CBDB:139711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139711）
          source: &a1
            id: s_jewBGtKUzpoaLPwiKSBegj
            source_type: api_record
            title: 中国历代人物传记资料库：王式（CBDB 139711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139711&o=json
            external_identifier: CBDB:139711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vJMFBXz6FApfM5ixXoT6BN
        subject_person_id: p_QdHqCZ7e374do1jp8mCEeo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 580年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96zJ6N2ki64zRpFdf65yFt
          claim_id: c_vJMFBXz6FApfM5ixXoT6BN
          source_id: s_jewBGtKUzpoaLPwiKSBegj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_G35HS5iSm82DJ1erg144a9
        subject_person_id: p_QdHqCZ7e374do1jp8mCEeo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 648年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W6qF11X8Hj73xBuo6JF8xE
          claim_id: c_G35HS5iSm82DJ1erg144a9
          source_id: s_jewBGtKUzpoaLPwiKSBegj
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
        id: c_JGG8mtQzP4hJfqbmzqiMLR
        subject_person_id: p_QdHqCZ7e374do1jp8mCEeo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5C6egE81Lr15zQk2HeANw8
          claim_id: c_JGG8mtQzP4hJfqbmzqiMLR
          source_id: s_jewBGtKUzpoaLPwiKSBegj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ySFJ3fFIbv9ly7kMlT7Nal
        subject_person_id: p_QdHqCZ7e374do1jp8mCEeo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rQQ5ZmDaRcbRmGn72wPL2r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4tPE3RCadFzTvGv4aN3HGB
          claim_id: c_ySFJ3fFIbv9ly7kMlT7Nal
          source_id: s_jewBGtKUzpoaLPwiKSBegj
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 21：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rQQ5ZmDaRcbRmGn72wPL2r
        status: active
        display_name: 王弘璣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fPUgi4FEAfXXwQdCaacJxI
        subject_person_id: p_QdHqCZ7e374do1jp8mCEeo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Kj4WSetNP1Jr2HRSazJgpw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1LFKMtuMNqjVKRUyDhBJmI
          claim_id: c_fPUgi4FEAfXXwQdCaacJxI
          source_id: s__gvEoN5w9TQcXGGQp2mqvk
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 21：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s__gvEoN5w9TQcXGGQp2mqvk
            source_type: api_record
            title: 中国历代人物传记资料库：孟氏(王式妻)（CBDB 148840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148840&o=json
            external_identifier: CBDB:148840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Kj4WSetNP1Jr2HRSazJgpw
        status: active
        display_name: 孟氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王式

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式 | accepted |
| birth.date | 580年 | accepted |
| death.date | 648年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rQQ5ZmDaRcbRmGn72wPL2r | 王弘璣 | accepted |
| spouses | p_Kj4WSetNP1Jr2HRSazJgpw | 孟氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：孟氏(王式妻)（CBDB 148840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148840&o=json)
- [中国历代人物传记资料库：王式（CBDB 139711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139711&o=json)

---
schema: wang-person/v1
id: p_6uHHdLk2mddn2TPMgCgBwY
status: active
merged_into: null
display_name: 王軫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4sNjtbgQvp5DLmSCctkc92
        subject_person_id: p_6uHHdLk2mddn2TPMgCgBwY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dytCPGVNmNbUsRrGEygR4y
          claim_id: c_4sNjtbgQvp5DLmSCctkc92
          source_id: s_ZmtA4Y6QXvQkYTQAJYNLKF
          stance: supports
          locator: CBDB:1776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1776）
          source: &a1
            id: s_ZmtA4Y6QXvQkYTQAJYNLKF
            source_type: api_record
            title: 中国历代人物传记资料库：王軫（CBDB 1776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1776&o=json
            external_identifier: CBDB:1776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qg1xaKgbhQWPPyvJDG9HdC
        subject_person_id: p_6uHHdLk2mddn2TPMgCgBwY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王軫，宋人物。籍贯宛邱，身份为為善鄉里，入仕進士，曾任卿、轉運使、尚書省兵部兵部司員外郎。（中国历代人物传记资料库 CBDB 1776）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UGhUdANICohOIvcy7LdxRW
          claim_id: c_qg1xaKgbhQWPPyvJDG9HdC
          source_id: s_ZmtA4Y6QXvQkYTQAJYNLKF
          stance: supports
          locator: CBDB:1776
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_johlqiTJUV-qqDH3zGzfmQ
        subject_person_id: p_EwcWZrm5PRddQ8Fc3KK2Ma
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6uHHdLk2mddn2TPMgCgBwY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cPMObbZTvoE7737YgNhEYg
          claim_id: c_johlqiTJUV-qqDH3zGzfmQ
          source_id: s_ZmtA4Y6QXvQkYTQAJYNLKF
          stance: supports
          locator: CBDB 双向互证（父 王修 ⇄ 子 王軫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_EwcWZrm5PRddQ8Fc3KK2Ma
        status: active
        display_name: 王修
        merged_into_person_id: null
  children:
    - claim:
        id: c_jWnK6EwT950RSHFewyYSMG
        subject_person_id: p_6uHHdLk2mddn2TPMgCgBwY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VbtK8ca4wEkyE5i9wXDKgj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8MbILH9E8LUQ8OOGCvqWpy
          claim_id: c_jWnK6EwT950RSHFewyYSMG
          source_id: s_ZmtA4Y6QXvQkYTQAJYNLKF
          stance: supports
          locator: CBDB 双向互证（子 王景章 ⇄ 父 王軫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_VbtK8ca4wEkyE5i9wXDKgj
        status: active
        display_name: 王景章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王軫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王軫 | accepted |
| bio.summary | 王軫，宋人物。籍贯宛邱，身份为為善鄉里，入仕進士，曾任卿、轉運使、尚書省兵部兵部司員外郎。（中国历代人物传记资料库 CBDB 1776） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EwcWZrm5PRddQ8Fc3KK2Ma | 王修 | accepted |
| children | p_VbtK8ca4wEkyE5i9wXDKgj | 王景章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王軫（CBDB 1776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1776&o=json)

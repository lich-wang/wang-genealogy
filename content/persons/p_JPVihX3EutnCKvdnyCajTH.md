---
schema: wang-person/v1
id: p_JPVihX3EutnCKvdnyCajTH
status: active
merged_into: null
display_name: 王方
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y9FNwshZaD9bK881XqViAN
        subject_person_id: p_JPVihX3EutnCKvdnyCajTH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mbk2LWKB5USTYtz9Kz23fL
          claim_id: c_Y9FNwshZaD9bK881XqViAN
          source_id: s_XULbXbexrFZqSBjkE8JrB3
          stance: supports
          locator: CBDB:19172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19172）
          source: &a1
            id: s_XULbXbexrFZqSBjkE8JrB3
            source_type: api_record
            title: 中国历代人物传记资料库：王方（CBDB 19172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19172&o=json
            external_identifier: CBDB:19172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jn5hnDu71FA1SuTSqtYoy9
        subject_person_id: p_JPVihX3EutnCKvdnyCajTH
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
        - id: cs_yEoQC1Z3RSECzyCe8kaKVW
          claim_id: c_jn5hnDu71FA1SuTSqtYoy9
          source_id: s_XULbXbexrFZqSBjkE8JrB3
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
        id: c_mdYef-bWXq0WVwmpnidoXh
        subject_person_id: p_DvtXxwG9PckoSY3Yp7UWGB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JPVihX3EutnCKvdnyCajTH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1U5eTYYj0c6XIiqrad288-
          claim_id: c_mdYef-bWXq0WVwmpnidoXh
          source_id: s_VCtx1geuwFtPkG4pZnQqtF
          stance: supports
          locator: CBDB 双向互证（子 王方 ⇄ 父 王文化）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_VCtx1geuwFtPkG4pZnQqtF
            source_type: api_record
            title: 中国历代人物传记资料库：王文化（CBDB 19223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19223&o=json
            external_identifier: CBDB:19223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DvtXxwG9PckoSY3Yp7UWGB
        status: active
        display_name: 王文化
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DvtXxwG9PckoSY3Yp7UWGB | 王文化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方（CBDB 19172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19172&o=json)
- [中国历代人物传记资料库：王文化（CBDB 19223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19223&o=json)

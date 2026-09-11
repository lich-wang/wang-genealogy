---
schema: wang-person/v1
id: p_MLyaRuTQgKXsigje69x5rP
status: active
merged_into: null
display_name: 王汝昌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UNiu5duorWZL6VNKhFWLEL
        subject_person_id: p_MLyaRuTQgKXsigje69x5rP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bStLq6A1K57JU1V21FhTgD
          claim_id: c_UNiu5duorWZL6VNKhFWLEL
          source_id: s_fBT7B4BijF9JN1eqorV5JA
          stance: supports
          locator: CBDB:30491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30491）
          source: &a1
            id: s_fBT7B4BijF9JN1eqorV5JA
            source_type: api_record
            title: 中国历代人物传记资料库：王汝昌（CBDB 30491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30491&o=json
            external_identifier: CBDB:30491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CA36rG2ppNkZ7r6vpekem3
        subject_person_id: p_MLyaRuTQgKXsigje69x5rP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝昌，宋人物。籍贯石埭。（中国历代人物传记资料库 CBDB 30491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_84FK3rWZunC40NTsOtvjtF
          claim_id: c_CA36rG2ppNkZ7r6vpekem3
          source_id: s_fBT7B4BijF9JN1eqorV5JA
          stance: supports
          locator: CBDB:30491
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_3HYMPASsAqYkaK4mGh9EZ-
        subject_person_id: p_zGcbQEDDUm5Y71RMcWUTgh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MLyaRuTQgKXsigje69x5rP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D-WaRQRDYvNorrmPdbWhgK
          claim_id: c_3HYMPASsAqYkaK4mGh9EZ-
          source_id: s_fBT7B4BijF9JN1eqorV5JA
          stance: supports
          locator: CBDB 双向互证（祖父 王鎡 ⇄ 孫 王汝昌）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_zGcbQEDDUm5Y71RMcWUTgh
        status: active
        display_name: 王鎡
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汝昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝昌 | accepted |
| bio.summary | 王汝昌，宋人物。籍贯石埭。（中国历代人物传记资料库 CBDB 30491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_zGcbQEDDUm5Y71RMcWUTgh | 王鎡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝昌（CBDB 30491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30491&o=json)

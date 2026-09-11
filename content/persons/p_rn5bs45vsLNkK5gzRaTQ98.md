---
schema: wang-person/v1
id: p_rn5bs45vsLNkK5gzRaTQ98
status: active
merged_into: null
display_name: 王法
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gjd4BLpFgJHtnWXJmdtM63
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王法
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pjve6UzDMfkUE1yrrTCcwx
          claim_id: c_Gjd4BLpFgJHtnWXJmdtM63
          source_id: s_yQnx55PXgPSsjfouyrNp2S
          stance: supports
          locator: CBDB:210101
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210101）
          source: &a1
            id: s_yQnx55PXgPSsjfouyrNp2S
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 210101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210101&o=json
            external_identifier: CBDB:210101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.998Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4YoWnsBG9Jp7ByJnB3nTwt
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
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
        - id: cs_88NZ1D11AtDF7pd2tUQGed
          claim_id: c_4YoWnsBG9Jp7ByJnB3nTwt
          source_id: s_yQnx55PXgPSsjfouyrNp2S
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
        id: c_lwdOjZwNNfeLhqcYikNJXN
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8fDiA64i7XEi5BnTAt9qhu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U97vOXo0h8IWka-iTDjssI
          claim_id: c_lwdOjZwNNfeLhqcYikNJXN
          source_id: s_yQnx55PXgPSsjfouyrNp2S
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百一十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8fDiA64i7XEi5BnTAt9qhu
        status: active
        display_name: 王炳衡
        merged_into_person_id: null
    - claim:
        id: c_JHjM-4Nd3lguDIA-zJ7Mvp
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BSK3JVZbYgKQNPmF9hrz5q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8HffRxdxLKK-KVKSt1JeH
          claim_id: c_JHjM-4Nd3lguDIA-zJ7Mvp
          source_id: s_yQnx55PXgPSsjfouyrNp2S
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BSK3JVZbYgKQNPmF9hrz5q
        status: active
        display_name: 王炳璿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王法

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王法 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8fDiA64i7XEi5BnTAt9qhu | 王炳衡 | accepted |
| children | p_BSK3JVZbYgKQNPmF9hrz5q | 王炳璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王法（CBDB 210101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210101&o=json)

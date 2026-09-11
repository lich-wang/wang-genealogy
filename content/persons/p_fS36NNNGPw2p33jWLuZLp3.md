---
schema: wang-person/v1
id: p_fS36NNNGPw2p33jWLuZLp3
status: active
merged_into: null
display_name: 王元紹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BhyJ38vePC36xZEAMVJP9V
        subject_person_id: p_fS36NNNGPw2p33jWLuZLp3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ja9JJdCVx9Mbk4jFqADNJM
          claim_id: c_BhyJ38vePC36xZEAMVJP9V
          source_id: s_F6FjkfVw5Bi47bQpKh6SU5
          stance: supports
          locator: CBDB:190306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190306）
          source: &a1
            id: s_F6FjkfVw5Bi47bQpKh6SU5
            source_type: api_record
            title: 中国历代人物传记资料库：王元紹（CBDB 190306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190306&o=json
            external_identifier: CBDB:190306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zpbAGNCU9Xr7QeqioRKeKX
        subject_person_id: p_fS36NNNGPw2p33jWLuZLp3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 869年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z6dhm41PYJ8kpyB64TY7dK
          claim_id: c_zpbAGNCU9Xr7QeqioRKeKX
          source_id: s_F6FjkfVw5Bi47bQpKh6SU5
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
        id: c_T6HCdFLBxMo79gqFh238KG
        subject_person_id: p_fS36NNNGPw2p33jWLuZLp3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元紹（卒于869年），唐人物。籍贯新鄉。（中国历代人物传记资料库 CBDB 190306）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SpkwC7vAcaL7qGkAxBqHkF
          claim_id: c_T6HCdFLBxMo79gqFh238KG
          source_id: s_F6FjkfVw5Bi47bQpKh6SU5
          stance: supports
          locator: CBDB:190306
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aWf084hFn_KpNPoscEDNvF
        subject_person_id: p_iExwTUSihbBvbcDkEjipqk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fS36NNNGPw2p33jWLuZLp3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zL_gq4lcoabINJALZILfXs
          claim_id: c_aWf084hFn_KpNPoscEDNvF
          source_id: s_F6FjkfVw5Bi47bQpKh6SU5
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iExwTUSihbBvbcDkEjipqk
        status: active
        display_name: 王珍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元紹 | accepted |
| death.date | 869年 | accepted |
| bio.summary | 王元紹（卒于869年），唐人物。籍贯新鄉。（中国历代人物传记资料库 CBDB 190306） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iExwTUSihbBvbcDkEjipqk | 王珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元紹（CBDB 190306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190306&o=json)

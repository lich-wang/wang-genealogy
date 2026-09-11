---
schema: wang-person/v1
id: p_m7eZMCpYgpMEKPkTcctMuN
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 555423
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1IEOe_lhn2vqt1UaPgEJ_o
        subject_person_id: p_m7eZMCpYgpMEKPkTcctMuN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZMzZaYtybqJo-ydL0BQvFs
          claim_id: c_1IEOe_lhn2vqt1UaPgEJ_o
          source_id: s_VBZ5Ncwzu-tmQZBo4DBs9P
          stance: supports
          locator: CBDB:555423
          quotation: null
          interpretation_note: CBDB 明确记录的王好問配偶
          source: &a1
            id: s_VBZ5Ncwzu-tmQZBo4DBs9P
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王好問妻)（CBDB 555423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555423&o=json
            external_identifier: CBDB:555423
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
        id: c_G3HyOchJmo7YPeEpDhDKUB
        subject_person_id: p_cpa88FnT8xpUzJrWwpTN6E
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_m7eZMCpYgpMEKPkTcctMuN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_glYNN9FF6tpywZ3veUNFcl
          claim_id: c_G3HyOchJmo7YPeEpDhDKUB
          source_id: s_VBZ5Ncwzu-tmQZBo4DBs9P
          stance: supports
          locator: 南陽府志，lgid=878700：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cpa88FnT8xpUzJrWwpTN6E
        status: active
        display_name: 王好問
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cpa88FnT8xpUzJrWwpTN6E | 王好問 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王好問妻)（CBDB 555423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555423&o=json)

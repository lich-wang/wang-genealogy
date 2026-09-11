---
schema: wang-person/v1
id: p_b7v4ZZ3QYXR6v61rExDyBG
status: active
merged_into: null
display_name: 王紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HJdLtC7BQuh3KCQy4TipD2
        subject_person_id: p_b7v4ZZ3QYXR6v61rExDyBG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZMSEZU6CMcge4YJFxWGbdX
          claim_id: c_HJdLtC7BQuh3KCQy4TipD2
          source_id: s_gzgKAKtBMFdN226FUpf7XL
          stance: supports
          locator: CBDB:291941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291941）
          source: &a1
            id: s_gzgKAKtBMFdN226FUpf7XL
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 291941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291941&o=json
            external_identifier: CBDB:291941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n71Grm5refDLrqzq99MXjx
        subject_person_id: p_b7v4ZZ3QYXR6v61rExDyBG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。嘉靖十一年進士，曾任主簿。（中国历代人物传记资料库 CBDB 291941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SsWDRVpRBokc5OEe97YA0a
          claim_id: c_n71Grm5refDLrqzq99MXjx
          source_id: s_gzgKAKtBMFdN226FUpf7XL
          stance: supports
          locator: CBDB:291941
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
  ancestors: []
  descendants:
    - claim:
        id: c_i8cMJ6Znu0F3iIT2Wau0ce
        subject_person_id: p_b7v4ZZ3QYXR6v61rExDyBG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ufRLVRWc7tv4zcxsauhE29
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tIKe7hHbQ4Z8U9jhS21W-9
          claim_id: c_i8cMJ6Znu0F3iIT2Wau0ce
          source_id: s_gzgKAKtBMFdN226FUpf7XL
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ufRLVRWc7tv4zcxsauhE29
        status: active
        display_name: 王京
        merged_into_person_id: null
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。嘉靖十一年進士，曾任主簿。（中国历代人物传记资料库 CBDB 291941） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ufRLVRWc7tv4zcxsauhE29 | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 291941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291941&o=json)

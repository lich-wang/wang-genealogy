---
schema: wang-person/v1
id: p_ko3GKNk1N7bznHApNkXvMh
status: active
merged_into: null
display_name: 瞿繼鍾
revision: 1
cbdb_id: 91884
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K_BHMb4sLZ0rXGhf-rcCQ5
        subject_person_id: p_ko3GKNk1N7bznHApNkXvMh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 瞿繼鍾（1752—1793），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 91884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFGwjXE8QAyt7QPDPgqRsX
          claim_id: c_K_BHMb4sLZ0rXGhf-rcCQ5
          source_id: s_t81aRecTcw_XBOE0eCYAlr
          stance: supports
          locator: CBDB:91884
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_t81aRecTcw_XBOE0eCYAlr
            source_type: api_record
            title: 中国历代人物传记资料库：瞿繼鍾（CBDB 91884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91884&o=json
            external_identifier: CBDB:91884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kcn8Pv7w4thfnTMNfL9VZl
        subject_person_id: p_ko3GKNk1N7bznHApNkXvMh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 瞿繼鍾
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HdIcvkCtP3m1lyfXGdiu6z
          claim_id: c_kcn8Pv7w4thfnTMNfL9VZl
          source_id: s_t81aRecTcw_XBOE0eCYAlr
          stance: supports
          locator: CBDB:91884
          quotation: null
          interpretation_note: CBDB 明确记录的王愚軒配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vmCxa0QaKNilXl8jzUR9Ln
        subject_person_id: p_E1pwW8KQKxHvbvRAv7JQYh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ko3GKNk1N7bznHApNkXvMh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wG7Sns8mU-7s3mFiuOaOC3
          claim_id: c_vmCxa0QaKNilXl8jzUR9Ln
          source_id: s_t81aRecTcw_XBOE0eCYAlr
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1864, HuWenKai #786：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E1pwW8KQKxHvbvRAv7JQYh
        status: active
        display_name: 王愚軒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 瞿繼鍾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 瞿繼鍾（1752—1793），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 91884） | accepted |
| name.primary | 瞿繼鍾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_E1pwW8KQKxHvbvRAv7JQYh | 王愚軒 | accepted |

## 外部来源

- [中国历代人物传记资料库：瞿繼鍾（CBDB 91884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91884&o=json)

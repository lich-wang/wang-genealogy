---
schema: wang-person/v1
id: p_yzuZCewrFTdswMjbGtR11p
status: active
merged_into: null
display_name: 王寬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JYPvA4A935Ds3F5C6HGw54
        subject_person_id: p_yzuZCewrFTdswMjbGtR11p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5pn6knMP8s85jzoDvXxAc4
          claim_id: c_JYPvA4A935Ds3F5C6HGw54
          source_id: s_3xuYChrBqBB937oQUtGGSk
          stance: supports
          locator: CBDB:278546
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278546）
          source: &a1
            id: s_3xuYChrBqBB937oQUtGGSk
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 278546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278546&o=json
            external_identifier: CBDB:278546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.967Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WcbRX4bxdybNPjypNrkY7m
        subject_person_id: p_yzuZCewrFTdswMjbGtR11p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬，明人物。正德六年進士，曾任壽官。（中国历代人物传记资料库 CBDB 278546）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gOwjwRBhH5f-7DOdaG7bro
          claim_id: c_WcbRX4bxdybNPjypNrkY7m
          source_id: s_3xuYChrBqBB937oQUtGGSk
          stance: supports
          locator: CBDB:278546
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
        id: c_zCvVpMLQLGniAtZE6GX2MF
        subject_person_id: p_yzuZCewrFTdswMjbGtR11p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9FNcRmxr7fdvDuauZZ9azk
          claim_id: c_zCvVpMLQLGniAtZE6GX2MF
          source_id: s_3xuYChrBqBB937oQUtGGSk
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        status: active
        display_name: 王宗源
        merged_into_person_id: null
  other: []
---

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | 王寬，明人物。正德六年進士，曾任壽官。（中国历代人物传记资料库 CBDB 278546） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tuf6Y9AXWQN6kvcQsy6Eb8 | 王宗源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 278546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278546&o=json)

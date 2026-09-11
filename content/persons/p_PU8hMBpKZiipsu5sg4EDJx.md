---
schema: wang-person/v1
id: p_PU8hMBpKZiipsu5sg4EDJx
status: active
merged_into: null
display_name: 王飛瓊
cbdb_id: 56253
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_75X75o26yuDMXNTcLF5sHq
        subject_person_id: p_PU8hMBpKZiipsu5sg4EDJx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王飛瓊，清人物。中国历代人物传记资料库（CBDB）以人物编号 56253 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_zETgewkM6s0LlAIL0t8GBN
          claim_id: c_75X75o26yuDMXNTcLF5sHq
          source_id: s_8wjALb59WHkq7D2jKJcc6B
          stance: supports
          locator: CBDB:56253
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_8wjALb59WHkq7D2jKJcc6B
            source_type: api_record
            title: 中国历代人物传记资料库：王飛瓊（CBDB 56253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56253&o=json
            external_identifier: CBDB:56253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9qLz4ezVkLmhVFth3mipiP
        subject_person_id: p_PU8hMBpKZiipsu5sg4EDJx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王飛瓊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5EoKUYAh8U5BMrxMm2VMMr
          claim_id: c_9qLz4ezVkLmhVFth3mipiP
          source_id: s_8wjALb59WHkq7D2jKJcc6B
          stance: supports
          locator: CBDB:56253
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_8wjALb59WHkq7D2jKJcc6B
            source_type: api_record
            title: 中国历代人物传记资料库：王飛瓊（CBDB 56253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56253&o=json
            external_identifier: CBDB:56253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_P5yj_pwvhQIK7dJbCo9fyw
        subject_person_id: p_PU8hMBpKZiipsu5sg4EDJx
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BnX16XBiRGVsMMfzzkfCX6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9O5JmhP1MF4IsLNpaXqqgT
          claim_id: c_P5yj_pwvhQIK7dJbCo9fyw
          source_id: s_xYIlN5AD39ZqLu6VK80oAu
          stance: supports
          locator: CBDB 双向互证（丈夫 孟希增）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xYIlN5AD39ZqLu6VK80oAu
            source_type: api_record
            title: 中国历代人物传记资料库：孟希增（CBDB 56254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56254&o=json
            external_identifier: CBDB:56254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BnX16XBiRGVsMMfzzkfCX6
        status: active
        display_name: 孟希增
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王飛瓊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王飛瓊，清人物。中国历代人物传记资料库（CBDB）以人物编号 56253 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王飛瓊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BnX16XBiRGVsMMfzzkfCX6 | 孟希增 | accepted |

## 外部来源

- [中国历代人物传记资料库：孟希增（CBDB 56254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56254&o=json)
- [中国历代人物传记资料库：王飛瓊（CBDB 56253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56253&o=json)

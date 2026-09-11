---
schema: wang-person/v1
id: p_BnX16XBiRGVsMMfzzkfCX6
status: active
merged_into: null
display_name: 孟希增
revision: 1
cbdb_id: 56254
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gqxT0QhUxTgR_kXknYTP3i
        subject_person_id: p_BnX16XBiRGVsMMfzzkfCX6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孟希增
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hnMoab-KHEuzX41sbC6T89
          claim_id: c_gqxT0QhUxTgR_kXknYTP3i
          source_id: s_xYIlN5AD39ZqLu6VK80oAu
          stance: supports
          locator: CBDB:56254
          quotation: null
          interpretation_note: CBDB 明确记录的王飛瓊配偶
          source: &a1
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
          source: *a1
      object_person:
        id: p_PU8hMBpKZiipsu5sg4EDJx
        status: active
        display_name: 王飛瓊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孟希增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 孟希增 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_PU8hMBpKZiipsu5sg4EDJx | 王飛瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：孟希增（CBDB 56254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56254&o=json)

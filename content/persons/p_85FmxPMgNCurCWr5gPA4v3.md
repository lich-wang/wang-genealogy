---
schema: wang-person/v1
id: p_85FmxPMgNCurCWr5gPA4v3
status: active
merged_into: null
display_name: 孫星衍
revision: 1
cbdb_id: 34196
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4Qe7zfuRc9cot1UstlO5g
        subject_person_id: p_85FmxPMgNCurCWr5gPA4v3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫星衍（1753—1818），清人物。明清進士進士，籍贯陽湖，身份为書法家、詩人，入仕進士。（中国历代人物传记资料库 CBDB 34196）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vvwvm0y5ocB1DRXjNFw1ze
          claim_id: c_U4Qe7zfuRc9cot1UstlO5g
          source_id: s_ex0xSJ7rlUeNn8m1tGgJRv
          stance: supports
          locator: CBDB:34196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ex0xSJ7rlUeNn8m1tGgJRv
            source_type: api_record
            title: 中国历代人物传记资料库：孫星衍（CBDB 34196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34196&o=json
            external_identifier: CBDB:34196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e_ye3uuhyxUkWlzmflcHdC
        subject_person_id: p_85FmxPMgNCurCWr5gPA4v3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫星衍
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2XwDyf02MwCO3v7E7WECHC
          claim_id: c_e_ye3uuhyxUkWlzmflcHdC
          source_id: s_ex0xSJ7rlUeNn8m1tGgJRv
          stance: supports
          locator: CBDB:34196
          quotation: null
          interpretation_note: CBDB 明确记录的王采薇配偶
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
        id: c_-PiHcqCnWx2Wlu5TZJqIDi
        subject_person_id: p_HLJc15MQ6Zdco3YKBiTQmz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_85FmxPMgNCurCWr5gPA4v3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rVaRmYAk4iLbdoCWEwWQF5
          claim_id: c_-PiHcqCnWx2Wlu5TZJqIDi
          source_id: s_ex0xSJ7rlUeNn8m1tGgJRv
          stance: supports
          locator: CBDB 双向互证（丈夫 孫星衍）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HLJc15MQ6Zdco3YKBiTQmz
        status: active
        display_name: 王采薇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫星衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孫星衍（1753—1818），清人物。明清進士進士，籍贯陽湖，身份为書法家、詩人，入仕進士。（中国历代人物传记资料库 CBDB 34196） | accepted |
| name.primary | 孫星衍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_HLJc15MQ6Zdco3YKBiTQmz | 王采薇 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫星衍（CBDB 34196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34196&o=json)

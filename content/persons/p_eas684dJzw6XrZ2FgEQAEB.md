---
schema: wang-person/v1
id: p_eas684dJzw6XrZ2FgEQAEB
status: active
merged_into: null
display_name: 王暲
cbdb_id: 247370
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bpQN8o9ayU9x52iwkAqdnc
        subject_person_id: p_eas684dJzw6XrZ2FgEQAEB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暲，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247370）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8ecS0uRU8CT3K0GN_dCk3v
          claim_id: c_bpQN8o9ayU9x52iwkAqdnc
          source_id: s_GLcu6cFyK8X8aiNK3KudXe
          stance: supports
          locator: CBDB:247370
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GLcu6cFyK8X8aiNK3KudXe
            source_type: api_record
            title: 中国历代人物传记资料库：王暲（CBDB 247370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247370&o=json
            external_identifier: CBDB:247370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wgoSj6gUP5by9JJytEYLuF
        subject_person_id: p_eas684dJzw6XrZ2FgEQAEB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XfbonJpkD83oAtitw8WoQQ
          claim_id: c_wgoSj6gUP5by9JJytEYLuF
          source_id: s_GLcu6cFyK8X8aiNK3KudXe
          stance: supports
          locator: CBDB:247370
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8h8J8FdiKPF5WJIntGmEO9
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eas684dJzw6XrZ2FgEQAEB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aPOhnsim940YwINP1o8Tmp
          claim_id: c_8h8J8FdiKPF5WJIntGmEO9
          source_id: s_nOdPrMZKb5RW2mkZsSUSTK
          stance: supports
          locator: CBDB：兄弟 王暄（199620）之父／母 王鈍
          quotation: null
          interpretation_note: 由兄弟关系推断：王暲 与 王暄 为同胞（CBDB 记「弟」），王暄 之父／母即 王暲 之父／母。
          source:
            id: s_nOdPrMZKb5RW2mkZsSUSTK
            source_type: api_record
            title: 中国历代人物传记资料库：王暲（CBDB 247370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247370&o=json
            external_identifier: CBDB:247370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vNNRVNM4fb2RVGCGj65JaG
        status: active
        display_name: 王鈍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DvW0SdQH2a5WdHpV_tsFRx
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eas684dJzw6XrZ2FgEQAEB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IYaCIlTetwY2iXPvC6dgbi
          claim_id: c_DvW0SdQH2a5WdHpV_tsFRx
          source_id: s_nOdPrMZKb5RW2mkZsSUSTK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199620 王暄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nOdPrMZKb5RW2mkZsSUSTK
            source_type: api_record
            title: 中国历代人物传记资料库：王暲（CBDB 247370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247370&o=json
            external_identifier: CBDB:247370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dHFBy8GTgBZpvwKJGG8hsX
        status: active
        display_name: 王暄
        merged_into_person_id: null
---

# 王暲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王暲，明人物。成化八年進士，籍贯嵊縣。（中国历代人物传记资料库 CBDB 247370） | accepted |
| name.primary | 王暲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vNNRVNM4fb2RVGCGj65JaG | 王鈍 | accepted |
| other | p_dHFBy8GTgBZpvwKJGG8hsX | 王暄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暲（CBDB 247370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247370&o=json)

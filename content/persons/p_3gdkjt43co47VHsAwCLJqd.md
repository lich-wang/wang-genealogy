---
schema: wang-person/v1
id: p_3gdkjt43co47VHsAwCLJqd
status: active
merged_into: null
display_name: 王懋貞
cbdb_id: 337978
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Da22sfYEkdBQ871UV3XEy9
        subject_person_id: p_3gdkjt43co47VHsAwCLJqd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋貞，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7rntlwEuOg78003Y6ha-au
          claim_id: c_Da22sfYEkdBQ871UV3XEy9
          source_id: s_BQ8pr1syRTxg4kBBD1rhkM
          stance: supports
          locator: CBDB:337978
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BQ8pr1syRTxg4kBBD1rhkM
            source_type: api_record
            title: 中国历代人物传记资料库：王懋貞（CBDB 337978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337978&o=json
            external_identifier: CBDB:337978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tgTB8qAq1U1W3UMK8v2ANE
        subject_person_id: p_3gdkjt43co47VHsAwCLJqd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aztngwjDGGZRrj3HA1ri3w
          claim_id: c_tgTB8qAq1U1W3UMK8v2ANE
          source_id: s_BQ8pr1syRTxg4kBBD1rhkM
          stance: supports
          locator: CBDB:337978
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aT1MjesbW4TUhu9CHd2PvF
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3gdkjt43co47VHsAwCLJqd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9puQcAezj56W5cftT6jgDS
          claim_id: c_aT1MjesbW4TUhu9CHd2PvF
          source_id: s_EweJhVp17ubt2OoLGFaYje
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋貞 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋貞 之父／母。
          source:
            id: s_EweJhVp17ubt2OoLGFaYje
            source_type: api_record
            title: 中国历代人物传记资料库：王懋貞（CBDB 337978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337978&o=json
            external_identifier: CBDB:337978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kGHRzXtUaYBnJ8wGBJV9RP
        status: active
        display_name: 王化
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ak5Q3lWG5lqDd-B5Ly7peq
        subject_person_id: p_3gdkjt43co47VHsAwCLJqd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kMhbfiwR7VN6Y9qvqpaOJQ
          claim_id: c_ak5Q3lWG5lqDd-B5Ly7peq
          source_id: s_EweJhVp17ubt2OoLGFaYje
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EweJhVp17ubt2OoLGFaYje
            source_type: api_record
            title: 中国历代人物传记资料库：王懋貞（CBDB 337978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337978&o=json
            external_identifier: CBDB:337978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aYr3EPQVvfC6NBKDGNLUTL
        status: active
        display_name: 王懋德
        merged_into_person_id: null
---

# 王懋貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懋貞，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337978） | accepted |
| name.primary | 王懋貞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kGHRzXtUaYBnJ8wGBJV9RP | 王化 | accepted |
| other | p_aYr3EPQVvfC6NBKDGNLUTL | 王懋德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋貞（CBDB 337978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337978&o=json)

---
schema: wang-person/v1
id: p_yjjnGi66486C7Qm4RitBqB
status: active
merged_into: null
display_name: 王一鴻
cbdb_id: 336285
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ezYFZjeCRxKSpg3pvcaPwv
        subject_person_id: p_yjjnGi66486C7Qm4RitBqB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鴻，明人物。隆慶二年進士，籍贯開州。（中国历代人物传记资料库 CBDB 336285）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TXBdnPJMTRfd93HxwxAf_8
          claim_id: c_ezYFZjeCRxKSpg3pvcaPwv
          source_id: s_qFeFBxGUqWJYNs83S1BgpS
          stance: supports
          locator: CBDB:336285
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qFeFBxGUqWJYNs83S1BgpS
            source_type: api_record
            title: 中国历代人物传记资料库：王一鴻（CBDB 336285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336285&o=json
            external_identifier: CBDB:336285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2BfEhhaZFqM3E9JzkbZzZc
        subject_person_id: p_yjjnGi66486C7Qm4RitBqB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NcKJbDPsa31P8NU2LKRC5v
          claim_id: c_2BfEhhaZFqM3E9JzkbZzZc
          source_id: s_qFeFBxGUqWJYNs83S1BgpS
          stance: supports
          locator: CBDB:336285
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4Vm0rO0kUJRSZamzVsoN8e
        subject_person_id: p_D3z8LjQkLgGxFGKKZZcbKs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yjjnGi66486C7Qm4RitBqB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RJK2C9gLgy_5ua3edrtsY2
          claim_id: c_4Vm0rO0kUJRSZamzVsoN8e
          source_id: s_AzoUYin-_NeiD8dsibnGj3
          stance: supports
          locator: CBDB：兄弟 王一鳳（205635）之父／母 王繼仁
          quotation: null
          interpretation_note: 由兄弟关系推断：王一鴻 与 王一鳳 为同胞（CBDB 记「兄」），王一鳳 之父／母即 王一鴻 之父／母。
          source:
            id: s_AzoUYin-_NeiD8dsibnGj3
            source_type: api_record
            title: 中国历代人物传记资料库：王一鴻（CBDB 336285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336285&o=json
            external_identifier: CBDB:336285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D3z8LjQkLgGxFGKKZZcbKs
        status: active
        display_name: 王繼仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jXt_tH11R2IaPSlUoy5f4B
        subject_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yjjnGi66486C7Qm4RitBqB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nsoL8XAeghyPQaoNk8dUHm
          claim_id: c_jXt_tH11R2IaPSlUoy5f4B
          source_id: s_AzoUYin-_NeiD8dsibnGj3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205635 王一鳳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AzoUYin-_NeiD8dsibnGj3
            source_type: api_record
            title: 中国历代人物传记资料库：王一鴻（CBDB 336285）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336285&o=json
            external_identifier: CBDB:336285
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5cJbXaZPVCfH9EZ6651kPP
        status: active
        display_name: 王一鳳
        merged_into_person_id: null
---

# 王一鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一鴻，明人物。隆慶二年進士，籍贯開州。（中国历代人物传记资料库 CBDB 336285） | accepted |
| name.primary | 王一鴻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D3z8LjQkLgGxFGKKZZcbKs | 王繼仁 | accepted |
| other | p_5cJbXaZPVCfH9EZ6651kPP | 王一鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一鴻（CBDB 336285）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336285&o=json)

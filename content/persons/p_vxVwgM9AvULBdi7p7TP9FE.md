---
schema: wang-person/v1
id: p_vxVwgM9AvULBdi7p7TP9FE
status: active
merged_into: null
display_name: 王元老
cbdb_id: 7090
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bzf6LBHrdY3Ex67JKqU52w
        subject_person_id: p_vxVwgM9AvULBdi7p7TP9FE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元老，宋人物。中国历代人物传记资料库（CBDB）以人物编号 7090 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HboxyZOsWpxzSNFRG6ZrO1
          claim_id: c_Bzf6LBHrdY3Ex67JKqU52w
          source_id: s_F9ugHUoGQD2PiWHSgipaXV
          stance: supports
          locator: CBDB:7090
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_F9ugHUoGQD2PiWHSgipaXV
            source_type: api_record
            title: 中国历代人物传记资料库：王元老（CBDB 7090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7090&o=json
            external_identifier: CBDB:7090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aHeTG2NkhB3qtGDBNm3CD7
        subject_person_id: p_vxVwgM9AvULBdi7p7TP9FE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元老
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_S8LoBn4FvFd2ixbzXatMbH
          claim_id: c_aHeTG2NkhB3qtGDBNm3CD7
          source_id: s_F9ugHUoGQD2PiWHSgipaXV
          stance: supports
          locator: CBDB:7090
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_F9ugHUoGQD2PiWHSgipaXV
            source_type: api_record
            title: 中国历代人物传记资料库：王元老（CBDB 7090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7090&o=json
            external_identifier: CBDB:7090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gUz-uxTXVYtGo-ogSyVcfw
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vxVwgM9AvULBdi7p7TP9FE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R0L9dbxfudixxSS0sotVG9
          claim_id: c_gUz-uxTXVYtGo-ogSyVcfw
          source_id: s_eEepmYZas84z15WXEpE1gV
          stance: supports
          locator: CBDB 双向互证（孫 王元老 ⇄ 祖父 王剛中）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_eEepmYZas84z15WXEpE1gV
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 8151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8151&o=json
            external_identifier: CBDB:8151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Zvjvgshz6JbJhrGYJFm2uQ
        status: active
        display_name: 王剛中
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王元老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元老，宋人物。中国历代人物传记资料库（CBDB）以人物编号 7090 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王元老 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Zvjvgshz6JbJhrGYJFm2uQ | 王剛中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 8151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8151&o=json)
- [中国历代人物传记资料库：王元老（CBDB 7090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7090&o=json)

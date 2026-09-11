---
schema: wang-person/v1
id: p_nqXSbp6gt3VE2aHb7rdeET
status: active
merged_into: null
display_name: 王希烈
cbdb_id: 126546
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dw2pKTVXghoF7FQ9uL6gYX
        subject_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希烈，明人物。中国历代人物传记资料库（CBDB）以人物编号 126546 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_zh0sjk3y5PRETxM_n0a1_A
          claim_id: c_Dw2pKTVXghoF7FQ9uL6gYX
          source_id: s_QgtWhmwzvopNAXhnfGDat6
          stance: supports
          locator: CBDB:126546
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_QgtWhmwzvopNAXhnfGDat6
            source_type: api_record
            title: 中国历代人物传记资料库：王希烈（CBDB 126546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126546&o=json
            external_identifier: CBDB:126546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TqCR1EPkVRFJqMJ7U7aEKG
        subject_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希烈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fP4M21VUe3zpQrgGHScXvG
          claim_id: c_TqCR1EPkVRFJqMJ7U7aEKG
          source_id: s_QgtWhmwzvopNAXhnfGDat6
          stance: supports
          locator: CBDB:126546
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_QgtWhmwzvopNAXhnfGDat6
            source_type: api_record
            title: 中国历代人物传记资料库：王希烈（CBDB 126546）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126546&o=json
            external_identifier: CBDB:126546
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
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
        id: c_pKfIHWnzSv7EytKyhgikRx
        subject_person_id: p_39p4Z47cj6Pu66BinzwEbo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3mjugfLahU649Nzu99tfF
          claim_id: c_pKfIHWnzSv7EytKyhgikRx
          source_id: s_fhU8rXLDi95wUGUSnLhBMs
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第四十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fhU8rXLDi95wUGUSnLhBMs
            source_type: api_record
            title: 中国历代人物传记资料库：王崇禎（CBDB 315366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315366&o=json
            external_identifier: CBDB:315366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_39p4Z47cj6Pu66BinzwEbo
        status: active
        display_name: 王崇禎
        merged_into_person_id: null
    - claim:
        id: c_j492uCzw40vXzUhwBsyuAn
        subject_person_id: p_QVYnzKQ3Qmo2oe1E9Nx6jF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dpXp9Pj55lckUaapi45jV
          claim_id: c_j492uCzw40vXzUhwBsyuAn
          source_id: s_b74VyMLjfHrZSh78AJLfB7
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第四十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b74VyMLjfHrZSh78AJLfB7
            source_type: api_record
            title: 中国历代人物传记资料库：王紹肅（CBDB 315365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315365&o=json
            external_identifier: CBDB:315365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QVYnzKQ3Qmo2oe1E9Nx6jF
        status: active
        display_name: 王紹肅
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王希烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希烈，明人物。中国历代人物传记资料库（CBDB）以人物编号 126546 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王希烈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_39p4Z47cj6Pu66BinzwEbo | 王崇禎 | accepted |
| ancestors | p_QVYnzKQ3Qmo2oe1E9Nx6jF | 王紹肅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇禎（CBDB 315366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315366&o=json)
- [中国历代人物传记资料库：王紹肅（CBDB 315365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315365&o=json)
- [中国历代人物传记资料库：王希烈（CBDB 126546）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126546&o=json)

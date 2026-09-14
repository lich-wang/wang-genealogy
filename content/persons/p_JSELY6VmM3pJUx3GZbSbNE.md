---
schema: wang-person/v1
id: p_JSELY6VmM3pJUx3GZbSbNE
status: active
merged_into: null
display_name: 王璦玉
cbdb_id: 336576
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8ZrMRPg1X2H29ssbVYo55j
        subject_person_id: p_JSELY6VmM3pJUx3GZbSbNE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璦玉，明人物。隆慶二年進士，籍贯莘縣。（中国历代人物传记资料库 CBDB 336576）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_CbYWAEcLDNyzaqCwReyF0x
          claim_id: c_8ZrMRPg1X2H29ssbVYo55j
          source_id: s_KdVAhRg9fMN4NkqVCDpwi5
          stance: supports
          locator: CBDB:336576
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KdVAhRg9fMN4NkqVCDpwi5
            source_type: api_record
            title: 中国历代人物传记资料库：王璦玉（CBDB 336576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336576&o=json
            external_identifier: CBDB:336576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gcnFGZ8DNUhwdGaxoXdLJQ
        subject_person_id: p_JSELY6VmM3pJUx3GZbSbNE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璦玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yAg9MC853xQNM7jTfpFFtn
          claim_id: c_gcnFGZ8DNUhwdGaxoXdLJQ
          source_id: s_KdVAhRg9fMN4NkqVCDpwi5
          stance: supports
          locator: CBDB:336576
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gSh9qamiak_u-dHEKkXRA4
        subject_person_id: p_tRuYVQrj6CoDxdrV87C339
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JSELY6VmM3pJUx3GZbSbNE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__QbIujiUXLL0uwruf3OppN
          claim_id: c_gSh9qamiak_u-dHEKkXRA4
          source_id: s__5mrct1nb_iQIpRaMBjkx_
          stance: supports
          locator: CBDB：兄弟 王琢玉（205655）之父／母 王國定
          quotation: null
          interpretation_note: 由兄弟关系推断：王璦玉 与 王琢玉 为同胞（CBDB 记「兄」），王琢玉 之父／母即 王璦玉 之父／母。
          source:
            id: s__5mrct1nb_iQIpRaMBjkx_
            source_type: api_record
            title: 中国历代人物传记资料库：王璦玉（CBDB 336576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336576&o=json
            external_identifier: CBDB:336576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tRuYVQrj6CoDxdrV87C339
        status: active
        display_name: 王國定
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_w7alHZWPze3E3U6JRSXENb
        subject_person_id: p_ENp2zBhPwP2aKEL6iVVfT2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JSELY6VmM3pJUx3GZbSbNE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_boHyml8wUGVo8IREPBFboD
          claim_id: c_w7alHZWPze3E3U6JRSXENb
          source_id: s__5mrct1nb_iQIpRaMBjkx_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205655 王琢玉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__5mrct1nb_iQIpRaMBjkx_
            source_type: api_record
            title: 中国历代人物传记资料库：王璦玉（CBDB 336576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336576&o=json
            external_identifier: CBDB:336576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ENp2zBhPwP2aKEL6iVVfT2
        status: active
        display_name: 王琢玉
        merged_into_person_id: null
---

# 王璦玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王璦玉，明人物。隆慶二年進士，籍贯莘縣。（中国历代人物传记资料库 CBDB 336576） | accepted |
| name.primary | 王璦玉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tRuYVQrj6CoDxdrV87C339 | 王國定 | accepted |
| other | p_ENp2zBhPwP2aKEL6iVVfT2 | 王琢玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璦玉（CBDB 336576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336576&o=json)

---
schema: wang-person/v1
id: p_BnqT97Hd2v2PTKqLmsYzS9
status: active
merged_into: null
display_name: 王鼎爵
cbdb_id: 124003
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V1nkFzjRTxEH7qZpta4A12
        subject_person_id: p_BnqT97Hd2v2PTKqLmsYzS9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎爵，明人物。中国历代人物传记资料库（CBDB）以人物编号 124003 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_M3JDHttRseMqygPAv2BV2h
          claim_id: c_V1nkFzjRTxEH7qZpta4A12
          source_id: s_sTWjakHmv6gdMG5qxj4DFL
          stance: supports
          locator: CBDB:124003
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_sTWjakHmv6gdMG5qxj4DFL
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎爵（CBDB 124003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124003&o=json
            external_identifier: CBDB:124003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dwgZJaKdz5Ni4SEwSDBcGN
        subject_person_id: p_BnqT97Hd2v2PTKqLmsYzS9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gN1jGuJYBp89kvD1UJnZv4
          claim_id: c_dwgZJaKdz5Ni4SEwSDBcGN
          source_id: s_sTWjakHmv6gdMG5qxj4DFL
          stance: supports
          locator: CBDB:124003
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_sTWjakHmv6gdMG5qxj4DFL
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎爵（CBDB 124003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124003&o=json
            external_identifier: CBDB:124003
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
        id: c_H03zO8JOfUQCyrsHSKUbdh
        subject_person_id: p_G3rbB3Jtpx8mub8VBuAMQk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BnqT97Hd2v2PTKqLmsYzS9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4DI_XbHDJLXrleFLV9FTaO
          claim_id: c_H03zO8JOfUQCyrsHSKUbdh
          source_id: s_URVyCCy6STy4F6wXLP1PQE
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_URVyCCy6STy4F6wXLP1PQE
            source_type: api_record
            title: 中国历代人物传记资料库：王湧（CBDB 333657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333657&o=json
            external_identifier: CBDB:333657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G3rbB3Jtpx8mub8VBuAMQk
        status: active
        display_name: 王湧
        merged_into_person_id: null
    - claim:
        id: c_mAL4QhHGWWw4OUTDgVoNsb
        subject_person_id: p_tSRaibJgRN2rEB3L9W5CGU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BnqT97Hd2v2PTKqLmsYzS9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z-2Dg9X1BPR1rRBubru7E6
          claim_id: c_mAL4QhHGWWw4OUTDgVoNsb
          source_id: s_MCGC9er5PLXUmWa6RcLVPf
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MCGC9er5PLXUmWa6RcLVPf
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 333656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333656&o=json
            external_identifier: CBDB:333656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tSRaibJgRN2rEB3L9W5CGU
        status: active
        display_name: 王侃
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鼎爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鼎爵，明人物。中国历代人物传记资料库（CBDB）以人物编号 124003 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王鼎爵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_G3rbB3Jtpx8mub8VBuAMQk | 王湧 | accepted |
| ancestors | p_tSRaibJgRN2rEB3L9W5CGU | 王侃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎爵（CBDB 124003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124003&o=json)
- [中国历代人物传记资料库：王侃（CBDB 333656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333656&o=json)
- [中国历代人物传记资料库：王湧（CBDB 333657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333657&o=json)

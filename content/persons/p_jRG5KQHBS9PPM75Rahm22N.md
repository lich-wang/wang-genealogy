---
schema: wang-person/v1
id: p_jRG5KQHBS9PPM75Rahm22N
status: active
merged_into: null
display_name: 王莧
cbdb_id: 22147
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dg3MYxpj59jJWWJCjPRyXd
        subject_person_id: p_jRG5KQHBS9PPM75Rahm22N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莧，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22147 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_RAELoRchYxMf1mjeT3t5tH
          claim_id: c_dg3MYxpj59jJWWJCjPRyXd
          source_id: s_oqwTaKemeB8BsUT8oQpcKF
          stance: supports
          locator: CBDB:22147
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_oqwTaKemeB8BsUT8oQpcKF
            source_type: api_record
            title: 中国历代人物传记资料库：王莧（CBDB 22147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22147&o=json
            external_identifier: CBDB:22147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LkjNur4wM5ZwLSrYAWZMGJ
        subject_person_id: p_jRG5KQHBS9PPM75Rahm22N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zyhTDXGEj5q8Rj8dnA9HM7
          claim_id: c_LkjNur4wM5ZwLSrYAWZMGJ
          source_id: s_oqwTaKemeB8BsUT8oQpcKF
          stance: supports
          locator: CBDB:22147
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_oqwTaKemeB8BsUT8oQpcKF
            source_type: api_record
            title: 中国历代人物传记资料库：王莧（CBDB 22147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22147&o=json
            external_identifier: CBDB:22147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8wP7IP9JTxLKeRXn3thi0w
        subject_person_id: p_4ZFWTE12ciF8FWWzCr37vg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jRG5KQHBS9PPM75Rahm22N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fsiXo8S9LR3-GtOmD9xwqN
          claim_id: c_8wP7IP9JTxLKeRXn3thi0w
          source_id: s_zMU8ad3Vq7W4ersGKrjYcB
          stance: supports
          locator: CBDB 双向互证（子 王莧 ⇄ 父 王保大）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_zMU8ad3Vq7W4ersGKrjYcB
            source_type: api_record
            title: 中国历代人物传记资料库：王保大（CBDB 22145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22145&o=json
            external_identifier: CBDB:22145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4ZFWTE12ciF8FWWzCr37vg
        status: active
        display_name: 王保大
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王莧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王莧，宋人物。中国历代人物传记资料库（CBDB）以人物编号 22147 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王莧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4ZFWTE12ciF8FWWzCr37vg | 王保大 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保大（CBDB 22145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22145&o=json)
- [中国历代人物传记资料库：王莧（CBDB 22147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22147&o=json)

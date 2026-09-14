---
schema: wang-person/v1
id: p_JCfHD6mvyXrG1eXFjXNwRa
status: active
merged_into: null
display_name: 王郭
cbdb_id: 251776
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HWRxyBqPg4sBXkHitSdibr
        subject_person_id: p_JCfHD6mvyXrG1eXFjXNwRa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郭，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251776）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8O5O6ZKox-0DDFgsBgtPkP
          claim_id: c_HWRxyBqPg4sBXkHitSdibr
          source_id: s_7B7xVYJ8nEi4HL8L5681q5
          stance: supports
          locator: CBDB:251776
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7B7xVYJ8nEi4HL8L5681q5
            source_type: api_record
            title: 中国历代人物传记资料库：王郭（CBDB 251776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251776&o=json
            external_identifier: CBDB:251776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tyKTuSQ6wuWEFTn3ycMKzM
        subject_person_id: p_JCfHD6mvyXrG1eXFjXNwRa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JXv497QysUQ7thaN2JKPBe
          claim_id: c_tyKTuSQ6wuWEFTn3ycMKzM
          source_id: s_7B7xVYJ8nEi4HL8L5681q5
          stance: supports
          locator: CBDB:251776
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_womdhMZPVXF3jIfbuuOw26
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JCfHD6mvyXrG1eXFjXNwRa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KcWS4o2HOECJrSzgNBFTll
          claim_id: c_womdhMZPVXF3jIfbuuOw26
          source_id: s_xbiJ9G0_aZ-h4xJy4GYt8X
          stance: supports
          locator: CBDB：兄弟 王本儉（199945）之父／母 王孟良
          quotation: null
          interpretation_note: 由兄弟关系推断：王郭 与 王本儉 为同胞（CBDB 记「兄」），王本儉 之父／母即 王郭 之父／母。
          source:
            id: s_xbiJ9G0_aZ-h4xJy4GYt8X
            source_type: api_record
            title: 中国历代人物传记资料库：王郭（CBDB 251776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251776&o=json
            external_identifier: CBDB:251776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6jw2H1KWkaDQExePFFB6Yj
        status: active
        display_name: 王孟良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hDUBLcuxMICytuuJs8URZR
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JCfHD6mvyXrG1eXFjXNwRa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZOhGrn2h1R60V7D70tBh6u
          claim_id: c_hDUBLcuxMICytuuJs8URZR
          source_id: s_xbiJ9G0_aZ-h4xJy4GYt8X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199945 王本儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xbiJ9G0_aZ-h4xJy4GYt8X
            source_type: api_record
            title: 中国历代人物传记资料库：王郭（CBDB 251776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251776&o=json
            external_identifier: CBDB:251776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9PrBQcpmCF997Qgs2oiS3t
        status: active
        display_name: 王本儉
        merged_into_person_id: null
---

# 王郭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王郭，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251776） | accepted |
| name.primary | 王郭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6jw2H1KWkaDQExePFFB6Yj | 王孟良 | accepted |
| other | p_9PrBQcpmCF997Qgs2oiS3t | 王本儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王郭（CBDB 251776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251776&o=json)

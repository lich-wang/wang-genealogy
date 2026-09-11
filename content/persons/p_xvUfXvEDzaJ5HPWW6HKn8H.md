---
schema: wang-person/v1
id: p_xvUfXvEDzaJ5HPWW6HKn8H
status: active
merged_into: null
display_name: 王翊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xEeBZt5Hu3r3EZ4KzdaAbq
        subject_person_id: p_xvUfXvEDzaJ5HPWW6HKn8H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DPA84zXnqmkoaHerMAssWf
          claim_id: c_xEeBZt5Hu3r3EZ4KzdaAbq
          source_id: s_soacqnXeykSNTbbMw9EGAv
          stance: supports
          locator: CBDB:556539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556539）
          source: &a1
            id: s_soacqnXeykSNTbbMw9EGAv
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 556539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556539&o=json
            external_identifier: CBDB:556539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LcTVSBH97MMAVafvk1oveb
        subject_person_id: p_xvUfXvEDzaJ5HPWW6HKn8H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊，明人物。入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 556539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EaaeFUKF-3ddSRONRpgoyo
          claim_id: c_LcTVSBH97MMAVafvk1oveb
          source_id: s_soacqnXeykSNTbbMw9EGAv
          stance: supports
          locator: CBDB:556539
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OOQJu_zituOJPuE8p0szak
        subject_person_id: p_GzUwRmP9J4qMSsDx68p3so
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xvUfXvEDzaJ5HPWW6HKn8H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yUBTSVR7KCufgOLobAsQXu
          claim_id: c_OOQJu_zituOJPuE8p0szak
          source_id: s_ntH8Pp5wUM7f1Z4x8dTUpB
          stance: supports
          locator: (乾隆)大同府志:三十二卷卷首一卷，lgid=940385：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ntH8Pp5wUM7f1Z4x8dTUpB
            source_type: api_record
            title: 中国历代人物传记资料库：王尚文（CBDB 343888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343888&o=json
            external_identifier: CBDB:343888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GzUwRmP9J4qMSsDx68p3so
        status: active
        display_name: 王尚文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| bio.summary | 王翊，明人物。入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 556539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GzUwRmP9J4qMSsDx68p3so | 王尚文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王尚文（CBDB 343888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343888&o=json)
- [中国历代人物传记资料库：王翊（CBDB 556539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556539&o=json)

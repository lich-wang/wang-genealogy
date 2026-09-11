---
schema: wang-person/v1
id: p_VYq1odoAzsDJtNyT1TGYgS
status: active
merged_into: null
display_name: 王顯一
cbdb_id: 343503
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2QJDFn92yQMz4WUdF397gQ
        subject_person_id: p_VYq1odoAzsDJtNyT1TGYgS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯一，清人物。中国历代人物传记资料库（CBDB）以人物编号 343503 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_QboGhjkqpriDnwkmH26aHX
          claim_id: c_2QJDFn92yQMz4WUdF397gQ
          source_id: s_uaYZqf2VoGtnDdPBofv1hJ
          stance: supports
          locator: CBDB:343503
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_uaYZqf2VoGtnDdPBofv1hJ
            source_type: api_record
            title: 中国历代人物传记资料库：王顯一（CBDB 343503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343503&o=json
            external_identifier: CBDB:343503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:17.973Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mG4jf9FQ6uEAAJHYka7kxV
        subject_person_id: p_VYq1odoAzsDJtNyT1TGYgS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_L54FFNHRP8m2k5drTCXgRY
          claim_id: c_mG4jf9FQ6uEAAJHYka7kxV
          source_id: s_uaYZqf2VoGtnDdPBofv1hJ
          stance: supports
          locator: CBDB:343503
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4601-4700）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_uaYZqf2VoGtnDdPBofv1hJ
            source_type: api_record
            title: 中国历代人物传记资料库：王顯一（CBDB 343503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343503&o=json
            external_identifier: CBDB:343503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:17.973Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ozIy0dUvJGfpcDOugdtN-j
        subject_person_id: p_VYq1odoAzsDJtNyT1TGYgS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Qx8tPaJDp6J13vc9TLoHG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lpj5duZja-UE0yg7wJcWnV
          claim_id: c_ozIy0dUvJGfpcDOugdtN-j
          source_id: s_oh4koM31dgMn3FpegXptqi
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=293886：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oh4koM31dgMn3FpegXptqi
            source_type: api_record
            title: 中国历代人物传记资料库：王承寯（CBDB 690883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690883&o=json
            external_identifier: CBDB:690883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.486Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7Qx8tPaJDp6J13vc9TLoHG
        status: active
        display_name: 王承寯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王顯一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王顯一，清人物。中国历代人物传记资料库（CBDB）以人物编号 343503 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王顯一 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7Qx8tPaJDp6J13vc9TLoHG | 王承寯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承寯（CBDB 690883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690883&o=json)
- [中国历代人物传记资料库：王顯一（CBDB 343503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343503&o=json)

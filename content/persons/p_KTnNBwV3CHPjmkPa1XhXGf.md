---
schema: wang-person/v1
id: p_KTnNBwV3CHPjmkPa1XhXGf
status: active
merged_into: null
display_name: 王祖福
cbdb_id: 213206
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c1XF8dkJVYfNohZNS4QUQC
        subject_person_id: p_KTnNBwV3CHPjmkPa1XhXGf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖福，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213206）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_MyWEBNdw-BD-VFx8Jrr01J
          claim_id: c_c1XF8dkJVYfNohZNS4QUQC
          source_id: s_eT1TG9R8Wuie3Nb4aXAPf2
          stance: supports
          locator: CBDB:213206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eT1TG9R8Wuie3Nb4aXAPf2
            source_type: api_record
            title: 中国历代人物传记资料库：王祖福（CBDB 213206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213206&o=json
            external_identifier: CBDB:213206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jK1fdSd5SNLtpqtxmLccgR
        subject_person_id: p_KTnNBwV3CHPjmkPa1XhXGf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gQnyQ4NAiEzJjgqaqcCRSA
          claim_id: c_jK1fdSd5SNLtpqtxmLccgR
          source_id: s_eT1TG9R8Wuie3Nb4aXAPf2
          stance: supports
          locator: CBDB:213206
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6SVPsQy_cyMLfJxDLlMlyA
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KTnNBwV3CHPjmkPa1XhXGf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2He2WXcZRnVwbCT81SRIqY
          claim_id: c_6SVPsQy_cyMLfJxDLlMlyA
          source_id: s_PA5QIGGUH8p-Jp6uc4ffSU
          stance: supports
          locator: CBDB：兄弟 王問卿（206092）之父／母 王津
          quotation: null
          interpretation_note: 由兄弟关系推断：王祖福 与 王問卿 为同胞（CBDB 记「弟」），王問卿 之父／母即 王祖福 之父／母。
          source:
            id: s_PA5QIGGUH8p-Jp6uc4ffSU
            source_type: api_record
            title: 中国历代人物传记资料库：王祖福（CBDB 213206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213206&o=json
            external_identifier: CBDB:213206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LMXRCBjsfzMqaRuKsJc8Wx
        status: active
        display_name: 王津
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uJYIpfb6VN8XQE04lboKMl
        subject_person_id: p_KTnNBwV3CHPjmkPa1XhXGf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JmivCLGDXGT1Kt8VvJewyg
          claim_id: c_uJYIpfb6VN8XQE04lboKMl
          source_id: s_PA5QIGGUH8p-Jp6uc4ffSU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206092 王問卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PA5QIGGUH8p-Jp6uc4ffSU
            source_type: api_record
            title: 中国历代人物传记资料库：王祖福（CBDB 213206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213206&o=json
            external_identifier: CBDB:213206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v7QTG8DDAv27Aki2Sqpnvw
        status: active
        display_name: 王問卿
        merged_into_person_id: null
---

# 王祖福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祖福，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213206） | accepted |
| name.primary | 王祖福 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LMXRCBjsfzMqaRuKsJc8Wx | 王津 | accepted |
| other | p_v7QTG8DDAv27Aki2Sqpnvw | 王問卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祖福（CBDB 213206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213206&o=json)

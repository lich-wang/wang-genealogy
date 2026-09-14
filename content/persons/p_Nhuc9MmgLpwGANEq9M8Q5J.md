---
schema: wang-person/v1
id: p_Nhuc9MmgLpwGANEq9M8Q5J
status: active
merged_into: null
display_name: 王鑑
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MQpneYmEsCtuH5cmnYgC3b
        subject_person_id: p_Nhuc9MmgLpwGANEq9M8Q5J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uEEhtT4uyHqznzytEBf4p1
          claim_id: c_MQpneYmEsCtuH5cmnYgC3b
          source_id: s_WhRFs2t4o8NdLZg4qvGCdh
          stance: supports
          locator: CBDB:249602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249602）
          source: &a1
            id: s_WhRFs2t4o8NdLZg4qvGCdh
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 249602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249602&o=json
            external_identifier: CBDB:249602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XCd4e4cLdJ2S9BPL39YGBh
        subject_person_id: p_Nhuc9MmgLpwGANEq9M8Q5J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，明人物。成化十一年進士，籍贯鄒縣。（中国历代人物传记资料库 CBDB 249602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rJ4U3KLBR88TJVkZJJ99nP
          claim_id: c_XCd4e4cLdJ2S9BPL39YGBh
          source_id: s_WhRFs2t4o8NdLZg4qvGCdh
          stance: supports
          locator: CBDB:249602
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ViW6FmZkJAl7BdgG-jaKrI
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nhuc9MmgLpwGANEq9M8Q5J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pf2_sMhjqrzV2Sq4brR2eo
          claim_id: c_ViW6FmZkJAl7BdgG-jaKrI
          source_id: s_w_OlLuIGb-lSzJT9d4aqSI
          stance: supports
          locator: CBDB：兄弟 王舉（199783）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王舉 为同胞（CBDB 记「兄」），王舉 之父／母即 王鑑 之父／母。
          source:
            id: s_w_OlLuIGb-lSzJT9d4aqSI
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 249602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249602&o=json
            external_identifier: CBDB:249602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uBzLRGUwS4yvUJPvtC7Mfv
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qICea0ldOE4cpmwB1cBMDJ
        subject_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Nhuc9MmgLpwGANEq9M8Q5J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sAyuNzfvEA3kX3q4Po7Vhb
          claim_id: c_qICea0ldOE4cpmwB1cBMDJ
          source_id: s_w_OlLuIGb-lSzJT9d4aqSI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199783 王舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w_OlLuIGb-lSzJT9d4aqSI
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 249602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249602&o=json
            external_identifier: CBDB:249602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JEUpyam7C1Pm8JC9r4xGZ3
        status: active
        display_name: 王舉
        merged_into_person_id: null
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，明人物。成化十一年進士，籍贯鄒縣。（中国历代人物传记资料库 CBDB 249602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uBzLRGUwS4yvUJPvtC7Mfv | 王傑 | accepted |
| other | p_JEUpyam7C1Pm8JC9r4xGZ3 | 王舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 249602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249602&o=json)

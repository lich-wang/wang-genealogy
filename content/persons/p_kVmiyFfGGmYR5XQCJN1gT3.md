---
schema: wang-person/v1
id: p_kVmiyFfGGmYR5XQCJN1gT3
status: active
merged_into: null
display_name: 王睿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yoLedmkG3e2r79G5musATJ
        subject_person_id: p_kVmiyFfGGmYR5XQCJN1gT3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nsPNrs26fLVfgMXhwG4DK8
          claim_id: c_yoLedmkG3e2r79G5musATJ
          source_id: s_KmMve2AJz5teMXxKJ66QJy
          stance: supports
          locator: CBDB:320073
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320073）
          source: &a1
            id: s_KmMve2AJz5teMXxKJ66QJy
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 320073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320073&o=json
            external_identifier: CBDB:320073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.046Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3oaGEEC2S4FWvhp1KuEYrQ
        subject_person_id: p_kVmiyFfGGmYR5XQCJN1gT3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿，明人物。天順四年進士，籍贯漷縣。（中国历代人物传记资料库 CBDB 320073）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hR9ELW5aP0wxRMCAZOoQEe
          claim_id: c_3oaGEEC2S4FWvhp1KuEYrQ
          source_id: s_KmMve2AJz5teMXxKJ66QJy
          stance: supports
          locator: CBDB:320073
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vmZWyHGAiYC9yTKwF6vEtD
        subject_person_id: p_5U2hJxhV3aXwYznzKRDy72
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kVmiyFfGGmYR5XQCJN1gT3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GSjNRoHuuDFTYLeeErTgum
          claim_id: c_vmZWyHGAiYC9yTKwF6vEtD
          source_id: s_BxsX0NguIJhgCGlpP2jjRW
          stance: supports
          locator: CBDB：兄弟 王聰（198814）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王睿 与 王聰 为同胞（CBDB 记「兄」），王聰 之父／母即 王睿 之父／母。
          source:
            id: s_BxsX0NguIJhgCGlpP2jjRW
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 320073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320073&o=json
            external_identifier: CBDB:320073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5U2hJxhV3aXwYznzKRDy72
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rM4VP76iZa2kOfHPjZ79Nm
        subject_person_id: p_C6bjLHSAeHHQGuDzPtzHHm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kVmiyFfGGmYR5XQCJN1gT3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L9H0ATyFYUu9f1F9c_rN8t
          claim_id: c_rM4VP76iZa2kOfHPjZ79Nm
          source_id: s_BxsX0NguIJhgCGlpP2jjRW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198814 王聰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BxsX0NguIJhgCGlpP2jjRW
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 320073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320073&o=json
            external_identifier: CBDB:320073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C6bjLHSAeHHQGuDzPtzHHm
        status: active
        display_name: 王聰
        merged_into_person_id: null
---

# 王睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睿 | accepted |
| bio.summary | 王睿，明人物。天順四年進士，籍贯漷縣。（中国历代人物传记资料库 CBDB 320073） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5U2hJxhV3aXwYznzKRDy72 | 王俊 | accepted |
| other | p_C6bjLHSAeHHQGuDzPtzHHm | 王聰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王睿（CBDB 320073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320073&o=json)

---
schema: wang-person/v1
id: p_K5LjMqeJMi1bJQpP3h2SuW
status: active
merged_into: null
display_name: 王向
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6xL1EkWi8EKAMSNpGDCR5B
        subject_person_id: p_K5LjMqeJMi1bJQpP3h2SuW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王向
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aAaCegGkq7ik6QFgSR4dFM
          claim_id: c_6xL1EkWi8EKAMSNpGDCR5B
          source_id: s_zM4pAm39VAA78r5cpman3J
          stance: supports
          locator: CBDB:22043
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22043）
          source: &a1
            id: s_zM4pAm39VAA78r5cpman3J
            source_type: api_record
            title: 中国历代人物传记资料库：王向（CBDB 22043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22043&o=json
            external_identifier: CBDB:22043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GsLyWWwRDRizBP4FD1MNPD
        subject_person_id: p_K5LjMqeJMi1bJQpP3h2SuW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王向，宋人物。籍贯汝陰，身份为工於古文，入仕進士，曾任上輕車都尉。（中国历代人物传记资料库 CBDB 22043）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6mRKvc0uVsl1G-2INYY6rU
          claim_id: c_GsLyWWwRDRizBP4FD1MNPD
          source_id: s_zM4pAm39VAA78r5cpman3J
          stance: supports
          locator: CBDB:22043
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VM89x9-g2oSRtOsuKKP3zC
        subject_person_id: p_XLQnjXPKwDsW1NBJZky1dr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K5LjMqeJMi1bJQpP3h2SuW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4FJF67fcCUjpeoJF32sGFU
          claim_id: c_VM89x9-g2oSRtOsuKKP3zC
          source_id: s_zM4pAm39VAA78r5cpman3J
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XLQnjXPKwDsW1NBJZky1dr
        status: active
        display_name: 王平言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ailhAOTgFLe4vHaZuEntqO
        subject_person_id: p_K5LjMqeJMi1bJQpP3h2SuW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_R4UG4zht2eoAoTSsC8JAHB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MVMdJehoH5B4yPtHuvj6nY
          claim_id: c_ailhAOTgFLe4vHaZuEntqO
          source_id: s_60xc-ZReU4EsTIdPMTeE38
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 22043 王向）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_60xc-ZReU4EsTIdPMTeE38
            source_type: api_record
            title: 中国历代人物传记资料库：王冏（CBDB 3940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3940&o=json
            external_identifier: CBDB:3940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R4UG4zht2eoAoTSsC8JAHB
        status: active
        display_name: 王冏
        merged_into_person_id: null
---

# 王向

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王向 | accepted |
| bio.summary | 王向，宋人物。籍贯汝陰，身份为工於古文，入仕進士，曾任上輕車都尉。（中国历代人物传记资料库 CBDB 22043） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLQnjXPKwDsW1NBJZky1dr | 王平言 | accepted |
| other | p_R4UG4zht2eoAoTSsC8JAHB | 王冏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王冏（CBDB 3940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3940&o=json)
- [中国历代人物传记资料库：王向（CBDB 22043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22043&o=json)

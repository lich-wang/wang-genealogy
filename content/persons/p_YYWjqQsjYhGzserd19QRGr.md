---
schema: wang-person/v1
id: p_YYWjqQsjYhGzserd19QRGr
status: active
merged_into: null
display_name: 王稷
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bERnEs9WQzdypkKCtE2VaK
        subject_person_id: p_YYWjqQsjYhGzserd19QRGr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3jx6on1ZcUMX4goxCvREWD
          claim_id: c_bERnEs9WQzdypkKCtE2VaK
          source_id: s_iVHdJTKu9UvjeWAEE9dUAi
          stance: supports
          locator: CBDB:248696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248696）
          source: &a1
            id: s_iVHdJTKu9UvjeWAEE9dUAi
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 248696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248696&o=json
            external_identifier: CBDB:248696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.159Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cKoWjdQoG6Pr9UP2L5m6K3
        subject_person_id: p_YYWjqQsjYhGzserd19QRGr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稷，明人物。成化十一年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 248696）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SFSyEKYkC0xC1PXHsJbXqs
          claim_id: c_cKoWjdQoG6Pr9UP2L5m6K3
          source_id: s_iVHdJTKu9UvjeWAEE9dUAi
          stance: supports
          locator: CBDB:248696
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SmTGdJnWonIEj15MPxETEm
        subject_person_id: p_9B1FXBmYAzycryvGH6JiV6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YYWjqQsjYhGzserd19QRGr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hAhO7jT5tTSfzaEO5CdQOI
          claim_id: c_SmTGdJnWonIEj15MPxETEm
          source_id: s_r6AbxH8ezGxq8rEMZgqRBj
          stance: supports
          locator: CBDB：兄弟 王皋（199701）之父／母 王瑽
          quotation: null
          interpretation_note: 由兄弟关系推断：王稷 与 王皋 为同胞（CBDB 记「兄」），王皋 之父／母即 王稷 之父／母。
          source:
            id: s_r6AbxH8ezGxq8rEMZgqRBj
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 248696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248696&o=json
            external_identifier: CBDB:248696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9B1FXBmYAzycryvGH6JiV6
        status: active
        display_name: 王瑽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_aidRHrnKpALA0qs7Xe-5zg
        subject_person_id: p_YYWjqQsjYhGzserd19QRGr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zp2AZ2hRUut6GtZ8fNkjjs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qvBHpXY0vIZ8XeQjugLNil
          claim_id: c_aidRHrnKpALA0qs7Xe-5zg
          source_id: s_r6AbxH8ezGxq8rEMZgqRBj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199701 王皋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r6AbxH8ezGxq8rEMZgqRBj
            source_type: api_record
            title: 中国历代人物传记资料库：王稷（CBDB 248696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248696&o=json
            external_identifier: CBDB:248696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zp2AZ2hRUut6GtZ8fNkjjs
        status: active
        display_name: 王皋
        merged_into_person_id: null
---

# 王稷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稷 | accepted |
| bio.summary | 王稷，明人物。成化十一年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 248696） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9B1FXBmYAzycryvGH6JiV6 | 王瑽 | accepted |
| other | p_zp2AZ2hRUut6GtZ8fNkjjs | 王皋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王稷（CBDB 248696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248696&o=json)

---
schema: wang-person/v1
id: p_NFa8YxHNQ6Ms3eb7N5iZGG
status: active
merged_into: null
display_name: 王逈
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fn1qZErejU6ngKCspowaxh
        subject_person_id: p_NFa8YxHNQ6Ms3eb7N5iZGG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1TPCrzFgFi6XGvbX9sWAik
          claim_id: c_Fn1qZErejU6ngKCspowaxh
          source_id: s_LXgXT6fkzJvKoz4iKsZs7v
          stance: supports
          locator: CBDB:241846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241846）
          source: &a1
            id: s_LXgXT6fkzJvKoz4iKsZs7v
            source_type: api_record
            title: 中国历代人物传记资料库：王逈（CBDB 241846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241846&o=json
            external_identifier: CBDB:241846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jCQ9qFy5qejeLs7W1yEH24
        subject_person_id: p_NFa8YxHNQ6Ms3eb7N5iZGG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逈，明人物。成化二年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 241846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_E1Jzli4iB5pM7WguxRgNjI
          claim_id: c_jCQ9qFy5qejeLs7W1yEH24
          source_id: s_LXgXT6fkzJvKoz4iKsZs7v
          stance: supports
          locator: CBDB:241846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VIVTB7yvohQ8CJN2xrqFhK
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NFa8YxHNQ6Ms3eb7N5iZGG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rGOANXPWsGGvq52gXp4U6s
          claim_id: c_VIVTB7yvohQ8CJN2xrqFhK
          source_id: s_769ZrT0BQrD0xSazZLAP2p
          stance: supports
          locator: CBDB：兄弟 王得孚（126702）之父／母 王子榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王逈 与 王得孚 为同胞（CBDB 记「兄」），王得孚 之父／母即 王逈 之父／母。
          source:
            id: s_769ZrT0BQrD0xSazZLAP2p
            source_type: api_record
            title: 中国历代人物传记资料库：王逈（CBDB 241846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241846&o=json
            external_identifier: CBDB:241846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eN26ab6vRMdN7dn1bE1CDf
        status: active
        display_name: 王子榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_XbdTtFr8sdrv-AZ4fSjC2x
        subject_person_id: p_7a2QWukYSmEM9zh4AA1o47
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NFa8YxHNQ6Ms3eb7N5iZGG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NMrk4Hyiu0gcfQ62VJTA-p
          claim_id: c_XbdTtFr8sdrv-AZ4fSjC2x
          source_id: s_769ZrT0BQrD0xSazZLAP2p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126702 王得孚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_769ZrT0BQrD0xSazZLAP2p
            source_type: api_record
            title: 中国历代人物传记资料库：王逈（CBDB 241846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241846&o=json
            external_identifier: CBDB:241846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7a2QWukYSmEM9zh4AA1o47
        status: active
        display_name: 王得孚
        merged_into_person_id: null
---

# 王逈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逈 | accepted |
| bio.summary | 王逈，明人物。成化二年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 241846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eN26ab6vRMdN7dn1bE1CDf | 王子榮 | accepted |
| other | p_7a2QWukYSmEM9zh4AA1o47 | 王得孚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逈（CBDB 241846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241846&o=json)

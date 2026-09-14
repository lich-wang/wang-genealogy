---
schema: wang-person/v1
id: p_eN26ab6vRMdN7dn1bE1CDf
status: active
merged_into: null
display_name: 王子榮
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sdTLWJEBR8yaaD6QYJw4bK
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mHC6zTpfj8DutyCReNLY7w
          claim_id: c_sdTLWJEBR8yaaD6QYJw4bK
          source_id: s_tQCs1Q7GMbnW8XM98pK1Rs
          stance: supports
          locator: CBDB:241841
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241841）
          source: &a1
            id: s_tQCs1Q7GMbnW8XM98pK1Rs
            source_type: api_record
            title: 中国历代人物传记资料库：王子榮（CBDB 241841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241841&o=json
            external_identifier: CBDB:241841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wnW3RGokU6NKfPLqjBJvjo
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子榮，明人物。成化二年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 241841）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KKPYrQ_DxlviLRccMsagf1
          claim_id: c_wnW3RGokU6NKfPLqjBJvjo
          source_id: s_tQCs1Q7GMbnW8XM98pK1Rs
          stance: supports
          locator: CBDB:241841
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_pKLOGgEu5PN5v0CpBIQb9-
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7a2QWukYSmEM9zh4AA1o47
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-tL97yTAVk2iTzfJyjDEN
          claim_id: c_pKLOGgEu5PN5v0CpBIQb9-
          source_id: s_tQCs1Q7GMbnW8XM98pK1Rs
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7a2QWukYSmEM9zh4AA1o47
        status: active
        display_name: 王得孚
        merged_into_person_id: null
    - claim:
        id: c_bhY2-SvUJGjx_I3I3Q0c-A
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AJqV7c5hyNaepcUXtEMsiD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQ4xa7u7umDZWnzxT9Xz_s
          claim_id: c_bhY2-SvUJGjx_I3I3Q0c-A
          source_id: s_dhSkG9z6J-Va1ipr-uvbtd
          stance: supports
          locator: CBDB：兄弟 王得孚（126702）之父／母 王子榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王道 与 王得孚 为同胞（CBDB 记「兄」），王得孚 之父／母即 王道 之父／母。
          source:
            id: s_dhSkG9z6J-Va1ipr-uvbtd
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 241847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241847&o=json
            external_identifier: CBDB:241847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AJqV7c5hyNaepcUXtEMsiD
        status: active
        display_name: 王道
        merged_into_person_id: null
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
        id: p_NFa8YxHNQ6Ms3eb7N5iZGG
        status: active
        display_name: 王逈
        merged_into_person_id: null
    - claim:
        id: c_9E8kIwOaJTejhuNlxuOx77
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_btjFhQUd8gZH3MSNL2CygU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AWRRVar67j3U64xx__kx5d
          claim_id: c_9E8kIwOaJTejhuNlxuOx77
          source_id: s_Wc4EXN8zdKiLwSIgdFT75D
          stance: supports
          locator: CBDB：兄弟 王得孚（126702）之父／母 王子榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王貌 与 王得孚 为同胞（CBDB 记「兄」），王得孚 之父／母即 王貌 之父／母。
          source:
            id: s_Wc4EXN8zdKiLwSIgdFT75D
            source_type: api_record
            title: 中国历代人物传记资料库：王貌（CBDB 241845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241845&o=json
            external_identifier: CBDB:241845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_btjFhQUd8gZH3MSNL2CygU
        status: active
        display_name: 王貌
        merged_into_person_id: null
    - claim:
        id: c_5oix_mHgyZ2yvlvTFShSLy
        subject_person_id: p_eN26ab6vRMdN7dn1bE1CDf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uGE9BKx8cB8q7vxNwL7651
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nEPzMbQHKW2O99q2h9l5M_
          claim_id: c_5oix_mHgyZ2yvlvTFShSLy
          source_id: s_dV9S3_faAPNbXBKrXKQsqJ
          stance: supports
          locator: CBDB：兄弟 王得孚（126702）之父／母 王子榮
          quotation: null
          interpretation_note: 由兄弟关系推断：王宛 与 王得孚 为同胞（CBDB 记「弟」），王得孚 之父／母即 王宛 之父／母。
          source:
            id: s_dV9S3_faAPNbXBKrXKQsqJ
            source_type: api_record
            title: 中国历代人物传记资料库：王宛（CBDB 241844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241844&o=json
            external_identifier: CBDB:241844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uGE9BKx8cB8q7vxNwL7651
        status: active
        display_name: 王宛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子榮 | accepted |
| bio.summary | 王子榮，明人物。成化二年進士，籍贯涇縣。（中国历代人物传记资料库 CBDB 241841） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7a2QWukYSmEM9zh4AA1o47 | 王得孚 | accepted |
| children | p_AJqV7c5hyNaepcUXtEMsiD | 王道 | accepted |
| children | p_NFa8YxHNQ6Ms3eb7N5iZGG | 王逈 | accepted |
| children | p_btjFhQUd8gZH3MSNL2CygU | 王貌 | accepted |
| children | p_uGE9BKx8cB8q7vxNwL7651 | 王宛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 241847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241847&o=json)
- [中国历代人物传记资料库：王逈（CBDB 241846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241846&o=json)
- [中国历代人物传记资料库：王貌（CBDB 241845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241845&o=json)
- [中国历代人物传记资料库：王宛（CBDB 241844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241844&o=json)
- [中国历代人物传记资料库：王子榮（CBDB 241841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241841&o=json)
